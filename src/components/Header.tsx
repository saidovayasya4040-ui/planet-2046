import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, MapPin, Sparkles, BookOpen, ChevronDown, 
  Search, Loader2, Compass, Check, Newspaper, Languages
} from 'lucide-react';
import { CityData, GeocodingResult } from '../types';
import { searchGlobalLocations } from '../services/geoService';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  currentCity: CityData;
  allCities: CityData[];
  isLoadingCity?: boolean;
  onSelectCity: (city: CityData) => void;
  onSelectGeoLocation: (geo: GeocodingResult) => void;
  onOpenQuiz: () => void;
  onOpenArticles?: () => void;
  onOpenKnowledgeBase: () => void;
  onOpenChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCity,
  allCities,
  isLoadingCity,
  onSelectCity,
  onSelectGeoLocation,
  onOpenQuiz,
  onOpenArticles,
  onOpenKnowledgeBase,
  onOpenChat,
}) => {
  const { language, setLanguage, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GeocodingResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debounced search on input change across the whole world
  useEffect(() => {
    let active = true;
    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results = await searchGlobalLocations(searchQuery);
        if (active) {
          setSearchResults(results);
        }
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        if (active) setIsSearching(false);
      }
    }, 250);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectResult = (geo: GeocodingResult) => {
    setIsDropdownOpen(false);
    setSearchQuery('');
    // Check if it matches existing loaded city
    const existing = allCities.find(c => 
      c.name.toLowerCase() === geo.name.toLowerCase() && 
      c.country.toLowerCase() === geo.country.toLowerCase()
    );
    if (existing) {
      onSelectCity(existing);
    } else {
      onSelectGeoLocation(geo);
    }
  };

  return (
    <header className="h-20 bg-[#064E3B] flex items-center justify-between px-3 sm:px-8 shadow-lg border-b border-teal-800/40 sticky top-0 z-40">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-teal-400 rounded-xl flex items-center justify-center font-black text-emerald-950 shadow-md shadow-teal-400/20 text-base sm:text-lg tracking-tighter shrink-0">
          2046
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-lg sm:text-xl tracking-tight uppercase">{t.common.appName}</span>
            <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold bg-teal-400/20 text-teal-300 border border-teal-400/30 rounded-full">
              {t.common.globalAtlas}
            </span>
          </div>
          <span className="text-emerald-200/70 text-xs hidden lg:block font-medium">
            {t.common.appSubtitle}
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="hidden xl:flex items-center gap-5 text-emerald-100 text-xs font-bold uppercase tracking-wider">
        <a 
          href="#scenarios" 
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400"
        >
          {t.nav.scenarios}
        </a>
        <a 
          href="#city-widget" 
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400"
        >
          {t.nav.ecoIndex}
        </a>
        <a 
          href="#eco-map" 
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400"
        >
          {t.nav.ecoMap}
        </a>
        <a 
          href="#eco-articles" 
          onClick={(e) => {
            if (onOpenArticles) {
              e.preventDefault();
              onOpenArticles();
            }
          }}
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400 flex items-center gap-1"
        >
          <Newspaper className="w-3.5 h-3.5 text-teal-400" />
          {t.nav.articles}
        </a>
        <button 
          onClick={onOpenQuiz}
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400 cursor-pointer flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          {t.nav.quiz}
        </button>
        <button 
          onClick={onOpenKnowledgeBase}
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400 cursor-pointer flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5 text-teal-400" />
          {t.nav.markings}
        </button>
        <button 
          onClick={onOpenChat}
          className="hover:text-teal-300 transition-colors py-1.5 border-b-2 border-transparent hover:border-teal-400 cursor-pointer flex items-center gap-1.5 text-teal-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          {t.nav.ecoGuide}
        </button>
      </nav>

      {/* Right Controls: Language Switcher, City Selector, and Quick Action */}
      <div className="flex items-center gap-2 sm:gap-3" ref={dropdownRef}>
        {/* Language Switcher Button */}
        <div className="bg-emerald-950/80 p-1 rounded-xl border border-teal-500/30 flex items-center gap-0.5 shadow-inner">
          <button
            onClick={() => setLanguage('ru')}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'ru'
                ? 'bg-teal-400 text-emerald-950 shadow-sm'
                : 'text-emerald-200/70 hover:text-white hover:bg-emerald-800/60'
            }`}
            title="Русский язык"
          >
            RU
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-teal-400 text-emerald-950 shadow-sm'
                : 'text-emerald-200/70 hover:text-white hover:bg-emerald-800/60'
            }`}
            title="English language"
          >
            EN
          </button>
        </div>

        {/* World City Selector Dropdown with Live Global Search */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold border border-teal-500/30 transition-all cursor-pointer shadow-inner"
          >
            {isLoadingCity ? (
              <Loader2 className="w-3.5 h-3.5 text-teal-400 animate-spin shrink-0" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            )}
            <span className="max-w-[100px] sm:max-w-[150px] truncate font-bold">
              {currentCity.name}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-teal-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-88 bg-slate-900 border border-teal-500/30 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 text-white">
              {/* Search input in dropdown */}
              <div className="relative mb-2">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.nav.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-400"
                />
                {isSearching && (
                  <Loader2 className="w-3.5 h-3.5 text-teal-400 animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>

              <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1 tracking-wider border-b border-slate-800 flex items-center justify-between">
                <span>{searchQuery ? t.nav.searchResults : t.nav.popularCities}</span>
                <span className="text-[9px] text-teal-400/80 font-normal">OSM</span>
              </div>

              {/* List of cities / search results */}
              <div className="max-h-64 overflow-y-auto space-y-1 mt-1 pr-1">
                {searchResults.length > 0 ? (
                  searchResults.map(geo => {
                    const isCurrent = currentCity.name.toLowerCase() === geo.name.toLowerCase();
                    return (
                      <button
                        key={geo.placeId}
                        onClick={() => handleSelectResult(geo)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl text-left transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-teal-400 text-emerald-950 font-bold'
                            : 'text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <div className="truncate mr-2">
                          <div className="font-semibold truncate">{geo.name}</div>
                          <div className={`text-[10px] truncate ${isCurrent ? 'text-emerald-900' : 'text-slate-400'}`}>
                            {geo.displayName}
                          </div>
                        </div>
                        {isCurrent ? (
                          <Check className="w-3.5 h-3.5 shrink-0 text-emerald-950" />
                        ) : (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-teal-300 font-mono shrink-0">
                            {geo.coordinates[0].toFixed(1)}°, {geo.coordinates[1].toFixed(1)}°
                          </span>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="p-4 text-xs text-slate-400 text-center">
                    {isSearching ? t.nav.searchingGeo : t.nav.cityNotFound}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA button */}
        <a
          href="#city-widget"
          className="bg-teal-400 hover:bg-teal-300 text-emerald-950 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wide transition-all shadow-md shadow-teal-400/25 hover:shadow-teal-400/40 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 shrink-0"
        >
          <Compass className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.nav.ecoIndex}</span>
        </a>
      </div>
    </header>
  );
};

