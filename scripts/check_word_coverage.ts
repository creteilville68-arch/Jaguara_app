/**
 * Coverage check: how many of the master word-bank lemmas already appear
 * inside the lesson narrative texts (paragraphs[].fr) across the 11 cities.
 */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { normalizeToLemma } from '../src/utils/lemmaHelper';

const DATA_DIR = join(process.cwd(), 'src', 'data');

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function stripArticles(s: string): string {
  return s
    .replace(/^(le |la |les |l'|l’|un |une |des |du |de la |de l'|de l’|au |aux )/, '')
    .trim();
}

// Load all lesson JSON files and concatenate their French paragraph text.
const files = readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
let allText = '';
const textsByCity: Record<string, string> = {};
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
  const cityId: string = data.cityId || '';
  const paras: Array<{ fr?: string }> = data.paragraphs || [];
  const frText = paras.map((p) => p.fr || '').join('\n');
  allText += '\n' + frText;
  textsByCity[cityId] = (textsByCity[cityId] || '') + '\n' + frText;
}

const foldedText = fold(allText);

const entries = getWordBankEntries();
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const stats: Record<string, { found: number; total: number }> = {};
for (const lvl of levels) stats[lvl] = { found: 0, total: 0 };

let foundTotal = 0;
const missing: string[] = [];

for (const e of entries) {
  stats[e.level].total++;
  const candidates = new Set<string>();
  candidates.add(fold(e.term));
  candidates.add(fold(normalizeToLemma(e.term)));
  candidates.add(fold(stripArticles(fold(e.term))));
  candidates.add(fold(stripArticles(fold(normalizeToLemma(e.term)))));

  let present = false;
  for (const c of candidates) {
    if (c && foldedText.includes(c)) {
      present = true;
      break;
    }
  }
  if (present) {
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
