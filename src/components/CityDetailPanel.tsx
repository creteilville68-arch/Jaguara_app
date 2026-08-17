import React, { useState } from 'react';
import { City, MapLocation, UserMapProgress } from '../types/map';
import { FRANCE_ROUTES, FRANCE_CITIES } from '../data/franceMapData';
import { 
  X, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Compass, 
  Landmark, 
  BookOpen, 
  Utensils, 
  Building2, 
  ArrowRight,
  Bot,
  GraduationCap
} from 'lucide-react';
import { getCityGrammarProgression } from '../data/grammarProgressionRules';

interface CityDetailPanelProps {
  city: City | null;
  progress: UserMapProgress;
  onClose: () => void;
  onSelectLocation: (location: MapLocation) => void;
  onNavigateToCity: (city: City) => void;
  onOpenMentorChat?: () => void;
}

export const CityDetailPanel: React.FC<CityDetailPanelProps> = ({
  city,
  progress,
  onClose,
  onSelectLocation,
  onNavigateToCity,
  onOpenMentorChat,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  if (!city) return null;

  const grammarRule = getCityGrammarProgression(city.id);

  const isUserHere = progress.currentCityId === city.id;
  const isVisited = progress.visitedCityIds.includes(city.id);

  // Filter locations by active category
  const categories = ['Todos', 'História', 'Arte & Cultura', 'Gastronomia', 'Arquitetura', 'Literatura', 'Francês no Contexto'];

  const filteredLocations = city.locations.filter((loc) => {
    if (activeCategory === 'Todos') return true;
    if (activeCategory === 'História') return loc.category === 'History';
    if (activeCategory === 'Arte & Cultura') return loc.category === 'Art';
    if (activeCategory === 'Gastronomia') return loc.category === 'Gastronomy';
    if (activeCategory === 'Arquitetura') return loc.category === 'Architecture';
    if (activeCategory === 'Literatura') return loc.category === 'Literature';
    if (activeCategory === 'Francês no Contexto') return true;
    return true;
  });

  // Find nearby connected cities
  const nearbyRoutes = FRANCE_ROUTES.filter(
    (r) => r.fromCityId === city.id || r.toCityId === city.id
  );

  const nearbyCities = nearbyRoutes
    .map((r) => {
      const otherId = r.fromCityId === city.id ? r.toCityId : r.fromCityId;
      const otherCity = FRANCE_CITIES.find((c) => c.id === otherId);
      return otherCity ? { city: otherCity, distanceKm: r.distanceKm } : null;
    })
    .filter(Boolean) as Array<{ city: City; distanceKm: number }>;

  return (
    <div className="fixed top-20 right-4 bottom-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 select-none">
      {/* Header Banner */}
      <div className="relative h-44 bg-slate-950 overflow-hidden shrink-0">
        <img
          src={city.imageUrl || 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'}
          alt={city.name}
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors backdrop-blur-md border border-slate-700/60"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & Status */}
        <div className="absolute bottom-4 left-4 right-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-800/80 uppercase tracking-wider">
              🇫🇷 {city.region}
            </span>
            {isUserHere && (
              <span className="text-[10px] font-black text-slate-950 bg-emerald-400 px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 shadow-md">
                📍 Posição Atual
              </span>
            )}
          </div>
          <h2 className="text-2xl font-black text-white leading-tight flex items-center justify-between">
            <span>{city.name}</span>
            <span className="text-base font-normal text-slate-400 font-serif italic">
              "{city.frenchName}"
            </span>
          </h2>
        </div>
      </div>

      {/* Panel Scrollable Body */}
      <div className="p-5 space-y-5 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-800">
        {/* Short Overview */}
        <div>
          <p className="text-xs text-slate-300 leading-relaxed">{city.fullDescription}</p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {city.categoryTags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold bg-slate-950 text-slate-400 px-2 py-0.5 rounded-md border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Category Chips Filter */}
        <div className="space-y-2 border-t border-slate-800/80 pt-4">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Filtrar Possibilidades de Descoberta
          </label>
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Contextual AI Recommendation Banner */}
        <div className="bg-emerald-950/40 border border-emerald-800/50 p-3.5 rounded-2xl space-y-1.5">
          <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Sugestão do Jaguará
          </p>
          <p className="text-[11px] text-emerald-200/90 leading-relaxed">
            "Você já estudou viagens e alimentação. Que tal praticar o vocabulário das padarias e museus de {city.name}?"
          </p>
        </div>

        {/* Grammar & Lexical Evolution Card (Regra de Excelência) */}
        {grammarRule && (
          <div className="bg-slate-950/90 border border-indigo-500/30 p-4 rounded-2xl space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/60 flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Evolução do Irlan & Gramática</h4>
                  <p className="text-[10px] text-indigo-300/80">Nível CEFR: {grammarRule.cefrLevel}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-800/60">
                  Meta: {grammarRule.vocabularyTarget.toLocaleString('pt-BR')} palavras
                </span>
                <p className="text-[9px] text-slate-500 mt-0.5">de 15.400 na França</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Tempos Verbais Ativos:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {grammarRule.primaryTenses.map((tense, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-950/60 text-indigo-200 border border-indigo-800/50 px-2 py-0.5 rounded-md text-[10px] font-medium"
                    >
                      {tense}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Evolução do Irlan na Cidade:
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed italic bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  "{grammarRule.irlanEvolutionPt}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Location Discoveries List */}
        <div className="space-y-3 border-t border-slate-800/80 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Landmark className="w-4 h-4 text-emerald-400" />
              <span>Descobertas ({filteredLocations.length})</span>
            </h3>
            <span className="text-[10px] text-slate-500">Toque para aprender</span>
          </div>

          <div className="space-y-2.5">
            {filteredLocations.map((loc) => {
              const isLocVisited = progress.visitedLocationIds.includes(loc.id);

              return (
                <div
                  key={loc.id}
                  onClick={() => onSelectLocation(loc)}
                  className={`group p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isLocVisited
                      ? 'bg-slate-950/90 border-emerald-800/60 hover:border-emerald-500'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-xs font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                          {loc.name}
                        </h4>
                        {isLocVisited && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-[10px] text-emerald-300/90 font-medium italic">
                        "{loc.frenchName}"
                      </p>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1">
                        {loc.shortDesc}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500 font-medium">
                      {loc.category === 'History'
                        ? 'História'
                        : loc.category === 'Art'
                        ? 'Arte & Cultura'
                        : loc.category === 'Gastronomy'
                        ? 'Gastronomia'
                        : loc.category === 'Architecture'
                        ? 'Arquitetura'
                        : 'Literatura'}
                    </span>
                    <button className="text-emerald-400 font-bold flex items-center space-x-1 group-hover:underline">
                      <span>Explorar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat with Mentor CTA */}
        {onOpenMentorChat && (
          <div
            onClick={onOpenMentorChat}
            className="p-3.5 bg-slate-950 border border-slate-800 hover:border-emerald-500/60 rounded-2xl flex items-center justify-between cursor-pointer transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-teal-950 text-teal-400 border border-teal-800/50 flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Conversar em Francês Nativo
                </p>
                <p className="text-[10px] text-slate-400">Pratique conversação sobre {city.name}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
          </div>
        )}

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <div className="space-y-2 border-t border-slate-800/80 pt-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Cidades Próximas</span>
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {nearbyCities.map(({ city: nCity, distanceKm }) => (
                <button
                  key={nCity.id}
                  onClick={() => onNavigateToCity(nCity)}
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-colors text-left text-xs text-slate-300"
                >
                  <div>
                    <p className="font-bold text-slate-200">{nCity.name}</p>
                    <p className="text-[10px] text-slate-500">{nCity.region}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full">
                      ~{distanceKm} km
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
