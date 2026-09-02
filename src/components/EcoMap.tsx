import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Layers, Plus, Filter, AlertTriangle, Recycle, 
  MapPin, CheckCircle, ThumbsUp, Sparkles, Navigation, Info 
} from 'lucide-react';
import { MapPoint, CityData } from '../types';
import { AddPointModal } from './AddPointModal';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface EcoMapProps {
  currentCity: CityData;
  points: MapPoint[];
  onAddPoint: (point: MapPoint) => void;
  onAskAiAboutLocation: (pointTitle: string, address: string) => void;
}

export const EcoMap: React.FC<EcoMapProps> = ({
  currentCity,
  points,
  onAddPoint,
  onAskAiAboutLocation,
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [votedPoints, setVotedPoints] = useState<Record<string, boolean>>({});

  // Filter points based on city and active category, or match within 35km radius
  const cityPoints = points.filter(p => {
    if (p.cityId === currentCity.id || p.id.startsWith('pt-custom')) return true;
    const dist = Math.hypot(p.coordinates[0] - currentCity.coordinates[0], p.coordinates[1] - currentCity.coordinates[1]);
    return dist < 0.35; // ~35km radius
  });
  
  const filteredPoints = cityPoints.filter(p => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'problem') return p.type === 'problem';
    if (selectedCategory === 'recycling') return p.type === 'recycling';
    if (selectedCategory === 'plastic') return p.category === 'plastic';
    if (selectedCategory === 'batteries') return p.category === 'batteries';
    if (selectedCategory === 'clothes') return p.category === 'clothes';
    return true;
  });

  // Handle support/vote for a point
  const handleVote = (pointId: string) => {
    if (votedPoints[pointId]) return;
    setVotedPoints(prev => ({ ...prev, [pointId]: true }));
    const target = points.find(p => p.id === pointId);
    if (target) {
      target.votesCount += 1;
    }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map
      const map = L.map(mapContainerRef.current, {
        center: currentCity.coordinates,
        zoom: 12,
        zoomControl: false,
        attributionControl: false
      });

      // Dark theme map tiles (CartoDB Dark Matter)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      // Add custom zoom control in top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
      markersLayerRef.current = L.layerGroup().addTo(map);
    } else {
      // Pan to new city coordinates
      mapInstanceRef.current.flyTo(currentCity.coordinates, 12, { duration: 1.2 });
    }
  }, [currentCity]);

  // Update Markers on filter/points change
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    filteredPoints.forEach(point => {
      // Create custom HTML icon
      const isProblem = point.type === 'problem';
      const iconHtml = `
        <div class="relative cursor-pointer transition-transform hover:scale-125" style="transform: translate(-50%, -50%);">
          <div class="w-8 h-8 rounded-2xl flex items-center justify-center shadow-xl border-2 ${
            isProblem 
              ? 'bg-rose-600 border-white text-white shadow-rose-600/50 animate-pulse' 
              : 'bg-emerald-600 border-teal-300 text-white shadow-teal-500/50'
          }">
            <span style="font-size: 14px;">${isProblem ? '⚠️' : '♻️'}</span>
          </div>
          <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
            isProblem ? 'bg-rose-600' : 'bg-emerald-500'
          }"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-eco-marker',
        html: iconHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const marker = L.marker(point.coordinates, { icon: customIcon });

      marker.on('click', () => {
        setSelectedPoint(point);
      });

      markersLayerRef.current?.addLayer(marker);
    });
  }, [filteredPoints]);

  const cityNameDisplay = isEn ? (currentCity.nameEn || currentCity.name) : currentCity.name;

  return (
    <section id="eco-map" className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 text-white mb-8 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#2DD4BF 0.8px, transparent 0.8px)', backgroundSize: '16px 16px' }}
      />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-teal-400 text-xs font-black uppercase tracking-widest mb-1">
            <Layers className="w-3.5 h-3.5" />
            {isEn ? 'Interactive GIS Map • PostGIS / Leaflet Engine' : 'Интерактивная ГИС-карта • PostGIS / Leaflet Engine'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            {t.map.title}: {cityNameDisplay}
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            {t.map.subtitle}
          </p>
        </div>

        {/* Action button to add a point */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-teal-400 hover:bg-teal-300 text-emerald-950 px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide transition-all shadow-md shadow-teal-400/20 hover:shadow-teal-400/35 cursor-pointer flex items-center gap-2"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            {t.map.addPointBtn}
          </button>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Filter className="w-3 h-3 text-teal-400" /> {isEn ? 'Filter:' : 'Фильтр:'}
        </span>

        {[
          { id: 'all', label: `${t.map.filters.all} (${cityPoints.length})` },
          { id: 'problem', label: `⚠️ ${t.map.filters.problem} (${cityPoints.filter(p => p.type === 'problem').length})` },
          { id: 'recycling', label: `♻️ ${t.map.filters.recycling} (${cityPoints.filter(p => p.type === 'recycling').length})` },
          { id: 'plastic', label: t.map.filters.plastic },
          { id: 'batteries', label: t.map.filters.batteries },
          { id: 'clothes', label: t.map.filters.clothes }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-teal-400 text-emerald-950 font-black shadow-sm shadow-teal-400/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Map + Detail Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Map Canvas (8 cols on lg) */}
        <div className="lg:col-span-8 h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-700/80 relative shadow-inner">
          <div ref={mapContainerRef} className="w-full h-full" />
          
          {/* Floating Map Legend */}
          <div className="absolute bottom-3 left-3 z-[1000] bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700 text-[10px] space-y-1">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span>{isEn ? 'Eco-threat / Dumping' : 'Эко-угроза / Свалка'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              <span>{isEn ? 'Recycling / Eco-point' : 'Вторсырье / Экопункт'}</span>
            </div>
          </div>
        </div>

        {/* Selected Point Info Card / Default Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
          {selectedPoint ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                  selectedPoint.type === 'problem'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                }`}>
                  {isEn ? (selectedPoint.categoryLabelEn || selectedPoint.categoryLabel) : selectedPoint.categoryLabel}
                </span>
                <span className="text-[10px] text-slate-400">
                  {selectedPoint.createdAt}
                </span>
              </div>

              <h3 className="text-base font-black text-white leading-tight">
                {isEn ? (selectedPoint.titleEn || selectedPoint.title) : selectedPoint.title}
              </h3>

              <div className="flex items-start gap-1.5 text-xs text-teal-300">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{isEn ? (selectedPoint.addressEn || selectedPoint.address) : selectedPoint.address}</span>
              </div>

              {selectedPoint.imageUrl && (
                <div className="rounded-xl overflow-hidden h-32 w-full border border-slate-700">
                  <img
                    src={selectedPoint.imageUrl}
                    alt={isEn ? (selectedPoint.titleEn || selectedPoint.title) : selectedPoint.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                {isEn ? (selectedPoint.descriptionEn || selectedPoint.description) : selectedPoint.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>{isEn ? 'Author:' : 'Автор:'} <strong className="text-slate-200">{selectedPoint.authorName || (isEn ? 'Eco-Patrol' : 'Эко-патруль')}</strong></span>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-teal-400 font-mono text-[10px]">
                  {selectedPoint.status === 'verified' ? (isEn ? '✓ Verified' : '✓ Проверено') : (isEn ? '⏳ In moderation' : '⏳ На модерации')}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => handleVote(selectedPoint.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    votedPoints[selectedPoint.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{selectedPoint.votesCount} {votedPoints[selectedPoint.id] ? (isEn ? 'Supported' : 'Поддержано') : (isEn ? 'Support' : 'Поддержать')}</span>
                </button>

                <button
                  onClick={() => onAskAiAboutLocation(selectedPoint.title, selectedPoint.address)}
                  className="py-2 px-3 rounded-xl text-xs font-bold bg-teal-400 hover:bg-teal-300 text-emerald-950 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Ask Eco-Friend' : 'Спросить Эко-Друга'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-slate-400">
              <div className="w-12 h-12 rounded-2xl bg-slate-700/50 text-teal-400 flex items-center justify-center mb-3">
                <Navigation className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{isEn ? 'Object Details' : 'Детали объекта'}</h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                {isEn ? 'Click any marker on the map to view verified photos, telemetry and coordinates.' : 'Нажмите на любую метку на карте, чтобы открыть подробности, фото и координаты.'}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700 w-full text-left space-y-2 text-xs">
                <div className="text-[10px] font-bold uppercase text-slate-500">{isEn ? 'City Summary' : 'Сводка по городу'}</div>
                <div className="flex justify-between">
                  <span>{isEn ? 'Active Incidents' : 'Активные инциденты'}:</span>
                  <span className="text-rose-400 font-bold">
                    {cityPoints.filter(p => p.type === 'problem').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{isEn ? 'Recycling Points' : 'Пункты приема'}:</span>
                  <span className="text-teal-400 font-bold">
                    {cityPoints.filter(p => p.type === 'recycling').length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Add Point */}
      <AddPointModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        currentCity={currentCity}
        onAddPoint={(newPt) => {
          onAddPoint(newPt);
          setSelectedPoint(newPt);
        }}
      />
    </section>
  );
};
