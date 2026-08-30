/// <reference types="vite/client" />
/**
 * Catálogo das aulas oficiais da trilha (11 cidades).
 *
 * Carrega todos os arquivos src/data/<cidade>_lesson_<N>.json via import.meta.glob
 * (Vite) — equivalente estático aos ~490 imports que viviam em LessonsView, mas
 * sem lista manual e robusto a novas aulas.
 */
const modules = import.meta.glob('./*_lesson_*.json', { eager: true, import: 'default' }) as Record<string, any>;

export interface CityLessonCatalog {
  [cityId: string]: any[];
}

/** Mapa cidade → aulas oficiais, na ordem numérica das lições. */
export const CITY_LESSONS: CityLessonCatalog = (() => {
  const out: CityLessonCatalog = {};
  for (const [path, lesson] of Object.entries(modules)) {
    const m = path.match(/\.\/([a-z_]+)_lesson_(\d+)\.json$/);
    if (!m || !lesson) continue;
    const cityId = m[1] === 'mont_saint_michel' ? 'mont-saint-michel' : m[1];
    const num = Number(m[2]);
    if (!out[cityId]) out[cityId] = [];
    out[cityId][num - 1] = lesson;
  }
  for (const cityId of Object.keys(out)) {
    out[cityId] = out[cityId].filter((l) => !!l);
  }
  return out;
})();

/** Todas as aulas oficiais, cidade por cidade (ordem da trilha). */
export const ALL_OFFICIAL_LESSONS: any[] = Object.values(CITY_LESSONS).flat();

/** Conta palavras únicas do vocabularyDictionary das aulas de uma cidade (dedup por term). */
export function countUniqueCityWords(cityId: string): number {
  const lessons = CITY_LESSONS[cityId] || [];
  const terms = new Set<string>();
  for (const lesson of lessons) {
    const vocab = lesson?.vocabularyDictionary;
    if (!Array.isArray(vocab)) continue;
    for (const entry of vocab) {
      const term = entry?.term;
      if (!term) continue;
      terms.add(String(term).toLowerCase().trim());
    }
  }
  return terms.size;
}
