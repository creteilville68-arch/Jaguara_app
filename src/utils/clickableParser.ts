/** Parser de clique para as frases da aventura. */
import { parseFrenchSentence, ParsedToken } from './textParser';
import { lookupWordBankEntry, formatBankLevel } from '../data/wordBankLookup';
import { generateBankExamples } from './bankExamples';
import { MASTER_EXAMPLES } from '../data/masterExamplesDictionary';
import { AMIENS_BACKLOG_EXAMPLES } from '../data/masterExamplesAmiensBacklog.ts';
import { AMIENS_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesAmiensBacklog10.ts';
import { AMIENS_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesAmiensBacklog2.ts';
import { AMIENS_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesAmiensBacklog3.ts';
import { AMIENS_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesAmiensBacklog4.ts';
import { AMIENS_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesAmiensBacklog5.ts';
import { AMIENS_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesAmiensBacklog6.ts';
import { AMIENS_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesAmiensBacklog7.ts';
import { AMIENS_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesAmiensBacklog8.ts';
import { AMIENS_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesAmiensBacklog9.ts';
import { AMIENS_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesAmiensBacklog11.ts';
import { AMIENS_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesAmiensBacklog12.ts';
import { LILLE_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesLilleBacklog11.ts';
import { LILLE_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesLilleBacklog12.ts';
import { LILLE_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesLilleBacklog13.ts';
import { MSM_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesMsmBacklog11.ts';
import { MSM_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesMsmBacklog12.ts';
import { TOURS_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesToursBacklog11.ts';
import { TOURS_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesToursBacklog12.ts';
import { BORDEAUX_BACKLOG_EXAMPLES } from '../data/masterExamplesBordeauxBacklog.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesBordeauxBacklog10.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesBordeauxBacklog12.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesBordeauxBacklog13.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_14 } from '../data/masterExamplesBordeauxBacklog14.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_15 } from '../data/masterExamplesBordeauxBacklog15.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesBordeauxBacklog2.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesBordeauxBacklog3.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesBordeauxBacklog4.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesBordeauxBacklog5.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesBordeauxBacklog6.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesBordeauxBacklog7.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesBordeauxBacklog8.ts';
import { BORDEAUX_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesBordeauxBacklog9.ts';
import { LILLE_BACKLOG_EXAMPLES } from '../data/masterExamplesLilleBacklog.ts';
import { LILLE_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesLilleBacklog2.ts';
import { LILLE_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesLilleBacklog3.ts';
import { LILLE_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesLilleBacklog4.ts';
import { LILLE_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesLilleBacklog5.ts';
import { LILLE_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesLilleBacklog6.ts';
import { LILLE_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesLilleBacklog7.ts';
import { LILLE_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesLilleBacklog8.ts';
import { LYON_BACKLOG_EXAMPLES } from '../data/masterExamplesLyonBacklog.ts';
import { LYON_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesLyonBacklog2.ts';
import { LYON_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesLyonBacklog3.ts';
import { LYON_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesLyonBacklog4.ts';
import { LYON_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesLyonBacklog5.ts';
import { LYON_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesLyonBacklog6.ts';
import { LYON_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesLyonBacklog7.ts';
import { LYON_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesLyonBacklog8.ts';
import { LYON_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesLyonBacklog9.ts';
import { LYON_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesLyonBacklog11.ts';
import { LYON_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesLyonBacklog12.ts';
import { LYON_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesLyonBacklog13.ts';
import { MARSEILLE_BACKLOG_EXAMPLES } from '../data/masterExamplesMarseilleBacklog.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesMarseilleBacklog2.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesMarseilleBacklog3.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesMarseilleBacklog4.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesMarseilleBacklog5.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesMarseilleBacklog6.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesMarseilleBacklog7.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesMarseilleBacklog8.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesMarseilleBacklog10.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesMarseilleBacklog11.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesMarseilleBacklog12.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesMarseilleBacklog13.ts';
import { MARSEILLE_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesMarseilleBacklog9.ts';
import { MONT_SAINT_MICHEL_BACKLOG_EXAMPLES } from '../data/masterExamplesMontSaintMichelBacklog.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesMontSaintMichelBacklog10.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesMontSaintMichelBacklog2.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesMontSaintMichelBacklog3.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesMontSaintMichelBacklog4.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesMontSaintMichelBacklog5.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesMontSaintMichelBacklog6.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesMontSaintMichelBacklog7.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesMontSaintMichelBacklog8.ts';
import { MONTSAINTMICHEL_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesMontSaintMichelBacklog9.ts';
import { NICE_BACKLOG_EXAMPLES } from '../data/masterExamplesNiceBacklog.ts';
import { NICE_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesNiceBacklog10.ts';
import { NICE_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesNiceBacklog11.ts';
import { NICE_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesNiceBacklog12.ts';
import { NICE_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesNiceBacklog13.ts';
import { NICE_BACKLOG_EXAMPLES_14 } from '../data/masterExamplesNiceBacklog14.ts';
import { NICE_BACKLOG_EXAMPLES_15 } from '../data/masterExamplesNiceBacklog15.ts';
import { NICE_BACKLOG_EXAMPLES_16 } from '../data/masterExamplesNiceBacklog16.ts';
import { NICE_BACKLOG_EXAMPLES_17 } from '../data/masterExamplesNiceBacklog17.ts';
import { NICE_BACKLOG_EXAMPLES_18 } from '../data/masterExamplesNiceBacklog18.ts';
import { NICE_BACKLOG_EXAMPLES_19 } from '../data/masterExamplesNiceBacklog19.ts';
import { NICE_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesNiceBacklog2.ts';
import { NICE_BACKLOG_EXAMPLES_20 } from '../data/masterExamplesNiceBacklog20.ts';
import { NICE_BACKLOG_EXAMPLES_21 } from '../data/masterExamplesNiceBacklog21.ts';
import { NICE_BACKLOG_EXAMPLES_22 } from '../data/masterExamplesNiceBacklog22.ts';
import { NICE_BACKLOG_EXAMPLES_23 } from '../data/masterExamplesNiceBacklog23.ts';
import { NICE_BACKLOG_EXAMPLES_24 } from '../data/masterExamplesNiceBacklog24.ts';
import { NICE_BACKLOG_EXAMPLES_25 } from '../data/masterExamplesNiceBacklog25.ts';
import { NICE_GUIDE_25_EXAMPLES } from '../data/masterExamplesNiceGuide25.ts';
import { GUIDE_EXPANSION_19_EXAMPLES } from '../data/masterExamplesGuideExpansion19.ts';
import { NICE_GUIDE_26_EXAMPLES } from '../data/masterExamplesNiceGuide26.ts';
import { NICE_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesNiceBacklog3.ts';
import { NICE_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesNiceBacklog4.ts';
import { NICE_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesNiceBacklog5.ts';
import { NICE_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesNiceBacklog6.ts';
import { NICE_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesNiceBacklog7.ts';
import { NICE_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesNiceBacklog8.ts';
import { NICE_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesNiceBacklog9.ts';
import { PARIS_BACKLOG_EXAMPLES } from '../data/masterExamplesParisBacklog.ts';
import { PARIS_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesParisBacklog10.ts';
import { PARIS_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesParisBacklog11.ts';
import { PARIS_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesParisBacklog12.ts';
import { PARIS_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesParisBacklog13.ts';
import { PARIS_BACKLOG_EXAMPLES_14 } from '../data/masterExamplesParisBacklog14.ts';
import { PARIS_BACKLOG_EXAMPLES_15 } from '../data/masterExamplesParisBacklog15.ts';
import { PARIS_BACKLOG_EXAMPLES_16 } from '../data/masterExamplesParisBacklog16.ts';
import { PARIS_BACKLOG_EXAMPLES_17 } from '../data/masterExamplesParisBacklog17.ts';
import { PARIS_BACKLOG_EXAMPLES_18 } from '../data/masterExamplesParisBacklog18.ts';
import { PARIS_BACKLOG_EXAMPLES_19 } from '../data/masterExamplesParisBacklog19.ts';
import { PARIS_BACKLOG_EXAMPLES_20 } from '../data/masterExamplesParisBacklog20.ts';
import { PARIS_BACKLOG_EXAMPLES_21 } from '../data/masterExamplesParisBacklog21.ts';
import { PARIS_BACKLOG_EXAMPLES_22 } from '../data/masterExamplesParisBacklog22.ts';
import { PARIS_BACKLOG_EXAMPLES_23 } from '../data/masterExamplesParisBacklog23.ts';
import { PARIS_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesParisBacklog2.ts';
import { PARIS_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesParisBacklog3.ts';
import { PARIS_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesParisBacklog4.ts';
import { PARIS_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesParisBacklog5.ts';
import { PARIS_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesParisBacklog6.ts';
import { PARIS_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesParisBacklog7.ts';
import { PARIS_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesParisBacklog8.ts';
import { PARIS_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesParisBacklog9.ts';
import { STRASBOURG_BACKLOG_EXAMPLES } from '../data/masterExamplesStrasbourgBacklog.ts';
import { TOULOUSE_BACKLOG_EXAMPLES } from '../data/masterExamplesToulouseBacklog.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesToulouseBacklog10.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesToulouseBacklog11.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesToulouseBacklog12.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesToulouseBacklog2.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesToulouseBacklog3.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesToulouseBacklog4.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesToulouseBacklog5.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesToulouseBacklog6.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesToulouseBacklog7.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesToulouseBacklog8.ts';
import { TOULOUSE_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesToulouseBacklog9.ts';
import { TOURS_BACKLOG_EXAMPLES } from '../data/masterExamplesToursBacklog.ts';
import { TOURS_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesToursBacklog10.ts';
import { TOURS_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesToursBacklog2.ts';
import { TOURS_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesToursBacklog3.ts';
import { TOURS_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesToursBacklog4.ts';
import { TOURS_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesToursBacklog5.ts';
import { TOURS_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesToursBacklog6.ts';
import { TOURS_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesToursBacklog7.ts';
import { TOURS_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesToursBacklog8.ts';
import { TOURS_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesToursBacklog9.ts';
import { HARVEST_BACKLOG_EXAMPLES } from '../data/masterExamplesHarvest.ts';
import { SHARED_BACKLOG_EXAMPLES_1 } from '../data/masterExamplesSharedBacklog1.ts';
import { SHARED_BACKLOG_EXAMPLES_2 } from '../data/masterExamplesSharedBacklog2.ts';
import { SHARED_BACKLOG_EXAMPLES_3 } from '../data/masterExamplesSharedBacklog3.ts';
import { SHARED_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesSharedBacklog4.ts';
import { SHARED_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesSharedBacklog5.ts';
import { SHARED_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesSharedBacklog6.ts';
import { SHARED_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesSharedBacklog7.ts';
import { SHARED_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesSharedBacklog8.ts';
import { SHARED_BACKLOG_EXAMPLES_9 } from '../data/masterExamplesSharedBacklog9.ts';
import { SHARED_BACKLOG_EXAMPLES_10 } from '../data/masterExamplesSharedBacklog10.ts';
import { SHARED_BACKLOG_EXAMPLES_11 } from '../data/masterExamplesSharedBacklog11.ts';
import { SHARED_BACKLOG_EXAMPLES_12 } from '../data/masterExamplesSharedBacklog12.ts';
import { SHARED_BACKLOG_EXAMPLES_13 } from '../data/masterExamplesSharedBacklog13.ts';
import { SHARED_BACKLOG_EXAMPLES_14 } from '../data/masterExamplesSharedBacklog14.ts';
import { SHARED_BACKLOG_EXAMPLES_15 } from '../data/masterExamplesSharedBacklog15.ts';
import { SHARED_BACKLOG_EXAMPLES_16 } from '../data/masterExamplesSharedBacklog16.ts';
import { SHARED_BACKLOG_EXAMPLES_17 } from '../data/masterExamplesSharedBacklog17.ts';
import { SHARED_BACKLOG_EXAMPLES_18 } from '../data/masterExamplesSharedBacklog18.ts';
import { SHARED_BACKLOG_EXAMPLES_19 } from '../data/masterExamplesSharedBacklog19.ts';
import { SHARED_BACKLOG_EXAMPLES_20 } from '../data/masterExamplesSharedBacklog20.ts';
import { SHARED_BACKLOG_EXAMPLES_21 } from '../data/masterExamplesSharedBacklog21.ts';
import { SHARED_BACKLOG_EXAMPLES_22 } from '../data/masterExamplesSharedBacklog22.ts';
import { SHARED_BACKLOG_EXAMPLES_23 } from '../data/masterExamplesSharedBacklog23.ts';
import { SHARED_BACKLOG_EXAMPLES_24 } from '../data/masterExamplesSharedBacklog24.ts';
import { SHARED_BACKLOG_EXAMPLES_25 } from '../data/masterExamplesSharedBacklog25.ts';
import { SHARED_BACKLOG_EXAMPLES_26 } from '../data/masterExamplesSharedBacklog26.ts';
import { SHARED_BACKLOG_EXAMPLES_27 } from '../data/masterExamplesSharedBacklog27.ts';
import { SHARED_BACKLOG_EXAMPLES_28 } from '../data/masterExamplesSharedBacklog28.ts';
import { SHARED_BACKLOG_EXAMPLES_29 } from '../data/masterExamplesSharedBacklog29.ts';
import { SHARED_BACKLOG_EXAMPLES_30 } from '../data/masterExamplesSharedBacklog30.ts';
import { SHARED_BACKLOG_EXAMPLES_31 } from '../data/masterExamplesSharedBacklog31.ts';
import { SHARED_BACKLOG_EXAMPLES_32 } from '../data/masterExamplesSharedBacklog32.ts';
import { SHARED_BACKLOG_EXAMPLES_33 } from '../data/masterExamplesSharedBacklog33.ts';
import { SHARED_BACKLOG_EXAMPLES_34 } from '../data/masterExamplesSharedBacklog34.ts';
import { STRASBOURG_BACKLOG_EXAMPLES_4 } from '../data/masterExamplesStrasbourgBacklog4.ts';
import { STRASBOURG_BACKLOG_EXAMPLES_5 } from '../data/masterExamplesStrasbourgBacklog5.ts';
import { STRASBOURG_BACKLOG_EXAMPLES_6 } from '../data/masterExamplesStrasbourgBacklog6.ts';
import { STRASBOURG_BACKLOG_EXAMPLES_7 } from '../data/masterExamplesStrasbourgBacklog7.ts';
import { STRASBOURG_BACKLOG_EXAMPLES_8 } from '../data/masterExamplesStrasbourgBacklog8.ts';
import { GUIDE_EXPANSION_22_EXAMPLES } from '../data/masterExamplesGuideExpansion22.ts';
import { ENCYCLOPEDIA_EXAMPLES } from '../data/masterExamplesEncyclopedia.ts';
import { FUNCTION_WORDS_EXAMPLES } from '../data/masterExamplesFunctionWords.ts';
import { PARIS_VERBS_EXAMPLES_A } from '../data/masterExamplesParisVerbsA.ts';
import { EXTRA_PARIS_VERBS_EXAMPLES } from '../data/curatedVerbLemmas.ts';
import { PARIS_GRAMMAR_EXAMPLES } from '../data/masterExamplesParisGrammar.ts';
import { PARIS_VERBS_EXAMPLES_B } from '../data/masterExamplesParisVerbsB.ts';
import { PARIS_NOUNS_EXAMPLES } from '../data/masterExamplesParisNouns.ts';
import { PARIS_PROPER_EXAMPLES } from '../data/masterExamplesParisProper.ts';
import { PARIS_ADJECTIVES_EXAMPLES } from '../data/masterExamplesParisAdjectives.ts';
import { AMIENS_CONTENT_EXAMPLES } from '../data/masterExamplesAmiensContent.ts';

// Collocations the tokenizer merges into a single token but that are not
// standalone bank expressions. Resolving the whole phrase keeps every word
// clickable and preserves the natural reading experience.
const COLLOCATION_OVERRIDES: Record<string, { term: string; pt: string; level: string }> = {
  'avant de': { term: 'avant', pt: 'antes de', level: 'A1' },
  'après avoir': { term: 'après', pt: 'depois de ter', level: 'B1' },
  'tout à fait': { term: 'tout à fait', pt: 'totalmente / com certeza', level: 'A2' },
  'tout le monde': { term: 'tout le monde', pt: 'todo mundo / todos', level: 'A1' },
  'plus tard': { term: 'plus tard', pt: 'mais tarde', level: 'A1' },
  'avec plaisir': { term: 'avec plaisir', pt: 'com prazer', level: 'A2' },
  'bien sûr': { term: 'bien sûr', pt: 'claro / com certeza', level: 'A1' },
};

export const ALL_MASTER_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  ...MASTER_EXAMPLES,
...AMIENS_BACKLOG_EXAMPLES,
  ...AMIENS_BACKLOG_EXAMPLES_10,
  ...AMIENS_BACKLOG_EXAMPLES_2,
  ...AMIENS_BACKLOG_EXAMPLES_3,
  ...AMIENS_BACKLOG_EXAMPLES_4,
  ...AMIENS_BACKLOG_EXAMPLES_5,
  ...AMIENS_BACKLOG_EXAMPLES_6,
  ...AMIENS_BACKLOG_EXAMPLES_7,
  ...AMIENS_BACKLOG_EXAMPLES_8,
  ...AMIENS_BACKLOG_EXAMPLES_9,
  ...AMIENS_BACKLOG_EXAMPLES_11,
  ...AMIENS_BACKLOG_EXAMPLES_12,
  ...LILLE_BACKLOG_EXAMPLES_11,
  ...LILLE_BACKLOG_EXAMPLES_12,
  ...LILLE_BACKLOG_EXAMPLES_13,
  ...MSM_BACKLOG_EXAMPLES_11,
  ...MSM_BACKLOG_EXAMPLES_12,
  ...TOURS_BACKLOG_EXAMPLES_11,
  ...TOURS_BACKLOG_EXAMPLES_12,
  ...BORDEAUX_BACKLOG_EXAMPLES,
  ...BORDEAUX_BACKLOG_EXAMPLES_10,
  ...BORDEAUX_BACKLOG_EXAMPLES_12,
  ...BORDEAUX_BACKLOG_EXAMPLES_13,
  ...BORDEAUX_BACKLOG_EXAMPLES_14,
  ...BORDEAUX_BACKLOG_EXAMPLES_15,
  ...BORDEAUX_BACKLOG_EXAMPLES_2,
  ...BORDEAUX_BACKLOG_EXAMPLES_3,
  ...BORDEAUX_BACKLOG_EXAMPLES_4,
  ...BORDEAUX_BACKLOG_EXAMPLES_5,
  ...BORDEAUX_BACKLOG_EXAMPLES_6,
  ...BORDEAUX_BACKLOG_EXAMPLES_7,
  ...BORDEAUX_BACKLOG_EXAMPLES_8,
  ...BORDEAUX_BACKLOG_EXAMPLES_9,
  ...LILLE_BACKLOG_EXAMPLES,
  ...LILLE_BACKLOG_EXAMPLES_2,
  ...LILLE_BACKLOG_EXAMPLES_3,
  ...LILLE_BACKLOG_EXAMPLES_4,
  ...LILLE_BACKLOG_EXAMPLES_5,
  ...LILLE_BACKLOG_EXAMPLES_6,
  ...LILLE_BACKLOG_EXAMPLES_7,
  ...LILLE_BACKLOG_EXAMPLES_8,
  ...LYON_BACKLOG_EXAMPLES,
  ...LYON_BACKLOG_EXAMPLES_2,
  ...LYON_BACKLOG_EXAMPLES_3,
  ...LYON_BACKLOG_EXAMPLES_4,
  ...LYON_BACKLOG_EXAMPLES_5,
  ...LYON_BACKLOG_EXAMPLES_6,
  ...LYON_BACKLOG_EXAMPLES_7,
  ...LYON_BACKLOG_EXAMPLES_8,
  ...LYON_BACKLOG_EXAMPLES_9,
  ...LYON_BACKLOG_EXAMPLES_11,
  ...LYON_BACKLOG_EXAMPLES_12,
  ...LYON_BACKLOG_EXAMPLES_13,
  ...MARSEILLE_BACKLOG_EXAMPLES,
  ...MARSEILLE_BACKLOG_EXAMPLES_2,
  ...MARSEILLE_BACKLOG_EXAMPLES_3,
  ...MARSEILLE_BACKLOG_EXAMPLES_4,
  ...MARSEILLE_BACKLOG_EXAMPLES_5,
  ...MARSEILLE_BACKLOG_EXAMPLES_6,
  ...MARSEILLE_BACKLOG_EXAMPLES_7,
  ...MARSEILLE_BACKLOG_EXAMPLES_8,
  ...MARSEILLE_BACKLOG_EXAMPLES_10,
  ...MARSEILLE_BACKLOG_EXAMPLES_11,
  ...MARSEILLE_BACKLOG_EXAMPLES_12,
  ...MARSEILLE_BACKLOG_EXAMPLES_13,
  ...MARSEILLE_BACKLOG_EXAMPLES_9,
  ...MONT_SAINT_MICHEL_BACKLOG_EXAMPLES,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_10,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_2,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_3,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_4,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_5,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_6,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_7,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_8,
  ...MONTSAINTMICHEL_BACKLOG_EXAMPLES_9,
  ...NICE_BACKLOG_EXAMPLES,
  ...NICE_BACKLOG_EXAMPLES_10,
  ...NICE_BACKLOG_EXAMPLES_11,
  ...NICE_BACKLOG_EXAMPLES_12,
  ...NICE_BACKLOG_EXAMPLES_13,
  ...NICE_BACKLOG_EXAMPLES_14,
  ...NICE_BACKLOG_EXAMPLES_15,
  ...NICE_BACKLOG_EXAMPLES_16,
  ...NICE_BACKLOG_EXAMPLES_17,
  ...NICE_BACKLOG_EXAMPLES_18,
  ...NICE_BACKLOG_EXAMPLES_19,
  ...NICE_BACKLOG_EXAMPLES_2,
  ...NICE_BACKLOG_EXAMPLES_20,
  ...NICE_BACKLOG_EXAMPLES_21,
  ...NICE_BACKLOG_EXAMPLES_22,
  ...NICE_BACKLOG_EXAMPLES_23,
  ...NICE_BACKLOG_EXAMPLES_24,
  ...NICE_BACKLOG_EXAMPLES_25,
  ...NICE_GUIDE_25_EXAMPLES,
  ...GUIDE_EXPANSION_19_EXAMPLES,
  ...NICE_GUIDE_26_EXAMPLES,
  ...NICE_BACKLOG_EXAMPLES_3,
  ...NICE_BACKLOG_EXAMPLES_4,
  ...NICE_BACKLOG_EXAMPLES_5,
  ...NICE_BACKLOG_EXAMPLES_6,
  ...NICE_BACKLOG_EXAMPLES_7,
  ...NICE_BACKLOG_EXAMPLES_8,
  ...NICE_BACKLOG_EXAMPLES_9,
  ...PARIS_BACKLOG_EXAMPLES,
  ...PARIS_BACKLOG_EXAMPLES_10,
  ...PARIS_BACKLOG_EXAMPLES_11,
  ...PARIS_BACKLOG_EXAMPLES_12,
  ...PARIS_BACKLOG_EXAMPLES_13,
  ...PARIS_BACKLOG_EXAMPLES_14,
  ...PARIS_BACKLOG_EXAMPLES_15,
  ...PARIS_BACKLOG_EXAMPLES_16,
  ...PARIS_BACKLOG_EXAMPLES_17,
  ...PARIS_BACKLOG_EXAMPLES_18,
  ...PARIS_BACKLOG_EXAMPLES_19,
  ...PARIS_BACKLOG_EXAMPLES_20,
  ...PARIS_BACKLOG_EXAMPLES_21,
  ...PARIS_BACKLOG_EXAMPLES_22,
  ...PARIS_BACKLOG_EXAMPLES_23,
  ...PARIS_BACKLOG_EXAMPLES_2,
  ...PARIS_BACKLOG_EXAMPLES_3,
  ...PARIS_BACKLOG_EXAMPLES_4,
  ...PARIS_BACKLOG_EXAMPLES_5,
  ...PARIS_BACKLOG_EXAMPLES_6,
  ...PARIS_BACKLOG_EXAMPLES_7,
  ...PARIS_BACKLOG_EXAMPLES_8,
  ...PARIS_BACKLOG_EXAMPLES_9,
  ...STRASBOURG_BACKLOG_EXAMPLES,
  ...TOULOUSE_BACKLOG_EXAMPLES,
  ...TOULOUSE_BACKLOG_EXAMPLES_10,
  ...TOULOUSE_BACKLOG_EXAMPLES_11,
  ...TOULOUSE_BACKLOG_EXAMPLES_12,
  ...TOULOUSE_BACKLOG_EXAMPLES_2,
  ...TOULOUSE_BACKLOG_EXAMPLES_3,
  ...TOULOUSE_BACKLOG_EXAMPLES_4,
  ...TOULOUSE_BACKLOG_EXAMPLES_5,
  ...TOULOUSE_BACKLOG_EXAMPLES_6,
  ...TOULOUSE_BACKLOG_EXAMPLES_7,
  ...TOULOUSE_BACKLOG_EXAMPLES_8,
  ...TOULOUSE_BACKLOG_EXAMPLES_9,
  ...TOURS_BACKLOG_EXAMPLES,
  ...TOURS_BACKLOG_EXAMPLES_10,
  ...TOURS_BACKLOG_EXAMPLES_2,
  ...TOURS_BACKLOG_EXAMPLES_3,
  ...TOURS_BACKLOG_EXAMPLES_4,
  ...TOURS_BACKLOG_EXAMPLES_5,
  ...TOURS_BACKLOG_EXAMPLES_6,
  ...TOURS_BACKLOG_EXAMPLES_7,
  ...TOURS_BACKLOG_EXAMPLES_8,
  ...TOURS_BACKLOG_EXAMPLES_9,
  ...HARVEST_BACKLOG_EXAMPLES,
  ...SHARED_BACKLOG_EXAMPLES_1,
  ...SHARED_BACKLOG_EXAMPLES_2,
  ...SHARED_BACKLOG_EXAMPLES_3,
  ...SHARED_BACKLOG_EXAMPLES_4,
  ...SHARED_BACKLOG_EXAMPLES_5,
  ...SHARED_BACKLOG_EXAMPLES_6,
  ...SHARED_BACKLOG_EXAMPLES_7,
  ...SHARED_BACKLOG_EXAMPLES_8,
  ...SHARED_BACKLOG_EXAMPLES_9,
  ...SHARED_BACKLOG_EXAMPLES_10,
  ...SHARED_BACKLOG_EXAMPLES_11,
  ...SHARED_BACKLOG_EXAMPLES_12,
  ...SHARED_BACKLOG_EXAMPLES_13,
  ...SHARED_BACKLOG_EXAMPLES_14,
  ...SHARED_BACKLOG_EXAMPLES_15,
  ...SHARED_BACKLOG_EXAMPLES_16,
  ...SHARED_BACKLOG_EXAMPLES_17,
  ...SHARED_BACKLOG_EXAMPLES_18,
  ...SHARED_BACKLOG_EXAMPLES_19,
  ...SHARED_BACKLOG_EXAMPLES_20,
  ...SHARED_BACKLOG_EXAMPLES_21,
  ...SHARED_BACKLOG_EXAMPLES_22,
  ...SHARED_BACKLOG_EXAMPLES_23,
  ...SHARED_BACKLOG_EXAMPLES_24,
  ...SHARED_BACKLOG_EXAMPLES_25,
  ...SHARED_BACKLOG_EXAMPLES_26,
  ...SHARED_BACKLOG_EXAMPLES_27,
  ...SHARED_BACKLOG_EXAMPLES_28,
  ...SHARED_BACKLOG_EXAMPLES_29,
  ...SHARED_BACKLOG_EXAMPLES_30,
  ...SHARED_BACKLOG_EXAMPLES_31,
  ...SHARED_BACKLOG_EXAMPLES_32,
  ...SHARED_BACKLOG_EXAMPLES_33,
  ...SHARED_BACKLOG_EXAMPLES_34,
  ...STRASBOURG_BACKLOG_EXAMPLES_4,
  ...STRASBOURG_BACKLOG_EXAMPLES_5,
  ...STRASBOURG_BACKLOG_EXAMPLES_6,
  ...STRASBOURG_BACKLOG_EXAMPLES_7,
  ...STRASBOURG_BACKLOG_EXAMPLES_8,
  ...GUIDE_EXPANSION_22_EXAMPLES,
  ...ENCYCLOPEDIA_EXAMPLES,
  ...FUNCTION_WORDS_EXAMPLES,
  ...PARIS_VERBS_EXAMPLES_A,
  ...EXTRA_PARIS_VERBS_EXAMPLES,
  ...PARIS_GRAMMAR_EXAMPLES,
  ...PARIS_VERBS_EXAMPLES_B,
  ...PARIS_NOUNS_EXAMPLES,
  ...PARIS_PROPER_EXAMPLES,
  ...PARIS_ADJECTIVES_EXAMPLES,
  ...AMIENS_CONTENT_EXAMPLES,
};

// O banco guarda "se lever" como lema de "lever" — compartilham a mesma curadoria.
ALL_MASTER_EXAMPLES['se lever'] = ALL_MASTER_EXAMPLES['lever'];

export function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘`]/g, "'")
    .replace(/[\"“”]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Resolves common French inflections to the form used by the master dictionary.
 * This covers historical narration in the passé simple, including reflexive verbs.
 */
function addInflectedCandidates(word: string, candidates: string[]): void {
  const push = (value: string) => {
    if (value && !candidates.includes(value)) candidates.push(value);
  };

  // Passé simple: ils parlèrent -> parler; ils établirent -> établir.
  if (word.endsWith('èrent')) push(`${word.slice(0, -5)}er`);
  if (word.endsWith('irent') || word.endsWith('urent')) {
    push(`${word.slice(0, -5)}ir`);
  }

  // Preserve reflexive morphology while also checking the bare verb key.
  const reflexive = word.match(/^(s'|se )(.*)$/i);
  if (reflexive) {
    const verb = reflexive[2];
    push(verb);
    if (verb.endsWith('èrent')) {
      const base = `${verb.slice(0, -5)}er`;
      push(`${reflexive[1]}${base}`);
      push(`s'${base}`);
      push(`se ${base}`);
    }
    if (verb.endsWith('irent') || verb.endsWith('urent')) {
      const base = `${verb.slice(0, -5)}ir`;
      push(`${reflexive[1]}${base}`);
      push(`s'${base}`);
      push(`se ${base}`);
    }
  }
}

export function masterExamplesFor(raw: string, canonicalTerm?: string): { level: string; fr: string; pt: string }[] | undefined {
  const w = fold(raw || '');
  if (!w) return undefined;
  const stripS = w.endsWith('s') ? w.slice(0, -1) : w;
  const stripEs = w.endsWith('es') ? w.slice(0, -2) : w;
  const stripE = w.endsWith('e') ? w.slice(0, -1) : w;
  const candidates = [
    w, stripS, stripEs, stripE,
    w.replace(/ée?s$/, 'é'),
    w.replace(/euse$/, 'eux'),
    // Feminine -ive(s) -> masculine -if (créative -> créatif,
    // commémoratives -> commémoratif, vives -> vif).
    w.replace(/ives?$/, 'if'),
  ];
  addInflectedCandidates(w, candidates);
  const elided = w.replace(/^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ`]/i, '');
  if (elided && elided !== w) {
    candidates.push(elided);
    addInflectedCandidates(elided, candidates);
  }
  if (canonicalTerm) {
    const ct = fold(canonicalTerm);
    if (ct && ct !== w) {
      candidates.push(ct);
      addInflectedCandidates(ct, candidates);
    }
  }
  for (const key of candidates) {
    const curated = ALL_MASTER_EXAMPLES[key];
    if (curated && curated.length === 4) return curated;
  }
  return undefined;
}

export function hasFourCompleteExamples(examples: any[] | undefined): boolean {
  if (!Array.isArray(examples) || examples.length !== 4) return false;
  return examples.every((e: any) => (e?.fr || '').toString().trim() && (e?.pt || '').toString().trim());
}

export function parseClickableSentence(sentence: string, dictionary: any[] = []): ParsedToken[] {
  const tokens = parseFrenchSentence(sentence, dictionary);
  for (const token of tokens) {
    if (token.isMatch && !token.isDictionaryTerm) {
      const raw = token.matchedTerm || token.text;
      const canon = token.dictionaryEntry?.term || token.dictionaryEntry?.wordFr || '';
      // Feminine adjectives in -ive(s) resolve to the banked masculine -if
      // lemma (créative -> créatif, commémoratives -> commémoratif).
      const masculineIve = raw.replace(/ives?$/, 'if');
      // Merged collocations (avant de, tout le monde...) resolve as a whole.
      const collocation = token.text ? COLLOCATION_OVERRIDES[fold(token.text)] : undefined;
      const bank =
        lookupWordBankEntry(token.text) ||
        lookupWordBankEntry(raw) ||
        (canon ? lookupWordBankEntry(canon) : undefined) ||
        (masculineIve !== raw ? lookupWordBankEntry(masculineIve) : undefined) ||
        collocation;

      // The CEFR bank is authoritative for dotted words. Never promote the
      // generic text-parser fallback to a dotted word: a fallback can have
      // four generated sentences without being a curated bank entry.
      if (!bank) {
        token.isMatch = false;
        token.dictionaryEntry = undefined;
        continue;
      }

      const curated = masterExamplesFor(token.text, bank.term) || masterExamplesFor(raw, bank.term);
      const examples = curated || generateBankExamples(bank.term, bank.pt);
      if (!hasFourCompleteExamples(examples)) {
        token.isMatch = false;
        token.dictionaryEntry = undefined;
        continue;
      }

      token.dictionaryEntry = {
        ...(token.dictionaryEntry || {}),
        term: bank.term,
        wordFr: bank.term,
        definitionPt: bank.pt,
        difficultyLevel: formatBankLevel(bank.level),
        examples,
      };
    }
  }
  return tokens;
}
