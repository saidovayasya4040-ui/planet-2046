import { CityData } from '../types';

export const CITIES_DATA: CityData[] = [
  // ==========================================
  // EURASIA / EASTERN EUROPE & RUSSIA
  // ==========================================
  {
    id: 'moscow',
    name: 'Москва',
    nameEn: 'Moscow',
    country: 'Россия',
    countryEn: 'Russia',
    region: 'Евразия',
    regionEn: 'Eurasia',
    coordinates: [55.7558, 37.6173],
    ecoIndex: 64,
    indexStatus: 'Умеренно',
    aqi: 42,
    pm25: 11.4,
    pm10: 22.8,
    waterQuality: 78,
    recyclingRate: 24,
    greeneryLevel: 46,
    summary: 'Умеренное качество воздуха, крупнейшая в Европе сеть электробусов и зеленых парковых зон. Главные вызовы — глубина переработки упаковки и автомобильные выбросы на вылетных магистралях.',
    summaryEn: 'Moderate air quality with Europe\'s largest electric bus fleet and sprawling forest parks. Key challenges include solid waste recycling depth and traffic corridor emissions.',
    topProblems: [
      {
        title: 'Выбросы автотранспорта',
        titleEn: 'Vehicular Emissions',
        description: 'Высокая концентрация оксидов азота вблизи крупных транспортных магистралей в часы пик.',
        descriptionEn: 'High concentrations of nitrogen dioxide near major highway rings during rush hours.',
        severity: 'high',
        impact: '38% суммарных выбросов города'
      },
      {
        title: 'Низкая глубина переработки ТКО',
        titleEn: 'Municipal Solid Waste Recycling Gap',
        description: 'Около 24% бытовых отходов идут во вторичный оборот, остальное захоранивается на полигонах.',
        descriptionEn: 'Around 24% of domestic waste enters recycling cycles, while the rest remains landfilled.',
        severity: 'critical',
        impact: '7.8 млн тонн мусора ежегодно'
      },
      {
        title: 'Остров тепла и плотная застройка',
        titleEn: 'Urban Heat Island Effect',
        description: 'Плотная застройка снижает естественное проветривание и усиливает летний микроклиматический перегрев.',
        descriptionEn: 'High-density construction hampers natural ventilation corridors and intensifies summer heat stress.',
        severity: 'medium',
        impact: '+3.2°C к фоновой температуре региона'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.4°C',
        airQuality: 'Чистый (AQI 18-25)',
        airQualityEn: 'Clean (AQI 18-25)',
        renewableShare: '65% электротранспорта и ВИЭ',
        renewableShareEn: '65% electric transport & renewables',
        greenZones: '+22% новых лесопарковых коридоров',
        greenZonesEn: '+22% new forest greenways',
        description: 'Полный переход на электробусы и речной электротранспорт, 70% раздельный сбор отходов, создание зеленых климатических буферов.',
        descriptionEn: 'Complete transition to electric public transit, 70% circular recycling rate, and resilient climate buffer zones.'
      },
      negative: {
        tempChange: '+3.7°C',
        airQuality: 'Нездоровый (AQI 85-115)',
        airQualityEn: 'Unhealthy (AQI 85-115)',
        heatwavesDays: '28 дней экстремальной жары в год',
        heatwavesDaysEn: '28 extreme heatwave days/year',
        waterDeficit: 'Увеличение испарения Москворецкой системы на 18%',
        waterDeficitEn: '18% increased evaporation of Moskva River basin',
        description: 'Учащение тропических ливней с подтоплениями и аномальных волн тепла до +38°C, смог в безветренные периоды.',
        descriptionEn: 'Frequent flash flood cloudbursts and dangerous heatwaves up to +38°C with stagnating smog episodes.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-m-1',
        name: 'Экоцентр «Сборка»',
        nameEn: 'Sborka Ecocenter Hub',
        address: 'Потаповский пер., 5с2',
        addressEn: '5/2 Potapovsky Lane',
        workingHours: '10:00 - 21:00 (ежедневно)',
        workingHoursEn: '10:00 - 21:00 daily',
        acceptedTypes: ['Пластик 1-6', 'Макулатура', 'Стекло', 'Электроника', 'Одежда', 'ТетраПак'],
        acceptedTypesEn: ['Plastics 1-6', 'Paper', 'Glass', 'E-waste', 'Textiles', 'TetraPak'],
        distanceKm: 2.1,
        rating: 4.9
      },
      {
        id: 'rec-m-2',
        name: 'Пункт «Второе Дыхание»',
        nameEn: 'Vtoroe Dykhanie Charity Box',
        address: 'ул. Большая Новодмитровская, 36 (Флакон)',
        addressEn: '36 Bolshaya Novodmitrovskaya St (Flacon)',
        workingHours: '11:00 - 20:00',
        workingHoursEn: '11:00 - 20:00',
        acceptedTypes: ['Одежда', 'Обувь', 'Текстиль', 'Аксессуары'],
        acceptedTypesEn: ['Clothes', 'Shoes', 'Textiles', 'Accessories'],
        distanceKm: 4.5,
        rating: 4.8
      }
    ]
  },
  {
    id: 'spb',
    name: 'Санкт-Петербург',
    nameEn: 'Saint Petersburg',
    country: 'Россия',
    countryEn: 'Russia',
    region: 'Евразия',
    regionEn: 'Eurasia',
    coordinates: [59.9343, 30.3351],
    ecoIndex: 68,
    indexStatus: 'Хорошо',
    aqi: 35,
    pm25: 8.6,
    pm10: 17.2,
    waterQuality: 72,
    recyclingRate: 28,
    greeneryLevel: 42,
    summary: 'Морской климат с хорошим продувом ветрами Финского залива. Главные задачи — защита дельты Невы и модернизация очистных сооружений ливнестоков.',
    summaryEn: 'Maritime coastal climate with steady Gulf of Finland winds. Focuses on Neva delta wetland preservation and stormwater runoff purification.',
    topProblems: [
      {
        title: 'Штормовые нагоны и подтопления берегов',
        titleEn: 'Storm Surges & Coastal Flooding',
        description: 'Рост уровня Балтийского моря и частые штормовые циклоны.',
        descriptionEn: 'Rising Baltic Sea levels and intensified cyclonic storm surges testing flood barrier capacity.',
        severity: 'high',
        impact: 'Риск подтопления прибрежной линии'
      },
      {
        title: 'Загрязнение водотоков взвесями и реагентами',
        titleEn: 'Runoff Suspensions & Road Reagents',
        description: 'Ливневые стоки смывают смывы с дорог в каналы и реки.',
        descriptionEn: 'Urban road wash-off flowing into historical canals during thaw seasons.',
        severity: 'medium',
        impact: 'Нагрузка на очистные сооружения Водоканала'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Отличный (AQI 15)',
        renewableShare: '50% энергии от ветра и биогаза',
        greenZones: '+18% буферных скверов',
        description: 'Укрепленная набережная инфраструктура, восстановленные водно-болотные угодья в дельте Невы.',
        descriptionEn: 'Reinforced coastal storm defenses, modernized eco-purification plants, and restored Neva coastal wetlands.'
      },
      negative: {
        tempChange: '+3.1°C',
        airQuality: 'Умеренно-загрязненный',
        heatwavesDays: '16 дней нехарактерной влажной жары',
        waterDeficit: 'Эрозия берегов залива до 1.5м в год',
        description: 'Увеличение влажности, частые штормовые циклоны с порывами ветра свыше 30 м/с.',
        descriptionEn: 'Increased humidity, severe Baltic storms exceeding 30 m/s wind gusts, and coastal erosion.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-spb-1',
        name: 'Эко-лофт «Зеленка»',
        nameEn: 'Zelenka Eco Loft',
        address: 'Лиговский пр-т, 74',
        addressEn: '74 Ligovsky Prospekt',
        workingHours: '11:00 - 21:00',
        workingHoursEn: '11:00 - 21:00',
        acceptedTypes: ['Пластик 1, 2, 5', 'Алюминий', 'Стекло', 'Книги', 'Чеки'],
        acceptedTypesEn: ['Plastics 1, 2, 5', 'Aluminum', 'Glass', 'Books', 'Receipts'],
        distanceKm: 1.8,
        rating: 4.8
      }
    ]
  },
  {
    id: 'novosibirsk',
    name: 'Новосибирск',
    nameEn: 'Novosibirsk',
    country: 'Россия',
    countryEn: 'Russia',
    region: 'Евразия / Сибирь',
    regionEn: 'Siberia',
    coordinates: [55.0084, 82.9357],
    ecoIndex: 56,
    indexStatus: 'Умеренно',
    aqi: 58,
    pm25: 18.2,
    pm10: 36.4,
    waterQuality: 74,
    recyclingRate: 20,
    greeneryLevel: 48,
    summary: 'Научно-промышленный центр Сибири на Оби. Высокий потенциал Академгородка по развитию зеленых биотехнологий и эко-энергетики.',
    summaryEn: 'Siberian science hub on the Ob River with major eco-biotech research clusters in Akademgorodok.',
    topProblems: [
      {
        title: 'Угольная генерация ТЭЦ',
        titleEn: 'Coal-Fired Power Plants',
        description: 'Выбросы золошлаков и сажи в морозные зимние антициклоны.',
        descriptionEn: 'Soot and ash particulate emissions during sub-zero Siberian anticyclonic inversions.',
        severity: 'high',
        impact: 'Повышенный уровень PM2.5 зимой'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.6°C',
        airQuality: 'Чистый таежный (AQI 20)',
        renewableShare: '75% газификации и биотоплива',
        greenZones: '+20% реликтовых сосновых боров',
        description: 'Полная замена бурого угля на природный газ, внедрение систем улавливания углерода в Академгородке.',
        descriptionEn: 'Phaseout of lignite coal in favor of gas and heat pumps; urban pine forest preservation.'
      },
      negative: {
        tempChange: '+4.2°C',
        airQuality: 'Нездоровый смог зимой',
        heatwavesDays: '22 дня жары > +35°C',
        waterDeficit: 'Снижение уровня Обского водохранилища на 14%',
        description: 'Снижение уровня Оби, лесные пожары в ленточных борах, зимний смог в котловине.',
        descriptionEn: 'Reduced Ob reservoir runoff, Siberian taiga wildfires, and winter smog accumulation.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-nsk-1',
        name: 'Эко-хаб «Арктика-Рециклинг»',
        nameEn: 'Arktika Recycling Hub',
        address: 'ул. Фрунзе, 80',
        addressEn: '80 Frunze St',
        workingHours: '10:00 - 19:00',
        acceptedTypes: ['Макулатура', 'ПЭТ-бутылки', 'Алюминий', 'Батарейки'],
        acceptedTypesEn: ['Wastepaper', 'PET bottles', 'Aluminum', 'Batteries'],
        distanceKm: 2.4,
        rating: 4.7
      }
    ]
  },
  {
    id: 'kazan',
    name: 'Казань',
    nameEn: 'Kazan',
    country: 'Россия',
    countryEn: 'Russia',
    region: 'Евразия / Поволжье',
    regionEn: 'Volga Region',
    coordinates: [55.7961, 49.1064],
    ecoIndex: 71,
    indexStatus: 'Хорошо',
    aqi: 32,
    pm25: 7.9,
    pm10: 16.0,
    waterQuality: 82,
    recyclingRate: 32,
    greeneryLevel: 52,
    summary: 'Зеленая столица Поволжья на слиянии Волги и Казанки. Реализует флагманскую стратегию парковых набережных реки Казанки.',
    summaryEn: 'Leading green city on the Volga River known for its acclaimed Kazanka River nature corridor revitalizations.',
    topProblems: [
      {
        title: 'Цветение воды в Куйбышевском водохранилище',
        titleEn: 'Eutrophication of Volga Basin',
        description: 'Сине-зеленые водоросли в жаркие летние месяцы из-за фосфатных стоков.',
        descriptionEn: 'Cyanobacteria blooms during midsummer heat due to upstream nutrient runoff.',
        severity: 'medium',
        impact: 'Влияние на речную экосистему'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Кристально чистый (AQI 16)',
        renewableShare: '60% гидро- и солнечной генерации',
        greenZones: '12 эко-парков вдоль реки Казанки',
        description: 'Экологический пояс реки Казанки, полное разделение органики и компостирование.',
        descriptionEn: '12 interconnected riparian eco-parks along Kazanka river with 100% municipal organic composting.'
      },
      negative: {
        tempChange: '+3.4°C',
        airQuality: 'Умеренно-запыленный',
        heatwavesDays: '25 дней жары',
        waterDeficit: 'Снижение уровня Волги в межень на 12%',
        description: 'Пересыхание малых озер, дефицит воды для сельхозугодий.',
        descriptionEn: 'Volga basin low-water extremes and summer drought spells in surrounding agro-zones.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-kzn-1',
        name: 'Эко-Пункт «Фракция»',
        nameEn: 'Fraction Eco Center',
        address: 'ул. Спартаковская, 2',
        addressEn: '2 Spartakovskaya St',
        workingHours: '10:00 - 20:00',
        acceptedTypes: ['Пластик 1-7', 'Стекло', 'Макулатура', 'Металл', 'Техника'],
        acceptedTypesEn: ['Plastics 1-7', 'Glass', 'Paper', 'Metals', 'E-waste'],
        distanceKm: 1.6,
        rating: 4.9
      }
    ]
  },
  {
    id: 'vladivostok',
    name: 'Владивосток',
    nameEn: 'Vladivostok',
    country: 'Россия',
    countryEn: 'Russia',
    region: 'Евразия / Дальний Восток',
    regionEn: 'Far East',
    coordinates: [43.1155, 131.8855],
    ecoIndex: 69,
    indexStatus: 'Хорошо',
    aqi: 28,
    pm25: 6.9,
    pm10: 14.1,
    waterQuality: 79,
    recyclingRate: 22,
    greeneryLevel: 55,
    summary: 'Тихоокеанский форпост на берегах Японского моря. Чистый морской воздух, богатейшая биосфера Уссурийской тайги и залива Петра Великого.',
    summaryEn: 'Pacific coast hub surrounded by the Sea of Japan, boasting fresh marine winds and exceptional biodiversity of the Ussuri Taiga.',
    topProblems: [
      {
        title: 'Морской пластиковый мусор',
        titleEn: 'Marine Plastic Debris',
        description: 'Нагон плавающего пластика штормами из акватории Японского моря.',
        descriptionEn: 'Washed-up plastic litter on Pacific beaches following typhoon seasons.',
        severity: 'high',
        impact: 'Угроза морским млекопитающим и птицам'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Чистый океанический (AQI 12)',
        renewableShare: '80% приливной и ветроэнергетики',
        greenZones: 'Защищенный морской заповедный пояс',
        description: 'Электрокатера, очистка бухты Золотой Рог, волновые и ветровые электростанции на островах.',
        descriptionEn: 'Full rehabilitation of Golden Horn Bay, tidal energy parks on Russky Island, zero single-use plastics.'
      },
      negative: {
        tempChange: '+3.2°C',
        airQuality: 'Штормовой смог при тайфунах',
        heatwavesDays: '18 дней субтропической влажной жары',
        waterDeficit: 'Подъем уровня моря на 26 см',
        description: 'Увеличение разрушительной силы тайфунов, подтопление портовой набережной.',
        descriptionEn: 'Intensified Pacific typhoons causing coastal infrastructure storm-surge damage.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-vlv-1',
        name: 'Эко-Пункт «Остров Мечты»',
        nameEn: 'Dream Island Eco Point',
        address: 'Светланская ул., 45',
        addressEn: '45 Svetlanskaya St',
        workingHours: '10:00 - 19:00',
        acceptedTypes: ['ПЭТ', 'ПНД', 'Алюминий', 'Картон', 'Стекло'],
        acceptedTypesEn: ['PET', 'HDPE', 'Aluminum', 'Cardboard', 'Glass'],
        distanceKm: 1.2,
        rating: 4.8
      }
    ]
  },

  // ==========================================
  // CENTRAL ASIA & CAUCASUS
  // ==========================================
  {
    id: 'almaty',
    name: 'Алматы',
    nameEn: 'Almaty',
    country: 'Казахстан',
    countryEn: 'Kazakhstan',
    region: 'Центральная Азия',
    regionEn: 'Central Asia',
    coordinates: [43.2389, 76.8897],
    ecoIndex: 48,
    indexStatus: 'Низкий',
    aqi: 88,
    pm25: 29.5,
    pm10: 58.2,
    waterQuality: 82,
    recyclingRate: 18,
    greeneryLevel: 38,
    summary: 'Горная котловина у подножия Заилийского Алатау вызывает температурную инверсию. Приоритеты: газификация ТЭЦ, развитие скоростного электротранспорта и защита ледников Тянь-Шаня.',
    summaryEn: 'Mountain basin geography creates seasonal temperature inversions. Key priorities: coal-to-gas plant conversion, electric transit, and Tian Shan glacier conservation.',
    topProblems: [
      {
        title: 'Зимняя температурная инверсия и смог',
        titleEn: 'Winter Smog & Thermal Inversion',
        description: 'Выбросы ТЭЦ и частного сектора задерживаются под холодным слоем воздуха.',
        descriptionEn: 'Emissions from thermal plants and domestic coal heating trapped beneath cold mountain air layers.',
        severity: 'critical',
        impact: 'AQI зимой достигает 180-220'
      },
      {
        title: 'Таяние ледников Тянь-Шаня',
        titleEn: 'Tian Shan Glacier Retreat',
        description: 'Сокращение ледникового объема угрожает водоснабжению региона.',
        descriptionEn: 'Rapid glacier ablation endangering long-term freshwater availability for the Almaty basin.',
        severity: 'critical',
        impact: 'Уменьшение ледяной массы на 35% за 30 лет'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.6°C',
        airQuality: 'Умеренный (AQI 35-45)',
        renewableShare: '100% газификация ТЭЦ + горные микро-ГЭС',
        greenZones: '+30% защитного пояса предгорий',
        description: 'Полный переход на газ и горную гидроэнергию, канатный общественный транспорт, ветрозащитные коридоры.',
        descriptionEn: 'Full coal phaseout, zero-emission cable-car public transit, and restored foothill apple orchards.'
      },
      negative: {
        tempChange: '+4.2°C',
        airQuality: 'Опасный для дыхания (AQI > 160)',
        heatwavesDays: '42 дня жары свыше +40°C',
        waterDeficit: 'Дефицит поливной и питьевой воды до 30%',
        description: 'Селевая опасность из-за прорыва моренных озер, опустынивание предгорной зоны.',
        descriptionEn: 'Glacial outburst flood hazards, chronic summer water deficits, and desertification of foothill ecosystems.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-alm-1',
        name: 'Эко-Пункт «Tazalyk»',
        nameEn: 'Tazalyk Recycling Hub',
        address: 'пр. Абая, 150/230',
        addressEn: '150/230 Abay Ave',
        workingHours: '09:00 - 19:00',
        acceptedTypes: ['Пластик 1, 2', 'Макулатура', 'Алюминиевые банки', 'Стекло'],
        acceptedTypesEn: ['Plastics 1, 2', 'Paper', 'Aluminum Cans', 'Glass'],
        distanceKm: 3.2,
        rating: 4.7
      }
    ]
  },
  {
    id: 'astana',
    name: 'Астана',
    nameEn: 'Astana',
    country: 'Казахстан',
    countryEn: 'Kazakhstan',
    region: 'Центральная Азия',
    regionEn: 'Central Asia',
    coordinates: [51.1694, 71.4491],
    ecoIndex: 61,
    indexStatus: 'Умеренно',
    aqi: 48,
    pm25: 13.5,
    pm10: 28.0,
    waterQuality: 80,
    recyclingRate: 25,
    greeneryLevel: 41,
    summary: 'Степной ветреный мегаполис на реке Ишим. Масштабный зеленый пояс «Жасыл Аймак» из десятков миллионов деревьев защищает город от степных ветров и снежных буранов.',
    summaryEn: 'Windy steppe capital on the Ishim River protected by the massive "Zhasyl Aymak" green belt forest buffer.',
    topProblems: [
      {
        title: 'Зимний печной смог в частном секторе',
        titleEn: 'Steppe Winter Heating Emissions',
        description: 'Выбросы угля в морозные дни при -35°C.',
        descriptionEn: 'Solid fuel heating smoke during harsh -35°C cold spells.',
        severity: 'high',
        impact: 'Сезонные пики загрязнения'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.5°C',
        airQuality: 'Чистый степной (AQI 18)',
        renewableShare: '70% ветро- и солнечной энергии',
        greenZones: 'Зеленый пояс 100 000 гектаров',
        description: 'Ветропарки на степных просторах, 100% центральное геотермальное и газовое отопление, климатические парки.',
        descriptionEn: 'Massive wind turbine arrays on the steppe, complete gasification, and a mature 100k-hectare shelterbelt forest.'
      },
      negative: {
        tempChange: '+3.9°C',
        airQuality: 'Пылевые бури летом',
        heatwavesDays: '30 дней жары',
        waterDeficit: 'Снижение стока реки Ишим на 22%',
        description: 'Степное опустынивание, пересыхание малых озер, дефицит воды для городского полива.',
        descriptionEn: 'Steppe droughts, intensification of dust storms, and Ishim river low-flow constraints.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-ast-1',
        name: 'EcoStation Astana',
        nameEn: 'EcoStation Astana',
        address: 'пр. Мангилик Ел, 55',
        addressEn: '55 Mangilik El Ave',
        workingHours: '10:00 - 20:00',
        acceptedTypes: ['Пластик', 'Бумага', 'Батарейки', 'Стекло'],
        acceptedTypesEn: ['Plastics', 'Paper', 'Batteries', 'Glass'],
        distanceKm: 2.1,
        rating: 4.8
      }
    ]
  },
  {
    id: 'tashkent',
    name: 'Ташкент',
    nameEn: 'Tashkent',
    country: 'Узбекистан',
    countryEn: 'Uzbekistan',
    region: 'Центральная Азия',
    regionEn: 'Central Asia',
    coordinates: [41.2995, 69.2401],
    ecoIndex: 44,
    indexStatus: 'Критично',
    aqi: 96,
    pm25: 34.2,
    pm10: 72.0,
    waterQuality: 74,
    recyclingRate: 15,
    greeneryLevel: 31,
    summary: 'Пыльные бури с Аральского бассейна и высокая температура летом. Действует масштабная национальная программа «Яшил Макон» (Зеленый край) по высадке миллионов деревьев.',
    summaryEn: 'Vulnerable to Aral Sea salt-dust storms and intense summer heat. Accelerating the nationwide "Yashil Makon" tree planting drive.',
    topProblems: [
      {
        title: 'Пылевые и солевые бури',
        titleEn: 'Aral Basin Dust & Salt Storms',
        description: 'Перенос мелкодисперсных частиц с осушенного дна Арала и плато Устюрт.',
        descriptionEn: 'Fine mineral dust transported from dried Aralkum lakebed across the Fergana & Tashkent valleys.',
        severity: 'critical',
        impact: 'AQI до 250 во время штормов'
      },
      {
        title: 'Дефицит водных ресурсов бассейна Сырдарьи',
        titleEn: 'Syr Darya Freshwater Scarcity',
        description: 'Высокое испарение и потери в оросительных каналах.',
        descriptionEn: 'High evaporation rates and irrigation canal seepage straining water quotas.',
        severity: 'critical',
        impact: 'Угроза питьевого баланса региона'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.7°C',
        airQuality: 'Умеренно-чистый (AQI 40)',
        renewableShare: '70% солнечной генерации',
        greenZones: 'Создание пояса 15 млн деревьев вокруг города',
        description: 'Капельное орошение городского озеленения, климатические коридоры с ветровыми экранами, фотовольтаика на всех крышах.',
        descriptionEn: 'Smart drip irrigation for urban trees, solarized rooftop grid, and climate windbreak shelterbelts.'
      },
      negative: {
        tempChange: '+4.8°C',
        airQuality: 'Опасный смог и солевая взвесь',
        heatwavesDays: '55 дней с температурой > +44°C',
        waterDeficit: 'Острая нехватка пресной воды до 45%',
        description: 'Массовая миграция из засушливых районов, перегрузка систем кондиционирования.',
        descriptionEn: 'Severe water shortages up to 45%, salt dust deposition, and persistent +45°C summer heatwaves.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-tash-1',
        name: 'Пункт «Hashar Week Eco Point»',
        nameEn: 'Hashar Week Eco Point',
        address: 'Мирабадский р-н, ул. Нукус, 29',
        addressEn: '29 Nukus St, Mirabad Dist',
        workingHours: '10:00 - 19:00',
        acceptedTypes: ['Пластик PET/HDPE', 'Макулатура', 'Металл', 'Стекло'],
        acceptedTypesEn: ['Plastics PET/HDPE', 'Paper', 'Metals', 'Glass'],
        distanceKm: 2.8,
        rating: 4.7
      }
    ]
  },
  {
    id: 'bishkek',
    name: 'Бишкек',
    nameEn: 'Bishkek',
    country: 'Кыргызстан',
    countryEn: 'Kyrgyzstan',
    region: 'Центральная Азия',
    regionEn: 'Central Asia',
    coordinates: [42.8746, 74.5698],
    ecoIndex: 47,
    indexStatus: 'Низкий',
    aqi: 92,
    pm25: 31.8,
    pm10: 64.0,
    waterQuality: 86,
    recyclingRate: 14,
    greeneryLevel: 44,
    summary: 'Предгорный город с уникальной системой арыков и дубовых парков. Зимой страдает от смога ТЭЦ и угля, летом обладает отличным горным потенциалом.',
    summaryEn: 'Chuy valley city with historic irrigation canals and oak alleys, battling winter coal heating smog while leveraging rich hydro potential.',
    topProblems: [
      {
        title: 'Зимний печной смог',
        titleEn: 'Winter Coal Heating Smog',
        description: 'Сжигание угля низкого качества в частном секторе вокруг города.',
        descriptionEn: 'Low-grade coal combustion in peri-urban residential settlements during winter inversions.',
        severity: 'critical',
        impact: 'Экстремальные пики PM2.5 в декабре-январе'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.5°C',
        airQuality: 'Чистый горный (AQI 22)',
        renewableShare: '100% горной гидроэнергии и солнца',
        greenZones: 'Восстановление арычной сети и дубовых рощ',
        description: 'Полная электрификация отопления за счет ГЭС, возрождение арыков для микроклиматического охлаждения.',
        descriptionEn: 'Hydro-electric heating transition, historic tree canopy restoration, and solar micro-grids.'
      },
      negative: {
        tempChange: '+4.0°C',
        airQuality: 'Опасный смог',
        heatwavesDays: '38 дней жары',
        waterDeficit: 'Таяние ледников хребта Ала-Тоо',
        description: 'Сокращение ледников Чуйской долины, пылевые бури, нехватка воды для полива.',
        descriptionEn: 'Glacier volume decline in Ala-Too range, summer dust storms, and irrigation shortages.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-bish-1',
        name: 'Taza Bishkek Eco-Hub',
        nameEn: 'Taza Bishkek Eco-Hub',
        address: 'ул. Киевская, 96',
        addressEn: '96 Kievskaya St',
        workingHours: '09:00 - 18:00',
        acceptedTypes: ['Пластик', 'Бумага', 'Батарейки', 'Стеклотара'],
        acceptedTypesEn: ['Plastics', 'Paper', 'Batteries', 'Glass'],
        distanceKm: 1.9,
        rating: 4.8
      }
    ]
  },
  {
    id: 'tbilisi',
    name: 'Тбилиси',
    nameEn: 'Tbilisi',
    country: 'Грузия',
    countryEn: 'Georgia',
    region: 'Кавказ',
    regionEn: 'Caucasus',
    coordinates: [41.7151, 44.8271],
    ecoIndex: 65,
    indexStatus: 'Умеренно',
    aqi: 40,
    pm25: 10.5,
    pm10: 22.0,
    waterQuality: 88,
    recyclingRate: 22,
    greeneryLevel: 49,
    summary: 'Живописная долина реки Куры (Мтквари) в окружении холмов. Развивается эко-туризм, электрификация автобусов и защита реликтовых парков Мтацминда.',
    summaryEn: 'Scenic Mtkvari River valley with rich historical architecture, modern electric bus fleet, and Mtatsminda hillside park reserves.',
    topProblems: [
      {
        title: 'Автомобильный трафик в узких каньонах улиц',
        titleEn: 'Valley Traffic Congestion',
        description: 'Скопление выхлопных газов в речной котловине в штилевые дни.',
        descriptionEn: 'Exhaust accumulation in canyon-like historic streetscapes during stagnant weather.',
        severity: 'medium',
        impact: 'Локальные превышения NO2'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Чистый горно-долинный (AQI 18)',
        renewableShare: '90% гидро- и солнечной энергии',
        greenZones: 'Зеленые канатные дороги и террасные сады',
        description: 'Канатные дороги вместо личного транспорта, очистка реки Мтквари, террасное озеленение склонов.',
        descriptionEn: 'Eco-cableway transit expansion, Mtkvari river rehabilitation, and urban hillside reforestation.'
      },
      negative: {
        tempChange: '+3.5°C',
        airQuality: 'Умеренно-запыленный',
        heatwavesDays: '32 дня жары',
        waterDeficit: 'Снижение стока реки Куры на 18%',
        description: 'Летний перегрев исторического центра, засуха на склонах холмов.',
        descriptionEn: 'Intense urban heat trapped between mountain ridges and Mtkvari summer drought.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-tbl-1',
        name: 'Tbilisi Green Point',
        nameEn: 'Tbilisi Green Point',
        address: 'Chavchavadze Ave, 37',
        addressEn: '37 Chavchavadze Ave',
        workingHours: '10:00 - 19:00',
        acceptedTypes: ['Пластик', 'Стекло', 'Алюминий', 'Бумага'],
        acceptedTypesEn: ['Plastics', 'Glass', 'Aluminum', 'Paper'],
        distanceKm: 2.5,
        rating: 4.8
      }
    ]
  },
  {
    id: 'baku',
    name: 'Баку',
    nameEn: 'Baku',
    country: 'Азербайджан',
    countryEn: 'Azerbaijan',
    region: 'Кавказ / Каспий',
    regionEn: 'Caucasus & Caspian',
    coordinates: [40.4093, 49.8671],
    ecoIndex: 59,
    indexStatus: 'Умеренно',
    aqi: 52,
    pm25: 14.8,
    pm10: 32.0,
    waterQuality: 76,
    recyclingRate: 26,
    greeneryLevel: 35,
    summary: 'Город ветров на берегу Каспийского моря. Реализует масштабные проекты рекультивации бывших нефтяных месторождений в парки («Белый Город») и офшорной ветроэнергетики.',
    summaryEn: 'The City of Winds on the Caspian Sea, transforming legacy industrial oilfields into green urban corridors (Baku White City) and scaling offshore wind.',
    topProblems: [
      {
        title: 'Падение уровня Каспийского моря',
        titleEn: 'Caspian Sea Level Drop',
        description: 'Отступление береговой линии из-за снижения стока Волги и глобального потепления.',
        descriptionEn: 'Caspian shoreline regression threatening coastal wetland biodiversity and port infrastructure.',
        severity: 'critical',
        impact: 'Угроза прибрежной экосистеме'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.4°C',
        airQuality: 'Чистый морской (AQI 20)',
        renewableShare: '85% энергии каспийского ветра и солнца',
        greenZones: '+40% зеленых набережных и скверов',
        description: 'Офшорные ветроэлектростанции в Каспии, опреснение на солнечной энергии, рекультивация почв.',
        descriptionEn: 'Caspian offshore wind hubs, solar seawater desalination, and completed soil remediation projects.'
      },
      negative: {
        tempChange: '+3.8°C',
        airQuality: 'Пылевые морские ветры',
        heatwavesDays: '40 дней жары',
        waterDeficit: 'Падение Каспия на 1.8 метра',
        description: 'Оголение засоленного морского дна, учащение солевых пыльных бурь.',
        descriptionEn: 'Severe Caspian water level regression exposing salt flats, causing dust storms.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-bak-1',
        name: 'Baku Clean City EcoHub',
        nameEn: 'Baku Clean City EcoHub',
        address: 'Neftchilar Ave, 12',
        addressEn: '12 Neftchilar Ave',
        workingHours: '09:00 - 19:00',
        acceptedTypes: ['Пластик', 'Металл', 'Электроника', 'Бумага'],
        acceptedTypesEn: ['Plastics', 'Metals', 'E-waste', 'Paper'],
        distanceKm: 1.5,
        rating: 4.8
      }
    ]
  },

  // ==========================================
  // WESTERN & NORTHERN EUROPE
  // ==========================================
  {
    id: 'london',
    name: 'Лондон',
    nameEn: 'London',
    country: 'Великобритания',
    countryEn: 'United Kingdom',
    region: 'Западная Европа',
    regionEn: 'Western Europe',
    coordinates: [51.5074, -0.1278],
    ecoIndex: 78,
    indexStatus: 'Хорошо',
    aqi: 24,
    pm25: 6.2,
    pm10: 13.8,
    waterQuality: 90,
    recyclingRate: 52,
    greeneryLevel: 51,
    summary: 'Первый в мире Национальный Город-Парк (National Park City) с зоной ультранизких выбросов ULEZ, восстанавливающий экосистему Темзы и развивающий сеть веломагистралей Cycleway.',
    summaryEn: 'The world\'s first National Park City featuring strict Ultra Low Emission Zones (ULEZ), restored Thames river ecosystems, and extensive Cycleway arterial corridors.',
    topProblems: [
      {
        title: 'Адаптация барьера на Темзе (Thames Barrier)',
        titleEn: 'Thames Barrier Storm Surge Adaptation',
        description: 'Стареющий защитный барьер требует модернизации для сдерживания штормовых приливов.',
        descriptionEn: 'Aging flood barriers requiring multi-billion pound upgrades to withstand rising North Sea storm surges.',
        severity: 'high',
        impact: 'Защита активов на сумму £320+ млрд'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Идеальный (AQI 14)',
        renewableShare: '90% энергии от ветра Северного моря и биометана',
        greenZones: '+25% лесных крон (Urban Forest Canopy)',
        description: 'Полная электрификация двухэтажных автобусов и такси, восстановление водно-болотных угодий в долине Темзы.',
        descriptionEn: 'Zero-emission double-deckers, Thames estuary rewilding, and carbon-neutral building codes.'
      },
      negative: {
        tempChange: '+3.1°C',
        airQuality: 'Умеренно-загрязненный летом',
        heatwavesDays: '20 дней экстремальной жары свыше +36°C',
        waterDeficit: 'Снижение уровня грунтовых вод бассейна Темзы на 15%',
        description: 'Перегрев лондонского метрополитена, пересыхание малых притоков реки.',
        descriptionEn: 'Severe London Underground overheating and summer groundwater depletion.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-lon-1',
        name: 'Southwark Reuse & Recycling Centre',
        nameEn: 'Southwark Reuse & Recycling Centre',
        address: 'Devon Street, off Old Kent Road',
        addressEn: 'Devon Street, off Old Kent Road',
        workingHours: '08:00 - 18:00',
        acceptedTypes: ['Все виды пластика', 'Древесина', 'Металлолом', 'Батареи', 'Электроприборы'],
        acceptedTypesEn: ['All plastics', 'Timber', 'Scrap metal', 'Batteries', 'E-waste'],
        distanceKm: 3.8,
        rating: 4.8
      }
    ]
  },
  {
    id: 'berlin',
    name: 'Берлин',
    nameEn: 'Berlin',
    country: 'Германия',
    countryEn: 'Germany',
    region: 'Центральная Европа',
    regionEn: 'Central Europe',
    coordinates: [52.52, 13.405],
    ecoIndex: 82,
    indexStatus: 'Отлично',
    aqi: 22,
    pm25: 5.4,
    pm10: 12.1,
    waterQuality: 91,
    recyclingRate: 68,
    greeneryLevel: 58,
    summary: 'Лидер в циклической экономике залоговой тары Pfand и развитой велотранспортной сети. Реализует концепцию города-губки Sponge City для удержания дождевых вод.',
    summaryEn: 'Pioneer in circular packaging refund deposit systems (Pfand) and Sponge City rainwater infiltration urbanism.',
    topProblems: [
      {
        title: 'Летняя засуха в бассейне реки Шпрее',
        titleEn: 'Spree River Summer Droughts',
        description: 'Снижение уровня грунтовых вод из-за закрытия угольных карьеров в Лужице.',
        descriptionEn: 'Declining regional groundwater tables following Lusatia opencast coal mine closures.',
        severity: 'high',
        impact: 'Снижение летнего стока реки до 40%'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.1°C',
        airQuality: 'Идеальный (AQI < 15)',
        renewableShare: '95% солнечной и геотермальной энергии',
        greenZones: '+25% «губчатый город» (Sponge City)',
        description: 'Концепция Sponge City: удержание 90% дождевых вод, крыши с солнечными панелями и мхом.',
        descriptionEn: '90% stormwater retention through bioswales and green roofs, powered by geothermal district heating.'
      },
      negative: {
        tempChange: '+2.9°C',
        airQuality: 'Умеренный (AQI 45)',
        heatwavesDays: '22 дня экстремальных температур',
        waterDeficit: 'Ограничение забора воды для полива парков',
        description: 'Пересыхание малых озер в Бранденбурге, стресс для лесного фонда Грюневальд.',
        descriptionEn: 'Brandenburg lake level drops and severe thermal stress on historic Grunewald forest.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-ber-1',
        name: 'BSR Recyclinghof Neukölln',
        nameEn: 'BSR Recyclinghof Neukölln',
        address: 'Gradestraße 73',
        addressEn: 'Gradestraße 73',
        workingHours: '08:00 - 19:00',
        acceptedTypes: ['Все фракции', 'Мебель', 'Электроприборы', 'Опасные отходы'],
        acceptedTypesEn: ['All fractions', 'Furniture', 'Electronics', 'Hazardous'],
        distanceKm: 4.0,
        rating: 4.9
      }
    ]
  },
  {
    id: 'paris',
    name: 'Париж',
    nameEn: 'Paris',
    country: 'Франция',
    countryEn: 'France',
    region: 'Западная Европа',
    regionEn: 'Western Europe',
    coordinates: [48.8566, 2.3522],
    ecoIndex: 77,
    indexStatus: 'Хорошо',
    aqi: 26,
    pm25: 6.8,
    pm10: 14.5,
    waterQuality: 86,
    recyclingRate: 46,
    greeneryLevel: 42,
    summary: 'Революционная трансформация «15-минутного города» (Ville du quart d\'heure). Масштабная очистка Сены для купания, сотни километров велополос Plan Vélo и зеленые оазисы в школьных дворах.',
    summaryEn: 'Pioneer of the "15-Minute City" model. Historic Seine river clean-up for open swimming, citywide Plan Vélo cycle expressways, and shaded schoolyard micro-parks.',
    topProblems: [
      {
        title: 'Городской тепловой остров цинковых крыш',
        titleEn: 'Zinc Roof Heat Island Effect',
        description: 'Традиционные мансардные крыши аккумулируют тепло при летних волнах жары до +42°C.',
        descriptionEn: 'Iconic Haussmann zinc rooftops trap immense radiant heat during European heat domes.',
        severity: 'high',
        impact: 'Перегрев жилого фонда'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Чистый (AQI 15)',
        renewableShare: '85% геотермального тепла и солнца',
        greenZones: 'Посадка 170 000 новых деревьев',
        description: 'Пешеходный центр без ДВС, чистая Сена с биоочистными зонами, охлаждающие водные зеркала на площадях.',
        descriptionEn: 'Car-free historic center, swimmable clean Seine river, and extensive mist cooling corridors on boulevards.'
      },
      negative: {
        tempChange: '+3.3°C',
        airQuality: 'Летний озоновый смог',
        heatwavesDays: '26 дней экстремальной жары',
        waterDeficit: 'Снижение расхода воды в Сене на 30%',
        description: 'Ограничения на кондиционирование, засуха в Иль-де-Франс.',
        descriptionEn: 'Seine river low-water levels and acute heat distress across classic stone apartment blocks.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-par-1',
        name: 'Espace Tri Paris 11e',
        nameEn: 'Espace Tri Paris 11e',
        address: 'Rue de la Roquette, 82',
        addressEn: '82 Rue de la Roquette',
        workingHours: '09:00 - 19:00',
        acceptedTypes: ['Пластик', 'Стекло', 'Одежда', 'Опасные отходы', 'Электроника'],
        acceptedTypesEn: ['Plastics', 'Glass', 'Textiles', 'Hazardous', 'E-waste'],
        distanceKm: 2.2,
        rating: 4.8
      }
    ]
  },
  {
    id: 'stockholm',
    name: 'Стокгольм',
    nameEn: 'Stockholm',
    country: 'Швеция',
    countryEn: 'Sweden',
    region: 'Северная Европа',
    regionEn: 'Northern Europe',
    coordinates: [59.3293, 18.0686],
    ecoIndex: 91,
    indexStatus: 'Отлично',
    aqi: 12,
    pm25: 3.2,
    pm10: 7.8,
    waterQuality: 98,
    recyclingRate: 98,
    greeneryLevel: 68,
    summary: 'Первая «Зеленая столица Европы». 100% раздельный сбор с вакуумными подземными трубопроводами Envac, биотопливо и чистейшая озерно-морская акватория.',
    summaryEn: 'Europe\'s first Green Capital. Global benchmark in pneumatic underground waste logistics (Envac), district biofuel heating, and pristine archipelago waters.',
    topProblems: [
      {
        title: 'Эрозия балтийского биоразнообразия',
        titleEn: 'Baltic Sea Eutrophication Sensitivity',
        description: 'Чувствительность закрытого Балтийского моря к потеплению и уровню кислорода.',
        descriptionEn: 'Vulnerability of the semi-enclosed Baltic archipelago to regional warming and hypoxic zones.',
        severity: 'medium',
        impact: 'Угроза популяциям балтийской сельди'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+0.9°C',
        airQuality: 'Идеальный (AQI < 10)',
        renewableShare: '100% безуглеродная энергетика',
        greenZones: '99% жителей в 300м от парка',
        description: 'Полностью деревянное высотное строительство (Timber City), улавливание CO2 (BECCS) на био-ТЭЦ.',
        descriptionEn: 'Mass timber urban districts (Stockholm Wood City), bioenergy with carbon capture (BECCS), and zero-emission ferries.'
      },
      negative: {
        tempChange: '+2.4°C',
        airQuality: 'Отличный',
        heatwavesDays: '8 дней теплового стресса',
        waterDeficit: 'Изменение солености озера Меларен',
        description: 'Зимние оттепели без снега, подъем уровня Балтики.',
        descriptionEn: 'Milder snowless winters, Baltic storm surge adaptation costs for low-lying island bridges.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-stk-1',
        name: 'Roslagstulls Återbruksstation',
        nameEn: 'Roslagstulls Circular Reuse Station',
        address: 'Cedersdalsgatan 7',
        addressEn: 'Cedersdalsgatan 7',
        workingHours: '10:00 - 20:00',
        acceptedTypes: ['Все фракции', 'Ремонт вещей', 'Стройматериалы', 'Органика'],
        acceptedTypesEn: ['All fractions', 'Repair workshop', 'Building materials', 'Organics'],
        distanceKm: 2.0,
        rating: 4.9
      }
    ]
  },

  // ==========================================
  // ASIA & PACIFIC
  // ==========================================
  {
    id: 'tokyo',
    name: 'Токио',
    nameEn: 'Tokyo',
    country: 'Япония',
    countryEn: 'Japan',
    region: 'Восточная Азия',
    regionEn: 'East Asia',
    coordinates: [35.6762, 139.6503],
    ecoIndex: 79,
    indexStatus: 'Хорошо',
    aqi: 26,
    pm25: 6.8,
    pm10: 14.5,
    waterQuality: 94,
    recyclingRate: 82,
    greeneryLevel: 36,
    summary: 'Мировой лидер в сортировке (до 15 фракций) и термической утилизации с рекуперацией тепла. Колоссальный подземный резервуар Касукабэ защищает агломерацию от супертайфунов.',
    summaryEn: 'World leader in meticulous 15-stream waste sorting and thermal energy recovery. The underground Kasukabe storm cistern shields the megacity from Pacific typhoon surges.',
    topProblems: [
      {
        title: 'Интенсивные тайфуны и нагоны океанической воды',
        titleEn: 'Super Typhoon Surges',
        description: 'Увеличение частоты супертайфунов из-за нагрева Тихого океана.',
        descriptionEn: 'Intensifying Pacific super typhoons testing Tokyo Bay sea wall barriers.',
        severity: 'high',
        impact: 'Пиковая нагрузка на гидротехнические шлюзы'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Превосходный (AQI 12)',
        renewableShare: 'Водородные энергосети и плавучие ветропарки',
        greenZones: 'Вертикальные парки на фасадах всех небоскребов',
        description: 'Автономные безуглеродные кварталы, 100% электро/водородный транспорт, искусственный интеллект управления энергопотреблением.',
        descriptionEn: 'Hydrogen microgrids, floating offshore wind farms, and AI-optimized building climate management.'
      },
      negative: {
        tempChange: '+3.4°C',
        airQuality: 'Умеренно-загрязненный в антициклон',
        heatwavesDays: '35 дней с высоким тепловым стрессом',
        waterDeficit: 'Повышение уровня Токийского залива на 24 см',
        description: 'Необходимость постоянной откачки грунтовых вод из метрополитена и прибрежных районов.',
        descriptionEn: 'Chronic coastal flooding in east Tokyo lowlands requiring constant deep groundwater pumping.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-tok-1',
        name: 'Shinjuku Eco Gallery & Resource Center',
        nameEn: 'Shinjuku Eco Gallery & Resource Center',
        address: 'Nishi-Shinjuku 2-11-4',
        addressEn: '2-11-4 Nishi-Shinjuku',
        workingHours: '09:00 - 17:00',
        acceptedTypes: ['Пластик PET', 'Эко-полимеры', 'Батарейки', 'Одежда', 'Стеклотара'],
        acceptedTypesEn: ['PET Plastics', 'Eco-polymers', 'Batteries', 'Textiles', 'Glassware'],
        distanceKm: 2.5,
        rating: 4.8
      }
    ]
  },
  {
    id: 'singapore',
    name: 'Сингапур',
    nameEn: 'Singapore',
    country: 'Сингапур',
    countryEn: 'Singapore',
    region: 'Юго-Восточная Азия',
    regionEn: 'Southeast Asia',
    coordinates: [1.3521, 103.8198],
    ecoIndex: 88,
    indexStatus: 'Отлично',
    aqi: 20,
    pm25: 5.1,
    pm10: 11.2,
    waterQuality: 96,
    recyclingRate: 61,
    greeneryLevel: 66,
    summary: 'Город в природе (City in Nature). Мировой эталон водной независимости NEWater (глубокая очистка сточных вод), зеленые небоскребы с вертикальными джунглями и охлаждающие парки Gardens by the Bay.',
    summaryEn: 'The world\'s leading "City in Nature". Closed-loop NEWater water recycling, mandatory green architecture codes, and bioclimatic skyscraper supertrees.',
    topProblems: [
      {
        title: 'Экваториальный тепловой стресс и влажность',
        titleEn: 'Equatorial Heat Stress & High Humidity',
        description: 'Круглогодично высокая температура и влажность требуют энергоэффективных систем охлаждения.',
        descriptionEn: 'High year-round wet-bulb temperatures demanding advanced district district cooling grids.',
        severity: 'high',
        impact: 'Высокое энергопотребление охлаждения'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+0.8°C',
        airQuality: 'Идеальный (AQI 10)',
        renewableShare: 'Импорт чистой солнечной энергии из Австралии и плавучие СЭС',
        greenZones: '100% зданий с зелеными фасадами',
        description: 'Подземные централизованные системы охлаждения (District Cooling), мангровые защитные барьеры от подъема океана.',
        descriptionEn: 'ASEAN power grid solar import, living mangrove coastal surge barriers, and zero-carbon district cooling.'
      },
      negative: {
        tempChange: '+2.8°C',
        airQuality: 'Периодический трансграничный дым от торфяников',
        heatwavesDays: 'Круглогодичный высокий влажный индекс',
        waterDeficit: 'Подъем уровня Южно-Китайского моря на 35 см',
        description: 'Угроза затопления прибрежных терминалов и аэропорта Чанги.',
        descriptionEn: 'Extreme wet-bulb heat events and rising seas threatening coastal reclamation zones.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-sg-1',
        name: 'Marina Barrage Sustainable Gallery',
        nameEn: 'Marina Barrage Sustainable Gallery',
        address: '8 Marina Way',
        addressEn: '8 Marina Way',
        workingHours: '09:00 - 21:00',
        acceptedTypes: ['Электронный лом', 'Пластик', 'Бумага', 'Металл'],
        acceptedTypesEn: ['E-waste', 'Plastics', 'Paper', 'Metals'],
        distanceKm: 2.1,
        rating: 4.9
      }
    ]
  },
  {
    id: 'beijing',
    name: 'Пекин',
    nameEn: 'Beijing',
    country: 'Китай',
    countryEn: 'China',
    region: 'Восточная Азия',
    regionEn: 'East Asia',
    coordinates: [39.9042, 116.4074],
    ecoIndex: 62,
    indexStatus: 'Умеренно',
    aqi: 55,
    pm25: 16.2,
    pm10: 38.0,
    waterQuality: 78,
    recyclingRate: 45,
    greeneryLevel: 48,
    summary: 'Грандиозный прогресс «Битвы за синее небо» (Blue Sky Defense): снижение смога на 60% за десятилетие, полный перевод отопления на газ и ветропарки Внутренней Монголии, Зеленая Великая Стена.',
    summaryEn: 'Remarkable success of the "Blue Sky Defense" clean air campaign reducing PM2.5 by over 60%, powered by Inner Mongolian wind/solar supergrids.',
    topProblems: [
      {
        title: 'Песчаные бури из пустыни Гоби',
        titleEn: 'Gobi Desert Spring Sandstorms',
        description: 'Весенний перенос мелкодисперсного песка в бассейн Пекина.',
        descriptionEn: 'Springtime mineral dust incursions from expanding northern desertification zones.',
        severity: 'high',
        impact: 'Резкие скачки PM10 весной'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.4°C',
        airQuality: 'Чистый столичный (AQI 25)',
        renewableShare: '85% чистой энергии от пустынных СЭС и ветра',
        greenZones: 'Зрелая Великая Зеленая Стена вокруг мегаполиса',
        description: '100% электромобили, водородные грузовики, масштабные лесополосы для сдерживания песков Гоби.',
        descriptionEn: 'Complete road electrification, hydrogen freight transport, and stabilized Gobi shelterbelt forests.'
      },
      negative: {
        tempChange: '+3.9°C',
        airQuality: 'Пылевые периоды',
        heatwavesDays: '35 дней жары > +40°C',
        waterDeficit: 'Нагрузка на проект переброски вод «Юг-Север»',
        description: 'Хронический дефицит грунтовых вод, экстремальная жара на Великой Китайской равнине.',
        descriptionEn: 'Groundwater table drawdown and acute heatwave vulnerability across the North China Plain.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-bj-1',
        name: 'Chaoyang Smart Recycling Station',
        nameEn: 'Chaoyang Smart Recycling Station',
        address: 'Chaoyang Park South Rd',
        addressEn: 'Chaoyang Park South Rd',
        workingHours: '08:00 - 20:00',
        acceptedTypes: ['Умный прием пластика', 'Бумага', 'Батареи', 'Текстиль'],
        acceptedTypesEn: ['AI Plastic sorting', 'Paper', 'Batteries', 'Textiles'],
        distanceKm: 3.0,
        rating: 4.8
      }
    ]
  },
  {
    id: 'new-delhi',
    name: 'Нью-Дели',
    nameEn: 'New Delhi',
    country: 'Индия',
    countryEn: 'India',
    region: 'Южная Азия',
    regionEn: 'South Asia',
    coordinates: [28.6139, 77.2090],
    ecoIndex: 38,
    indexStatus: 'Критично',
    aqi: 145,
    pm25: 58.4,
    pm10: 128.0,
    waterQuality: 52,
    recyclingRate: 28,
    greeneryLevel: 22,
    summary: 'Столица Индо-Гангской равнины с острыми климатическими вызовами: осенний смог от сжигания стерни, экстремальный летний зной до +49°C и загрязнение священной реки Ямуна.',
    summaryEn: 'India\'s capital region facing complex air quality and heat challenges: post-monsoon stubble burning smog, extreme summer wet-bulb temperatures, and Yamuna river recovery.',
    topProblems: [
      {
        title: 'Осенний катастрофический смог',
        titleEn: 'Post-Monsoon Agricultural Crop Smog',
        description: 'Сжигание пожнивных остатков в соседних штатах и слабая ветровая тяга.',
        descriptionEn: 'Regional agricultural residue burning combined with autumn thermal inversions triggering hazardous air crises.',
        severity: 'critical',
        impact: 'AQI свыше 400 в ноябре'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.8°C',
        airQuality: 'Умеренно-чистый (AQI 45-60)',
        renewableShare: '80% энергии от солнечных парков Раджастана',
        greenZones: 'Очищенная Ямуна и биощит хребта Аравалли',
        description: 'Переработка сельхозотходов в биопеллеты, 100% электротранспорт (электро-рикши и автобусы), солнечные крыши.',
        descriptionEn: 'Agri-waste to bio-pellet conversion, 100% electric e-rickshaws and buses, and restored Aravalli green corridor.'
      },
      negative: {
        tempChange: '+5.0°C',
        airQuality: 'Опасный для жизни смог',
        heatwavesDays: '65 дней жары > +46°C',
        waterDeficit: 'Истощение водоносного горизонта на 60%',
        description: 'Невыносимый тепловой стресс, пересыхание колодцев, массовые отключения электроэнергии.',
        descriptionEn: 'Uninhabitable wet-bulb temperature thresholds, severe groundwater exhaustion, and urban heat crises.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-del-1',
        name: 'Chintan Environmental Waste Hub',
        nameEn: 'Chintan Environmental Waste Hub',
        address: 'Connaught Place, Block C',
        addressEn: 'Connaught Place, Block C',
        workingHours: '09:00 - 18:00',
        acceptedTypes: ['Пластик', 'Электронный лом', 'Картон', 'Стекло'],
        acceptedTypesEn: ['Plastics', 'E-waste', 'Cardboard', 'Glass'],
        distanceKm: 2.2,
        rating: 4.7
      }
    ]
  },
  {
    id: 'dubai',
    name: 'Дубай',
    nameEn: 'Dubai',
    country: 'ОАЭ',
    countryEn: 'UAE',
    region: 'Ближний Восток',
    regionEn: 'Middle East',
    coordinates: [25.2048, 55.2708],
    ecoIndex: 66,
    indexStatus: 'Хорошо',
    aqi: 46,
    pm25: 12.8,
    pm10: 42.0,
    waterQuality: 88,
    recyclingRate: 42,
    greeneryLevel: 28,
    summary: 'Оазис инноваций в Аравийской пустыне. Крупнейший в мире солнечный парк Мохаммеда бин Рашида (5000 МВт), опреснение на ВИЭ и климатический генеральный план Dubai 2040.',
    summaryEn: 'Pioneering desert innovation hub featuring the 5,000 MW Mohammed bin Rashid Al Maktoum Solar Park, RO solar desalination, and Dubai 2040 Urban Master Plan.',
    topProblems: [
      {
        title: 'Пустынные песчаные бури (Шамал)',
        titleEn: 'Shamal Desert Dust Storms',
        description: 'Сезонные ветра поднимают мелкодисперсную кварцевую пыль.',
        descriptionEn: 'High-velocity Shamal winds carrying fine quartz dust across the Gulf coastline.',
        severity: 'high',
        impact: 'Скачки минеральной взвеси PM10'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Чистый кондиционированный оазис (AQI 20)',
        renewableShare: '100% солнечной энергии пустыни и зеленого водорода',
        greenZones: 'Зеленый пояс 100 млн пустынных деревьев (Гаф)',
        description: 'Полная автономность на солнечной энергии, опреснение методом обратного осмоса на ВИЭ, закрытые охлаждаемые зеленые коридоры.',
        descriptionEn: '100% solar and green hydrogen power, mangrove coastal carbon sinks, and temperature-controlled bioclimatic loop highways.'
      },
      negative: {
        tempChange: '+4.1°C',
        airQuality: 'Пылевой зной',
        heatwavesDays: '80 дней жары > +48°C',
        waterDeficit: 'Удорожание опреснения на 50%',
        description: 'Засоление Персидского залива из-за рассолов опреснителей, критический перегрев открытых пространств.',
        descriptionEn: 'Hypersalinity of Gulf coastal waters from brine discharges and extreme +50°C summer heat spikes.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-dxb-1',
        name: 'Dubai Sustainable City Smart Hub',
        nameEn: 'Dubai Sustainable City Smart Hub',
        address: 'Al Qudra Road',
        addressEn: 'Al Qudra Road',
        workingHours: '08:00 - 20:00',
        acceptedTypes: ['Пластик', 'Стекло', 'Батарейки', 'Электроника', 'Органика'],
        acceptedTypesEn: ['Plastics', 'Glass', 'Batteries', 'E-waste', 'Compost'],
        distanceKm: 6.5,
        rating: 4.9
      }
    ]
  },

  // ==========================================
  // NORTH AMERICA
  // ==========================================
  {
    id: 'new-york',
    name: 'Нью-Йорк',
    nameEn: 'New York',
    country: 'США',
    countryEn: 'United States',
    region: 'Северная Америка',
    regionEn: 'North America',
    coordinates: [40.7128, -74.0060],
    ecoIndex: 72,
    indexStatus: 'Хорошо',
    aqi: 32,
    pm25: 7.8,
    pm10: 15.2,
    waterQuality: 88,
    recyclingRate: 35,
    greeneryLevel: 44,
    summary: 'Один из крупнейших мегаполисов мира с амбициозным планом PlaNYC 2050: защита прибрежных районов Манхэттена «The Big U», переход школьных автобусов на электротягу и парковые коридоры Хай-Лайн.',
    summaryEn: 'Iconic Atlantic metropolis pioneering the "Big U" coastal storm surge barrier, mandatory commercial organic composting, and building carbon caps (Local Law 97).',
    topProblems: [
      {
        title: 'Уязвимость перед ураганами и нагонами Атлантики',
        titleEn: 'Hurricane Storm Surges & Sea Level Rise',
        description: 'Повышение уровня океана угрожает подтоплением метрополитена и набережных Бруклина и Манхэттена.',
        descriptionEn: 'Rising sea levels and Atlantic hurricanes threatening coastal subway lines and lower Manhattan.',
        severity: 'critical',
        impact: 'Риск затопления для 1.2 млн жителей побережья'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Чистый океанический (AQI 18)',
        renewableShare: '80% офшорной ветроэнергетики и солнца',
        greenZones: 'East Side Coastal Resiliency и зеленые крыши на 50% зданий',
        description: 'Барьеры «The Big U» защищают побережье, система сбора дождевых вод предотвращает перегрузку ливневой канализации, нулевые выбросы зданий.',
        descriptionEn: 'Completed Big U flood walls, offshore wind supplying 80% grid power, and widespread green stormwater roofs.'
      },
      negative: {
        tempChange: '+3.5°C',
        airQuality: 'Умеренно-загрязненный в штиль',
        heatwavesDays: '30 дней экстремальной жары > +37°C',
        waterDeficit: 'Подъем уровня воды в заливе на 32 см',
        description: 'Частые штормовые затопления инфраструктуры метро, эрозия песчаных пляжей Кони-Айленд.',
        descriptionEn: 'Repeated subway flooding during king tides and severe heat island effect across asphalt avenues.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-ny-1',
        name: 'Lower East Side Ecology Center',
        nameEn: 'Lower East Side Ecology Center',
        address: 'East River Promenade, FDR Drive',
        addressEn: 'East River Promenade, FDR Drive',
        workingHours: '10:00 - 18:00 (Tue-Sun)',
        acceptedTypes: ['E-waste', 'Компост', 'Текстиль', 'Батарейки', 'Пластик 1-7'],
        acceptedTypesEn: ['E-waste', 'Compost', 'Textiles', 'Batteries', 'Plastics 1-7'],
        distanceKm: 2.3,
        rating: 4.9
      }
    ]
  },
  {
    id: 'los-angeles',
    name: 'Лос-Анджелес',
    nameEn: 'Los Angeles',
    country: 'США',
    countryEn: 'United States',
    region: 'Северная Америка',
    regionEn: 'North America',
    coordinates: [34.0522, -118.2437],
    ecoIndex: 63,
    indexStatus: 'Умеренно',
    aqi: 56,
    pm25: 15.4,
    pm10: 34.0,
    waterQuality: 84,
    recyclingRate: 48,
    greeneryLevel: 32,
    summary: 'Калифорнийский мегаполис, преодолевший исторический фотохимический смог. План «LA Green New Deal»: 100% возобновляемая энергия к 2035, ревитализация реки Лос-Анджелес и солнечные крыши.',
    summaryEn: 'California icon leading clean mobility: LA Green New Deal aiming for 100% renewable grid power by 2035 and complete LA River naturalization.',
    topProblems: [
      {
        title: 'Лесные пожары и дым в горах Сан-Габриэль',
        titleEn: 'Chaparral Wildfires & Smoke Inversion',
        description: 'Ветры Санта-Ана раздувают катастрофические пожары в сухой кустарниковой зоне.',
        descriptionEn: 'Santa Ana wind gusts fueling rapid wildfire spread in surrounding chaparral canyons.',
        severity: 'critical',
        impact: 'Опасные скачки AQI > 200'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Чистый тихоокеанский бриз (AQI 22)',
        renewableShare: '100% солнечной и геотермальной энергии Калифорнии',
        greenZones: 'Оживленная река LA River с непрерывным парком',
        description: '100% электромобили, передовые противопожарные спутниковые системы с ИИ, восстановление прибрежных долин.',
        descriptionEn: 'Zero-emission vehicle mandate, complete solar microgrid independence, and naturalized LA River parkway.'
      },
      negative: {
        tempChange: '+3.7°C',
        airQuality: 'Опасный смог от пожаров',
        heatwavesDays: '45 дней жары в долине Сан-Фернандо',
        waterDeficit: 'Снижение поставок по акведуку реки Колорадо на 35%',
        description: 'Хроническая мегазасуха, масштабные эвакуации из-за пожаров, водные лимиты.',
        descriptionEn: 'Chronic Colorado River megadrought, severe wildfire smoke events, and extreme inland heatwaves.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-la-1',
        name: 'LA Sanitation S.A.F.E. Center',
        nameEn: 'LA Sanitation S.A.F.E. Center',
        address: '4600 Colorado Blvd, Glendale',
        addressEn: '4600 Colorado Blvd, Glendale',
        workingHours: '09:00 - 15:00',
        acceptedTypes: ['E-waste', 'Батарейки', 'Краски', 'Химикаты', 'Пластик'],
        acceptedTypesEn: ['E-waste', 'Batteries', 'Paint', 'Chemicals', 'Plastics'],
        distanceKm: 4.1,
        rating: 4.8
      }
    ]
  },
  {
    id: 'toronto',
    name: 'Торонто',
    nameEn: 'Toronto',
    country: 'Канада',
    countryEn: 'Canada',
    region: 'Северная Америка',
    regionEn: 'North America',
    coordinates: [43.6532, -79.3832],
    ecoIndex: 81,
    indexStatus: 'Отлично',
    aqi: 20,
    pm25: 4.8,
    pm10: 10.5,
    waterQuality: 94,
    recyclingRate: 58,
    greeneryLevel: 54,
    summary: 'Финансовое сердце Канады на берегу Великого озера Онтарио. Уникальная система охлаждения озерной водой Deep Lake Water Cooling, зеленые крыши и сохранение овражных парковых коридоров.',
    summaryEn: 'Leading Great Lakes metropolis utilizing the world\'s largest Deep Lake Water Cooling district cooling system and protecting massive urban ravine ecosystems.',
    topProblems: [
      {
        title: 'Подтопления набережной озера Онтарио',
        titleEn: 'Lake Ontario High Water Storm Surges',
        description: 'Экстремальные колебания уровня воды Великих озер при весеннем таянии.',
        descriptionEn: 'Flash flooding of Toronto Islands and waterfront promenades during spring lake-level surges.',
        severity: 'medium',
        impact: 'Эрозия набережной Дон-Ривер'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.1°C',
        airQuality: 'Кристально чистый (AQI 12)',
        renewableShare: '95% гидро-, атомной и ветроэнергетики',
        greenZones: 'Полная защита системы оврагов Торонто',
        description: 'Порт-Лэндс: новый зеленый остров с защитой от паводков реки Дон, экологичные деревянные небоскребы.',
        descriptionEn: 'Port Lands flood protection island completed, expanded Deep Lake cooling, and massive mass-timber towers.'
      },
      negative: {
        tempChange: '+3.2°C',
        airQuality: 'Дым от бореальных лесных пожаров',
        heatwavesDays: '22 дня жары > +35°C',
        waterDeficit: 'Цветение водорослей на озере Онтарио',
        description: 'Летний смог от лесных пожаров на севере Онтарио, перегрузка ливневой сети.',
        descriptionEn: 'Northern Ontario boreal wildfire smoke plumes and intense flash-flood thunderstorms.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-tor-1',
        name: 'Toronto Drop-Off Depot Commissioners',
        nameEn: 'Toronto Drop-Off Depot Commissioners',
        address: '400 Commissioners St',
        addressEn: '400 Commissioners St',
        workingHours: '07:00 - 18:00',
        acceptedTypes: ['Опасные бытовые отходы', 'Электроника', 'Пластик', 'Стекло', 'Органика'],
        acceptedTypesEn: ['Household hazardous', 'E-waste', 'Plastics', 'Glass', 'Organics'],
        distanceKm: 3.2,
        rating: 4.8
      }
    ]
  },
  {
    id: 'mexico-city',
    name: 'Мехико',
    nameEn: 'Mexico City',
    country: 'Мексика',
    countryEn: 'Mexico',
    region: 'Северная Америка',
    regionEn: 'North America',
    coordinates: [19.4326, -99.1332],
    ecoIndex: 54,
    indexStatus: 'Умеренно',
    aqi: 68,
    pm25: 22.4,
    pm10: 48.0,
    waterQuality: 64,
    recyclingRate: 31,
    greeneryLevel: 36,
    summary: 'Высокогорный мегаполис на высоте 2240 метров в кратере древнего озера Тескоко. Преодолевает проседание грунтов, восстанавливает плавучие сады чинампы Сочимилько и развивает канатный транспорт Cablebús.',
    summaryEn: 'Highland megacity in the volcanic Valley of Mexico. Revitalizing ancient Aztec chinampa wetland gardens in Xochimilco and operating the extensive Cablebús mass-transit network.',
    topProblems: [
      {
        title: 'Проседание грунта из-за откачки грунтовых вод',
        titleEn: 'Severe Land Subsidence & Aquifer Depletion',
        description: 'Откачка подземных горизонтов вызывает проседание центра города до 30 см в год.',
        descriptionEn: 'Groundwater over-extraction causing parts of the historic lacustrine valley floor to sink up to 30 cm annually.',
        severity: 'critical',
        impact: 'Деформация подземных коммуникаций и зданий'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.5°C',
        airQuality: 'Умеренно-чистый горный (AQI 35)',
        renewableShare: '75% солнечной и геотермальной энергии',
        greenZones: 'Возрождение озера Тескоко и парка 12 000 га',
        description: 'Парк Lago de Texcoco улавливает пыль, дождевая вода закачивается обратно в водоносный горизонт, сеть канатных дорог соединяет холмы.',
        descriptionEn: 'Lake Texcoco ecological restoration park, aquifer artificial recharge wells, and 100% electric Cablebús/metro integration.'
      },
      negative: {
        tempChange: '+4.0°C',
        airQuality: 'Опасный озоновый смог',
        heatwavesDays: '40 дней зноя',
        waterDeficit: 'Острый «День Ноль» в системе водоснабжения Куцамала',
        description: 'Критический дефицит воды для 22 млн человек, песчано-солевые бури с осушенного дна озера.',
        descriptionEn: 'Severe "Day Zero" freshwater emergency, lacustrine dust storms, and intensified thermal smog.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-mex-1',
        name: 'Mercado de Trueque Chapultepec',
        nameEn: 'Mercado de Trueque Chapultepec',
        address: 'Bosque de Chapultepec, 1a Seccion',
        addressEn: 'Bosque de Chapultepec, 1st Section',
        workingHours: '08:00 - 15:00',
        acceptedTypes: ['Обмен вторсырья на фермерские овощи', 'Пластик PET', 'Алюминий', 'Тетрапак'],
        acceptedTypesEn: ['Recyclables for local produce exchange', 'PET', 'Aluminum', 'TetraPak'],
        distanceKm: 2.8,
        rating: 4.9
      }
    ]
  },

  // ==========================================
  // SOUTH AMERICA
  // ==========================================
  {
    id: 'sao-paulo',
    name: 'Сан-Паулу',
    nameEn: 'Sao Paulo',
    country: 'Бразилия',
    countryEn: 'Brazil',
    region: 'Южная Америка',
    regionEn: 'South America',
    coordinates: [-23.5505, -46.6333],
    ecoIndex: 58,
    indexStatus: 'Умеренно',
    aqi: 54,
    pm25: 16.5,
    pm10: 34.0,
    waterQuality: 68,
    recyclingRate: 14,
    greeneryLevel: 42,
    summary: 'Крупнейший мегаполис Южного полушария. Ключевые программы: сохранение коридоров Атлантического леса (Mata Atlântica), очистка рек Тиете и Пиньейрос и развитие сети этанолового и электротранспорта.',
    summaryEn: 'Largest metropolis in the Southern Hemisphere. Major priorities include Atlantic Forest biodiversity corridors, Pinheiros River ecological recovery, and clean ethanol/electric bus fleets.',
    topProblems: [
      {
        title: 'Уязвимость водохранилища Кантарейра к засухам',
        titleEn: 'Cantareira Reservoir Drought Vulnerability',
        description: 'Сезонное пересыхание источников воды угрожает питьевому снабжению 22-миллионной агломерации.',
        descriptionEn: 'Severe dry season precipitation anomalies threatening the Cantareira freshwater supply system.',
        severity: 'critical',
        impact: 'Угроза дефицита воды для 9 млн человек'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.5°C',
        airQuality: 'Чистый тропический (AQI 25)',
        renewableShare: '100% гидро- и биотопливной генерации',
        greenZones: '+35% биокоридоров Атлантического леса',
        description: 'Очищенные русла рек с линейными парками, защита водосборных бассейнов, дренажные сады на холмах.',
        descriptionEn: 'Restored urban riverbanks with linear biodiverse parks, rainwater retention bioswales, and protected rainforest headwaters.'
      },
      negative: {
        tempChange: '+4.1°C',
        airQuality: 'Опасный в сухой сезон (AQI 120-150)',
        heatwavesDays: '45 дней жары > +38°C',
        waterDeficit: 'Критическое падение запасов воды на 40%',
        description: 'Хронический водный кризис, частые оползни и смоговые накрытия в зимний сухой период.',
        descriptionEn: 'Severe multi-year water rationing, destructive flash-flood landslides in hillside communities, and winter smog.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-sp-1',
        name: 'Coopamare Reciclagem',
        nameEn: 'Coopamare Reciclagem Cooperative',
        address: 'Rua Galeno de Almeida, 65, Pinheiros',
        addressEn: '65 Rua Galeno de Almeida, Pinheiros',
        workingHours: '08:00 - 17:00 (Mon-Fri)',
        acceptedTypes: ['Пластик PET/HDPE', 'Картон', 'Алюминиевые банки', 'Стекло'],
        acceptedTypesEn: ['Plastics PET/HDPE', 'Cardboard', 'Aluminum cans', 'Glass'],
        distanceKm: 3.5,
        rating: 4.8
      }
    ]
  },
  {
    id: 'buenos-aires',
    name: 'Буэнос-Айрес',
    nameEn: 'Buenos Aires',
    country: 'Аргентина',
    countryEn: 'Argentina',
    region: 'Южная Америка',
    regionEn: 'South America',
    coordinates: [-34.6037, -58.3816],
    ecoIndex: 69,
    indexStatus: 'Хорошо',
    aqi: 34,
    pm25: 8.5,
    pm10: 18.0,
    waterQuality: 78,
    recyclingRate: 38,
    greeneryLevel: 46,
    summary: 'Культурная столица на берегах Рио-де-ла-Плата. Известна развитой сетью раздельного сбора отходов с участием городских кооперативов (Recuperadores Urbanos) и экологическим заповедником Костанера Сур.',
    summaryEn: 'Vibrant Rio de la Plata port city recognized for its formalized urban waste cooperatives (Recuperadores Urbanos) and Costanera Sur ecological wetland reserve.',
    topProblems: [
      {
        title: 'Загрязнение бассейна реки Матанса-Риачуэло',
        titleEn: 'Matanza-Riachuelo River Basin Pollution',
        description: 'Историческое промышленное загрязнение речного русла.',
        descriptionEn: 'Legacy industrial effluent requiring ongoing multi-stage environmental dredging and remediation.',
        severity: 'high',
        impact: 'Нагрузка на южные районы города'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.3°C',
        airQuality: 'Чистый пампасский бриз (AQI 18)',
        renewableShare: '85% энергии от ветра Патагонии и солнца',
        greenZones: 'Расширение заповедника Костанера Сур',
        description: 'Полная очистка реки Риачуэло, 100% раздельный сбор с роботизированными сортировочными центрами, солнечный транспорт.',
        descriptionEn: 'Completed Riachuelo environmental clean-up, 100% cooperative circular recycling, and clean electric bus lines.'
      },
      negative: {
        tempChange: '+3.5°C',
        airQuality: 'Умеренно-запыленный',
        heatwavesDays: '28 дней экстремальной жары',
        waterDeficit: 'Штормовые нагоны Судестада и подтопления',
        description: 'Учащение внезапных нагонных наводнений Судестада с залива, подтопление низменных кварталов.',
        descriptionEn: 'Intensified Sudestada storm surges flooding low-lying riverfront barrios and summer heat waves.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-ba-1',
        name: 'Punto Verde Especial Parque Centenario',
        nameEn: 'Punto Verde Especial Parque Centenario',
        address: 'Av. Diaz Velez & Roentgen',
        addressEn: 'Av. Diaz Velez & Roentgen',
        workingHours: '11:00 - 19:00',
        acceptedTypes: ['Пластик', 'Стекло', 'Макулатура', 'E-waste', 'Батарейки'],
        acceptedTypesEn: ['Plastics', 'Glass', 'Paper', 'E-waste', 'Batteries'],
        distanceKm: 2.7,
        rating: 4.8
      }
    ]
  },
  {
    id: 'santiago',
    name: 'Сантьяго',
    nameEn: 'Santiago',
    country: 'Чили',
    countryEn: 'Chile',
    region: 'Южная Америка',
    regionEn: 'South America',
    coordinates: [-33.4489, -70.6693],
    ecoIndex: 65,
    indexStatus: 'Умеренно',
    aqi: 62,
    pm25: 18.9,
    pm10: 42.0,
    waterQuality: 82,
    recyclingRate: 34,
    greeneryLevel: 39,
    summary: 'Столица в Андах с крупнейшим за пределами Китая парком электробусов. Борется с зимней инверсией и таянием андских ледников через программу Santiago Respira.',
    summaryEn: 'Andean metropolis operating the largest electric bus fleet outside China (RED Movilidad), actively mitigating winter valley smog and glacial melt.',
    topProblems: [
      {
        title: 'Таяние андских ледников и засуха (Megadrought)',
        titleEn: 'Andean Glacier Retreat & 14-Year Megadrought',
        description: 'Сокращение ледников в истоках реки Мапочо ставит под угрозу водоснабжение 7 млн человек.',
        descriptionEn: 'Prolonged central Chilean megadrought reducing Mapocho and Maipo river glacial water inflows.',
        severity: 'critical',
        impact: 'Угроза питьевой воде'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.4°C',
        airQuality: 'Чистый горный (AQI 22)',
        renewableShare: '100% солнечной энергии пустыни Атакама и геотермальной энергии',
        greenZones: 'Городские леса на склонах холмов Сан-Кристобаль',
        description: '100% электротранспорт, передовые системы сбора талых вод и очистки стоков, ксерофитное озеленение.',
        descriptionEn: 'Atacama solar transmission supergrid, native drought-tolerant xeriscaping, and closed-loop wastewater reuse.'
      },
      negative: {
        tempChange: '+3.9°C',
        airQuality: 'Опасный зимний смог',
        heatwavesDays: '40 дней жары > +38°C',
        waterDeficit: 'Падение запасов воды на 50%',
        description: 'Острое нормирование воды по районам, высыхание реки Мапочо, засуха в сельскохозяйственных долинах.',
        descriptionEn: 'Strict urban water rationing, desiccation of Mapocho riverbeds, and severe winter inversion pollution.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-san-1',
        name: 'Punto Limpio Parque Araucano',
        nameEn: 'Punto Limpio Parque Araucano',
        address: 'Av. Presidente Riesco 5698',
        addressEn: '5698 Av. Presidente Riesco',
        workingHours: '08:30 - 20:00',
        acceptedTypes: ['Пластик PET/PP', 'Стекло', 'Алюминий', 'Картон', 'Тетрапак'],
        acceptedTypesEn: ['Plastics PET/PP', 'Glass', 'Aluminum', 'Cardboard', 'TetraPak'],
        distanceKm: 4.3,
        rating: 4.9
      }
    ]
  },

  // ==========================================
  // AFRICA
  // ==========================================
  {
    id: 'cairo',
    name: 'Каир',
    nameEn: 'Cairo',
    country: 'Египет',
    countryEn: 'Egypt',
    region: 'Северная Африка',
    regionEn: 'North Africa',
    coordinates: [30.0444, 31.2357],
    ecoIndex: 42,
    indexStatus: 'Критично',
    aqi: 112,
    pm25: 41.5,
    pm10: 95.0,
    waterQuality: 62,
    recyclingRate: 48,
    greeneryLevel: 18,
    summary: 'Древний мегаполис на реке Нил в окружении пустыни Сахара. Знаменитое сообщество «Заббалин» обеспечивает до 85% ручной переработки собранных отходов. Строится гигантский солнечный парк Benban.',
    summaryEn: 'Ancient metropolis on the Nile River. Home to the renowned Zabbaleen informal recycling community achieving up to 85% material recovery, and scaling the massive Benban Solar Park.',
    topProblems: [
      {
        title: 'Опустынивание и песчано-пылевые бури (Хамасин)',
        titleEn: 'Khamaseen Sand & Dust Storms',
        description: 'Перенос мелкодисперсных минеральных частиц из Сахары вызывает экстремальные скачки PM10.',
        descriptionEn: 'Intense seasonal desert storms transporting Saharan mineral dust across the Nile Delta.',
        severity: 'critical',
        impact: 'AQI свыше 250 во время песчаных штормов'
      },
      {
        title: 'Угроза водному балансу реки Нил',
        titleEn: 'Nile Basin Freshwater Vulnerability',
        description: 'Рост населения и испарение в условиях потепления обостряют дефицит пресной воды.',
        descriptionEn: 'Extreme heat and upstream damming pressuring Egypt\'s vital 97% reliance on Nile River flows.',
        severity: 'critical',
        impact: '97% зависимости Египта от стока Нила'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.6°C',
        airQuality: 'Умеренно-чистый (AQI 45)',
        renewableShare: '75% солнечной энергии Сахары',
        greenZones: 'Зеленый пояс 100 млн деревьев и капельный полив',
        description: 'Солнечные опреснительные комплексы на Красном море, модернизированные эко-хабы Заббалин, умный мониторинг Нила.',
        descriptionEn: 'Red Sea solar-powered desalination, modernized Zabbaleen eco-hubs, and AI-managed drip irrigation shelterbelts.'
      },
      negative: {
        tempChange: '+4.6°C',
        airQuality: 'Очень нездоровый (AQI 180+)',
        heatwavesDays: '60 дней экстремального зноя > +45°C',
        waterDeficit: 'Острая нехватка пресной воды до 45%',
        description: 'Засоление дельты Нила из-за подъема уровня Средиземного моря, опустынивание сельскохозяйственных угодий.',
        descriptionEn: 'Mediterranean sea level rise salinizing fertile Nile Delta farmland with acute fresh water shortages.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-cai-1',
        name: 'Mokattam Recycling Hub (Zabbaleen Center)',
        nameEn: 'Mokattam Recycling Hub (Zabbaleen Center)',
        address: 'Manshiyat Naser, Mokattam Mountain',
        addressEn: 'Manshiyat Naser, Mokattam Mountain',
        workingHours: '08:00 - 19:00',
        acceptedTypes: ['Пластик всех видов', 'Бумага', 'Металлы', 'Текстиль', 'Органический компост'],
        acceptedTypesEn: ['All plastics', 'Paper', 'Metals', 'Textiles', 'Organic compost'],
        distanceKm: 4.8,
        rating: 4.9
      }
    ]
  },
  {
    id: 'nairobi',
    name: 'Найроби',
    nameEn: 'Nairobi',
    country: 'Кения',
    countryEn: 'Kenya',
    region: 'Восточная Африка',
    regionEn: 'East Africa',
    coordinates: [-1.2921, 36.8219],
    ecoIndex: 73,
    indexStatus: 'Хорошо',
    aqi: 32,
    pm25: 7.9,
    pm10: 17.5,
    waterQuality: 76,
    recyclingRate: 36,
    greeneryLevel: 56,
    summary: '«Зеленый город под солнцем» (Green City in the Sun). Кения вырабатывает свыше 90% энергии из геотермальных и гидроисточников. Известна строгим запретом пластиковых пакетов и национальным парком Nairobi National Park.',
    summaryEn: 'Kenya\'s "Green City in the Sun", powered by over 90% renewable geothermal and hydro energy, famous for strict plastic bag bans and the unique wildlife corridors of Nairobi National Park.',
    topProblems: [
      {
        title: 'Утилизация отходов в районе Дандора',
        titleEn: 'Dandora Landfill Management',
        description: 'Перегруженность исторической открытой свалки Дандора требует скорейшей рекультивации.',
        descriptionEn: 'Urgent modernization and rehabilitation required for the sprawling historic Dandora landfill.',
        severity: 'high',
        impact: 'Угроза бассейну реки Найроби'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.2°C',
        airQuality: 'Чистый саванно-горный (AQI 16)',
        renewableShare: '100% геотермальной энергии Рифтовой долины',
        greenZones: 'Защищенные коридоры миграции диких животных',
        description: 'Полная переработка отходов в биогаз, восстановление леса Карура, электрические маршрутки «матату».',
        descriptionEn: '100% electric "matatu" minibuses, Karura forest preservation, and advanced waste-to-energy circular facilities.'
      },
      negative: {
        tempChange: '+3.4°C',
        airQuality: 'Умеренно-запыленный',
        heatwavesDays: '20 дней жары',
        waterDeficit: 'Засухи в водосборном бассейне Абердэра',
        description: 'Сезонные перебои в водоснабжении, давление застройки на пути миграции слонов и львов.',
        descriptionEn: 'Severe East African dry spells threatening Aberdare mountain headwaters and wildlife migratory routes.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-nbo-1',
        name: 'Gikomba Eco-Sorting Hub & Karura Center',
        nameEn: 'Gikomba Eco-Sorting Hub & Karura Center',
        address: 'Limuru Road, Karura Gate A',
        addressEn: 'Limuru Road, Karura Gate A',
        workingHours: '08:00 - 17:00',
        acceptedTypes: ['Пластик PET', 'Электроника', 'Стекло', 'Макулатура'],
        acceptedTypesEn: ['PET Plastics', 'E-waste', 'Glass', 'Paper'],
        distanceKm: 3.1,
        rating: 4.8
      }
    ]
  },
  {
    id: 'cape-town',
    name: 'Кейптаун',
    nameEn: 'Cape Town',
    country: 'ЮАР',
    countryEn: 'South Africa',
    region: 'Южная Африка',
    regionEn: 'Southern Africa',
    coordinates: [-33.9249, 18.4241],
    ecoIndex: 80,
    indexStatus: 'Отлично',
    aqi: 22,
    pm25: 5.2,
    pm10: 12.0,
    waterQuality: 92,
    recyclingRate: 54,
    greeneryLevel: 58,
    summary: 'Мегаполис у Столовой горы на стыке двух океанов. Мировой лидер в управлении водным кризисом (преодолел угрозу «Дня Ноль» в 2018 году) и сохранении уникального биоразнообразия флористического царства Финбос.',
    summaryEn: 'Breathtaking coastal city between two oceans at the foot of Table Mountain. Global case study in overcoming the "Day Zero" drought and protecting the hyper-diverse Fynbos floral biome.',
    topProblems: [
      {
        title: 'Лесные пожары в поясе Финбос на склонах гор',
        titleEn: 'Fynbos Wildfires on Table Mountain Slopes',
        description: 'Сухие летние ветры раздувают быстро распространяющиеся пожары.',
        descriptionEn: 'Hot summer "Cape Doctor" southeasterly gales fanning fast-moving mountain fynbos wildfires.',
        severity: 'high',
        impact: 'Угроза эндемичным видам растений'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.1°C',
        airQuality: 'Кристально чистый океанический (AQI 10-15)',
        renewableShare: '90% ветровой и солнечной энергии',
        greenZones: '100% защита национального парка Столовая Гора',
        description: 'Опреснение на ветроэнергетике, замкнутый цикл повторного использования очищенной воды, мониторинг пожаров дронами.',
        descriptionEn: 'Offshore wind seawater desalination, closed-loop aquifer recharge, and AI-drone fynbos wildfire defense.'
      },
      negative: {
        tempChange: '+3.1°C',
        airQuality: 'Периодический дым от пожаров',
        heatwavesDays: '24 дня экстремальной жары',
        waterDeficit: 'Возврат угрозы водного дефицита при засухе',
        description: 'Эрозия атлантических пляжей, снижение запасов водохранилища Теватерсклуф.',
        descriptionEn: 'Re-emergence of severe reservoir depletion and Atlantic storm-surge coastal erosion.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-cpt-1',
        name: 'Drop-off Facility Woodstock',
        nameEn: 'Drop-off Facility Woodstock',
        address: 'Beach Road, Woodstock',
        addressEn: 'Beach Road, Woodstock',
        workingHours: '08:00 - 17:30',
        acceptedTypes: ['Стекло', 'Бумага', 'Пластик', 'Металл', 'Садовые отходы'],
        acceptedTypesEn: ['Glass', 'Paper', 'Plastics', 'Metals', 'Garden waste'],
        distanceKm: 2.4,
        rating: 4.8
      }
    ]
  },

  // ==========================================
  // OCEANIA
  // ==========================================
  {
    id: 'sydney',
    name: 'Сидней',
    nameEn: 'Sydney',
    country: 'Австралия',
    countryEn: 'Australia',
    region: 'Океания',
    regionEn: 'Oceania',
    coordinates: [-33.8688, 151.2093],
    ecoIndex: 86,
    indexStatus: 'Отлично',
    aqi: 18,
    pm25: 4.5,
    pm10: 10.2,
    waterQuality: 95,
    recyclingRate: 64,
    greeneryLevel: 56,
    summary: 'Зеленый прибрежный континент-мегаполис с высокими экологическими стандартами. Стратегия «Sustainable Sydney 2050»: 100% возобновляемая энергия, защита океанических рифов и эвкалиптовых лесов.',
    summaryEn: 'Pristine coastal metropolis pioneering "Sustainable Sydney 2050": 100% renewable municipal energy, marine biodiversity protection in Sydney Harbour, and native bushland restoration.',
    topProblems: [
      {
        title: 'Угроза лесных пожаров (Bushfires) и вторичный дым',
        titleEn: 'Bushfire Smoke & Extreme Dry Spells',
        description: 'Волны аномальной засухи в эвкалиптовых лесах вокруг Сиднейского бассейна вызывают опасные пожары.',
        descriptionEn: 'Extreme summer heatwaves in the Blue Mountains driving bushfire smoke into the harbour basin.',
        severity: 'high',
        impact: 'Периодический перенос густого дыма в залив'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+1.1°C',
        airQuality: 'Кристально чистый морской (AQI 10-15)',
        renewableShare: '100% солнечной и ветровой энергии',
        greenZones: 'Восстановленный бушленд и защита коал в нацпарках',
        description: 'Опреснение на солнечной энергии, пожарные буферные зоны с датчиками ИИ, полный запрет одноразового пластика.',
        descriptionEn: 'Solar-powered desalination, AI sensor bushfire firebreak buffers, and complete phase-out of virgin polymers.'
      },
      negative: {
        tempChange: '+3.2°C',
        airQuality: 'Периодический смог от пожаров (AQI > 130)',
        heatwavesDays: '28 дней жары свыше +42°C',
        waterDeficit: 'Периоды строгих ограничений на использование воды',
        description: 'Эрозия океанских пляжей Бондай и Мэнли, массовая гибель морских видов от тепловых морских волн.',
        descriptionEn: 'Bondi beach coastal sand erosion and marine heatwaves endangering coastal reef ecosystems.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-syd-1',
        name: 'Return and Earn Depot Alexandria',
        nameEn: 'Return and Earn Depot Alexandria',
        address: '108 Euston Rd, Alexandria',
        addressEn: '108 Euston Rd, Alexandria',
        workingHours: '07:00 - 19:00',
        acceptedTypes: ['Пластиковые бутылки', 'Алюминиевые банки', 'Стекло', 'Упаковка для напитков'],
        acceptedTypesEn: ['Plastic bottles', 'Aluminum cans', 'Glass', 'Drink containers'],
        distanceKm: 4.1,
        rating: 4.9
      }
    ]
  },
  {
    id: 'auckland',
    name: 'Окленд',
    nameEn: 'Auckland',
    country: 'Новая Зеландия',
    countryEn: 'New Zealand',
    region: 'Океания / Полинезия',
    regionEn: 'Oceania',
    coordinates: [-36.8485, 174.7633],
    ecoIndex: 93,
    indexStatus: 'Отлично',
    aqi: 10,
    pm25: 2.8,
    pm10: 6.5,
    waterQuality: 98,
    recyclingRate: 72,
    greeneryLevel: 65,
    summary: 'Город парусов между Тихим океаном и Тасмановым морем на вулканическом поле. Мировой лидер по чистоте воздуха, восстановлению реликтовых лесов Каури и защите морских заповедников залива Хаураки.',
    summaryEn: 'The City of Sails nestled between two harbours on a volcanic field. Global top-tier air quality, native Kauri forest protection, and marine sanctuaries in the Hauraki Gulf.',
    topProblems: [
      {
        title: 'Уязвимость перед тропическими циклонами',
        titleEn: 'Pacific Tropical Cyclone Rainbombs',
        description: 'Потепление океана усиливает мощь субтропических атмосферных рек и циклонов.',
        descriptionEn: 'Intensifying atmospheric river rainbombs causing flash flooding in low-lying volcanic catchments.',
        severity: 'medium',
        impact: 'Перегрузка ливнестоков при циклонах'
      }
    ],
    forecast2046: {
      optimistic: {
        tempChange: '+0.8°C',
        airQuality: 'Эталонный чистый океанический (AQI < 8)',
        renewableShare: '100% геотермальной, гидро- и ветроэнергетики',
        greenZones: 'Программа «Predator Free 2050» и восстановление птицы Киви',
        description: 'Полный переход на электропаромы в заливе Хаураки, природные дренажные парки-губки, безуглеродный морской порт.',
        descriptionEn: '100% electric harbour ferries, restored native bird sanctuaries, and spongy catchment wetlands.'
      },
      negative: {
        tempChange: '+2.3°C',
        airQuality: 'Отличный',
        heatwavesDays: '6 дней умеренного тепла',
        waterDeficit: 'Эрозия берегов Тасманова моря',
        description: 'Подъем уровня воды в заливе Вайтемата, повреждение набережных инфраструктур штормами.',
        descriptionEn: 'Waitemata harbour storm-surge erosion and invasive species pressure on native flora.'
      }
    },
    localRecyclingPoints: [
      {
        id: 'rec-akl-1',
        name: 'Waitakere Community Recycling Centre',
        nameEn: 'Waitakere Community Recycling Centre',
        address: '48 The Concourse, Henderson',
        addressEn: '48 The Concourse, Henderson',
        workingHours: '08:30 - 16:30',
        acceptedTypes: ['Все фракции', 'Древесина', 'Электроника', 'Компост', 'Одежда'],
        acceptedTypesEn: ['All fractions', 'Timber', 'E-waste', 'Compost', 'Clothing'],
        distanceKm: 5.2,
        rating: 4.9
      }
    ]
  }
];
