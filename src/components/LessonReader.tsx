import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Plus,
  Check,
  Eye,
  EyeOff,
  X,
  Sparkles,
  Languages,
  Award,
  Layers,
  ArrowLeft,
  Lightbulb,
  GraduationCap,
  Volume2,
  FileText,
  Mic,
  HelpCircle,
  CheckCircle2,
  Play,
  ArrowRight
} from 'lucide-react';
import parisLessonData from '../data/paris_lesson_1.json';
import { DictionaryEntry, getTermFromEntry } from '../utils/textParser';
import { parseClickableSentence } from '../utils/clickableParser';
import { StorageService } from '../services/storageService';

export interface LessonReaderProps {
  onBack?: () => void;
  onNavigateToFlashcards?: () => void;
  lessonData?: typeof parisLessonData;
}

type LessonStep = 'text' | 'grammar' | 'shadowing' | 'quiz';

/**
 * Split a French paragraph into individual sentences while retaining punctuation.
 */
function splitParagraphIntoSentences(fr: string): string[] {
  if (!fr) return [];
  const regex = /[^.!?]+[.!?]+/g;
  const matches = fr.match(regex);
  if (!matches || matches.length === 0) {
    return [fr.trim()];
  }
  return matches.map((s) => s.trim()).filter(Boolean);
}

export const LessonReader: React.FC<LessonReaderProps> = ({
  onBack,
  onNavigateToFlashcards,
  lessonData = parisLessonData
}) => {
  // State for paragraph retractable translations (key = paragraph ID)
  const [showTranslations, setShowTranslations] = useState<Record<number, boolean>>({});
  
  // State for modal selected expression entry
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [selectedContext, setSelectedContext] = useState<{fr: string, pt: string} | null>(null);

  // Track flashcards added in this session to give visual Check feedback
  const [addedFlashcards, setAddedFlashcards] = useState<Record<string, boolean>>({});

  // 4 Etapas Fixas State: text -> grammar -> shadowing -> quiz
  const [activeStep, setActiveStep] = useState<LessonStep>('text');
  const [selectedGrammarOption, setSelectedGrammarOption] = useState<number | null>(null);
  const [grammarSubmitted, setGrammarSubmitted] = useState<boolean>(false);
  const [selectedGrammarOptions, setSelectedGrammarOptions] = useState<Record<number, number>>({});
  const [grammarSubmittedMap, setGrammarSubmittedMap] = useState<Record<number, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [lessonCompleted, setLessonCompleted] = useState<boolean>(false);

  // Audio helper
  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  // Safe fallback getters for grammarTip, shadowingPhrases, and quizQuestions
  const grammarTip = (lessonData as any).grammarTip || {
    ruleTitle: "Estrutura Frasal e Concordância em Francês",
    explanationPt: "Em francês, a ordem padrão da frase segue Sujeito + Verbo + Complemento. Preste atenção aos artigos (le, la, les) e à concordância em gênero (masculino/féminino) e número (singular/plural).",
    exampleFr: lessonData.paragraphs[0]?.fr || "Paris est une grande ville.",
    examplePt: lessonData.paragraphs[0]?.pt || "Paris é uma grande cidade.",
    practiceQuestion: "Qual é a ordem padrão básica da frase em francês?",
    options: [
      "Sujeito + Verbo + Complemento",
      "Verbo + Complemento + Sujeito",
      "Complemento + Sujeito + Verbo"
    ],
    correctIndex: 0
  };

  const shadowingPhrases: Array<{ fr: string; pt: string; phonetic: string }> =
    (lessonData as any).shadowingPhrases ||
    lessonData.paragraphs.slice(0, 4).map((p: { fr: string; pt: string }) => ({
      fr: p.fr,
      pt: p.pt,
      phonetic: "Pratique a pronúncia natural e o ritmo da frase em voz alta"
    }));

  const rawQuizQuestions = (lessonData as any).quizQuestions || [];
  const quizQuestions: Array<{ question: string; options: string[]; correctIndex: number; explanation: string }> =
    rawQuizQuestions.length > 0
      ? rawQuizQuestions.map((q: any) => ({
          question: q.question || q.questionPt || q.questionFr || '',
          options: q.options || [],
          correctIndex: q.correctIndex !== undefined ? q.correctIndex : (q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : 0),
          explanation: q.explanation || q.explanationPt || ''
        }))
      : [
          {
            question: `Sobre o que trata a aula "${lessonData.titlePt}"?`,
            options: [
              lessonData.summaryPt || "Exploração cultural e vocabulário prático na França",
              "Uma receita culinária italiana",
              "A história militar da Segunda Guerra"
            ],
            correctIndex: 0,
            explanation: "A aula foca na imersão cultural e vocabulário essencial da França."
          },
          {
            question: "Qual palavra chave do vocabulário foi ensinada nesta lição?",
            options: [
              lessonData.vocabularyDictionary[0]?.term || "ville",
              "ordinateur",
              "télévision"
            ],
            correctIndex: 0,
            explanation: `O termo "${lessonData.vocabularyDictionary[0]?.term || 'ville'}" é um dos destaques do vocabulário desta aula.`
          }
        ];

  // Complete lesson & save lemmas to Banco Mestre
  const handleCompleteLessonAndSaveLemmas = () => {
    lessonData.vocabularyDictionary.forEach((entry) => {
      const term = getTermFromEntry(entry);
      StorageService.addWordToVocab(term, entry.definitionPt, lessonData.cityId, (entry as any).lemma || term);
    });
    // Registra a conclusão oficial (desbloqueia a próxima lição / cidade na trilha)
    StorageService.completeLesson(lessonData.id, lessonData.cityId);
    setLessonCompleted(true);
  };

  // Global toggle for all paragraph translations
  const allParagraphIds = lessonData.paragraphs.map((p) => p.id);
  const isAllTranslated = allParagraphIds.every((id) => showTranslations[id]);

  const toggleAllTranslations = () => {
    const nextState = !isAllTranslated;
    const newMap: Record<number, boolean> = {};
    allParagraphIds.forEach((id) => {
      newMap[id] = nextState;
    });
    setShowTranslations(newMap);
  };

  const toggleParagraphTranslation = (id: number) => {
    setShowTranslations((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle adding a flashcard item to local storage
  const handleAddFlashcard = (
    key: string,
    frText: string,
    ptText: string,
    e?: React.MouseEvent
  ) => {
    if (e) {
      e.stopPropagation();
    }
    StorageService.addWordToVocab(frText, ptText, lessonData.cityId || 'paris');
    setAddedFlashcards((prev) => ({
      ...prev,
      [key]: true
    }));
  };

  // Helper for Level Badge styling in the progressive examples modal
  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case 'A1':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'A2-B1':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'B2':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'C1-C2':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="flex-1 bg-slate-950 p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 select-none">
      {/* Top Bar / Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-3">
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white font-semibold text-xs flex items-center space-x-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
          )}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/60 uppercase">
                {lessonData.domain} • Trilha (11 Cidades)
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                {lessonData.level}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
              {lessonData.titleFr}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {lessonData.titlePt}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            onClick={toggleAllTranslations}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center space-x-2 ${
              isAllTranslated
                ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-600/30'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Languages className="w-4 h-4 text-emerald-400" />
            <span>
              {isAllTranslated ? 'Ocultar Todas as Traduções' : 'Mostrar Todas as Traduções'}
            </span>
          </button>
        </div>
      </div>

      {/* Lesson Subtitle & Factual Summary */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-3 relative overflow-hidden shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Subtítulo do Conteúdo</span>
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {lessonData.subtitleFr}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 italic">
              {lessonData.subtitlePt}
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-slate-950/60 border border-slate-800 px-3 py-2 rounded-2xl shrink-0">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-slate-300">
              {lessonData.vocabularyDictionary.length} Expressões Chave
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/80">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-bold">Resumo da Aula: </strong>
            {lessonData.summaryPt}
          </p>
        </div>
      </div>

      {/* 4 ETAPAS FIXAS DA AULA (TEXTO → GRAMÁTICA → SHADOWING → QUIZ) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2 flex items-center justify-between overflow-x-auto gap-2">
        {[
          { id: 'text', label: '1. Texto & Leitura', desc: 'Narrativa Interativa', icon: BookOpen },
          { id: 'grammar', label: '2. Gramática', desc: 'Estruturas da Aula', icon: Sparkles },
          { id: 'shadowing', label: '3. Shadowing', desc: 'Áudio & Entonação', icon: Mic },
          { id: 'quiz', label: '4. Quiz & Vocabulário', desc: 'Fixação & Banco Mestre', icon: GraduationCap },
        ].map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id as LessonStep)}
              className={`flex-1 min-w-[160px] flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-500'
                  : 'bg-slate-950/80 text-slate-400 border border-slate-800/80 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-emerald-500/30 text-white' : 'bg-slate-900 text-emerald-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold">{step.label}</div>
                <div className={`text-[10px] ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>{step.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ETAPA 1: TEXTO & LEITURA INTERATIVA */}
      {activeStep === 'text' && (
      <div className="space-y-8 animate-in fade-in duration-200">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Texto Principal (100% Interativo – Clique em Qualquer Palavra)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Todas as palavras do texto são clicáveis. Clique para ver tradução contextual, nível CEFR (A1-C2) e adicionar ao SRS.
            </p>
          </div>
          <span className="text-xs font-bold bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300 shrink-0">
            {lessonData.paragraphs.length} parágrafos de estudo
          </span>
        </div>

        <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-3 sm:p-3.5 flex items-start sm:items-center justify-between gap-3 text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white font-bold">Leitura Interativa:</strong> Palavras em amarelo são <strong className="text-amber-300">expressões chave em destaque</strong>. Todas as outras palavras possuem linha pontilhada e também abrem o modal completo de estudo A1-C2 ao serem clicadas.
            </span>
          </div>
        </div>

        {lessonData.paragraphs.map((paragraph, index) => {
          const isTranslated = !!showTranslations[paragraph.id];
          const sentences = splitParagraphIntoSentences(paragraph.fr);
          const sentencesPt = splitParagraphIntoSentences(paragraph.pt);

          return (
            <div
              key={paragraph.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 hover:border-slate-700/80 transition-all shadow-lg"
            >
              {/* Paragraph Header with Retractable Translation Button */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-xl border border-amber-800/50">
                    Parágrafo {index + 1}
                  </span>
                </div>

                <button
                  onClick={() => toggleParagraphTranslation(paragraph.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-bold border transition-all flex items-center space-x-1.5 ${
                    isTranslated
                      ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-600/30'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                  title="Mostrar/Ocultar Tradução pt-BR do parágrafo"
                >
                  {isTranslated ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Ocultar Tradução</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tradução pt-BR</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sentences with Parser Highlights & "+ Flashcard" Button Next to Each Sentence */}
              <div className="space-y-4">
                {sentences.map((sentenceFr, sIdx) => {
                  const sentenceKey = `para_${paragraph.id}_s_${sIdx}`;
                  const isAdded = addedFlashcards[sentenceKey];
                  const sentencePt = sentencesPt[sIdx] || '';
                  const tokens = parseClickableSentence(
                    sentenceFr,
                    lessonData.vocabularyDictionary
                  );

                  return (
                    <div
                      key={sentenceKey}
                      className="flex flex-col gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700/60 transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                        {/* Highlighted French Sentence */}
                        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal flex-1">
                          {tokens.map((token, tIdx) => {
                            if (!token.isMatch) {
                              return <span key={tIdx}>{token.text}</span>;
                            }

                            if (token.isDictionaryTerm) {
                              return (
                                <span
                                  key={tIdx}
                                  onClick={() => {
                                    if (token.dictionaryEntry) {
                                      setSelectedEntry(token.dictionaryEntry);
                                      setSelectedContext({ fr: sentenceFr, pt: sentencePt || paragraph.pt });
                                    }
                                  }}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/35 hover:border-amber-400 hover:text-amber-100 cursor-pointer font-bold transition-all shadow-sm"
                                  title="Clique para ver exemplos A1 a C2 e criar flashcards"
                                >
                                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                                  <span>{token.text}</span>
                                </span>
                              );
                            }

                            return (
                              <span
                                key={tIdx}
                                onClick={() => {
                                  if (token.dictionaryEntry) {
                                    setSelectedEntry(token.dictionaryEntry);
                                    setSelectedContext({ fr: sentenceFr, pt: sentencePt || paragraph.pt });
                                  }
                                }}
                                className="inline-block px-1 py-0.5 rounded-md text-slate-100 hover:bg-emerald-500/20 hover:text-emerald-300 border-b border-dotted border-slate-600/80 hover:border-emerald-400 cursor-pointer font-medium transition-all"
                                title={`Clique na palavra "${token.text}" para ver tradução contextual, nível de dificuldade e opções A1 a C2`}
                              >
                                {token.text}
                              </span>
                            );
                          })}
                        </p>

                        {/* "+ Flashcard" Button Next to Sentence */}
                        <button
                          onClick={(e) =>
                            handleAddFlashcard(
                              sentenceKey,
                              sentenceFr,
                              sentencePt || paragraph.pt,
                              e
                            )
                          }
                          disabled={isAdded}
                          className={`shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all border ${
                            isAdded
                              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40 cursor-default'
                              : 'bg-slate-900 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-300 border-slate-800 hover:border-emerald-500/40 shadow-sm'
                          }`}
                          title="Adicionar esta frase aos seus Flashcards Jaguará"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Adicionado</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-emerald-400" />
                              <span>+ Flashcard</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Line-by-Line Portuguese Translation Mirror directly below French block */}
                      {isTranslated && sentencePt && (
                        <div className="pt-2.5 border-t border-slate-800/80 flex items-start space-x-2 animate-in fade-in duration-200">
                          <Languages className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-emerald-300/90 font-medium leading-relaxed">
                            {sentencePt}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Vocabulary Summary Cards at Bottom */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Expressões e Vocabulário Estudado</span>
            </h3>
            <span className="text-xs text-slate-400">
              Clique na expressão para abrir os 4 níveis (A1-C2)
            </span>
          </div>
          {onNavigateToFlashcards && (
            <button
              onClick={onNavigateToFlashcards}
              className="px-3.5 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl font-extrabold text-xs flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Revisar no Deck Leitner SRS →</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {lessonData.vocabularyDictionary.map((entry) => {
            const term = getTermFromEntry(entry);
            const termKey = `vocab_card_${term}`;
            const isAdded = addedFlashcards[termKey];

            return (
              <div
                key={term}
                onClick={() => {
                  setSelectedEntry(entry);
                  setSelectedContext(null);
                }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 hover:border-amber-500/50 hover:bg-slate-900/90 cursor-pointer transition-all flex flex-col justify-between group shadow-md"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-extrabold text-amber-300 group-hover:text-amber-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{term}</span>
                    </span>
                    <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded-full border border-slate-800">
                      4 Níveis
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {entry.definitionPt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
                    <span>Ver A1 a C2</span>
                    <span>→</span>
                  </span>
                  <button
                    onClick={(e) =>
                      handleAddFlashcard(
                        termKey,
                        term,
                        entry.definitionPt || '',
                        e
                      )
                    }
                    disabled={isAdded}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center space-x-1 border transition-all ${
                      isAdded
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-emerald-500/40 hover:text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Salvo</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3 text-emerald-400" />
                        <span>+ Flashcard</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      )}

      {/* ETAPA 2: GRAMÁTICA CONTEXTUAL */}
      {activeStep === 'grammar' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {(grammarTip.points || [grammarTip]).map((point: any, pIdx: number) => {
            const isSelectedOption = selectedGrammarOptions[pIdx];
            const isPointSubmitted = grammarSubmittedMap[pIdx] === true;

            return (
              <div key={pIdx} className="space-y-6">
                <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                      {(grammarTip.points && grammarTip.points.length > 1) ? `Ponto Gramatical #${pIdx + 1}` : 'Regra de Gramática da Aula'}
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-black text-white">{point.ruleTitle}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {point.explanationPt}
                  </p>

                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 text-sm space-y-1.5">
                    <p className="font-bold text-emerald-300 flex items-center gap-2">
                      <span>Exemplo do texto:</span>
                      <span className="text-white italic">"{point.exampleFr}"</span>
                    </p>
                    <p className="text-slate-400 text-xs">{point.examplePt}</p>
                  </div>
                </div>

                {/* Interactive Question */}
                <div className="p-6 bg-slate-900/80 rounded-3xl border border-slate-800 space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    {(grammarTip.points && grammarTip.points.length > 1) ? `Exercício Rápido de Fixação #${pIdx + 1}` : 'Exercício Rápido de Fixação Gramatical'}
                  </h4>
                  <p className="text-base font-bold text-white">
                    {point.practiceQuestion}
                  </p>

                  <div className="space-y-2.5">
                    {point.options.map((opt: string, oIdx: number) => {
                      const isSelected = isSelectedOption === oIdx;
                      const isCorrect = oIdx === point.correctIndex;

                      return (
                        <button
                          key={oIdx}
                          onClick={() => {
                            setSelectedGrammarOptions(prev => ({ ...prev, [pIdx]: oIdx }));
                            setGrammarSubmittedMap(prev => ({ ...prev, [pIdx]: true }));
                          }}
                          className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between ${
                            isPointSubmitted
                              ? isCorrect
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md'
                                : isSelected
                                ? 'bg-red-950/80 border-red-500 text-red-200'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                              : isSelected
                              ? 'bg-emerald-900/80 border-emerald-500 text-white'
                              : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <span>{opt}</span>
                          {isPointSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {isPointSubmitted && (
                    <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-2xl text-xs font-bold text-emerald-300">
                      <span>Muito bem! Prática do Ponto #{pIdx + 1} concluída.</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveStep('shadowing')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm transition-all flex items-center space-x-2 shadow-lg shadow-emerald-900/40"
            >
              <span>Próxima Etapa: Shadowing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ETAPA 3: SHADOWING PRONÚNCIA */}
      {activeStep === 'shadowing' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
              <Mic className="w-4 h-4" />
              <span>Etapa 3: Prática de Shadowing</span>
            </div>
            <h3 className="text-xl font-black text-white">Treino de Áudio & Entonação Nativa</h3>
            <p className="text-xs text-slate-400">
              Ouça as frases originais da aula em francês e repita em voz alta, imitando o ritmo e a pronúncia do locutor.
            </p>
          </div>

          <div className="space-y-3">
            {shadowingPhrases.map((sh, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-900/80 rounded-3xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-white">{sh.fr}</div>
                  <div className="text-xs text-emerald-400/90 font-mono">[{sh.phonetic}]</div>
                  <div className="text-xs text-slate-400">{sh.pt}</div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => speakFrench(sh.fr)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs transition-colors flex items-center space-x-1.5 shadow-md"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Ouvir Frase</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setActiveStep('quiz')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm transition-all flex items-center space-x-2 shadow-lg shadow-emerald-900/40"
            >
              <span>Próxima Etapa: Quiz & Vocabulário</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ETAPA 4: QUIZ & BANCO MESTRE DE LEMMAS */}
      {activeStep === 'quiz' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                Etapa 4: Fixação Rápida
              </span>
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-black text-white">Quiz da Aula & Catalogação de Lemmas</h3>
            <p className="text-xs text-slate-400">
              Responda às questões sobre a narrativa e registre todas as palavras desta lição em seu <strong>Banco Mestre (deduplicado por lemma)</strong>.
            </p>
          </div>

          {/* Quiz questions */}
          <div className="space-y-4">
            {quizQuestions.map((item, qIdx) => {
              const answered = quizAnswers[qIdx] !== undefined;
              const isCorrect = quizAnswers[qIdx] === item.correctIndex;

              return (
                <div
                  key={qIdx}
                  className="p-6 bg-slate-900/80 rounded-3xl border border-slate-800 space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">
                      {qIdx + 1}. {item.question}
                    </h4>
                    {answered && (
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {isCorrect ? 'Correto!' : 'Revisar'}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {item.options.map((opt, oIdx) => {
                      const selected = quizAnswers[qIdx] === oIdx;
                      const isOptionCorrect = oIdx === item.correctIndex;

                      return (
                        <button
                          key={oIdx}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [qIdx]: oIdx })}
                          className={`w-full text-left p-3.5 rounded-2xl border text-xs font-medium transition-all ${
                            answered
                              ? isOptionCorrect
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                                : selected
                                ? 'bg-red-950/80 border-red-500 text-red-200'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                              : selected
                              ? 'bg-emerald-900/80 border-emerald-500 text-white'
                              : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 text-xs text-slate-400">
                      <strong className="text-slate-300">Explicação:</strong> {item.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Button to register lemmas into Global Banco Mestre */}
          <div className="p-6 bg-gradient-to-r from-emerald-950/60 to-slate-900 rounded-3xl border border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Integrar ao Banco Mestre ({lessonData.vocabularyDictionary.length} lemmas)
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Adicione todos os termos desta lição (com deduplicação por lemma) à sua meta global das 11 cidades.
              </p>
            </div>

            <button
              onClick={handleCompleteLessonAndSaveLemmas}
              disabled={lessonCompleted}
              className={`px-6 py-3 rounded-2xl font-bold text-xs transition-all flex items-center space-x-2 shadow-lg ${
                lessonCompleted
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 cursor-default'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40'
              }`}
            >
              {lessonCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Lemmas Catalogados no Banco Mestre!</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  <span>Concluir Aula & Alimentar Banco Mestre</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Modal: 4 Exemplos Progressivos (A1 a C2) for Clicked Expression */}
      {selectedEntry && (
        <div
          onClick={() => {
            setSelectedEntry(null);
            setSelectedContext(null);
          }}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-xs font-black px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                      selectedEntry.isDictionaryTerm !== false
                        ? 'text-amber-400 bg-amber-950/60 border-amber-800/60'
                        : 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
                    }`}
                  >
                    {selectedEntry.isDictionaryTerm !== false ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Expressão em Destaque</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Palavra do Texto</span>
                      </>
                    )}
                  </span>
                  <span className="text-xs font-bold text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                    Nível: {selectedEntry.difficultyLevel || lessonData.level || 'A1'}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {lessonData.domain}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {getTermFromEntry(selectedEntry)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {selectedEntry.definitionPt}
                </p>
                {selectedEntry.definitionFr && (
                  <p className="text-xs text-slate-400 italic">
                    FR: {selectedEntry.definitionFr}
                  </p>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedEntry(null);
                  setSelectedContext(null);
                }}
                className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-colors"
                title="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Actions for Main Term */}
            <div className="flex items-center justify-between bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium">
                Adicionar o termo principal com sua definição ao banco:
              </span>
              <button
                onClick={(e) => {
                  const term = getTermFromEntry(selectedEntry);
                  handleAddFlashcard(
                    `main_term_${term}`,
                    term,
                    selectedEntry.definitionPt || '',
                    e
                  );
                }}
                disabled={
                  addedFlashcards[
                    `main_term_${getTermFromEntry(selectedEntry)}`
                  ]
                }
                className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all border ${
                  addedFlashcards[
                    `main_term_${getTermFromEntry(selectedEntry)}`
                  ]
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40 cursor-default'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-md'
                }`}
              >
                {addedFlashcards[
                  `main_term_${getTermFromEntry(selectedEntry)}`
                ] ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Termo Adicionado!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>+ Flashcard (Termo Principal)</span>
                  </>
                )}
              </button>
            </div>

            {/* Section: 4 Exemplos Progressivos (A1 a C2) ou Contexto da Frase */}
            {selectedEntry.examples && selectedEntry.examples.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>
                    {selectedEntry.examples.length} Exemplo{selectedEntry.examples.length !== 1 ? 's' : ''}{' '}
                    Progressivo{selectedEntry.examples.length !== 1 ? 's' : ''}{' '}
                    {selectedEntry.examples.length === 4 ? '(A1 a C2)' : ''}
                  </span>
                </h4>
                <span className="text-[11px] text-slate-400">
                  Progressão no Quadro Europeu (CECR)
                </span>
              </div>

              <div className="space-y-3">
                {selectedEntry.examples&&selectedEntry.examples.map((ex, idx) => {
                  const exKey = `modal_ex_${getTermFromEntry(selectedEntry)}_${ex.level}_${idx}`;
                  const isAdded = addedFlashcards[exKey];

                  return (
                    <div
                      key={ex.level}
                      className="p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-2.5 hover:border-slate-700/80 transition-all"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`text-xs font-black px-2.5 py-0.5 rounded-lg border uppercase tracking-wide ${getLevelBadgeStyle(
                            ex.level
                          )}`}
                        >
                          Nível {ex.level}
                        </span>

                        <button
                          onClick={(e) =>
                            handleAddFlashcard(exKey, ex.fr, ex.pt, e)
                          }
                          disabled={isAdded}
                          className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all border ${
                            isAdded
                              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40 cursor-default'
                              : 'bg-slate-900 hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-300 border-slate-800 hover:border-emerald-500/40 shadow-sm'
                          }`}
                          title={`Adicionar exemplo ${ex.level} aos Flashcards`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Adicionado</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-emerald-400" />
                              <span>+ Flashcard</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Example French & Portuguese */}
                      <div className="space-y-1">
                        <p className="text-sm text-white font-medium leading-relaxed">
                          "{ex.fr}"
                        </p>
                        <p className="text-xs text-slate-400 font-normal leading-relaxed">
                          PT: {ex.pt}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            ) : selectedContext ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Exemplo do Texto</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    Contexto Original
                  </span>
                </div>
                <div className="space-y-3">
                  {(() => {
                    const exKey = `modal_ex_context_${getTermFromEntry(selectedEntry)}`;
                    const isAdded = addedFlashcards[exKey];
                    return (
                      <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-2.5 hover:border-slate-700/80 transition-all">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-lg border uppercase tracking-wide text-indigo-400 bg-indigo-950/40 border-indigo-800/40">
                            Contexto
                          </span>
                          <button
                            onClick={(e) => handleAddFlashcard(exKey, selectedContext.fr, selectedContext.pt, e)}
                            disabled={isAdded}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all border ${
                              isAdded
                                ? 'bg-emerald-950/30 text-emerald-500 border-emerald-900/30 cursor-default'
                                : 'bg-slate-900 text-emerald-400 border-slate-700 hover:bg-slate-800 hover:border-emerald-500/50'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Adicionado</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>+ Flashcard</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-slate-100 font-medium leading-relaxed">
                          "{selectedContext.fr}"
                        </p>
                        <p className="text-slate-400 text-sm">PT: {selectedContext.pt}</p>
                      </div>
                    );
                  })()}
                </div>
              </div>
            ) : null}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>
                As expressões salvas aparecem na aba <strong>Flashcards</strong>{' '}
                com repetição espaçada (Leitner).
              </span>
              <div className="flex items-center space-x-2">
                {onNavigateToFlashcards && (
                  <button
                    onClick={() => {
                      setSelectedEntry(null);
                      setSelectedContext(null);
                      onNavigateToFlashcards();
                    }}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center space-x-1.5 shadow-md"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Ver Deck Leitner SRS</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedEntry(null);
                    setSelectedContext(null);
                  }}
                  className="px-4 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-white font-bold transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
