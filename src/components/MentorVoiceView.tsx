import React, { useState } from 'react';
import { UserMapProgress } from '../types/map';
import { Mic, Volume2, MessageSquare, Send, Sparkles, MapPin } from 'lucide-react';
import { getLocalMentorReply } from '../services/offlineContent';

interface MentorVoiceViewProps {
  progress: UserMapProgress;
}

export const MentorVoiceView: React.FC<MentorVoiceViewProps> = ({ progress }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'mentor'; textFr: string; textPt?: string }>>([
    {
      sender: 'mentor',
      textFr: `Bonjour! Je suis Irlan, votre mentor. Vous êtes actuellement à ${progress.currentCityId}. De quoi aimeriez-vous parler?`,
      textPt: `Olá! Sou o Irlan, seu mentor. Você está atualmente em ${progress.currentCityId}. Sobre o que você gostaria de conversar?`
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.9;
      u.onstart = () => setIsSpeaking(true);
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');

    setMessages((prev) => [...prev, { sender: 'user', textFr: userText }]);
    setLoading(true);

    try {
      const data = getLocalMentorReply(userText, progress.currentCityId);
      const newMentorMsg = {
        sender: 'mentor' as const,
        textFr: data.responseFr,
        textPt: data.responsePt
      };
      setMessages((prev) => [...prev, newMentorMsg]);
      speakFrench(newMentorMsg.textFr);
    } catch (e) {
      console.error('Mentor error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 flex flex-col space-y-4 text-slate-200 select-none overflow-hidden">
      {/* Mentor Header */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-lg">
              I
            </div>
            {isSpeaking && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-white">Mentor Irlan (Voz)</h3>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-semibold border border-emerald-800/60">
                Ativo
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>Contextualizado na sua posição atual ({progress.currentCityId})</span>
            </p>
          </div>
        </div>

        {/* Audio Pulse Visualizer */}
        {isSpeaking && (
          <div className="flex items-center space-x-1 px-3 py-1 bg-emerald-950/60 rounded-full border border-emerald-800/40">
            <span className="w-1 h-4 bg-emerald-400 animate-bounce" />
            <span className="w-1 h-6 bg-emerald-400 animate-bounce delay-100" />
            <span className="w-1 h-3 bg-emerald-400 animate-bounce delay-200" />
            <span className="text-xs text-emerald-300 font-bold ml-1">Falando...</span>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 bg-slate-900/60 rounded-3xl border border-slate-800 p-6 overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-lg p-4 rounded-2xl text-xs space-y-1.5 shadow-md ${
                m.sender === 'user'
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'bg-slate-900 border border-slate-800 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-bold text-sm">{m.textFr}</p>
                {m.sender === 'mentor' && (
                  <button
                    onClick={() => speakFrench(m.textFr)}
                    className="p-1.5 text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {m.textPt && (
                <p className="text-slate-400 text-[11px] border-t border-slate-800/60 pt-1">
                  {m.textPt}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 flex items-center space-x-2 shrink-0">
        <input
          type="text"
          placeholder="Digite ou fale em francês..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-emerald-500"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-1.5 disabled:opacity-50 shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{loading ? 'Pensando...' : 'Enviar'}</span>
        </button>
      </div>
    </div>
  );
};
