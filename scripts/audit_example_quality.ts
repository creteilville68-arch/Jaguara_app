/**
 * Auditoria de QUALIDADE dos 4 exemplos em todos os dossiês da Enciclopédia.
 *
 * Detecta padrões "de fábrica" que deixam os exemplos repetitivos e pouco
 * pedagógicos:
 *   - T1  "C'est <N> qui, <adj>, ... tout ..."   (ênfase + 'tout' + incisa)
 *   - T2  "<N>, <aposição>, <verbe> tout ..."     (aposição + 'tout')
 *   - T3  "X, c'est <redéfinition>"               (definição em EXEMPLO)
 *   - T4  "tout/toute/tous/toutes" em >=3 dos 4 exemplos da mesma palavra
 *   - T5  estrutura 'C'est...qui' em >=3 dos 4 exemplos da mesma palavra
 *   - T6  exemplo genérico vazio tipo "X est Y" (A1)
 *   - T8  frases muito curtas (<7 tokens) ou muito longas (>45)
 *
 * Uso: bun run scripts/audit_example_quality.ts
 * Relatório → scripts/example_quality_report.json
 */
import fs from 'fs';
import path from 'path';

const GUIDE_DIR = path.join(process.cwd(), 'src', 'data', 'city_guides');
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’ʼ‘]/g, "'").replace(/\s+/g, ' ').trim();

const T1 = /^c['’]est (?:le|la|les|l'|un|une|des) .*?\bqui\b[^.!?]*?\btout\b/iu;
const T2 = /,\s*[\p{L}'’àéèêëïîôöùûçç .-]+\s*,+[^.!?]*?\btout\b/iu;
const T3 = /\b\p{L}+\s*,\s*c['’]est\b/iu;
const T6 = /^(?:c['’]est|il est|elle est)\s+[\p{L}'’]+\s+(?:est|sont)\s+[\p{L}'’-]+\s*[.!?]?$/iu;

function tokenCount(s: string) { return s.trim().split(/\s+/).filter(Boolean).length; }

interface FlagCounts { [k: string]: number }
const perCity: Record<string, { guides: number; terms: number; examples: number; flags: FlagCounts }> = {};
const perGuide: Record<string, { terms: number; flags: FlagCounts }> = {};
const termFlags: Array<{ guide: string; term: string; flags: string[] }> = [];

for (const file of fs.readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f))) {
  const city = file.replace(/_guide_\d+\.json$/, '');
  let data: any;
  try { data = JSON.parse(fs.readFileSync(path.join(GUIDE_DIR, file), 'utf8').replace(/^\uFEFF/, '')); } catch { continue; }
  const vocab = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  perCity[city] = perCity[city] || { guides: 0, terms: 0, examples: 0, flags: {} };
  if (!perGuide[file]) perGuide[file] = { terms: 0, flags: {} };
  perCity[city].guides++;
  perCity[city].terms += vocab.length;
  perGuide[file]!.terms += vocab.length;

  for (const entry of vocab) {
    const term = String(entry?.term || '').trim();
    if (!term) continue;
    const examples: any[] = Array.isArray(entry.examples) ? entry.examples : [];
    perCity[city].examples += examples.length;

    const fset = new Set<string>();
    const toutCount = examples.filter((e) => /\btout\b|\btoute\b|\btous\b|\btoutes\b/iu.test(String(e?.fr || ''))).length;
    const cEstCount = examples.filter((e) => /^c['’]est\b/iu.test(String(e?.fr || '').trim())).length;
    const baseStem = fold(term).replace(/^(le|la|les|l'|un|une|des|se|s'|je|nous|il|elle)\s*/, '').split(/\s+/)[0] || term;
    const stem = baseStem.slice(0, Math.max(3, baseStem.length - 1));
    let sawTerm = false;

    for (const ex of examples) {
      const fr = String(ex?.fr || '').trim();
      const pt = String(ex?.pt || '').trim();
      if (T1.test(fr)) fset.add('T1_CestQuiTout');
      if (T2.test(fr)) fset.add('T2_ApposTout');
      if (T3.test(fr)) fset.add('T3_VirgulaCest');
      if (T6.test(fr)) fset.add('T6_GenericoVazio');
      const n = tokenCount(fr);
      if (n >= 1 && n < 7) fset.add('T8_Curto');
      if (n > 45) fset.add('T8_Longo');
      if (fr && fold(fr).includes(stem)) sawTerm = true;
    }
    if (toutCount >= 3) fset.add('T4_TodoExcesso');
    if (cEstCount >= 3) fset.add('T5_TudoCEst');
    if (!sawTerm && examples.length > 0) fset.add('T7_SemTermo');

    for (const f of fset) { perCity[city].flags[f] = (perCity[city].flags[f] || 0) + 1; perGuide[file].flags[f] = (perGuide[file].flags[f] || 0) + 1; }
    if (fset.size) termFlags.push({ guide: file, term, flags: [...fset] });
  }
}

const totalTerms = Object.values(perCity).reduce((a, c) => a + c.terms, 0);
const allFlags: FlagCounts = {};
for (const t of termFlags) for (const f of t.flags) allFlags[f] = (allFlags[f] || 0) + 1;

console.log('DOSSIES:', Object.values(perCity).reduce((a, c) => a + c.guides, 0));
console.log('TERMOS DE OURO (dossiês):', totalTerms);
console.log('TERMOS COM FLAG:', termFlags.length, `(${((100 * termFlags.length) / totalTerms).toFixed(0)}%)`);
console.log('FLAGS:', JSON.stringify(allFlags));
console.log('');
console.log('POR CIDADE (termos com flag / total):');
for (const [city, c] of Object.entries(perCity).sort()) {
  const flagged = termFlags.filter((t) => t.guide.startsWith(city + '_'));
  console.log(`  ${city.padEnd(20)} ${String(flagged.length).padStart(4)} / ${String(c.terms).padStart(4)}  ${JSON.stringify(c.flags)}`);
}
console.log('');
console.log('TOP 15 DOSSIES MAIS AFETADOS:');
const ranked = Object.entries(perGuide).filter(([, r]) => Object.keys(r.flags).length).sort((a, b) => Object.keys(b[1].flags).length - Object.keys(a[1].flags).length || (b[1].flags.T1_CestQuiTout || 0) - (a[1].flags.T1_CestQuiTout || 0)).slice(0, 15);
for (const [g, r] of ranked) console.log(`  ${g.padEnd(36)} termos=${String(r.terms).padStart(3)} flags=${JSON.stringify(r.flags)}`);

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'example_quality_report.json'), JSON.stringify({ generatedAt: new Date().toISOString(), totalTerms, termsWithFlag: termFlags.length, flagCounts: allFlags, perCity, perGuide, termFlags }, null, 2));
console.log('\nRelatório salvo em scripts/example_quality_report.json');