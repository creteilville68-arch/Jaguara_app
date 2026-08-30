/**
 * Lista os tokens pontilhados DISTINTOS das aulas/guias de Paris que ainda não
 * têm 4 exemplos curados (ou de outra fonte) — ou seja, o conjunto mínimo de
 * chaves que precisam de curadoria no masterExamplesDictionary/backlogs.
 */
import fs from 'fs';
import path from 'path';
import { parseFrenchSentence, getTermFromEntry } from '../src/utils/textParser';
import { masterExamplesFor, hasFourCompleteExamples } from '../src/utils/clickableParser';
import { lookupWordBankEntry } from '../src/data/wordBankLookup';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

interface Missing {
  token: string;
  level?: string;
  bankTerm?: string;
}

const missingByToken = new Map<string, Missing>();

function auditLessonFile(filePath: string): void {
  const fileName = path.basename(filePath);
  if (!fileName.startsWith('paris_')) return;

  let data: any;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
  } catch {
    return;
  }

  const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];

  for (const para of paragraphs) {
    const fr = (para?.fr || '').toString().trim();
    if (!fr) continue;

    const tokens = parseFrenchSentence(fr, vocabDict);
    for (const token of tokens) {
      if (!token.isMatch || token.isDictionaryTerm) continue;
      // Mesma regra do parser de clique:
      const curated = masterExamplesFor(token.matchedTerm || token.text);
      if (curated) {
        token.dictionaryEntry = { ...(token.dictionaryEntry || {}), examples: curated };
      }
      if (hasFourCompleteExamples(token.dictionaryEntry?.examples)) continue;

      const bank = lookupWordBankEntry(token.text);
      if (!bank) continue; // ruído

      const raw = (token.matchedTerm || token.text).toLowerCase().trim();
      if (!missingByToken.has(raw)) {
        missingByToken.set(raw, {
          token: raw,
          level: token.dictionaryEntry?.difficultyLevel || bank.level,
          bankTerm: getTermFromEntry(token.dictionaryEntry as any) || bank.term,
        });
      }
    }
  }
}

const files = fs.readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
for (const f of files) auditLessonFile(path.join(DATA_DIR, f));
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
if (fs.existsSync(GUIDE_DIR)) {
  for (const f of fs.readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f))) {
    auditLessonFile(path.join(GUIDE_DIR, f));
  }
}

const levelOrder: Record<string, number> = {
  'A1': 0, 'A1 (Iniciante)': 0,
  'A2': 1, 'A2 (Básico)': 1,
  'B1': 2, 'B1 (Intermediário)': 2,
  'B2': 3, 'B2 (Intermediário Avançado)': 3,
  'C1': 4, 'C1 (Avançado)': 4,
  'C2': 5, 'C2 (Domínio)': 5,
};
const lv = (l?: string) => (l ? Object.keys(levelOrder).find((k) => (l || '').includes(k.split(' ')[0])) || 'C2' : 'C2');
const items = Array.from(missingByToken.values()).sort(
  (a, b) => (levelOrder[lv(a.level)] ?? 9) - (levelOrder[lv(b.level)] ?? 9) || a.token.localeCompare(b.token, 'fr')
);

console.log('TOTAL chaves distintas faltando em Paris:', items.length);
for (const m of items) {
  console.log(`${lv(m.level)}\t${m.token}\t${m.bankTerm || ''}`);
}
