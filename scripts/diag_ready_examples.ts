/**
 * Diagnóstico: das palavras ainda NÃO presentes nos textos (city_words_to_write),
 * quantas já têm 4 exemplos curados em ALL_MASTER_EXAMPLES? Essas viram clicáveis
 * assim que aparecem num texto — ganho "grátis" para a meta de 15.400.
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { ALL_MASTER_EXAMPLES, hasFourCompleteExamples, fold } from '../src/utils/clickableParser';

const planPath = join(process.cwd(), 'scripts', 'city_words_to_write.json');
const plan: Record<string, Array<{ term: string; pt: string; level: string }>> = JSON.parse(readFileSync(planPath, 'utf8'));

const curated = new Set<string>();
for (const key of Object.keys(ALL_MASTER_EXAMPLES)) {
  if (hasFourCompleteExamples(ALL_MASTER_EXAMPLES[key])) curated.add(fold(key));
}

let total = 0;
let totalReady = 0;
for (const [city, words] of Object.entries(plan)) {
  const ready = words.filter((w) => curated.has(fold(w.term)));
  total += words.length;
  totalReady += ready.length;
  console.log(`${city.padEnd(20)} faltam=${String(words.length).padStart(4)} | já com exemplos=${String(ready.length).padStart(4)}`);
}

console.log('---');
console.log('TOTAL faltando nos textos:', total);
console.log('TOTAL com 4 exemplos já curados (viram clicáveis ao aparecer):', totalReady);
console.log('TOTAL sem exemplos (precisam curadoria):', total - totalReady);
