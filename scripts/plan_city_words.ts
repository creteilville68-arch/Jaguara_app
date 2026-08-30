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
import { buildNgramSet, fold, termIsCovered, tokenizeText } from '../src/utils/frenchMorphology';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const OUT = join(process.cwd(), 'scripts', 'city_words_to_write.json');

type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const ALL_CITIES = [
  'paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux',
  'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice',
];

// Concatenate every lesson and encyclopedia guide text. The planning list
// must use the same corpus as the coverage report, otherwise it can assign
// words that are already present in a guide.
const GUIDE_DIR = join(DATA_DIR, 'city_guides');
const textFiles = [
  ...readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f)).map((f) => join(DATA_DIR, f)),
  ...readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f)).map((f) => join(GUIDE_DIR, f)),
];
let globalText = '';
for (const filePath of textFiles) {
  let data: any;
  try {
    data = JSON.parse(readFileSync(filePath, 'utf8'));
  } catch {
    continue;
  }
  globalText += '\n' + (data.paragraphs || []).map((p: any) => p.fr || '').join('\n');
}
const ngrams = buildNgramSet(tokenizeText(globalText));

// Bank entries that do NOT appear anywhere yet (morphological matching).
const allEntries = getWordBankEntries();
const globallyMissing: Array<{ term: string; pt: string; level: string }> = allEntries
  .filter((e) => !termIsCovered(e.term, ngrams))
  .map((e) => ({ term: e.term, pt: e.pt, level: LEVEL_ORDER.includes(e.level as Level) ? e.level : 'A1' }));

// Group by level, stable order.
const byLevel: Record<string, typeof globallyMissing> = {};
for (const w of globallyMissing) {
  (byLevel[w.level] = byLevel[w.level] || []).push(w);
}
for (const lvl of LEVEL_ORDER) {
  (byLevel[lvl] || []).sort((a, b) => fold(a.term).localeCompare(fold(b.term)));
}

// Round-robin the complete backlog across every city. Each city can host
// advanced vocabulary in the encyclopedia; the assignment is intentionally
// balanced instead of tying a CEFR level to one fixed city.
const toWrite: Record<string, typeof globallyMissing> = {};
for (const c of ALL_CITIES) toWrite[c] = [];
let assignmentIndex = 0;
for (const lvl of LEVEL_ORDER) {
  for (const word of byLevel[lvl] || []) {
    toWrite[ALL_CITIES[assignmentIndex % ALL_CITIES.length]].push(word);
    assignmentIndex += 1;
  }
}

console.log('GLOBAL_MISSING', globallyMissing.length);
console.log('CITY\tTO_WRITE');
for (const c of ALL_CITIES) console.log(`${c}\t${toWrite[c].length}`);

writeFileSync(OUT, JSON.stringify(toWrite, null, 2));
console.log('WROTE', OUT);

console.log('--- PARIS TO WRITE (first 100) ---');
console.log(toWrite['paris'].slice(0, 100).map((w) => `${w.term}\t${w.pt}`).join('\n'));
