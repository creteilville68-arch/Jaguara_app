import React from 'react';
import { CountryId, DomainType, UserMapProgress } from '../types/map';
import { X, Filter, Compass, Globe, Check } from 'lucide-react';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserMapProgress;
  onCountryChange: (country: CountryId) => void;
  onDomainChange: (domain: DomainType) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

export const FiltersModal: React.FC<FiltersModalProps> = ({
  isOpen,
  onClose,
  progress,
  onCountryChange,
  onDomainChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
}) => {
  if (!isOpen) return null;

  const domains: DomainType[] = ['Todos', 'Cotidiano', 'Acadêmico', 'Profissional', 'Cultura'];
  const categories = ['Todos', 'História', 'Arte', 'Gastronomia', 'Arquitetura', 'Literatura', 'Lazer'];
  const statuses = [
    { id: 'all', label: 'Todos os Status' },
    { id: 'explored', label: 'Explorados (Concluído)' },
    { id: 'in_progress', label: 'Em Andamento' },
    { id: 'available', label: 'Disponíveis' },
    { id: 'locked', label: 'Bloqueados' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white font-bold text-base">
            <Filter className="w-4 h-4 text-emerald-400" />
            <span>Filtros do Mapa da Memória</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Country Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              País & Variante do Idioma
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onCountryChange('FR')}
                className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                  progress.selectedCountry === 'FR'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500/40'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="text-2xl">🇫🇷</span>
                <div>
                  <p className="text-xs font-bold leading-tight">França</p>
                  <p className="text-[10px] text-slate-400">Francês Europeu</p>
                </div>
              </button>

              <button
                onClick={() => onCountryChange('CA')}
                className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                  progress.selectedCountry === 'CA'
                    ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-500/40'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="text-2xl">🇨🇦</span>
                <div>
                  <p className="text-xs font-bold leading-tight">Canadá</p>
                  <p className="text-[10px] text-slate-400">Francês Québécois</p>
                </div>
              </button>
            </div>
          </div>

          {/* Domain Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Domínio de Estudo
            </label>
            <div className="flex flex-wrap gap-2">
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => onDomainChange(dom)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    progress.selectedDomain === dom
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {dom === 'Todos' ? 'Todos os domínios' : dom}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Categorias de Locais
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Status de Exploração
            </label>
            <div className="space-y-1.5">
              {statuses.map((st) => (
                <button
                  key={st.id}
                  onClick={() => onStatusChange(st.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                    selectedStatus === st.id
                      ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span>{st.label}</span>
                  {selectedStatus === st.id && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-3.5 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              onDomainChange('Todos');
              onCategoryChange('Todos');
              onStatusChange('all');
            }}
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Limpar Filtros
          </button>
          <button
            onClick={onClose}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs transition-colors shadow-md"
          >
            Aplicar ao Mapa
          </button>
        </div>
      </div>
    </div>
  );
};
