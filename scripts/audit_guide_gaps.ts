/**
 * Auditoria de guias (enciclopédia): palavras do texto que NÃO ficam clicáveis.
 *
 * Para cada cidade, varre os paragraphs[].fr dos city_guides e lista as
 * palavras que não estão dentro de nenhum token clicável (parseClickableSentence),
 * mostrando:
 *   - contagem de ocorrências
 *   - se a forma crua resolve no banco (lookupWordBankEntry)
 *   - o lema sugerido (normalizeToLemma)
 *   - se o lema resolve no banco
 *   - o lema derivado para verbos (derivação simples -er/-ir/-re) e se está
 *     no CURATED_VERB_GATE (curatedVerbLemmas)
 *
 * Uso:
 *   bun run scripts/audit_guide_gaps.ts <cidade>   (ex.: amiens)
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseClickableSentence } from '../src/utils/clickableParser';
import { lookupWordBankEntry, normalizeBankLevel } from '../src/data/wordBankLookup';
import { normalizeToLemma } from '../src/utils/lemmaHelper';
import { CURATED_VERB_LEMMAS, CORE_CURATED_VERB_LEMMAS } from '../src/data/curatedVerbLemmas';

const city = process.argv[2] ?? 'amiens';
const dir = path.join(process.cwd(), 'src/data/city_guides');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith(`${city}_guide_`) && f.endsWith('.json'))
  .sort();

const WORD_RE = /[a-zA-Zàâäéèêëîïôöùûüçœæ'’ʼ-]+/g;

// Nomes próprios e fragmentos que legitimamente não são vocabulário clicável.
const PROPER = new Set([
  'amiens', 'lille', 'bordeaux', 'toulouse', 'lyon', 'marseille', 'strasbourg',
  'nice', 'paris', 'parisii', 'creteil', 'garonne', 'gironde', 'médoc', 'rhône',
  'saône', 'rhin', 'deûle', 'vauban', 'verne', 'picardie', 'londres', 'roubaix',
  'tourcoing', 'dunkerque', 'touraine', 'chenonceau', 'villandry', 'chambord',
  'azay-le-rideau', 'langeais', 'cheverny', 'amboise', 'blois', 'saumur',
  'mont-saint-michel', 'mont', 'michel', 'aubert', 'massalia', 'lugdunum',
  'nikaïa', 'cimiez', 'riviera', 'erasmus', 'nobel', 'ariane', 'monplaisir',
  'méditerranée', 'champs-', 'lysées', 'tat', 'tats', 'tat-providence',
  'xixe', 'xxe', 'xxie', 'xviie', 'xviiie', 'xvie', 'xve', 'xive', 'xiiie',
  'xiie', 'xie', 'xe', 'ixe', 'viiie', 'viie', 'vie', 've', 'iie', 'iiie',
  'ive', 'ii', 'iii', 'xvii', 'xviii', 'xix', 'xx', 'x',
  'hortillonnages', 'cabotans', 'l’avre', "l'avre", 'l’europe', "l'europe",
  'chés', 'tre', 'braderie', 'estaminets', 'welsh', 'vieux-lille', 'furet',
  'nord', 'hauts-de-france', 'flandre', 'flandres', 'gantois', 'cathédrale-notre-dame',
]);

const counts = new Map<string, { count: number; sample: string }>();

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const paragraphs: string[] = (data.paragraphs ?? [])
    .map((p: { fr?: string }) => p.fr)
    .filter((fr: string | undefined): fr is string => typeof fr === 'string' && fr.length > 10);
  for (const p of paragraphs) {
    // Reproduz o app: divide o parágrafo em frases e parseia frase a frase.
    const sentences = p.match(/[^.!?]+[.!?]+/g) ?? [p];
    for (const sentence of sentences) {
      const tokens = parseClickableSentence(sentence.trim());
      const spans: { start: number; end: number }[] = [];
      let pos = 0;
      for (const t of tokens) {
        const text = t.text || '';
        if (!text) continue;
        const idx = sentence.indexOf(text, pos);
        if (idx < 0) continue;
        if (t.isMatch) {
          spans.push({ start: idx, end: idx + text.length });
        }
        pos = idx + text.length;
      }
      const words = sentence.match(WORD_RE) ?? [];
      let wpos = 0;
      for (const w of words) {
        const lower = w.toLowerCase();
        if (lower.length < 3) continue;
        if (PROPER.has(lower)) continue;
        if (/^(l|d|j|s|n|m|t|qu|jusqu|lorsqu|puisqu)'/.test(lower)) continue; // elididos
        const idx = sentence.indexOf(w, wpos);
        wpos = idx + w.length;
        const covered = spans.some((s) => s.start <= idx && idx + w.length <= s.end);
        if (covered) continue;
        const rec = counts.get(lower) ?? { count: 0, sample: sentence.trim().slice(0, 100) };
        rec.count++;
        counts.set(lower, rec);
      }
    }
  }
}

const gate = new Set<string>();
for (const l of CURATED_VERB_LEMMAS) gate.add(l.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());
for (const l of CORE_CURATED_VERB_LEMMAS) gate.add(l.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());

const fold = (s: string) => s.toLowerCase().replace(/[’ʼ‘]/g, "'").normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

// Espelha deriveVerbLemmas de src/data/wordBankLookup.ts (mesma ordem de
// candidatos), para que o relatório reflita o que o app realmente resolve.
function deriveVerbs(w: string): string[] {
  const out: string[] = [];
  const push = (s: string) => {
    if (s && s.length >= 3 && !out.includes(s)) out.push(s);
  };
  if (w.endsWith('a') && w.length > 3) {
    push(w.slice(0, -1) + 'er');
    push(w.slice(0, -1));
  }
  if (w.endsWith('èrent')) push(w.slice(0, -5) + 'er');
  if (w.endsWith('ent')) push(w.slice(0, -3) + 'er');
  if (w.endsWith('ons') && w.length > 4) push(w.slice(0, -3) + 'er');
  if (w.endsWith('ez') && w.length > 4) push(w.slice(0, -2) + 'er');
  if (w.endsWith('es') && w.length > 4) push(w.slice(0, -2) + 'er');
  if (w.endsWith('e') && w.length > 3) push(w.slice(0, -1) + 'er');
  if (w.endsWith('ais') && w.length > 4) push(w.slice(0, -3) + 'er');
  if (w.endsWith('aient')) push(w.slice(0, -5) + 'er');
  if (w.endsWith('ait') && w.length > 4) push(w.slice(0, -3) + 'er');
  if (w.endsWith('ions') && w.length > 5) push(w.slice(0, -4) + 'er');
  if (w.endsWith('iez') && w.length > 5) push(w.slice(0, -3) + 'er');
  if (w.endsWith('t') && w.length > 3) {
    push(w.slice(0, -1) + 'r');
    push(w.slice(0, -1) + 'ir');
    push(w + 'ir');
  }
  if (w.endsWith('issent')) push(w.slice(0, -6) + 'ir');
  if (w.endsWith('issons')) {
    push(w.slice(0, -6) + 'ir');
    push(w.slice(0, -6) + 'ître');
  }
  if (w.endsWith('ssions')) {
    push(w.slice(0, -6) + 'ir');
    push(w.slice(0, -6) + 'aître');
  }
  if (w.endsWith('aissait')) push(w.slice(0, -7) + 'aître');
  if (w.endsWith('aissaient')) push(w.slice(0, -8) + 'aître');
  if (w.endsWith('ssait')) push(w.slice(0, -5) + 'r');
  if (w.endsWith('ssaient')) push(w.slice(0, -7) + 'r');
  if (w.endsWith('d') && w.length > 3) push(w + 're');
  if (w.endsWith('aît')) push(w.slice(0, -3) + 'aître');
  if (w.endsWith('aissent')) push(w.slice(0, -7) + 'aître');
  if (w.endsWith('ées') || w.endsWith('és')) push(w.replace(/ée?s$/, 'er'));
  if (w.endsWith('ée') || w.endsWith('é')) push(w.replace(/ée?$/, 'er'));
  if (w.endsWith('ies') || w.endsWith('is')) push(w.replace(/ie?s$/, 'ir'));
  if (w.endsWith('ie') || w.endsWith('i')) push(w.replace(/ie?$/, 'ir'));
  if (w.endsWith('ont') && w.length > 4) push(w.slice(0, -3));
  if (w.endsWith('rait') && w.length > 5) push(w.slice(0, -4) + 'r');
  if (w.endsWith('raient')) push(w.slice(0, -6) + 'r');
  if (w.endsWith('ant') && w.length > 5) push(w.slice(0, -3) + 'er');
  for (const cand of [...out]) {
    if (cand.endsWith('er') && cand.includes('è')) {
      push(cand.replace(/è(?=[a-z]*er$)/, 'é'));
    }
  }
  return out;
}

const rows: Array<[string, number, string, boolean, string, boolean, boolean, boolean]> = [];
for (const [word, { count, sample }] of [...counts.entries()].sort((a, b) => b[1].count - a[1].count)) {
  const rawBank = !!lookupWordBankEntry(word);
  const lemma = normalizeToLemma(word) || word;
  const lemmaBank = !!lookupWordBankEntry(lemma);
  const derived = deriveVerbs(word).filter((d) => gate.has(fold(d)))[0];
  const derivedInGate = !!derived;
  const derivedInBank = derived ? !!lookupWordBankEntry(derived) : false;
  rows.push([word, count, lemma, lemmaBank, derived ?? '-', derivedInGate, rawBank, derivedInBank]);
}

console.log(`CITY=${city} FILES=${files.length} UNDOTTED_CONTENT=${rows.length}`);
console.log('word\tcount\tlemma\tlemmaInBank\tderivedVerb\tderivedInGate\tderivedInBank\trawInBank');
for (const r of rows) {
  console.log(`${r[0]}\t${r[1]}\t${r[2]}\t${r[3] ? 'Y' : 'n'}\t${r[4] ?? '-'}\t${r[5] ? 'Y' : 'n'}\t${r[7] ? 'Y' : 'n'}\t${r[6] ? 'Y' : 'n'}`);
}
