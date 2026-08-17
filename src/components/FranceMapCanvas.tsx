import React, { useState } from 'react';
import { City, UserMapProgress } from '../types/map';
import { FRANCE_CITIES, FRANCE_ROUTES } from '../data/franceMapData';
import { CitySummaryCard } from './CitySummaryCard';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Lock, 
  Sparkles, 
  ArrowRight,
  Compass,
  MapPin,
  X
} from 'lucide-react';

const CITIES = [
  { id: 'paris', name: 'Paris', desc: 'Capital & Cultura', status: 'current', number: 1, lat: 48.8566, lng: 2.3522, x: 50, y: 28 },
  { id: 'amiens', name: 'Amiens', desc: 'Catedral & Gótica', status: 'unlocked', number: 2, lat: 49.8941, lng: 2.2958, x: 71, y: 11 },
  { id: 'lille', name: 'Lille', desc: 'Comércio & Tradição', status: 'unlocked', number: 3, lat: 50.6292, lng: 3.0573, x: 50, y: 6 },
  { id: 'mont-saint-michel', name: 'Mont Saint-Michel', desc: 'História & Patrimônio', status: 'unlocked', number: 4, lat: 48.6361, lng: -1.5115, x: 13, y: 19 },
  { id: 'tours', name: 'Tours', desc: 'Castelos do Loire', status: 'unlocked', number: 5, lat: 47.3941, lng: 0.6848, x: 42, y: 38 },
  { id: 'bordeaux', name: 'Bordeaux', desc: 'Vinhos & Cultura', status: 'unlocked', number: 6, lat: 44.8378, lng: -0.5792, x: 20, y: 55 },
  { id: 'toulouse', name: 'Toulouse', desc: 'Espacial & Inovação', status: 'unlocked', number: 7, lat: 43.6047, lng: 1.4442, x: 33, y: 65 },
  { id: 'marseille', name: 'Marseille', desc: 'Porto & Mediterrâneo', status: 'unlocked', number: 8, lat: 43.2965, lng: 5.3698, x: 62, y: 80 },
  { id: 'lyon', name: 'Lyon', desc: 'Gastronomia & História', status: 'unlocked', number: 9, lat: 45.7640, lng: 4.8357, x: 72, y: 50 },
  { id: 'strasbourg', name: 'Strasbourg', desc: 'Europa & Arquitetura', status: 'unlocked', number: 10, lat: 48.5734, lng: 7.7521, x: 87, y: 30 },
  { id: 'nice', name: 'Nice', desc: 'Arte & Riviera', status: 'unlocked', number: 11, lat: 43.7102, lng: 7.2620, x: 87, y: 76 }
];

interface FranceMapCanvasProps {
  progress: UserMapProgress;
  selectedCity: City | null;
  onSelectCity: (city: City) => void;
  searchQuery: string;
  selectedCategory?: string;
  selectedStatus?: string;
  onExploreCity?: (city: City) => void;
  onViewLessons?: () => void;
}

export const FranceMapCanvas: React.FC<FranceMapCanvasProps> = ({
  progress,
  selectedCity,
  onSelectCity,
  searchQuery,
  selectedCategory = 'Todos',
  selectedStatus = 'all',
  onExploreCity,
  onViewLessons,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showTrailCard, setShowTrailCard] = useState<boolean>(true);
  const [showCityCard, setShowCityCard] = useState<boolean>(true);

  // Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('.prevent-pan')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.75), 2.2));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Filter cities based on search, category, and status
  const filteredCities = CITIES.filter((city) => {
    // Search Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = city.name.toLowerCase().includes(q) || city.desc.toLowerCase().includes(q);
      const fullCity = FRANCE_CITIES.find((c) => c.id === city.id);
      const matchLoc = fullCity?.locations.some((l) => l.name.toLowerCase().includes(q) || l.shortDesc.toLowerCase().includes(q));
      if (!matchName && !matchLoc) return false;
    }

    // Category Filter
    if (selectedCategory && selectedCategory !== 'Todos') {
      const fullCity = FRANCE_CITIES.find((c) => c.id === city.id);
      const matchCat = fullCity?.categoryTags.some((tag) => tag.toLowerCase() === selectedCategory.toLowerCase());
      const matchLocCat = fullCity?.locations.some((l) => l.category.toLowerCase() === selectedCategory.toLowerCase());
      if (!matchCat && !matchLocCat) return false;
    }

    // Status Filter
    if (selectedStatus && selectedStatus !== 'all') {
      if (selectedStatus === 'explored' && city.status !== 'unlocked' && city.status !== 'current') return false;
      if (selectedStatus === 'in_progress' && city.status !== 'current') return false;
      if (selectedStatus === 'available' && city.status !== 'unlocked') return false;
      if (selectedStatus === 'locked' && city.status !== 'locked') return false;
    }

    return true;
  });

  const activeCity = selectedCity || FRANCE_CITIES.find((c) => c.id === 'paris') || FRANCE_CITIES[0];
  const userCityId = progress.currentCityId || 'paris';

  const totalCities = CITIES.length; // 11
  const exploredCount = CITIES.filter(
    (c) => c.status === 'unlocked' || c.status === 'current' || progress.visitedCityIds.includes(c.id)
  ).length;
  const explorationPercent = Math.round((exploredCount / totalCities) * 100);

  return (
    <div className="relative w-full aspect-[2/3] max-w-[750px] mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl my-4 select-none">
      {/* Top Floating AI Recommended Journey Pill */}
      {showTrailCard ? (
        <div className="absolute top-3 left-3 max-w-[240px] bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl z-20 space-y-2 animate-in slide-in-from-left duration-300">
          <div className="flex items-center justify-between text-xs font-bold text-white">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              Trilha Sugerida
            </span>
            <button
              onClick={() => setShowTrailCard(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-lg hover:bg-slate-800/80 transition-colors"
              title="Minimizar trilha"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Cultura & História Francesa - {exploredCount} de 11 paradas
          </p>
          <div className="flex items-center justify-between pt-1 text-[10px]">
            <span className="text-slate-400 font-medium">Progresso: {explorationPercent}%</span>
            <button
              onClick={() => {
                const p = FRANCE_CITIES.find((c) => c.id === 'paris');
                if (p) onSelectCity(p);
              }}
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
            >
              <span>Explorar Paris</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowTrailCard(true)}
          className="absolute top-3 left-3 z-20 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-800 text-emerald-400 p-2 rounded-xl shadow-xl transition-all flex items-center gap-1.5 text-xs font-bold"
          title="Abrir Trilha Sugerida"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Trilha</span>
        </button>
      )}

      {/* Top Right Floating Active City Summary Card */}
      {showCityCard ? (
        <div className="absolute top-3 right-3 max-w-[260px] bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl z-20 hidden sm:block animate-in slide-in-from-right duration-300">
          <CitySummaryCard
            city={activeCity}
            progress={progress}
            onExploreCity={() => (onExploreCity ? onExploreCity(activeCity) : onSelectCity(activeCity))}
            onViewLessons={() => onViewLessons && onViewLessons()}
            onClose={() => setShowCityCard(false)}
          />
        </div>
      ) : (
        <button
          onClick={() => setShowCityCard(true)}
          className="absolute top-3 right-3 z-20 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-800 text-emerald-400 p-2 rounded-xl shadow-xl transition-all flex items-center gap-1.5 text-xs font-bold hidden sm:flex"
          title="Abrir Detalhes da Cidade"
        >
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>{activeCity?.name || 'Cidade'}</span>
        </button>
      )}

      {/* Main Map Interactive Canvas */}
      <div
        className="absolute inset-0 transition-transform duration-150 ease-out cursor-grab active:cursor-grabbing flex items-center justify-center"
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: 'center center',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Background High Res Image Base */}
        <div className="relative w-full h-full pointer-events-none">
          <img
            src="https://i.postimg.cc/rwTgWZ9y/Mapa-detalhado-france.png"
            className="w-full h-full object-cover pointer-events-none"
            alt="Mapa Ilustrado da França"
          />

          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl overflow-visible">
            <defs>
              <filter id="activePathGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Route Lines between Cities */}
            {FRANCE_ROUTES.map((route, i) => {
              const fromCity = CITIES.find((c) => c.id === route.fromCityId);
              const toCity = CITIES.find((c) => c.id === route.toCityId);
              if (!fromCity || !toCity) return null;

              const isCurrentPath = activeCity.id === fromCity.id || activeCity.id === toCity.id;

              return (
                <line
                  key={`route-${i}`}
                  x1={`${fromCity.x}%`}
                  y1={`${fromCity.y}%`}
                  x2={`${toCity.x}%`}
                  y2={`${toCity.y}%`}
                  stroke={isCurrentPath ? '#10b981' : '#334155'}
                  strokeWidth={isCurrentPath ? '3' : '1.5'}
                  strokeDasharray="6,6"
                  opacity={isCurrentPath ? 1 : 0.4}
                  filter={isCurrentPath ? 'url(#activePathGlow)' : undefined}
                />
              );
            })}
          </svg>

          {/* Overlay Layer for City Markers */}
          <div className="absolute inset-0 mx-auto my-auto pointer-events-none">
            {filteredCities.map((city) => {
              const isSelected = activeCity.id === city.id;
              const isUserHere = userCityId === city.id;
              const isExplored = city.status === 'unlocked' || progress.visitedCityIds.includes(city.id);
              const isInProgress = city.status === 'current';
              const isLocked = city.status === 'locked';

              return (
                <div
                  key={city.id}
                  className={`absolute pointer-events-auto transition-all duration-300 group cursor-pointer ${
                    isSelected ? 'z-40' : 'z-20 hover:z-30'
                  }`}
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: 'center center',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const fullCity = FRANCE_CITIES.find((c) => c.id === city.id);
                    if (fullCity) {
                      onSelectCity(fullCity);
                    } else {
                      onSelectCity({
                        id: city.id,
                        countryId: 'FR',
                        name: city.name,
                        frenchName: city.name,
                        region: 'França',
                        coords: { x: city.x, y: city.y },
                        lat: (city as any).lat || 46.2276,
                        lng: (city as any).lng || 2.2137,
                        shortDescription: city.desc,
                        fullDescription: city.desc,
                        categoryTags: ['Cultura'],
                        locations: [],
                        nodeNumber: city.number,
                        subtitle: city.desc,
                        statusState: isLocked ? 'locked' : isInProgress ? 'in_progress' : 'explored',
                        isLocked: isLocked,
                      });
                    }
                  }}
                >
                  {/* Selected Pulse Ring centered on the marker node */}
                  {isSelected && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-500/30 rounded-full animate-ping pointer-events-none" />
                  )}

                  {/* Marker Node Button (centered on X,Y) */}
                  <div className="relative flex flex-col items-center justify-center">
                    <button
                      className={`relative w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-2xl transition-all duration-300 border-2 ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/40 scale-110 z-30'
                          : isExplored
                          ? 'bg-emerald-600 text-white border-emerald-300 z-20'
                          : isInProgress
                          ? 'bg-amber-500 text-slate-950 border-amber-300 z-20'
                          : isLocked
                          ? 'bg-slate-800 text-slate-500 border-slate-700 z-10'
                          : 'bg-blue-600 text-white border-blue-300 z-10'
                      }`}
                    >
                      {isLocked ? (
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <span>{city.number || '📍'}</span>
                      )}
                    </button>

                    {/* Blue pulsating dot for active/selected/current user city */}
                    {(isSelected || isUserHere || isInProgress) && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3 z-40">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)] border border-slate-900"></span>
                      </span>
                    )}

                    {/* City Label Badge underneath marker */}
                    <div
                      className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-xl text-[11px] font-bold whitespace-nowrap shadow-lg border transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-emerald-400 border-emerald-500/80 ring-2 ring-emerald-500/20'
                          : isExplored
                          ? 'bg-[#111A24]/90 text-slate-200 border-slate-700 backdrop-blur-sm'
                          : isLocked
                          ? 'bg-[#111A24]/80 text-slate-500 border-slate-800 backdrop-blur-sm'
                          : 'bg-[#111A24]/90 text-slate-300 border-slate-800 backdrop-blur-sm'
                      }`}
                    >
                      <div className="leading-none">{city.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Pill */}
      <div className="absolute bottom-4 left-6 z-20 bg-[#111A24]/90 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs text-slate-300">
        <span className="flex items-center gap-1.5 font-bold text-white">
          <Compass className="w-4 h-4 text-emerald-400" />
          França
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400 font-medium">
          {exploredCount} de 11 cidades descobertas
        </span>
      </div>

      {/* Right Edge Floating Map Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 flex flex-col space-y-2">
        <div className="bg-[#111A24]/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-2xl shadow-2xl flex flex-col space-y-1">
          <div className="p-2 flex justify-center border-b border-slate-800/80 pb-2 mb-1">
            <Compass className="w-4 h-4 text-slate-400" />
          </div>
          <button
            onClick={() => handleZoom(0.2)}
            title="Aumentar Zoom"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom(-0.2)}
            title="Diminuir Zoom"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-full h-px bg-slate-800/80 my-1" />
          <button
            onClick={handleReset}
            title="Foco / Centralizar Mapa"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
