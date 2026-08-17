import React from 'react';
import { Lightbulb, ArrowRight, Sparkles, Compass } from 'lucide-react';

interface WidgetsBarProps {
  currentCityName: string;
}

export const WidgetsBar: React.FC<WidgetsBarProps> = ({ currentCityName }) => {
  return (
    <div className="bg-slate-900 border-t border-slate-800 px-6 py-3 z-20 shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs select-none">
      {/* Widget 1: Sugestões para você */}
      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-bold text-teal-400 mb-1.5">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            Sugestões para Você
          </span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <button className="w-full text-left flex items-center justify-between p-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800">
            <span className="text-slate-300 font-medium">Trilha: Paris & Cultura</span>
            <ArrowRight className="w-3 h-3 text-teal-400" />
          </button>
          <button className="w-full text-left flex items-center justify-between p-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800">
            <span className="text-slate-300 font-medium">Conversar em Francês</span>
            <ArrowRight className="w-3 h-3 text-teal-400" />
          </button>
          <div className="flex items-center gap-2">
            <button className="flex-1 text-left flex items-center justify-between p-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800">
              <span className="text-slate-300 font-medium">Gramática</span>
            </button>
            <button className="flex-1 text-left flex items-center justify-between p-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800">
              <span className="text-slate-300 font-medium">Shadowing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Widget 2: Cidades próximas */}
      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400 mb-1.5">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Cidades Próximas
          </span>
          <span className="text-[10px] text-slate-500">De Paris</span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between p-1.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-slate-300 font-bold">Versailles</span>
            <button className="text-emerald-400 font-bold hover:underline">Explorar</button>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-slate-300 font-bold">Reims</span>
            <button className="text-emerald-400 font-bold hover:underline">Explorar</button>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-slate-300 font-bold">Giverny</span>
            <button className="text-emerald-400 font-bold hover:underline">Explorar</button>
          </div>
        </div>
      </div>

      {/* Widget 3: Curiosidade do Dia & Dica */}
      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between hidden lg:flex">
        <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mb-1">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            Curiosidade & Dica
          </span>
        </div>
        
        <div className="flex gap-3">
          <img 
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=150&q=80" 
            alt="Torre Eiffel" 
            className="w-16 h-16 rounded-lg object-cover border border-slate-800"
          />
          <div className="flex-1 space-y-1">
            <p className="font-bold text-slate-200 text-xs">Torre Eiffel (1889)</p>
            <p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">
              Originalmente pintada de vermelho-marrom. Era para ser uma estrutura temporária!
            </p>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-slate-800/60">
          <p className="text-[10px] font-medium text-slate-300">
            <span className="text-amber-400 font-bold">Dica de Estudo:</span> Pratique preposições com "à Paris" e "en France".
          </p>
        </div>
      </div>
    </div>
  );
};
