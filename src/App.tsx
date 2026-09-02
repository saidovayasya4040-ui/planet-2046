import React, { useState } from 'react';
import { CITIES_DATA } from './data/citiesData';
import { INITIAL_MAP_POINTS } from './data/mapPointsData';
import { CityData, GeocodingResult, MapPoint, QuizResult } from './types';
import { getCityEcoData } from './services/ecoService';
import { useLanguage } from './i18n/LanguageContext';

import { Header } from './components/Header';
import { HeroSplitSlider } from './components/HeroSplitSlider';
import { CityWidget } from './components/CityWidget';
import { EcoMap } from './components/EcoMap';
import { EcoQuiz } from './components/EcoQuiz';
import { EcoArticlesSection } from './components/EcoArticlesSection';
import { EcoGuideChat } from './components/EcoGuideChat';
import { KnowledgeBaseModal } from './components/KnowledgeBaseModal';
import { Footer } from './components/Footer';

export default function App() {
  const { isEn } = useLanguage();
  const [currentCity, setCurrentCity] = useState<CityData>(CITIES_DATA[0]);
  const [allLoadedCities, setAllLoadedCities] = useState<CityData[]>(CITIES_DATA);
  const [isLoadingCity, setIsLoadingCity] = useState<boolean>(false);
  const [mapPoints, setMapPoints] = useState<MapPoint[]>(INITIAL_MAP_POINTS);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isKnowledgeBaseOpen, setIsKnowledgeBaseOpen] = useState(false);
  const [chatExternalPrompt, setChatExternalPrompt] = useState<string | null>(null);

  // Handle Geocoded Location Selection from Header, Search, or Auto-detect
  const handleSelectGeoLocation = async (geo: GeocodingResult) => {
    setIsLoadingCity(true);
    try {
      const fullCityData = await getCityEcoData(geo);
      setCurrentCity(fullCityData);

      // Add to loaded cities cache if not already in list
      setAllLoadedCities(prev => {
        if (prev.some(c => c.id === fullCityData.id || c.name.toLowerCase() === fullCityData.name.toLowerCase())) {
          return prev.map(c => c.name.toLowerCase() === fullCityData.name.toLowerCase() ? fullCityData : c);
        }
        return [fullCityData, ...prev];
      });

      // Generate local map markers around the new coordinates if not already present
      const [lat, lon] = fullCityData.coordinates;
      const newCityMapPoints: MapPoint[] = fullCityData.localRecyclingPoints.map((recPoint, idx) => ({
        id: `map-${fullCityData.id}-rec-${idx}`,
        cityId: fullCityData.id,
        title: recPoint.name,
        type: 'recycling',
        category: 'general_recycle',
        categoryLabel: '♻️ Пункт раздельного сбора',
        coordinates: [lat + (Math.sin(idx * 2) * 0.015), lon + (Math.cos(idx * 2) * 0.02)],
        address: recPoint.address,
        description: `Прием: ${recPoint.acceptedTypes.join(', ')}. График: ${recPoint.workingHours}`,
        status: 'verified',
        createdAt: '2026-04-12',
        authorName: 'Эко-Навигатор',
        votesCount: Math.floor(18 + Math.random() * 45)
      }));

      // Add one sample local environmental hazard/monitoring point
      newCityMapPoints.push({
        id: `map-${fullCityData.id}-prob-1`,
        cityId: fullCityData.id,
        title: fullCityData.topProblems[0]?.title || 'Зона повышенного смога',
        type: 'problem',
        category: 'emissions',
        categoryLabel: '⚠️ Локальный риск',
        coordinates: [lat + 0.012, lon - 0.015],
        address: `Промзона / Транспортный узел, ${fullCityData.name}`,
        description: fullCityData.topProblems[0]?.description || 'Локальная концентрация выхлопных газов.',
        status: 'verified',
        createdAt: '2026-04-10',
        authorName: 'Эко-Патруль Евразии',
        votesCount: Math.floor(30 + Math.random() * 50)
      });

      setMapPoints(prev => [...newCityMapPoints, ...prev]);
    } catch (err) {
      console.error('Failed to load dynamic city eco data:', err);
    } finally {
      setIsLoadingCity(false);
    }
  };

  const handleAddMapPoint = (newPoint: MapPoint) => {
    setMapPoints(prev => [newPoint, ...prev]);
  };

  const cityName = isEn && currentCity.nameEn ? currentCity.nameEn : currentCity.name;
  const countryName = isEn && currentCity.countryEn ? currentCity.countryEn : currentCity.country;

  const handleAskAiAboutCity = (topic: string) => {
    if (isEn) {
      setChatExternalPrompt(`Tell me more about "${topic}" in ${cityName} (${countryName}) and what actionable solutions residents and municipal services can take.`);
    } else {
      setChatExternalPrompt(`Расскажи подробнее про "${topic}" в регионе ${currentCity.name} (${currentCity.country}) и как жители и экологические службы могут решить эту проблему.`);
    }
    const chatEl = document.getElementById('ecoguide-chat');
    chatEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAskAiAboutLocation = (pointTitle: string, address: string) => {
    if (isEn) {
      setChatExternalPrompt(`Tell me more about the site "${pointTitle}" located at ${address} in ${cityName}. What ecological impact does it have and what measures should be taken?`);
    } else {
      setChatExternalPrompt(`Расскажи подробнее про объект "${pointTitle}" по адресу ${address} в городе ${currentCity.name}. Какое влияние он оказывает на окружающую среду и какие меры нужно принять?`);
    }
    const chatEl = document.getElementById('ecoguide-chat');
    chatEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendQuizToChat = (result: QuizResult) => {
    if (isEn) {
      setChatExternalPrompt(`My eco-profile based on the quiz is "${result.category}", annual footprint ${(result.totalCo2Kg / 1000).toFixed(2)} tonnes CO2 in ${cityName}. Help me craft a personalized 6-month step-by-step roadmap to reduce my footprint by 30%.`);
    } else {
      setChatExternalPrompt(`Мой профиль по результатам теста: "${result.category}", углеродный след ${(result.totalCo2Kg / 1000).toFixed(2)} тонн CO2 в год в городе ${currentCity.name}. Помоги мне составить персональный пошаговый план по снижению следа на 30% за 6 месяцев.`);
    }
    const chatEl = document.getElementById('ecoguide-chat');
    chatEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAskAiAboutArticle = (prompt: string) => {
    setChatExternalPrompt(prompt);
    const chatEl = document.getElementById('ecoguide-chat');
    chatEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToQuiz = () => {
    const quizEl = document.getElementById('eco-quiz');
    quizEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToArticles = () => {
    const articlesEl = document.getElementById('eco-articles');
    articlesEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Navbar */}
      <Header
        currentCity={currentCity}
        allCities={allLoadedCities}
        isLoadingCity={isLoadingCity}
        onSelectCity={setCurrentCity}
        onSelectGeoLocation={handleSelectGeoLocation}
        onOpenQuiz={handleScrollToQuiz}
        onOpenArticles={handleScrollToArticles}
        onOpenKnowledgeBase={() => setIsKnowledgeBaseOpen(true)}
        onOpenChat={() => {
          const chatEl = document.getElementById('ecoguide-chat');
          chatEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Layout Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 space-y-2">
        {/* 1. Hero Two-Mode Split Slider */}
        <HeroSplitSlider
          currentCity={currentCity}
          onOpenQuiz={handleScrollToQuiz}
        />

        {/* 2. City Eco-Profile Widget with Live Eurasia Geocoding & Telemetry */}
        <CityWidget
          currentCity={currentCity}
          allCities={allLoadedCities}
          isLoadingCity={isLoadingCity}
          onSelectCity={setCurrentCity}
          onSelectGeoLocation={handleSelectGeoLocation}
          onAskAiAboutCity={handleAskAiAboutCity}
        />

        {/* 3. Interactive Leaflet Eco Map */}
        <EcoMap
          currentCity={currentCity}
          points={mapPoints}
          onAddPoint={handleAddMapPoint}
          onAskAiAboutLocation={handleAskAiAboutLocation}
        />

        {/* 4. Eco Articles & Climate Journalism Section */}
        <EcoArticlesSection
          onAskAiAboutArticle={handleAskAiAboutArticle}
        />

        {/* 5. Mini Carbon Footprint Quiz */}
        <EcoQuiz
          onCompleteQuiz={setQuizResult}
          onSendToChat={handleSendQuizToChat}
        />

        {/* 6. EcoGuide AI Assistant */}
        <EcoGuideChat
          currentCity={currentCity}
          quizResult={quizResult}
          externalPrompt={chatExternalPrompt}
          onClearExternalPrompt={() => setChatExternalPrompt(null)}
        />
      </main>

      {/* Footer & Global Climate Ticker */}
      <Footer />

      {/* Modal: Knowledge Base & Recycling Codes */}
      <KnowledgeBaseModal
        isOpen={isKnowledgeBaseOpen}
        onClose={() => setIsKnowledgeBaseOpen(false)}
      />
    </div>
  );
}
