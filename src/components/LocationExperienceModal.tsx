import React, { useState, useEffect } from 'react';
import { MapLocation, LocationExperience } from '../types/map';
import { X, Volume2, BookOpen, Mic, MessageSquare, Sparkles, Check, ArrowRight, Play, Award, RotateCcw } from 'lucide-react';
import { buildLocalLocationExperience, getLocalMentorReply } from '../services/offlineContent';

interface LocationExperienceModalProps {
  location: MapLocation | null;
  cityName: string;
  onClose: () => void;
  onCompleteActivity: (locationId: string, cityId: string, wordCount: number) => void;
}

export const LocationExperienceModal: React.FC<LocationExperienceModalProps> = ({
  location,
  cityName,
  onClose,
  onCompleteActivity,
}) => {
  if (!location) return null;

  const [activeTab, setActiveTab] = useState<'insight' | 'vocab' | 'grammar' | 'shadowing' | 'mentor'>('insight');
  const [loading, setLoading] = useState<boolean>(true);
  const [experience, setExperience] = useState<LocationExperience | null>(null);
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'mentor'; textFr: string; textPt?: string }>>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [mentorLoading, setMentorLoading] = useState<boolean>(false);
  const [recordingActive, setRecordingActive] = useState<boolean>(false);
  const [audioPlayingIndex, setAudioPlayingIndex] = useState<number | null>(null);

  // Build the location experience locally (100% offline)
  useEffect(() => {
    setLoading(true);
    const data = buildLocalLocationExperience(location, cityName);
    setExperience(data);
    setLoading(false);
    // Initial greeting from Mentor
    setChatMessages([
      {
        sender: 'mentor',
        textFr: `Bonjour! Bienvenue à ${location.frenchName || location.name}. Que souhaitez-vous découvrir aujourd'hui?`,
        textPt: `Olá! Bem-vindo a ${location.name}. O que você deseja descobrir hoje?`
      }
    ]);
  }, [location, cityName]);

  // Speech synthesis for French pronunciation
  const speakFrench = (text: string, index?: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.9;
      if (index !== undefined) {
        setAudioPlayingIndex(index);
        utterance.onend = () => setAudioPlayingIndex(null);
        utterance.onerror = () => setAudioPlayingIndex(null);
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle Mentor chat submission
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || mentorLoading) return;
    const userText = inputMessage;
    setInputMessage('');

    setChatMessages((prev) => [...prev, { sender: 'user', textFr: userText }]);
    setMentorLoading(true);

    try {
      const data = getLocalMentorReply(userText, cityName, location.name);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'mentor',
          textFr: data.responseFr,
          textPt: data.responsePt
        }
      ]);
    } catch (e) {
      console.error('Mentor error', e);
    } finally {
      setMentorLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center font-bold">
              🏛
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-emerald-400 font-semibold uppercase">
                  🇫🇷 {cityName}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">{location.category}</span>
              </div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                {location.name}
                <span className="text-xs text-slate-400 font-normal italic">
                  ({location.frenchName})
                </span>
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-950/60 px-6 py-2 border-b border-slate-800/80 flex items-center space-x-2 overflow-x-auto shrink-0 select-none">
          {[
            { id: 'insight', label: 'Conhecer o Local', icon: BookOpen },
            { id: 'vocab', label: 'Aprender Francês', icon: Volume2 },
            { id: 'grammar', label: 'Gramática Contextual', icon: Sparkles },
            { id: 'shadowing', label: 'Shadowing', icon: Mic },
            { id: 'mentor', label: 'Conversar com Mentor', icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-3">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-slate-400 font-medium">
                Conectando à inteligência cultural do Jaguará...
              </p>
            </div>
          ) : (
            <>
              {/* TAB 1: CONHECER O LOCAL */}
              {activeTab === 'insight' && (
                <div className="space-y-6">
                  {/* Historical Insight Card */}
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Contexto Histórico & Cultural</span>
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {experience?.culturalInsightPt}
                    </p>
                    <div className="p-3 bg-emerald-950/30 rounded-xl border border-emerald-800/40 text-xs text-emerald-200 italic">
                      "{experience?.culturalInsightFr}"
                    </div>
                  </div>

                  {/* Bilingual Sentence Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Frases Bilingues e Análise
                    </h4>
                    <div className="space-y-3">
                      {experience?.bilingualSentences?.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400">Português:</span>
                            <button
                              onClick={() => speakFrench(item.fr, idx)}
                              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Ouvir em Francês</span>
                            </button>
                          </div>
                          <p className="text-xs text-slate-200">{item.pt}</p>
                          <p className="text-xs font-bold text-emerald-300 italic">{item.fr}</p>
                          {item.note && (
                            <p className="text-[11px] text-amber-400/90 pt-1 border-t border-slate-800/80">
                              💡 {item.note}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: APRENDER FRANCÊS (VOCABULARY) */}
              {activeTab === 'vocab' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-200">
                      Vocabulário do Local ({experience?.vocabulary?.length || 0} palavras)
                    </h3>
                    <span className="text-xs text-emerald-400">Toque para ouvir a pronúncia</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience?.vocabulary?.map((vocab, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-emerald-300">{vocab.wordFr}</h4>
                            <p className="text-xs text-slate-400">{vocab.wordPt}</p>
                          </div>
                          <button
                            onClick={() => speakFrench(vocab.wordFr, idx)}
                            className="p-2.5 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-400 rounded-xl transition-colors border border-emerald-800/50"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 font-mono">[{vocab.phonetic}]</p>
                        <div className="pt-2 border-t border-slate-800/60 text-xs space-y-1">
                          <p className="text-slate-300 italic">"{vocab.exampleFr}"</p>
                          <p className="text-slate-500 text-[11px]">{vocab.examplePt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: GRAMÁTICA CONTEXTUAL */}
              {activeTab === 'grammar' && experience?.grammarTip && (
                <div className="space-y-6">
                  <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
                      Regra de Gramática
                    </span>
                    <h3 className="text-base font-bold text-white">{experience.grammarTip.ruleTitle}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {experience.grammarTip.explanationPt}
                    </p>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
                      <p className="font-semibold text-emerald-300">Exemplo: {experience.grammarTip.exampleFr}</p>
                      <p className="text-slate-400">{experience.grammarTip.examplePt}</p>
                    </div>
                  </div>

                  {/* Interactive Question */}
                  <div className="p-5 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-4">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Exercício de Fixação
                    </h4>
                    <p className="text-sm font-semibold text-slate-100">
                      {experience.grammarTip.practiceQuestion}
                    </p>

                    <div className="space-y-2">
                      {experience.grammarTip.options.map((opt, oIdx) => {
                        const isSelected = selectedQuizIndex === oIdx;
                        const isCorrect = oIdx === experience.grammarTip.correctIndex;

                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setSelectedQuizIndex(oIdx);
                              setQuizSubmitted(true);
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                              quizSubmitted
                                ? isCorrect
                                  ? 'bg-emerald-950 border-emerald-500 text-emerald-200'
                                  : isSelected
                                  ? 'bg-red-950 border-red-500 text-red-200'
                                  : 'bg-slate-900 border-slate-800 text-slate-400'
                                : isSelected
                                ? 'bg-emerald-900 border-emerald-500 text-white'
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <p className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>Excelente progresso! Você acumulou pontos de gramática.</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: SHADOWING PRACTICE */}
              {activeTab === 'shadowing' && (
                <div className="space-y-6">
                  <div className="p-4 bg-emerald-950/30 rounded-2xl border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                    <p className="font-bold">O que é Shadowing?</p>
                    <p className="text-slate-300">
                      Ouça a frase em francês nativo e repita em voz alta imitando a entonação e ritmo.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {experience?.shadowingPhrases?.map((sh, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between"
                      >
                        <div className="space-y-1 pr-4">
                          <p className="text-sm font-bold text-white">{sh.fr}</p>
                          <p className="text-xs text-slate-400">{sh.pt}</p>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0">
                          <button
                            onClick={() => speakFrench(sh.fr, idx)}
                            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setRecordingActive(true);
                              setTimeout(() => setRecordingActive(false), 2500);
                            }}
                            className={`p-3 rounded-xl transition-colors ${
                              recordingActive
                                ? 'bg-red-600 text-white animate-pulse'
                                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                            }`}
                          >
                            <Mic className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: CONVERSAR COM MENTOR IRLAN */}
              {activeTab === 'mentor' && (
                <div className="h-96 flex flex-col bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="p-3 bg-slate-900 border-b border-slate-800 text-xs flex items-center justify-between">
                    <span className="font-bold text-slate-200 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Mentor Irlan em {location.name}</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded-full">
                      ● Responde em Francês & Português
                    </span>
                  </div>

                  <div className="p-4 overflow-y-auto flex-1 space-y-3">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-md p-3.5 rounded-2xl text-xs space-y-1 ${
                            msg.sender === 'user'
                              ? 'bg-emerald-600 text-white font-medium'
                              : 'bg-slate-800 text-slate-200 border border-slate-700'
                          }`}
                        >
                          <p className="font-bold">{msg.textFr}</p>
                          {msg.textPt && (
                            <p className="text-[11px] opacity-80 border-t border-slate-700/60 pt-1">
                              {msg.textPt}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Converse em francês ou tire dúvidas..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={mentorLoading}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors disabled:opacity-50"
                    >
                      {mentorLoading ? '...' : 'Enviar'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Action */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-400">
            Conclua a exploração para registrar seu progresso no banco de dados do Jaguará.
          </p>
          <button
            onClick={() => {
              onCompleteActivity(location.id, location.cityId, 5);
              onClose();
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2"
          >
            <Award className="w-4 h-4" />
            <span>Concluir Exploração do Local</span>
          </button>
        </div>
      </div>
    </div>
  );
};
