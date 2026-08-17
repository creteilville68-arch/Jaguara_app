import React, { useState, useEffect } from 'react';
import { StorageService } from '../services/storageService';
import {
  Sparkles,
  Volume2,
  RotateCcw,
  Check,
  X,
  Award,
  Layers,
  Search,
  Trash2,
  BookOpen,
  Filter,
  Play
} from 'lucide-react';
import { renderHighlightedCardText } from '../utils/cardHighlighter';

interface VocabItem {
  id: string;
  wordFr: string;
  wordPt: string;
  srsLevel: number;
  cityId?: string;
  lastReviewed: string;
}

export const FlashcardsView: React.FC = () => {
  const [vocab, setVocab] = useState<VocabItem[]>([]);
  const [activeTab, setActiveTab] = useState<'review' | 'deck'>('review');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);

  // Filters for Deck List view
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBox, setSelectedBox] = useState<number | 'all'>('all');

  const loadVocab = () => {
    const data = StorageService.getVocabularyBank();
    setVocab(data);
  };

  useEffect(() => {
    loadVocab();
  }, []);

  const currentItem = vocab[currentIndex];

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  const handleNext = (correct: boolean) => {
    if (!currentItem) return;

    // Update Leitner SRS level in storage
    const nextLevel = correct ? Math.min(5, currentItem.srsLevel + 1) : 1;
    StorageService.updateVocabSrsLevel(currentItem.id, nextLevel);
    loadVocab();

    setIsFlipped(false);
    if (currentIndex + 1 < vocab.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setSessionCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
  };

  const handleRemoveCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    StorageService.removeWordFromVocab(id);
    loadVocab();
    if (currentIndex >= vocab.length - 1 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReviewSpecificCard = (index: number) => {
    setCurrentIndex(index);
    setIsFlipped(false);
    setSessionCompleted(false);
    setActiveTab('review');
  };

  // Leitner Box level styling helper
  const getBoxBadgeStyle = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-red-500/20 text-red-300 border-red-500/40';
      case 2:
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 3:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 4:
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 5:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getBoxDescription = (level: number) => {
    switch (level) {
      case 1:
        return 'Caixa 1 • Revisão Diária';
      case 2:
        return 'Caixa 2 • A cada 2 dias';
      case 3:
        return 'Caixa 3 • Semanal';
      case 4:
        return 'Caixa 4 • Quinzenal';
      case 5:
        return 'Caixa 5 • Memória Consolidada';
      default:
        return `Caixa ${level}`;
    }
  };

  // Filter cards for Deck List
  const filteredCards = vocab.filter((item) => {
    const matchesSearch =
      item.wordFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.wordPt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBox = selectedBox === 'all' || item.srsLevel === selectedBox;
    return matchesSearch && matchesBox;
  });

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 flex flex-col space-y-6 text-slate-200 select-none overflow-y-auto">
      {/* Top Header & Tab Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Repetição Espaçada Leitner (SRS) • Destaque Bilingue Automático</span>
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            Deck de Flashcards SRS
          </h2>
          <p className="text-xs text-slate-400">
            Revisão inteligente com destaque automático da palavra/expressão-chave de estudo em amarelo/dourado na frente (FR) e no verso (PT).
          </p>
        </div>

        {/* Navigation Tabs (Review vs Deck List) */}
        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
              activeTab === 'review'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Sessão de Revisão</span>
          </button>

          <button
            onClick={() => setActiveTab('deck')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
              activeTab === 'deck'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Lista do Deck ({vocab.length})</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: INTERACTIVE SRS LEITNER REVIEW */}
      {activeTab === 'review' && (
        <div className="flex flex-col items-center justify-center flex-1 py-4">
          {!sessionCompleted && currentItem ? (
            <div className="w-full max-w-lg space-y-4">
              {/* Card Meta & Progress */}
              <div className="flex items-center justify-between text-xs font-semibold px-2">
                <span className="text-slate-400">
                  Card {currentIndex + 1} de {vocab.length}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-extrabold ${getBoxBadgeStyle(
                    currentItem.srsLevel
                  )}`}
                >
                  {getBoxDescription(currentItem.srsLevel)}
                </span>
              </div>

              {/* Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[280px] bg-slate-900 border-2 border-slate-800 hover:border-emerald-500/80 rounded-3xl p-7 flex flex-col items-center justify-center text-center shadow-2xl cursor-pointer transition-all transform duration-300 relative group"
              >
                {!isFlipped ? (
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Termo em Francês
                    </p>
                    <div className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors leading-relaxed">
                      {renderHighlightedCardText(currentItem.wordFr, 'fr')}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakFrench(currentItem.wordFr);
                      }}
                      className="px-3.5 py-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 rounded-full transition-colors mx-auto inline-flex items-center gap-2 text-xs font-bold border border-emerald-800/60"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Ouvir Pronúncia</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Tradução no Português
                    </p>
                    <div className="text-xl sm:text-2xl font-black text-slate-100 leading-relaxed">
                      {renderHighlightedCardText(currentItem.wordPt, 'pt')}
                    </div>
                    <p className="text-xs text-slate-400 italic">
                      💡 Termo minerado nas Aulas e Vocabulário Jaguará
                    </p>
                  </div>
                )}

                <p className="absolute bottom-4 text-[10px] text-slate-500 font-medium">
                  Toque no card para {isFlipped ? 'ver o francês' : 'ver a tradução pt-BR'}
                </p>
              </div>

              {/* Leitner SRS Action Buttons */}
              {isFlipped && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => handleNext(false)}
                    className="p-3.5 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-lg"
                  >
                    <X className="w-4 h-4 text-red-400" />
                    <span>Errei / Difícil (Volta Caixa 1)</span>
                  </button>
                  <button
                    onClick={() => handleNext(true)}
                    className="p-3.5 bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-700 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-lg"
                  >
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Acertei / Fácil (Avança SRS)</span>
                  </button>
                </div>
              )}

              {/* Quick Jump to Deck List */}
              <div className="text-center pt-2">
                <button
                  onClick={() => setActiveTab('deck')}
                  className="text-xs text-slate-400 hover:text-emerald-400 font-semibold underline transition-colors"
                >
                  Ver todos os {vocab.length} cards na Lista do Deck SRS →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-4 max-w-md shadow-2xl">
              <Award className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Sessão do Dia Concluída!</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você revisou todos os cards agendados. Seu vocabulário minerado em A1-C2 foi fortalecido no algoritmo Leitner.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Revisar Novamente</span>
                </button>
                <button
                  onClick={() => setActiveTab('deck')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Ver Lista do Deck</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: COMPLETE SRS DECK LIST (ALL MINED CARDS) */}
      {activeTab === 'deck' && (
        <div className="space-y-6">
          {/* Deck List Controls & Filters */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Caixas Leitner:</span>
                </span>
                <button
                  onClick={() => setSelectedBox('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
                    selectedBox === 'all'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Todos ({vocab.length})
                </button>
                {[1, 2, 3, 4, 5].map((boxNum) => {
                  const count = vocab.filter((v) => v.srsLevel === boxNum).length;
                  return (
                    <button
                      key={boxNum}
                      onClick={() => setSelectedBox(boxNum)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedBox === boxNum
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Caixa {boxNum} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar card em FR ou PT..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl pl-9 pr-4 py-2 text-xs text-white outline-none"
                />
              </div>
            </div>
          </div>

          {/* List of Mined Cards */}
          {filteredCards.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-3">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-white">
                Nenhum flashcard encontrado neste filtro
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Explore a aula interativa em <strong className="text-amber-300">&ldquo;Aulas e Textos&rdquo;</strong> e clique no botão <strong className="text-emerald-400">+ Flashcard</strong> nas expressões ou nos exemplos progressivos (A1 a C2).
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCards.map((item) => {
                const actualIndex = vocab.findIndex((v) => v.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 space-y-3 shadow-md flex flex-col justify-between transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-lg border text-[10px] font-extrabold uppercase ${getBoxBadgeStyle(
                            item.srsLevel
                          )}`}
                        >
                          {getBoxDescription(item.srsLevel)}
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => speakFrench(item.wordFr)}
                            className="p-1.5 bg-slate-950 hover:bg-slate-800 text-emerald-400 rounded-lg border border-slate-800 transition-colors"
                            title="Ouvir pronúncia"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => handleRemoveCard(item.id, e)}
                            className="p-1.5 bg-slate-950 hover:bg-red-950 text-slate-400 hover:text-red-400 rounded-lg border border-slate-800 hover:border-red-800 transition-colors"
                            title="Excluir card do deck"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-base sm:text-lg font-extrabold text-white leading-snug">
                        {renderHighlightedCardText(item.wordFr, 'fr')}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed font-medium">
                        {renderHighlightedCardText(item.wordPt, 'pt')}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500">
                        SRS Leitner
                      </span>
                      <button
                        onClick={() => handleReviewSpecificCard(actualIndex)}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:underline"
                      >
                        <span>Revisar Este Card</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
