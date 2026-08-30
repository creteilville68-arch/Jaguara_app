/**
 * Conta palavras únicas clicáveis com 4 exemplos, cidade por cidade.
 *
 * Usa o MESMO parser do app (parseClickableSentence): uma palavra só é
 * considerada clicável se o modal abre com os 4 exemplos progressivos.
 * Deduplicação GLOBAL por lema (termo canônico do dicionário).
 *
 * O script roda por cidade (o scan completo estoura o timeout) e acumula os
 * resultados num JSON compartilhado (scripts/unique_clickable_report.json):
 *
 *   bun run scripts/count_unique_clickable.ts paris
 *   bun run scripts/count_unique_clickable.ts amiens
 *   ... (todas as cidades)
 *   bun run scripts/count_unique_clickable.ts --report
 */
import fs from 'fs';
import path from 'path';
import { parseClickableSentence, hasFourCompleteExamples, fold } from '../src/utils/clickableParser';
import { getWordBankLookupSize } from '../src/data/wordBankLookup';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
const REPORT_PATH = path.join(process.cwd(), 'scripts', 'unique_clickable_report.json');
const META_GOAL = 15400;

const ARG = (process.argv[2] || '').trim().toLowerCase();

interface CityData {
  clickable: string[];
  goldNo4: string[];
}

interface Report {
  bankSize: number;
  byCity: Record<string, CityData>;
}

function loadReport(): Report {
  try {
    const raw = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
    return {
      bankSize: typeof raw.bankSize === 'number' ? raw.bankSize : getWordBankLookupSize(),
      byCity: raw.byCity || {},
    };
  } catch {
    return { bankSize: getWordBankLookupSize(), byCity: {} };
  }
}

function scanCity(cityKey: string): CityData {
  const clickable = new Set<string>();
  const goldNo4 = new Set<string>();

  const cityPrefix = cityKey.replace(/-/g, '_');
  const lessonFiles = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.startsWith(cityPrefix + '_lesson_') && /_lesson_\d+\.json$/.test(f));
  const guideFiles = fs.existsSync(GUIDE_DIR)
    ? fs.readdirSync(GUIDE_DIR).filter((f) => f.startsWith(cityPrefix + '_guide_') && /_guide_\d+\.json$/.test(f))
    : [];

  const scanFile = (filePath: string): void => {
    let data: any;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
    } catch {
      return;
    }
    const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
    const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];
    for (const para of paragraphs) {
      const fr = (para?.fr || '').toString().trim();
      if (!fr) continue;
      const tokens = parseClickableSentence(fr, vocabDict);
      for (const token of tokens) {
        if (!token.isMatch) continue;
        const entry = token.dictionaryEntry;
        const term = (entry?.term || token.text || '').trim();
        if (!term) continue;
        const key = fold(term);
        if (hasFourCompleteExamples(entry?.examples)) {
          clickable.add(key);
        } else if (token.isDictionaryTerm) {
          goldNo4.add(key);
        }
      }
    }
  };

  for (const f of lessonFiles) scanFile(path.join(DATA_DIR, f));
  for (const f of guideFiles) scanFile(path.join(GUIDE_DIR, f));

  return { clickable: Array.from(clickable).sort(), goldNo4: Array.from(goldNo4).sort() };
}

if (ARG === '--report' || ARG === '') {
  // Relatório consolidado a partir do JSON acumulado.
  const report = loadReport();
  const bankSize = report.bankSize || getWordBankLookupSize();
  const allClickable = new Set<string>();
  const allGoldNo4 = new Set<string>();
  const byLevel: Record<string, Set<string>> = {};

  console.log('==================================================');
  console.log('PALAVRAS ÚNICAS CLICÁVEIS COM 4 EXEMPLOS (ACUMULADO)');
  console.log('==================================================');
  console.log('');
  console.log('Banco CEFR total (palavras únicas):', bankSize.toLocaleString('pt-BR'));
  console.log('Meta do projeto (palavras clicáveis): 15.400+');
  console.log('');

  console.log('--- Por cidade (lemas únicos) ---');
  for (const [city, d] of Object.entries(report.byCity).sort()) {
    const n = d.clickable.length;
    console.log(`  ${city.padEnd(18)} ${n.toLocaleString('pt-BR')}`);
    for (const k of d.clickable) allClickable.add(k);
    for (const k of d.goldNo4) allGoldNo4.add(k);
  }
  console.log('');

  // Nível por palavra: recalculado varrendo de novo cada cidade? Não — nível
  // fica registrado no report de cada cidade se adicionarmos. (mantido simples)
  console.log(`--- TOTAL (aulas + guias, lemas únicos) ---`);
  console.log(`  Únicas clicáveis com 4 exemplos : ${allClickable.size.toLocaleString('pt-BR')}`);
  console.log(`  Douradas SEM 4 exemplos (erro)  : ${allGoldNo4.size}`);
  if (allGoldNo4.size > 0) console.log(`    ${Array.from(allGoldNo4).slice(0, 30).join(', ')}`);
  console.log('');
  const pct = ((allClickable.size / bankSize) * 100).toFixed(1);
  console.log(`Cobertura do banco: ${allClickable.size.toLocaleString('pt-BR')} / ${bankSize.toLocaleString('pt-BR')} (${pct}%)`);
  console.log(
    allClickable.size >= META_GOAL
      ? '✅ META ATINGIDA (>= 15.400)'
      : `⚠️ Faltam ${(META_GOAL - allClickable.size).toLocaleString('pt-BR')} palavras para a meta de 15.400`
  );
  void byLevel;
} else {
  const cityKey = ARG.replace(/_/g, '-');
  const report = loadReport();
  const data = scanCity(cityKey);
  report.byCity[cityKey] = data;
  report.bankSize = report.bankSize || getWordBankLookupSize();
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  const total = new Set<string>(Object.values(report.byCity).flatMap((d) => d.clickable));
  console.log(`[${cityKey}] únicas clicáveis com 4 exemplos: ${data.clickable.length}`);
  console.log(`[${cityKey}] douradas sem 4 exemplos: ${data.goldNo4.length}`);
  console.log(`Acumulado até agora: ${total.size.toLocaleString('pt-BR')} lemas únicos`);
  if (data.goldNo4.length > 0) console.log(`  sem 4 exemplos: ${data.goldNo4.slice(0, 20).join(', ')}`);
}
