/**
 * Parser de clique para as frases da aventura.
 *
 * Regra do produto: toda palavra destacada (dourada ou pontilhada) deve abrir
 * o modal com exatamente 4 exemplos progressivos bem elaborados. Para garantir
 * isso por construção:
 *
 *  - Douradas (`vocabularyDictionary`) continuam sempre clicáveis (são
 *    auditadas para terem exatamente 4 exemplos).
 *  - Pontilhadas resolvem os exemplos normalmente e, se o autor curou os 4
 *    exemplos no `masterExamplesDictionary`, esses têm prioridade absoluta
 *    (mesmo sobre entradas parciais do dicionário comum).
 *  - Palavra pontilhada que ainda não tem os 4 exemplos vira texto normal até
 *    a curadoria da cidade preenchê-los.
 */
import { parseFrenchSentence, ParsedToken } from './textParser';
import { MASTER_EXAMPLES } from '../data/masterExamplesDictionary';

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function masterExamplesFor(raw: string): { level: string; fr: string; pt: string }[] | undefined {
  const w = fold(raw || '');
  if (!w) return undefined;

  const candidates = [
    w,
    w.replace(/s$/, ''),
    w.replace(/es$/, ''),
    w.replace(/e$/, ''),
    w.replace(/ée?s$/, 'é'),
    w.replace(/euse$/, 'eux'),
  ];

  for (const key of candidates) {
    const curated = MASTER_EXAMPLES[key];
    if (curated && curated.length === 4) return curated;
  }
  return undefined;
}

export function hasFourCompleteExamples(examples: any[] | undefined): boolean {
  if (!Array.isArray(examples) || examples.length !== 4) return false;
  return examples.every(
    (e) => (e?.fr || '').toString().trim() && (e?.pt || '').toString().trim()
  );
}

export function parseClickableSentence(
  sentence: string,
  dictionary: any[] = []
): ParsedToken[] {
  const tokens = parseFrenchSentence(sentence, dictionary);

  for (const token of tokens) {
    if (token.isMatch && !token.isDictionaryTerm) {
      // Prioridade absoluta dos exemplos curados no dicionário mestre.
      const curated = masterExamplesFor(token.matchedTerm || token.text);
      if (curated) {
        token.dictionaryEntry = { ...(token.dictionaryEntry || {}), examples: curated };
      }

      if (!hasFourCompleteExamples(token.dictionaryEntry?.examples)) {
        token.isMatch = false;
        token.dictionaryEntry = undefined;
      }
    }
  }

  return tokens;
}
