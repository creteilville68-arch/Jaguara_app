import React, { useState } from 'react';
import { Lesson, DomainType, UserMapProgress } from '../types/map';
import { FRANCE_CITIES } from '../data/franceMapData';
import { BookOpen, Plus, Sparkles, MapPin, CheckCircle, ArrowRight, Trash2, Target, Lock } from 'lucide-react';
import { LessonReader } from './LessonReader';
import { analyzeLessonLocally } from '../services/offlineContent';
import { StorageService } from '../services/storageService';
import { isCityUnlocked, isCityCompleted, isLessonUnlocked, isLessonCompleted, getCityLessonProgress } from '../utils/trailProgression';
import { CITY_LESSONS, ALL_OFFICIAL_LESSONS } from '../data/officialLessonsCatalog';


// Meta pedagógica da trilha: 15.400 palavras clicáveis ÷ 11 cidades ≈ 1.400
// palavras novas por cidade. A contagem deduplica por term (minúsculas), então
// uma palavra que reaparece em outras aulas conta apenas uma vez.
const CITY_WORD_GOAL = 1400;

function countUniqueCityWords(cityId: string): number {
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

const CITY_TRAIL_INFO: Array<{ id: string; label: string; level: string }> = [
  { id: 'paris', label: '#1 Paris', level: 'A1' },
  { id: 'amiens', label: '#2 Amiens', level: 'A1/A2' },
  { id: 'lille', label: '#3 Lille', level: 'A2' },
  { id: 'mont-saint-michel', label: '#4 Mont St-Michel', level: 'A2/B1' },
  { id: 'tours', label: '#5 Tours', level: 'B1' },
  { id: 'bordeaux', label: '#6 Bordeaux', level: 'B1+' },
  { id: 'toulouse', label: '#7 Toulouse', level: 'B2' },
  { id: 'lyon', label: '#8 Lyon', level: 'B2+' },
  { id: 'marseille', label: '#9 Marselha', level: 'C1' },
  { id: 'strasbourg', label: '#10 Estrasburgo', level: 'C1+' },
  { id: 'nice', label: '#11 Nice', level: 'C2' },
];

interface LessonsViewProps {
  lessons: Lesson[];
  onAddLesson: (lesson: Lesson) => void;
  onNavigateToCity: (cityId: string) => void;
  onNavigateToFlashcards?: () => void;
  initialCityId?: string;
  progress: UserMapProgress;
  onProgressChange?: (progress: UserMapProgress) => void;
}

export const LessonsView: React.FC<LessonsViewProps> = ({
  lessons,
  onAddLesson,
  onNavigateToCity,
  onNavigateToFlashcards,
  initialCityId,
  progress,
  onProgressChange,
}) => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [domain, setDomain] = useState<DomainType>('Cotidiano');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [activeOfficialLessonId, setActiveOfficialLessonId] = useState<string | null>(null);
  const [selectedCityTab, setSelectedCityTab] = useState<string>(() => {
    const preferred = initialCityId && CITY_LESSONS[initialCityId] ? initialCityId : 'paris';
    return isCityUnlocked(progress, preferred) ? preferred : 'paris';
  });

  const handleAnalyzeAndSave = async () => {
    if (!title.trim() || !content.trim()) return;
    setAnalyzing(true);

    try {
      const data = analyzeLessonLocally(title, content, domain);

      const newLesson: Lesson = {
        id: 'lesson_' + Date.now(),
        title,
        content,
        countryId: 'FR',
        cityId: data.suggestedCityId || 'paris',
        domain: (data.domain as DomainType) || domain,
        dateAdded: new Date().toISOString(),
        wordsLearned: data.wordsLearned || ['français', 'étude'],
        status: 'mastered',
        accuracyScore: 95
      };

      onAddLesson(newLesson);
      setTitle('');
      setContent('');
      setShowAddModal(false);
    } catch (e) {
      console.error('Failed to analyze lesson', e);
    } finally {
      setAnalyzing(false);
    }
  };

  const activeOfficialLesson = ALL_OFFICIAL_LESSONS.find(
    (l: any) => l.id === activeOfficialLessonId
  );
  const activeCityInfo = CITY_TRAIL_INFO.find((c) => c.id === selectedCityTab) || CITY_TRAIL_INFO[0];
  const activeCityLessons = CITY_LESSONS[selectedCityTab] || [];
  const activeCityWordCount = countUniqueCityWords(selectedCityTab);
  const activeCityWordProgress = Math.min(100, Math.round((activeCityWordCount / CITY_WORD_GOAL) * 100));
  if (activeOfficialLesson) {
    return (
      <LessonReader
        onBack={() => {
          setActiveOfficialLessonId(null);
          // Recarrega o progresso: a aula pode ter sido concluída dentro do leitor
          onProgressChange?.(StorageService.getProgress());
        }}
        onNavigateToFlashcards={onNavigateToFlashcards}
        lessonData={activeOfficialLesson as any}
      />
    );
  }

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Caminho B: Suas Aulas → Mapa da Memória
          </span>
          <h2 className="text-2xl font-black text-white mt-0.5">Minhas Aulas & Conteúdos</h2>
          <p className="text-xs text-slate-400">
            Adicione seus próprios textos ou explore as Aulas Oficiais Interativas com dicionário e SRS!
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Aula / Texto</span>
        </button>
      </div>

      {/* Trilha Oficial - Seletor de Cidades */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Trilha Francês pela França (11 Cidades) • Selecione a Cidade:</span>
          </h3>
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60 uppercase">
            {activeCityInfo.label} • Nível {activeCityInfo.level}
          </span>
        </div>

        {/* Tab Bar Cidades com Regra de Evolução Pedagógica A1 -> C2 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {CITY_TRAIL_INFO.map((city) => {
            const isActive = selectedCityTab === city.id;
            const count = (CITY_LESSONS[city.id] || []).length;
            const cityUnlocked = isCityUnlocked(progress, city.id);
            const cityDone = isCityCompleted(progress, city.id);
            const cityProg = getCityLessonProgress(progress, city.id);
            return (
              <button
                key={city.id}
                disabled={!cityUnlocked}
                onClick={() => setSelectedCityTab(city.id)}
                title={cityUnlocked ? undefined : 'Complete todas as aulas da cidade anterior para desbloquear'}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 border border-emerald-500'
                    : cityUnlocked
                    ? 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-950/60 text-slate-600 border border-slate-800/50 cursor-not-allowed'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-300' : cityUnlocked ? (cityDone ? 'bg-emerald-500' : 'bg-slate-600') : 'bg-slate-800'}`} />
                {!cityUnlocked && <Lock className="w-3 h-3 text-slate-600" />}
                <span>
                  {city.label} • Nível {city.level} ({count} {count === 1 ? 'Aula' : 'Aulas'} • {cityProg.completed}/{cityProg.total} concluídas)
                </span>
              </button>
            );
          })}
        </div>

        {/* Meta de Palavras por Cidade */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-xs font-bold text-white">
                Meta {activeCityInfo.label} — Nível {activeCityInfo.level}
              </p>
              <p className="text-[11px] text-slate-400">
                {activeCityWordCount} palavras novas disponíveis nesta cidade (sem repetição)
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1.5">
              <span>Progresso rumo às 15.400 palavras da trilha</span>
              <span className="text-emerald-400">{activeCityWordCount} / {CITY_WORD_GOAL}</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all"
                style={{ width: `${activeCityWordProgress}%` }}
              />
            </div>
          </div>
          <span className="text-sm font-extrabold text-amber-300 shrink-0">
            {activeCityWordProgress}%
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-2">
          {activeCityLessons.map((lesson: any, index: number) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const cityTitle = activeCityInfo.label;
            const cityBadge = activeCityInfo.label;
            const lessonNumber = index + 1;
            const lessonUnlocked = isLessonUnlocked(progress, selectedCityTab, lessonNumber);
            const lessonCompleted = isLessonCompleted(progress, selectedCityTab, lessonNumber);

            const cardClass = lessonCompleted
              ? 'bg-gradient-to-r from-emerald-500/15 via-slate-900 to-slate-900 border-2 border-emerald-500/40'
              : lessonUnlocked
              ? isFirst
                ? 'bg-gradient-to-r from-emerald-500/15 via-slate-900 to-slate-900 border-2 border-emerald-500/50'
                : isSecond
                ? 'bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-slate-800 hover:border-slate-700'
                : 'bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-900 border border-slate-800 hover:border-slate-700'
              : 'bg-slate-900/40 border border-slate-800/60 opacity-60';

            return (
              <div
                key={lesson.id}
                className={`${cardClass} rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span className="text-[10px] font-extrabold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800 uppercase tracking-wide">
                      {lesson.domain} • {cityBadge} • Lição {lessonNumber}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      {lesson.level}
                    </span>
                    {lessonCompleted && (
                      <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Concluída</span>
                      </span>
                    )}
                    {!lessonUnlocked && (
                      <span className="text-[10px] font-extrabold text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Bloqueada</span>
                      </span>
                    )}
                  </div>
                  <h3 className={`text-lg font-black ${lessonUnlocked ? 'text-white' : 'text-slate-400'}`}>
                    {lesson.titleFr || lesson.title}
                  </h3>
                  <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                    {lesson.subtitlePt || lesson.summaryPt || lesson.subtitleFr || ''}
                  </p>
                </div>

                <button
                  onClick={() => lessonUnlocked && setActiveOfficialLessonId(lesson.id)}
                  disabled={!lessonUnlocked}
                  className={`px-5 py-3 ${
                    lessonCompleted
                      ? 'bg-emerald-800/60 hover:bg-emerald-700/60 text-emerald-200 border border-emerald-700/60'
                      : lessonUnlocked
                      ? isFirst
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : isSecond
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                      : 'bg-slate-950 text-slate-600 border border-slate-800 cursor-not-allowed'
                  } font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0`}
                >
                  {lessonCompleted ? (
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                  ) : lessonUnlocked ? (
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-600" />
                  )}
                  <span>
                    {!lessonUnlocked
                      ? 'Bloqueada — conclua a lição anterior'
                      : lessonCompleted
                      ? `Revisar Lição ${lessonNumber} (${cityTitle})`
                      : `Ler Lição ${lessonNumber} (${cityTitle})`}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Lesson Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Analisar e Vincular Nova Aula ao Mapa</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 font-semibold">Título da Aula:</label>
                <input
                  type="text"
                  placeholder="Ex: La Révolution Française et Paris..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold">Conteúdo / Texto em Francês:</label>
                <textarea
                  rows={5}
                  placeholder="Cole ou escreva o texto estudado..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold">Domínio de Uso:</label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value as DomainType)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none"
                >
                  <option value="Cotidiano">Cotidiano</option>
                  <option value="Cultura">Cultura & História</option>
                  <option value="Acadêmico">Acadêmico</option>
                  <option value="Profissional">Profissional</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleAnalyzeAndSave}
                disabled={analyzing}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{analyzing ? 'Analisando...' : 'Analisar e Salvar'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List of Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => {
          const linkedCity = FRANCE_CITIES.find((c) => c.id === lesson.cityId);

          return (
            <div
              key={lesson.id}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800/60 uppercase">
                    {lesson.domain}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1.5">{lesson.title}</h3>
                </div>

                {linkedCity && (
                  <button
                    onClick={() => onNavigateToCity(linkedCity.id)}
                    className="flex items-center space-x-1 text-xs text-emerald-400 hover:underline font-medium bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{linkedCity.name}</span>
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed italic">
                "{lesson.content}"
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {lesson.wordsLearned.slice(0, 4).map((w) => (
                    <span
                      key={w}
                      className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {w}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-emerald-400 font-semibold">
                  Dominado (95%)
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
