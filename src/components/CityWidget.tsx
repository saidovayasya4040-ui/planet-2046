import React, { useState, useEffect } from 'react';
import { 
  Wind, Droplets, Recycle, TreePine, AlertTriangle, 
  MapPin, Clock, Star, Sparkles, CheckCircle2, 
  Search, ShieldAlert, ArrowUpRight, Compass, Loader2,
  Radio, Thermometer, Activity
} from 'lucide-react';
import { CityData, GeocodingResult } from '../types';
import { searchGlobalLocations, reverseGeocodeEurasia } from '../services/geoService';
import greenCityImg from '../assets/images/green_eco_city_1787894103541.jpg';
import climateChaosImg from '../assets/images/climate_chaos_city_1787894082372.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface CityWidgetProps {
  currentCity: CityData;
  allCities: CityData[];
  isLoadingCity?: boolean;
  onSelectCity: (city: CityData) => void;
  onSelectGeoLocation: (geo: GeocodingResult) => void;
  onAskAiAboutCity: (topic: string) => void;
}

export const CityWidget: React.FC<CityWidgetProps> = ({
  currentCity,
  allCities,
  isLoadingCity,
  onSelectCity,
  onSelectGeoLocation,
  onAskAiAboutCity,
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const [activeTab, setActiveTab] = useState<'problems' | 'forecast' | 'recycling' | 'pollutants'>('problems');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<GeocodingResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);

  // Debounced search for Nominatim Geocoding
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    let active = true;
    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await searchGlobalLocations(searchQuery);
        if (active) {
          setSearchResults(res);
        }
      } catch (err) {
        console.error('Widget search error:', err);
      } finally {
        if (active) setIsSearching(false);
      }
    }, 250);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Handle Geolocation auto-detect via browser and reverse geocode
  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      alert(isEn ? 'Geolocation is not supported by your browser' : 'Геолокация не поддерживается вашим браузером');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const rev = await reverseGeocodeEurasia(latitude, longitude);
          onSelectGeoLocation({
            placeId: `user-geo-${Date.now()}`,
            name: rev.name,
            country: rev.country,
            displayName: rev.displayName,
            coordinates: [latitude, longitude],
            type: 'city'
          });
        } catch (e) {
          console.error('Geo detect error:', e);
        } finally {
          setIsLocating(false);
        }
      },
      () => {
        setIsLocating(false);
      },
      { timeout: 8000 }
    );
  };

  // Color mappings for Eco-Index
  const getIndexColor = (score: number) => {
    if (score >= 75) return { stroke: '#2DD4BF', text: 'text-teal-500', bg: 'bg-teal-50', badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
    if (score >= 60) return { stroke: '#10B981', text: 'text-emerald-600', bg: 'bg-emerald-50', badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
    if (score >= 45) return { stroke: '#F59E0B', text: 'text-amber-500', bg: 'bg-amber-50', badgeBg: 'bg-amber-100 text-amber-800 border-amber-200' };
    return { stroke: '#EF4444', text: 'text-rose-500', bg: 'bg-rose-50', badgeBg: 'bg-rose-100 text-rose-800 border-rose-200' };
  };

  const getStatusLabel = (score: number) => {
    if (score >= 75) return t.common.excellent;
    if (score >= 60) return t.common.good;
    if (score >= 45) return t.common.moderate;
    return t.common.critical;
  };

  const indexTheme = getIndexColor(currentCity.ecoIndex);
  const circleCircumference = 2 * Math.PI * 40; // r=40 => ~251.3
  const strokeDashoffset = circleCircumference - (currentCity.ecoIndex / 100) * circleCircumference;

  return (
    <div id="city-widget" className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8 relative">
      {/* Loading Overlay */}
      {isLoadingCity && (
        <div className="absolute inset-0 bg-white/75 backdrop-blur-xs z-20 rounded-3xl flex flex-col items-center justify-center gap-2">
          <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
          <span className="text-xs font-bold text-slate-700">{t.cityWidget.loadingTelemetry}</span>
        </div>
      )}

      {/* Header Bar with Location Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest mb-1">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            {t.cityWidget.title}
            {currentCity.isLiveFetched && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
                <Radio className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
                {t.common.liveApi}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name}, <span className="text-slate-500 font-semibold">{isEn ? (currentCity.countryEn || currentCity.country) : currentCity.country}</span>
            </h2>
            <span className={`px-3 py-1 text-xs font-bold rounded-lg border uppercase tracking-wider ${indexTheme.badgeBg}`}>
              {getStatusLabel(currentCity.ecoIndex)}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
            <span>{isEn ? 'Coordinates' : 'Координаты'}: <strong className="text-slate-600 font-mono">{currentCity.coordinates[0].toFixed(4)}°, {currentCity.coordinates[1].toFixed(4)}°</strong></span>
            {currentCity.sourceAttribution && (
              <span>• {isEn ? 'Source' : 'Источник'}: <strong className="text-slate-600">{currentCity.sourceAttribution}</strong></span>
            )}
          </div>
        </div>

        {/* City Quick Picker & Auto-Detect Button */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.cityWidget.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchMenu(true);
              }}
              onFocus={() => setShowSearchMenu(true)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-slate-800"
            />
            {isSearching && (
              <Loader2 className="w-3.5 h-3.5 text-teal-600 animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
            )}

            {showSearchMenu && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl z-30 max-h-60 overflow-y-auto p-1.5 animate-in fade-in zoom-in-95 duration-100">
                <div className="text-[9px] uppercase font-bold text-slate-400 px-2 py-1 border-b border-slate-100 flex items-center justify-between">
                  <span>{t.nav.searchResults}</span>
                  <button 
                    onClick={() => setShowSearchMenu(false)}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {searchResults.length > 0 ? (
                  searchResults.map(geo => (
                    <button
                      key={geo.placeId}
                      onClick={() => {
                        onSelectGeoLocation(geo);
                        setSearchQuery('');
                        setShowSearchMenu(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs hover:bg-teal-50 rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="truncate mr-2">
                        <div className="font-bold text-slate-800">{geo.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{geo.displayName}</div>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-teal-800 font-mono shrink-0">
                        {geo.coordinates[0].toFixed(1)}°, {geo.coordinates[1].toFixed(1)}°
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-xs text-slate-400 text-center">
                    {isSearching ? t.nav.searchingGeo : t.nav.cityNotFound}
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleAutoDetect}
            disabled={isLocating}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
            title={t.cityWidget.autoDetectBtn}
          >
            <MapPin className={`w-3.5 h-3.5 text-teal-600 ${isLocating ? 'animate-bounce' : ''}`} />
            <span>{isLocating ? t.cityWidget.detecting : t.cityWidget.autoDetectBtn}</span>
          </button>
        </div>
      </div>

      {/* Main Score & Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: Animated Circular Gauge & Summary (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
          <div className="flex items-center gap-6">
            {/* SVG Circular Gauge */}
            <div className="relative shrink-0">
              <svg className="w-28 h-28 transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="40"
                  stroke="#E2E8F0"
                  strokeWidth="9"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="40"
                  stroke={indexTheme.stroke}
                  strokeWidth="9"
                  fill="transparent"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-800 leading-none">
                  {currentCity.ecoIndex}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">
                  {isEn ? '/ 100' : 'из 100'}
                </span>
              </div>
            </div>

            {/* Description next to gauge */}
            <div>
              <span className="text-[10px] font-bold uppercase text-teal-700 tracking-wider">
                {t.cityWidget.overallIndex}
              </span>
              <h3 className="text-base font-bold text-slate-800 mt-0.5 mb-1">
                {isEn ? 'Environmental Baseline' : 'Состояние окружающей среды'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEn ? (currentCity.summaryEn || currentCity.summary) : currentCity.summary}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
            <span className="text-slate-500">{t.cityWidget.weather}:</span>
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5 text-orange-500" />
              {currentCity.weather ? `${currentCity.weather.temp > 0 ? `+${currentCity.weather.temp}` : currentCity.weather.temp}°C, ${t.cityWidget.humidity} ${currentCity.weather.humidity}%` : (isEn ? 'Telemetry active' : 'Данные обновляются')}
            </span>
          </div>
        </div>

        {/* Right: 4 Real-time Metric Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Metric 1: Air Quality AQI */}
          <div className="bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200/80 transition-all shadow-xs group">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Wind className="w-4 h-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t.cityWidget.airQuality}</span>
            <div className="text-2xl font-black text-slate-800 mt-0.5">
              AQI {currentCity.aqi}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              PM2.5: <span className="font-semibold text-slate-700">{currentCity.pm25} µg</span>
            </div>
          </div>

          {/* Metric 2: Water Quality */}
          <div className="bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200/80 transition-all shadow-xs group">
            <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t.cityWidget.waterQuality}</span>
            <div className="text-2xl font-black text-slate-800 mt-0.5">
              {currentCity.waterQuality}%
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {isEn ? 'Safe Balance' : 'Безопасный баланс'}
            </div>
          </div>

          {/* Metric 3: Recycling Rate */}
          <div className="bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200/80 transition-all shadow-xs group">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Recycle className="w-4 h-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t.cityWidget.recyclingRate}</span>
            <div className="text-2xl font-black text-slate-800 mt-0.5">
              {currentCity.recyclingRate}%
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {isEn ? 'Circular Streams' : 'Сортировка сырья'}
            </div>
          </div>

          {/* Metric 4: Greenery Level */}
          <div className="bg-slate-50 hover:bg-white p-4 rounded-2xl border border-slate-200/80 transition-all shadow-xs group">
            <div className="w-8 h-8 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <TreePine className="w-4 h-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t.cityWidget.greeneryLevel}</span>
            <div className="text-2xl font-black text-slate-800 mt-0.5">
              {currentCity.greeneryLevel}%
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {isEn ? 'Urban Canopy' : 'Парковые зоны'}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-t border-slate-100 pt-6">
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('problems')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'problems'
                ? 'bg-slate-900 text-teal-400 shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            {t.cityWidget.tabs.problems} ({currentCity.topProblems.length})
          </button>

          <button
            onClick={() => setActiveTab('forecast')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'forecast'
                ? 'bg-slate-900 text-teal-400 shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.cityWidget.tabs.forecast}
          </button>

          <button
            onClick={() => setActiveTab('pollutants')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'pollutants'
                ? 'bg-slate-900 text-teal-400 shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            {t.cityWidget.tabs.pollutants}
          </button>

          <button
            onClick={() => setActiveTab('recycling')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'recycling'
                ? 'bg-slate-900 text-teal-400 shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Recycle className="w-3.5 h-3.5" />
            {t.cityWidget.tabs.recycling} ({currentCity.localRecyclingPoints.length})
          </button>
        </div>

        {/* Tab 1: Top Problems */}
        {activeTab === 'problems' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {currentCity.topProblems.map((prob, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      {isEn ? `Challenge #${idx + 1}` : `Проблема #${idx + 1}`}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      prob.severity === 'critical'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {prob.severity === 'critical' ? (isEn ? 'Critical Risk' : 'Критический риск') : (isEn ? 'High Risk' : 'Высокий риск')}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{isEn ? (prob.titleEn || prob.title) : prob.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{isEn ? (prob.descriptionEn || prob.description) : prob.description}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] font-medium text-emerald-800 bg-emerald-50/50 p-2 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold">{isEn ? 'Impact' : 'Воздействие'}: </span>{isEn ? (prob.impactEn || prob.impact) : prob.impact}
                  </div>
                  <button
                    onClick={() => onAskAiAboutCity(`${t.cityWidget.askAiCityPrompt} ${isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name}: ${isEn ? (prob.titleEn || prob.title) : prob.title}`)}
                    className="text-teal-700 hover:text-teal-900 p-1 hover:bg-teal-100 rounded-md cursor-pointer transition-colors"
                    title={t.cityWidget.askAiAboutCity}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 2046 Forecast */}
        {activeTab === 'forecast' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
            {/* Optimistic */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-800/80 overflow-hidden flex flex-col justify-between relative group">
              <div>
                <div className="relative h-28 -mx-5 -mt-5 mb-4 overflow-hidden">
                  <img
                    src={greenCityImg}
                    alt="Green metropolis 2046"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-teal-400 text-emerald-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t.cityWidget.forecastTabs.optimistic}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-teal-300 mb-2">
                  {isEn ? `Warming stabilization within ${currentCity.forecast2046.optimistic.tempChange}` : `Удержание потепления в пределах ${currentCity.forecast2046.optimistic.tempChange}`}
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                  {isEn ? (currentCity.forecast2046.optimistic.descriptionEn || currentCity.forecast2046.optimistic.description) : currentCity.forecast2046.optimistic.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700/50">
                  <span className="text-[10px] text-teal-400 block font-bold">{t.cityWidget.airQuality}</span>
                  <span className="font-bold">{isEn ? (currentCity.forecast2046.optimistic.airQualityEn || currentCity.forecast2046.optimistic.airQuality) : currentCity.forecast2046.optimistic.airQuality}</span>
                </div>
                <div className="bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-700/50">
                  <span className="text-[10px] text-teal-400 block font-bold">{t.cityWidget.greeneryLevel}</span>
                  <span className="font-bold">{isEn ? (currentCity.forecast2046.optimistic.greenZonesEn || currentCity.forecast2046.optimistic.greenZones) : currentCity.forecast2046.optimistic.greenZones}</span>
                </div>
              </div>
            </div>

            {/* Negative */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-orange-900/60 overflow-hidden flex flex-col justify-between relative group">
              <div>
                <div className="relative h-28 -mx-5 -mt-5 mb-4 overflow-hidden">
                  <img
                    src={climateChaosImg}
                    alt="Climate chaos 2046"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-rose-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {t.cityWidget.forecastTabs.negative}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-orange-400 mb-2">
                  {isEn ? `Temperature surge ${currentCity.forecast2046.negative.tempChange}` : `Повышение температуры на ${currentCity.forecast2046.negative.tempChange}`}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {isEn ? (currentCity.forecast2046.negative.descriptionEn || currentCity.forecast2046.negative.description) : currentCity.forecast2046.negative.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-orange-400 block font-bold">{t.hero.negativeHeat}</span>
                  <span className="font-bold">{isEn ? (currentCity.forecast2046.negative.heatwavesDaysEn || currentCity.forecast2046.negative.heatwavesDays) : currentCity.forecast2046.negative.heatwavesDays}</span>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-orange-400 block font-bold">{t.hero.negativeWater}</span>
                  <span className="font-bold">{isEn ? (currentCity.forecast2046.negative.waterDeficitEn || currentCity.forecast2046.negative.waterDeficit) : currentCity.forecast2046.negative.waterDeficit}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Detailed Pollutants Telemetry */}
        {activeTab === 'pollutants' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 animate-in fade-in duration-200">
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">{isEn ? 'PM2.5 (Fine Dust)' : 'PM2.5 (Пыль/сажа)'}</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.pm25} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className={`text-[10px] font-semibold mt-1 inline-block ${currentCity.pm25 <= 15 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {currentCity.pm25 <= 15 ? (isEn ? 'WHO Compliant' : 'В норме ВОЗ') : (isEn ? 'Exceeds Guideline' : 'Превышение нормы')}
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">{isEn ? 'PM10 (Coarse)' : 'PM10 (Крупная пыль)'}</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.pm10} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">{isEn ? 'Road / Soil Dust' : 'Взвеси дорог/почвы'}</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">NO₂</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.airPollutants?.no2 ?? 14} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">{isEn ? 'Traffic emissions' : 'Автотранспорт'}</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">O₃</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.airPollutants?.o3 ?? 45} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">{isEn ? 'Surface ozone' : 'Приземный озон'}</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">SO₂</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.airPollutants?.so2 ?? 3.5} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">{isEn ? 'Industrial / Power' : 'Промышленность/ТЭЦ'}</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">CO</span>
              <div className="text-xl font-black text-slate-800 mt-1">
                {currentCity.airPollutants?.co ?? 260} <span className="text-xs font-normal text-slate-500">µg/m³</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">{isEn ? 'Carbon monoxide' : 'Угарный газ'}</span>
            </div>
          </div>
        )}

        {/* Tab 4: Local Recycling Points */}
        {activeTab === 'recycling' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-in fade-in duration-200">
            {currentCity.localRecyclingPoints.length > 0 ? (
              currentCity.localRecyclingPoints.map((point) => (
                <div
                  key={point.id}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 hover:bg-white transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{isEn ? (point.nameEn || point.name) : point.name}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{isEn ? (point.addressEn || point.address) : point.address} ({point.distanceKm} {isEn ? 'km' : 'км'})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-200 shrink-0">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{point.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600 mt-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{isEn ? (point.workingHoursEn || point.workingHours) : point.workingHours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {(isEn && point.acceptedTypesEn ? point.acceptedTypesEn : point.acceptedTypes).map((type, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-6 text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                {t.cityWidget.noRecyclingData}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
