/**
 * Gera worklists de autoria legíveis por cidade.
 *
 * Lê `scripts/city_words_to_write.json` (produzido por plan_city_words.ts) e
 * escreve um arquivo Markdown por cidade em `scripts/worklists/`, com as
 * palavras que ainda precisam aparecer nos textos daquela cidade, agrupadas
 * por nível CEFR e acompanhadas da tradução em português.
 *
 * Uso: bun run scripts/generate_worklists.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const IN = join(process.cwd(), 'scripts', 'city_words_to_write.json');
const OUT_DIR = join(process.cwd(), 'scripts', 'worklists');

type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
const LEVEL_ORDER: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

interface WordToWrite {
  term: string;
  pt: string;
  level: string;
}

const CITY_LABELS: Record<string, string> = {
  paris: '#1 Paris — A1',
  amiens: '#2 Amiens — A1/A2',
  lille: '#3 Lille — A2',
  'mont-saint-michel': '#4 Mont Saint-Michel — A2/B1',
  tours: '#5 Tours — B1',
  bordeaux: '#6 Bordeaux — B1+',
  toulouse: '#7 Toulouse — B2',
  lyon: '#8 Lyon — B2+',
  marseille: '#9 Marseille — C1',
  strasbourg: '#10 Strasbourg — C1+',
  nice: '#11 Nice — C2',
};

const data = JSON.parse(readFileSync(IN, 'utf8')) as Record<string, WordToWrite[]>;

mkdirSync(OUT_DIR, { recursive: true });

for (const city of Object.keys(data)) {
  const words = data[city] || [];
  const byLevel: Record<string, WordToWrite[]> = {};
  for (const w of words) {
    (byLevel[w.level] = byLevel[w.level] || []).push(w);
  }

  const lines: string[] = [];
  lines.push(`# ${CITY_LABELS[city] || city}`);
  lines.push('');
  lines.push(`**${words.length} palavras** ainda precisam aparecer nos textos das aulas desta cidade.`);
  lines.push('');
  lines.push('Risque uma linha (marque como `[x]`) conforme for inserindo cada palavra na aventura do Irlan.');
  lines.push('');

  for (const level of LEVEL_ORDER) {
    const levelWords = byLevel[level] || [];
    if (levelWords.length === 0) continue;
    lines.push(`## ${level} (${levelWords.length})`);
    lines.push('');
    for (const w of levelWords) {
      lines.push(`- [ ] **${w.term}** — ${w.pt}`);
    }
    lines.push('');
  }

  writeFileSync(join(OUT_DIR, `${city}.md`), lines.join('\n'), 'utf8');
  console.log(`wrote scripts/worklists/${city}.md (${words.length} words)`);
}

console.log('DONE');
