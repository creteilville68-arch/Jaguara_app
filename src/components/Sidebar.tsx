import React, { useState } from 'react';
import { Compass, LayoutDashboard, Mic, BookOpen, Layers, Sparkles, Settings, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { UserMapProgress } from '../types/map';

export type ActiveTab = 'map' | 'dashboard' | 'mentor' | 'lessons' | 'vocabulary' | 'flashcards' | 'settings';

interface SidebarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  progress?: UserMapProgress;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, progress }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const menuItems = [
    { id: 'map' as ActiveTab, label: 'Mapa da Memória', icon: Compass, badge: 'França' },
    { id: 'dashboard' as ActiveTab, label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'mentor' as ActiveTab, label: 'Mentor Irlan (Voz)', icon: Mic, badge: 'Voz' },
    { id: 'lessons' as ActiveTab, label: 'Aulas & Textos', icon: BookOpen },
    { id: 'vocabulary' as ActiveTab, label: 'Vocabulário', icon: Layers },
    { id: 'flashcards' as ActiveTab, label: 'Flashcards SRS', icon: Sparkles },
  ];

  return (
    <aside
      className={`bg-slate-900 border-r border-slate-800 flex flex-col justify-between select-none z-20 shrink-0 transition-all duration-300 relative ${
        isCollapsed ? 'w-16' : 'w-56'
      }`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-5 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-lg z-30 transition-colors"
        title={isCollapsed ? 'Expandir Menu' : 'Recolher Menu'}
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Main Items */}
      <div className="p-2 space-y-1">
        {!isCollapsed && (
          <p className="px-3 py-2 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
            Navegação
          </p>
        )}

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center ${
                isCollapsed ? 'justify-center px-0 py-2.5' : 'justify-between px-3 py-2.5'
              } rounded-xl font-semibold text-xs transition-all duration-150 ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {!isCollapsed && <span>{item.label}</span>}
              </div>

              {!isCollapsed && item.badge && (
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? 'bg-emerald-950 text-emerald-200'
                      : 'bg-slate-800 text-emerald-400 border border-slate-700'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer / Current GPS Location */}
      <div className="p-2 border-t border-slate-800 space-y-2">
        <button
          onClick={() => onTabChange('settings')}
          title={isCollapsed ? 'Configurações' : undefined}
          className={`w-full flex items-center ${
            isCollapsed ? 'justify-center px-0 py-2' : 'space-x-2.5 px-3 py-2'
          } rounded-xl text-xs font-semibold transition-colors ${
            activeTab === 'settings'
              ? 'bg-slate-800 text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <Settings className="w-4 h-4 text-slate-400 shrink-0" />
          {!isCollapsed && <span>Configurações</span>}
        </button>

        {!isCollapsed && (
          <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-xs space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                Posição Atual
              </span>
              <span className="text-emerald-400 font-extrabold uppercase text-[10px]">
                {progress?.currentCityId === 'paris' ? 'Paris' : progress?.currentCityId || 'Paris'}
              </span>
            </div>
            <p className="text-[10px] text-slate-500">
              Atlas Cultural de Francês
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};
