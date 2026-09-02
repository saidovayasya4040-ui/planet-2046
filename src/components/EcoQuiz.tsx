import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, CheckCircle2, RotateCcw, ArrowLeft, 
  Leaf, Zap, ShoppingBag, Utensils, Car, Trash2, 
  MessageSquareShare, Award
} from 'lucide-react';
import { getQuizQuestions, calculateQuizResults } from '../data/quizData';
import { QuizResult } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface EcoQuizProps {
  onCompleteQuiz: (results: QuizResult) => void;
  onSendToChat: (results: QuizResult) => void;
}

export const EcoQuiz: React.FC<EcoQuizProps> = ({ onCompleteQuiz, onSendToChat }) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const questions = getQuizQuestions(isEn);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});

  const currentQ = questions[currentStep] || questions[0];
  const isLastQuestion = currentStep === questions.length - 1;
  const isFinished = currentStep >= questions.length && result !== null;

  // Category Icons mapping
  const getCategoryIcon = (cat: string) => {
    if (cat.includes('Транспорт') || cat.includes('Transport')) return <Car className="w-4 h-4 text-teal-400" />;
    if (cat.includes('Питание') || cat.includes('Diet')) return <Utensils className="w-4 h-4 text-amber-400" />;
    if (cat.includes('Отходы') || cat.includes('Waste')) return <Trash2 className="w-4 h-4 text-emerald-400" />;
    if (cat.includes('Энергия') || cat.includes('Energy')) return <Zap className="w-4 h-4 text-yellow-400" />;
    if (cat.includes('Потребление') || cat.includes('Consumer')) return <ShoppingBag className="w-4 h-4 text-purple-400" />;
    return <Leaf className="w-4 h-4 text-lime-400" />;
  };

  const handleSelectOption = (questionId: number, optionId: string) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);

    if (!isLastQuestion) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate results
      const res = calculateQuizResults(updated, isEn);
      setResult(res);
      setCurrentStep(questions.length);
      onCompleteQuiz(res);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Ignore in environments where canvas is restricted
      }
    }
  };

  const handleToggleChecklist = (itemId: string) => {
    setChecklistState(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const getLocalizedCategoryName = (cat: string) => {
    if (!isEn) return cat;
    if (cat === 'Хранитель Планеты') return 'Planet Guardian';
    if (cat === 'Умеренный потребитель') return 'Mindful Consumer';
    if (cat === 'Индустриальный гигант') return 'Industrial Heavyweight';
    return cat;
  };

  const getLocalizedTierLevel = (level: string) => {
    if (!isEn) return level;
    if (level === 'Легкий старт') return 'Easy Start';
    if (level === 'Средний уровень') return 'Intermediate Level';
    if (level === 'Продвинутый уровень') return 'Advanced Master';
    return level;
  };

  return (
    <section id="eco-quiz" className="w-full bg-emerald-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-800 text-white mb-8 relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-800/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-black uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            {t.quiz.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            {t.quiz.title}
          </h2>
        </div>

        {/* Question Counter Pill */}
        {!isFinished && (
          <div className="bg-emerald-900/80 border border-teal-500/30 px-4 py-2 rounded-2xl text-xs font-bold text-teal-300 flex items-center gap-2 shrink-0">
            <span>{isEn ? `Question ${currentStep + 1} of ${questions.length}` : `Вопрос ${currentStep + 1} из ${questions.length}`}</span>
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full bg-emerald-900/60 h-2 rounded-full overflow-hidden mb-6 border border-emerald-800">
            <div
              className="bg-gradient-to-r from-teal-400 to-emerald-300 h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Current Question Box */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-teal-500/20 shadow-xl mb-6">
            <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              {getCategoryIcon(currentQ.category)}
              <span>{currentQ.category}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              {currentQ.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 italic">
              💡 {currentQ.subtitle}
            </p>

            {/* Options list */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(currentQ.id, opt.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                      isSelected
                        ? 'bg-teal-400 text-emerald-950 border-teal-300 shadow-lg shadow-teal-400/20 font-bold'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-teal-400/50'
                    }`}
                  >
                    <div>
                      <div className={`text-sm ${isSelected ? 'text-emerald-950 font-black' : 'font-semibold text-white'}`}>
                        {opt.label}
                      </div>
                      <div className={`text-xs mt-1 ${isSelected ? 'text-emerald-900' : 'text-slate-400'}`}>
                        {opt.tip}
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded-lg shrink-0 font-bold ${
                      isSelected ? 'bg-emerald-950 text-teal-300' : 'bg-slate-900 text-teal-400'
                    }`}>
                      ~{opt.co2KgYear} {isEn ? 'kg CO₂' : 'кг CO₂'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                currentStep === 0
                  ? 'opacity-30 cursor-not-allowed text-slate-500'
                  : 'text-teal-300 hover:bg-emerald-900/50 cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t.quiz.prevBtn}
            </button>

            <span className="text-xs text-emerald-300/60 font-medium">
              {isEn ? '⚡ Auto-advances upon answer selection' : '⚡ Автоматический переход при выборе варианта'}
            </span>
          </div>
        </div>
      ) : (
        /* Results View */
        result && (
          <div className="relative z-10 space-y-8 animate-in fade-in zoom-in-95 duration-300">
            {/* Top Score Banner */}
            <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-teal-400/40 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Badge Column (7 cols) */}
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-black uppercase mb-3">
                    <Award className="w-4 h-4 text-teal-400" />
                    {isEn ? 'Eco-Profile Determined' : 'Эко-профиль определен'}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {getLocalizedCategoryName(result.category)}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {result.categoryDescription}
                  </p>
                  <div className="text-xs font-semibold text-teal-300 bg-teal-950/60 border border-teal-800/80 px-3.5 py-2 rounded-xl">
                    📊 {result.comparisonWithAverage}
                  </div>
                </div>

                {/* Metric Summary Card (5 cols) */}
                <div className="md:col-span-5 bg-emerald-950/90 border border-emerald-700/80 rounded-2xl p-6 text-center">
                  <span className="block text-xs font-bold uppercase text-teal-400 tracking-wider">
                    {t.quiz.comparisonPrefix}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white my-1">
                    {(result.totalCo2Kg / 1000).toFixed(2)}
                    <span className="text-xl font-normal text-teal-300 ml-1">{isEn ? 't CO₂/year' : 'т CO₂/год'}</span>
                  </div>
                  <span className="text-[11px] text-emerald-200/70 block mt-1">
                    {isEn ? `Equivalent to ${Math.round(result.totalCo2Kg / 22)} mature trees to offset` : `Компенсируется высадкой ${Math.round(result.totalCo2Kg / 22)} взрослых деревьев`}
                  </span>

                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      onClick={() => onSendToChat(result)}
                      className="w-full bg-teal-400 hover:bg-teal-300 text-emerald-950 font-black text-xs uppercase py-2.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <MessageSquareShare className="w-3.5 h-3.5" />
                      {t.quiz.sendToAiBtn}
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1 py-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> {t.quiz.retakeBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiered Checklist Recommendations */}
            <div>
              <div className="mb-4">
                <h4 className="text-xl font-black text-white uppercase tracking-tight">
                  {t.quiz.checklistHeader}
                </h4>
                <p className="text-xs text-emerald-200/70">
                  {isEn ? 'Actionable 3-tier roadmap towards zero-emission habits' : 'Пошаговый план из 3 уровней для снижения вашего следа на 30-50%'}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {result.checklists.map((tier, tIdx) => (
                  <div
                    key={tIdx}
                    className="bg-slate-900/80 rounded-2xl p-5 border border-slate-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                          tIdx === 0
                            ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                            : tIdx === 1
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {getLocalizedTierLevel(tier.level)}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {tier.items.filter(i => checklistState[i.id]).length} / {tier.items.length}
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {tier.items.map((item) => {
                          const isDone = !!checklistState[item.id];
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleToggleChecklist(item.id)}
                              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                isDone
                                  ? 'bg-emerald-950/70 border-teal-500/50 opacity-90'
                                  : 'bg-slate-800/60 border-slate-700/70 hover:bg-slate-800'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                                isDone
                                  ? 'bg-teal-400 border-teal-300 text-emerald-950 font-bold'
                                  : 'border-slate-500 bg-slate-900'
                              }`}>
                                {isDone && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <div>
                                <div className={`text-xs font-semibold leading-tight ${isDone ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                                  {item.title}
                                </div>
                                <div className="text-[10px] text-teal-300 font-medium mt-1">
                                  {item.impact}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
