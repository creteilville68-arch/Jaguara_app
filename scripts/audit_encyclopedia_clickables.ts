import fs from 'fs';
import path from 'path';
import { masterExamplesFor, hasFourCompleteExamples } from '../src/utils/clickableParser';
import { getOrGenerateWordEntry } from '../src/utils/textParser';
import { lookupWordBankEntry } from '../src/data/wordBankLookup';

const GUIDE_DIR = path.join(process.cwd(), 'src', 'data', 'city_guides');
const wordRegex = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
const stats = new Map<string, { guides: number; words: Set<string>; missing: Map<string, string[]> }>();

for (const file of fs.readdirSync(GUIDE_DIR).filter((name) => /_guide_\d+\.json$/.test(name))) {
  const city = file.replace(/_guide_\d+\.json$/, '');
  const current = stats.get(city) || { guides: 0, words: new Set<string>(), missing: new Map<string, string[]>() };
  current.guides++;
  const data = JSON.parse(fs.readFileSync(path.join(GUIDE_DIR, file), 'utf8').replace(/^\uFEFF/, ''));
  const text = (Array.isArray(data.paragraphs) ? data.paragraphs : []).map((p: any) => String(p?.fr || '')).join(' ');
  for (const match of text.matchAll(wordRegex)) {
    const raw = match[0];
    const bank = lookupWordBankEntry(raw);
    if (!bank) continue;
    const key = bank.term.toLowerCase().trim();
    if (current.words.has(key)) continue;
    current.words.add(key);
    const generatedEntry = getOrGenerateWordEntry(raw);
    const curated = masterExamplesFor(raw, bank.term);
    const examples = curated || generatedEntry.examples;
    if (!hasFourCompleteExamples(examples)) {
      const files = current.missing.get(key) || [];
      files.push(file);
      current.missing.set(key, files);
    }
  }
  stats.set(city, current);
}

const report: Record<string, any> = {};
let total = 0;
for (const [city, s] of [...stats.entries()].sort()) {
  const backlog = [...s.missing.keys()].sort();
  total += backlog.length;
  report[city] = { guides: s.guides, bankWords: s.words.size, backlog, occurrences: Object.fromEntries(s.missing) };
  console.log(`${backlog.length ? '⚠️' : '✅'} ${city}: guias=${s.guides} | palavras do banco=${s.words.size} | sem curadoria=${backlog.length}`);
  if (backlog.length) console.log(`  ${backlog.join(', ')}`);
}
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'encyclopedia_clickable_report.json'), JSON.stringify(report, null, 2));
console.log(`TOTAL DE LEMAS SEM CURADORIA: ${total}`);
console.log('Relatório salvo em scripts/encyclopedia_clickable_report.json');
