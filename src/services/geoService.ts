import { GeocodingResult } from '../types';

// Curated list of prominent world cities across all continents for instant zero-latency suggestions
export const POPULAR_GLOBAL_CITIES: GeocodingResult[] = [
  // Europe & CIS
  { placeId: 'gl-mow', name: 'Москва', country: 'Россия', displayName: 'Москва, Россия', coordinates: [55.7558, 37.6173], type: 'city' },
  { placeId: 'gl-spb', name: 'Санкт-Петербург', country: 'Россия', displayName: 'Санкт-Петербург, Россия', coordinates: [59.9343, 30.3351], type: 'city' },
  { placeId: 'gl-lon', name: 'Лондон', country: 'Великобритания', displayName: 'Лондон, Великобритания', coordinates: [51.5074, -0.1278], type: 'city' },
  { placeId: 'gl-par', name: 'Париж', country: 'Франция', displayName: 'Париж, Франция', coordinates: [48.8566, 2.3522], type: 'city' },
  { placeId: 'gl-ber', name: 'Берлин', country: 'Германия', displayName: 'Берлин, Германия', coordinates: [52.5200, 13.4050], type: 'city' },
  { placeId: 'gl-rom', name: 'Рим', country: 'Италия', displayName: 'Рим, Италия', coordinates: [41.9028, 12.4964], type: 'city' },
  { placeId: 'gl-mad', name: 'Мадрид', country: 'Испания', displayName: 'Мадрид, Испания', coordinates: [40.4168, -3.7038], type: 'city' },
  { placeId: 'gl-ams', name: 'Амстердам', country: 'Нидерланды', displayName: 'Амстердам, Нидерланды', coordinates: [52.3676, 4.9041], type: 'city' },
  { placeId: 'gl-kzn', name: 'Казань', country: 'Россия', displayName: 'Казань, Татарстан, Россия', coordinates: [55.7887, 49.1221], type: 'city' },
  { placeId: 'gl-ekb', name: 'Екатеринбург', country: 'Россия', displayName: 'Екатеринбург, Россия', coordinates: [56.8389, 60.6057], type: 'city' },
  { placeId: 'gl-nsk', name: 'Новосибирск', country: 'Россия', displayName: 'Новосибирск, Россия', coordinates: [55.0084, 82.9357], type: 'city' },
  { placeId: 'gl-vvo', name: 'Владивосток', country: 'Россия', displayName: 'Владивосток, Россия', coordinates: [43.1155, 131.8855], type: 'city' },
  { placeId: 'gl-mns', name: 'Минск', country: 'Беларусь', displayName: 'Минск, Беларусь', coordinates: [53.9006, 27.5590], type: 'city' },

  // Asia & Middle East
  { placeId: 'gl-alm', name: 'Алматы', country: 'Казахстан', displayName: 'Алматы, Казахстан', coordinates: [43.2389, 76.8897], type: 'city' },
  { placeId: 'gl-ast', name: 'Астана', country: 'Казахстан', displayName: 'Астана, Казахстан', coordinates: [51.1694, 71.4491], type: 'city' },
  { placeId: 'gl-tas', name: 'Ташкент', country: 'Узбекистан', displayName: 'Ташкент, Узбекистан', coordinates: [41.2995, 69.2401], type: 'city' },
  { placeId: 'gl-tok', name: 'Токио', country: 'Япония', displayName: 'Токио, Япония', coordinates: [35.6762, 139.6503], type: 'city' },
  { placeId: 'gl-pek', name: 'Пекин', country: 'Китай', displayName: 'Пекин, Китай', coordinates: [39.9042, 116.4074], type: 'city' },
  { placeId: 'gl-shg', name: 'Шанхай', country: 'Китай', displayName: 'Шанхай, Китай', coordinates: [31.2304, 121.4737], type: 'city' },
  { placeId: 'gl-seo', name: 'Сеул', country: 'Южная Корея', displayName: 'Сеул, Южная Корея', coordinates: [37.5665, 126.9780], type: 'city' },
  { placeId: 'gl-del', name: 'Дели', country: 'Индия', displayName: 'Нью-Дели, Индия', coordinates: [28.6139, 77.2090], type: 'city' },
  { placeId: 'gl-dxb', name: 'Дубай', country: 'ОАЭ', displayName: 'Дубай, ОАЭ', coordinates: [25.2048, 55.2708], type: 'city' },
  { placeId: 'gl-bkk', name: 'Бангкок', country: 'Таиланд', displayName: 'Бангкок, Таиланд', coordinates: [13.7563, 100.5018], type: 'city' },
  { placeId: 'gl-sin', name: 'Сингапур', country: 'Сингапур', displayName: 'Сингапур', coordinates: [1.3521, 103.8198], type: 'city' },
  { placeId: 'gl-ist', name: 'Стамбул', country: 'Турция', displayName: 'Стамбул, Турция', coordinates: [41.0082, 28.9784], type: 'city' },
  { placeId: 'gl-tbs', name: 'Тбилиси', country: 'Грузия', displayName: 'Тбилиси, Грузия', coordinates: [41.7151, 44.8271], type: 'city' },
  { placeId: 'gl-yvn', name: 'Ереван', country: 'Армения', displayName: 'Ереван, Армения', coordinates: [40.1792, 44.4991], type: 'city' },
  { placeId: 'gl-bak', name: 'Баку', country: 'Азербайджан', displayName: 'Баку, Азербайджан', coordinates: [40.4093, 49.8671], type: 'city' },

  // North America
  { placeId: 'gl-nyc', name: 'Нью-Йорк', country: 'США', displayName: 'Нью-Йорк, США', coordinates: [40.7128, -74.0060], type: 'city' },
  { placeId: 'gl-lax', name: 'Лос-Анджелес', country: 'США', displayName: 'Лос-Анджелес, Калифорния, США', coordinates: [34.0522, -118.2437], type: 'city' },
  { placeId: 'gl-chi', name: 'Чикаго', country: 'США', displayName: 'Чикаго, Иллинойс, США', coordinates: [41.8781, -87.6298], type: 'city' },
  { placeId: 'gl-sfo', name: 'Сан-Франциско', country: 'США', displayName: 'Сан-Франциско, Калифорния, США', coordinates: [37.7749, -122.4194], type: 'city' },
  { placeId: 'gl-tor', name: 'Торонто', country: 'Канада', displayName: 'Торонто, Онтарио, Канада', coordinates: [43.6532, -79.3832], type: 'city' },
  { placeId: 'gl-van', name: 'Ванкувер', country: 'Канада', displayName: 'Ванкувер, Британская Колумбия, Канада', coordinates: [49.2827, -123.1207], type: 'city' },
  { placeId: 'gl-mex', name: 'Мехико', country: 'Мексика', displayName: 'Мехико, Мексика', coordinates: [19.4326, -99.1332], type: 'city' },

  // South America
  { placeId: 'gl-sao', name: 'Сан-Паулу', country: 'Бразилия', displayName: 'Сан-Паулу, Бразилия', coordinates: [-23.5505, -46.6333], type: 'city' },
  { placeId: 'gl-rio', name: 'Рио-де-Жанейро', country: 'Бразилия', displayName: 'Рио-де-Жанейро, Бразилия', coordinates: [-22.9068, -43.1729], type: 'city' },
  { placeId: 'gl-bue', name: 'Буэнос-Айрес', country: 'Аргентина', displayName: 'Буэнос-Айрес, Аргентина', coordinates: [-34.6037, -58.3816], type: 'city' },
  { placeId: 'gl-san', name: 'Сантьяго', country: 'Чили', displayName: 'Сантьяго, Чили', coordinates: [-33.4489, -70.6693], type: 'city' },
  { placeId: 'gl-bog', name: 'Богота', country: 'Колумбия', displayName: 'Богота, Колумбия', coordinates: [4.7110, -74.0721], type: 'city' },
  { placeId: 'gl-lim', name: 'Лима', country: 'Перу', displayName: 'Лима, Перу', coordinates: [-12.0464, -77.0428], type: 'city' },

  // Africa
  { placeId: 'gl-cai', name: 'Каир', country: 'Египет', displayName: 'Каир, Египет', coordinates: [30.0444, 31.2357], type: 'city' },
  { placeId: 'gl-jnb', name: 'Йоханнесбург', country: 'ЮАР', displayName: 'Йоханнесбург, ЮАР', coordinates: [-26.2041, 28.0473], type: 'city' },
  { placeId: 'gl-cpt', name: 'Кейптаун', country: 'ЮАР', displayName: 'Кейптаун, ЮАР', coordinates: [-33.9249, 18.4241], type: 'city' },
  { placeId: 'gl-nbi', name: 'Найроби', country: 'Кения', displayName: 'Найроби, Кения', coordinates: [-1.2921, 36.8219], type: 'city' },
  { placeId: 'gl-lag', name: 'Лагос', country: 'Нигерия', displayName: 'Лагос, Нигерия', coordinates: [6.5244, 3.3792], type: 'city' },
  { placeId: 'gl-cas', name: 'Касабланка', country: 'Марокко', displayName: 'Касабланка, Марокко', coordinates: [33.5731, -7.5898], type: 'city' },

  // Oceania / Australia
  { placeId: 'gl-syd', name: 'Сидней', country: 'Австралия', displayName: 'Сидней, Австралия', coordinates: [-33.8688, 151.2093], type: 'city' },
  { placeId: 'gl-mel', name: 'Мельбурн', country: 'Австралия', displayName: 'Мельбурн, Австралия', coordinates: [-37.8136, 144.9631], type: 'city' },
  { placeId: 'gl-akl', name: 'Окленд', country: 'Новая Зеландия', displayName: 'Окленд, Новая Зеландия', coordinates: [-36.8485, 174.7633], type: 'city' }
];

/**
 * Searches for ANY city, town, or location across the entire world
 * using OpenStreetMap Nominatim Geocoding API with instant local presets fallback.
 */
export async function searchGlobalLocations(query: string): Promise<GeocodingResult[]> {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) {
    return POPULAR_GLOBAL_CITIES.slice(0, 10);
  }

  const queryLower = trimmed.toLowerCase();

  // 1. Instant local matching
  const localMatches = POPULAR_GLOBAL_CITIES.filter(c => 
    c.name.toLowerCase().includes(queryLower) ||
    c.country.toLowerCase().includes(queryLower) ||
    c.displayName.toLowerCase().includes(queryLower)
  );

  try {
    // 2. Fetch live results from OpenStreetMap Nominatim API across all countries and continents
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(trimmed)}&addressdetails=1&limit=12&accept-language=ru,en`;
    
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Planet2046-GlobalEcoPlatform/3.0 (world-eco-atlas)'
      }
    });

    if (!res.ok) {
      return localMatches.length > 0 ? localMatches : POPULAR_GLOBAL_CITIES.slice(0, 8);
    }

    const items = await res.json();
    if (!Array.isArray(items) || items.length === 0) {
      return localMatches;
    }

    const formattedResults: GeocodingResult[] = items
      .map((item: any) => {
        const addr = item.address || {};
        const cityName = addr.city || addr.town || addr.municipality || addr.village || addr.hamlet || addr.county || item.name || trimmed;
        const country = addr.country || 'Планета Земля';
        const region = addr.state || addr.region || addr.province || '';
        
        const displayParts = [cityName];
        if (region && region !== cityName) displayParts.push(region);
        if (country) displayParts.push(country);

        return {
          placeId: `osm-${item.place_id || item.osm_id}`,
          name: cityName,
          country: country,
          displayName: displayParts.join(', '),
          coordinates: [parseFloat(item.lat), parseFloat(item.lon)] as [number, number],
          type: item.type || 'city'
        };
      });

    // Merge API results with unique local matches
    const combined: GeocodingResult[] = [...formattedResults];
    for (const loc of localMatches) {
      if (!combined.some(c => Math.abs(c.coordinates[0] - loc.coordinates[0]) < 0.08 && Math.abs(c.coordinates[1] - loc.coordinates[1]) < 0.08)) {
        combined.push(loc);
      }
    }

    return combined.slice(0, 10);
  } catch (err) {
    console.warn('Nominatim Geocoding API failed or rate-limited, returning curated matches:', err);
    return localMatches.length > 0 ? localMatches : POPULAR_GLOBAL_CITIES.slice(0, 8);
  }
}

// Backwards compatibility alias
export const searchEurasiaLocations = searchGlobalLocations;

/**
 * Reverse Geocodes coordinates [lat, lon] anywhere in the world via Nominatim API
 */
export async function reverseGeocodeLocation(lat: number, lon: number): Promise<{ name: string; country: string; displayName: string }> {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1&accept-language=ru,en`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Planet2046-GlobalEcoPlatform/3.0'
      }
    });

    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const name = addr.city || addr.town || addr.municipality || addr.village || addr.county || 'Текущая локация';
      const country = addr.country || 'Планета Земля';
      return {
        name,
        country,
        displayName: data.display_name || `${name}, ${country}`
      };
    }
  } catch (e) {
    console.warn('Reverse geocode failed:', e);
  }

  // Fallback: find closest curated city from global list
  let closest = POPULAR_GLOBAL_CITIES[0];
  let minD = Infinity;
  for (const c of POPULAR_GLOBAL_CITIES) {
    const d = Math.hypot(c.coordinates[0] - lat, c.coordinates[1] - lon);
    if (d < minD) {
      minD = d;
      closest = c;
    }
  }

  return {
    name: closest.name,
    country: closest.country,
    displayName: closest.displayName
  };
}

// Backwards compatibility alias
export const reverseGeocodeEurasia = reverseGeocodeLocation;
