import React, { useState } from 'react';
import { 
  Newspaper, Clock, Sparkles, ArrowRight, 
  Copy, Check, Lightbulb
} from 'lucide-react';
import { ECO_ARTICLES } from '../data/articlesData';
import { EcoArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface EcoArticlesSectionProps {
  onAskAiAboutArticle: (prompt: string) => void;
}

export const EcoArticlesSection: React.FC<EcoArticlesSectionProps> = ({
  onAskAiAboutArticle,
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'oceans' | 'cities' | 'habits' | 'energy' | 'wildlife' | 'forests'>('all');
  const [activeArticleModal, setActiveArticleModal] = useState<EcoArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredArticles = selectedCategory === 'all'
    ? ECO_ARTICLES
    : ECO_ARTICLES.filter(a => a.categorySlug === selectedCategory);

  const handleCopyArticleHtml = (article: EcoArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    const htmlToCopy = (isEn && article.contentHtmlEn) ? article.contentHtmlEn : article.contentHtml;
    navigator.clipboard.writeText(htmlToCopy.trim());
    setCopiedId(article.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryTheme = (slug: string) => {
    switch (slug) {
      case 'oceans':
        return {
          badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
          accentBorder: 'hover:border-cyan-400',
          iconColor: 'text-cyan-600',
          btnBg: 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900'
        };
      case 'cities':
        return {
          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          accentBorder: 'hover:border-emerald-400',
          iconColor: 'text-emerald-600',
          btnBg: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900'
        };
      case 'habits':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
          accentBorder: 'hover:border-amber-400',
          iconColor: 'text-amber-600',
          btnBg: 'bg-amber-50 hover:bg-amber-100 text-amber-900'
        };
      case 'energy':
        return {
          badgeBg: 'bg-yellow-100 text-yellow-900 border-yellow-200',
          accentBorder: 'hover:border-yellow-400',
          iconColor: 'text-yellow-600',
          btnBg: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-900'
        };
      case 'wildlife':
        return {
          badgeBg: 'bg-orange-100 text-orange-900 border-orange-200',
          accentBorder: 'hover:border-orange-400',
          iconColor: 'text-orange-600',
          btnBg: 'bg-orange-50 hover:bg-orange-100 text-orange-900'
        };
      case 'forests':
        return {
          badgeBg: 'bg-lime-100 text-lime-900 border-lime-200',
          accentBorder: 'hover:border-lime-400',
          iconColor: 'text-lime-600',
          btnBg: 'bg-lime-50 hover:bg-lime-100 text-lime-900'
        };
      default:
        return {
          badgeBg: 'bg-teal-100 text-teal-900 border-teal-200',
          accentBorder: 'hover:border-teal-400',
          iconColor: 'text-teal-600',
          btnBg: 'bg-teal-50 hover:bg-teal-100 text-teal-900'
        };
    }
  };

  return (
    <section id="eco-articles" className="mt-12 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-teal-700 text-xs font-black uppercase tracking-widest mb-1.5">
            <Newspaper className="w-4 h-4" />
            <span>{t.articles.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            {t.articles.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            {t.articles.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-teal-300 shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.articles.categories.all} ({ECO_ARTICLES.length})
          </button>
          <button
            onClick={() => setSelectedCategory('oceans')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'oceans'
                ? 'bg-cyan-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-cyan-50 hover:text-cyan-900 border border-slate-200'
            }`}
          >
            🌊 {t.articles.categories.oceans}
          </button>
          <button
            onClick={() => setSelectedCategory('cities')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'cities'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200'
            }`}
          >
            🏙️ {t.articles.categories.cities}
          </button>
          <button
            onClick={() => setSelectedCategory('energy')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'energy'
                ? 'bg-yellow-700 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-yellow-50 hover:text-yellow-900 border border-slate-200'
            }`}
          >
            ⚡ {t.articles.categories.energy}
          </button>
          <button
            onClick={() => setSelectedCategory('wildlife')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'wildlife'
                ? 'bg-orange-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-900 border border-slate-200'
            }`}
          >
            🐝 {t.articles.categories.wildlife}
          </button>
          <button
            onClick={() => setSelectedCategory('forests')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'forests'
                ? 'bg-lime-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-lime-50 hover:text-lime-900 border border-slate-200'
            }`}
          >
            🌲 {t.articles.categories.forests}
          </button>
          <button
            onClick={() => setSelectedCategory('habits')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'habits'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
            }`}
          >
            🥗 {t.articles.categories.habits}
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => {
          const theme = getCategoryTheme(article.categorySlug);
          const badge = isEn ? (article.categoryBadgeEn || article.categoryBadge) : article.categoryBadge;
          const title = isEn ? (article.titleEn || article.title) : article.title;
          const lead = isEn ? (article.leadEn || article.lead) : article.lead;
          const readTime = isEn ? (article.readTimeEn || article.readTime) : article.readTime;
          const keyFact = isEn ? (article.keyFactEn || article.keyFact) : article.keyFact;
          const author = isEn ? (article.authorEn || article.author) : article.author;
          const pubDate = isEn ? (article.publishedDateEn || article.publishedDate) : article.publishedDate;
          const prompt = isEn ? (article.chatPromptEn || article.chatPrompt) : article.chatPrompt;

          return (
            <div
              key={article.id}
              onClick={() => setActiveArticleModal(article)}
              className={`bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${theme.accentBorder}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta row: Category Badge & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badgeBg}`}>
                    {badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug mb-3">
                  {title}
                </h3>

                {/* Lead Teaser */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {lead}
                </p>

                {/* Key Fact Highlight Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${theme.iconColor}`} />
                    <span className="text-[11px] text-slate-700 font-medium leading-tight">
                      <strong>{isEn ? 'FACT:' : 'ФАКТ:'}</strong> {keyFact}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="truncate">{author.split(',')[0]}</span>
                  <span>{pubDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveArticleModal(article)}
                    className="flex-1 bg-slate-900 hover:bg-emerald-950 text-teal-300 font-bold py-2.5 px-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-emerald-900 group-hover:text-white"
                  >
                    <span>{t.articles.readFullBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={(e) => handleCopyArticleHtml(article, e)}
                    title={t.articles.copyHtmlBtn}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedId === article.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAskAiAboutArticle(prompt);
                    }}
                    title={t.articles.askAiBtn}
                    className="p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 transition-colors cursor-pointer shrink-0 border border-teal-200"
                  >
                    <Sparkles className="w-4 h-4 text-teal-600" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reader Modal */}
      <ArticleModal
        article={activeArticleModal}
        isOpen={!!activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
        onAskAi={onAskAiAboutArticle}
      />
    </section>
  );
};
