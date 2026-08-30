/**
 * Dado um arquivo com palavras-alvo (uma por linha, "termo\ttradução"),
 * informa quais já têm 4 exemplos curados em ALL_MASTER_EXAMPLES.
 * Uso: bun run scripts/check_curated.ts <arquivo-com-palavras>
 */
import { readFileSync } from 'fs';
import { ALL_MASTER_EXAMPLES, hasFourCompleteExamples, fold } from '../src/utils/clickableParser';

const file = process.argv[2];
const lines = readFileSync(file, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);

let have = 0;
for (const line of lines) {
  const term = line.split('\t')[0].trim();
  const key = fold(term);
  const curated = ALL_MASTER_EXAMPLES[key];
  if (curated && hasFourCompleteExamples(curated)) {
    have += 1;
    console.log(`JÁ TEM: ${term}`);
  } else {
    console.log(`CURAR : ${term}`);
  }
}
console.log(`\n${have} de ${lines.length} já curados`);
