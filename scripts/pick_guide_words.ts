/**
 * Escolhe as próximas palavras a tecer num guia de uma cidade.
 * Pega as palavras que faltam nos textos (city_words_to_write.json) e filtra:
 * - evita palavras que já foram usadas (lista de exclusão por arquivo, opcional)
 * - prioriza C1/C2 (os maiores buracos) mas mantém um pouco de tudo
 * - imprime termo, tradução e nível para a autoria do guia
 *
 * Uso: bun run scripts/pick_guide_words.ts <cidade> [quantidade] [arquivo-de-ja-usadas]
 */
import { readFileSync } from 'fs';
import { join } from 'path';

const city = (process.argv[2] || '').replace(/-/g, '_').trim().toLowerCase();
const count = Number(process.argv[3] || 50);
const usedFile = process.argv[4];

const plan: Record<string, Array<{ term: string; pt: string; level: string }>> = JSON.parse(
  readFileSync(join(process.cwd(), 'scripts', 'city_words_to_write.json'), 'utf8')
);

const words = plan[city] || [];
const used = new Set<string>();
if (usedFile) {
  try {
    const raw = readFileSync(join(process.cwd(), usedFile), 'utf8');
    for (const line of raw.split('\n')) {
      const t = line.trim();
      if (t) used.add(t.toLowerCase());
    }
  } catch {
    /* sem arquivo de exclusão */
  }
}

const LEVEL_ORDER = ['C2', 'C1', 'B2', 'B1', 'A2', 'A1'];
const candidates = words.filter((w) => !used.has(w.term.toLowerCase()));
candidates.sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) || a.term.localeCompare(b.term));

const picked = candidates.slice(0, count);
console.log(`# ${city} — ${picked.length} palavras-alvo (de ${candidates.length} disponíveis)`);
console.log('');
for (const w of picked) {
  console.log(`${w.level}\t${w.term}\t${w.pt}`);
}
