import React, { useState } from 'react';
import { StorageService } from '../services/storageService';
import { Layers, Volume2, Search, MapPin, Sparkles, Award } from 'lucide-react';
import { renderHighlightedCardText } from '../utils/cardHighlighter';

interface VocabularyViewProps {
  onNavigateToFlashcards?: () => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  onNavigateToFlashcards
}) => {
  const [vocabBank] = useState(StorageService.getVocabularyBank());
  const [search, setSearch] = useState<string>('');

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  const filtered = vocabBank.filter((v) =>
    v.wordFr.toLowerCase().includes(search.toLowerCase()) ||
    v.wordPt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 select-none">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Banco Mestre de Vocabulário (Deduplicação por Lemma)
          </span>
          <h2 className="text-2xl font-black text-white mt-0.5">Banco Mestre • {vocabBank.length} / 15.400 Lemmas</h2>
          <p className="text-xs text-slate-400">
            Palavras catalogadas em sua jornada de 11 cidades e integradas ao algoritmo Leitner SRS.
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          {onNavigateToFlashcards && (
            <button
              onClick={onNavigateToFlashcards}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-1.5 shrink-0"
            >
              <Award className="w-4 h-4" />
              <span>Praticar no Deck Leitner SRS →</span>
            </button>
          )}
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar palavra ou lemma..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white outline-none"
            />
          </div>
        </div>
      </div>

      {/* 15.400 Lemmas Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1 w-full">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">Progresso do Banco Mestre Global (Trilha das 11 Cidades)</span>
            <span className="font-extrabold text-emerald-400">{vocabBank.length} / 15.400 lemmas ({((vocabBank.length / 15400) * 100).toFixed(2)}%)</span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(2, Math.min(100, (vocabBank.length / 15400) * 100))}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 flex items-center justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <div className="text-sm font-bold text-white">{renderHighlightedCardText(item.wordFr, 'fr')}</div>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60">
                  Lemma: {item.lemma || item.wordFr}
                </span>
                <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                  Nível SRS {item.srsLevel}
                </span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5">{renderHighlightedCardText(item.wordPt, 'pt')}</div>
              {item.cityId && (
                <p className="text-[10px] text-slate-500 mt-1 capitalize">
                  📍 Aprendido em {item.cityId}
                </p>
              )}
            </div>

            <button
              onClick={() => speakFrench(item.wordFr)}
              className="p-2.5 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-400 rounded-xl transition-colors border border-emerald-800/50"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
