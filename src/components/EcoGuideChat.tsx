import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Bot, User, Sparkles, RefreshCw, HelpCircle, 
  MapPin, Award, CheckCircle, ArrowRight, CornerDownLeft, Trash2, Globe
} from 'lucide-react';
import { ChatMessage, CityData, QuizResult } from '../types';
import { generateSmartEcoReply, getSuggestedQuestionsForTopic } from '../services/ecoKnowledgeBase';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface EcoGuideChatProps {
  currentCity: CityData;
  quizResult: QuizResult | null;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
}

export const EcoGuideChat: React.FC<EcoGuideChatProps> = ({
  currentCity,
  quizResult,
  externalPrompt,
  onClearExternalPrompt,
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const getInitialWelcomeMessage = (): ChatMessage => ({
    id: `welcome-${language}`,
    role: 'assistant',
    content: t.chat.welcome,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestions: isEn ? [
      'I am a student, how can I help the environment?',
      'How to correctly identify and sort plastic resin codes (PP/PET)?',
      'Where to dispose of depleted batteries and e-waste?',
      'What is the climate projection for my city by 2046?'
    ] : [
      'Я школьник, как я могу помочь окружающей среде?',
      'Как правильно подготовить и сдать пластик (PP/PET)?',
      'Куда сдать старые батарейки и технику?',
      'Какой климатический прогноз для моего города на 2046 год?'
    ]
  });

  const [messages, setMessages] = useState<ChatMessage[]>([getInitialWelcomeMessage()]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update initial message on language switch if only welcome message exists
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [getInitialWelcomeMessage()];
      }
      return prev;
    });
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle external prompt when user clicks "Спросить ИИ" from Map or Quiz
  useEffect(() => {
    if (externalPrompt) {
      handleSendMessage(externalPrompt);
      if (onClearExternalPrompt) onClearExternalPrompt();
    }
  }, [externalPrompt]);

  const handleResetChat = () => {
    setMessages([getInitialWelcomeMessage()]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    const queryContext = {
      cityName: isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name,
      country: isEn ? (currentCity.countryEn || currentCity.country) : currentCity.country,
      coordinates: currentCity.coordinates,
      ecoIndex: currentCity.ecoIndex,
      indexStatus: currentCity.indexStatus,
      aqi: currentCity.aqi,
      pm25: currentCity.pm25,
      pm10: currentCity.pm10,
      no2: currentCity.airPollutants?.no2,
      quizCategory: quizResult?.category,
      totalCo2Kg: quizResult?.totalCo2Kg,
      language,
      isEn
    };

    const newSuggestions = getSuggestedQuestionsForTopic(text, isEn);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-8).map(m => ({ role: m.role, content: m.content })),
          context: queryContext
        })
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: data.reply || generateSmartEcoReply(text, queryContext),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: newSuggestions
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('Backend chat unreachable, utilizing local Eco Knowledge Base engine:', err);
      // Guarantee high-quality instant intelligent response from knowledge base
      const localReply = generateSmartEcoReply(text, queryContext);
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: localReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: newSuggestions
      };
      setMessages(prev => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Render markdown with basic parser for bold, lists, and linebreaks
  const renderFormattedContent = (content: string) => {
    return content.split('\n').map((line, lIdx) => {
      let formatted = line;
      // Bold text **word**
      const parts = formatted.split(/(\*\*.*?\*\*)/g);

      return (
        <p key={lIdx} className={`mb-1.5 leading-relaxed ${line.startsWith('- ') || line.startsWith('• ') ? 'pl-3' : ''}`}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-bold text-teal-300">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  const quickTopicsList = t.chat.quickTopics || [];

  return (
    <section id="ecoguide-chat" className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-teal-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-slate-900 leading-none">
                {t.chat.title}
              </h3>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {t.chat.statusOnline}
              </span>
            </div>
            <span className="text-xs text-slate-500">
              {t.chat.subtitle}
            </span>
          </div>
        </div>

        {/* Live Context Indicators & Reset */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span className="font-bold">{isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name}</span>
            <span className="text-[10px] text-slate-400 font-mono">AQI {currentCity.aqi}</span>
          </div>
          {quizResult && (
            <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-xl text-xs text-teal-800">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span className="font-bold">{quizResult.category}</span>
            </div>
          )}
          <button
            onClick={handleResetChat}
            title={t.chat.clearHistory}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick topics chips */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>{isEn ? 'Quick Suggested Topics:' : 'Быстрые темы для диалога:'}</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          {quickTopicsList.map((topic, tIdx) => (
            <button
              key={tIdx}
              onClick={() => handleSendMessage(topic.prompt)}
              disabled={isLoading}
              className="text-xs text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-300 border border-slate-200 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer font-medium shrink-0"
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Scroll Window */}
      <div className="h-[380px] sm:h-[420px] overflow-y-auto pr-2 space-y-4 mb-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                isUser
                  ? 'bg-emerald-950 text-teal-300'
                  : 'bg-teal-100 text-teal-800'
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm shadow-xs ${
                isUser
                  ? 'bg-emerald-950 text-white rounded-tr-none'
                  : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
              }`}>
                <div className="text-slate-200">
                  {renderFormattedContent(msg.content)}
                </div>

                {/* Prompt Suggestions */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-teal-400 tracking-wider block">
                      {isEn ? 'Recommended Next Questions:' : 'Рекомендуемые вопросы по теме:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSendMessage(sug)}
                          className="text-[11px] text-teal-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1 rounded-lg transition-colors text-left cursor-pointer flex items-center gap-1"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-teal-400 shrink-0" />
                          <span>{sug}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`text-[9px] mt-1.5 text-right ${isUser ? 'text-teal-400/60' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-3.5 text-xs text-teal-300 flex items-center gap-2 shadow-xs">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>{isEn ? 'Eco-Friend AI is preparing a detailed scientific answer...' : 'Эко-Друг подготавливает подробный ответ по экологии...'}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={t.chat.inputPlaceholder}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-4 pr-10 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:text-slate-400 shadow-inner"
          />
        </div>

        <button
          onClick={() => handleSendMessage()}
          disabled={isLoading || !inputMessage.trim()}
          className={`h-11 px-5 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            isLoading || !inputMessage.trim()
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-teal-400 hover:bg-teal-300 text-emerald-950 shadow-md shadow-teal-400/20'
          }`}
        >
          <span>{t.chat.sendBtn}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};

