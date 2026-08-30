/**
 * Regras de bloqueio e avanço de nível ao longo da Trilha da França (11 cidades).
 *
 * Regras pedagógicas:
 *  - A trilha é sequencial: Paris (#1, A1) → Amiens (#2) → ... → Nice (#11, C2).
 *  - Para abrir a cidade N, todas as aulas da cidade N-1 precisam estar concluídas
 *    (o aluno "avança de nível" concluindo o nível anterior).
 *  - Dentro de uma cidade, as aulas abrem em ordem: a lição N abre quando a
 *    lição N-1 da mesma cidade foi concluída.
 *  - A Enciclopédia (Fase 2, pós-trilha) desbloqueia quando TODAS as 11 cidades
 *    da aventura foram concluídas.
 *
 * Modo administrador: durante a autoria/revisão, o administrador pode liberar
 * todos os bloqueios (guias e aulas) — é o modo usado para verificar a
 * Enciclopédia antes de liberar a trilha para os alunos.
 */
import { UserMapProgress } from '../types/map';
import { CITY_LESSONS } from '../data/officialLessonsCatalog';

/** Ordem oficial das 11 cidades da trilha. */
export const TRAIL_CITY_ORDER: string[] = [
  'paris',
  'amiens',
  'lille',
  'mont-saint-michel',
  'tours',
  'bordeaux',
  'toulouse',
  'lyon',
  'marseille',
  'strasbourg',
  'nice',
];

/** Nível CEFR de cada cidade da trilha (regra de evolução A1 → C2). */
export const TRAIL_CITY_LEVELS: Record<string, string> = {
  paris: 'A1',
  amiens: 'A1/A2',
  lille: 'A2',
  'mont-saint-michel': 'A2/B1',
  tours: 'B1',
  bordeaux: 'B1+',
  toulouse: 'B2',
  lyon: 'B2+',
  marseille: 'C1',
  strasbourg: 'C1+',
  nice: 'C2',
};

/** Quantidade de aulas oficiais de cada cidade (derivada do catálogo de arquivos). */
export const TRAIL_CITY_LESSON_COUNTS: Record<string, number> = Object.fromEntries(
  Object.entries(CITY_LESSONS).map(([cityId, lessons]) => [cityId, lessons.length])
);

/** Prefixo usado nos ids das aulas em disco (underscores vs hífens do id da cidade). */
const CITY_PREFIX: Record<string, string> = {
  'mont-saint-michel': 'mont_saint_michel',
};

export function lessonIdFor(cityId: string, lessonNumber: number): string {
  const prefix = CITY_PREFIX[cityId] || cityId;
  return `${prefix}_lesson_${lessonNumber}`;
}

export function cityLevelOf(cityId: string): string {
  return TRAIL_CITY_LEVELS[cityId] || '';
}

export function trailIndexOf(cityId: string): number {
  return TRAIL_CITY_ORDER.indexOf(cityId);
}

/** Modo administrador (bypassa todos os bloqueios). Default: ativo durante a fase de autoria. */
const ADMIN_MODE_KEY = 'jaguara_admin_mode';

export function getAdminMode(): boolean {
  try {
    return localStorage.getItem(ADMIN_MODE_KEY) !== 'off';
  } catch {
    return true;
  }
}

export function setAdminMode(enabled: boolean): void {
  try {
    if (enabled) {
      localStorage.removeItem(ADMIN_MODE_KEY);
    } else {
      localStorage.setItem(ADMIN_MODE_KEY, 'off');
    }
  } catch {
    // localStorage indisponível: mantém o default
  }
}

function completedIds(progress: UserMapProgress): string[] {
  return progress?.completedLessonIds || [];
}

export function isLessonCompleted(progress: UserMapProgress, cityId: string, lessonNumber: number): boolean {
  return completedIds(progress).includes(lessonIdFor(cityId, lessonNumber));
}

export function getCityLessonProgress(progress: UserMapProgress, cityId: string): { completed: number; total: number } {
  const total = TRAIL_CITY_LESSON_COUNTS[cityId] || 0;
  let completed = 0;
  for (let n = 1; n <= total; n++) {
    if (isLessonCompleted(progress, cityId, n)) completed++;
  }
  return { completed, total };
}

export function isCityCompleted(progress: UserMapProgress, cityId: string): boolean {
  const { completed, total } = getCityLessonProgress(progress, cityId);
  return total > 0 && completed >= total;
}

/** Uma cidade abre quando TODAS as aulas da cidade anterior da trilha foram concluídas. */
export function isCityUnlocked(progress: UserMapProgress, cityId: string): boolean {
  if (getAdminMode()) return true;
  const idx = trailIndexOf(cityId);
  if (idx <= 0) return true;
  return isCityCompleted(progress, TRAIL_CITY_ORDER[idx - 1]);
}

/** Uma aula abre em ordem dentro da cidade: a lição N exige a lição N-1 concluída. */
export function isLessonUnlocked(progress: UserMapProgress, cityId: string, lessonNumber: number): boolean {
  if (getAdminMode()) return true;
  if (!isCityUnlocked(progress, cityId)) return false;
  if (lessonNumber <= 1) return true;
  return isLessonCompleted(progress, cityId, lessonNumber - 1);
}

/** A trilha inteira está concluída (todas as 11 cidades). */
export function isTrailComplete(progress: UserMapProgress): boolean {
  return TRAIL_CITY_ORDER.every((cityId) => isCityCompleted(progress, cityId));
}

/** A Enciclopédia abre ao terminar a aventura — ou sempre no modo administrador. */
export function isEncyclopediaUnlocked(progress: UserMapProgress): boolean {
  return getAdminMode() || isTrailComplete(progress);
}
