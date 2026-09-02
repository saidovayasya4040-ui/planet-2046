import { MapPoint } from '../types';

export const INITIAL_MAP_POINTS: MapPoint[] = [
  // ==========================================
  // MOSCOW
  // ==========================================
  {
    id: 'pt-m-1',
    cityId: 'moscow',
    title: 'Несанкционированная свалка стройотходов',
    titleEn: 'Unauthorized Construction Waste Dump',
    type: 'problem',
    category: 'dump',
    categoryLabel: 'Свалка отходов',
    categoryLabelEn: 'Waste Dump',
    coordinates: [55.6885, 37.7452],
    address: 'ЮВАО, промзона Курьяново, Проектируемый проезд № 4294',
    addressEn: 'Kuryanovo Industrial Zone, Moscow',
    description: 'Скопление бетонных обломков, битого кирпича и полимерных мешков на площади около 400 кв.м. Обращение направлено в Росприроднадзор.',
    descriptionEn: 'Accumulation of concrete rubble, brick fragments and plastic sacks spanning 400 sq.m.',
    imageUrl: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400',
    status: 'pending',
    createdAt: '2026-08-14',
    authorName: 'Дмитрий С.',
    votesCount: 42
  },
  {
    id: 'pt-m-2',
    cityId: 'moscow',
    title: 'Загрязнение русла реки Сходня',
    titleEn: 'Skhodnya River Water Pollution',
    type: 'problem',
    category: 'water_pollution',
    categoryLabel: 'Загрязнение воды',
    categoryLabelEn: 'Water Pollution',
    coordinates: [55.8451, 37.4082],
    address: 'СЗАО, парк Братцево, пойма р. Сходня',
    addressEn: 'Bratsevo Park, Skhodnya Floodplain, Moscow',
    description: 'Маслянистая пленка на поверхности воды и характерный запах нефтепродуктов. Зафиксирован несанкционированный сброс из ливневого коллектора.',
    descriptionEn: 'Oily film on water surface with petrochemical odor from an unauthorized stormwater drainage outlet.',
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-08-19',
    authorName: 'Эко-патруль СЗАО',
    votesCount: 88
  },
  {
    id: 'pt-m-3',
    cityId: 'moscow',
    title: 'Флагманский Экоцентр «Сборка»',
    titleEn: 'Sborka Flagship Ecocenter',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Эко-центр (60+ фракций)',
    categoryLabelEn: 'Ecocenter (60+ fractions)',
    coordinates: [55.7601, 37.6418],
    address: 'Потаповский пер., 5с2 (м. Чистые пруды)',
    addressEn: '5/2 Potapovsky Lane, Moscow',
    description: 'Прием более 60 видов вторсырья: редкие виды пластика, фольга, зубные щетки, пластиковые карты, электроника, одежда и книги. Лекторий и музей переработки.',
    descriptionEn: 'Accepts 60+ recyclable streams: hard-to-recycle plastics, foils, e-waste, clothing, books, and eco-museum.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-01-10',
    authorName: 'Куратор Сборка',
    votesCount: 310
  },
  {
    id: 'pt-m-4',
    cityId: 'moscow',
    title: 'Контейнер фонда «Второе Дыхание»',
    titleEn: 'Vtoroe Dykhanie Charity Textile Box',
    type: 'recycling',
    category: 'clothes',
    categoryLabel: 'Прием текстиля и одежды',
    categoryLabelEn: 'Textiles & Garment Reuse',
    coordinates: [55.7981, 37.5856],
    address: 'ул. Большая Новодмитровская, 36 (Дизайн-завод Флакон)',
    addressEn: '36 Bolshaya Novodmitrovskaya St (Flacon), Moscow',
    description: 'Сбор ненужной чистой одежды и обуви. Вещи в отличном состоянии передаются нуждающимся семьям в регионах, ветошь отправляется на переработку в шумоизоляцию.',
    descriptionEn: 'Clean clothing and footwear collection for charity redistribution and industrial textile recycling.',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-02-14',
    authorName: 'Фонд Второе Дыхание',
    votesCount: 145
  },

  // ==========================================
  // SAINT PETERSBURG
  // ==========================================
  {
    id: 'pt-spb-1',
    cityId: 'spb',
    title: 'Пластиковый мусор на диком пляже Финского залива',
    titleEn: 'Plastic Waste on Gulf of Finland Coast',
    type: 'problem',
    category: 'plastic',
    categoryLabel: 'Пластиковое загрязнение',
    categoryLabelEn: 'Plastic Pollution',
    coordinates: [59.9882, 30.1021],
    address: 'Приморский р-н, береговая линия у Лахта-Центра',
    addressEn: 'Lakhta Center Coastline, Saint Petersburg',
    description: 'Вынос пластиковых бутылок, одноразовой посуды и рыболовных сетей после шторма. Требуется волонтерская уборка побережья.',
    descriptionEn: 'Marine plastic litter and discarded fishing lines washed ashore after Baltic gale storms.',
    imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=400',
    status: 'pending',
    createdAt: '2026-08-11',
    authorName: 'Анна М.',
    votesCount: 56
  },
  {
    id: 'pt-spb-2',
    cityId: 'spb',
    title: 'Эко-Лофт «Зеленка» & Ресайкл-лаборатория',
    titleEn: 'Zelenka Eco-Loft & Recycle Lab',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Раздельный сбор и апсайклинг',
    categoryLabelEn: 'Recycling & Upcycling Lab',
    coordinates: [59.9205, 30.3541],
    address: 'Лиговский пр-т, 74 (Лофт Проект Этажи)',
    addressEn: '74 Ligovsky Prospekt, Saint Petersburg',
    description: 'Пункт приема пластиковых крышечек, блистеров от лекарств, аэрозолей и кассовых чеков. Мастер-классы по переработке пластика в интерьерные плиты.',
    descriptionEn: 'Specialty recycling for bottle caps, medicine blisters, aerosols, and receipts with upcycling workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-03-01',
    authorName: 'Эко-сообщество СПб',
    votesCount: 198
  },

  // ==========================================
  // ALMATY
  // ==========================================
  {
    id: 'pt-alm-1',
    cityId: 'almaty',
    title: 'Смог и выбросы частного сектора',
    titleEn: 'Foothill Smoke Inversion & Solid Fuels',
    type: 'problem',
    category: 'emissions',
    categoryLabel: 'Загрязнение воздуха',
    categoryLabelEn: 'Air Pollution',
    coordinates: [43.2014, 76.8451],
    address: 'мкр. Калкаман-2, ул. Ашимова',
    addressEn: 'Kalkaman-2, Ashimov St, Almaty',
    description: 'Сильное задымление в нижней части города в вечернее время. Сжигание резины и низкокачественного угля в частных банях и котельных.',
    descriptionEn: 'Dense particulate smoke in lower city basins during evening heating peaks.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-08-05',
    authorName: 'Алмаз Т.',
    votesCount: 112
  },
  {
    id: 'pt-alm-2',
    cityId: 'almaty',
    title: 'Эко-хаб «Tazalyk Almaty»',
    titleEn: 'Tazalyk Almaty Eco-Hub',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Городской пункт приема',
    categoryLabelEn: 'City Recycling Hub',
    coordinates: [43.2412, 76.9056],
    address: 'пр. Абая, 150/230 (уг. ул. Розыбакиева)',
    addressEn: '150/230 Abay Ave, Almaty',
    description: 'Круглосуточный прием стекла, алюминиевых банок, макулатуры, твердого пластика PET и HDPE. Начисление эко-бонусов в мобильном приложении.',
    descriptionEn: '24/7 drop-off for glass, aluminum cans, paper, and rigid PET/HDPE plastics with eco-points.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-04-12',
    authorName: 'Tazalyk Team',
    votesCount: 220
  },

  // ==========================================
  // LONDON
  // ==========================================
  {
    id: 'pt-lon-1',
    cityId: 'london',
    title: 'Southwark Reuse & Recycling Depot',
    titleEn: 'Southwark Reuse & Recycling Depot',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Круглосуточный ресайклинг-центр',
    categoryLabelEn: '24/7 Circular Recycling Depot',
    coordinates: [51.4875, -0.0634],
    address: 'Devon Street, off Old Kent Road, London SE15 1AL',
    addressEn: 'Devon Street, off Old Kent Road, London SE15 1AL',
    description: 'Комплексный центр приема бытовой техники, стройматериалов, древесины, масел, аккумуляторов и садовых отходов.',
    descriptionEn: 'Comprehensive facility accepting e-waste, construction timber, engine oils, batteries, and garden compost.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-02-18',
    authorName: 'Southwark Council',
    votesCount: 185
  },
  {
    id: 'pt-lon-2',
    cityId: 'london',
    title: 'Thames Tideway Storm Overflow Monitoring',
    titleEn: 'Thames Tideway Storm Overflow Monitoring',
    type: 'problem',
    category: 'water_pollution',
    categoryLabel: 'Мониторинг ливнестоков',
    categoryLabelEn: 'Stormwater Runoff Monitoring',
    coordinates: [51.5033, -0.0122],
    address: 'Isle of Dogs, River Thames Embankment',
    addressEn: 'Isle of Dogs, River Thames Embankment',
    description: 'Датчики контролируют перелив воды во время штормов до полного ввода суперколлектора Thames Tideway Tunnel.',
    descriptionEn: 'Water quality sensors monitoring river overflow levels during flash storms.',
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-05-10',
    authorName: 'Thames21 River Trust',
    votesCount: 94
  },

  // ==========================================
  // BERLIN
  // ==========================================
  {
    id: 'pt-ber-1',
    cityId: 'berlin',
    title: 'BSR Recyclinghof Neukölln & Re-Use Shop',
    titleEn: 'BSR Recyclinghof Neukölln & Re-Use Shop',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Городской эко-центр BSR',
    categoryLabelEn: 'BSR Municipal Eco-Center',
    coordinates: [52.4589, 13.4356],
    address: 'Gradestraße 73, 12347 Berlin',
    addressEn: 'Gradestraße 73, 12347 Berlin',
    description: 'Официальный центр утилизации: прием опасных веществ, электроприборов, макулатуры и магазин повторного использования «NochMall».',
    descriptionEn: 'Official recycling yard with hazardous chemical drop-off and "NochMall" second-hand upcycling store.',
    imageUrl: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-01-20',
    authorName: 'Berliner Stadtreinigung',
    votesCount: 260
  },

  // ==========================================
  // TOKYO
  // ==========================================
  {
    id: 'pt-tok-1',
    cityId: 'tokyo',
    title: 'Shinjuku Smart Circular Resource Center',
    titleEn: 'Shinjuku Smart Circular Resource Center',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Центр сортировки 15 фракций',
    categoryLabelEn: '15-Stream Sorting Facility',
    coordinates: [35.6895, 139.6917],
    address: '2-11-4 Nishi-Shinjuku, Shinjuku-ku, Tokyo',
    addressEn: '2-11-4 Nishi-Shinjuku, Shinjuku-ku, Tokyo',
    description: 'Высокотехнологичный пункт сортировки пластика по типам полимеров, измельчение ПЭТ-бутылок, пункт сбора портативных аккумуляторов.',
    descriptionEn: 'High-tech polymer separation hub, PET flaking stations, and lithium battery recycling lockers.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-03-15',
    authorName: 'Tokyo Eco Bureau',
    votesCount: 310
  },

  // ==========================================
  // SINGAPORE
  // ==========================================
  {
    id: 'pt-sg-1',
    cityId: 'singapore',
    title: 'Marina Barrage Sustainability Center & NEWater Hub',
    titleEn: 'Marina Barrage Sustainability Center & NEWater Hub',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Эко-парк и рециклинг воды',
    categoryLabelEn: 'Eco-Park & Water Reclamation Hub',
    coordinates: [1.2806, 103.8711],
    address: '8 Marina Way, Singapore 018951',
    addressEn: '8 Marina Way, Singapore 018951',
    description: 'Интерактивная выставка замкнутого водного цикла Сингапура, сдача электронного лома и солнечные батареи на зеленой крыше.',
    descriptionEn: 'Interactive exhibition of Singapore\'s closed-loop water recovery, e-waste drop-off, and rooftop green park.',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-01-05',
    authorName: 'PUB Singapore',
    votesCount: 420
  },

  // ==========================================
  // NEW YORK
  // ==========================================
  {
    id: 'pt-ny-1',
    cityId: 'new-york',
    title: 'Lower East Side Ecology Center Compost & E-Waste',
    titleEn: 'Lower East Side Ecology Center Compost & E-Waste',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Общественный эко-центр',
    categoryLabelEn: 'Community Ecology Hub',
    coordinates: [40.7181, -73.9754],
    address: 'East River Park Promenade, FDR Drive, New York, NY 10002',
    addressEn: 'East River Park Promenade, FDR Drive, New York, NY 10002',
    description: 'Старейший общественный центр Нью-Йорка: прием пищевой органики для компостирования, безопасная утилизация электроники и образовательные семинары.',
    descriptionEn: 'Historic community composting center, electronic waste reclamation station, and urban watershed workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-02-28',
    authorName: 'LESEC Stewards',
    votesCount: 290
  },

  // ==========================================
  // SYDNEY
  // ==========================================
  {
    id: 'pt-syd-1',
    cityId: 'sydney',
    title: 'Return and Earn Depot Alexandria',
    titleEn: 'Return and Earn Depot Alexandria',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Автоматизированный пункт Return & Earn',
    categoryLabelEn: 'Automated Return & Earn Depot',
    coordinates: [-33.9102, 151.1925],
    address: '108 Euston Rd, Alexandria NSW 2015, Australia',
    addressEn: '108 Euston Rd, Alexandria NSW 2015, Australia',
    description: 'Высокоскоростные автоматы приема банок и бутылок с выплатой 10 центов за каждую единицу тары или переводом на благотворительность.',
    descriptionEn: 'High-speed reverse vending depot refunding 10c per eligible drink container or direct donation to wildlife shelters.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-03-22',
    authorName: 'NSW EPA',
    votesCount: 350
  },

  // ==========================================
  // CAPE TOWN
  // ==========================================
  {
    id: 'pt-cpt-1',
    cityId: 'cape-town',
    title: 'Woodstock Municipal Drop-off Facility',
    titleEn: 'Woodstock Municipal Drop-off Facility',
    type: 'recycling',
    category: 'general_recycle',
    categoryLabel: 'Городской пункт сбора вторсырья',
    categoryLabelEn: 'Municipal Resource Drop-off',
    coordinates: [-33.9281, 18.4485],
    address: 'Beach Road, Woodstock, Cape Town 7925',
    addressEn: 'Beach Road, Woodstock, Cape Town 7925',
    description: 'Прием макулатуры, стекла, моторных масел, строительных отходов и ветвей для производства органической щепы и мульчи.',
    descriptionEn: 'Accepts garden clippings for organic mulching, scrap metals, motor lubricants, and household recyclables.',
    imageUrl: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&q=80&w=400',
    status: 'verified',
    createdAt: '2026-04-18',
    authorName: 'City of Cape Town Solid Waste',
    votesCount: 190
  }
];
