/**
 * Relatório de lacunas ("gap") da Fase 2 — jardim de palavras.
 *
 * Lista, por nível e cidade sugerida, as palavras do banco CEFR (16.796)
 * que ainda não aparecem nos parágrafos das aulas. É a "lista de compras"
 * do enriquecimento: cada lote pega um pedaço desta lista, tece as palavras
 * em cenas naturais do texto canônico e cura os 4 exemplos (backlog) para
 * torná-las clicáveis.
 *
 * Uso:
 *   bun run scripts/gap_report.ts
 *   bun run gap
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { buildNgramSet, termIsCovered, tokenizeText } from '../src/utils/frenchMorphology';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const OUT_MD = join(process.cwd(), 'scripts', 'gap_report.md');

interface CityInfo {
  lessons: number;
  levels: Record<string, number>;
  text: string;
}

const files = readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
const GUIDE_DIR = join(DATA_DIR, 'city_guides');
const guideFiles = readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f));
const allFiles = [
  ...files.map((f) => join(DATA_DIR, f)),
  ...guideFiles.map((f) => join(GUIDE_DIR, f)),
];
const cities = new Map<string, CityInfo>();

for (const filePath of allFiles) {
  let data: any;
  try {
    data = JSON.parse(readFileSync(filePath, 'utf8'));
  } catch {
    continue;
  }
  const fileName = filePath.split('/').pop() || filePath;
  const city: string = data.cityId || fileName.replace(/_(lesson|guide)_\d+\.json$/, '');
  if (!cities.has(city)) cities.set(city, { lessons: 0, levels: {}, text: '' });
  const info = cities.get(city)!;
  info.lessons += 1;
  const paras: Array<{ fr?: string }> = data.paragraphs || [];
  info.text += '\n' + paras.map((p) => p.fr || '').join('\n');
}

const allNgrams = buildNgramSet(tokenizeText([...cities.values()].map((i) => i.text).join('\n')));

/** Cidade-sede por nível: a cidade cujo nível de aulas é o lar natural da palavra. */
const CITY_BY_LEVEL: Record<string, string> = {
  A1: 'paris',
  A2: 'lille',
  B1: 'tours',
  B2: 'toulouse',
  C1: 'marseille',
  C2: 'nice',
};

function suggestCity(level: string): string {
  return CITY_BY_LEVEL[level] || 'paris';
}

const entries = getWordBankEntries();
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

interface Missing {
  term: string;
  pt: string;
  level: string;
  city: string;
}

const missing: Missing[] = [];
for (const e of entries) {
  if (termIsCovered(e.term, allNgrams)) continue;
  missing.push({ term: e.term, pt: e.pt, level: e.level, city: suggestCity(e.level) });
}
missing.sort(
  (a, b) =>
    levels.indexOf(a.level) - levels.indexOf(b.level) || a.term.localeCompare(b.term),
);

const perCity: Record<string, number> = {};
for (const m of missing) perCity[m.city] = (perCity[m.city] || 0) + 1;

console.log('GAP REPORT — jardim de palavras');
console.log('TEXT FILES', allFiles.length);
console.log('LESSONS', files.length);
console.log('GUIDES', guideFiles.length);
console.log('TOTAL_BANK', entries.length);
console.log('COVERED', entries.length - missing.length);
console.log('MISSING', missing.length);
for (const lvl of levels) {
  console.log(`LEVEL ${lvl}: missing ${missing.filter((m) => m.level === lvl).length}`);
}
console.log('POR CIDADE SUGERIDA:');
for (const [c, n] of Object.entries(perCity).sort((a, b) => b[1] - a[1])) {
  console.log('  ', c, n);
}

const lines: string[] = [];
lines.push('# Relatório de lacunas — Fase 2 (jardim de palavras)');
lines.push('');
lines.push(
  `Banco: ${entries.length} palavras · Cobertas em aulas e guias: ${
    entries.length - missing.length
  } · **Faltantes: ${missing.length}**`,
);
lines.push('');
lines.push('| Nível | Faltantes |');
lines.push('|---|---|');
for (const lvl of levels) {
  lines.push(`| ${lvl} | ${missing.filter((m) => m.level === lvl).length} |`);
}
lines.push('');
lines.push('## Lista de compras (por nível, cidade sugerida)');
lines.push('');
lines.push('| Palavra | Tradução | Nível | Cidade sugerida |');
lines.push('|---|---|---|---|');
for (const m of missing) {
  lines.push(`| ${m.term} | ${m.pt} | ${m.level} | ${m.city} |`);
}
writeFileSync(OUT_MD, lines.join('\n') + '\n');
console.log('Relatório salvo em scripts/gap_report.md');
