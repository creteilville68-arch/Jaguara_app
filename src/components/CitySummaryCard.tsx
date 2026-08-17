import React from 'react';
import { City, UserMapProgress } from '../types/map';
import { MapPin, BookOpen, Award, ArrowRight, Sparkles, Compass, CheckCircle2, X } from 'lucide-react';

interface CitySummaryCardProps {
  city: City | null;
  progress: UserMapProgress;
  onExploreCity: () => void;
  onViewLessons: () => void;
  onClose?: () => void;
}

export const CitySummaryCard: React.FC<CitySummaryCardProps> = ({
  city,
  progress,
  onExploreCity,
  onViewLessons,
  onClose,
}) => {
  if (!city) return null;

  const progressPercent = city.id === 'paris' ? 82 : city.statusState === 'explored' ? 100 : 45;
  const lessonsCompleted = city.id === 'paris' ? 18 : 6;
  const wordsMastered = city.id === 'paris' ? 412 : 120;

  return (
    <div className="space-y-3.5 select-none w-full">
      {/* Header with City & Region */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-800/60 uppercase">
              🇫🇷 {city.region}
            </span>
            {progress.currentCityId === city.id && (
              <span className="text-[10px] font-black text-slate-950 bg-emerald-400 px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                📍 Posição Atual
              </span>
            )}
          </div>
          <h2 className="text-2xl font-black text-white mt-1.5 leading-none flex items-baseline gap-2">
            {city.name}
            <span className="text-xs font-normal text-slate-400 italic">
              "{city.frenchName}"
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1 line-clamp-1">{city.shortDescription}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/80 transition-colors -mt-1 -mr-1 shrink-0"
            title="Minimizar card"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 bg-slate-950/70 p-3 rounded-2xl border border-slate-800">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Progresso na Região
          </span>
          <span className="text-emerald-400 font-black">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Quick Badges Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold shrink-0">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-white font-extrabold text-sm">{lessonsCompleted}</p>
            <p className="text-[10px] text-slate-400 leading-tight">Aulas Concluídas</p>
          </div>
        </div>

        <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center font-bold shrink-0">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-white font-extrabold text-sm">{wordsMastered}</p>
            <p className="text-[10px] text-slate-400 leading-tight">Palavras Dominadas</p>
          </div>
        </div>
      </div>

      {/* Action Buttons - Both Green as requested */}
      <div className="space-y-2 pt-1">
        <button
          onClick={onExploreCity}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-950/50"
        >
          <Compass className="w-4 h-4" />
          <span>Explorar {city.name}</span>
          <ArrowRight className="w-4 h-4 ml-auto" />
        </button>

        <button
          onClick={onViewLessons}
          className="w-full bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors border border-emerald-500/40 shadow-md"
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ver aulas desta região</span>
        </button>
      </div>
    </div>
  );
};
