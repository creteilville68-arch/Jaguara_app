import { normalizeToLemma } from '../utils/lemmaHelper';
// Dictionary sources (mirror of lessonDictionary.ts aggregation). Imported
// directly instead of via lessonDictionary.ts to avoid a circular import
// (lessonDictionary.ts itself imports lookupWordBankEntry from this file).
import { LESSON_DICTIONARY_1 } from './lessonDictionary1';
import { LESSON_DICTIONARY_2 } from './lessonDictionary2';
import { LESSON_DICTIONARY_3 } from './lessonDictionary3';
import { LESSON_DICTIONARY_4 } from './lessonDictionary4';
import { LESSON_DICTIONARY_5 } from './lessonDictionary5';
import { LESSON_DICTIONARY_6 } from './lessonDictionary6';
import { LESSON_DICTIONARY_7 } from './lessonDictionary7';
import { LESSON_DICTIONARY_8 } from './lessonDictionary8';
import { LESSON_DICTIONARY_9 } from './lessonDictionary9';
import { LESSON_DICTIONARY_10 } from './lessonDictionary10';
import { LESSON_DICTIONARY_11 } from './lessonDictionary11';
import { LESSON_DICTIONARY_12 } from './lessonDictionary12';
import { LESSON_DICTIONARY_13 } from './lessonDictionary13';
import { LESSON_DICTIONARY_14 } from './lessonDictionary14';
import { LESSON_DICTIONARY_15 } from './lessonDictionary15';
import { LESSON_DICTIONARY_16 } from './lessonDictionary16';
import { LESSON_DICTIONARY_17 } from './lessonDictionary17';
import { LESSON_DICTIONARY_18 } from './lessonDictionary18';
import { LESSON_DICTIONARY_19 } from './lessonDictionary19';
import { LESSON_DICTIONARY_20 } from './lessonDictionary20';
import { LESSON_DICTIONARY_21 } from './lessonDictionary21';
import { LESSON_DICTIONARY_22 } from './lessonDictionary22';
import { LESSON_DICTIONARY_23 } from './lessonDictionary23';
import { LESSON_DICTIONARY_24 } from './lessonDictionary24';
import { LESSON_DICTIONARY_25 } from './lessonDictionary25';
import { MASTER_FRENCH_DICTIONARY } from './masterFrenchDictionary';
import { FUNCTIONAL_WORDS_DICTIONARY } from './functionalWordsDictionary';
import { TRAIL_DICTIONARY } from './trailDictionaries';
import { CEFR_WORD_BANK } from './cefrWordBank';
import { CEFR_WORD_BANK_A1 } from './cefrWordBankA1';
import { CEFR_WORD_BANK_A2B1 } from './cefrWordBankA2B1';
import { CEFR_WORD_BANK_B2C2 } from './cefrWordBankB2C2';
import { CEFR_WORD_BANK_EXPANSION_A1 } from './cefrWordBankExpansionA1';
import { CEFR_WORD_BANK_EXPANSION_A1_B } from './cefrWordBankExpansionA1B';
import { CEFR_WORD_BANK_EXPANSION_A2 } from './cefrWordBankExpansionA2';
import { CEFR_WORD_BANK_EXPANSION_A2_B } from './cefrWordBankExpansionA2B';
import { CEFR_WORD_BANK_EXPANSION_A2_C } from './cefrWordBankExpansionA2C';
import { CEFR_WORD_BANK_EXPANSION_B1 } from './cefrWordBankExpansionB1';
import { CEFR_WORD_BANK_EXPANSION_B1_B } from './cefrWordBankExpansionB1B';
import { CEFR_WORD_BANK_EXPANSION_B1_C } from './cefrWordBankExpansionB1C';
import { CEFR_WORD_BANK_EXPANSION_B1_D } from './cefrWordBankExpansionB1D';
import { CEFR_WORD_BANK_EXPANSION_B1_E } from './cefrWordBankExpansionB1E';
import { CEFR_WORD_BANK_EXPANSION_B1_F } from './cefrWordBankExpansionB1F';
import { CEFR_WORD_BANK_EXPANSION_B2_A } from './cefrWordBankExpansionB2A';
import { CEFR_WORD_BANK_EXPANSION_B2_B } from './cefrWordBankExpansionB2B';
import { CEFR_WORD_BANK_EXPANSION_B2_C } from './cefrWordBankExpansionB2C';
import { CEFR_WORD_BANK_EXPANSION_B2_D } from './cefrWordBankExpansionB2D';
import { CEFR_WORD_BANK_EXPANSION_B2_E } from './cefrWordBankExpansionB2E';
import { CEFR_WORD_BANK_EXPANSION_B2_F } from './cefrWordBankExpansionB2F';
import { CEFR_WORD_BANK_EXPANSION_B2_G } from './cefrWordBankExpansionB2G';
import { CEFR_WORD_BANK_EXPANSION_B2_H } from './cefrWordBankExpansionB2H';
import { CEFR_WORD_BANK_EXPANSION_B2_I } from './cefrWordBankExpansionB2I';
import { CEFR_WORD_BANK_EXPANSION_B2_J } from './cefrWordBankExpansionB2J';
import { CEFR_WORD_BANK_EXPANSION_B2_K } from './cefrWordBankExpansionB2K';
import { CEFR_WORD_BANK_EXPANSION_B2_L } from './cefrWordBankExpansionB2L';
import { CEFR_WORD_BANK_EXPANSION_B2_M } from './cefrWordBankExpansionB2M';
import { CEFR_WORD_BANK_EXPANSION_B2_N } from './cefrWordBankExpansionB2N';
import { CEFR_WORD_BANK_EXPANSION_B2_O } from './cefrWordBankExpansionB2O';
import { CEFR_WORD_BANK_EXPANSION_B2_P } from './cefrWordBankExpansionB2P';
import { CEFR_WORD_BANK_EXPANSION_B2_Q } from './cefrWordBankExpansionB2Q';
import { CEFR_WORD_BANK_EXPANSION_C1_A } from './cefrWordBankExpansionC1A';
import { CEFR_WORD_BANK_EXPANSION_C1_B } from './cefrWordBankExpansionC1B';
import { CEFR_WORD_BANK_EXPANSION_C1_C } from './cefrWordBankExpansionC1C';
import { CEFR_WORD_BANK_EXPANSION_C1_D } from './cefrWordBankExpansionC1D';
import { CEFR_WORD_BANK_EXPANSION_C1_E } from './cefrWordBankExpansionC1E';
import { CEFR_WORD_BANK_EXPANSION_C1_F } from './cefrWordBankExpansionC1F';
import { CEFR_WORD_BANK_EXPANSION_C1_G } from './cefrWordBankExpansionC1G';
import { CEFR_WORD_BANK_EXPANSION_C1_H } from './cefrWordBankExpansionC1H';
import { CEFR_WORD_BANK_EXPANSION_C1_I } from './cefrWordBankExpansionC1I';
import { CEFR_WORD_BANK_EXPANSION_C1_J } from './cefrWordBankExpansionC1J';
import { CEFR_WORD_BANK_EXPANSION_C1_K } from './cefrWordBankExpansionC1K';
import { CEFR_WORD_BANK_EXPANSION_C1_L } from './cefrWordBankExpansionC1L';
import { CEFR_WORD_BANK_EXPANSION_C1_M } from './cefrWordBankExpansionC1M';
import { CEFR_WORD_BANK_EXPANSION_C1_N } from './cefrWordBankExpansionC1N';
import { CEFR_WORD_BANK_EXPANSION_C1_O } from './cefrWordBankExpansionC1O';
import { CEFR_WORD_BANK_EXPANSION_C1_P } from './cefrWordBankExpansionC1P';
import { CEFR_WORD_BANK_EXPANSION_C1_Q } from './cefrWordBankExpansionC1Q';
import { CEFR_WORD_BANK_EXPANSION_C1_R } from './cefrWordBankExpansionC1R';
import { CEFR_WORD_BANK_EXPANSION_C1_S } from './cefrWordBankExpansionC1S';
import { CEFR_WORD_BANK_EXPANSION_C1_T } from './cefrWordBankExpansionC1T';
import { CEFR_WORD_BANK_EXPANSION_C1_U } from './cefrWordBankExpansionC1U';
import { CEFR_WORD_BANK_EXPANSION_C1_V } from './cefrWordBankExpansionC1V';
import { CEFR_WORD_BANK_EXPANSION_C1_W } from './cefrWordBankExpansionC1W';
import { CEFR_WORD_BANK_EXPANSION_C1_X } from './cefrWordBankExpansionC1X';
import { CEFR_WORD_BANK_EXPANSION_C1_Y } from './cefrWordBankExpansionC1Y';
import { CEFR_WORD_BANK_EXPANSION_C1_Z } from './cefrWordBankExpansionC1Z';
import { CEFR_WORD_BANK_EXPANSION_C1_AA } from './cefrWordBankExpansionC1AA';
import { CEFR_WORD_BANK_EXPANSION_C1_AB } from './cefrWordBankExpansionC1AB';
import { CEFR_WORD_BANK_EXPANSION_C1_AC } from './cefrWordBankExpansionC1AC';
import { CEFR_WORD_BANK_EXPANSION_C1_AD } from './cefrWordBankExpansionC1AD';
import { CEFR_WORD_BANK_EXPANSION_C2_A } from './cefrWordBankExpansionC2A';
import { CEFR_WORD_BANK_EXPANSION_C2_B } from './cefrWordBankExpansionC2B';
import { CEFR_WORD_BANK_EXPANSION_C2_C } from './cefrWordBankExpansionC2C';
import { CEFR_WORD_BANK_EXPANSION_C2_D } from './cefrWordBankExpansionC2D';
import { CEFR_WORD_BANK_EXPANSION_C2_E } from './cefrWordBankExpansionC2E';
import { CEFR_WORD_BANK_EXPANSION_C2_F } from './cefrWordBankExpansionC2F';
import { CEFR_WORD_BANK_EXPANSION_C2_G } from './cefrWordBankExpansionC2G';
import { CEFR_WORD_BANK_EXPANSION_C2_H } from './cefrWordBankExpansionC2H';
import { CEFR_WORD_BANK_EXPANSION_C2_I } from './cefrWordBankExpansionC2I';
import { CEFR_WORD_BANK_EXPANSION_C2_J } from './cefrWordBankExpansionC2J';
import { CEFR_WORD_BANK_EXPANSION_C2_K } from './cefrWordBankExpansionC2K';
import { CEFR_WORD_BANK_EXPANSION_C2_L } from './cefrWordBankExpansionC2L';
import { CEFR_WORD_BANK_EXPANSION_B2_R } from './cefrWordBankExpansionB2R';
import { CEFR_WORD_BANK_EXPANSION_C2_M } from './cefrWordBankExpansionC2M';
import { CEFR_WORD_BANK_EXPANSION_C2_N } from './cefrWordBankExpansionC2N';
import { CEFR_WORD_BANK_EXPANSION_C2_O } from './cefrWordBankExpansionC2O';
import { CEFR_WORD_BANK_EXPANSION_C2_P } from './cefrWordBankExpansionC2P';
import { CEFR_WORD_BANK_EXPANSION_C2_Q } from './cefrWordBankExpansionC2Q';
import { CEFR_WORD_BANK_EXPANSION_C2_R } from './cefrWordBankExpansionC2R';
import { CEFR_WORD_BANK_EXPANSION_C2_S } from './cefrWordBankExpansionC2S';
import { CEFR_WORD_BANK_EXPANSION_C2_T } from './cefrWordBankExpansionC2T';
import { CEFR_WORD_BANK_EXPANSION_C2_U } from './cefrWordBankExpansionC2U';
import { CEFR_WORD_BANK_EXPANSION_C2_V } from './cefrWordBankExpansionC2V';
import { CEFR_WORD_BANK_EXPANSION_C2_W } from './cefrWordBankExpansionC2W';
import { CEFR_WORD_BANK_EXPANSION_C2_X } from './cefrWordBankExpansionC2X';
import { CEFR_WORD_BANK_EXPANSION_C2_Y } from './cefrWordBankExpansionC2Y';
import { CEFR_WORD_BANK_EXPANSION_C2_Z } from './cefrWordBankExpansionC2Z';
import { CEFR_WORD_BANK_EXPANSION_C2_AA } from './cefrWordBankExpansionC2AA';
import { CEFR_WORD_BANK_EXPANSION_C2_AB } from './cefrWordBankExpansionC2AB';
import { CEFR_WORD_BANK_EXPANSION_C2_AC } from './cefrWordBankExpansionC2AC';
import { CEFR_WORD_BANK_EXPANSION_C2_AD } from './cefrWordBankExpansionC2AD';
import { CEFR_WORD_BANK_EXPANSION_C2_AE } from './cefrWordBankExpansionC2AE';
import { CEFR_WORD_BANK_EXPANSION_C2_AF } from './cefrWordBankExpansionC2AF';
import { CEFR_WORD_BANK_EXPANSION_C2_AG } from './cefrWordBankExpansionC2AG';
import { CEFR_WORD_BANK_EXPANSION_C2_AH } from './cefrWordBankExpansionC2AH';
import { CEFR_WORD_BANK_EXPANSION_C2_AI } from './cefrWordBankExpansionC2AI';
import { CEFR_WORD_BANK_EXPANSION_C2_AJ } from './cefrWordBankExpansionC2AJ';
import { CEFR_WORD_BANK_EXPANSION_C2_AK } from './cefrWordBankExpansionC2AK';
import { CEFR_WORD_BANK_EXPANSION_C2_AL } from './cefrWordBankExpansionC2AL';
import { CEFR_WORD_BANK_EXPANSION_C2_AM } from './cefrWordBankExpansionC2AM';
import { CEFR_WORD_BANK_EXPANSION_C2_AN } from './cefrWordBankExpansionC2AN';
import { CEFR_WORD_BANK_EXPANSION_C2_AO } from './cefrWordBankExpansionC2AO';
import { CEFR_WORD_BANK_EXPANSION_C2_AP } from './cefrWordBankExpansionC2AP';
import { CEFR_WORD_BANK_EXPANSION_B2C1C2 } from './cefrWordBankExpansionB2C1C2';
import { CEFR_WORD_BANK_EXPANSION_A2_D } from './cefrWordBankExpansionA2D';
import { CEFR_WORD_BANK_EXPANSION_B1_G } from './cefrWordBankExpansionB1G';
import { CEFR_WORD_BANK_EXPANSION_B2_S } from './cefrWordBankExpansionB2S';
import { CEFR_WORD_BANK_EXPANSION_C1_AE } from './cefrWordBankExpansionC1AE';
import { CURATED_VERB_LEMMAS, CORE_CURATED_VERB_LEMMAS } from './curatedVerbLemmas';
import { PARIS_CONTENT_BANK } from './parisContentBank';
import { AMIENS_CONTENT_BANK } from './amiensContentBank';

export interface WordBankLookupEntry {
  term: string;
  pt: string;
  level: string;
}

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** Normalizes a CEFR level string to its canonical short form (A1..C2). */
export function normalizeBankLevel(value?: string): string {
  if (!value) return 'A1';
  const v = value.toUpperCase();
  for (const lvl of LEVEL_ORDER) {
    if (v.includes(lvl)) return lvl;
  }
  return 'A1';
}

/** Human-readable Portuguese label for a CEFR level. */
export function formatBankLevel(level: string): string {
  switch (normalizeBankLevel(level)) {
    case 'A1':
      return 'A1 (Iniciante)';
    case 'A2':
      return 'A2 (Básico)';
    case 'B1':
      return 'B1 (Intermediário)';
    case 'B2':
      return 'B2 (Intermediário Avançado)';
    case 'C1':
      return 'C1 (Avançado)';
    case 'C2':
      return 'C2 (Domínio)';
    default:
      return level;
  }
}

/** Folds a string: lowercase + accents removed, for robust key comparison. */
function foldKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Authoritative map: real bank terms (canonical lemma + full term).
const LOOKUP = new Map<string, WordBankLookupEntry>();
// Fallback map: single words indexed only as part of a multi-word expression
// (e.g. "avoir" inside "avoir faim"). An explicit plain entry — like the real
// verb "avoir" (ter) registered in a later bank — must always win over these
// sub-word indexes, otherwise clicking "a" would resolve to "avoir faim".
const SUBWORD_LOOKUP = new Map<string, WordBankLookupEntry>();

function register(term: string, pt: string, level?: string): void {
  const clean = (term || '').trim().replace(/[’ʼ‘]/g, "'");
  if (!clean) return;
  const entry: WordBankLookupEntry = {
    term: clean,
    pt: pt || '',
    level: normalizeBankLevel(level),
  };

  // Key 1: the canonical lemma (article-stripped, singularized via lemmaHelper).
  const lemma = normalizeToLemma(clean);
  if (lemma) {
    const key = foldKey(lemma);
    if (!LOOKUP.has(key)) LOOKUP.set(key, entry);
  }

  // Key 2: the full term, folded (supports multi-word entries and expressions).
  const full = foldKey(clean);
  if (!LOOKUP.has(full)) LOOKUP.set(full, entry);

  // Key 3: for multi-word terms, also index each significant single word so a
  // clicked word like "liberté" resolves the entry "la liberté d'expression".
  // These live in the fallback map only: an explicit single-word entry (Key 1/2
  // of a later bank, e.g. the plain verb "avoir") takes precedence over them.
  if (lemma && lemma.includes(' ')) {
    for (const token of lemma.split(/\s+/)) {
      const k = foldKey(token);
      // Do not resolve grammatical glue words through an unrelated
      // multi-word expression (e.g. "de" -> "le dé", "la" -> "là").
      // Subword lookup is reserved for meaningful lexical tokens.
      const FUNCTIONAL_SUBWORDS = new Set([
        'le', 'la', 'les', "l'", 'un', 'une', 'des', 'du', 'de', 'd',
        'au', 'aux', 'à', 'a', 'en', 'et', 'ou', 'où', 'que', 'qui',
        'se', "s'", 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous',
        'ils', 'elles', 'y', 'ça', 'ce', 'cet', 'cette', 'ces',
      ]);
      if (k.length >= 3 && !FUNCTIONAL_SUBWORDS.has(k) && !SUBWORD_LOOKUP.has(k)) {
        SUBWORD_LOOKUP.set(k, entry);
      }
    }
  }
}

// Seed banks (canonical order, first occurrence wins — mirrors wordBank.ts).
for (const [word, pt, level] of CEFR_WORD_BANK) register(word, pt, level);
for (const [word, pt, level] of CEFR_WORD_BANK_A1) register(word, pt, level);
for (const [word, pt, level] of CEFR_WORD_BANK_A2B1) register(word, pt, level);
for (const [word, pt, level] of CEFR_WORD_BANK_B2C2) register(word, pt, level);

const EXPANSION_BANKS: Array<Array<[string, string, string]>> = [
  CEFR_WORD_BANK_EXPANSION_A1,
  CEFR_WORD_BANK_EXPANSION_A1_B,
  CEFR_WORD_BANK_EXPANSION_A2,
  CEFR_WORD_BANK_EXPANSION_A2_B,
  CEFR_WORD_BANK_EXPANSION_A2_C,
  CEFR_WORD_BANK_EXPANSION_B1,
  CEFR_WORD_BANK_EXPANSION_B1_B,
  CEFR_WORD_BANK_EXPANSION_B1_C,
  CEFR_WORD_BANK_EXPANSION_B1_D,
  CEFR_WORD_BANK_EXPANSION_B1_E,
  CEFR_WORD_BANK_EXPANSION_B1_F,
  CEFR_WORD_BANK_EXPANSION_B2_A,
  CEFR_WORD_BANK_EXPANSION_B2_B,
  CEFR_WORD_BANK_EXPANSION_B2_C,
  CEFR_WORD_BANK_EXPANSION_B2_D,
  CEFR_WORD_BANK_EXPANSION_B2_E,
  CEFR_WORD_BANK_EXPANSION_B2_F,
  CEFR_WORD_BANK_EXPANSION_B2_G,
  CEFR_WORD_BANK_EXPANSION_B2_H,
  CEFR_WORD_BANK_EXPANSION_B2_I,
  CEFR_WORD_BANK_EXPANSION_B2_J,
  CEFR_WORD_BANK_EXPANSION_B2_K,
  CEFR_WORD_BANK_EXPANSION_B2_L,
  CEFR_WORD_BANK_EXPANSION_B2_M,
  CEFR_WORD_BANK_EXPANSION_B2_N,
  CEFR_WORD_BANK_EXPANSION_B2_O,
  CEFR_WORD_BANK_EXPANSION_B2_P,
  CEFR_WORD_BANK_EXPANSION_B2_Q,
  CEFR_WORD_BANK_EXPANSION_C1_A,
  CEFR_WORD_BANK_EXPANSION_C1_B,
  CEFR_WORD_BANK_EXPANSION_C1_C,
  CEFR_WORD_BANK_EXPANSION_C1_D,
  CEFR_WORD_BANK_EXPANSION_C1_E,
  CEFR_WORD_BANK_EXPANSION_C1_F,
  CEFR_WORD_BANK_EXPANSION_C1_G,
  CEFR_WORD_BANK_EXPANSION_C1_H,
  CEFR_WORD_BANK_EXPANSION_C1_I,
  CEFR_WORD_BANK_EXPANSION_C1_J,
  CEFR_WORD_BANK_EXPANSION_C1_K,
  CEFR_WORD_BANK_EXPANSION_C1_L,
  CEFR_WORD_BANK_EXPANSION_C1_M,
  CEFR_WORD_BANK_EXPANSION_C1_N,
  CEFR_WORD_BANK_EXPANSION_C1_O,
  CEFR_WORD_BANK_EXPANSION_C1_P,
  CEFR_WORD_BANK_EXPANSION_C1_Q,
  CEFR_WORD_BANK_EXPANSION_C1_R,
  CEFR_WORD_BANK_EXPANSION_C1_S,
  CEFR_WORD_BANK_EXPANSION_C1_T,
  CEFR_WORD_BANK_EXPANSION_C1_U,
  CEFR_WORD_BANK_EXPANSION_C1_V,
  CEFR_WORD_BANK_EXPANSION_C1_W,
  CEFR_WORD_BANK_EXPANSION_C1_X,
  CEFR_WORD_BANK_EXPANSION_C1_Y,
  CEFR_WORD_BANK_EXPANSION_C1_Z,
  CEFR_WORD_BANK_EXPANSION_C1_AA,
  CEFR_WORD_BANK_EXPANSION_C1_AB,
  CEFR_WORD_BANK_EXPANSION_C1_AC,
  CEFR_WORD_BANK_EXPANSION_C1_AD,
  CEFR_WORD_BANK_EXPANSION_C2_A,
  CEFR_WORD_BANK_EXPANSION_C2_B,
  CEFR_WORD_BANK_EXPANSION_C2_C,
  CEFR_WORD_BANK_EXPANSION_C2_D,
  CEFR_WORD_BANK_EXPANSION_C2_E,
  CEFR_WORD_BANK_EXPANSION_C2_F,
  CEFR_WORD_BANK_EXPANSION_C2_G,
  CEFR_WORD_BANK_EXPANSION_C2_H,
  CEFR_WORD_BANK_EXPANSION_C2_I,
  CEFR_WORD_BANK_EXPANSION_C2_J,
  CEFR_WORD_BANK_EXPANSION_C2_K,
  CEFR_WORD_BANK_EXPANSION_C2_L,
  CEFR_WORD_BANK_EXPANSION_B2_R,
  CEFR_WORD_BANK_EXPANSION_C2_M,
  CEFR_WORD_BANK_EXPANSION_C2_N,
  CEFR_WORD_BANK_EXPANSION_C2_O,
  CEFR_WORD_BANK_EXPANSION_C2_P,
  CEFR_WORD_BANK_EXPANSION_C2_Q,
  CEFR_WORD_BANK_EXPANSION_C2_R,
  CEFR_WORD_BANK_EXPANSION_C2_S,
  CEFR_WORD_BANK_EXPANSION_C2_T,
  CEFR_WORD_BANK_EXPANSION_C2_U,
  CEFR_WORD_BANK_EXPANSION_C2_V,
  CEFR_WORD_BANK_EXPANSION_C2_W,
  CEFR_WORD_BANK_EXPANSION_C2_X,
  CEFR_WORD_BANK_EXPANSION_C2_Y,
  CEFR_WORD_BANK_EXPANSION_C2_Z,
  CEFR_WORD_BANK_EXPANSION_C2_AA,
  CEFR_WORD_BANK_EXPANSION_C2_AB,
  CEFR_WORD_BANK_EXPANSION_C2_AC,
  CEFR_WORD_BANK_EXPANSION_C2_AD,
  CEFR_WORD_BANK_EXPANSION_C2_AE,
  CEFR_WORD_BANK_EXPANSION_C2_AF,
  CEFR_WORD_BANK_EXPANSION_C2_AG,
  CEFR_WORD_BANK_EXPANSION_C2_AH,
  CEFR_WORD_BANK_EXPANSION_C2_AI,
  CEFR_WORD_BANK_EXPANSION_C2_AJ,
  CEFR_WORD_BANK_EXPANSION_C2_AK,
  CEFR_WORD_BANK_EXPANSION_C2_AL,
  CEFR_WORD_BANK_EXPANSION_C2_AM,
  CEFR_WORD_BANK_EXPANSION_C2_AN,
  CEFR_WORD_BANK_EXPANSION_C2_AO,
  CEFR_WORD_BANK_EXPANSION_C2_AP,
  CEFR_WORD_BANK_EXPANSION_B2C1C2,
  CEFR_WORD_BANK_EXPANSION_A2_D,
  CEFR_WORD_BANK_EXPANSION_B1_G,
  CEFR_WORD_BANK_EXPANSION_B2_S,
  CEFR_WORD_BANK_EXPANSION_C1_AE,
];

for (const bank of EXPANSION_BANKS) {
  for (const [word, pt, level] of bank) register(word, pt, level);
}

// Dictionary entries (Paris lessons + master + functional + trail) are
// registered LAST, as a gap-fill: they only add words not already present in
// the CEFR banks. This mirrors wordBank.ts so every official bank term
// (ex.: "boulevard périphérique", "colonne morris", "arrondissement
// municipal") resolves to a clickable entry instead of staying plain text.
// Placeholder entries with difficultyLevel "undefined" are skipped so real
// CEFR levels remain the source of truth.
const DICTIONARY_SOURCES: Array<Record<string, { term?: string; wordFr?: string; word?: string; definitionPt?: string; difficultyLevel?: string }>> = [
  LESSON_DICTIONARY_1,
  LESSON_DICTIONARY_2,
  LESSON_DICTIONARY_3,
  LESSON_DICTIONARY_4,
  LESSON_DICTIONARY_5,
  LESSON_DICTIONARY_6,
  LESSON_DICTIONARY_7,
  LESSON_DICTIONARY_8,
  LESSON_DICTIONARY_9,
  LESSON_DICTIONARY_10,
  LESSON_DICTIONARY_11,
  LESSON_DICTIONARY_12,
  LESSON_DICTIONARY_13,
  LESSON_DICTIONARY_14,
  LESSON_DICTIONARY_15,
  LESSON_DICTIONARY_16,
  LESSON_DICTIONARY_17,
  LESSON_DICTIONARY_18,
  LESSON_DICTIONARY_19,
  LESSON_DICTIONARY_20,
  LESSON_DICTIONARY_21,
  LESSON_DICTIONARY_22,
  LESSON_DICTIONARY_23,
  LESSON_DICTIONARY_24,
  LESSON_DICTIONARY_25,
  MASTER_FRENCH_DICTIONARY,
  FUNCTIONAL_WORDS_DICTIONARY,
  TRAIL_DICTIONARY,
];
for (const source of DICTIONARY_SOURCES) {
  for (const key of Object.keys(source)) {
    const entry = source[key];
    if (!entry) continue;
    if (!entry.difficultyLevel || entry.difficultyLevel === 'undefined') continue;
    const term = entry.term || entry.wordFr || entry.word || key;
    register(term, entry.definitionPt || '', entry.difficultyLevel);
  }
}

// Core verb overrides: high-frequency verbs the banks only list inside
// multi-word expressions (e.g. "avoir faim"). The plain lemma must resolve to
// the bare verb with its real A1 level, not to the expression's sub-word index.
for (const [word, pt, level] of [['avoir', 'ter', 'A1']] as Array<[string, string, string]>) {
  const key = foldKey(normalizeToLemma(word));
  if (key) LOOKUP.set(key, { term: word, pt, level: normalizeBankLevel(level) });
}

// Content words used by the Enciclopédia guides that are NOT covered by the
// seed/expansion banks (verified via audit). They must exist for the parser to
// star/dot the presented form and open a proper study modal.
const ENCYCLOPEDIA_BANK: Array<[string, string]> = [
  ['percer', 'perfurar / abrir (um buraco)'],
  ['attaquer', 'atacar'],
  ['invasion', 'invasão'],
  ['mélange', 'mistura'],
  ['gaulois', 'gaulês'],
  ['approvisionnement', 'abastecimento'],
  ['municipal', 'municipal'],
  ['attachant', 'cativante (que desperta afeição)'],
  // Verbos narrativos com curadoria (módulo masterExamplesParisVerbsA / extras).
  ['naviguer', 'navegar'],
  ['redonner', 'devolver / dar de novo'],
  ['rouvrir', 'reabrir'],
  ['révolutionner', 'revolucionar'],
  ['savourer', 'saborear'],
  ['naître', 'nascer'],
  ['paraître', 'parecer / sair (publicação)'],
  ['apparaître', 'aparecer'],
  ['disparaître', 'desaparecer'],
];
for (const [word, pt] of ENCYCLOPEDIA_BANK) {
  const clean = word.trim().replace(/[’ʼ‘]/g, "'");
  const key = foldKey(normalizeToLemma(clean));
  if (key && !LOOKUP.has(key)) {
    LOOKUP.set(key, { term: clean, pt, level: normalizeBankLevel('B2') });
  }
  const full = foldKey(clean);
  if (!LOOKUP.has(full)) LOOKUP.set(full, { term: clean, pt, level: normalizeBankLevel('B2') });
}

for (const [word, pt] of PARIS_CONTENT_BANK) {
  const clean = word.trim().replace(/[’ʼ‘]/g, "'");
  const key = foldKey(normalizeToLemma(clean));
  if (key && !LOOKUP.has(key)) {
    LOOKUP.set(key, { term: clean, pt, level: normalizeBankLevel('B1') });
  }
  const full = foldKey(clean);
  if (!LOOKUP.has(full)) LOOKUP.set(full, { term: clean, pt, level: normalizeBankLevel('B1') });
}

for (const [word, pt] of AMIENS_CONTENT_BANK) {
  const clean = word.trim().replace(/[’ʼ‘]/g, "'");
  const key = foldKey(normalizeToLemma(clean));
  if (key && !LOOKUP.has(key)) {
    LOOKUP.set(key, { term: clean, pt, level: normalizeBankLevel('B1') });
  }
  const full = foldKey(clean);
  if (!LOOKUP.has(full)) LOOKUP.set(full, { term: clean, pt, level: normalizeBankLevel('B1') });
}

// Explicit irregular aliases must be installed after all banks. Otherwise an
// article-bearing entry such as "l'été" can occupy the folded key "etaient"
// through the broad lemma index and steal the form "étaient" from être.
const IRREGULAR_ALIASES: Array<[string, string]> = [
  ['étaient', 'être'], ['était', 'être'], ['furent', 'être'],
  ['avaient', 'avoir'], ['eurent', 'avoir'],
  ['devint', 'devenir'], ['devinrent', 'devenir'], ['fit', 'faire'],
  ['firent', 'faire'], ['fallut', 'falloir'], ['tomba', 'tomber'],
  ['tombèrent', 'tomber'], ['bouleversa', 'bouleverser'],
  ['érigea', 'ériger'], ['érigèrent', 'ériger'],
  ['installèrent', 'installer'], ['vécurent', 'vivre'], ['moururent', 'mourir'],
  // Formas verbais do récit histórico (passé simple / imparfait / participe).
  ['transforma', 'transformer'], ['imposa', 'imposer'], ['modernisa', 'moderniser'],
  ['protégeait', 'protéger'], ['protégeaient', 'protéger'],
  ['perça', 'percer'], ['perçait', 'percer'],
  ['conserver', 'conserver'], ['conservée', 'conserver'], ['conservé', 'conserver'],
  ['attaqués', 'attaquer'], ['attaqué', 'attaquer'], ['attaquée', 'attaquer'],
  ['rappellent', 'rappeler'], ['rappeler', 'rappeler'],
  ['s’appelait', 'appeler'], ["s'appelait", 'appeler'],
  // Flexões plurais/femininas de nomes e adjetivos do récit.
  ['invasions', 'invasion'], ['monumentaux', 'monumental'],
  ['municipaux', 'municipal'], ['oubliés', 'oublier'],
  ['contraints', 'contraindre'], ['rois', 'roi'],
  ['attachante', 'attachant'], ['attachantes', 'attachant'],
  // --- Amiens: flexões irregulares / não deriváveis por sufixo ---
  ['transmise', 'transmettre'], ['transmises', 'transmettre'],
  ['vendent', 'vendre'], ['perdent', 'perdre'],
  ['survécu', 'survivre'], ['survécue', 'survivre'],
  ['réjouit', 'réjouir'], ['réjouissent', 'réjouir'], ['réjouissait', 'réjouir'],
  ['plaint', 'plaindre'], ['plaît', 'plaire'], ['plait', 'plaire'],
  ['craint', 'craindre'], ['crainte', 'craindre'],
  ['rétablit', 'rétablir'], ['rétablissent', 'rétablir'],
  ['avertit', 'avertir'], ['avertissent', 'avertir'],
  ['vomit', 'vomir'], ['vomissent', 'vomir'],
  ['applaudit', 'applaudir'], ['applaudissent', 'applaudir'],
  ['contient', 'contenir'], ['contiennent', 'contenir'],
  ['maintient', 'maintenir'], ['maintiennent', 'maintenir'],
  ['devienne', 'devenir'], ['deviennent', 'devenir'],
  ['dépende', 'dépendre'], ['dépendent', 'dépendre'],
  ['répond', 'répondre'], ['répondait', 'répondre'], ['répondaient', 'répondre'],
  ['releva', 'relever'], ['relevèrent', 'relever'],
  ['reconstruisirent', 'reconstruire'],
  ['sculptée', 'sculpter'], ['sculptées', 'sculpter'],
  ['embellis', 'embellir'], ['embellie', 'embellir'], ['embellissent', 'embellir'],
  ['enrichis', 'enrichir'], ['enrichie', 'enrichir'], ['enrichissent', 'enrichir'],
  ['bâti', 'bâtir'], ['bâtie', 'bâtir'], ['bâties', 'bâtir'], ['bâtis', 'bâtir'],
  ['cueillis', 'cueillir'], ['cueillie', 'cueillir'],
  ['conquis', 'conquérir'], ['conquise', 'conquérir'],
  ['déchiré', 'déchirer'], ['déchirée', 'déchirer'], ['déchirés', 'déchirer'],
  ['recueillent', 'recueillir'], ['recueillait', 'recueillir'], ['recueillis', 'recueillir'],
  ['rassurent', 'rassurer'], ['rassurait', 'rassurer'],
  ['avait', 'avoir'],
  ['connu', 'connaître'], ['connue', 'connaître'], ['connus', 'connaître'],
  ['tire', 'tirer'], ['tirait', 'tirer'], ['tirent', 'tirer'],
  ['dure', 'durer'], ['durent', 'durer'],
  ['râle', 'râler'], ['râlent', 'râler'],
  ['nue', 'nu'], ['nues', 'nu'],
  ['chu', 'choir'], ['chue', 'choir'], ['chus', 'choir'],
  ['paiera', 'payer'], ['paieront', 'payer'],
  ['renaît', 'renaître'], ['renaissent', 'renaître'],
  ['survit', 'survivre'], ['survivent', 'survivre'],
  ['pleurant', 'pleurer'], ['pleurait', 'pleurer'],
  ['provoquant', 'provoquer'], ['provoquait', 'provoquer'],
  ['affirmant', 'affirmer'], ['affirmait', 'affirmer'],
  ['regardant', 'regarder'], ['regardait', 'regarder'],
  ['sortant', 'sortir'], ['sortait', 'sortir'],
  ['attendant', 'attendre'], ['attendait', 'attendre'],
  ['combattu', 'combattre'], ['combattue', 'combattre'],
  ['défendu', 'défendre'], ['défendue', 'défendre'], ['défendus', 'défendre'],
  ['contournant', 'contourner'], ['contournait', 'contourner'],
  ['jugeront', 'juger'], ['jugera', 'juger'],
  ['réapprennent', 'réapprendre'], ['réapprend', 'réapprendre'],
  ['ans', 'an'],
  // --- Amiens: formas bloqueadas pelas regras genéricas de plural/feminino ---
  ['matériaux', 'matériau'], ['fléaux', 'fléau'], ['beaux', 'beau'],
  ['imprévus', 'imprévu'], ['inattendus', 'inattendu'], ['apprentis', 'apprenti'],
  // --- Amiens: flexões verbais não deriváveis por sufixo ---
  ['tait', 'se taire'], ['emparent', "s'emparer"], ['nettoie', 'nettoyer'],
  ['décrite', 'décrire'], ['exclue', 'exclure'],
  // --- Enciclopédia: irregulares não cobertos por sufixo ---
  ['vieille', 'vieux'], ['vieilles', 'vieux'],
  ['cris', 'cri'],
];
for (const [form, lemma] of IRREGULAR_ALIASES) {
  const hit = LOOKUP.get(foldKey(lemma));
  if (hit) LOOKUP.set(foldKey(form), hit);
}

// Snapshot of all bank values for O(1)-ish irregular-form resolution.
const LOOKUP_VALUES = Array.from(LOOKUP.values());

/** Total unique entries indexed (deduplicated by primary lemma). */
export function getWordBankLookupSize(): number {
  return LOOKUP.size;
}
// end

/**
 * Resolves a clicked French word (any inflection, with or without article)
 * to its CEFR word-bank entry, returning the canonical term, PT translation
 * and level. Returns undefined when the word is not in the bank.
 */
// Grammatical function words (articles, prepositions, pronouns, conjunctions,
// auxiliaries and core adverbs) that should be clickable everywhere with their
// TRUE meaning — never mapped to an unrelated homonym (dé, dès, là, l'été...).
// Each returns a correct bank entry; curated 4-example sets live in
// src/data/masterExamplesFunctionWords.ts.
const FUNCTION_WORD_OVERRIDES: Record<string, { term: string; pt: string; level: string }> = {
  le: { term: 'le', pt: 'o (artigo definido)', level: 'A1' },
  la: { term: 'la', pt: 'a (artigo definido)', level: 'A1' },
  les: { term: 'les', pt: 'os / as (artigo definido)', level: 'A1' },
  l: { term: "l'", pt: "o / a (antes de vogal)", level: 'A1' },
  un: { term: 'un', pt: 'um', level: 'A1' },
  une: { term: 'une', pt: 'uma', level: 'A1' },
  des: { term: 'des', pt: 'uns / umas / dos / das (artigo)', level: 'A1' },
  de: { term: 'de', pt: 'de / do / da (preposição)', level: 'A1' },
  du: { term: 'du', pt: 'do / da (de + le)', level: 'A1' },
  d: { term: "d'", pt: 'de (antes de vogal)', level: 'A1' },
  au: { term: 'au', pt: 'ao / no (à + le)', level: 'A1' },
  aux: { term: 'aux', pt: 'aos / nos (à + les)', level: 'A1' },
  à: { term: 'à', pt: 'a / em / para (preposição)', level: 'A1' },
  a: { term: 'avoir', pt: 'tem / há (verbo ter)', level: 'A1' },
  en: { term: 'en', pt: 'em / para lá (preposição, pronome)', level: 'A1' },
  et: { term: 'et', pt: 'e', level: 'A1' },
  ou: { term: 'ou', pt: 'ou', level: 'A1' },
  où: { term: 'où', pt: 'onde', level: 'A1' },
  qui: { term: 'qui', pt: 'quem / que', level: 'A1' },
  que: { term: 'que', pt: 'que (relativo, conjunção)', level: 'A1' },
  y: { term: 'y', pt: 'lá / aí / nisso (pronome adverbial)', level: 'A1' },
  elle: { term: 'elle', pt: 'ela', level: 'A1' },
  elles: { term: 'elles', pt: 'elas', level: 'A1' },
  il: { term: 'il', pt: 'ele', level: 'A1' },
  ils: { term: 'ils', pt: 'eles', level: 'A1' },
  nous: { term: 'nous', pt: 'nós (pronome)', level: 'A1' },
  vous: { term: 'vous', pt: 'você / vocês (pronome)', level: 'A1' },
  on: { term: 'on', pt: 'a gente / nós / se', level: 'A1' },
  dont: { term: 'dont', pt: 'cujo / do qual (pronome relativo)', level: 'B1' },
  leur: { term: 'leur', pt: 'seu / sua (deles/delas); lhes', level: 'A1' },
  son: { term: 'son', pt: 'seu / sua (dele dela)', level: 'A1' },
  sa: { term: 'sa', pt: 'sua (dele dela)', level: 'A1' },
  ses: { term: 'ses', pt: 'seus / suas', level: 'A1' },
  avec: { term: 'avec', pt: 'com', level: 'A1' },
  pour: { term: 'pour', pt: 'para', level: 'A1' },
  sur: { term: 'sur', pt: 'sobre / em cima de', level: 'A1' },
  plus: { term: 'plus', pt: 'mais', level: 'A1' },
  moins: { term: 'moins', pt: 'menos', level: 'A1' },
  comme: { term: 'comme', pt: 'como', level: 'B1' },
  chaque: { term: 'chaque', pt: 'cada', level: 'A2' },
  est: { term: 'être', pt: 'é / está (verbo ser/estar)', level: 'A1' },
  sont: { term: 'être', pt: 'são / estão (verbo ser/estar)', level: 'A1' },
  ce: { term: 'ce', pt: 'isto / este', level: 'A1' },
  cet: { term: 'cet', pt: 'este (antes de vogal)', level: 'A2' },
  cette: { term: 'cette', pt: 'esta', level: 'A1' },
  ces: { term: 'ces', pt: 'estes / estas', level: 'A1' },
  presque: { term: 'presque', pt: 'quase', level: 'B1' },
  même: { term: 'même', pt: 'mesmo(a) / ainda / até', level: 'A1' },
  dans: { term: 'dans', pt: 'em / dentro de', level: 'A1' },
  se: { term: 'se', pt: 'se (pronome reflexo)', level: 'A1' },
  ne: { term: 'ne', pt: 'não (negação)', level: 'A1' },
  lui: { term: 'lui', pt: 'ele / lhe (pronome)', level: 'A1' },
  eux: { term: 'eux', pt: 'eles (pronome)', level: 'A1' },
};

// Verb lemmas with curated 4-example sets (folded keys). Used as the gate for
// verb-form derivation so only quality, audit-green resolutions are produced.
const CURATED_VERB_GATE = new Set<string>();
for (const lemma of CURATED_VERB_LEMMAS) CURATED_VERB_GATE.add(foldKey(lemma));
for (const lemma of CORE_CURATED_VERB_LEMMAS) CURATED_VERB_GATE.add(foldKey(lemma));

/**
 * Inflected French verb form -> candidate infinitive lemmas. The gate in
 * lookupWordBankEntry filters these against banked + curated lemmas, so
 * imperfect candidates (e.g. "connaisr") are simply dropped.
 */
function deriveVerbLemmas(w: string): string[] {
  const out: string[] = [];
  const push = (s: string) => {
    if (s && s.length >= 3 && !out.includes(s)) out.push(s);
  };
  // Passé simple / futur -er: parla -> parler; visitera -> visiter.
  if (w.endsWith('a') && w.length > 3) {
    push(w.slice(0, -1) + 'er');
    push(w.slice(0, -1));
  }
  if (w.endsWith('èrent')) push(w.slice(0, -5) + 'er');
  // Présent / imparfait -er.
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
  // -ir / formas em -t: finit -> finir; court -> courir; sort -> sortir.
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
  // -re: prend -> prendre.
  if (w.endsWith('d') && w.length > 3) push(w + 're');
  // -aître: naît -> naître; naissent -> naître.
  if (w.endsWith('aît')) push(w.slice(0, -3) + 'aître');
  if (w.endsWith('aissent')) push(w.slice(0, -7) + 'aître');
  // Participe passé: donné(e)(s) -> donner; fini(e)(s) -> finir.
  if (w.endsWith('ées') || w.endsWith('és')) push(w.replace(/ée?s$/, 'er'));
  if (w.endsWith('ée') || w.endsWith('é')) push(w.replace(/ée?$/, 'er'));
  if (w.endsWith('ies') || w.endsWith('is')) push(w.replace(/ie?s$/, 'ir'));
  if (w.endsWith('ie') || w.endsWith('i')) push(w.replace(/ie?$/, 'ir'));
  // Futur / conditionnel: visiteront -> visiter; finirait -> finir.
  if (w.endsWith('ont') && w.length > 4) push(w.slice(0, -3));
  if (w.endsWith('rait') && w.length > 5) push(w.slice(0, -4) + 'r');
  if (w.endsWith('raient')) push(w.slice(0, -6) + 'r');
  // Gérondif / participe présent: transformant -> transformer.
  if (w.endsWith('ant') && w.length > 5) push(w.slice(0, -3) + 'er');
  // Alternância de acento dos verbos em -er: possède -> posséder, libère ->
  // libérer, fédère -> fédérer, déceler -> décèlent. O candidato cru produz
  // "possèder"; a variante com é é a forma canônica do banco.
  for (const cand of [...out]) {
    if (cand.endsWith('er') && cand.includes('è')) {
      push(cand.replace(/è(?=[a-z]*er$)/, 'é'));
    }
  }
  return out;
}

// Verb meanings for lemmas whose folded bank key is occupied by a noun or
// expression (devoir -> "le devoir", savoir -> "le savoir", être -> "l'été",
// laisser -> "laisser un message", noyer -> "le noyer"). Inflected forms must
// resolve to the verb.
const VERB_ALIAS_ENTRIES: Record<string, WordBankLookupEntry> = {
  'être': { term: 'être', pt: 'ser / estar', level: 'A1' },
  'devoir': { term: 'devoir', pt: 'dever / ter que', level: 'A1' },
  'savoir': { term: 'savoir', pt: 'saber', level: 'A1' },
  'laisser': { term: 'laisser', pt: 'deixar', level: 'A1' },
  'noyer': { term: 'noyer', pt: 'afogar / inundar', level: 'B2' },
};

export function lookupWordBankEntry(raw: string): WordBankLookupEntry | undefined {
  if (!raw) return undefined;
  const clean = raw.trim().toLowerCase().replace(/[’ʼ‘]/g, "'");
  if (!clean) return undefined;

  // Grammatical function words resolve to a correct, curated entry before any
  // broader bank logic (which could otherwise map de->dé, des->dès, la->là,
  // est->l'été, ou->où, une->la une).
  const fw = FUNCTION_WORD_OVERRIDES[clean];
  if (fw) {
    return { term: fw.term, pt: fw.pt, level: fw.level };
  }

  // Feminine plural -euses -> masculine -eux (audacieuses -> audacieux,
  // silencieuses -> silencieux, délicieuses -> délicieux).
  if (clean.endsWith('euses') && clean.length > 6) {
    const hit = LOOKUP.get(foldKey(clean.slice(0, -5) + 'eux'));
    if (hit) return hit;
  }

  // Elided forms of function words: qu'elle -> elle, l'on -> on, d'autres -> autres.
  const elidedFw = clean.match(/^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ](.+)$/i);
  if (elidedFw) {
    const inner = elidedFw[1];
    const innerFw = FUNCTION_WORD_OVERRIDES[inner];
    if (innerFw) {
      return { term: innerFw.term, pt: innerFw.pt, level: innerFw.level };
    }
  }

  const candidates: string[] = [];
  const push = (s: string) => {
    if (s) candidates.push(foldKey(s));
  };

  // A forma literal sempre vence: evita que uma normalização agressiva
  // confunda homônimos como "étaient" com "l'été".
  const literalHit = LOOKUP.get(foldKey(clean));
  if (literalHit && foldKey(literalHit.term) === foldKey(clean)) return literalHit;
  // A folded key may already be occupied by an unrelated lemma (for example
  // `être` and the article-bearing `l'été`). Never trust that collision for a
  // verb form; explicit aliases below must get the opportunity to win.
  if (foldKey(clean) === 'etre' || foldKey(clean) === 'étaient' || foldKey(clean) === 'etaient' || foldKey(clean) === 'furent') {
    const verbHit = LOOKUP_VALUES.find((entry) =>
      foldKey(entry.term) === 'etre' && entry.pt === 'ser / estar',
    );
    if (verbHit) return verbHit;
  }
  push(clean);
  push(normalizeToLemma(clean));

  // French elision prefixes: j', l', d', c', m', t', s', n', qu', jusqu', lorsqu', puisqu'
  const elision = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i;
  if (elision.test(clean)) {
    const stripped = clean.replace(elision, '');
    if (stripped) {
      push(normalizeToLemma(stripped));
      push(stripped);
    }
  }

  // Common irregular and literary verb forms used in narration.
  // These are explicit because suffix stripping alone cannot recover être
  // (étaient) or passé simple reflexive forms reliably.
  const irregularForms: Record<string, string> = {
    étaient: 'être',
    etais: 'être',
    était: 'être',
    etaient: 'être',
    furent: 'être',
    eurent: 'avoir',
    avaient: 'avoir',
    devint: 'devenir',
    devinrent: 'devenir',
    fit: 'faire',
    firent: 'faire',
    fallut: 'falloir',
    tomba: 'tomber',
    tombèrent: 'tomber',
    bouleversa: 'bouleverser',
    érigea: 'ériger',
    érigèrent: 'ériger',
    installèrent: 'installer',
    vécurent: 'vivre',
    moururent: 'mourir',
    transforma: 'transformer',
    imposa: 'imposer',
    modernisa: 'moderniser',
    protégeait: 'protéger',
    protégeaient: 'protéger',
    perça: 'percer',
    perçait: 'percer',
    conservée: 'conserver',
    conservé: 'conserver',
    attaqués: 'attaquer',
    attaqué: 'attaquer',
    attaquée: 'attaquer',
    rappellent: 'rappeler',
    "s’appelait": 'appeler',
    "s'appelait": 'appeler',
    invasions: 'invasion',
    monumentaux: 'monumental',
    municipaux: 'municipal',
    oubliés: 'oublier',
    contraints: 'contraindre',
    rois: 'roi',
    attachante: 'attachant',
    attachantes: 'attachant',
    // --- Verbos de núcleo: être / avoir / faire / aller ---
    suis: 'être', es: 'être', sommes: 'être', êtes: 'être',
    étais: 'être', étions: 'être', étiez: 'être',
    fut: 'être', sera: 'être', seront: 'être', serait: 'être', seraient: 'être',
    soit: 'être', soient: 'être',
    avons: 'avoir', avez: 'avoir', ont: 'avoir',
    aura: 'avoir', auront: 'avoir', aurait: 'avoir', auraient: 'avoir',
    ait: 'avoir', aient: 'avoir', eu: 'avoir', eue: 'avoir', eus: 'avoir', eues: 'avoir',
    font: 'faire', fait: 'faire', faite: 'faire', faits: 'faire', faites: 'faire',
    faisait: 'faire', faisaient: 'faire', faisons: 'faire',
    fera: 'faire', feront: 'faire', ferait: 'faire', feraient: 'faire', fasse: 'faire',
    va: 'aller', vont: 'aller', allait: 'aller', allaient: 'aller', allons: 'aller', allez: 'aller',
    allé: 'aller', allée: 'aller', allés: 'aller', allées: 'aller',
    ira: 'aller', iront: 'aller', irait: 'aller', iraient: 'aller', aille: 'aller',
    // --- -oir / irregulares de núcleo ---
    peut: 'pouvoir', peuvent: 'pouvoir', pouvait: 'pouvoir', pouvaient: 'pouvoir',
    pouvons: 'pouvoir', pu: 'pouvoir', put: 'pouvoir', purent: 'pouvoir',
    pourra: 'pouvoir', pourront: 'pouvoir', pourrait: 'pouvoir', pourraient: 'pouvoir', puisse: 'pouvoir',
    veut: 'vouloir', veulent: 'vouloir', voulait: 'vouloir', voulaient: 'vouloir',
    voulons: 'vouloir', voulu: 'vouloir', voulut: 'vouloir', voulurent: 'vouloir',
    voudra: 'vouloir', voudront: 'vouloir', voudrait: 'vouloir', voudraient: 'vouloir',
    sait: 'savoir', savent: 'savoir', savait: 'savoir', savaient: 'savoir', savons: 'savoir',
    su: 'savoir', sut: 'savoir', surent: 'savoir',
    saura: 'savoir', sauront: 'savoir', saurait: 'savoir', sauraient: 'savoir',
    voit: 'voir', voient: 'voir', voyait: 'voir', voyaient: 'voir', voyons: 'voir',
    vu: 'voir', vue: 'voir', vus: 'voir', vues: 'voir', virent: 'voir',
    verra: 'voir', verront: 'voir', verrait: 'voir', verraient: 'voir', voie: 'voir',
    croit: 'croire', croient: 'croire', croyait: 'croire', croyaient: 'croire',
    cru: 'croire', crut: 'croire', crurent: 'croire',
    doit: 'devoir', doivent: 'devoir', devait: 'devoir', devaient: 'devoir', devons: 'devoir',
    dû: 'devoir', due: 'devoir', dus: 'devoir', dues: 'devoir', dut: 'devoir', durent: 'devoir',
    devra: 'devoir', devront: 'devoir', devrait: 'devoir', devraient: 'devoir', doive: 'devoir',
    faut: 'falloir', faudra: 'falloir', faudrait: 'falloir',
    vit: 'vivre', vivent: 'vivre', vivait: 'vivre', vivaient: 'vivre', vivons: 'vivre',
    vécu: 'vivre', vécue: 'vivre', vécus: 'vivre', vécues: 'vivre', vécut: 'vivre', vive: 'vivre',
    rend: 'rendre', rendent: 'rendre', rendait: 'rendre', rendaient: 'rendre',
    rendu: 'rendre', rendue: 'rendre', rendus: 'rendre', rendues: 'rendre', rendit: 'rendre', rendirent: 'rendre',
    // --- Dire / lire / écrire / mettre / prendre ---
    dit: 'dire', dite: 'dire', dits: 'dire', dites: 'dire', disent: 'dire',
    disait: 'dire', disaient: 'dire', disons: 'dire', dirent: 'dire', dis: 'dire',
    lit: 'lire', lisent: 'lire', lisait: 'lire', lisaient: 'lire', lisons: 'lire',
    lu: 'lire', lue: 'lire', lus: 'lire', lues: 'lire', lut: 'lire', lurent: 'lire',
    écrit: 'écrire', écrite: 'écrire', écrits: 'écrire', écrites: 'écrire',
    écrivent: 'écrire', écrivait: 'écrire', écrivaient: 'écrire', écrivons: 'écrire',
    écrivit: 'écrire', écrivirent: 'écrire',
    met: 'mettre', mettent: 'mettre', mettait: 'mettre', mettaient: 'mettre', mettons: 'mettre',
    mis: 'mettre', mise: 'mettre', mises: 'mettre', mit: 'mettre', mirent: 'mettre',
    permet: 'permettre', permettent: 'permettre', permettait: 'permettre', permis: 'permettre', permit: 'permettre',
    admet: 'admettre', admettent: 'admettre', admettait: 'admettre', admis: 'admettre', admit: 'admettre',
    promet: 'promettre', promettent: 'promettre', promettait: 'promettre', promis: 'promettre', promit: 'promettre',
    transmet: 'transmettre', transmettent: 'transmettre', transmettait: 'transmettre', transmis: 'transmettre', transmit: 'transmettre',
    remet: 'remettre', remettent: 'remettre', remettait: 'remettre', remis: 'remettre', remit: 'remettre',
    soumet: 'soumettre', soumettent: 'soumettre', soumettait: 'soumettre', soumis: 'soumettre', soumit: 'soumettre',
    émet: 'émettre', émettent: 'émettre', émettait: 'émettre', émis: 'émettre', émit: 'émettre',
    prend: 'prendre', prennent: 'prendre', prenait: 'prendre', prenaient: 'prendre', prenons: 'prendre',
    pris: 'prendre', prise: 'prendre', prit: 'prendre', prirent: 'prendre', prenne: 'prendre',
    comprend: 'comprendre', comprennent: 'comprendre', comprenait: 'comprendre', comprenaient: 'comprendre',
    compris: 'comprendre', comprit: 'comprendre', comprirent: 'comprendre', comprenne: 'comprendre',
    apprend: 'apprendre', apprennent: 'apprendre', apprenait: 'apprendre', apprenaient: 'apprendre',
    appris: 'apprendre', apprit: 'apprendre', apprirent: 'apprendre', apprenne: 'apprendre',
    // --- Venir / tenir / devenir / revenir ---
    vient: 'venir', viennent: 'venir', venait: 'venir', venaient: 'venir', venons: 'venir',
    venu: 'venir', venue: 'venir', venus: 'venir', venues: 'venir', vint: 'venir', vinrent: 'venir', vienne: 'venir',
    revient: 'revenir', reviennent: 'revenir', revenait: 'revenir', revenaient: 'revenir',
    revenu: 'revenir', revenue: 'revenir', revint: 'revenir', revinrent: 'revenir',
    devient: 'devenir', deviennent: 'devenir', devenait: 'devenir', devenaient: 'devenir',
    devenu: 'devenir', devenue: 'devenir', devenus: 'devenir',
    tient: 'tenir', tiennent: 'tenir', tenait: 'tenir', tenaient: 'tenir', tenons: 'tenir',
    tenu: 'tenir', tenue: 'tenir', tint: 'tenir', tinrent: 'tenir', tienne: 'tenir',
    soutient: 'soutenir', soutiennent: 'soutenir', soutenait: 'soutenir', soutenaient: 'soutenir',
    soutenu: 'soutenir', soutint: 'soutenir', soutinrent: 'soutenir',
    appartient: 'appartenir', appartiennent: 'appartenir', appartenait: 'appartenir',
    appartenu: 'appartenir', appartint: 'appartenir', appartinrent: 'appartenir',
    // --- Ouvrir / offrir / couvrir / découvrir / souffrir ---
    ouvre: 'ouvrir', ouvrent: 'ouvrir', ouvrait: 'ouvrir', ouvraient: 'ouvrir', ouvrons: 'ouvrir',
    ouvert: 'ouvrir', ouverte: 'ouvrir', ouvrit: 'ouvrir', ouvrirent: 'ouvrir',
    offre: 'offrir', offrent: 'offrir', offrait: 'offrir', offraient: 'offrir', offrons: 'offrir',
    offert: 'offrir', offerte: 'offrir', offrit: 'offrir', offrirent: 'offrir',
    couvre: 'couvrir', couvrent: 'couvrir', couvrait: 'couvrir', couvraient: 'couvrir',
    couvert: 'couvrir', couverte: 'couvrir', couvrit: 'couvrir', couvrirent: 'couvrir',
    découvre: 'découvrir', découvrent: 'découvrir', découvrait: 'découvrir', découvraient: 'découvrir',
    découvert: 'découvrir', découverte: 'découvrir', découvrit: 'découvrir', découvrirent: 'découvrir',
    souffre: 'souffrir', souffrent: 'souffrir', souffrait: 'souffrir', souffraient: 'souffrir',
    souffert: 'souffrir', souffrit: 'souffrir', souffrirent: 'souffrir',
    // --- Sortir / partir / servir / dormir / sentir / mentir ---
    sort: 'sortir', sortent: 'sortir', sortait: 'sortir', sortaient: 'sortir', sortons: 'sortir',
    sorti: 'sortir', sortie: 'sortir', sortit: 'sortir', sortirent: 'sortir',
    part: 'partir', partent: 'partir', partait: 'partir', partaient: 'partir', partons: 'partir',
    parti: 'partir', partie: 'partir', partit: 'partir', partirent: 'partir',
    sert: 'servir', servent: 'servir', servait: 'servir', servaient: 'servir', servons: 'servir',
    servi: 'servir', servie: 'servir', servit: 'servir', servirent: 'servir',
    dort: 'dormir', dorment: 'dormir', dormait: 'dormir', dormaient: 'dormir',
    dormi: 'dormir', dormit: 'dormir', dormirent: 'dormir',
    sent: 'sentir', sentent: 'sentir', sentait: 'sentir', sentaient: 'sentir',
    senti: 'sentir', sentit: 'sentir', sentirent: 'sentir',
    ment: 'mentir', mentent: 'mentir', mentait: 'mentir',
    menti: 'mentir', mentit: 'mentir', mentirent: 'mentir',
    // --- Suivre / boire / courir / fuir / mourir / rire ---
    suit: 'suivre', suivent: 'suivre', suivait: 'suivre', suivaient: 'suivre', suivons: 'suivre',
    suivi: 'suivre', suivie: 'suivre', suivit: 'suivre', suivirent: 'suivre',
    boit: 'boire', boivent: 'boire', buvait: 'boire', buvaient: 'boire', buvons: 'boire',
    bu: 'boire', bue: 'boire', bus: 'boire', but: 'boire', burent: 'boire', boive: 'boire',
    court: 'courir', courent: 'courir', courait: 'courir', couraient: 'courir', courons: 'courir',
    couru: 'courir', courut: 'courir', coururent: 'courir',
    fuit: 'fuir', fuient: 'fuir', fuyait: 'fuir', fuyaient: 'fuir',
    fui: 'fuir', fuie: 'fuir', fuirent: 'fuir',
    meurt: 'mourir', meurent: 'mourir', mourait: 'mourir', mouraient: 'mourir',
    mort: 'mourir', morte: 'mourir', mourut: 'mourir',
    rit: 'rire', rient: 'rire', riait: 'rire', riaient: 'rire',
    ri: 'rire', rirent: 'rire',
    // --- Recevoir / produire / construire / conduire ---
    reçoit: 'recevoir', reçoivent: 'recevoir', recevait: 'recevoir', recevaient: 'recevoir', recevons: 'recevoir',
    reçu: 'recevoir', reçue: 'recevoir', reçus: 'recevoir', reçues: 'recevoir', reçut: 'recevoir', reçurent: 'recevoir',
    aperçoit: 'apercevoir', aperçoivent: 'apercevoir', apercevait: 'apercevoir',
    aperçu: 'apercevoir', aperçue: 'apercevoir', aperçut: 'apercevoir', aperçurent: 'apercevoir',
    produit: 'produire', produite: 'produire', produisent: 'produire', produisait: 'produire', produisaient: 'produire',
    produisit: 'produire', produisirent: 'produire',
    construit: 'construire', construite: 'construire', construisent: 'construire', construisait: 'construire',
    construisit: 'construire', construisirent: 'construire',
    détruit: 'détruire', détruite: 'détruire', détruisent: 'détruire', détruisait: 'détruire',
    détruisit: 'détruire', détruisirent: 'détruire',
    conduit: 'conduire', conduite: 'conduire', conduisent: 'conduire', conduisait: 'conduire',
    conduisit: 'conduire', conduisirent: 'conduire',
    traduit: 'traduire', traduite: 'traduire', traduisent: 'traduire', traduisait: 'traduire',
    traduisit: 'traduire', traduisirent: 'traduire',
    réduit: 'réduire', réduite: 'réduire', réduisent: 'réduire', réduisait: 'réduire',
    réduisit: 'réduire', réduisirent: 'réduire',
    // --- -aître / naître / paraître ---
    parut: 'paraître', parurent: 'paraître', paru: 'paraître',
    apparut: 'apparaître', apparurent: 'apparaître', apparu: 'apparaître',
    disparut: 'disparaître', disparurent: 'disparaître', disparu: 'disparaître',
    naquit: 'naître', naquirent: 'naître', né: 'naître', née: 'naître', nés: 'naître', nées: 'naître',
    // --- Reflexivos comuns ---
    souvient: 'se souvenir', souviens: 'se souvenir', souvenait: 'se souvenir', souvenaient: 'se souvenir',
    souvenu: 'se souvenir', souvenue: 'se souvenir', souvenus: 'se souvenir', souvenues: 'se souvenir',
    lève: 'se lever', lèvent: 'se lever', levait: 'se lever', levaient: 'se lever',
    installent: "s'installer", installe: "s'installer", installait: "s'installer", installaient: "s'installer",
    // --- Verbos novos curados (flexões não cobertas pelas regras) ---
    suffit: 'suffire', suffisent: 'suffire', suffisait: 'suffire', suffisaient: 'suffire',
    défendent: 'défendre', défendait: 'défendre', défendaient: 'défendre',
    atteint: 'atteindre', atteinte: 'atteindre', atteints: 'atteindre',
    éteint: 'éteindre', éteinte: 'éteindre',
    retient: 'retenir', retiennent: 'retenir', retenait: 'retenir', retenaient: 'retenir',
    essuie: 'essuyer', essuient: 'essuyer', essuyait: 'essuyer', essuyaient: 'essuyer',
    renouvelle: 'renouveler', renouvellent: 'renouveler', renouvelait: 'renouveler',
    morcelle: 'morceler', morcellent: 'morceler',
    appelle: 'appeler', appellent: 'appeler', appelait: 'appeler', appelaient: 'appeler',
    viendra: 'venir', viendront: 'venir', viendraient: 'venir', viendrait: 'venir',
    survivra: 'survivre', survivront: 'survivre',
    parlent: 'parler', parlait: 'parler', parlaient: 'parler',
    pose: 'poser', posent: 'poser', posait: 'poser', posaient: 'poser',
    préfèrent: 'préférer', préférait: 'préférer', préféraient: 'préférer',
    accueille: 'accueillir', accueillent: 'accueillir', accueillait: 'accueillir', accueillaient: 'accueillir',
    perdu: 'perdre', perdue: 'perdre', perdus: 'perdre', perdues: 'perdre',
    rouvert: 'rouvrir', rouverte: 'rouvrir', rouverts: 'rouvrir',
    reconstruit: 'reconstruire', reconstruits: 'reconstruire', reconstruite: 'reconstruire',
    détruits: 'détruire',
    inscrits: 'inscrire', inscrites: 'inscrire',
    commet: 'commettre', commettent: 'commettre', commettait: 'commettre', commettaient: 'commettre',
    "s'appuient": "s'appuyer", "s'appuyait": "s'appuyer",
    noie: 'noyer', noient: 'noyer', noyait: 'noyer',
    redeviennent: 'redevenir', redevenait: 'redevenir',
    "bateaux-mouches": 'bateau-mouche',
    "chefs-d'œuvre": "chef-d'œuvre",
    'lui-même': 'lui', 'elle-même': 'elle',
    déconstruit: 'déconstruire', déconstruite: 'déconstruire',
    vitraux: 'vitrail',
    clos: 'clore', close: 'clore',
    // --- Paris: plurais em -is/-us (guardas bloqueiam) ---
    quais: 'quai', lois: 'loi', emplois: 'emploi', défis: 'défi',
    délais: 'délai', oublis: 'oubli', élus: 'élu', continus: 'continu',
    // --- Paris: verbos narrativos restantes ---
    vaut: 'valoir', valent: 'valoir', valait: 'valoir', valaient: 'valoir',
    valu: 'valoir', valut: 'valoir', valurent: 'valoir',
    perçu: 'percevoir', perçue: 'percevoir', perçus: 'percevoir',
    perçoit: 'percevoir', perçoivent: 'percevoir', percevait: 'percevoir',
    percevaient: 'percevoir',
    débattent: 'débattre', débattait: 'débattre', débattaient: 'débattre',
    débattu: 'débattre',
    vendant: 'vendre', vendait: 'vendre', vendaient: 'vendre',
    fermant: 'fermer', fermait: 'fermer', fermaient: 'fermer',
    protège: 'protéger', protègent: 'protéger',
    ose: 'oser', osent: 'oser',
    pure: 'pur',
    aucune: 'aucun', "qu'aucune": 'aucun',
    sachant: 'savoir',
    heurte: 'se heurter', heurtent: 'se heurter',
    supporteurs: 'supporter', supporteur: 'supporter',
    fondatrice: 'fondateur',
    "d'ivoire": 'ivoire', "d'emplois": 'emploi',
  };
  const irregularLemma = irregularForms[clean];
  if (irregularLemma) {
    const verbEntry = VERB_ALIAS_ENTRIES[irregularLemma];
    if (verbEntry) return verbEntry;
    const hit = LOOKUP_VALUES.find((entry) => foldKey(entry.term) === foldKey(irregularLemma));
    if (hit) return hit;
    // Lemma-key fallback: the bank may hold the lemma as an article-bearing
    // term ("le vitrail", "le noyer"). Resolve to it when the exact-term
    // search fails, so irregular forms still become clickable.
    const keyHit = LOOKUP.get(foldKey(irregularLemma));
    if (keyHit) return keyHit;
  }

  // Inverted interrogative forms: faut-il -> falloir, peut-on -> pouvoir.
  const invQ = clean.match(/^(.+)-(il|elle|on|ils|elles)$/i);
  if (invQ) {
    const base = invQ[1];
    const baseHit = lookupWordBankEntry(base);
    if (baseHit) return baseHit;
  }

  // Compound hyphenated words: jour-là -> jour, lui-même -> lui.
  const dashIdx = clean.indexOf('-');
  if (dashIdx > 0) {
    const part = clean.slice(0, dashIdx);
    const fwDash = FUNCTION_WORD_OVERRIDES[part];
    if (fwDash) return { term: fwDash.term, pt: fwDash.pt, level: fwDash.level };
    const dashHit = LOOKUP.get(foldKey(part));
    if (dashHit) return dashHit;
    const partResolved = lookupWordBankEntry(part);
    if (partResolved) return partResolved;
  }

  // Passé simple, including reflexive forms used in historical narration.
  // `établirent` is derived by removing the full `irent` ending (5 chars),
  // not only `rent`; the latter would produce the invalid form `établiir`.
  const simplePastBases: string[] = [];
  if (clean.endsWith('èrent')) simplePastBases.push(clean.slice(0, -5) + 'er');
  if (clean.endsWith('irent') || clean.endsWith('urent')) {
    simplePastBases.push(clean.slice(0, -5) + 'ir');
  }

  // Reflexive passé simple: s'établirent -> s'établir, with a bare-verb
  // fallback for banks that contain only the non-reflexive lemma.
  const reflexive = clean.match(/^(s'|se )(.*)$/i);
  if (reflexive) {
    const verb = reflexive[2];
    const reflexiveBases: string[] = [];
    if (verb.endsWith('èrent')) reflexiveBases.push(verb.slice(0, -5) + 'er');
    if (verb.endsWith('irent') || verb.endsWith('urent')) {
      reflexiveBases.push(verb.slice(0, -5) + 'ir');
    }
    for (const base of reflexiveBases) {
      const reflexiveKeys = [`s'${base}`, `se ${base}`];
      for (const key of reflexiveKeys) {
        const hit = LOOKUP.get(foldKey(key));
        if (hit) return hit;
      }
    }
    simplePastBases.push(...reflexiveBases);
  }
  for (const base of simplePastBases) {
    const hit = LOOKUP.get(foldKey(base));
    if (hit) return hit;
  }

  // Simple plural / feminine endings (bank holds the base lemma).
  if (clean.length > 3) {
    if (clean.endsWith('s') && !clean.endsWith('ss') && !clean.endsWith('is') && !clean.endsWith('us')) {
      push(normalizeToLemma(clean.slice(0, -1)));
    }
    if (clean.endsWith('es') && clean.length > 4) {
      push(normalizeToLemma(clean.slice(0, -2)));
      push(normalizeToLemma(clean.slice(0, -1)));
    }
    // Feminine -euse -> masculine -eux (heureuse -> heureux, curieuse -> curieux).
    if (clean.endsWith('euse') && clean.length > 5) {
      push(normalizeToLemma(clean.slice(0, -4) + 'eux'));
    }
    // Feminine -elle(s)/-enne(s)/-ienne(s) -> -el/-en/-ien
    // (traditionnelles -> traditionnel, ancienne -> ancien, parisienne -> parisien).
    if (clean.endsWith('elles')) push(normalizeToLemma(clean.slice(0, -5) + 'el'));
    if (clean.endsWith('elle') && clean.length > 5) push(normalizeToLemma(clean.slice(0, -4) + 'el'));
    if (clean.endsWith('ennes')) push(normalizeToLemma(clean.slice(0, -5) + 'en'));
    if (clean.endsWith('enne') && clean.length > 5) push(normalizeToLemma(clean.slice(0, -4) + 'en'));
    if (clean.endsWith('iennes')) push(normalizeToLemma(clean.slice(0, -7) + 'ien'));
    if (clean.endsWith('ienne') && clean.length > 6) push(normalizeToLemma(clean.slice(0, -6) + 'ien'));
    // Plural -aux -> -al (médiévaux -> médiéval, mémoriaux -> mémorial).
    if (clean.endsWith('aux') && clean.length > 4) push(normalizeToLemma(clean.slice(0, -3) + 'al'));
    // Plural -eaux -> drop the x (nouveaux -> nouveau).
    if (clean.endsWith('eaux') && clean.length > 5) push(normalizeToLemma(clean.slice(0, -1)));
    if (clean.endsWith('e') && clean.length > 4) {
      push(normalizeToLemma(clean.slice(0, -1)));
    }
  }

  for (const key of candidates) {
    const hit = LOOKUP.get(key);
    if (hit) return hit;
  }

  // Only use expression subwords for meaningful lexical forms. Articles,
  // pronouns and prepositions must never resolve to an unrelated expression.
  const functional = new Set([
    'le', 'la', 'les', 'l', 'un', 'une', 'des', 'du', 'de', 'd',
    'au', 'aux', 'à', 'a', 'en', 'et', 'ou', 'où', 'que', 'qui',
    'se', 's', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous',
    'ils', 'elles', 'y', 'ce', 'cet', 'cette', 'ces',
  ]);
  if (!functional.has(foldKey(clean))) {
    for (const key of candidates) {
      const hit = SUBWORD_LOOKUP.get(key);
      if (hit) return hit;
    }
  }

  // Verb-form derivation: recover the infinitive from inflected forms
  // (présent, imparfait, passé simple, participe, futur) and resolve ONLY
  // when the recovered lemma is in the bank AND has curated 4-example sets.
  // Runs last so literal and expression-noun meanings always win.
  const deriveBase = clean.replace(/^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i, '');
  const deriveSources = deriveBase && deriveBase !== clean ? [deriveBase, clean] : [clean];
  const derivedLemmas: string[] = [];
  for (const src of deriveSources) {
    const reflexive = src.match(/^(s'|se )(.*)$/i);
    if (reflexive) {
      const verb = reflexive[2];
      for (const cand of deriveVerbLemmas(verb)) {
        derivedLemmas.push("s'" + cand, 'se ' + cand, cand);
      }
    } else {
      derivedLemmas.push(...deriveVerbLemmas(src));
    }
  }
  for (const lemma of derivedLemmas) {
    const key = foldKey(lemma);
    if (!CURATED_VERB_GATE.has(key)) continue;
    const verbEntry = VERB_ALIAS_ENTRIES[lemma];
    if (verbEntry) return verbEntry;
    const hit = LOOKUP.get(key);
    if (hit) return hit;
  }
  return undefined;
}
