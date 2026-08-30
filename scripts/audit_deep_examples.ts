import fs from 'fs';
import path from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { MASTER_EXAMPLES } from '../src/data/masterExamplesDictionary';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
const issues: Array<{ file: string; term: string; kind: string; detail: string }> = [];
const warnings: Array<{ file: string; term: string; kind: string; detail: string }> = [];
const requiredLevels = ['A1', 'A2-B1', 'B2', 'C1-C2'];
// Aviso: /\bTODO\b/i casa com a palavra portuguesa "todo" (todo o grupo,
// todo mundo...), gerando falso positivo. Placeholders reais são maiúsculos.
const meta = [/\ble mot\b(?! juste)/i, /\ble terme\b/i, /\bcette expression\b/i, /\bs'utilise\b/i, /\bveut dire\b/i, /\bse traduit\b/i];
const placeholder = [/\bxxx\b/i, /\bTODO\b/, /\bFIXME\b/i, /___+/, /\[\s*(?:placeholder|todo|exemplo|texto)\s*\]/i, /\{\s*(?:placeholder|todo|exemplo|texto)\s*\}/i];
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’ʼ‘]/g, "'").replace(/\s+/g, ' ').trim();
const files = [
  ...fs.readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f)).map((f) => path.join(DATA_DIR, f)),
  ...fs.readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f)).map((f) => path.join(GUIDE_DIR, f)),
];
let entries = 0;
let totalExamples = 0;
let entriesWithoutFour = 0;
const terms = new Set<string>();
const inspect = (filePath: string) => {
  const file = path.relative(process.cwd(), filePath);
  let data: any;
  try { data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '')); }
  catch (error) { issues.push({ file, term: '(arquivo)', kind: 'JSON inválido', detail: String(error) }); return; }
  const vocab = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  for (const entry of vocab) {
    entries++;
    const term = String(entry?.term || '').trim();
    if (!term) { issues.push({ file, term: '(vazio)', kind: 'termo ausente', detail: '' }); continue; }
    terms.add(fold(term));
    const examples = Array.isArray(entry.examples) ? entry.examples : [];
    totalExamples += examples.length;
    if (!entry.definitionPt?.trim()) issues.push({ file, term, kind: 'tradução pt ausente', detail: '' });
    if (!entry.definitionFr?.trim()) issues.push({ file, term, kind: 'definição fr ausente', detail: '' });
    if (examples.length !== 4) { entriesWithoutFour++; issues.push({ file, term, kind: 'sem exatamente 4 exemplos', detail: `tem ${examples.length}` }); continue; }
    const levels = examples.map((e: any) => String(e?.level || '').trim());
    if (levels.join('|') !== requiredLevels.join('|')) warnings.push({ file, term, kind: 'ordem de níveis não canônica', detail: levels.join(', ') });
    const frSeen = new Set<string>(); const ptSeen = new Set<string>();
    examples.forEach((e: any, i: number) => {
      const fr = String(e?.fr || '').trim(); const pt = String(e?.pt || '').trim();
      if (!fr || !pt) issues.push({ file, term, kind: `exemplo ${i + 1} vazio`, detail: `${fr} / ${pt}` });
      if (frSeen.has(fold(fr)) || ptSeen.has(fold(pt))) issues.push({ file, term, kind: `exemplo ${i + 1} duplicado`, detail: fr });
      frSeen.add(fold(fr)); ptSeen.add(fold(pt));
      if (meta.some((p) => p.test(fr))) issues.push({ file, term, kind: `exemplo ${i + 1} com meta-linguagem`, detail: fr });
      if (placeholder.some((p) => p.test(fr) || p.test(pt))) issues.push({ file, term, kind: `exemplo ${i + 1} com placeholder`, detail: `${fr} / ${pt}` });
      if (fr.length < 12 || pt.length < 8) warnings.push({ file, term, kind: `exemplo ${i + 1} muito curto`, detail: `${fr} / ${pt}` });
    });
  }
};
for (const file of files) inspect(file);
let masterEntries = 0; let masterWithoutFour = 0;
for (const [term, examples] of Object.entries(MASTER_EXAMPLES)) {
  masterEntries++;
  if (!Array.isArray(examples) || examples.length !== 4) { masterWithoutFour++; issues.push({ file: 'src/data/masterExamplesDictionary.ts', term, kind: 'mestre sem exatamente 4 exemplos', detail: `tem ${Array.isArray(examples) ? examples.length : 0}` }); continue; }
  const levels = examples.map((e: any) => String(e?.level || '').trim());
  if (levels.join('|') !== requiredLevels.join('|')) warnings.push({ file: 'src/data/masterExamplesDictionary.ts', term, kind: 'ordem de níveis não canônica', detail: levels.join(', ') });
  examples.forEach((e: any, i: number) => {
    const fr = String(e?.fr || '').trim(); const pt = String(e?.pt || '').trim();
    if (!fr || !pt) issues.push({ file: 'src/data/masterExamplesDictionary.ts', term, kind: `exemplo ${i + 1} vazio`, detail: `${fr} / ${pt}` });
    if (meta.some((p) => p.test(fr))) issues.push({ file: 'src/data/masterExamplesDictionary.ts', term, kind: `exemplo ${i + 1} com meta-linguagem`, detail: fr });
    if (placeholder.some((p) => p.test(fr) || p.test(pt))) issues.push({ file: 'src/data/masterExamplesDictionary.ts', term, kind: `exemplo ${i + 1} com placeholder`, detail: `${fr} / ${pt}` });
  });
}
const bank = getWordBankEntries();
const masterKeys = new Set(Object.keys(MASTER_EXAMPLES).map(fold));
const bankMissingMaster = bank.filter((e) => !terms.has(fold(e.term)) && !masterKeys.has(fold(e.term))).length;
const report = { generatedAt: new Date().toISOString(), files: files.length, totals: { vocabularyEntries: entries, totalExamples, entriesWithoutFour, masterEntries, masterWithoutFour, bankMissingMaster }, issueCount: issues.length, warningCount: warnings.length, issues, warnings };
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'deep_examples_report.json'), JSON.stringify(report, null, 2));
console.log(`ARQUIVOS: ${files.length}`);
console.log(`ENTRADAS DOURADAS: ${entries} | sem 4 exemplos: ${entriesWithoutFour}`);
console.log(`EXEMPLOS ANALISADOS: ${totalExamples}`);
console.log(`ENTRADAS MESTRAS: ${masterEntries} | sem 4 exemplos: ${masterWithoutFour}`);
console.log(`PROBLEMAS: ${issues.length}`);
console.log(`AVISOS EDITORIAIS: ${warnings.length}`);
for (const i of issues.slice(0, 100)) console.log(`[ERRO] ${i.file} · ${i.term} · ${i.kind} · ${i.detail}`);
for (const w of warnings.slice(0, 30)) console.log(`[AVISO] ${w.file} · ${w.term} · ${w.kind} · ${w.detail}`);
console.log('Relatório salvo em scripts/deep_examples_report.json');
process.exitCode = issues.length ? 1 : 0;
