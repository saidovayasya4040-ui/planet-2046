import React from 'react';
import { Heart, Activity, Shield } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

export const Footer: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="w-full bg-[#064E3B] text-emerald-100 border-t border-teal-800/40 mt-12">
      {/* Live Global Climate Ticker */}
      <div className="bg-[#022c22] border-b border-teal-800/30 py-2.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-wider shrink-0">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.footer.liveMonitoring}</span>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none text-slate-300">
            <span>CO₂: <strong className="text-white">424.8 ppm</strong></span>
            <span>{isEn ? 'Temp Anomaly' : 'Аномалия t°'}: <strong className="text-amber-400">+1.24°C</strong></span>
            <span>{isEn ? 'Renewables' : 'Доля ВИЭ'}: <strong className="text-teal-300">38.4%</strong></span>
            <span>{isEn ? 'Glaciers' : 'Ледники'}: <strong className="text-rose-300">-267 Gt/yr</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-teal-400 rounded-xl flex items-center justify-center font-black text-emerald-950 text-base">
                2046
              </div>
              <span className="text-white font-black text-lg tracking-tight uppercase">
                {t.common.appName}
              </span>
            </div>
            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-300 mb-3">
              {t.footer.sectionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><a href="#scenarios" className="hover:text-teal-300 transition-colors">{t.nav.scenarios}</a></li>
              <li><a href="#city-widget" className="hover:text-teal-300 transition-colors">{t.nav.ecoIndex}</a></li>
              <li><a href="#eco-map" className="hover:text-teal-300 transition-colors">{t.nav.ecoMap}</a></li>
              <li><a href="#eco-articles" className="hover:text-teal-300 transition-colors">{t.nav.articles}</a></li>
              <li><a href="#eco-quiz" className="hover:text-teal-300 transition-colors">{t.nav.quiz}</a></li>
              <li><a href="#ecoguide-chat" className="hover:text-teal-300 transition-colors">{t.nav.ecoGuide}</a></li>
            </ul>
          </div>

          {/* Col 3: Methodology */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-300 mb-3">
              {t.footer.methodologyTitle}
            </h4>
            <p className="text-[11px] text-emerald-200/70 leading-relaxed">
              {t.footer.methodologyText}
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-teal-300 bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-teal-500/20">
              <Shield className="w-3 h-3 text-teal-400" />
              {t.footer.openDataBadge}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-teal-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-1 text-teal-300">
            <span>{t.footer.tagline}</span>
            <Heart className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
