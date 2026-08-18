/**
 * Parser de clique para as frases da aventura.
 *
 * Regra do produto: toda palavra destacada (dourada ou pontilhada) deve abrir
 * o modal com exatamente 4 exemplos progressivos bem elaborados. Para garantir
 * isso por construção, este wrapper parte da tokenização normal e só mantém
 * clicável a palavra pontilhada que já resolve os 4 exemplos completos.
 *
 * - Douradas (`vocabularyDictionary`) continuam sempre clicáveis — já são
 *   auditadas para terem exatamente 4 exemplos.
 * - Pontilhadas (palavras do banco CEFR no texto) ficam clicáveis apenas
 *   quando os 4 exemplos já existem (aula, dicionário comum, exemplos
 *   práticos ou `masterExamplesDictionary`). Palavra sem os 4 exemplos vira
 *   texto normal até a curadoria da cidade preenchê-los.
 */
import { parseFrenchSentence, ParsedToken } from './textParser';

function hasFourCompleteExamples(examples: any[] | undefined): boolean {
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
      if (!hasFourCompleteExamples(token.dictionaryEntry?.examples)) {
        token.isMatch = false;
        token.dictionaryEntry = undefined;
      }
    }
  }

  return tokens;
}
