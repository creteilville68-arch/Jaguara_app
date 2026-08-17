import React from 'react';
import parisLesson1Data from '../data/paris_lesson_1.json';
import parisLesson2Data from '../data/paris_lesson_2.json';
import parisLesson3Data from '../data/paris_lesson_3.json';
import parisLesson4Data from '../data/paris_lesson_4.json';
import parisLesson5Data from '../data/paris_lesson_5.json';
import parisLesson6Data from '../data/paris_lesson_6.json';
import parisLesson7Data from '../data/paris_lesson_7.json';
import parisLesson8Data from '../data/paris_lesson_8.json';
import parisLesson9Data from '../data/paris_lesson_9.json';
import parisLesson10Data from '../data/paris_lesson_10.json';
import parisLesson11Data from '../data/paris_lesson_11.json';
import parisLesson12Data from '../data/paris_lesson_12.json';
import parisLesson13Data from '../data/paris_lesson_13.json';
import parisLesson14Data from '../data/paris_lesson_14.json';
import parisLesson15Data from '../data/paris_lesson_15.json';
import parisLesson16Data from '../data/paris_lesson_16.json';
import parisLesson17Data from '../data/paris_lesson_17.json';
import parisLesson18Data from '../data/paris_lesson_18.json';
import parisLesson19Data from '../data/paris_lesson_19.json';
import parisLesson20Data from '../data/paris_lesson_20.json';
import parisLesson21Data from '../data/paris_lesson_21.json';
import parisLesson22Data from '../data/paris_lesson_22.json';
import parisLesson23Data from '../data/paris_lesson_23.json';
import parisLesson24Data from '../data/paris_lesson_24.json';
import parisLesson25Data from '../data/paris_lesson_25.json';
import amiensLesson1Data from '../data/amiens_lesson_1.json';
import lilleLesson1Data from '../data/lille_lesson_1.json';
import montSaintMichelLesson1Data from '../data/mont_saint_michel_lesson_1.json';
import toursLesson1Data from '../data/tours_lesson_1.json';
import bordeauxLesson1Data from '../data/bordeaux_lesson_1.json';
import toulouseLesson1Data from '../data/toulouse_lesson_1.json';
import lyonLesson1Data from '../data/lyon_lesson_1.json';
import marseilleLesson1Data from '../data/marseille_lesson_1.json';
import strasbourgLesson1Data from '../data/strasbourg_lesson_1.json';
import niceLesson1Data from '../data/nice_lesson_1.json';
import amiensLesson2Data from '../data/amiens_lesson_2.json';
import lilleLesson2Data from '../data/lille_lesson_2.json';
import montSaintMichelLesson2Data from '../data/mont_saint_michel_lesson_2.json';
import toursLesson2Data from '../data/tours_lesson_2.json';
import bordeauxLesson2Data from '../data/bordeaux_lesson_2.json';
import toulouseLesson2Data from '../data/toulouse_lesson_2.json';
import lyonLesson2Data from '../data/lyon_lesson_2.json';
import marseilleLesson2Data from '../data/marseille_lesson_2.json';
import strasbourgLesson2Data from '../data/strasbourg_lesson_2.json';
import niceLesson2Data from '../data/nice_lesson_2.json';
import amiensLesson3Data from '../data/amiens_lesson_3.json';
import lilleLesson3Data from '../data/lille_lesson_3.json';
import montSaintMichelLesson3Data from '../data/mont_saint_michel_lesson_3.json';
import toursLesson3Data from '../data/tours_lesson_3.json';
import bordeauxLesson3Data from '../data/bordeaux_lesson_3.json';
import toulouseLesson3Data from '../data/toulouse_lesson_3.json';
import lyonLesson3Data from '../data/lyon_lesson_3.json';
import marseilleLesson3Data from '../data/marseille_lesson_3.json';
import strasbourgLesson3Data from '../data/strasbourg_lesson_3.json';
import niceLesson3Data from '../data/nice_lesson_3.json';

const ALL_LESSONS_DATA = [
  parisLesson1Data,
  parisLesson2Data,
  parisLesson3Data,
  parisLesson4Data,
  parisLesson5Data,
  parisLesson6Data,
  parisLesson7Data,
  parisLesson8Data,
  parisLesson9Data,
  parisLesson10Data,
  parisLesson11Data,
  parisLesson12Data,
  parisLesson13Data,
  parisLesson14Data,
  parisLesson15Data,
  parisLesson16Data,
  parisLesson17Data,
  parisLesson18Data,
  parisLesson19Data,
  parisLesson20Data,
  parisLesson21Data,
  parisLesson22Data,
  parisLesson23Data,
  parisLesson24Data,
  parisLesson25Data,
  amiensLesson1Data,
  lilleLesson1Data,
  montSaintMichelLesson1Data,
  toursLesson1Data,
  bordeauxLesson1Data,
  toulouseLesson1Data,
  lyonLesson1Data,
  marseilleLesson1Data,
  strasbourgLesson1Data,
  niceLesson1Data,
  amiensLesson2Data,
  lilleLesson2Data,
  montSaintMichelLesson2Data,
  toursLesson2Data,
  bordeauxLesson2Data,
  toulouseLesson2Data,
  lyonLesson2Data,
  marseilleLesson2Data,
  strasbourgLesson2Data,
  niceLesson2Data,
  amiensLesson3Data,
  lilleLesson3Data,
  montSaintMichelLesson3Data,
  toursLesson3Data,
  bordeauxLesson3Data,
  toulouseLesson3Data,
  lyonLesson3Data,
  marseilleLesson3Data,
  strasbourgLesson3Data,
  niceLesson3Data,
];

/**
 * Curated list of target study expressions in French across all lessons and initial vocabulary.
 */
const BASE_FRENCH_TARGETS: string[] = [
  // Prendre du recul family
  'prendre du recul',
  'prenant du recul',
  'prends du recul',
  'prend du recul',
  'prenons du recul',
  'prenez du recul',
  'prendre de la distance',
  'pris du recul',
  'prendre un recul',
  // Assainir family
  'assainir',
  'assainit',
  'assainissent',
  'assainissement',
  'assaini',
  'assainie',
  'assainies',
  'assainissant',
  // Mettre en valeur family
  'mettre en valeur',
  'met en valeur',
  'mettent en valeur',
  'mis en valeur',
  'mise en valeur',
  'mises en valeur',
  'mettant en valeur',
  // Haussmann / Urbanisme family
  'haussmannisation',
  'haussmannien',
  'haussmannienne',
  'baron Haussmann',
  // Second empire family
  'second empire',
  'deuxième empire',
  // Initial vocabulary bank
  'le musée',
  "l'addition",
  'la cathédrale',
  'la plage',
  'musée',
  'addition',
  'cathédrale',
  'plage',
  'je voudrais',
  "s'il vous plaît",
  's’il vous plaît',
  'le serveur',
  'la terrasse',
  // Lesson 4 targets
  'déjeuner',
  'la carte',
  'carte du jour',
  "soupe à l'oignon",
  'plat principal',
  'filet de poisson',
  'carte bancaire',
  'un bistrot parisien',
  // Lesson 5 targets
  'un peu perdu',
  'le musée du Louvre',
  'la Seine',
  'un passant',
  'tout droit',
  'tournez à gauche',
  'la boulangerie',
  'le pont',
  'en face de moi',
  // Lesson 6 targets
  'la réception',
  "l'hôtel",
  'mes bagages',
  'le check-in',
  'mon passeport',
  'réceptionniste',
  'réservation',
  'trois nuits',
  'la clé',
  'la chambre',
  'le code du Wi-Fi',
  "l'ascenseur",
  'au troisième étage',
  'poser mes affaires',
  // Lesson 7 targets
  'la boulangerie',
  'une baguette fraîche',
  'une tarte aux pommes',
  'au supermarché',
  'un panier',
  'la caisse',
  'la caissière',
  'en espèces',
  'un billet de vingt euros',
  // Lesson 8 targets
  'le musée du Louvre',
  'la Joconde',
  "mon billet d'entrée",
  'en ligne',
  'la longue queue',
  'un plan interactif',
  'salles de peinture',
  'interdit de toucher',
  'les tableaux',
  'prendre des photos',
];

/**
 * Curated list of target study translations in Portuguese across all lessons and initial vocabulary.
 */
const BASE_PORTUGUESE_TARGETS: string[] = [
  // Prendre du recul translations
  'tomar distanciamento crítico',
  'tomar certo distanciamento',
  'tomar distanciamento',
  'tomar certa distância',
  'tomar distância',
  'recuar e tomar distanciamento',
  'distanciamento crítico',
  'me afastar',
  'afastar',
  'recuar',
  // Assainir translations
  'sanear de forma duradoura',
  'sanear',
  'saneando',
  'limpar',
  'higienizar',
  'purificar',
  'tornar salubre',
  // Mettre en valeur translations
  'valorizar e dar destaque',
  'dar destaque',
  'realçar',
  'valorizar',
  'valoriza',
  'destaca',
  // Haussmann / Urbanisme translations
  'haussmannização',
  'haussmanniana',
  'barão Haussmann',
  // Second empire translations
  'segundo império',
  // Initial vocabulary bank translations
  'o museu',
  'a conta',
  'a catedral',
  'a praia',
  'museu',
  'conta',
  'catedral',
  'praia',
  'eu gostaria',
  'por favor',
  'o garçom',
  'a varanda',
  // Lesson 4 translations
  'almoçar',
  'o cardápio',
  'cardápio do dia',
  'sopa de cebola',
  'prato principal',
  'filé de peixe',
  'cartão de crédito',
  'bistrô parisiense',
  // Lesson 5 translations
  'um pouco perdido',
  'o museu do Louvre',
  'o Rio Sena',
  'um pedestre',
  'vá direto',
  'dobre à esquerda',
  'a padaria',
  'a ponte',
  'na minha frente',
  // Lesson 6 translations
  'a recepção',
  'o hotel',
  'minhas bagagens',
  'o check-in',
  'meu passaporte',
  'recepcionista',
  'reserva',
  'três noites',
  'a chave',
  'o quarto',
  'o código do Wi-Fi',
  'o elevador',
  'ao terceiro andar',
  'colocar minhas coisas',
  // Lesson 7 translations
  'na padaria',
  'uma baguete fresca',
  'uma torta de maçã',
  'ao supermercado',
  'um cesto',
  'o caixa',
  'a caixa',
  'em dinheiro',
  'uma nota de vinte euros',
  // Lesson 8 translations
  'o museu do Louvre',
  'a Monalisa',
  'meu bilhete de entrada',
  'online',
  'a longa fila',
  'um mapa interativo',
  'salas de pintura',
  'proibido tocar',
  'os quadros',
  'tirar fotos',
];

/**
 * Automatically extracts all terms, aliases, inflections, and example translations
 * from lesson dictionaries to ensure ANY mined card highlight works automatically.
 */
function getDynamicFrenchTargets(): string[] {
  const terms: string[] = [...BASE_FRENCH_TARGETS];

  for (const lessonData of ALL_LESSONS_DATA) {
    if (lessonData && Array.isArray(lessonData.vocabularyDictionary)) {
      for (const item of lessonData.vocabularyDictionary) {
        if (item.term) terms.push(item.term);
        if (Array.isArray((item as any).aliases)) {
          for (const a of (item as any).aliases) {
            if (a) terms.push(a);
          }
        }
        if (Array.isArray((item as any).inflections)) {
          for (const inf of (item as any).inflections) {
            if (inf) terms.push(inf);
          }
        }
      }
    }
  }

  return terms;
}

function getDynamicPortugueseTargets(): string[] {
  const terms: string[] = [...BASE_PORTUGUESE_TARGETS];

  for (const lessonData of ALL_LESSONS_DATA) {
    if (lessonData && Array.isArray(lessonData.vocabularyDictionary)) {
      for (const item of lessonData.vocabularyDictionary) {
        if (Array.isArray((item as any).ptTargets)) {
          for (const ptTarget of (item as any).ptTargets) {
            if (ptTarget) terms.push(ptTarget);
          }
        }
      }
    }
  }

  return terms;
}

/**
 * Builds an accent-safe, Unicode-boundary regex pattern for a given expression.
 */
function buildTermPattern(term: string): string {
  const trimmed = term.trim();
  if (!trimmed) return '';

  const escaped = trimmed
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+');

  const firstCharIsWord = /^[\p{L}\p{N}_]/u.test(trimmed);
  const lastCharIsWord = /[\p{L}\p{N}_]$/u.test(trimmed);

  const startBoundary = firstCharIsWord ? '(?<=^|[^\\p{L}\\p{N}_])' : '';
  const endBoundary = lastCharIsWord ? '(?=$|[^\\p{L}\\p{N}_])' : '';

  return `${startBoundary}${escaped}${endBoundary}`;
}

/**
 * Renders card text with double highlighting (Front & Back) in gold/yellow badges.
 * Works automatically for ANY card mined from any lesson or level.
 */
export function renderHighlightedCardText(
  text: string,
  lang: 'fr' | 'pt',
  options?: { enableShortTextFallback?: boolean }
): React.ReactNode {
  if (!text) return null;

  const enableShortTextFallback = options?.enableShortTextFallback !== false;

  const rawTerms =
    lang === 'fr'
      ? getDynamicFrenchTargets()
      : getDynamicPortugueseTargets();

  const uniqueTerms = Array.from(
    new Set(rawTerms.map((t) => t.trim()).filter(Boolean))
  );

  // Sort by string length descending to prioritize longer multi-word expressions
  uniqueTerms.sort((a, b) => b.length - a.length);

  const patterns = uniqueTerms.map(buildTermPattern).filter(Boolean);

  if (patterns.length === 0) {
    return text;
  }

  const combinedRegex = new RegExp(`(${patterns.join('|')})`, 'giu');
  const tokens: Array<{ text: string; isHighlight: boolean }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let hasMatch = false;

  while ((match = combinedRegex.exec(text)) !== null) {
    hasMatch = true;
    const matchStart = match.index;
    const matchedText = match[0];

    if (matchStart > lastIndex) {
      tokens.push({
        text: text.slice(lastIndex, matchStart),
        isHighlight: false,
      });
    }

    tokens.push({
      text: matchedText,
      isHighlight: true,
    });

    lastIndex = combinedRegex.lastIndex;
    if (combinedRegex.lastIndex === matchStart) {
      combinedRegex.lastIndex++;
    }
  }

  if (lastIndex < text.length) {
    tokens.push({
      text: text.slice(lastIndex),
      isHighlight: false,
    });
  }

  // Fallback rule: if no target keyword was matched, but the card text is short
  // (e.g. standalone term or short phrase <= 60 chars), highlight the entire string
  // as the study target keyword/expression.
  if (!hasMatch) {
    if (enableShortTextFallback && text.trim().length <= 60) {
      return (
        <span className="text-amber-300 bg-amber-500/25 border border-amber-500/50 px-2 py-0.5 rounded-lg font-black inline-block my-0.5 shadow-sm">
          {text}
        </span>
      );
    }
    return text;
  }

  return tokens.map((token, index) => {
    if (token.isHighlight) {
      return (
        <span
          key={index}
          className="text-amber-300 bg-amber-500/25 border border-amber-500/50 px-2 py-0.5 rounded-lg font-black inline-block my-0.5 shadow-sm"
        >
          {token.text}
        </span>
      );
    }
    return <span key={index}>{token.text}</span>;
  });
}
