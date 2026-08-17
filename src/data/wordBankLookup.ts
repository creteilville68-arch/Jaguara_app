import { normalizeToLemma } from '../utils/lemmaHelper';
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

const LOOKUP = new Map<string, WordBankLookupEntry>();

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
  if (lemma && lemma.includes(' ')) {
    for (const token of lemma.split(/\s+/)) {
      const k = foldKey(token);
      if (k.length >= 3 && !LOOKUP.has(k)) LOOKUP.set(k, entry);
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
export function lookupWordBankEntry(raw: string): WordBankLookupEntry | undefined {
  if (!raw) return undefined;
  const clean = raw.trim().toLowerCase().replace(/[’ʼ‘]/g, "'");
  if (!clean) return undefined;

  const candidates: string[] = [];
  const push = (s: string) => {
    if (s) candidates.push(foldKey(s));
  };

  push(normalizeToLemma(clean));
  push(clean);

  // French elision prefixes: j', l', d', c', m', t', s', n', qu', jusqu', lorsqu', puisqu'
  const elision = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i;
  if (elision.test(clean)) {
    const stripped = clean.replace(elision, '');
    if (stripped) {
      push(normalizeToLemma(stripped));
      push(stripped);
    }
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
    if (clean.endsWith('e') && clean.length > 4) {
      push(normalizeToLemma(clean.slice(0, -1)));
    }
  }

  for (const key of candidates) {
    const hit = LOOKUP.get(key);
    if (hit) return hit;
  }
  return undefined;
}
