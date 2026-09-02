import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, AlertTriangle, Leaf, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { CityData } from '../types';
import greenCityImg from '../assets/images/green_eco_city_1787894103541.jpg';
import climateChaosImg from '../assets/images/climate_chaos_city_1787894082372.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroSplitSliderProps {
  currentCity: CityData;
  onOpenQuiz: () => void;
}

export const HeroSplitSlider: React.FC<HeroSplitSliderProps> = ({ currentCity, onOpenQuiz }) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cityName = isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name;
  const optDesc = isEn ? (currentCity.forecast2046.optimistic.descriptionEn || currentCity.forecast2046.optimistic.description) : currentCity.forecast2046.optimistic.description;
  const optRenew = isEn ? (currentCity.forecast2046.optimistic.renewableShareEn || currentCity.forecast2046.optimistic.renewableShare) : currentCity.forecast2046.optimistic.renewableShare;
  const optAir = isEn ? (currentCity.forecast2046.optimistic.airQualityEn || currentCity.forecast2046.optimistic.airQuality) : currentCity.forecast2046.optimistic.airQuality;

  const negDesc = isEn ? (currentCity.forecast2046.negative.descriptionEn || currentCity.forecast2046.negative.description) : currentCity.forecast2046.negative.description;
  const negHeat = isEn ? (currentCity.forecast2046.negative.heatwavesDaysEn || currentCity.forecast2046.negative.heatwavesDays) : currentCity.forecast2046.negative.heatwavesDays;
  const negWater = isEn ? (currentCity.forecast2046.negative.waterDeficitEn || currentCity.forecast2046.negative.waterDeficit) : currentCity.forecast2046.negative.waterDeficit;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="scenarios" className="w-full mb-8">
      {/* Top Banner Intro */}
      <div className="text-center max-w-3xl mx-auto mb-6 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          {t.hero.planningHorizon}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase mb-3">
          {t.hero.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t.hero.description} <span className="font-bold text-emerald-800">{cityName}</span>.
        </p>
      </div>

      {/* Hero Interactive Split Canvas */}
      <div
        ref={containerRef}
        id="hero-split-slider-container"
        className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 select-none bg-slate-950 cursor-ew-resize group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Left Side: OPTIMISTIC SCENARIO */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          {/* Background image & gradient overlay */}
          <img
            src={greenCityImg}
            alt="Optimistic Green City 2046"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#022c22]/85 via-[#064e3b]/40 to-transparent mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none" />

          {/* Left Content */}
          <div className="absolute top-6 left-6 sm:left-10 z-20 max-w-sm sm:max-w-md">
            <div className="inline-flex items-center gap-2 bg-teal-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-lg">
              <Leaf className="w-3.5 h-3.5 text-emerald-950" />
              {t.hero.optimisticBadge}
            </div>
            <h2 className="text-white text-2xl sm:text-4xl font-black leading-tight uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {t.hero.optimisticTitle}
            </h2>
            <p className="text-teal-50 text-xs sm:text-sm mt-2 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-relaxed hidden sm:block bg-emerald-950/60 backdrop-blur-xs p-2.5 rounded-xl border border-teal-400/30">
              {optDesc}
            </p>

            {/* Optimistic Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="bg-emerald-950/85 backdrop-blur-md border border-teal-400/50 p-2.5 rounded-xl text-white shadow-lg">
                <span className="block text-[10px] text-teal-300 font-bold uppercase">{t.hero.optimisticEnergy}</span>
                <span className="text-xs sm:text-sm font-black text-teal-300">
                  {optRenew}
                </span>
              </div>
              <div className="bg-emerald-950/85 backdrop-blur-md border border-teal-400/50 p-2.5 rounded-xl text-white shadow-lg">
                <span className="block text-[10px] text-teal-300 font-bold uppercase">{t.hero.optimisticAir}</span>
                <span className="text-xs sm:text-sm font-black text-emerald-300">
                  {optAir}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: NEGATIVE SCENARIO */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          {/* Background image & gradient overlay */}
          <img
            src={climateChaosImg}
            alt="Climate Chaos 2046"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#1c0a00]/90 via-[#451a03]/45 to-transparent mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-orange-950/20 pointer-events-none" />

          {/* Right Content */}
          <div className="absolute top-6 right-6 sm:right-10 text-right z-20 max-w-sm sm:max-w-md">
            <div className="inline-flex items-center gap-2 bg-rose-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-lg ml-auto">
              <AlertTriangle className="w-3.5 h-3.5 text-white" />
              {t.hero.negativeBadge}
            </div>
            <h2 className="text-white text-2xl sm:text-4xl font-black leading-tight uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {t.hero.negativeTitle}
            </h2>
            <p className="text-amber-50 text-xs sm:text-sm mt-2 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-relaxed hidden sm:block bg-slate-950/70 backdrop-blur-xs p-2.5 rounded-xl border border-orange-500/30 text-left">
              {negDesc}
            </p>

            {/* Negative Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 mt-4 text-left">
              <div className="bg-slate-950/85 backdrop-blur-md border border-orange-500/50 p-2.5 rounded-xl text-white shadow-lg">
                <span className="block text-[10px] text-orange-300 font-bold uppercase">{t.hero.negativeHeat}</span>
                <span className="text-xs sm:text-sm font-black text-amber-400">
                  {negHeat}
                </span>
              </div>
              <div className="bg-slate-950/85 backdrop-blur-md border border-orange-500/50 p-2.5 rounded-xl text-white shadow-lg">
                <span className="block text-[10px] text-orange-300 font-bold uppercase">{t.hero.negativeWater}</span>
                <span className="text-xs sm:text-sm font-black text-rose-400">
                  {negWater}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Floating Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical Glowing Line */}
          <div className="w-1 h-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]" />

          {/* Interactive Drag Pill Handle */}
          <div className="absolute w-12 h-12 bg-white rounded-full shadow-2xl border-2 border-teal-400 flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110 active:scale-95">
            <SlidersHorizontal className="w-5 h-5 text-emerald-950 stroke-[2.5]" />
          </div>
        </div>

        {/* Bottom Centered Floating Action Banner */}
        <div className="absolute bottom-6 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-30 pointer-events-auto">
          <div className="bg-slate-950/85 backdrop-blur-xl px-6 py-3.5 rounded-2xl border border-white/20 shadow-2xl flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="text-left hidden md:block">
              <div className="text-white text-xs font-black uppercase tracking-wider">
                {t.hero.bottomBannerTitle}
              </div>
              <div className="text-teal-300 text-[11px]">
                {t.hero.bottomBannerSubtitle}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#city-widget"
                className="bg-teal-400 hover:bg-teal-300 text-emerald-950 font-black text-xs uppercase px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                {t.hero.checkCityBtn}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenQuiz}
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl border border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                {t.hero.takeQuizBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
