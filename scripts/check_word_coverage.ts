/**
 * Coverage check: how many of the master word-bank lemmas already appear
 * inside the lesson narrative texts (paragraphs[].fr) across the 11 cities.
 *
 * Matching is morphological: the bank term is expanded into its inflected
 * forms (conjugations, plurals, feminines, elisions, irregular verbs) and
 * checked against word n-grams of the texts (see frenchMorphology.ts).
 */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { buildNgramSet, termIsCovered, tokenizeText } from '../src/utils/frenchMorphology';

const DATA_DIR = join(process.cwd(), 'src', 'data');

// Load all lesson JSON files and concatenate their French paragraph text.
const files = readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
let allText = '';
let lessonCount = 0;

for (const f of files) {
  const raw = readFileSync(join(DATA_DIR, f), 'utf8');
  let data: any;
  try {
    data = JSON.parse(raw);
  } catch {
    continue;
  }
  lessonCount++;
  const paras: Array<{ fr?: string }> = data.paragraphs || [];
  allText += '\n' + paras.map((p) => p.fr || '').join('\n');
}

const ngrams = buildNgramSet(tokenizeText(allText));

const entries = getWordBankEntries();
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const stats: Record<string, { found: number; total: number }> = {};
for (const lvl of levels) stats[lvl] = { found: 0, total: 0 };

let foundTotal = 0;
const missing: string[] = [];

for (const e of entries) {
  stats[e.level].total++;
  if (termIsCovered(e.term, ngrams)) {
    foundTotal++;
    stats[e.level].found++;
  } else {
    missing.push(`${e.level}\t${e.term}`);
  }
}

console.log('LESSONS', lessonCount);
console.log('TOTAL_BANK', entries.length);
console.log('FOUND_IN_TEXT', foundTotal);
console.log('MISSING', entries.length - foundTotal);
for (const lvl of levels) {
  console.log(`LEVEL ${lvl}: ${stats[lvl].found}/${stats[lvl].total} found, ${stats[lvl].total - stats[lvl].found} missing`);
}
console.log('--- MISSING SAMPLE (first 60) ---');
console.log(missing.slice(0, 60).join('\n'));
