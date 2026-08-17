import React, { useState } from 'react';
import { City, MapLocation, UserMapProgress } from '../types/map';
import { 
  BookOpen, 
  Sparkles, 
  Compass, 
  Landmark, 
  Church, 
  Building2, 
  Utensils, 
  Castle, 
  Wine, 
  MapPin, 
  ChevronRight, 
  Bot, 
  Volume2, 
  Flame, 
  CheckCircle2, 
  Lock,
  ArrowUpRight,
  Lightbulb,
  ExternalLink
} from 'lucide-react';

interface CityExplorationSectionProps {
  selectedCity: City;
  onSelectLocation: (location: MapLocation) => void;
  onNavigateToCity: (cityId: string) => void;
  onOpenMentorChat?: () => void;
  progress: UserMapProgress;
  onViewLessons?: () => void;
}

export const CityExplorationSection: React.FC<CityExplorationSectionProps> = ({
  selectedCity,
  onSelectLocation,
  onNavigateToCity,
  onOpenMentorChat,
  progress,
  onViewLessons,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'História', 'Cultura', 'Gastronomia', 'Arquitetura', 'Lazer', 'Estudos'];

  const filteredLocations = selectedCity.locations.filter((loc) => {
    if (activeCategory === 'Todos') return true;
    if (activeCategory === 'História') return loc.category === 'History';
    if (activeCategory === 'Cultura') return loc.category === 'Art' || loc.category === 'Literature';
    if (activeCategory === 'Gastronomia') return loc.category === 'Gastronomy';
    if (activeCategory === 'Arquitetura') return loc.category === 'Architecture';
    if (activeCategory === 'Lazer') return loc.category === 'Leisure';
    if (activeCategory === 'Estudos') return loc.category === 'Literature' || loc.category === 'Transit';
    return true;
  });

  // Próximas cidades na Trilha do Irlan (11 Cidades)
  const nearbyCities = [
    { id: 'amiens', name: 'Amiens', subtitle: 'Catedral & Gótica (#2 da Trilha)', duration: '1h 15 de Paris', image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=400&q=80' },
    { id: 'lille', name: 'Lille', subtitle: 'Comércio & Tradição (#3 da Trilha)', duration: '1h de TGV', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=400&q=80' },
    { id: 'mont-saint-michel', name: 'Mont Saint-Michel', subtitle: 'História & Patrimônio (#4 da Trilha)', duration: '2h 30 de Paris', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="bg-slate-900 border-t border-slate-800 p-6 space-y-8 select-none">
      {/* Top Banner & Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Explorar {selectedCity.name}
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60 uppercase">
                {selectedCity.subtitle || selectedCity.region}
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            {selectedCity.shortDescription}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/50 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Banner Trilha Storytelling Paris #1 */}
      {selectedCity.id === 'paris' && (
        <div className="bg-gradient-to-r from-emerald-500/20 via-slate-900 to-slate-900 border-2 border-emerald-500/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-white">
                Trilha do Irlan • Cidade #1: Paris • Nível A1 (Iniciante - 25 Aulas)
              </p>
              <p className="text-[11px] text-slate-300">
                O alicerce da viagem: saudações, rotina, compras, metrô e vocabulário essencial de A1 por Paris até o embarque para Amiens.
              </p>
            </div>
          </div>
          <button
            onClick={onViewLessons}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all whitespace-nowrap"
          >
            Abrir Lições de Paris
          </button>
        </div>
      )}

      {/* Banner Trilha Storytelling Amiens #2 */}
      {selectedCity.id === 'amiens' && (
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-white">
                Trilha do Irlan • Cidade #2: Amiens • Nível A1/A2 (Iniciante em Transição)
              </p>
              <p className="text-[11px] text-slate-300">
                Acompanhe o 2º capítulo em Amiens: a maior catedral gótica da França, os macarons e expansão do vocabulário de A1 para A2!
              </p>
            </div>
          </div>
          <button
            onClick={onViewLessons}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all whitespace-nowrap"
          >
            Abrir Lições de Amiens
          </button>
        </div>
      )}

      {/* Main Grid: Location Cards Carousel */}
      <div className="w-full mt-4">
        {/* Location Cards Carousel */}
        <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-thin scrollbar-thumb-slate-800 snap-x snap-mandatory">
          {filteredLocations.map((loc) => {
            const isCompleted = progress.visitedLocationIds.includes(loc.id);

            return (
              <div
                key={loc.id}
                onClick={() => onSelectLocation(loc)}
                className="w-72 shrink-0 snap-start bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-emerald-500/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Header Thumbnail */}
                  <div className="h-36 relative overflow-hidden bg-slate-900">
                    <img
                      src={
                        loc.category === 'Art'
                          ? 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=500&q=80'
                          : loc.category === 'Gastronomy'
                          ? 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80'
                          : loc.category === 'Architecture' || loc.category === 'History'
                          ? 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80'
                          : 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80'
                      }
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Category Tag Badge */}
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      {loc.category === 'History'
                        ? 'História'
                        : loc.category === 'Art'
                        ? 'Arte & Cultura'
                        : loc.category === 'Gastronomy'
                        ? 'Gastronomia'
                        : loc.category === 'Architecture'
                        ? 'Arquitetura'
                        : loc.category === 'Literature'
                        ? 'Estudos'
                        : 'Lazer'}
                    </span>

                    {/* Completion Status Badge */}
                    {isCompleted && (
                      <span className="absolute top-3 right-3 bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1 shadow-md">
                        <CheckCircle2 className="w-3 h-3" />
                        Concluído
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {loc.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-4 pt-0">
                  <button className="w-full bg-slate-900 group-hover:bg-emerald-500 text-slate-300 group-hover:text-slate-950 font-bold px-3 py-2 rounded-xl text-xs flex items-center justify-center space-x-2 border border-slate-800 group-hover:border-emerald-400 transition-all duration-200">
                    <span>Explorar Local</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Row: 3 Column Widgets Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
        {/* Sugestões para você */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Sugestões para Você
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between hover:border-slate-700 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  🗺️
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Trilha: Francês para Viagem</p>
                  <p className="text-[10px] text-slate-400">12 paradas • 45% concluído</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </div>

            <div 
              onClick={onOpenMentorChat}
              className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between hover:border-emerald-500/50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center font-bold text-xs">
                  <Bot className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Conversar com Mentor Nativo</p>
                  <p className="text-[10px] text-slate-400">Pratique conversação em tempo real</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between hover:border-slate-700 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center font-bold text-xs">
                  📖
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Gramática do Dia</p>
                  <p className="text-[10px] text-slate-400">Les articles définis et indéfinis</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-between hover:border-slate-700 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-violet-950 text-violet-400 flex items-center justify-center font-bold text-xs">
                  🎤
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Shadowing (Pronúncia)</p>
                  <p className="text-[10px] text-slate-400">Pratique entonação com áudios curtos</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </div>
          </div>
        </div>

        {/* Cidades Próximas */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            Cidades Próximas de {selectedCity.name}
          </h3>

          <div className="space-y-3">
            {nearbyCities.map((c) => (
              <div
                key={c.id}
                onClick={() => onNavigateToCity(c.id)}
                className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between hover:border-amber-500/50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{c.subtitle} • {c.duration}</p>
                  </div>
                </div>
                <button className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60 hover:bg-emerald-500 hover:text-slate-950 transition-colors">
                  Explorar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Curiosidade do Dia & Dica de Estudo */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Curiosidade & Dica de Estudo
          </h3>

          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800/40">
                Você sabia?
              </span>
              <span className="text-[11px] font-semibold text-slate-300">Torre Eiffel</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A Torre Eiffel foi construída para a Exposição Universal de 1889 e quase foi demolida em 1909, sendo salva por se tornar uma antena de rádio!
            </p>
          </div>

          <div className="bg-emerald-950/40 border border-emerald-800/40 p-3.5 rounded-xl space-y-1">
            <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Dica de Estudo Hoje
            </p>
            <p className="text-[11px] text-emerald-200/80 leading-relaxed">
              Hoje é um ótimo dia para revisar vocabulário de turismo e transporte em Paris antes de seguir para a próxima parada da sua trilha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
