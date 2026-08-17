import { UserMapProgress, Lesson, DomainType, CountryId } from '../types/map';
import { normalizeToLemma } from '../utils/lemmaHelper';

export interface VocabBankEntry {
  id: string;
  wordFr: string;
  wordPt: string;
  lemma: string;
  srsLevel: number;
  cityId?: string;
  lastReviewed: string;
}

const PROGRESS_KEY = 'jaguara_user_map_progress_v2';
const LESSONS_KEY = 'jaguara_user_lessons_v2';
const VOCAB_KEY = 'jaguara_user_vocab_v2';

const INITIAL_PROGRESS: UserMapProgress = {
  currentCityId: 'paris',
  currentLocationId: 'louvre',
  visitedCityIds: ['paris'],
  visitedLocationIds: ['louvre'],
  completedLessonIds: [],
  masteredWords: [],
  streakDays: 3,
  totalStudyMinutes: 45,
  selectedDomain: 'Todos',
  selectedCountry: 'FR',
  activeJourney: {
    id: 'trilha_franca_11_cidades',
    title: 'Trilha Francês pela França (11 Cidades)',
    description: 'Trilha imersiva começando em Paris (#1) e avançando pelas 11 cidades até Nice (#11).',
    citySequence: ['paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux', 'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice'],
    currentStepIndex: 0
  }
};

const EXPECTED_CITY_SEQUENCE = [
  'paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux',
  'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice',
];

export class StorageService {
  public static getProgress(): UserMapProgress {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      if (!data) {
        this.saveProgress(INITIAL_PROGRESS);
        return INITIAL_PROGRESS;
      }
      const p: UserMapProgress = JSON.parse(data);
      // Ensure existing local storage is upgraded to the clean 11-city trail from Paris (#1) to Nice (#11)
      if (
        p.activeJourney &&
        (p.activeJourney.citySequence.length !== 11 ||
          !p.activeJourney.citySequence.every((c, i) => c === EXPECTED_CITY_SEQUENCE[i]))
      ) {
        p.activeJourney = INITIAL_PROGRESS.activeJourney;
        this.saveProgress(p);
      }
      return p;
    } catch {
      return INITIAL_PROGRESS;
    }
  }

  public static saveProgress(progress: UserMapProgress): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save user progress', e);
    }
  }

  public static updateLocationVisited(cityId: string, locationId: string): UserMapProgress {
    const p = this.getProgress();
    if (!p.visitedCityIds.includes(cityId)) {
      p.visitedCityIds.push(cityId);
    }
    if (!p.visitedLocationIds.includes(locationId)) {
      p.visitedLocationIds.push(locationId);
    }
    p.currentCityId = cityId;
    p.currentLocationId = locationId;

    // Check journey progress
    if (p.activeJourney) {
      const stepIdx = p.activeJourney.citySequence.indexOf(cityId);
      if (stepIdx >= 0 && stepIdx >= p.activeJourney.currentStepIndex) {
        p.activeJourney.currentStepIndex = Math.min(stepIdx + 1, p.activeJourney.citySequence.length - 1);
      }
    }

    this.saveProgress(p);
    return p;
  }

  public static setDomainFilter(domain: DomainType): UserMapProgress {
    const p = this.getProgress();
    p.selectedDomain = domain;
    this.saveProgress(p);
    return p;
  }

  public static setCountryFilter(country: CountryId): UserMapProgress {
    const p = this.getProgress();
    p.selectedCountry = country;
    this.saveProgress(p);
    return p;
  }

  // LESSONS MANAGEMENT (Real User Lessons - Clean Environment)
  public static getLessons(): Lesson[] {
    try {
      const data = localStorage.getItem(LESSONS_KEY);
      if (!data) {
        return [];
      }
      const parsed: Lesson[] = JSON.parse(data);
      // Remove all old predetermined official lessons so the environment is clean for the new trail
      const customLessons = parsed.filter(l => 
        !l.id.startsWith('lesson_paris_') && 
        !l.id.startsWith('paris_lesson_') && 
        !l.id.startsWith('paris-')
      );
      if (customLessons.length !== parsed.length) {
        this.saveLessons(customLessons);
      }
      return customLessons;
    } catch {
      return [];
    }
  }

  public static saveLessons(lessons: Lesson[]): void {
    try {
      localStorage.setItem(LESSONS_KEY, JSON.stringify(lessons));
    } catch (e) {
      console.error('Failed to save lessons', e);
    }
  }

  public static addLesson(lesson: Lesson): Lesson[] {
    const lessons = this.getLessons();
    lessons.unshift(lesson);
    this.saveLessons(lessons);

    // Update progress word counts and completion
    const p = this.getProgress();
    if (lesson.cityId && !p.visitedCityIds.includes(lesson.cityId)) {
      p.visitedCityIds.push(lesson.cityId);
    }
    if (lesson.locationId && !p.visitedLocationIds.includes(lesson.locationId)) {
      p.visitedLocationIds.push(lesson.locationId);
    }
    if (!p.completedLessonIds.includes(lesson.id)) {
      p.completedLessonIds.push(lesson.id);
    }
    lesson.wordsLearned.forEach(w => {
      const wLemma = normalizeToLemma(w);
      if (!p.masteredWords.includes(wLemma)) {
        p.masteredWords.push(wLemma);
      }
    });
    this.saveProgress(p);

    return lessons;
  }

  // VOCABULARY BANK WITH SRS LEITNER LEVELS (Deduplicated by Lemma - Base for 15.400 lemmas)
  public static getVocabularyBank(): VocabBankEntry[] {
    try {
      const data = localStorage.getItem(VOCAB_KEY);
      if (!data) {
        const initialVocab: VocabBankEntry[] = [
          { id: 'v1', wordFr: 'le musée', wordPt: 'o museu', lemma: 'musée', srsLevel: 3, cityId: 'paris', lastReviewed: new Date().toISOString() },
          { id: 'v2', wordFr: 'l\'addition', wordPt: 'a conta', lemma: 'addition', srsLevel: 2, cityId: 'lyon', lastReviewed: new Date().toISOString() },
          { id: 'v3', wordFr: 'la cathédrale', wordPt: 'a catedral', lemma: 'cathédrale', srsLevel: 4, cityId: 'reims', lastReviewed: new Date().toISOString() },
          { id: 'v4', wordFr: 'la plage', wordPt: 'a praia', lemma: 'plage', srsLevel: 1, cityId: 'nice', lastReviewed: new Date().toISOString() }
        ];
        localStorage.setItem(VOCAB_KEY, JSON.stringify(initialVocab));
        return initialVocab;
      }
      const parsed = JSON.parse(data);
      // Automatically migrate any stored item without .lemma
      return parsed.map((item: any) => ({
        ...item,
        lemma: item.lemma || normalizeToLemma(item.wordFr)
      }));
    } catch {
      return [];
    }
  }

  public static addWordToVocab(wordFr: string, wordPt: string, cityId?: string, explicitLemma?: string) {
    const vocab = this.getVocabularyBank();
    const targetLemma = normalizeToLemma(wordFr, explicitLemma);
    const existing = vocab.find(v => {
      const existingLemma = v.lemma || normalizeToLemma(v.wordFr);
      return existingLemma.toLowerCase().trim() === targetLemma.toLowerCase().trim();
    });
    if (!existing) {
      vocab.push({
        id: 'v_' + Date.now() + Math.random().toString(36).substring(2, 5),
        wordFr,
        wordPt,
        lemma: targetLemma,
        srsLevel: 1,
        cityId,
        lastReviewed: new Date().toISOString()
      });
      localStorage.setItem(VOCAB_KEY, JSON.stringify(vocab));
    }
  }

  public static updateVocabSrsLevel(id: string, newSrsLevel: number): void {
    const vocab = this.getVocabularyBank();
    const item = vocab.find(v => v.id === id);
    if (item) {
      item.srsLevel = Math.max(1, Math.min(5, newSrsLevel));
      item.lastReviewed = new Date().toISOString();
      localStorage.setItem(VOCAB_KEY, JSON.stringify(vocab));
    }
  }

  public static removeWordFromVocab(id: string): void {
    const vocab = this.getVocabularyBank();
    const filtered = vocab.filter(v => v.id !== id);
    localStorage.setItem(VOCAB_KEY, JSON.stringify(filtered));
  }
}
