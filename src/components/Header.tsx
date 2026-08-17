import React from 'react';
import { CountryId, DomainType, UserMapProgress } from '../types/map';
import { Search, Flame, Award, BookOpen, ChevronDown, Filter, Globe } from 'lucide-react';

interface HeaderProps {
  progress: UserMapProgress;
  onCountryChange: (country: CountryId) => void;
  onDomainChange: (domain: DomainType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenFilters: () => void;
  hasActiveFilters?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  onCountryChange,
  onDomainChange,
  searchQuery,
  onSearchChange,
  onOpenFilters,
  hasActiveFilters = false,
}) => {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 md:px-6 flex items-center justify-between z-30 shrink-0 select-none shadow-lg">
      {/* Brand & Language Selector */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-emerald-950/40">
            J
          </div>
          <div>
            <h1 className="text-white font-black text-base tracking-wide leading-none flex items-center gap-2">
              JAGUARÁ
              <span className="text-[10px] font-bold tracking-wider text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded-full border border-emerald-800/60 uppercase">
                Mapa da Memória
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block mt-0.5">Atlas Interativo de Aprendizagem</p>
          </div>
        </div>

        {/* Country Selector Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-2 bg-slate-950/80 hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-800 transition-colors text-xs font-semibold">
            <span className="text-sm">
              {progress.selectedCountry === 'FR' ? '🇫🇷 França' : '🇨🇦 Canadá'}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <div className="absolute top-full left-0 mt-1 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 p-1.5">
            <button
              onClick={() => onCountryChange('FR')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                progress.selectedCountry === 'FR' ? 'bg-emerald-950 text-emerald-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-base">🇫🇷</span>
              <div>
                <p className="leading-tight font-bold">França</p>
                <p className="text-[10px] text-slate-400">Francês Europeu</p>
              </div>
            </button>

            <button
              onClick={() => onCountryChange('CA')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                progress.selectedCountry === 'CA' ? 'bg-emerald-950 text-emerald-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-base">🇨🇦</span>
              <div>
                <p className="leading-tight font-bold">Canadá (Québec)</p>
                <p className="text-[10px] text-slate-400">Francês Québécois</p>
              </div>
            </button>
          </div>
        </div>

        {/* Filters Trigger Button */}
        <button
          onClick={onOpenFilters}
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            hasActiveFilters
              ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-sm'
              : 'bg-slate-950/80 hover:bg-slate-800 text-slate-300 border-slate-800'
          }`}
        >
          <Filter className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden md:inline">Filtros</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </button>
      </div>

      {/* Search Bar & User Stats */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        <div className="relative w-36 sm:w-48 xl:w-56">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar destino, local..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-500 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors"
          />
        </div>

        {/* Stats Summary */}
        <div className="hidden lg:flex items-center space-x-2 pl-3 border-l border-slate-800">
          <div className="flex items-center space-x-1.5 bg-amber-950/40 text-amber-400 px-2.5 py-1 rounded-xl border border-amber-800/40 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{progress.streakDays}d</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-emerald-950/40 text-emerald-300 px-2.5 py-1 rounded-xl border border-emerald-800/40 text-xs font-bold" title="Lemmas catalogados no Banco Mestre (Meta Global: 15.400)">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{progress.masteredWords.length}/15.400 lemmas</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-800/90 px-2.5 py-1 rounded-xl border border-slate-700 text-xs font-bold text-slate-200">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>B1</span>
          </div>
        </div>
      </div>
    </header>
  );
};
