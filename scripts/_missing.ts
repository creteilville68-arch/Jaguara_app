import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { buildNgramSet, termIsCovered, tokenizeText } from '../src/utils/frenchMorphology';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const files: string[] = readdirSync(DATA_DIR)
  .filter((f) => /_lesson_\d+\.json$/.test(f))
  .map((f) => join(DATA_DIR, f));
const GUIDE_DIR = join(DATA_DIR, 'city_guides');
if (existsSync(GUIDE_DIR)) {
  files.push(
    ...readdirSync(GUIDE_DIR)
      .filter((f) => /_guide_\d+\.json$/.test(f))
      .map((f) => join(GUIDE_DIR, f))
  );
}
let allText = '';
for (const f of files) {
  let data: any;
  try { data = JSON.parse(readFileSync(f, 'utf8')); } catch { continue; }
  const paras: Array<{ fr?: string }> = data.paragraphs || [];
  allText += '\n' + paras.map((p) => p.fr || '').join('\n');
}
const ngrams = buildNgramSet(tokenizeText(allText));
const missing: string[] = [];
for (const e of getWordBankEntries()) {
  if (!termIsCovered(e.term, ngrams)) missing.push(`${e.level}\t${e.term}`);
}
process.stdout.write(missing.join('\n') + '\n');