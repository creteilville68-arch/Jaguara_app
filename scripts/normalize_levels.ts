/**
 * Normaliza os rótulos de nível dos 4 exemplos para o padrão canônico
 * A1 → A2-B1 → B2 → C1-C2, SEM reformatar o arquivo.
 *
 * Vários arquivos usam "B1" ou "B1-B2" no 3º exemplo; isso padroniza para "B2".
 * A substituição é feita no texto bruto, preservando a formatação original.
 */
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

let filesChanged = 0;
let labelsChanged = 0;

for (const f of fs.readdirSync(DATA_DIR)) {
  if (!/_lesson_\d+\.json$/.test(f)) continue;
  const filePath = path.join(DATA_DIR, f);
  const raw = fs.readFileSync(filePath, 'utf8');

  let next = raw;
  // Substitui apenas dentro dos campos "level" dos exemplos (nunca o nível
  // do topo, que usa rótulos como "Iniciante (A1)").
  next = next.replace(/"level": "B1-B2"/g, '"level": "B2"');
  next = next.replace(/"level": "B1"/g, '"level": "B2"');

  const count = (raw.match(/"level": "B1-B2"/g)?.length || 0) + (raw.match(/"level": "B1"/g)?.length || 0);
  if (next !== raw) {
    fs.writeFileSync(filePath, next);
    filesChanged += 1;
    labelsChanged += count;
  }
}

console.log(`Arquivos alterados: ${filesChanged}`);
console.log(`Rótulos normalizados: ${labelsChanged}`);
