export type CountryId = 'FR' | 'CA' | 'BE' | 'CH';

export type DomainType = 'Todos' | 'Cotidiano' | 'Acadêmico' | 'Profissional' | 'Cultura';

export interface LocationCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface MapLocation {
  id: string;
  cityId: string;
  name: string;
  category: 'History' | 'Art' | 'Gastronomy' | 'Architecture' | 'Literature' | 'Transit' | 'Leisure';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  frenchName: string;
  coordinatesOffset: { x: number; y: number }; // Relative offset from city center in SVG canvas
  tags: string[];
  lessonIds?: string[];
}

export interface City {
  id: string;
  countryId: CountryId;
  name: string;
  frenchName: string;
  region: string;
  coords: { x: number; y: number }; // Percentage coords on map canvas (0-100)
  lat: number;
  lng: number;
  shortDescription: string;
  fullDescription: string;
  categoryTags: string[];
  locations: MapLocation[];
  imageUrl?: string;
  nodeNumber?: number;
  subtitle?: string;
  statusState?: 'explored' | 'in_progress' | 'available' | 'locked';
  isLocked?: boolean;
}

export interface RouteConnection {
  fromCityId: string;
  toCityId: string;
  distanceKm: number;
  routeType: 'highway' | 'rail' | 'scenic';
}

export interface LocationExperience {
  locationId: string;
  locationName: string;
  cityName: string;
  culturalInsightPt: string;
  culturalInsightFr: string;
  bilingualSentences: Array<{
    pt: string;
    fr: string;
    note?: string;
  }>;
  vocabulary: Array<{
    wordFr: string;
    wordPt: string;
    phonetic: string;
    exampleFr: string;
    examplePt: string;
  }>;
  grammarTip: {
    ruleTitle: string;
    explanationPt: string;
    exampleFr: string;
    examplePt: string;
    practiceQuestion: string;
    options: string[];
    correctIndex: number;
  };
  shadowingPhrases: Array<{
    id: string;
    fr: string;
    pt: string;
    audioHint?: string;
  }>;
  mentorPromptContext: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  countryId: CountryId;
  cityId?: string;
  locationId?: string;
  domain: DomainType;
  dateAdded: string;
  wordsLearned: string[];
  status: 'not_started' | 'in_progress' | 'mastered';
  accuracyScore?: number;
}

export interface UserMapProgress {
  currentCityId: string;
  currentLocationId?: string;
  visitedCityIds: string[];
  visitedLocationIds: string[];
  completedLessonIds: string[];
  masteredWords: string[];
  streakDays: number;
  totalStudyMinutes: number;
  selectedDomain: DomainType;
  selectedCountry: CountryId;
  activeJourney?: {
    id: string;
    title: string;
    description: string;
    citySequence: string[];
    currentStepIndex: number;
  };
}

export interface Curiosity {
  id: string;
  cityName: string;
  locationName: string;
  title: string;
  factPt: string;
  relatedWords: Array<{ fr: string; pt: string }>;
  miniQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface StudyTip {
  id: string;
  title: string;
  message: string;
  actionText: string;
  actionType: 'grammar' | 'vocabulary' | 'mentor' | 'lesson';
  targetCityId?: string;
}
