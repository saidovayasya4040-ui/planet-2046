import React, { useState } from 'react';
import { X, Search, BookOpen } from 'lucide-react';
import { RECYCLING_CODES, RecyclingCode } from '../data/knowledgeBaseData';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface KnowledgeBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KnowledgeBaseModal: React.FC<KnowledgeBaseModalProps> = ({ isOpen, onClose }) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  if (!isOpen) return null;

  const filteredCodes = RECYCLING_CODES.filter(item => {
    const matchesSearch = 
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(search.toLowerCase())) ||
      item.russianName.toLowerCase().includes(search.toLowerCase()) ||
      item.commonProducts.some(p => p.toLowerCase().includes(search.toLowerCase())) ||
      (item.commonProductsEn && item.commonProductsEn.some(p => p.toLowerCase().includes(search.toLowerCase())));

    if (filterType === 'all') return matchesSearch;
    if (filterType === 'easy') return matchesSearch && item.recyclable === 'easy';
    if (filterType === 'hard') return matchesSearch && (item.recyclable === 'hard' || item.recyclable === 'non-recyclable');
    return matchesSearch;
  });

  const getStatusBadge = (rec: RecyclingCode['recyclable']) => {
    switch (rec) {
      case 'easy':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            {t.knowledgeBase.easyBadge}
          </span>
        );
      case 'moderate':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            {t.knowledgeBase.moderateBadge}
          </span>
        );
      case 'hard':
      case 'non-recyclable':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
            {t.knowledgeBase.hardBadge}
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full p-6 sm:p-8 relative flex flex-col max-h-[85vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-teal-700 text-xs font-black uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" />
            {t.knowledgeBase.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            {t.knowledgeBase.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t.knowledgeBase.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-2.5 my-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.knowledgeBase.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'all' ? 'bg-slate-900 text-teal-300' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.knowledgeBase.filters.all}
            </button>
            <button
              onClick={() => setFilterType('easy')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'easy' ? 'bg-emerald-800 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              {t.knowledgeBase.filters.easy}
            </button>
            <button
              onClick={() => setFilterType('hard')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'hard' ? 'bg-rose-800 text-white' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
              }`}
            >
              {t.knowledgeBase.filters.hard}
            </button>
          </div>
        </div>

        {/* Scrollable Codes List */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-3 mt-2">
          {filteredCodes.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-teal-300 font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {item.code.split('/')[0].trim()}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.code} — <span className="text-slate-600 font-medium">{isEn && item.nameEn ? item.nameEn : item.russianName}</span>
                    </h4>
                    <span className="text-[11px] text-slate-500">{isEn && item.nameEn ? item.name : item.name}</span>
                  </div>
                </div>
                <div>{getStatusBadge(item.recyclable)}</div>
              </div>

              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                {isEn && item.descriptionEn ? item.descriptionEn : item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-slate-100/70 p-2.5 rounded-xl">
                <div>
                  <span className="font-bold text-slate-700 block mb-0.5">{t.knowledgeBase.foundIn}</span>
                  <span className="text-slate-600">
                    {(isEn && item.commonProductsEn ? item.commonProductsEn : item.commonProducts).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-emerald-800 block mb-0.5">{t.knowledgeBase.howToPrepare}</span>
                  <span className="text-slate-600">
                    {isEn && item.preparationTipEn ? item.preparationTipEn : item.preparationTip}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filteredCodes.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-xs">
              {isEn ? 'No recycling markings found matching query' : 'По вашему запросу маркировок не найдено'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
