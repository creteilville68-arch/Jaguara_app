/**
 * Mede a contribuição marginal de palavras únicas clicáveis de cada guia novo.
 *
 * Para cada guia da leva:
 *   - parseia os parágrafos com o clickableParser (palavras destacadas com 4 exemplos);
 *   - conta quantos lemas clicáveis únicos o guia acrescenta ao total global
 *     (lemas que NENHUM outro texto — aulas + guias — já cobria antes);
 *   - atualiza a cobertura depois de cada guia, para que o próximo só conte
 *     o que ele realmente acrescenta.
 *
 * Uso: bun scripts/measure_guide_batch.ts <cidade>_guide_<N>.json [mais arquivos...]
 */
import fs from 'fs';
import path from 'path';
import { parseClickableSentence, hasFourCompleteExamples, fold } from '../src/utils/clickableParser';
import { getWordBankEntries } from '../src/data/wordBank';
import { buildNgramSet, termIsCovered, tokenizeText } from '../src/utils/frenchMorphology';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
const REPORT_PATH = path.join(process.cwd(), 'scripts', 'unique_clickable_report.json');

const newFiles = process.argv.slice(2);
if (newFiles.length === 0) {
  console.error('Passe os arquivos dos guias novos: bun scripts/measure_guide_batch.ts <city>_guide_<N>.json ...');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1) Baseline: cobertura morfológica de TODOS os textos existentes (sem a leva)
// ---------------------------------------------------------------------------
function loadAllTextFiles(exclude: string[]): string[] {
  const excludeSet = new Set(exclude.map((f) => path.basename(f)));
  const files: string[] = fs
    .readdirSync(DATA_DIR)
    .filter((f) => /_lesson_\d+\.json$/.test(f))
    .map((f) => path.join(DATA_DIR, f));
  if (fs.existsSync(GUIDE_DIR)) {
    files.push(
      ...fs
        .readdirSync(GUIDE_DIR)
        .filter((f) => /_guide_\d+\.json$/.test(f) && !excludeSet.has(f))
        .map((f) => path.join(GUIDE_DIR, f))
    );
  }
  return files;
}

const files = loadAllTextFiles(newFiles);
let allText = '';
for (const f of files) {
  try {
    const data = JSON.parse(fs.readFileSync(f, 'utf8'));
    const paras: Array<{ fr?: string }> = data.paragraphs || [];
    allText += '\n' + paras.map((p) => p.fr || '').join('\n');
  } catch {
    /* ignore */
  }
}
const ngrams = buildNgramSet(tokenizeText(allText));
const bankEntries = getWordBankEntries();
const bankByFold = new Map<string, string>();
for (const e of bankEntries) bankByFold.set(fold(e.term), e.term);

let coveredBaseline = 0;
for (const e of bankEntries) {
  if (termIsCovered(e.term, ngrams)) coveredBaseline++;
}

// ---------------------------------------------------------------------------
// 2) Por guia: contribuição marginal de lemas clicáveis únicos
// ---------------------------------------------------------------------------
const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
const byCity = report.byCity as Record<string, { clickable: string[] }>;

const grandCovered = new Set<string>(); // bank lemmas covered em qualquer texto
for (const e of bankEntries) {
  if (termIsCovered(e.term, ngrams)) grandCovered.add(fold(e.term));
}

console.log(`Baseline (textos existentes): ${coveredBaseline} lemas do banco cobertos`);

let grandTotal = coveredBaseline;
const perGuide: { file: string; new: number; list: string[] }[] = [];
const cityAdditions: Record<string, Set<string>> = {};

for (const f of newFiles) {
  const filePath = path.join(GUIDE_DIR, f);
  if (!fs.existsSync(filePath)) {
    console.log(`${f}: ARQUIVO NÃO ENCONTRADO`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const city = data.cityId || f.split('_')[0];
  const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];

  // lemas clicáveis únicos do guia
  const guideLemmas = new Set<string>();
  for (const para of paragraphs) {
    const fr = (para?.fr || '').toString().trim();
    if (!fr) continue;
    const tokens = parseClickableSentence(fr, vocabDict);
    for (const token of tokens) {
      if (!token.isMatch) continue;
      const entry = token.dictionaryEntry;
      const term = (entry?.term || token.text || '').trim();
      if (!term) continue;
      if (!hasFourCompleteExamples(entry?.examples)) continue;
      guideLemmas.add(fold(term));
    }
  }

  // marginais: ainda não cobertos em NENHUM texto
  const marginal = Array.from(guideLemmas).filter((k) => !grandCovered.has(k));
  perGuide.push({ file: f, new: marginal.length, list: marginal });

  // acrescenta à cobertura global (aproximação: lemas do guia passam a contar)
  for (const k of guideLemmas) grandCovered.add(k);
  grandTotal += marginal.length;

  // atualiza report por cidade (mantém o acumulado consistente)
  const cur = byCity[city] || { clickable: [] };
  const merged = new Set(cur.clickable || []);
  let addedToCity = 0;
  for (const k of guideLemmas) {
    if (!merged.has(k)) {
      merged.add(k);
      addedToCity++;
    }
  }
  cityAdditions[city] = cityAdditions[city] || new Set<string>();
  for (const k of Array.from(guideLemmas)) cityAdditions[city].add(k);
  byCity[city] = { ...cur, clickable: Array.from(merged).sort() };

  console.log(
    `${f.padEnd(38)} +${String(marginal.length).padStart(3)} palavras únicas novas  (total global: ${grandTotal})`
  );
}

// ---------------------------------------------------------------------------
// 3) Relatório final
// ---------------------------------------------------------------------------
console.log('');
console.log('── Relatório por guia (palavras únicas clicáveis que ele acrescenta) ──');
for (const g of perGuide) {
  console.log(`\n${g.file}  →  +${g.new} palavras únicas`);
  if (g.list.length > 0) console.log('   ' + g.list.join(' · '));
}
console.log('');
console.log(`TOTAL da leva: +${perGuide.reduce((a, g) => a + g.new, 0)} palavras únicas novas`);
console.log(`Estimativa global pós-leva: ${grandTotal} / ${bankEntries.length} (meta: 15.400)`);
console.log(grandTotal >= 15400 ? '✅ META 15.400 ATINGIDA' : `⚠️ Faltam ${15400 - grandTotal} para a meta de 15.400`);

// Persiste as adições por cidade no report acumulado
for (const [city, additions] of Object.entries(cityAdditions)) {
  const cur = byCity[city] || { clickable: [] };
  const merged = new Set(cur.clickable || []);
  for (const k of additions) merged.add(k);
  byCity[city] = { ...cur, clickable: Array.from(merged).sort() };
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
console.log('\nReport atualizado em', REPORT_PATH);
