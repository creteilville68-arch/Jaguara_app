/**
 * Auditoria dos 4 exemplos de TODAS as palavras destacadas (douradas e pontilhadas).
 *
 * Regra do produto: toda palavra clicável — dourada (vocabularyDictionary) ou
 * pontilhada (palavra do banco CEFR presente no texto) — deve abrir o modal com
 * exatamente 4 exemplos progressivos (A1 → A2-B1 → B2 → C1-C2).
 *
 * A partir do parser de clique (parseClickableSentence), uma palavra pontilhada
 * só é destacada quando os 4 exemplos já existem. Este script mede, por cidade:
 *   - douradas: total e quantas têm os 4 exemplos;
 *   - pontilhadas clicáveis: total (todas já têm os 4 exemplos por construção);
 *   - BACKLOG: palavras do banco CEFR que aparecem no texto mas ainda NÃO têm
 *     os 4 exemplos (e por isso ficam como texto normal até serem curadas no
 *     masterExamplesDictionary).
 *
 * Uso:
 *   bun run scripts/audit_clickable_examples.ts          # todas as cidades
 *   bun run scripts/audit_clickable_examples.ts paris    # só uma cidade
 */
import fs from 'fs';
import path from 'path';
import { parseFrenchSentence, getTermFromEntry } from '../src/utils/textParser';
import { masterExamplesFor, hasFourCompleteExamples } from '../src/utils/clickableParser';
import { lookupWordBankEntry } from '../src/data/wordBankLookup';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const CITY_ARG = (process.argv[2] || '').trim().toLowerCase();

interface BacklogEntry {
  city: string;
  lesson: string;
  term: string;
  examplesCount: number;
  level?: string;
}

interface CityStats {
  lessons: number;
  goldWords: number;
  goldMissing: number;
  clickableDotted: number;
  backlog: number;
  noise: number;
}

const cityStats = new Map<string, CityStats>();
const backlog: BacklogEntry[] = [];

function cityOf(fileName: string): string {
  return fileName.replace(/_(lesson|guide)_\d+\.json$/, '');
}

function statsFor(city: string): CityStats {
  if (!cityStats.has(city)) {
    cityStats.set(city, {
      lessons: 0,
      goldWords: 0,
      goldMissing: 0,
      clickableDotted: 0,
      backlog: 0,
      noise: 0,
    });
  }
  return cityStats.get(city)!;
}

function auditLessonFile(filePath: string): void {
  const fileName = path.basename(filePath);
  const city = cityOf(fileName);
  if (CITY_ARG && city !== CITY_ARG) return;

  let data: any;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
  } catch {
    return;
  }

  const st = statsFor(city);
  st.lessons += 1;

  const lessonId: string = data.id || fileName;
  const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];

  // Dedup por termo (dourada tem prioridade sobre pontilhada).
  const seen = new Map<string, { kind: 'dourada' | 'pontilhada'; entry: any; text: string; matchedTerm?: string }>();

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
      if (!seen.has(key)) {
        seen.set(key, { kind, entry: token.dictionaryEntry, text: token.text, matchedTerm: token.matchedTerm });
      } else if (kind === 'dourada' && seen.get(key)!.kind === 'pontilhada') {
        seen.set(key, { kind, entry: token.dictionaryEntry, text: token.text, matchedTerm: token.matchedTerm });
      }
    }
  }

  for (const [term, { kind, entry, text, matchedTerm }] of seen) {
    if (kind === 'dourada') {
      st.goldWords += 1;
      if (!hasFourCompleteExamples(entry.examples)) {
        st.goldMissing += 1;
      }
      continue;
    }

    // Pontilhada: aplica a regra do parser de clique (curadoria mestre tem
    // prioridade absoluta, como no app).
    const curated = masterExamplesFor(matchedTerm || text);
    if (curated) {
      entry.examples = curated;
    }
    if (hasFourCompleteExamples(entry.examples)) {
      st.clickableDotted += 1;
      continue;
    }

    // Sem os 4 exemplos: é vocabulário do banco (backlog) ou ruído?
    if (lookupWordBankEntry(text)) {
      st.backlog += 1;
      backlog.push({
        city,
        lesson: lessonId,
        term,
        examplesCount: Array.isArray(entry.examples) ? entry.examples.length : 0,
        level: entry.difficultyLevel,
      });
    } else {
      st.noise += 1;
    }
  }
}

const files = fs.readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
for (const f of files) {
  auditLessonFile(path.join(DATA_DIR, f));
}
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
if (fs.existsSync(GUIDE_DIR)) {
  const guideFiles = fs.readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f));
  for (const f of guideFiles) {
    auditLessonFile(path.join(GUIDE_DIR, f));
  }
}

const cities = Array.from(cityStats.keys()).sort();

console.log('==================================================');
console.log('AUDITORIA: 4 EXEMPLOS EM TODAS AS PALAVRAS DESTACADAS');
console.log(CITY_ARG ? `CIDADE: ${CITY_ARG}` : 'TODAS AS CIDADES');
console.log('==================================================');
console.log('');

let totalGold = 0;
let totalGoldMissing = 0;
let totalClickable = 0;
let totalBacklog = 0;

for (const city of cities) {
  const s = cityStats.get(city)!;
  totalGold += s.goldWords;
  totalGoldMissing += s.goldMissing;
  totalClickable += s.clickableDotted;
  totalBacklog += s.backlog;
  const flag = s.goldMissing + s.backlog > 0 ? '⚠️' : '✅';
  console.log(
    `${flag} ${city.padEnd(20)} aulas=${String(s.lessons).padStart(3)} | douradas=${String(s.goldWords).padStart(4)} (faltam ${String(s.goldMissing).padStart(2)}) | pontilhadas clicáveis=${String(s.clickableDotted).padStart(4)} | backlog de exemplos=${String(s.backlog).padStart(4)} | ruído ignorado=${String(s.noise).padStart(4)}`
  );
}

console.log('');
console.log('--- TOTAIS ---');
console.log(`Douradas: ${totalGold} (sem 4 exemplos: ${totalGoldMissing})`);
console.log(`Pontilhadas clicáveis (já com 4 exemplos): ${totalClickable}`);
console.log(`Backlog (palavras do banco no texto sem 4 exemplos): ${totalBacklog}`);
console.log('');

if (backlog.length > 0) {
  console.log('--- BACKLOG (até 200): palavras do banco que precisam dos 4 exemplos ---');
  for (const b of backlog.slice(0, 200)) {
    console.log(
      `[${b.city}] ${b.lesson} · "${b.term}" · ${b.examplesCount} exemplo(s)${b.level ? ' · ' + b.level : ''}`
    );
  }
  if (backlog.length > 200) {
    console.log(`... e mais ${backlog.length - 200} (ver relatório JSON)`);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  city: CITY_ARG || 'all',
  totals: {
    goldWords: totalGold,
    goldMissing: totalGoldMissing,
    clickableDotted: totalClickable,
    backlog: totalBacklog,
  },
  byCity: Object.fromEntries(cities.map((c) => [c, cityStats.get(c)!])),
  backlog,
};
fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'clickable_examples_report.json'),
  JSON.stringify(report, null, 2)
);

console.log('');
console.log('Relatório completo salvo em scripts/clickable_examples_report.json');
