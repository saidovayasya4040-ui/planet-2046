import React, { useState } from 'react';
import { 
  X, Clock, Calendar, User, Sparkles,
  Check, ArrowRight, Lightbulb, Copy
} from 'lucide-react';
import { EcoArticle } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface ArticleModalProps {
  article: EcoArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onAskAi: (prompt: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onAskAi,
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !article) return null;

  const categoryBadge = isEn ? (article.categoryBadgeEn || article.categoryBadge) : article.categoryBadge;
  const readTime = isEn ? (article.readTimeEn || article.readTime) : article.readTime;
  const author = isEn ? (article.authorEn || article.author) : article.author;
  const publishedDate = isEn ? (article.publishedDateEn || article.publishedDate) : article.publishedDate;
  const contentHtml = isEn ? (article.contentHtmlEn || article.contentHtml) : article.contentHtml;
  const actionCallout = isEn ? (article.actionCalloutEn || article.actionCallout) : article.actionCallout;
  const tags = isEn ? (article.tagsEn || article.tags) : article.tags;
  const chatPrompt = isEn ? (article.chatPromptEn || article.chatPrompt) : article.chatPrompt;

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(contentHtml.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDiscussWithAi = () => {
    onClose();
    onAskAi(chatPrompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
              {categoryBadge}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyHtml}
              title={t.articles.copyHtmlBtn}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{isEn ? 'HTML Copied!' : 'HTML скопирован!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isEn ? 'Copy HTML' : 'Копировать HTML'}</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 space-y-6 scrollbar-thin">
          {/* Metadata banner */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" />
              <span className="font-semibold text-slate-700">{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center gap-1 sm:hidden">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Article HTML Rendered Container */}
          <div 
            className="eco-article-rendered font-sans text-slate-800 leading-relaxed space-y-4 [&>article>header>.eco-article__badge]:hidden [&>article>header>h1]:text-2xl sm:[&>article>header>h1]:text-3xl [&>article>header>h1]:font-black [&>article>header>h1]:text-emerald-950 [&>article>header>h1]:tracking-tight [&>article>header>h1]:mb-4 [&>article>header>.eco-article__lead]:text-sm sm:[&>article>header>.eco-article__lead]:text-base [&>article>header>.eco-article__lead]:text-slate-700 [&>article>header>.eco-article__lead]:border-l-4 [&>article>header>.eco-article__lead]:border-teal-500 [&>article>header>.eco-article__lead]:pl-4 [&>article>header>.eco-article__lead]:py-1 [&>article>header>.eco-article__lead]:bg-slate-50 [&>article>header>.eco-article__lead]:rounded-r-xl [&>article>.eco-article__content>h2]:text-lg sm:[&>article>.eco-article__content>h2]:text-xl [&>article>.eco-article__content>h2]:font-bold [&>article>.eco-article__content>h2]:text-slate-900 [&>article>.eco-article__content>h2]:mt-6 [&>article>.eco-article__content>h2]:mb-2 [&>article>.eco-article__content>p]:text-sm [&>article>.eco-article__content>p]:text-slate-600 [&>article>.eco-article__content>p]:leading-relaxed [&>article>.eco-article__content>p]:mb-3 [&>article>.eco-article__content>ul]:list-disc [&>article>.eco-article__content>ul]:pl-5 [&>article>.eco-article__content>ul]:space-y-2 [&>article>.eco-article__content>ul>li]:text-xs sm:[&>article>.eco-article__content>ul>li]:text-sm [&>article>.eco-article__content>ul>li]:text-slate-700 [&>article>.eco-article__content>ul>li>strong]:text-emerald-950"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Key Takeaway & Action Box */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-2xl p-5 space-y-2 mt-8">
            <div className="flex items-center gap-2 text-xs font-black text-emerald-900 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>{isEn ? 'Key Takeaway & Advice' : 'Главный вывод и совет'}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {actionCallout}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2 text-xs text-slate-300 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{isEn ? 'Want to discuss this topic with our AI Eco-Friend?' : 'Хотите узнать больше или задать вопросы автору и эксперту?'}</span>
          </div>
          <button
            onClick={handleDiscussWithAi}
            className="w-full sm:w-auto bg-teal-400 hover:bg-teal-300 text-emerald-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-teal-400/20 cursor-pointer shrink-0"
          >
            <span>{t.articles.askAiBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
