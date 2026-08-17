import { DictionaryEntry } from '../utils/textParser';
import { lookupWordBankEntry, formatBankLevel } from './wordBankLookup';
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

export const LESSON_DICTIONARY: Record<string, DictionaryEntry> = {
  ...LESSON_DICTIONARY_1,
  ...LESSON_DICTIONARY_2,
  ...LESSON_DICTIONARY_3,
  ...LESSON_DICTIONARY_4,
  ...LESSON_DICTIONARY_5,
  ...LESSON_DICTIONARY_6,
  ...LESSON_DICTIONARY_7,
  ...LESSON_DICTIONARY_8,
  ...LESSON_DICTIONARY_9,
  ...LESSON_DICTIONARY_10,
  ...LESSON_DICTIONARY_11,
  ...LESSON_DICTIONARY_12,
  ...LESSON_DICTIONARY_13,
  ...LESSON_DICTIONARY_14,
  ...LESSON_DICTIONARY_15,
  ...LESSON_DICTIONARY_16,
  ...LESSON_DICTIONARY_17,
  ...LESSON_DICTIONARY_18,
  ...LESSON_DICTIONARY_19,
  ...LESSON_DICTIONARY_20,
  ...LESSON_DICTIONARY_21,
  ...LESSON_DICTIONARY_22,
  ...LESSON_DICTIONARY_23,
  ...LESSON_DICTIONARY_24,
  ...LESSON_DICTIONARY_25,
  ...MASTER_FRENCH_DICTIONARY,
  ...FUNCTIONAL_WORDS_DICTIONARY,
  ...TRAIL_DICTIONARY,
};

/**
 * Normalizes any string for search: lowercase, strip punctuation (preserving apostrophe and hyphen), strip accents/diacritics.
 */
export function normalizeForSearch(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]/g, '')
    .trim();
}

/**
 * Normalizes a word and searches LESSON_DICTIONARY directly
 * against keys, aliases, inflections, singular/plural, and verb roots.
 */
function lookupTermDirect(word: string): DictionaryEntry | undefined {
  if (!word) return undefined;

  const cleanBasic = word
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .replace(/[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]/g, "")
    .trim();
  const cleanNoAccents = normalizeForSearch(word);

  if (LESSON_DICTIONARY[cleanBasic]) {
    return LESSON_DICTIONARY[cleanBasic];
  }
  if (LESSON_DICTIONARY[cleanNoAccents]) {
    return LESSON_DICTIONARY[cleanNoAccents];
  }

  // Iterate over all entries in LESSON_DICTIONARY comparing normalized keys/aliases/inflections
  for (const key of Object.keys(LESSON_DICTIONARY)) {
    const entry = LESSON_DICTIONARY[key];
    const keyNoAccents = normalizeForSearch(key);

    if (keyNoAccents === cleanNoAccents) {
      return entry;
    }

    if (entry.aliases) {
      for (const alias of entry.aliases) {
        if (normalizeForSearch(alias) === cleanNoAccents) {
          return entry;
        }
      }
    }

    if (entry.inflections) {
      for (const inf of entry.inflections) {
        if (normalizeForSearch(inf) === cleanNoAccents) {
          return entry;
        }
      }
    }
  }

  // Check stripped trailing 's', 'es', 'e' for plural/feminine forms
  if (cleanBasic.length > 3 && cleanBasic.endsWith('s')) {
    const singular = cleanBasic.slice(0, -1);
    const result = lookupTermDirect(singular);
    if (result) return result;
  }
  if (cleanBasic.length > 4 && cleanBasic.endsWith('es')) {
    const singular = cleanBasic.slice(0, -2);
    const result = lookupTermDirect(singular);
    if (result) return result;
  }
  if (cleanBasic.length > 3 && cleanBasic.endsWith('e')) {
    const root = cleanBasic.slice(0, -1);
    const result = lookupTermDirect(root);
    if (result) return result;
  }

  // Check common verb infinitive stems (e.g., arrive -> arriver, parlez -> parler)
  if (cleanBasic.length > 3) {
    if (cleanBasic.endsWith('e')) {
      const infR = lookupTermDirect(cleanBasic + 'r');
      if (infR) return infR;
    }
    if (cleanBasic.endsWith('ent') || cleanBasic.endsWith('ons') || cleanBasic.endsWith('ais')) {
      const infEr = lookupTermDirect(cleanBasic.slice(0, -3) + 'er');
      if (infEr) return infEr;
    }
    if (cleanBasic.endsWith('ez')) {
      const infEr = lookupTermDirect(cleanBasic.slice(0, -2) + 'er');
      if (infEr) return infEr;
    }
  }

  return undefined;
}

/**
 * Returns the dictionary entry for a word if found in LESSON_DICTIONARY.
 * First checks the full term (preserving apostrophes, e.g. j'entre, c'est).
 * If not found, handles French elision prefixes (j', l', d', c', m', t', s', n' and variants with curved apostrophe ’)
 * and searches for the isolated root word without prefix.
 */
export function getStaticLessonEntry(word: string): DictionaryEntry | undefined {
  if (!word) return undefined;

  // Convert search to lowercase and preserve internal apostrophes (handling straight ' and curved ’ / ʼ / ‘)
  const normalizedWord = word
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .trim();

  // 1. Check full word first (e.g., "aujourd'hui", "j'entre" or "c'est")
  const directMatch = lookupTermDirect(normalizedWord);
  if (directMatch) {
    return {
      ...directMatch,
      term: word,
    };
  }

  // 2. Treat French elision prefixes: j', l', d', c', m', t', s', n' (and variants with curved apostrophe ’ or qu', jusqu', lorsqu', puisqu')
  const elisionRegex = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)'/i;
  let baseWord = normalizedWord;
  if (elisionRegex.test(normalizedWord)) {
    const stripped = normalizedWord.replace(elisionRegex, '');
    if (stripped && stripped.length > 0) {
      const elisionMatch = lookupTermDirect(stripped);
      if (elisionMatch) {
        return {
          ...elisionMatch,
          term: word,
        };
      }
      baseWord = stripped;
    }
  }

  // 3. Complete morphological lemmatization (plurals -s/-es/-x/-aux, feminine -e/-ée, verb endings -ons/-ez/-ent/-ait/-ais/-é)
  const candidateStems: string[] = [];

  // Plural forms
  if (baseWord.endsWith('s') && baseWord.length > 3) {
    candidateStems.push(baseWord.slice(0, -1)); // bâtiments -> bâtiment, élégants -> élégant
    if (baseWord.endsWith('es') && baseWord.length > 4) {
      candidateStems.push(baseWord.slice(0, -2)); // animées -> animé, élégantes -> élégant
    }
  }
  if (baseWord.endsWith('x') && baseWord.length > 4) {
    candidateStems.push(baseWord.slice(0, -1)); // beaux -> beau
    if (baseWord.endsWith('aux') && baseWord.length > 5) {
      candidateStems.push(baseWord.slice(0, -3) + 'al'); // journaux -> journal
      candidateStems.push(baseWord.slice(0, -3) + 'au'); // cadeaux -> cadeau
    }
  }
  // Feminine forms
  if (baseWord.endsWith('e') && baseWord.length > 4) {
    candidateStems.push(baseWord.slice(0, -1)); // élégante -> élégant, parisienne -> parisien
  }
  if (baseWord.endsWith('ée') && baseWord.length > 4) {
    candidateStems.push(baseWord.slice(0, -1)); // arrivée -> arrivé
    candidateStems.push(baseWord.slice(0, -2) + 'er'); // traversée -> traverser
  }
  if (baseWord.endsWith('ées') && baseWord.length > 5) {
    candidateStems.push(baseWord.slice(0, -2)); // animées -> animé
    candidateStems.push(baseWord.slice(0, -3) + 'er');
  }
  // Verb inflections
  if (baseWord.endsWith('ons') && baseWord.length > 5) {
    candidateStems.push(baseWord.slice(0, -3) + 'er'); // marchons -> marcher
    candidateStems.push(baseWord.slice(0, -3) + 'ir');
  }
  if (baseWord.endsWith('ez') && baseWord.length > 4) {
    candidateStems.push(baseWord.slice(0, -2) + 'er'); // marchez -> marcher
    candidateStems.push(baseWord.slice(0, -2) + 'ir');
  }
  if (baseWord.endsWith('ent') && baseWord.length > 5 && !baseWord.endsWith('ment')) {
    candidateStems.push(baseWord.slice(0, -3) + 'er'); // marchent -> marcher
    candidateStems.push(baseWord.slice(0, -3));
  }
  if (baseWord.endsWith('ait') && baseWord.length > 5) {
    candidateStems.push(baseWord.slice(0, -3) + 'er'); // marchait -> marcher
  }
  if (baseWord.endsWith('ais') && baseWord.length > 5) {
    candidateStems.push(baseWord.slice(0, -3) + 'er'); // marchais -> marcher
  }
  if (baseWord.endsWith('é') && baseWord.length > 3) {
    candidateStems.push(baseWord.slice(0, -1) + 'er'); // marché -> marcher, arrivé -> arriver
  }

  for (const stem of candidateStems) {
    const stemMatch = lookupTermDirect(stem);
    if (stemMatch) {
      return {
        ...stemMatch,
        term: word,
      };
    }
  }

  // 4. Fall back to the offline 15.400-word CEFR bank (resolved by lemma) so
  //    that every bank word is clickable with its PT translation + level.
  const bankEntry = lookupWordBankEntry(word);
  if (bankEntry) {
    const bankLevel = formatBankLevel(bankEntry.level);
    const fr = bankEntry.term;
    const pt = bankEntry.pt;
    return {
      term: fr,
      wordFr: fr,
      definitionPt: pt,
      definitionFr: `Mot du vocabulaire français – ${bankLevel}`,
      difficultyLevel: bankLevel,
      isDictionaryTerm: false,
      examples: [
        { level: 'A1', fr: `J'apprends « ${fr} » dans ma leçon.`, pt: `Eu aprendo « ${pt} » na minha lição.` },
        { level: 'A2-B1', fr: `Je note « ${fr} » dans mon carnet de vocabulaire.`, pt: `Eu anoto « ${pt} » no meu caderno de vocabulário.` },
        { level: 'B2', fr: `Je comprends maintenant le sens de « ${fr} ».`, pt: `Agora eu entendo o sentido de « ${pt} ».` },
        { level: 'C1-C2', fr: `L'emploi nuancé de « ${fr} » révèle une maîtrise avancée du français.`, pt: `O uso matizado de « ${pt} » revela um domínio avançado do francês.` },
      ],
    };
  }

  return undefined;
}
