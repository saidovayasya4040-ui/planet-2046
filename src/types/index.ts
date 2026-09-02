export interface CityData {
  id: string;
  name: string;
  nameEn?: string;
  country: string;
  countryEn?: string;
  region?: string;
  regionEn?: string;
  coordinates: [number, number]; // [lat, lng]
  ecoIndex: number; // 0 - 100
  indexStatus: 'Отлично' | 'Хорошо' | 'Умеренно' | 'Низкий' | 'Критично';
  aqi: number;
  pm25: number;
  pm10: number;
  waterQuality: number; // 0-100%
  recyclingRate: number; // %
  greeneryLevel: number; // %
  summary: string;
  summaryEn?: string;
  isLiveFetched?: boolean;
  sourceAttribution?: string;
  airPollutants?: {
    pm25: number;
    pm10: number;
    no2?: number;
    o3?: number;
    so2?: number;
    co?: number;
  };
  weather?: {
    temp: number;
    humidity: number;
    windSpeed?: number;
  };
  topProblems: {
    title: string;
    description: string;
    severity: 'high' | 'medium' | 'critical';
    impact: string;
    titleEn?: string;
    descriptionEn?: string;
    impactEn?: string;
  }[];
  forecast2046: {
    optimistic: {
      tempChange: string;
      airQuality: string;
      renewableShare: string;
      greenZones: string;
      description: string;
      airQualityEn?: string;
      renewableShareEn?: string;
      greenZonesEn?: string;
      descriptionEn?: string;
    };
    negative: {
      tempChange: string;
      airQuality: string;
      heatwavesDays: string;
      waterDeficit: string;
      description: string;
      airQualityEn?: string;
      heatwavesDaysEn?: string;
      waterDeficitEn?: string;
      descriptionEn?: string;
    };
  };
  localRecyclingPoints: {
    id: string;
    name: string;
    address: string;
    workingHours: string;
    acceptedTypes: string[];
    distanceKm: number;
    rating: number;
    nameEn?: string;
    addressEn?: string;
    workingHoursEn?: string;
    acceptedTypesEn?: string[];
  }[];
}

export interface GeocodingResult {
  placeId: string;
  name: string;
  country: string;
  displayName: string;
  coordinates: [number, number];
  type: string;
}

export interface MapPoint {
  id: string;
  cityId: string;
  title: string;
  titleEn?: string;
  type: 'problem' | 'recycling';
  category: 'dump' | 'emissions' | 'water_pollution' | 'plastic' | 'batteries' | 'clothes' | 'general_recycle' | 'hazardous';
  categoryLabel: string;
  categoryLabelEn?: string;
  coordinates: [number, number];
  address: string;
  addressEn?: string;
  description: string;
  descriptionEn?: string;
  imageUrl?: string;
  status: 'verified' | 'pending' | 'resolved';
  createdAt: string;
  authorName?: string;
  votesCount: number;
}

export interface QuizQuestion {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    co2KgYear: number;
    points: number; // 1 (best) to 4 (worst)
    tip: string;
  }[];
}

export interface QuizResult {
  totalCo2Kg: number;
  score: number;
  category: 'Хранитель Планеты' | 'Умеренный потребитель' | 'Индустриальный гигант';
  categoryDescription: string;
  comparisonWithAverage: string; // e.g. "На 35% ниже среднего по региону"
  checklists: {
    level: 'Легкий старт' | 'Средний уровень' | 'Продвинутый уровень';
    items: {
      id: string;
      title: string;
      impact: string;
      completed: boolean;
    }[];
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: string[];
}

export interface EcoArticle {
  id: string;
  categoryBadge: string;
  categoryBadgeEn?: string;
  categorySlug: 'all' | 'oceans' | 'cities' | 'habits' | 'energy' | 'wildlife' | 'forests';
  title: string;
  titleEn?: string;
  lead: string;
  leadEn?: string;
  readTime: string;
  readTimeEn?: string;
  publishedDate: string;
  publishedDateEn?: string;
  author: string;
  authorEn?: string;
  tags: string[];
  tagsEn?: string[];
  keyFact: string;
  keyFactEn?: string;
  contentHtml: string;
  contentHtmlEn?: string;
  actionCallout: string;
  actionCalloutEn?: string;
  chatPrompt: string;
  chatPromptEn?: string;
}
