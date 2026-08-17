import React from 'react';
import { UserMapProgress } from '../types/map';
import { Compass, Sparkles, MapPin, CheckCircle } from 'lucide-react';

interface JourneyBannerProps {
  progress: UserMapProgress;
  onCreateJourney: () => void;
}

export const JourneyBanner: React.FC<JourneyBannerProps> = ({ progress, onCreateJourney }) => {
  const journey = progress.activeJourney;

  if (!journey) return null;

  return (
    <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-2.5 flex items-center justify-between z-10 shrink-0 text-xs">
      {/* Active Journey Information */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold">
          <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
          <span>SUA TRILHA</span>
        </div>

        <div className="h-4 w-px bg-slate-800" />

        <div className="flex items-center space-x-2">
          <span className="font-bold text-white">{journey.title}</span>
          <span className="text-slate-400 text-[11px] hidden lg:inline">
            ({journey.currentStepIndex + 1} de {journey.citySequence.length} paradas exploradas)
          </span>
        </div>

        {/* Cities sequence mini pills */}
        <div className="hidden xl:flex items-center space-x-1.5 pl-2">
          {journey.citySequence.map((cId, idx) => {
            const isDone = idx < journey.currentStepIndex;
            const isCurrent = idx === journey.currentStepIndex;

            return (
              <React.Fragment key={cId}>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                    isCurrent
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : isDone
                      ? 'bg-slate-800 text-emerald-400'
                      : 'bg-slate-950 text-slate-600 border border-slate-800'
                  }`}
                >
                  {cId}
                </span>
                {idx < journey.citySequence.length - 1 && (
                  <span className="text-slate-700 text-[10px]">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Action to create a custom journey locally */}
      <button
        onClick={onCreateJourney}
        className="flex items-center space-x-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded-lg border border-slate-700 text-[11px] font-semibold transition-colors"
      >
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Criar Nova Trilha</span>
      </button>
    </div>
  );
};
