/**
 * Quantifica exemplos no "estilo-template" (frases que parecem fabricadas por
 * máquina e soam artificiais), comparando aulas vs dossiês da enciclopédia.
 *
 * Padrões detectados:
 *   A) "C'est <N> qui/que, <adj>, <verbe> ... tout/même ..."
 *   B) "<N>, <adj./part.passé>, <verbe> ..."  (aposição + verbo escolhido)
 *
 * Uso: bun run scripts/scan_template_examples.ts
 */
import fs from 'fs';

const A = /^c['’]est (?:le|la|les|l'|un|une|des) [\p{L}'’-]{2,}\b.*?\bqui\b[^.!?]*?[,.].*\b(même|tout|toute|tous|toutes)\b/iu;
const B = /^(?:le|la|les|l'|un|une|des) [\p{L}'’ -]+,(\s*[\p{L}'’éèê]{2,}(?:ment)?,)?\s*(?:est|fut|semble|reste|devient|fait|offre|donne|porte|incarne|représente|anime|rythme|soutient|traverse|raconte|parfume|résume|rend|change|transforme|défie|fait vivre|fait|s'étend|s'élève|s'élance|se déploie)\b[^.!?]*\.$/iu;

const byKind = { lesson: 0, guide: 0 };
const byCity: Record<string, number> = {};
const perFile: { kind: 'L' | 'G'; city: string; file: string; hits: number }[] = [];

for (const kind of ['src/data', 'src/data/city_guides']) {
  const isGuide = kind.endsWith('city_guides');
  const files = fs.readdirSync(kind).filter((f) => /(lesson|guide)_\d+\.json$/.test(f));
  for (const f of files) {
    let g: any;
    try { g = JSON.parse(fs.readFileSync(kind + '/' + f, 'utf8')); } catch { continue; }
    const vocab: any[] = Array.isArray(g.vocabularyDictionary) ? g.vocabularyDictionary : [];
    let hits = 0;
    for (const e of vocab) {
      for (const ex of e.examples || []) {
        const fr = String(ex?.fr || '');
        if (A.test(fr) || B.test(fr)) hits++;
      }
    }
    const city = f.replace(/_(lesson|guide)_\d+\.json$/, '');
    if (hits) {
      byKind[isGuide ? 'guide' : 'lesson'] += hits;
      byCity[city] = (byCity[city] || 0) + hits;
      perFile.push({ kind: isGuide ? 'G' : 'L', city, file: f.replace(/\.json$/, ''), hits });
    }
  }
}

console.log('Exemplos em estilo-template (artificiais/repetitivos):');
console.log('  em AULAS (léssons):  ' + byKind.lesson);
console.log('  em DOSSIES:          ' + byKind.guide);
console.log('  TOTAL:               ' + (byKind.lesson + byKind.guide));
console.log('');
console.log('Por cidade:');
for (const [c, n] of Object.entries(byCity).sort((a, b) => b[1] - a[1])) console.log(`  ${c.padEnd(20)} ${String(n).padStart(5)}`);
console.log('');
perFile.sort((a, b) => b.hits - a.hits);
console.log('Top 30 arquivos:');
for (const p of perFile.slice(0, 30)) console.log(`  [${p.kind}] ${String(p.hits).padStart(4)}  ${p.city}/${p.file}`);