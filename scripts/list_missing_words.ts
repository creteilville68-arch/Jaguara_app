/**
 * Lista as palavras do banco que ainda NÃO aparecem nos textos das aulas,
 * filtradas por nível CEFR (argumento opcional: A1, A2, B1, B2, C1, C2).
 *
 * Uso: bun run scripts/list_missing_words.ts [A1|A2|B1|B2|C1|C2]
 */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { getWordBankEntries } from '../src/data/wordBank';
import { normalizeToLemma } from '../src/utils/lemmaHelper';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const levelFilter = (process.argv[2] || '').toUpperCase();

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function stripArticles(s: string): string {
  return s
    .replace(/^(le |la |les |l'|l’|un |une |des |du |de la |de l'|de l |au |aux )/, '')
    .trim();
}

const files = readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
let allText = '';
for (const f of files) {
  try {
    const d = JSON.parse(readFileSync(join(DATA_DIR, f), 'utf8'));
    allText += '\n' + (d.paragraphs || []).map((p: any) => p.fr || '').join('\n');
  } catch {
    // ignore invalid JSON
  }
}
const folded = fold(allText);

const missing: string[] = [];
for (const e of getWordBankEntries()) {
  if (levelFilter && e.level !== levelFilter) continue;
  const cands = new Set<string>([
    fold(e.term),
    fold(normalizeToLemma(e.term)),
    fold(stripArticles(fold(e.term))),
    fold(stripArticles(fold(normalizeToLemma(e.term)))),
  ]);
  let present = false;
  for (const c of cands) {
    if (c && folded.includes(c)) {
      present = true;
      break;
    }
  }
  if (!present) missing.push(`${e.level}\t${e.term}\t${e.pt}`);
}

const title = levelFilter ? `MISSING ${levelFilter}` : 'MISSING (todos os níveis)';
console.log(`${title}: ${missing.length}`);
console.log(missing.join('\n'));