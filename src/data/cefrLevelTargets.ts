/**
 * Metas de vocabulário por nível CEFR (A1 → C2).
 *
 * Baseadas nas estimativas de tamanho de vocabulário por nível do QECR
 * (corpus-linguistics / CEFR word lists), escaladas para a meta do app de
 * 15.400 lemmas únicos (≈ maestria C1-C2).
 *
 * Referências usadas (valores acumulados, ou seja, o total de palavras que o
 * aluno conhece AO FINAL de cada nível):
 *   A1 ≈ 1.000      A2 ≈ 2.000      B1 ≈ 4.000
 *   B2 ≈ 6.500      C1 ≈ 10.000     C2 ≈ 15.400+
 *
 * A regra pedagógica do app é: as palavras sobem do básico ao avançado, então
 * a maioria do vocabulário está concentrada nos níveis altos (B2–C2).
 */

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** Total acumulado de palavras necessário para concluir cada nível. */
export const CEFR_CUMULATIVE_TARGETS: Record<CefrLevel, number> = {
  A1: 1000,
  A2: 2000,
  B1: 4000,
  B2: 6500,
  C1: 10000,
  C2: 15400,
};

/** Palavras NOVAS a introduzir em cada nível (incremento sobre o nível anterior). */
export const CEFR_LEVEL_TARGETS: Record<CefrLevel, number> = (() => {
  const out = {} as Record<CefrLevel, number>;
  let previous = 0;
  for (const level of CEFR_LEVELS) {
    out[level] = CEFR_CUMULATIVE_TARGETS[level] - previous;
    previous = CEFR_CUMULATIVE_TARGETS[level];
  }
  return out;
})();
