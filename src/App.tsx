import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar, ActiveTab } from './components/Sidebar';
import { FranceMapCanvas } from './components/FranceMapCanvas';
import { CityDetailPanel } from './components/CityDetailPanel';
import { CityExplorationSection } from './components/CityExplorationSection';
import { LocationExperienceModal } from './components/LocationExperienceModal';
import { FiltersModal } from './components/FiltersModal';
import { DashboardView } from './components/DashboardView';
import { LessonsView } from './components/LessonsView';
import { VocabularyView } from './components/VocabularyView';
import { MentorVoiceView } from './components/MentorVoiceView';
import { FlashcardsView } from './components/FlashcardsView';
import { EncyclopediaView } from './components/EncyclopediaView';

import { StorageService } from './services/storageService';
import { City, MapLocation, UserMapProgress, Lesson, CountryId, DomainType } from './types/map';
import { FRANCE_CITIES } from './data/franceMapData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('map');
  const [progress, setProgress] = useState<UserMapProgress>(StorageService.getProgress());
  const [lessons, setLessons] = useState<Lesson[]>(StorageService.getLessons());
  const [selectedCity, setSelectedCity] = useState<City | null>(
    FRANCE_CITIES.find((c) => c.id === progress.currentCityId) || FRANCE_CITIES[0]
  );
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter Modal State
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Handle Country Selection
  const handleCountryChange = (country: CountryId) => {
    const updated = StorageService.setCountryFilter(country);
    setProgress(updated);
  };

  // Handle Domain Selection
  const handleDomainChange = (domain: DomainType) => {
    const updated = StorageService.setDomainFilter(domain);
    setProgress(updated);
  };

  // Select City on Map
  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
    const updated = StorageService.updateLocationVisited(city.id, city.locations[0]?.id || '');
    setProgress(updated);
  };

  // Navigate directly to city from lessons/dashboard
  const handleNavigateToCity = (cityId: string) => {
    const target = FRANCE_CITIES.find((c) => c.id === cityId);
    if (target) {
      handleSelectCity(target);
      setActiveTab('map');
    }
  };

  // Handle Completion of Location Experience
  const handleCompleteActivity = (locationId: string, cityId: string, wordCount: number) => {
    const updated = StorageService.updateLocationVisited(cityId, locationId);
    setProgress(updated);

    // Save learned words to vocabulary bank
    if (selectedLocation) {
      StorageService.addWordToVocab(selectedLocation.frenchName, selectedLocation.name, cityId);
    }
  };

  // Add new lesson
  const handleAddLesson = (newLesson: Lesson) => {
    const updatedLessons = StorageService.addLesson(newLesson);
    setLessons(updatedLessons);
    setProgress(StorageService.getProgress());
  };

  const hasActiveFilters =
    progress.selectedDomain !== 'Todos' ||
    selectedCategory !== 'Todos' ||
    selectedStatus !== 'all';

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col overflow-hidden font-sans text-slate-100 select-none">
      {/* Top Navigation Header */}
      <Header
        progress={progress}
        onCountryChange={handleCountryChange}
        onDomainChange={handleDomainChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenFilters={() => setIsFiltersOpen(true)}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Collapsible Navigation Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} progress={progress} />

        {/* Main Workspace View */}
        <main className="flex-1 overflow-y-auto bg-slate-950 scrollbar-thin scrollbar-thumb-slate-800">
          {activeTab === 'map' && (
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
              {/* Interactive Map */}
              <FranceMapCanvas
                progress={progress}
                selectedCity={selectedCity}
                onSelectCity={handleSelectCity}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                onExploreCity={(city) => handleSelectCity(city)}
                onViewLessons={() => setActiveTab('lessons')}
              />

              {/* Exploration Panel */}
              {selectedCity && (
                <CityExplorationSection
                  selectedCity={selectedCity}
                  onSelectLocation={(loc) => setSelectedLocation(loc)}
                  onNavigateToCity={handleNavigateToCity}
                  onOpenMentorChat={() => setActiveTab('mentor')}
                  progress={progress}
                  onViewLessons={() => setActiveTab('lessons')}
                />
              )}
            </div>
          )}

          {activeTab === 'dashboard' && (
            <DashboardView
              progress={progress}
              lessons={lessons}
              onNavigateToMap={() => setActiveTab('map')}
            />
          )}

          {activeTab === 'mentor' && <MentorVoiceView progress={progress} />}

          {activeTab === 'lessons' && (
            <LessonsView
              lessons={lessons}
              onAddLesson={handleAddLesson}
              onNavigateToCity={handleNavigateToCity}
              onNavigateToFlashcards={() => setActiveTab('flashcards')}
              initialCityId={selectedCity?.id || 'paris'}
            />
          )}

          {activeTab === 'vocabulary' && (
            <VocabularyView onNavigateToFlashcards={() => setActiveTab('flashcards')} />
          )}

          {activeTab === 'flashcards' && <FlashcardsView />}

          {activeTab === 'encyclopedia' && (
            <EncyclopediaView
              progress={progress}
              onNavigateToFlashcards={() => setActiveTab('flashcards')}
            />
          )}

          {activeTab === 'settings' && (
            <div className="flex-1 p-8 text-slate-200 space-y-4 overflow-y-auto">
              <h2 className="text-xl font-bold">Configurações do JAGUARÁ</h2>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg space-y-2 text-xs">
                <p className="font-semibold text-emerald-400">Banco de Dados Local e Persistência</p>
                <p className="text-slate-400">
                  Os dados do seu progresso no mapa, histórico de aulas e palavras dominadas estão armazenados com segurança.
                </p>
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="px-3 py-1.5 bg-red-950 hover:bg-red-900 text-red-200 rounded-lg border border-red-800 text-xs font-bold transition-colors mt-2"
                >
                  Redefinir Dados Locais
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Filters Modal */}
      <FiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        progress={progress}
        onCountryChange={handleCountryChange}
        onDomainChange={handleDomainChange}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      {/* Discovery / Experience Modal */}
      {selectedLocation && (
        <LocationExperienceModal
          location={selectedLocation}
          cityName={selectedCity?.name || 'Paris'}
          onClose={() => setSelectedLocation(null)}
          onCompleteActivity={handleCompleteActivity}
        />
      )}
    </div>
  );
}
