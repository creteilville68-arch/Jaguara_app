import React, { useState } from 'react';
import { UserMapProgress } from '../types/map';
import { FRANCE_CITIES } from '../data/franceMapData';
import { Landmark, Lock, ChevronLeft, BookOpen, ArrowRight, Sparkles, Compass, MapPin } from 'lucide-react';
import { LessonReader } from './LessonReader';
import parisGuide01 from '../data/city_guides/paris_guide_01.json';
import parisGuide02 from '../data/city_guides/paris_guide_02.json';
import parisGuide03 from '../data/city_guides/paris_guide_03.json';
import parisGuide04 from '../data/city_guides/paris_guide_04.json';
import parisGuide05 from '../data/city_guides/paris_guide_05.json';
import parisGuide06 from '../data/city_guides/paris_guide_06.json';
import parisGuide07 from '../data/city_guides/paris_guide_07.json';
import parisGuide08 from '../data/city_guides/paris_guide_08.json';
import amiensGuide01 from '../data/city_guides/amiens_guide_01.json';
import amiensGuide02 from '../data/city_guides/amiens_guide_02.json';
import amiensGuide03 from '../data/city_guides/amiens_guide_03.json';
import amiensGuide04 from '../data/city_guides/amiens_guide_04.json';
import amiensGuide05 from '../data/city_guides/amiens_guide_05.json';
import amiensGuide06 from '../data/city_guides/amiens_guide_06.json';
import amiensGuide07 from '../data/city_guides/amiens_guide_07.json';
import amiensGuide08 from '../data/city_guides/amiens_guide_08.json';
import lilleGuide01 from '../data/city_guides/lille_guide_01.json';
import lilleGuide02 from '../data/city_guides/lille_guide_02.json';
import lilleGuide03 from '../data/city_guides/lille_guide_03.json';
import lilleGuide04 from '../data/city_guides/lille_guide_04.json';
import lilleGuide05 from '../data/city_guides/lille_guide_05.json';
import lilleGuide06 from '../data/city_guides/lille_guide_06.json';
import lilleGuide07 from '../data/city_guides/lille_guide_07.json';
import lilleGuide08 from '../data/city_guides/lille_guide_08.json';
import msmGuide01 from '../data/city_guides/mont_saint_michel_guide_01.json';
import msmGuide02 from '../data/city_guides/mont_saint_michel_guide_02.json';
import msmGuide03 from '../data/city_guides/mont_saint_michel_guide_03.json';
import msmGuide04 from '../data/city_guides/mont_saint_michel_guide_04.json';
import msmGuide05 from '../data/city_guides/mont_saint_michel_guide_05.json';
import msmGuide06 from '../data/city_guides/mont_saint_michel_guide_06.json';
import msmGuide07 from '../data/city_guides/mont_saint_michel_guide_07.json';
import msmGuide08 from '../data/city_guides/mont_saint_michel_guide_08.json';
import toursGuide01 from '../data/city_guides/tours_guide_01.json';
import toursGuide02 from '../data/city_guides/tours_guide_02.json';
import toursGuide03 from '../data/city_guides/tours_guide_03.json';
import toursGuide04 from '../data/city_guides/tours_guide_04.json';
import toursGuide05 from '../data/city_guides/tours_guide_05.json';
import toursGuide06 from '../data/city_guides/tours_guide_06.json';
import toursGuide07 from '../data/city_guides/tours_guide_07.json';
import toursGuide08 from '../data/city_guides/tours_guide_08.json';
import bordeauxGuide01 from '../data/city_guides/bordeaux_guide_01.json';
import bordeauxGuide02 from '../data/city_guides/bordeaux_guide_02.json';
import bordeauxGuide03 from '../data/city_guides/bordeaux_guide_03.json';
import bordeauxGuide04 from '../data/city_guides/bordeaux_guide_04.json';
import bordeauxGuide05 from '../data/city_guides/bordeaux_guide_05.json';
import bordeauxGuide06 from '../data/city_guides/bordeaux_guide_06.json';
import bordeauxGuide07 from '../data/city_guides/bordeaux_guide_07.json';
import bordeauxGuide08 from '../data/city_guides/bordeaux_guide_08.json';
import toulouseGuide01 from '../data/city_guides/toulouse_guide_01.json';
import toulouseGuide02 from '../data/city_guides/toulouse_guide_02.json';
import toulouseGuide03 from '../data/city_guides/toulouse_guide_03.json';
import toulouseGuide04 from '../data/city_guides/toulouse_guide_04.json';
import toulouseGuide05 from '../data/city_guides/toulouse_guide_05.json';
import toulouseGuide06 from '../data/city_guides/toulouse_guide_06.json';
import toulouseGuide07 from '../data/city_guides/toulouse_guide_07.json';
import toulouseGuide08 from '../data/city_guides/toulouse_guide_08.json';
import lyonGuide01 from '../data/city_guides/lyon_guide_01.json';
import lyonGuide02 from '../data/city_guides/lyon_guide_02.json';
import lyonGuide03 from '../data/city_guides/lyon_guide_03.json';
import lyonGuide04 from '../data/city_guides/lyon_guide_04.json';
import lyonGuide05 from '../data/city_guides/lyon_guide_05.json';
import lyonGuide06 from '../data/city_guides/lyon_guide_06.json';
import lyonGuide07 from '../data/city_guides/lyon_guide_07.json';
import lyonGuide08 from '../data/city_guides/lyon_guide_08.json';
import marseilleGuide01 from '../data/city_guides/marseille_guide_01.json';
import marseilleGuide02 from '../data/city_guides/marseille_guide_02.json';
import marseilleGuide03 from '../data/city_guides/marseille_guide_03.json';
import marseilleGuide04 from '../data/city_guides/marseille_guide_04.json';
import marseilleGuide05 from '../data/city_guides/marseille_guide_05.json';
import marseilleGuide06 from '../data/city_guides/marseille_guide_06.json';
import marseilleGuide07 from '../data/city_guides/marseille_guide_07.json';
import marseilleGuide08 from '../data/city_guides/marseille_guide_08.json';
import marseilleGuide09 from '../data/city_guides/marseille_guide_09.json';
import marseilleGuide10 from '../data/city_guides/marseille_guide_10.json';
import strasbourgGuide01 from '../data/city_guides/strasbourg_guide_01.json';
import strasbourgGuide02 from '../data/city_guides/strasbourg_guide_02.json';
import strasbourgGuide03 from '../data/city_guides/strasbourg_guide_03.json';
import strasbourgGuide04 from '../data/city_guides/strasbourg_guide_04.json';
import strasbourgGuide05 from '../data/city_guides/strasbourg_guide_05.json';
import strasbourgGuide06 from '../data/city_guides/strasbourg_guide_06.json';
import strasbourgGuide07 from '../data/city_guides/strasbourg_guide_07.json';
import strasbourgGuide08 from '../data/city_guides/strasbourg_guide_08.json';
import strasbourgGuide09 from '../data/city_guides/strasbourg_guide_09.json';
import strasbourgGuide10 from '../data/city_guides/strasbourg_guide_10.json';
import niceGuide01 from '../data/city_guides/nice_guide_01.json';
import niceGuide02 from '../data/city_guides/nice_guide_02.json';
import niceGuide03 from '../data/city_guides/nice_guide_03.json';
import niceGuide04 from '../data/city_guides/nice_guide_04.json';
import niceGuide05 from '../data/city_guides/nice_guide_05.json';
import niceGuide06 from '../data/city_guides/nice_guide_06.json';
import niceGuide07 from '../data/city_guides/nice_guide_07.json';
import niceGuide08 from '../data/city_guides/nice_guide_08.json';
import niceGuide09 from '../data/city_guides/nice_guide_09.json';
import niceGuide10 from '../data/city_guides/nice_guide_10.json';
import niceGuide11 from '../data/city_guides/nice_guide_11.json';
import niceGuide12 from '../data/city_guides/nice_guide_12.json';
import niceGuide13 from '../data/city_guides/nice_guide_13.json';
import niceGuide14 from '../data/city_guides/nice_guide_14.json';
import niceGuide15 from '../data/city_guides/nice_guide_15.json';
import niceGuide16 from '../data/city_guides/nice_guide_16.json';

interface EncyclopediaViewProps {
  progress: UserMapProgress;
  onNavigateToFlashcards?: () => void;
}

/** Dossiês por cidade. Cada seção é uma "aula" no formato padrão (paragraphs + vocabularyDictionary). */
const CITY_GUIDES: Record<string, Array<Record<string, unknown>>> = {
  paris: [
    parisGuide01 as unknown as Record<string, unknown>,
    parisGuide02 as unknown as Record<string, unknown>,
    parisGuide03 as unknown as Record<string, unknown>,
    parisGuide04 as unknown as Record<string, unknown>,
    parisGuide05 as unknown as Record<string, unknown>,
    parisGuide06 as unknown as Record<string, unknown>,
    parisGuide07 as unknown as Record<string, unknown>,
    parisGuide08 as unknown as Record<string, unknown>,
  ],
  amiens: [
    amiensGuide01 as unknown as Record<string, unknown>,
    amiensGuide02 as unknown as Record<string, unknown>,
    amiensGuide03 as unknown as Record<string, unknown>,
    amiensGuide04 as unknown as Record<string, unknown>,
    amiensGuide05 as unknown as Record<string, unknown>,
    amiensGuide06 as unknown as Record<string, unknown>,
    amiensGuide07 as unknown as Record<string, unknown>,
    amiensGuide08 as unknown as Record<string, unknown>,
  ],
  lille: [
    lilleGuide01 as unknown as Record<string, unknown>,
    lilleGuide02 as unknown as Record<string, unknown>,
    lilleGuide03 as unknown as Record<string, unknown>,
    lilleGuide04 as unknown as Record<string, unknown>,
    lilleGuide05 as unknown as Record<string, unknown>,
    lilleGuide06 as unknown as Record<string, unknown>,
    lilleGuide07 as unknown as Record<string, unknown>,
    lilleGuide08 as unknown as Record<string, unknown>,
  ],
  'mont-saint-michel': [
    msmGuide01 as unknown as Record<string, unknown>,
    msmGuide02 as unknown as Record<string, unknown>,
    msmGuide03 as unknown as Record<string, unknown>,
    msmGuide04 as unknown as Record<string, unknown>,
    msmGuide05 as unknown as Record<string, unknown>,
    msmGuide06 as unknown as Record<string, unknown>,
    msmGuide07 as unknown as Record<string, unknown>,
    msmGuide08 as unknown as Record<string, unknown>,
  ],
  tours: [
    toursGuide01 as unknown as Record<string, unknown>,
    toursGuide02 as unknown as Record<string, unknown>,
    toursGuide03 as unknown as Record<string, unknown>,
    toursGuide04 as unknown as Record<string, unknown>,
    toursGuide05 as unknown as Record<string, unknown>,
    toursGuide06 as unknown as Record<string, unknown>,
    toursGuide07 as unknown as Record<string, unknown>,
    toursGuide08 as unknown as Record<string, unknown>,
  ],
  bordeaux: [
    bordeauxGuide01 as unknown as Record<string, unknown>,
    bordeauxGuide02 as unknown as Record<string, unknown>,
    bordeauxGuide03 as unknown as Record<string, unknown>,
    bordeauxGuide04 as unknown as Record<string, unknown>,
    bordeauxGuide05 as unknown as Record<string, unknown>,
    bordeauxGuide06 as unknown as Record<string, unknown>,
    bordeauxGuide07 as unknown as Record<string, unknown>,
    bordeauxGuide08 as unknown as Record<string, unknown>,
  ],
  toulouse: [
    toulouseGuide01 as unknown as Record<string, unknown>,
    toulouseGuide02 as unknown as Record<string, unknown>,
    toulouseGuide03 as unknown as Record<string, unknown>,
    toulouseGuide04 as unknown as Record<string, unknown>,
    toulouseGuide05 as unknown as Record<string, unknown>,
    toulouseGuide06 as unknown as Record<string, unknown>,
    toulouseGuide07 as unknown as Record<string, unknown>,
    toulouseGuide08 as unknown as Record<string, unknown>,
  ],
  lyon: [
    lyonGuide01 as unknown as Record<string, unknown>,
    lyonGuide02 as unknown as Record<string, unknown>,
    lyonGuide03 as unknown as Record<string, unknown>,
    lyonGuide04 as unknown as Record<string, unknown>,
    lyonGuide05 as unknown as Record<string, unknown>,
    lyonGuide06 as unknown as Record<string, unknown>,
    lyonGuide07 as unknown as Record<string, unknown>,
    lyonGuide08 as unknown as Record<string, unknown>,
  ],
  marseille: [
    marseilleGuide01 as unknown as Record<string, unknown>,
    marseilleGuide02 as unknown as Record<string, unknown>,
    marseilleGuide03 as unknown as Record<string, unknown>,
    marseilleGuide04 as unknown as Record<string, unknown>,
    marseilleGuide05 as unknown as Record<string, unknown>,
    marseilleGuide06 as unknown as Record<string, unknown>,
    marseilleGuide07 as unknown as Record<string, unknown>,
    marseilleGuide08 as unknown as Record<string, unknown>,
    marseilleGuide09 as unknown as Record<string, unknown>,
    marseilleGuide10 as unknown as Record<string, unknown>,
  ],
  strasbourg: [
    strasbourgGuide01 as unknown as Record<string, unknown>,
    strasbourgGuide02 as unknown as Record<string, unknown>,
    strasbourgGuide03 as unknown as Record<string, unknown>,
    strasbourgGuide04 as unknown as Record<string, unknown>,
    strasbourgGuide05 as unknown as Record<string, unknown>,
    strasbourgGuide06 as unknown as Record<string, unknown>,
    strasbourgGuide07 as unknown as Record<string, unknown>,
    strasbourgGuide08 as unknown as Record<string, unknown>,
    strasbourgGuide09 as unknown as Record<string, unknown>,
    strasbourgGuide10 as unknown as Record<string, unknown>,
  ],
  nice: [
    niceGuide01 as unknown as Record<string, unknown>,
    niceGuide02 as unknown as Record<string, unknown>,
    niceGuide03 as unknown as Record<string, unknown>,
    niceGuide04 as unknown as Record<string, unknown>,
    niceGuide05 as unknown as Record<string, unknown>,
    niceGuide06 as unknown as Record<string, unknown>,
    niceGuide07 as unknown as Record<string, unknown>,
    niceGuide08 as unknown as Record<string, unknown>,
    niceGuide09 as unknown as Record<string, unknown>,
    niceGuide10 as unknown as Record<string, unknown>,
    niceGuide11 as unknown as Record<string, unknown>,
    niceGuide12 as unknown as Record<string, unknown>,
    niceGuide13 as unknown as Record<string, unknown>,
    niceGuide14 as unknown as Record<string, unknown>,
    niceGuide15 as unknown as Record<string, unknown>,
    niceGuide16 as unknown as Record<string, unknown>,
  ],
};

const CITY_ORDER = [
  'paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux',
  'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice',
];

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({ progress, onNavigateToFlashcards }) => {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<Record<string, unknown> | null>(null);

  const journey = progress.activeJourney;
  const trailEnded =
    !!journey && journey.currentStepIndex >= journey.citySequence.length - 1;
  const finalLessonDone = progress.completedLessonIds.includes('nice_lesson_40');
  const isUnlocked = trailEnded || finalLessonDone;

  const journeyProgress = journey
    ? Math.min(journey.currentStepIndex + 1, journey.citySequence.length)
    : 0;
  const journeyTotal = journey ? journey.citySequence.length : 11;

  // Leitor de seção (reusa o LessonReader das aulas)
  if (activeSection) {
    return (
      <LessonReader
        onBack={() => setActiveSection(null)}
        onNavigateToFlashcards={onNavigateToFlashcards}
        lessonData={activeSection as never}
      />
    );
  }

  // Detalhe da cidade: lista de seções do dossiê
  if (selectedCityId) {
    const city = FRANCE_CITIES.find((c) => c.id === selectedCityId);
    const sections = CITY_GUIDES[selectedCityId] || [];
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6 select-none">
        <button
          onClick={() => setSelectedCityId(null)}
          className="flex items-center space-x-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar à Enciclopédia</span>
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Dossiê da cidade</span>
              </div>
              <h1 className="text-2xl font-black text-white mt-1">{city?.name || selectedCityId}</h1>
              <p className="text-sm text-slate-400 mt-1">
                {sections.length} seções temáticas · níveis A1 a C2
              </p>
            </div>
          </div>

          <div className="grid gap-3 pt-2">
            {sections.map((section, idx) => {
              const titleFr = (section.titleFr as string) || `Section ${idx + 1}`;
              const titlePt = (section.titlePt as string) || '';
              const paragraphs = (section.paragraphs as Array<{ fr: string; pt: string }>) || [];
              const vocab = (section.vocabularyDictionary as Array<unknown>) || [];
              const level = (section.level as string) || '';
              return (
                <button
                  key={(section.id as string) || idx}
                  onClick={() => setActiveSection(section)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-700 hover:bg-slate-900 transition-all text-left"
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {idx + 1}. {titleFr}
                      </p>
                      {titlePt && <p className="text-xs text-slate-400 mt-0.5">{titlePt}</p>}
                      <div className="flex items-center gap-2 mt-1.5">
                        {level && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-[10px] font-bold text-amber-300 uppercase tracking-wide">
                            {level}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500">
                          {paragraphs.length} parágrafos · {vocab.length} expressões-chave
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Tela bloqueada: fim da trilha ainda não alcançado
  if (!isUnlocked) {
    return (
      <div className="max-w-5xl mx-auto p-6 select-none">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 flex flex-col items-center text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
            <Lock className="w-7 h-7 text-slate-500" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Enciclopédia da França</h1>
            <p className="text-sm text-slate-400 mt-2 max-w-lg">
              Ao terminar a trilha de Irlan, você desbloqueia os dossiês das 11 cidades:
              história, cultura, gastronomia, esporte e vida cotidiana — com todo o
              vocabulário do banco, dos níveis A1 ao C2.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5">
              <span className="flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Progresso da trilha</span>
              </span>
              <span>{journeyProgress} de {journeyTotal} paradas</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all"
                style={{ width: `${Math.round((journeyProgress / journeyTotal) * 100)}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Complete a aventura de Irlan (A1 → C2) para abrir a Enciclopédia.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Grade das 11 cidades
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 select-none">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Fase 2 · pós-trilha</span>
          </div>
          <h1 className="text-2xl font-black text-white mt-1">Enciclopédia da França</h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Dossiês das 11 cidades: história, patrimônio, gastronomia, esporte e vida
            cotidiana. Textos ricos em vocabulário A1–C2, com todas as palavras clicáveis.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CITY_ORDER.map((cityId) => {
          const city = FRANCE_CITIES.find((c) => c.id === cityId);
          const sections = CITY_GUIDES[cityId];
          const isAvailable = !!sections && sections.length > 0;
          return (
            <button
              key={cityId}
              disabled={!isAvailable}
              onClick={() => setSelectedCityId(cityId)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                isAvailable
                  ? 'bg-slate-900 border-slate-800 hover:border-emerald-700 hover:bg-slate-900/70'
                  : 'bg-slate-950/60 border-slate-800/60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isAvailable
                      ? 'bg-emerald-950/70 border border-emerald-800/50 text-emerald-400'
                      : 'bg-slate-900 border border-slate-800 text-slate-600'
                  }`}>
                    {isAvailable ? <Landmark className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white capitalize">{city?.name || cityId}</p>
                    <p className="text-[11px] text-slate-500">
                      {isAvailable
                        ? `${sections.length} seções · ${city?.region || ''}`
                        : 'Dossiê em breve'}
                    </p>
                  </div>
                </div>
                {isAvailable && (
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2 text-[11px] text-slate-500 pt-2">
        <MapPin className="w-3.5 h-3.5" />
        <span>Novos dossiês são adicionados cidade por cidade.</span>
      </div>
    </div>
  );
};
