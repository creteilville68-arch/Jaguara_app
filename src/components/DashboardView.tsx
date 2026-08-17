import React from 'react';
import { UserMapProgress, Lesson } from '../types/map';
import { FRANCE_CITIES } from '../data/franceMapData';
import { Compass, BookOpen, Flame, Award, Layers, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { getUniqueWordCount, TARGET_TOTAL_WORDS, getLevelTargetProgress, getNextLevelToFill, getWordsRemaining } from '../data/wordBank';
import { getCityGrammarProgression } from '../data/grammarProgressionRules';
import { StorageService } from '../services/storageService';

interface DashboardViewProps {
  progress: UserMapProgress;
  lessons: Lesson[];
  onNavigateToMap: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  lessons,
  onNavigateToMap,
}) => {
  const visitedCitiesCount = progress.visitedCityIds.length;
  const totalCitiesCount = FRANCE_CITIES.length;
  const mapProgressPercent = Math.round((visitedCitiesCount / totalCitiesCount) * 100);
  const uniqueBankCount = getUniqueWordCount();
  const wordsRemaining = getWordsRemaining();
  const learnedUniqueCount = StorageService.getVocabularyBank().length;
  const levelTargetProgress = getLevelTargetProgress();
  const nextLevelToFill = getNextLevelToFill();
  const studentLevel =
    getCityGrammarProgression(progress.currentCityId)?.cefrLevel || 'Iniciante (A1)';

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 select-none">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-800/40 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800 uppercase">
              França 🇫🇷
            </span>
            <span className="text-xs text-slate-400 font-medium">Nível do Aluno: {studentLevel}</span>
          </div>
          <h2 className="text-2xl font-black text-white">Painel do Aluno - JAGUARÁ</h2>
          <p className="text-xs text-slate-400 max-w-xl">
            Sua jornada de aprendizagem pelo Mapa da Memória da França. Explore cidades, pratique vocabulário e converse com o Mentor Irlan.
          </p>
        </div>

        <button
          onClick={onNavigateToMap}
          className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/50 transition-all flex items-center space-x-2 shrink-0"
        >
          <Compass className="w-4 h-4" />
          <span>Continuar no Mapa</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Exploração do Mapa</span>
            <Compass className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white">
            {visitedCitiesCount} / {totalCitiesCount} <span className="text-xs font-normal text-slate-400">cidades</span>
          </p>
          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-500"
              style={{ width: `${mapProgressPercent}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Banco de Palavras (Sem Repetição)</span>
            <Layers className="w-4 h-4 text-teal-400" />
          </div>
          <p className="text-2xl font-black text-white">
            {uniqueBankCount.toLocaleString('pt-BR')} / {TARGET_TOTAL_WORDS.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-400">únicas</span>
          </p>
          <p className="text-[10px] text-emerald-400 font-semibold">
            {learnedUniqueCount} dominadas • faltam {wordsRemaining.toLocaleString('pt-BR')} para a meta
          </p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Ofensiva de Estudos</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-amber-400">
            {progress.streakDays} <span className="text-xs font-normal text-slate-400">dias seguidos</span>
          </p>
          <p className="text-[10px] text-slate-500">Mantenha a consistência diária</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Aulas Concluídas</span>
            <BookOpen className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white">
            {lessons.length} <span className="text-xs font-normal text-slate-400">conteúdos</span>
          </p>
          <p className="text-[10px] text-slate-500">Vinculados a cidades do mapa</p>
        </div>
      </div>

      {/* CEFR Level Progression (A1 → C2) */}
      <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Evolução do Vocabulário por Nível (A1 → C2)</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {levelTargetProgress.map((lvl, idx) => {
            const pct = Math.min(100, Math.round((lvl.count / lvl.target) * 100));
            const isNext = lvl.level === nextLevelToFill;
            return (
              <div
                key={lvl.level}
                className={`p-3.5 rounded-xl border space-y-2 ${
                  isNext ? 'bg-emerald-950/50 border-emerald-700/60' : 'bg-slate-950/60 border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white">{lvl.level}</span>
                  <span className="text-[10px] text-slate-500">Etapa {idx + 1}</span>
                </div>
                <p className="text-xl font-black text-emerald-300">
                  {lvl.count.toLocaleString('pt-BR')}
                  <span className="text-[10px] font-normal text-slate-500"> / {lvl.target.toLocaleString('pt-BR')}</span>
                </p>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className={`text-[10px] font-semibold ${lvl.missing > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {lvl.missing > 0 ? `faltam ${lvl.missing.toLocaleString('pt-BR')}` : 'nível completo'}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] text-slate-500">
          Metas por nível baseadas no QECR (A1 ≈ 1.000 · A2 ≈ 2.000 · B1 ≈ 4.000 · B2 ≈ 6.500 · C1 ≈ 10.000 · C2 ≈ 15.400, acumulados).
          Próximo nível a preencher: <span className="text-emerald-400 font-semibold">{nextLevelToFill}</span>.
        </p>
      </div>

      {/* Domain Proficiency Breakdown */}
      <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Domínio da Língua por Categoria</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {[
            { name: 'Cotidiano', percent: 78, color: 'bg-emerald-500' },
            { name: 'Cultura & História', percent: 85, color: 'bg-teal-500' },
            { name: 'Gastronomia', percent: 90, color: 'bg-amber-500' },
            { name: 'Profissional', percent: 45, color: 'bg-blue-500' },
          ].map((dom) => (
            <div key={dom.name} className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between font-bold">
                <span>{dom.name}</span>
                <span className="text-emerald-400">{dom.percent}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className={`${dom.color} h-full transition-all duration-500`}
                  style={{ width: `${dom.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
