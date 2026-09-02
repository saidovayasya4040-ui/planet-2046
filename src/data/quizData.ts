import { QuizQuestion, QuizResult } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Транспорт и мобильность',
    title: 'Как вы чаще всего передвигаетесь по городу и за его пределами?',
    subtitle: 'Транспортный сектор генерирует до 30% всех городских парниковых газов.',
    options: [
      {
        id: 'trans-1',
        label: 'Пешком, на обычном велосипеде или самокате',
        co2KgYear: 80,
        points: 1,
        tip: 'Минимальный углеродный след и польза для здоровья!'
      },
      {
        id: 'trans-2',
        label: 'Метро, трамваи, электробусы и поезда',
        co2KgYear: 450,
        points: 2,
        tip: 'Электрический общественный транспорт снижает выбросы в 4-6 раз.'
      },
      {
        id: 'trans-3',
        label: 'Личный гибрид/электромобиль или каршеринг',
        co2KgYear: 1200,
        points: 3,
        tip: 'Электромобили чище ДВС, но требуют внимания к источнику зарядки.'
      },
      {
        id: 'trans-4',
        label: 'Личный бензиновый / дизельный автомобиль каждый день',
        co2KgYear: 3200,
        points: 4,
        tip: 'ДВС выделяет около 180-240 г CO2 на каждый пройденный километр.'
      }
    ]
  },
  {
    id: 2,
    category: 'Питание и рацион',
    title: 'Какой у вас типичный рацион питания в течение недели?',
    subtitle: 'Животноводство ответственно за 14.5% глобальных парниковых газов и расход пресной воды.',
    options: [
      {
        id: 'diet-1',
        label: 'Растительный рацион (веган / 90% растительная пища)',
        co2KgYear: 600,
        points: 1,
        tip: 'Растительная диета сокращает личный углеродный след питания на 60%.'
      },
      {
        id: 'diet-2',
        label: 'Вегетарианство или рыба (без красного мяса)',
        co2KgYear: 1100,
        points: 2,
        tip: 'Отказ от говядины и баранины — самый мощный рычаг оптимизации рациона.'
      },
      {
        id: 'diet-3',
        label: 'Мясо птицы, умеренное потребление мяса (2-3 раза в неделю)',
        co2KgYear: 1800,
        points: 3,
        tip: 'Сбалансированный флекситарианский подход с контролем порций.'
      },
      {
        id: 'diet-4',
        label: 'Красное мясо (говядина, свинина) практически каждый день',
        co2KgYear: 3400,
        points: 4,
        tip: 'Производство 1 кг говядины генерирует до 60 кг эквивалента CO2.'
      }
    ]
  },
  {
    id: 3,
    category: 'Отходы и сортировка',
    title: 'Как вы поступаете с домашними отходами и упаковкой?',
    subtitle: 'Свалки без дегазации выделяют высокоактивный метан (CH4), который в 28 раз опаснее CO2.',
    options: [
      {
        id: 'waste-1',
        label: 'Глубокая сортировка (10+ фракций), компостирование/измельчитель, Zero Waste',
        co2KgYear: 70,
        points: 1,
        tip: 'Максимальный возврат ресурсов во вторичный производственный цикл.'
      },
      {
        id: 'waste-2',
        label: 'Разделяю базовые фракции (пластик, макулатуру, стекло, металл) в синий бак',
        co2KgYear: 280,
        points: 2,
        tip: 'Базовая двухпоточная сортировка спасает до 40% сырья.'
      },
      {
        id: 'waste-3',
        label: 'Сдаю только батарейки и старую технику, остальное в общий контейнер',
        co2KgYear: 650,
        points: 3,
        tip: 'Опасные отходы не попадают в почву, но упаковка отправляется на полигон.'
      },
      {
        id: 'waste-4',
        label: 'Выбрасываю все отходы в один общий пакет',
        co2KgYear: 1150,
        points: 4,
        tip: 'Органические остатки в пакете гниют на полигоне без доступа кислорода.'
      }
    ]
  },
  {
    id: 4,
    category: 'Энергия дома и быт',
    title: 'Как устроено потребление электроэнергии и тепла в вашем доме?',
    subtitle: 'Генерация тепла и электричества — крупнейший глобальный источник эмиссий.',
    options: [
      {
        id: 'energy-1',
        label: 'Светодиоды, класс A+++, термостаты, выключение из розеток / солнечные панели',
        co2KgYear: 350,
        points: 1,
        tip: 'Умный дом и контроль фонового потребления (standby) снижают счета и след.'
      },
      {
        id: 'energy-2',
        label: 'Энергосберегающие лампы, умеренное кондиционирование и отопление',
        co2KgYear: 850,
        points: 2,
        tip: 'Разумный баланс комфорта и энергоэффективности.'
      },
      {
        id: 'energy-3',
        label: 'Стандартные электроприборы, свет горит в нескольких комнатах',
        co2KgYear: 1600,
        points: 3,
        tip: 'Фоновые приборы потребляют до 10-15% электроэнергии впустую.'
      },
      {
        id: 'energy-4',
        label: 'Постоянно включенные обогреватели/кондиционеры при открытых окнах, старая техника',
        co2KgYear: 2800,
        points: 4,
        tip: 'Огромные теплопотери и избыточная нагрузка на электростанцию.'
      }
    ]
  },
  {
    id: 5,
    category: 'Потребление вещей и одежда',
    title: 'Как часто вы покупаете новую одежду, гаджеты и предметы быта?',
    subtitle: 'Индустрия Fast Fashion выбрасывает больше CO2, чем все международные авиарейсы.',
    options: [
      {
        id: 'consump-1',
        label: 'Осознанный минимализм: ремонт, секонд-хенд, аренда, донашивание годами',
        co2KgYear: 150,
        points: 1,
        tip: 'Продление срока службы смартфона на 2 года снижает его след на 50%.'
      },
      {
        id: 'consump-2',
        label: 'Покупаю только качественные вещи по необходимости, отдаю ненужное',
        co2KgYear: 500,
        points: 2,
        tip: 'Качественные базовые вещи служат дольше и легче перерабатываются.'
      },
      {
        id: 'consump-3',
        label: 'Регулярные покупки одежды на сезонных распродажах, частая смена аксессуаров',
        co2KgYear: 1400,
        points: 3,
        tip: 'Для производства одних джинсов требуется около 7500 литров воды.'
      },
      {
        id: 'consump-4',
        label: 'Еженедельный шопинг на маркетплейсах, постоянная смена электроники',
        co2KgYear: 2900,
        points: 4,
        tip: 'Упаковка доставок и возвраты формируют гигантский углеродный шлейф.'
      }
    ]
  },
  {
    id: 6,
    category: 'Пищевые отходы',
    title: 'Какая часть купленных продуктов питания оказывается в мусорном ведре?',
    subtitle: 'Треть всей еды в мире выбрасывается, производя 8-10% глобальных выбросов.',
    options: [
      {
        id: 'food-1',
        label: 'Практически 0%: планирую меню, использую морозилку и остатки',
        co2KgYear: 50,
        points: 1,
        tip: 'Эталон бережливого отношения к труду фермеров и природным ресурсам.'
      },
      {
        id: 'food-2',
        label: 'До 10%: иногда пропадают свежие овощи или хлеб',
        co2KgYear: 220,
        points: 2,
        tip: 'Небольшие корректировки списков покупок сведут потери к минимуму.'
      },
      {
        id: 'food-3',
        label: 'Около 20-30%: регулярно выбрасываю испорченную готовую еду',
        co2KgYear: 650,
        points: 3,
        tip: 'Попробуйте правило «первым пришел — первым съеден» (FIFO) в холодильнике.'
      },
      {
        id: 'food-4',
        label: 'Более 30%: покупаю с запасом, многое портится в холодильнике',
        co2KgYear: 1200,
        points: 4,
        tip: 'Выбрасывание еды равносильно выбрасыванию воды, топлива и удобрений.'
      }
    ]
  }
];

export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  {
    id: 1,
    category: 'Transport & Mobility',
    title: 'How do you usually get around your city and beyond?',
    subtitle: 'The transport sector generates up to 30% of all urban greenhouse gas emissions.',
    options: [
      {
        id: 'trans-1',
        label: 'Walking, standard bicycle, or non-electric scooter',
        co2KgYear: 80,
        points: 1,
        tip: 'Minimal carbon footprint and great for personal health!'
      },
      {
        id: 'trans-2',
        label: 'Metro, electric trams, e-buses, and commuter trains',
        co2KgYear: 450,
        points: 2,
        tip: 'Electric public transit reduces emissions 4 to 6-fold.'
      },
      {
        id: 'trans-3',
        label: 'Personal hybrid / EV or carsharing',
        co2KgYear: 1200,
        points: 3,
        tip: 'Electric vehicles are cleaner, though charging grid sources matter.'
      },
      {
        id: 'trans-4',
        label: 'Personal gasoline / diesel car every day',
        co2KgYear: 3200,
        points: 4,
        tip: 'Combustion engines emit ~180-240g of CO2 for every kilometer driven.'
      }
    ]
  },
  {
    id: 2,
    category: 'Diet & Nutrition',
    title: 'What does your typical weekly diet look like?',
    subtitle: 'Livestock farming accounts for 14.5% of global GHG emissions and massive freshwater use.',
    options: [
      {
        id: 'diet-1',
        label: 'Plant-based diet (vegan / 90% plant foods)',
        co2KgYear: 600,
        points: 1,
        tip: 'A plant-based diet cuts dietary carbon footprint by up to 60%.'
      },
      {
        id: 'diet-2',
        label: 'Vegetarian or pescatarian (no red meat)',
        co2KgYear: 1100,
        points: 2,
        tip: 'Avoiding beef and lamb is the single biggest dietary climate lever.'
      },
      {
        id: 'diet-3',
        label: 'Poultry, moderate meat intake (2-3 times a week)',
        co2KgYear: 1800,
        points: 3,
        tip: 'Balanced flexitarian approach with mindful portions.'
      },
      {
        id: 'diet-4',
        label: 'Red meat (beef, pork) almost every day',
        co2KgYear: 3400,
        points: 4,
        tip: 'Producing 1 kg of beef generates up to 60 kg of CO2 equivalent.'
      }
    ]
  },
  {
    id: 3,
    category: 'Waste & Recycling',
    title: 'How do you handle household waste and packaging?',
    subtitle: 'Landfills release potent methane (CH4), which is 28x more damaging than CO2.',
    options: [
      {
        id: 'waste-1',
        label: 'Deep sorting (10+ fractions), home composting/disposer, Zero Waste lifestyle',
        co2KgYear: 70,
        points: 1,
        tip: 'Maximum resource return to circular secondary manufacturing.'
      },
      {
        id: 'waste-2',
        label: 'Separate core recyclables (plastics, paper, glass, metals) into recycling bins',
        co2KgYear: 280,
        points: 2,
        tip: 'Dual-stream curbside sorting rescues up to 40% of materials.'
      },
      {
        id: 'waste-3',
        label: 'Only recycle batteries and e-waste, rest goes into general waste',
        co2KgYear: 650,
        points: 3,
        tip: 'Keeps hazardous toxins out of soils, but packaging still enters landfills.'
      },
      {
        id: 'waste-4',
        label: 'Throw all waste together in single trash bags',
        co2KgYear: 1150,
        points: 4,
        tip: 'Organic matter rots in landfills anaerobically, generating methane.'
      }
    ]
  },
  {
    id: 4,
    category: 'Home Energy & Living',
    title: 'How is electricity and heating used in your home?',
    subtitle: 'Heating and power generation represent the largest single source of global emissions.',
    options: [
      {
        id: 'energy-1',
        label: 'LED lighting, A+++ appliances, smart thermostats, solar panels / green tariff',
        co2KgYear: 350,
        points: 1,
        tip: 'Smart homes and standby power management slash both bills and footprint.'
      },
      {
        id: 'energy-2',
        label: 'Energy-saving bulbs, moderate air conditioning and heating',
        co2KgYear: 850,
        points: 2,
        tip: 'Sensible balance of comfort and energy efficiency.'
      },
      {
        id: 'energy-3',
        label: 'Standard appliances, lights frequently left on in multiple rooms',
        co2KgYear: 1600,
        points: 3,
        tip: 'Standby devices waste up to 10-15% of household electricity.'
      },
      {
        id: 'energy-4',
        label: 'Continuous high heating/AC with open windows, old inefficient appliances',
        co2KgYear: 2800,
        points: 4,
        tip: 'Massive thermal leaks and unnecessary burden on power plants.'
      }
    ]
  },
  {
    id: 5,
    category: 'Consumer Goods & Clothing',
    title: 'How often do you purchase new clothes, gadgets, and household items?',
    subtitle: 'The Fast Fashion industry emits more carbon than all international flights combined.',
    options: [
      {
        id: 'consump-1',
        label: 'Mindful minimalism: repair, thrift/vintage, renting, wearing items for years',
        co2KgYear: 150,
        points: 1,
        tip: 'Extending smartphone life by 2 years cuts its embodied footprint by 50%.'
      },
      {
        id: 'consump-2',
        label: 'Buy quality essentials as needed, donate/resell unused goods',
        co2KgYear: 500,
        points: 2,
        tip: 'Quality capsule wardrobes last longer and are easier to recycle.'
      },
      {
        id: 'consump-3',
        label: 'Regular clothing haul purchases during sales, frequent trend chasing',
        co2KgYear: 1400,
        points: 3,
        tip: 'Producing a single pair of jeans requires ~7,500 liters of fresh water.'
      },
      {
        id: 'consump-4',
        label: 'Weekly online shopping splurges, constant upgrade of electronics',
        co2KgYear: 2900,
        points: 4,
        tip: 'Delivery packaging and returns generate huge cumulative emissions.'
      }
    ]
  },
  {
    id: 6,
    category: 'Food Waste',
    title: 'What fraction of your purchased groceries ends up in the trash?',
    subtitle: 'One third of all food produced globally is wasted, causing 8-10% of global emissions.',
    options: [
      {
        id: 'food-1',
        label: 'Virtually 0%: meal planning, freezing leftovers, mindful portions',
        co2KgYear: 50,
        points: 1,
        tip: 'The gold standard of respect for farmers and natural resources.'
      },
      {
        id: 'food-2',
        label: 'Up to 10%: occasional produce or bread goes stale',
        co2KgYear: 220,
        points: 2,
        tip: 'Minor shopping list adjustments will bring food waste down to zero.'
      },
      {
        id: 'food-3',
        label: 'Around 20-30%: regularly discarding expired prepared meals and groceries',
        co2KgYear: 650,
        points: 3,
        tip: 'Try the First-In, First-Out (FIFO) rule in your pantry and fridge.'
      },
      {
        id: 'food-4',
        label: 'Over 30%: frequent overbuying, many items spoil in the fridge',
        co2KgYear: 1200,
        points: 4,
        tip: 'Wasting food wastes all the embedded water, land, and fuel used to grow it.'
      }
    ]
  }
];

export function getQuizQuestions(isEn: boolean): QuizQuestion[] {
  return isEn ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS;
}

export function calculateQuizResults(selectedOptionIds: Record<number, string>, isEn = false): QuizResult {
  const questions = getQuizQuestions(isEn);
  let totalCo2 = 0;
  let totalPoints = 0;

  questions.forEach(q => {
    const selectedId = selectedOptionIds[q.id];
    const opt = q.options.find(o => o.id === selectedId) || q.options[1];
    totalCo2 += opt.co2KgYear;
    totalPoints += opt.points;
  });

  const avgPoints = totalPoints / questions.length;

  let category: QuizResult['category'] = 'Умеренный потребитель';
  let categoryDesc = '';
  let comparison = '';

  if (isEn) {
    if (avgPoints <= 1.7) {
      category = 'Хранитель Планеты'; // type allows standard, will display localized string
      categoryDesc = 'Your lifestyle closely aligns with the 2046 climate neutrality benchmarks. You demonstrate exemplary sustainable resource stewardship!';
      comparison = `Your footprint is ${(totalCo2 / 1000).toFixed(1)} t/year — 62% lower than national urban averages.`;
    } else if (avgPoints <= 2.8) {
      category = 'Умеренный потребитель';
      categoryDesc = 'You maintain a great balance with clear growth opportunities in home energy, organic waste sorting, or transit.';
      comparison = `Your footprint is ${(totalCo2 / 1000).toFixed(1)} t/year — close to typical urban benchmarks.`;
    } else {
      category = 'Индустриальный гигант';
      categoryDesc = 'Your current carbon footprint exceeds sustainable thresholds. Step-by-step mindful actions can dramatically reduce your ecological pressure.';
      comparison = `Your footprint is ${(totalCo2 / 1000).toFixed(1)} t/year — 75% higher than the sustainable planetary budget.`;
    }

    const checklists: QuizResult['checklists'] = [
      {
        level: 'Легкий старт',
        items: [
          {
            id: 'easy-1',
            title: 'Carry a reusable water bottle and canvas tote bag everywhere',
            impact: '-45 kg CO2 and 300 plastic bags per year',
            completed: false
          },
          {
            id: 'easy-2',
            title: 'Upgrade remaining incandescent bulbs to high-efficiency LEDs',
            impact: '-90 kg CO2 and immediate utility bill savings',
            completed: false
          },
          {
            id: 'easy-3',
            title: 'Drop off spent batteries and small electronics at local dropboxes',
            impact: 'Shields 20 m² of soil from toxic heavy metals',
            completed: false
          },
          {
            id: 'easy-4',
            title: 'Dedicate one day per week to plant-based dining (Green Monday)',
            impact: '-180 kg CO2 per year',
            completed: false
          }
        ]
      },
      {
        level: 'Средний уровень',
        items: [
          {
            id: 'mid-1',
            title: 'Set up dual-stream home sorting: PET/HDPE/PP plastics, paper, and glass',
            impact: '-320 kg CO2 and rescues 4 trees per year',
            completed: false
          },
          {
            id: 'mid-2',
            title: 'Replace 2 weekly car trips with cycling, walking, or public transit',
            impact: '-520 kg CO2 per year',
            completed: false
          },
          {
            id: 'mid-3',
            title: 'Install low-flow faucet aerators and wash clothes at 30°C',
            impact: '-140 kg CO2 and -35% hot water consumption',
            completed: false
          },
          {
            id: 'mid-4',
            title: 'Draft strict grocery shopping lists prior to supermarket trips',
            impact: 'Saves ~$300 and cuts 200 kg in food waste emissions',
            completed: false
          }
        ]
      },
      {
        level: 'Продвинутый уровень',
        items: [
          {
            id: 'adv-1',
            title: 'Install an under-sink food waste disposer or home bokashi composter',
            impact: 'Eliminates methane release from organic household waste',
            completed: false
          },
          {
            id: 'adv-2',
            title: 'Transition to electric mobility / substitute short flights with high-speed rail',
            impact: '-1,200 kg CO2 per year',
            completed: false
          },
          {
            id: 'adv-3',
            title: 'Curate a capsule wardrobe and embrace vintage / secondhand fashion',
            impact: '-400 kg CO2 and shields waterways from microfibers',
            completed: false
          },
          {
            id: 'adv-4',
            title: 'Volunteer with local rewilding initiatives or plant trees this season',
            impact: 'Sequesters up to 120 kg CO2 annually for 40+ years',
            completed: false
          }
        ]
      }
    ];

    return {
      totalCo2Kg: totalCo2,
      score: Math.round(totalPoints),
      category,
      categoryDescription: categoryDesc,
      comparisonWithAverage: comparison,
      checklists
    };
  }

  // Russian version
  if (avgPoints <= 1.7) {
    category = 'Хранитель Планеты';
    categoryDesc = 'Ваш образ жизни максимально приближен к стандартам климатической нейтральности 2046 года. Вы показываете пример осознанного ресурсопотребления!';
    comparison = `Ваш след ${(totalCo2 / 1000).toFixed(1)} т/год — на 62% ниже среднего по стране (8.5 т).`;
  } else if (avgPoints <= 2.8) {
    category = 'Умеренный потребитель';
    categoryDesc = 'У вас отличный баланс, но есть точки роста — в частности в оптимизации отопления/энергии, сортировке органики или транспорте.';
    comparison = `Ваш след ${(totalCo2 / 1000).toFixed(1)} т/год — близко к среднему городскому уровню.`;
  } else {
    category = 'Индустриальный гигант';
    categoryDesc = 'Ваш текущий углеродный след превышает безопасный экологический порог в несколько раз. Небольшие последовательные шаги помогут кардинально снизить нагрузку на планету.';
    comparison = `Ваш след ${(totalCo2 / 1000).toFixed(1)} т/год — на 75% выше допустимого климатического бюджета.`;
  }

  const checklists: QuizResult['checklists'] = [
    {
      level: 'Легкий старт',
      items: [
        {
          id: 'easy-1',
          title: 'Носите с собой многоразовую бутылку для воды и тканевый шоппер',
          impact: '-45 кг CO2 и 300 пластиковых пакетов в год',
          completed: false
        },
        {
          id: 'easy-2',
          title: 'Замените оставшиеся лампы накаливания на качественные LED',
          impact: '-90 кг CO2 и экономия на счетах за свет',
          completed: false
        },
        {
          id: 'easy-3',
          title: 'Начните сдавать батарейки и аккумуляторы в ближайший бокс',
          impact: 'Защита 20 м² почвы от тяжелых металлов',
          completed: false
        },
        {
          id: 'easy-4',
          title: 'Устройте один день в неделю без мяса (Green Monday)',
          impact: '-180 кг CO2 в год',
          completed: false
        }
      ]
    },
    {
      level: 'Средний уровень',
      items: [
        {
          id: 'mid-1',
          title: 'Организуйте дома раздельный сбор: пластик (1, 2, 5), макулатура и стекло',
          impact: '-320 кг CO2 и спасение 4 деревьев в год',
          completed: false
        },
        {
          id: 'mid-2',
          title: 'Замените 2 поездки на авто в неделю на велосипед или метро',
          impact: '-520 кг CO2 в год',
          completed: false
        },
        {
          id: 'mid-3',
          title: 'Установите аэраторы на краны и снизьте температуру стирки до 30°C',
          impact: '-140 кг CO2 и -35% расхода воды',
          completed: false
        },
        {
          id: 'mid-4',
          title: 'Составляйте точный список покупок перед походом в супермаркет',
          impact: 'Экономия до 25 000 ₽ и -200 кг пищевых выбросов',
          completed: false
        }
      ]
    },
    {
      level: 'Продвинутый уровень',
      items: [
        {
          id: 'adv-1',
          title: 'Установите диспоузер (измельчитель) в раковину или домашний вермикомпостер',
          impact: 'Полная ликвидация выбросов метана от вашей органики',
          completed: false
        },
        {
          id: 'adv-2',
          title: 'Перейдите на электротранспорт / откажитесь от ближних авиаперелетов в пользу поездов',
          impact: '-1200 кг CO2 в год',
          completed: false
        },
        {
          id: 'adv-3',
          title: 'Проведите аудит гардероба и покупайте одежду по принципу Capsule Wardrobe / Second hand',
          impact: '-400 кг CO2 и защита рек от микропластика',
          completed: false
        },
        {
          id: 'adv-4',
          title: 'Станьте волонтером местного эко-проекта или посадите 5 деревьев в этом сезоне',
          impact: 'Поглощение до 120 кг CO2 ежегодно в течение 40 лет',
          completed: false
        }
      ]
    }
  ];

  return {
    totalCo2Kg: totalCo2,
    score: Math.round(totalPoints),
    category,
    categoryDescription: categoryDesc,
    comparisonWithAverage: comparison,
    checklists
  };
}
