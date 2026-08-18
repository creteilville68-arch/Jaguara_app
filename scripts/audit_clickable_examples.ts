/**
 * Auditoria dos 4 exemplos de TODAS as palavras destacadas (douradas e pontilhadas).
 *
 * Regra do produto: toda palavra clicável — dourada (vocabularyDictionary) ou
 * pontilhada (palavra do banco CEFR presente no texto) — deve abrir o modal com
 * exatamente 4 exemplos progressivos bem elaborados (A1 → A2-B1 → B2 → C1-C2).
 *
 * Este script reproduz EXATAMENTE a resolução usada em runtime
 * (parseFrenchSentence → getOrGenerateWordEntry → generatePracticalExamplesForWord
 *  + MASTER_EXAMPLES), percorre as aulas por cidade e aponta:
 *   - palavras destacadas sem 4 exemplos (o gargalo dos flashcards);
 *   - exemplos com fr/pt vazios.
 *
 * Uso:
 *   bun run scripts/audit_clickable_examples.ts          # todas as cidades
 *   bun run scripts/audit_clickable_examples.ts paris    # só uma cidade
 */
import fs from 'fs';
import path from 'path';
import { parseFrenchSentence, getTermFromEntry } from '../src/utils/textParser';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const CITY_ARG = (process.argv[2] || '').trim().toLowerCase();

interface MissingEntry {
  city: string;
  lesson: string;
  term: string;
  kind: 'dourada' | 'pontilhada';
  examplesCount: number;
  level?: string;
}

interface CityStats {
  lessons: number;
  goldWords: number;
  dottedWords: number;
  goldOk: number;
  dottedOk: number;
  goldMissing: number;
  dottedMissing: number;
}

const cityStats = new Map<string, CityStats>();
const missing: MissingEntry[] = [];

function cityOf(fileName: string): string {
  return fileName.replace(/_lesson_\d+\.json$/, '');
}

function statsFor(city: string): CityStats {
  if (!cityStats.has(city)) {
    cityStats.set(city, {
      lessons: 0,
      goldWords: 0,
      dottedWords: 0,
      goldOk: 0,
      dottedOk: 0,
      goldMissing: 0,
      dottedMissing: 0,
    });
  }
  return cityStats.get(city)!;
}

function validExamples(examples: any[] | undefined): { count: number; ok: boolean } {
  if (!Array.isArray(examples)) return { count: 0, ok: false };
  const count = examples.length;
  const ok =
    count === 4 &&
    examples.every((e) => (e?.fr || '').toString().trim() && (e?.pt || '').toString().trim());
  return { count, ok };
}

function auditLessonFile(filePath: string): void {
  const fileName = path.basename(filePath);
  const city = cityOf(fileName);
  if (CITY_ARG && city !== CITY_ARG) return;

  let data: any;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
  } catch (e) {
    console.error(`[ERRO] JSON inválido: ${fileName} → ${String(e).slice(0, 120)}`);
    return;
  }

  const st = statsFor(city);
  st.lessons += 1;

  const lessonId: string = data.id || fileName;
  const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];

  // Mapa de termos → melhor entrada (para pegar o nível quando disponível).
  const seen = new Map<string, { kind: 'dourada' | 'pontilhada'; entry: any }>();

  for (const para of paragraphs) {
    const fr = (para?.fr || '').toString().trim();
    if (!fr) continue;

    const tokens = parseFrenchSentence(fr, vocabDict);
    for (const token of tokens) {
      if (!token.isMatch || !token.dictionaryEntry) continue;
      const term = getTermFromEntry(token.dictionaryEntry) || token.text;
      if (!term || !term.trim()) continue;
      const key = term.trim().toLowerCase();
      const kind = token.isDictionaryTerm ? 'dourada' : 'pontilhada';
      // Dedup por termo: mantém a primeira ocorrência (dourada tem prioridade).
      if (!seen.has(key)) {
        seen.set(key, { kind, entry: token.dictionaryEntry });
      } else if (kind === 'dourada' && seen.get(key)!.kind === 'pontilhada') {
        seen.set(key, { kind, entry: token.dictionaryEntry });
      }
    }
  }

  for (const [term, { kind, entry }] of seen) {
    const { count, ok } = validExamples(entry.examples);
    if (kind === 'dourada') {
      st.goldWords += 1;
      if (ok) st.goldOk += 1;
      else {
        st.goldMissing += 1;
        missing.push({
          city,
          lesson: lessonId,
          term,
          kind,
          examplesCount: count,
          level: entry.difficultyLevel,
        });
      }
    } else {
      st.dottedWords += 1;
      if (ok) st.dottedOk += 1;
      else {
        st.dottedMissing += 1;
        missing.push({
          city,
          lesson: lessonId,
          term,
          kind,
          examplesCount: count,
          level: entry.difficultyLevel,
        });
      }
    }
  }
}

const files = fs.readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
for (const f of files) {
  auditLessonFile(path.join(DATA_DIR, f));
}

const cities = Array.from(cityStats.keys()).sort();

console.log('==================================================');
console.log('AUDITORIA: 4 EXEMPLOS EM TODAS AS PALAVRAS DESTACADAS');
console.log(CITY_ARG ? `CIDADE: ${CITY_ARG}` : 'TODAS AS CIDADES');
console.log('==================================================');
console.log('');

let totalGoldMissing = 0;
let totalDottedMissing = 0;
let totalGold = 0;
let totalDotted = 0;

for (const city of cities) {
  const s = cityStats.get(city)!;
  totalGold += s.goldWords;
  totalDotted += s.dottedWords;
  totalGoldMissing += s.goldMissing;
  totalDottedMissing += s.dottedMissing;
  const flag = s.goldMissing + s.dottedMissing > 0 ? '⚠️' : '✅';
  console.log(
    `${flag} ${city.padEnd(20)} aulas=${String(s.lessons).padStart(3)} | douradas=${String(s.goldWords).padStart(4)} (faltam ${String(s.goldMissing).padStart(3)}) | pontilhadas=${String(s.dottedWords).padStart(4)} (faltam ${String(s.dottedMissing).padStart(3)})`
  );
}

console.log('');
console.log('--- TOTAIS ---');
console.log(`Douradas destacadas: ${totalGold} (sem 4 exemplos: ${totalGoldMissing})`);
console.log(`Pontilhadas destacadas: ${totalDotted} (sem 4 exemplos: ${totalDottedMissing})`);
console.log(`Palavras destacadas com problema: ${missing.length}`);
console.log('');

if (missing.length > 0) {
  console.log('--- PALAVRAS SEM 4 EXEMPLOS (até 200) ---');
  for (const m of missing.slice(0, 200)) {
    console.log(
      `[${m.city}] ${m.lesson} · ${m.kind} · "${m.term}" · ${m.examplesCount} exemplo(s)${m.level ? ' · ' + m.level : ''}`
    );
  }
  if (missing.length > 200) {
    console.log(`... e mais ${missing.length - 200} (ver relatório JSON)`);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  city: CITY_ARG || 'all',
  totals: {
    goldWords: totalGold,
    dottedWords: totalDotted,
    goldMissing: totalGoldMissing,
    dottedMissing: totalDottedMissing,
    missingHighlightedWords: missing.length,
  },
  byCity: Object.fromEntries(
    cities.map((c) => [c, cityStats.get(c)!])
  ),
  missing,
};
fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'clickable_examples_report.json'),
  JSON.stringify(report, null, 2)
);

console.log('');
console.log('Relatório completo salvo em scripts/clickable_examples_report.json');
