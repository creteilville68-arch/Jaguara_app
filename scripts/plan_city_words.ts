/**
 * Plans the "write by city" vocabulary distribution.
 *
 * 1. Finds the words that do NOT appear anywhere in the lesson texts yet
 *    (the real writing backlog).
 * 2. Assigns those words to cities according to CEFR level (advanced levels
 *    concentrate on their own cities).
 * 3. Dumps per-city lists so passages can be written city by city.
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { normalizeToLemma } from '../src/utils/lemmaHelper';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const OUT = join(process.cwd(), 'scripts', 'city_words_to_write.json');

type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const LEVEL_CITIES: Record<Level, string[]> = {
  A1: ['paris', 'amiens'],
  A2: ['amiens', 'lille', 'mont-saint-michel'],
  B1: ['mont-saint-michel', 'tours', 'bordeaux'],
  B2: ['toulouse', 'lyon'],
  C1: ['marseille', 'strasbourg'],
  C2: ['nice'],
};

const ALL_CITIES = ['paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux', 'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice'];

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function stripArticles(s: string): string {
  return s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la |de l'|de l’|au |aux )/, '').trim();
}

function candidates(term: string): string[] {
  const base = fold(term);
  const lemma = fold(normalizeToLemma(term));
  const out = new Set<string>();
  for (const c of [base, lemma, stripArticles(base), stripArticles(lemma)]) {
    if (c) out.add(c);
  }
  return Array.from(out);
}

// Concatenate every city's lesson text.
const cityText: Record<string, string> = {};
let globalText = '';
for (const f of readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f))) {
  let data: any;
  try {
    data = JSON.parse(readFileSync(join(DATA_DIR, f), 'utf8'));
  } catch {
    continue;
  }
  const cityId: string = data.cityId || '';
  const frText = (data.paragraphs || []).map((p: any) => p.fr || '').join('\n');
  cityText[cityId] = (cityText[cityId] || '') + '\n' + frText;
  globalText += '\n' + frText;
}
const foldedGlobal = fold(globalText);

// Bank entries that do NOT appear anywhere yet.
const allEntries = getWordBankEntries();
const globallyMissing: Array<{ term: string; pt: string; level: string }> = allEntries
  .filter((e) => !candidates(e.term).some((c) => foldedGlobal.includes(c)))
  .map((e) => ({ term: e.term, pt: e.pt, level: LEVEL_ORDER.includes(e.level as Level) ? e.level : 'A1' }));

// Group by level, stable order.
const byLevel: Record<string, typeof globallyMissing> = {};
for (const w of globallyMissing) {
  (byLevel[w.level] = byLevel[w.level] || []).push(w);
}
for (const lvl of LEVEL_ORDER) {
  (byLevel[lvl] || []).sort((a, b) => fold(a.term).localeCompare(fold(b.term)));
}

// Round-robin each level's missing words across that level's cities.
const toWrite: Record<string, typeof globallyMissing> = {};
for (const c of ALL_CITIES) toWrite[c] = [];
for (const lvl of LEVEL_ORDER) {
  const cities = LEVEL_CITIES[lvl];
  (byLevel[lvl] || []).forEach((w, i) => {
    toWrite[cities[i % cities.length]].push(w);
  });
}

console.log('GLOBAL_MISSING', globallyMissing.length);
console.log('CITY\tTO_WRITE');
for (const c of ALL_CITIES) console.log(`${c}\t${toWrite[c].length}`);

writeFileSync(OUT, JSON.stringify(toWrite, null, 2));
console.log('WROTE', OUT);

console.log('--- PARIS TO WRITE (first 100) ---');
console.log(toWrite['paris'].slice(0, 100).map((w) => `${w.term}\t${w.pt}`).join('\n'));
