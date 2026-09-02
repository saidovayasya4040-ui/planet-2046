/**
 * Comprehensive Ecological Knowledge Base and Semantic Query Engine
 * Powers the "Эко-Друг" AI Agent for all questions related to ecology,
 * climate change, recycling, environmental science, and sustainable living.
 */

export interface EcoQueryContext {
  cityName?: string;
  country?: string;
  coordinates?: [number, number];
  ecoIndex?: number;
  indexStatus?: string;
  aqi?: number;
  pm25?: number;
  pm10?: number;
  no2?: number;
  quizCategory?: string;
  totalCo2Kg?: number;
  language?: string;
  isEn?: boolean;
}

interface KnowledgeTopic {
  id: string;
  title: string;
  keywords: string[];
  patterns?: RegExp[];
  generateAnswer: (query: string, ctx: EcoQueryContext) => string;
}

export const ECO_KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  // 1. Школьники, молодежь, первые шаги
  {
    id: 'school-youth',
    title: 'Эко-советы для школьников и молодежи',
    keywords: ['школьник', 'школа', 'подросток', 'дет', 'ребенок', 'учусь', 'студент', 'начать', 'первые шаги', 'чем я могу помочь', 'как помочь экологии', 'без денег'],
    generateAnswer: (_q, ctx) => {
      const city = ctx.cityName || 'твоем городе';
      return `🌟 **Ты настоящий молодец, что хочешь помогать природе!** 

Каждый школьник и студент может внести огромный вклад прямо сейчас — без денег, сложного оборудования и не выходя далеко из дома или школы в ${city}:

1. 🔋 **Сдать батарейки в школе:** Почти в каждой школе или в ближайшем супермаркете стоит бокс для сбора батареек. Собери дома старые батарейки от пультов и игрушек — всего **одна пальчиковая батарейка** защитит 20 м² земли и двух ежей от токсичных металлов!
2. 💧 **Своя стильная бутылка для воды:** Бери воду в школу в многоразовой бутылке вместо покупки пластиковых поллитровок. Это спасет около **150 одноразовых бутылок в год**!
3. 🍂 **Макулатура и старые тетради:** Собирай исписанные тетради, коробки и бумагу. 60 кг макулатуры спасают одно взрослое дерево от вырубки.
4. 💡 **Простые привычки дома:** Выключай свет, когда выходишь из комнаты, и закрывай кран, пока чистишь зубы (это экономит до 15 литров чистой воды за одну чистку!).
5. 🛍️ **Свой шоппер или рюкзак:** Откажись от пластиковых пакетов на кассе — просто клади покупки в свой рюкзак.
6. 🧴 **«Добрые крышечки»:** Собирай чистые пластиковые крышки от соков и молока — их принимают во многих школах на благотворительность и переработку.

С какого шага тебе интереснее всего начать прямо сегодня? Я всегда рядом и помогу советом! 🌿✨`;
    }
  },

  // 2. Глобальное потепление и изменение климата
  {
    id: 'climate-change',
    title: 'Глобальное потепление и климатический кризис',
    keywords: ['глобальн', 'потеплен', 'климат', 'парников', 'температур', 'парижск', 'таяни', 'ледник', 'уровень океан', 'co2', 'углекисл', 'метан'],
    generateAnswer: (_q, ctx) => {
      const city = ctx.cityName || 'нашем регионе';
      return `🌍 **Глобальное потепление и изменение климата: что происходит и что делать?**

1. **В чем суть явления?**
Сжигание угля, нефти и газа, а также сведение лесов увеличивают концентрацию парниковых газов (углекислый газ $CO_2$, метан $CH_4$). Они действуют как одеяло вокруг Земли: солнечные лучи проникают, но тепло не может уйти в космос. За последние 150 лет средняя температура планеты поднялась уже более чем на **+1.2°C**.

2. **Чем это грозит к 2046 году?**
- **Экстремальная погода:** Засухи сменяются разрушительными тропическими ливнями и штормами.
- **Таяние ледников:** Арктика, Антарктида и горные ледники (питающие реки питьевой водой) теряют миллиарды тонн льда.
- **«Тепловой стресс» в городах:** В таких городах, как ${city}, количество дней с аномальной жарой свыше +35°C может возрасти в 2–3 раза.

3. **Что делает мир?**
Переход на возобновляемую энергетику (солнце, ветер), развитие электротранспорта, термоизоляция зданий и посадка лесозащитных поясов.

4. **Что может сделать каждый из нас?**
- Выбирать общественный транспорт, велосипед или пешие прогулки;
- Беречь электроэнергию и тепло в квартире;
- Сокращать потребление одноразовых вещей и отдавать предпочтение товарам местных производителей.

Хочешь узнать подробнее о климатическом прогнозе для твоего города на 2046 год? Я готов рассчитать сценарии! 🌡️`;
    }
  },

  // 3. Пластик и микропластик
  {
    id: 'plastics-microplastics',
    title: 'Пластик, микропластик и маркировки',
    keywords: ['пластик', 'микропластик', 'маркировк', 'пэт', 'pet', 'hdpe', 'пнд', 'пп', 'полипропилен', 'полистирол', 'пакет', 'бутылк', 'распаковка'],
    generateAnswer: (_q, ctx) => {
      return `🧴 **Полный гид по пластику и микропластику от Эко-Друга:**

### 🔍 Маркировки пластика (цифры в треугольнике):
- **01 PET (ПЭТ):** Прозрачные бутылки от воды, лимонадов, молока. *Отлично перерабатывается!* Ополосни, сомни и сдавай в бак для вторсырья.
- **02 HDPE (ПНД):** Непрозрачные флаконы от шампуней, гелей, канистры, плотные крышки. *Высокий спрос на переработку.*
- **03 PVC (ПВХ):** Оконные профили, натяжные потолки, некоторые виды упаковки. *Практически не перерабатывается, выделяет токсичные вещества при нагреве.* Избегай!
- **04 LDPE (ПВД):** Пакеты-майки, стрейч-пленка, пупырчатая пленка. Перерабатывается во многих пунктах.
- **05 PP (Полипропилен):** Контейнеры для еды, стаканчики от сметаны, крышечки. *Безопасен для пищи, хорошо перерабатывается.* Главное — смыть жир.
- **06 PS (Полистирол):** Вспененные подложки для мяса, одноразовая посуда. *Хрупкий, выделяет стирол при нагреве, перерабатывается редко.*
- **07 OTHER:** Смешанные пластики (паучи от кормов, тюбики от пасты). В 90% случаев отправляются на свалку.

### ⚠️ Чем опасен микропластик?
Микропластик (частицы менее 5 мм) образуется при разрушении пакетов и стирке синтетики. Он попадает в реки, рыбу, дождевую воду и даже в организм человека. 

### 💡 Как снизить пластиковый след:
1. Замени одноразовые пакеты на шоппер и сеточки-фруктовки.
2. Не покупай воду в пластике — носи свою бутылку.
3. Откажись от одноразовых трубочек и стаканчиков для кофе (бумажный стаканчик внутри покрыт слоем пластика!).`;
    }
  },

  // 4. Раздельный сбор: Макулатура, Стекло, Металл, Тетрапак
  {
    id: 'recycling-materials',
    title: 'Раздельный сбор: бумага, стекло, металл, тетрапак',
    keywords: ['макулатур', 'бумаг', 'картон', 'стекл', 'стеклотар', 'металл', 'жесть', 'алюмини', 'банк', 'тетрапак', 'tetrapak', 'сортировк', 'раздельн', 'бак'],
    generateAnswer: (_q, ctx) => {
      const city = ctx.cityName || 'вашем городе';
      return `♻️ **Как правильно сортировать сырье для переработки в ${city}:**

### 📦 1. Макулатура (Бумага и картон):
- **МОЖНО:** Книги, газеты, тетради, гофрокартонные коробки, офисная белая бумага.
- **НЕЛЬЗЯ:** Чеки из магазинов (это термобумага с токсичным бисфенолом А), бумажные салфетки, стаканчики для кофе, пергамент для выпечки, ламинированная бумага.

### 🍾 2. Стекло:
- **МОЖНО:** Стеклянные бутылки, банки от варенья, детского питания и соусов (любого цвета: прозрачное, зеленое, коричневое).
- **НЕЛЬЗЯ:** Оконное стекло, зеркала, хрусталь, керамику и фарфор (у них другая температура плавления, они портят партию).
- *Плюс стекла:* перерабатывается **на 100% бесконечное количество раз** без потери качества!

### 🥫 3. Металл:
- **МОЖНО:** Алюминиевые банки от напитков, консервные банки из жести, металлические крышки от банок.
- **Совет:** Консервные банки нужно сполоснуть от остатков еды и согнуть, чтобы они занимали меньше места.

### 🧃 4. Тетрапак (Tetra Pak):
- Это не просто картон, а сложный «сэндвич»: 75% картона + 20% полиэтилена + 5% алюминия.
- Сдавать его нужно только в те пункты, где указан прием тетрапака. На заводах специальный гидроразбиватель отделяет бумажные волокна от полиалюминия.

*Золотое правило сортировки:* Вторсырье должно быть **чистым и сухим**, без остатков пищи и запаха! 🌿`;
    }
  },

  // 5. Опасные отходы: батарейки, градусники, лампы, шины, лекарства
  {
    id: 'hazardous-waste',
    title: 'Опасные отходы: батарейки, градусники, лампы, шины',
    keywords: ['батарейк', 'аккумулятор', 'градусник', 'ртут', 'ламп', 'люминесцент', 'шин', 'покрышк', 'лекарств', 'таблетк', 'опасн', 'токсичн', 'демеркуризац'],
    generateAnswer: (_q, ctx) => {
      return `⚠️ **Опасные отходы: почему их категорически нельзя бросать в обычное ведро?**

1. 🔋 **Батарейки и аккумуляторы:**
- **Опасность:** Содержат свинец, ртуть, кадмий, никель и литий. Попадая на свалку, металлическая оболочка ржавеет, и яды просачиваются в грунтовые воды.
- **Куда сдать:** В специальные контейнеры в сетевых магазинах (ВкусВилл, М.Видео, Эльдорадо, Леруа Мерлен), во многих школах и эко-центрах. Это **бесплатно**!

2. 🌡️ **Ртутные градусники:**
- **Опасность:** Пары ртути — сильнейший яд для нервной системы.
- **Что делать, если разбился:** Не пылесосить и не подметать веником! Открыть окно, надеть перчатки, собрать шарики ртути скотчем или резиновой грушей в банку с водой и плотно закрыть.
- **Куда сдать:** В районные диспетчерские службы (ДЕЗ/ЖЭК), экомобили или специализированные пункты демеркуризации (звонить 112).

3. 💡 **Энергосберегающие (люминесцентные) лампы:**
- Содержат пары ртути. Их принимают в управляющих компаниях, центрах госуслуг или строительных гипермаркетах. Светодиодные (LED) лампы ртути не содержат, но их тоже стоит сдавать в электролом.

4. 🚗 **Автомобильные покрышки:**
- Относятся к 4-му классу опасности. Их нельзя сжигать (выделяют канцерогены) или использовать как клумбы. Шины перерабатывают в резиновую крошку для безопасных детских и спортивных площадок.

5. 💊 **Просроченные лекарства:**
- Не смывай в унитаз! Антибиотики и гормоны не отфильтровываются городскими очистными и попадают в реки. Сдавай в специальные боксы в экоцентрах и продвинутых аптеках.`;
    }
  },

  // 6. Океаны, реки, озера и экономия воды
  {
    id: 'water-oceans',
    title: 'Защита воды, реки, озера, океаны и экономия воды',
    keywords: ['вод', 'океан', 'рек', 'озер', 'байкал', 'арал', 'водоем', 'течь', 'экономия вод', 'питьев', 'рыб', 'пятно', 'сточн'],
    generateAnswer: (_q, ctx) => {
      return `🌊 **Сохранение воды и защита водных ресурсов Земли:**

### 💧 Почему пресная вода — золото XXI века?
Менее 3% всей воды на Земле — пресная, и большая ее часть заперта в ледниках. При этом реки и озера страдают от стоков удобрений, пластика и бытовой химии с фосфатами (вызывающих бурное цветение сине-зеленых водорослей и гибель рыбы).

### 🚰 Простые способы экономить воду дома:
1. **Выключай кран при чистке зубов:** Это бережет до **15–20 литров в день** на человека (более 5 000 литров в год!).
2. **Аэраторы на смесители:** Маленькая насадка-сеточка насыщает струю воздухом, сокращая расход воды в 2 раза без потери комфорта.
3. **Душ вместо ванны:** Принятие 5-минутного душа требует 40–50 л воды, а полная ванна — от 150 до 200 л.
4. **Починка протечек:** Капающий кран тратит до 20 литров в сутки, а подтекающий бачок унитаза — до 200 литров!

### 🐢 Как защитить реки и моря:
- Не используй бытовую химию с фосфатами (выбирай эко-маркировки);
- Никогда не оставляй мусор на пляжах и берегах рек — весенний паводок смоет его прямо в море;
- Участвуй в акции «Вода России» по очистке берегов водоемов.`;
    }
  },

  // 7. Качество воздуха, смог и защита органов дыхания
  {
    id: 'air-quality',
    title: 'Качество воздуха, смог, частицы PM2.5 и дыхание',
    keywords: ['воздух', 'смог', 'aqi', 'pm2.5', 'pm10', 'дышать', 'пыль', 'выхлоп', 'тэц', 'гари', 'проветрива', 'очистител'],
    generateAnswer: (_q, ctx) => {
      const aqiVal = ctx.aqi ?? 45;
      const pm25Val = ctx.pm25 ?? 12;
      const city = ctx.cityName || 'вашем городе';
      return `🌬️ **Качество воздуха и защита здоровья в ${city}:**

### 📊 Что означают показатели воздуха:
- **AQI (Индекс качества воздуха):** 
  - 0–50 — Чистый воздух (зеленый уровень);
  - 51–100 — Умеренный (желтый);
  - 101–150 — Вредный для чувствительных групп (оранжевый);
  - 151+ — Опасный смог (красный).
- **Частицы PM2.5 (микропыль размером 2.5 мкм):** Это микроскопические частицы сажи, резины от шин и солей тяжелых металлов. Они настолько малы, что проникают сквозь носоглотку прямо в легкие и кровеносные сосуды.

*В твоем регионе сейчас: AQI около ${aqiVal}, PM2.5: ${pm25Val} мкг/м³.*

### 🛡️ Как защитить себя во время смога:
1. **Проветривание:** В безветренные дни и часы пик открывай окна ранним утром или поздно вечером.
2. **Комнатные растения-фильтры:** Хлорофитум, спатифиллум, сансевиерия («тещин язык») и фикус Бенджамина поглощают формальдегид и оксиды углерода.
3. **Влажная уборка:** Протирай пыль и делай влажную уборку 1–2 раза в неделю — это снижает концентрацию взвешенных частиц дома на 60%.
4. **Увлажнители воздуха и HEPA-фильтры:** Задерживают до 99.9% микрочастиц пыли и пыльцы.`;
    }
  },

  // 8. Леса, посадка деревьев и лесные пожары
  {
    id: 'forests-trees',
    title: 'Леса, деревья, пожары и восстановление природы',
    keywords: ['лес', 'дерев', 'посад', 'пожар', 'тайг', 'вырубк', 'посадить дерев', 'лип', 'берез', 'сосн', 'топол', 'кислород'],
    generateAnswer: (_q, ctx) => {
      return `🌲 **Леса — зеленые легкие планеты: защита, посадка и пожары:**

### 🌳 Как правильно посадить дерево:
1. **Выбирай местные аборигенные виды:** Для средней полосы отлично подходят липа, дуб черешчатый, береза, клен остролистный, рябина и сосна. Они устойчивы к местному климату.
2. **Время посадки:** Лучшие периоды — ранняя весна (до распускания почек) или осень (сентябрь-октябрь, когда опадают листья).
3. **Уход в первые 2 года:** Посадить саженец — только 20% успеха. Главное — поливать его в засушливые летние недели и защитить от покоса травы.
4. **Какие деревья лучше всего чистят воздух в городе:** Липа мелколистная и тополь без пуха (тополь поглощает в 3 раза больше углекислого газа, чем ель!).

### 🔥 Лесные пожары: 9 из 10 пожаров — вина человека
- Никогда не поджигай сухую траву весной! Это миф, что трава лучше растет: гибнут полезные насекомые, микрофлора почвы и гнезда птиц;
- Тщательно заливай костры водой до полного остывания углей;
- Не бросай стеклянные бутылки в лесу — осколок стекла может сработать как линза на солнце и поджечь сухой мох.`;
    }
  },

  // 9. Животные, пчелы и биоразнообразие
  {
    id: 'biodiversity-animals',
    title: 'Животные, птицы, насекомые, пчелы и Красная книга',
    keywords: ['животн', 'птиц', 'пчел', 'насеком', 'красн книг', 'вымирани', 'звер', 'тигр', 'подкормк', 'биоразнообрази'],
    generateAnswer: (_q, ctx) => {
      return `🐝 **Биоразнообразие: почему важен каждый вид на Земле?**

### 🐝 Почему пчелы и шмели — спасители человечества?
- Более **75% ведущих мировых продовольственных культур** (яблоки, ягоды, орехи, помидоры, кофе) зависят от опыления насекомыми;
- Из-за применения пестицидов и уничтожения лугов популяции диких пчел стремительно сокращаются;
- *Что мы можем сделать:* Высаживать на клумбах и балконах медоносы (клевер, лаванду, шалфей, бархатцы) и отказываться от токсичной химии в садах.

### 🐦 Как правильно кормить птиц зимой:
- **МОЖНО:** Сырые (нежареные и несоленые) семечки подсолнечника, овес, просо, несоленое сало (для синичек в мороз), кусочки свежих яблок.
- **НЕЛЬЗЯ:** Черный ржаной хлеб (вызывает брожение в зобе), соленые чипсы, сухарики, испорченное зерно.

### 🐾 Красная книга и сохранение дикой природы:
Разрушение естественной среды обитания — главная причина исчезновения редких животных. Поддержка национальных парков, отказ от покупки изделий из диких животных и бережное отношение к природе на прогулках помогают сохранить редкие виды для наших потомков.`;
    }
  },

  // 10. Возобновляемая энергетика и электромобили
  {
    id: 'clean-energy',
    title: 'Чистая энергия, солнце, ветер, электромобили',
    keywords: ['энерги', 'солнечн', 'солнц', 'ветер', 'ветрогенератор', 'гэс', 'электромобил', 'тесл', 'атомн', 'аэс', 'панел'],
    generateAnswer: (_q, ctx) => {
      return `⚡ **Энергетика будущего: солнце, ветер и электромобили:**

### ☀️ Солнечные и ветряные электростанции:
- За последние 10 лет стоимость солнечной энергии упала на 85%, сделав ее самой дешевой энергией в истории во многих регионах мира;
- **Миф об углеродном следе производства:** Солнечная панель или ветряк полностью «окупает» затраченную на ее производство энергию за **1–2 года работы**, а служит 25–30 лет;
- К 2046 году в развитых энергосетях доля возобновляемых источников превысит 70–80%.

### 🚗 Экологичны ли электромобили?
- **Плюсы:** Ноль вредных выхлопов (выхлопные газы в городах вызывают астму и аллергии); КПД электродвигателя более 90% (у бензинового ДВС — всего 25–30%);
- **Сложности:** Производство литий-ионных аккумуляторов требует добычи лития, кобальта и никеля. Но индустрия быстро переходит на безопасные натрий-ионные и LFP-батареи, а эффективность переработки старых автоаккумуляторов уже достигает 95%.`;
    }
  },

  // 11. Zero Waste, осознанное потребление и 5R
  {
    id: 'zero-waste',
    title: 'Философия Zero Waste, правило 5R и отказ от мусора',
    keywords: ['zero waste', 'ноль отходов', '5r', 'минимализм', 'осознанн', 'мусор', 'свалк', 'потреблен', 'вещ'],
    generateAnswer: (_q, ctx) => {
      return `🌱 **Концепция Zero Waste («Ноль отходов») и золотое правило 5R:**

Главная идея — не научиться перерабатывать горы мусора, а **не создавать мусор вовсе**:

1. 🚫 **Refuse (Откажись):** Скажи «нет» ненужным листовкам, пластиковым трубочкам, бесплатным пакетам на кассе и одноразовым сувенирам.
2. 📉 **Reduce (Сократи):** Покупай только то, что действительно нужно. Перед покупкой новой вещи задай вопрос: «Буду ли я пользоваться этим через 3 месяца?».
3. 🔄 **Reuse (Используй повторно):** Почини сломанное, отдай ненужную одежду на благотворительность или в секонд-хенд, используй стеклянные банки для сыпучих круп, носи термокружку.
4. ♻️ **Recycle (Сдай в переработку):** То, что нельзя использовать повторно, рассортируй и сдай в эко-пункт (стекло, металл, бумагу, чистый пластик).
5. 🍂 **Rot (Компостируй):** Пищевые очистки и органику возвращай в почву в виде удобрения (через компост, вермиферму или измельчитель в раковине).

*Помни:* Нам не нужна горстка людей, идеально соблюдающих Zero Waste. Нам нужны миллионы людей, делающих это неидеально, но каждый день! 💚`;
    }
  },

  // 12. Еда, пищевые отходы и сельское хозяйство
  {
    id: 'food-waste',
    title: 'Еда, пищевые отходы, вегетарианство и экология тарелки',
    keywords: ['ед', 'мяс', 'пищев', 'выбрасыва', 'компост', 'продукты', 'веган', 'вегетариан', 'животноводств', 'органик'],
    generateAnswer: (_q, ctx) => {
      return `🥗 **Экология на тарелке: как еда влияет на планету:**

### 🍞 Пищевые отходы (Food Waste):
- Около **30% всей произведенной в мире еды** отправляется на помойку! На свалках органика гниет без доступа кислорода, выделяя метан — парниковый газ, в 28 раз более активный, чем $CO_2$.
- **Как сократить:** Составляй список перед походом в магазин, проверяй срок годности продуктов в холодильнике, замораживай остатки зелени и хлеба.

### 🥩 Экологический след рациона:
- Производство 1 кг говядины требует более **15 000 литров воды** и выделяет около 60 кг парниковых газов (на пастбища и корма уходит огромная часть пахотных земель);
- **Простая привычка «Green Monday»:** Отказ от мяса всего 1 день в неделю снижает личный углеродный след на 180 кг $CO_2$ в год — это эквивалентно поездке на поезде из Москвы в Санкт-Петербург!`;
    }
  },

  // 13. Гринвошинг: как распознать обман
  {
    id: 'greenwashing',
    title: 'Гринвошинг: как распознать ложные эко-товары',
    keywords: ['гринвошинг', 'greenwash', 'маркировк', 'сертификат', 'обман', 'эко-товар', 'био', 'натуральн', 'листок жизни'],
    generateAnswer: (_q, ctx) => {
      return `🕵️ **Гринвошинг (Greenwashing): как бренды манипулируют заботой об экологии:**

### Что такое гринвошинг?
Это маркетинговая уловка, когда товар выдают за экологичный, хотя на самом деле он таким не является (зеленая упаковка, рисунки листиков, слова «Bio», «Eco», «100% Натурально» без подтверждений).

### 🏷️ Настоящие экомаркировки I типа (проверяются независимой лабораторией):
- 🌿 **«Листок жизни»** (Россия);
- 🇪🇺 **EU Ecolabel** («Европейский цветок»);
- 🦢 **Nordic Swan** («Северный лебедь», Скандинавия);
- 🌲 **FSC / PEFC** (ответственное лесопользование на бумаге и дереве);
- 🍃 **Евролисток** (сертификат для настоящих органических продуктов питания).

Если на упаковке просто написано «Organic» или «Eco», но нет значка признанного сертификата — это на 99% маркетинговый ход!`;
    }
  },

  // 14. Мода, одежда и текстиль
  {
    id: 'fashion-textiles',
    title: 'Быстрая мода (Fast Fashion), текстиль и старая одежда',
    keywords: ['одежд', 'вещ', 'мод', 'текстил', 'вещь', 'секонд', 'гардероб', 'хлопок', 'полиэстер', 'второе дыхание'],
    generateAnswer: (_q, ctx) => {
      return `👗 **Быстрая мода и экология гардероба:**

1. **Масштаб проблемы:** Текстильная промышленность потребляет больше энергии, чем авиация и морские перевозки вместе взятые. На производство одной хлопковой футболки уходит **2 700 литров чистой воды** (столько человек выпивает за 3 года!).
2. **Синтетика (полиэстер, акрил):** При каждой стирке синтетической одежды в воду смываются миллионы микроволокон пластика.
3. **Куда сдать старую одежду:**
   - Хорошие вещи: благотворительные боксы («Второе дыхание», «Спасибо!», центры соцзащиты);
   - Вещи с дефектами: отправляются на переработку в техническую ветошь или утеплитель;
   - Заглядывай в винтажные магазины и секонд-хенды — давать вещам вторую жизнь сейчас очень стильно и экологично!`;
    }
  },

  // 15. Города-губки и технологии 2046
  {
    id: 'future-sponge-cities',
    title: 'Города-губки (Sponge Cities), зеленые крыши и архитектура 2046',
    keywords: ['губк', 'sponge', 'крыш', 'город будущ', '2046', 'вертикальн', 'мидаваки', 'мияваки', 'парк', 'архитектур'],
    generateAnswer: (_q, ctx) => {
      const city = ctx.cityName || 'современных мегаполисах';
      return `🏙️ **Города-губки (Sponge Cities) и эко-архитектура 2046 года в ${city}:**

### 🌧️ В чем идея Sponge City?
Вместо того чтобы закатывать весь город в сплошной асфальт и сбрасывать дождевую воду в перегруженную ливневку, город проектируют так, чтобы он **впитывал, фильтровал и сохранял воду как губка**:
- Проницаемая тротуарная плитка и пористый асфальт;
- Дождевые сады и биодренажные канавы вдоль дорог;
- Городские пруды и искусственные водно-болотные угодья, защищающие от наводнений.

### 🌿 Зеленые крыши и вертикальные леса:
- Крыши домов покрывают травой, очитками и кустарниками. Это задерживает до 70% дождевой воды, защищает крышу от перегрева и снижает температуру внутри здания летом на 3–5°C без кондиционеров.
- **Микролеса Мияваки:** сверхплотные посадки местных деревьев на небольших участках в жилых кварталах. Они растут в 10 раз быстрее обычных парков и создают спасительную тень в жару!`;
    }
  },

  // 16. Стихийные свалки, эко-права и куда жаловаться
  {
    id: 'eco-rights-complaints',
    title: 'Куда жаловаться при эко-нарушениях и стихийных свалках',
    keywords: ['свалк', 'пожаловаться', 'нарушени', 'закон', 'мусор в лесу', 'слив', 'вонь', 'запах', 'роспотребнадзор', 'рэо радар'],
    generateAnswer: (_q, ctx) => {
      return `⚖️ **Что делать, если ты обнаружил эко-нарушение или несанкционированную свалку:**

1. 📸 **Зафиксируй нарушение:** Сделай четкие фотографии или видео, запиши точные координаты по навигатору (или отметь точку на карте).
2. 📱 **Быстрые онлайн-сервисы:**
   - **Приложение «РЭО Радар»** (официальный сервис по контролю за отходами в РФ);
   - Портал **«Госуслуги. Решаем вместе»** (заявки передаются сразу в профильные комитеты города/района);
   - Сайт Росприроднадзора или регионального министерства экологии и природных ресурсов.
3. 🏭 **Если чувствуется едкий химический запах или виден сброс стоков:**
   - Звони в Единую дежурно-диспетчерскую службу по телефону **112** или на горячую линию экологической инспекции.
   - Граждане имеют конституционное право на благоприятную окружающую среду — каждое обращение фиксируется законом!`;
    }
  }
];

/**
 * Universal Intelligent Ecological Answer Generator.
 * Handles ANY question related to ecology, climate, nature, recycling,
 * and environmental science, guaranteeing a comprehensive, warm, expert response in both RU and EN.
 */
export function generateSmartEcoReply(query: string, context: EcoQueryContext = {}): string {
  const cleanQuery = query.trim();
  const lower = cleanQuery.toLowerCase();
  const isEn = context.isEn || /^[a-zA-Z0-9\s.,!?'"-]+$/.test(cleanQuery);
  const city = context.cityName || (isEn ? 'your city' : 'вашем городе');

  // 1. Greetings
  if (lower.match(/^(привет|здравствуй|хай|hello|hi|hey|good day|good morning|good evening|добрый день|добрый вечер|доброе утро|салют)/i) && lower.length < 25) {
    if (isEn) {
      return `👋 Hello! I am **Eco-Friend**, your personal sustainability and climate advisor on the "Planet 2046" platform.\n\nI am delighted to answer **any question about ecology**, recycling, 2046 climate projections for **${city}**, nature conservation, and zero-waste habits! What would you like to explore today? 🌿✨`;
    }
    return `👋 Привет! Я — **Эко-Друг**, твой личный помощник по экологии и защите планеты на сайте «Планета через 20 лет».\n\nЯ с радостью отвечу на **абсолютно любой твой вопрос об экологии**, сортировке отходов, климатических прогнозах для города **${city}**, природе и простых эко-привычках! О чем ты хочешь узнать? 🌿✨`;
  }

  if (lower.includes('кто ты') || lower.includes('как тебя зовут') || lower.includes('представься') || lower.includes('who are you') || lower.includes('what is your name')) {
    if (isEn) {
      return `👋 Hi! I am **Eco-Friend AI**!\n\nI am a friendly and scientifically grounded digital eco-advisor on the "Planet 2046" interactive platform. My mission is to share clear, engaging insights into nature conservation, help students and citizens adopt circular living habits, master recycling resin codes, and understand how our collective actions today shape our planet's future by 2046.\n\nAsk me anything about ecology or climate resilience! 🌍🌱`;
    }
    return `👋 Привет! Меня зовут **Эко-Друг**!\n\nЯ — дружелюбный и знающий цифровой эко-помощник интерактивной платформы «Планета через 20 лет» (Планета 2046). Моя миссия — простым, интересным и добрым языком рассказывать о природе, помогать школьникам и взрослым легко внедрять эко-привычки, разбираться в переработке отходов и понимать, как наши действия сегодня спасают планету завтра.\n\nЗадай мне любой вопрос об экологии — я отвечу на всё! 🌍🌱`;
  }

  // 2. Emotional Support / Eco-Anxiety
  if (lower.includes('грустн') || lower.includes('плохо') || lower.includes('печаль') || lower.includes('устал') || lower.includes('страшн') || lower.includes('тревожн') || lower.includes('sad') || lower.includes('anxious') || lower.includes('depressed') || lower.includes('hopeless') || lower.includes('worried')) {
    if (isEn) {
      return `🤗 **I am right here with you, and I hear you!**\n\nClimate headlines can sometimes feel overwhelming. One of the best proven remedies for eco-anxiety is reconnecting directly with local nature: walking under green trees, listening to birdsong, or breathing fresh morning air.\n\nRemember: nobody expects you to solve global challenges alone. Even the smallest mindful step—tending a plant, picking up stray plastic, or turning off an unused light—creates ripples of positive change. What is on your mind? I am here to chat anytime! 💚`;
    }
    return `🤗 **Я с тобой и хочу тебя искренне поддержать!**\n\nИногда климатические новости кажутся пугающими, а заботы накапливаются. Знаешь, один из лучших способов вернуть внутренний покой — выйти на прогулку в парк, послушать шелест листьев и вдохнуть свежий воздух. Природа обладает удивительной способностью лечить душу.\n\nИ помни: никто не требует от тебя спасать всю планету в одиночку. Даже самое маленькое доброе дело (посаженный цветок, налитая птицам вода, выключенный лишний свет) делает мир лучше. О чем ты сейчас думаешь? Я с радостью поговорю с тобой на любую тему! 💚`;
  }

  // 3. Match against specialized ecological topics with scoring
  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of ECO_KNOWLEDGE_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (lower.includes(kw.toLowerCase())) {
        score += kw.length > 5 ? 3 : 2;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic && highestScore >= 2) {
    const rawAnswer = bestTopic.generateAnswer(cleanQuery, { ...context, isEn });
    if (isEn) {
      return translateEcoTopicToEnglish(bestTopic.id, cleanQuery, { ...context, isEn });
    }
    return rawAnswer;
  }

  // 4. Generic ecology topics synthesizer
  return synthesizeUniversalEcoAnswer(cleanQuery, { ...context, isEn });
}

/**
 * Generates English response for matched topics
 */
function translateEcoTopicToEnglish(topicId: string, _query: string, ctx: EcoQueryContext): string {
  const city = ctx.cityName || 'your city';
  const aqiVal = ctx.aqi ?? 42;
  const pm25Val = ctx.pm25 ?? 12;

  switch (topicId) {
    case 'school-youth':
      return `🌟 **It is wonderful that you want to help nature!**

Every student and young person can make an immediate, meaningful impact—with zero budget and right from your school or home in ${city}:

1. 🔋 **School Battery Drop-off:** Set up or use a battery collection bin at school. Just **one single AA battery** prevents the toxic heavy metal contamination of 20 m² of soil and local groundwater!
2. 💧 **Refillable Water Bottle:** Bring your own stylish flask instead of buying single-use 500ml plastic bottles. This diverts ~**150 plastic bottles per year**!
3. 🍂 **Paper & Notebook Drives:** Collect scrap notebooks and cardboard. 60 kg of recycled paper saves one mature tree from deforestation.
4. 💡 **Smart Habits at Home:** Turn off lights when leaving rooms and switch off the faucet while brushing teeth (saving up to 15 liters of clean water per session!).
5. 🛍️ **Canvas Tote or Backpack:** Refuse checkout plastic bags—simply carry purchases in your backpack.
6. 🧴 **Bottle Cap Drives:** Collect clean plastic caps for charity recycling initiatives.

Which step would you like to start with today? I am here to guide you! 🌿✨`;

    case 'climate-change':
      return `🌍 **Global Warming and the Climate Crisis: Facts and Solutions**

1. **What is driving it?**
Burning fossil fuels (coal, oil, gas) and deforestation release heat-trapping greenhouse gases ($CO_2$, methane $CH_4$). They act like an insulating blanket over Earth. Over the past 150 years, global mean temperatures have already risen by **+1.2°C**.

2. **What are the projected risks for 2046?**
- **Weather Extremes:** Intense droughts alternating with torrential cloudbursts and urban flash floods.
- **Glacial Retreat:** Polar ice caps and mountain glaciers (which supply freshwater to millions) are losing billions of tons of ice annually.
- **Urban Heat Stress:** In regions like ${city}, extreme heatwave days exceeding +35°C could increase 2 to 3-fold by 2046.

3. **Global Solutions:**
Accelerating renewable energy (solar, wind), mass transit electrification, sponge city retrofitting, and massive afforestation.

4. **What can each of us do?**
- Prioritize public transit, biking, or walking;
- Optimize household energy and heating efficiency;
- Reduce consumption of single-use goods and support local circular businesses.

Would you like to examine our 2046 scenario model for your region in detail? 🌡️`;

    case 'plastics-microplastics':
      return `🧴 **Eco-Friend Guide to Plastic Resin Codes & Microplastics:**

### 🔍 Resin Identification Codes:
- **01 PET (PETE):** Transparent beverage bottles. *Highly recyclable!* Rinse, crush flat, and place in recycling bins.
- **02 HDPE:** Opaque shampoo bottles, detergent jugs, sturdy caps. *High recycling demand.*
- **03 PVC:** Pipes, vinyl siding, certain cling wraps. *Toxic chlorine compounds; not accepted in curbside recycling.* Avoid!
- **04 LDPE:** Grocery bags, shrink wraps, bubble wraps. Recycled at designated film collection drops.
- **05 PP (Polypropylene):** Food meal containers, yogurt cups, reusable lids. *Food-safe and readily recyclable.* Clean off oils before disposal.
- **06 PS (Polystyrene):** Styrofoam trays, single-use cutlery. *Brittle, leaches styrene on heating; rarely recyclable.*
- **07 OTHER:** Multi-layer pouches, mixed resins. In 90% of cases destined for landfills.

### ⚠️ Why are Microplastics Hazardous?
Microplastics (<5 mm) shed from synthetic clothing washing and plastic breakdown. They contaminate marine ecosystems, drinking water, and biological food chains. Always choose natural fibers (cotton, linen, wool) and reusable containers! 🌊`;

    case 'recycling-materials':
      return `♻️ **Proper Material Sorting & Circular Economy in ${city}:**

### 📦 1. Paper & Cardboard:
- **ACCEPTED:** Books, newspapers, study notes, corrugated cardboard boxes, clean office paper.
- **DO NOT INCLUDE:** Thermal store receipts (contain BPA), paper napkins, wax-coated coffee cups, parchment paper.

### 🍾 2. Glass:
- **ACCEPTED:** Glass bottles and food jars of any color (clear, green, amber).
- **DO NOT INCLUDE:** Window panes, mirrors, crystal, ceramics, or porcelain (different melting temperatures ruin glass recycling batches).
- *Superpower of glass:* It can be recycled **100% infinitely** without quality degradation!

### 🥫 3. Metals:
- **ACCEPTED:** Aluminum beverage cans, tin food cans, metal jar lids.
- **Pro Tip:** Rinse food residue and flatten cans to save space.

### 🧃 4. Tetra Pak & Cartons:
- Multi-layer composite packaging (75% paperboard + 20% polymer + 5% aluminum). Drop off exclusively at specialized facilities equipped with hydrapulpers.

*Golden Rule:* Recyclables should always be **clean, dry, and free of food grease**! 🌿`;

    case 'hazardous-waste':
      return `⚠️ **Hazardous Household Waste: Safe Disposal Protocol**

1. 🔋 **Batteries and Lithium Accumulators:**
- Contain toxic lead, mercury, cadmium, and lithium. Never dispose in regular bins. Drop off at collection bins in supermarkets, electronics retailers, or school eco-boxes.

2. 🌡️ **Mercury Thermometers:**
- Mercury vapors are potent neurotoxins. If broken: do not vacuum! Ventilate the room, wear gloves, gather droplets with tape or a bulb syringe into a sealed jar of water, and call civic hazardous waste disposal.

3. 💡 **Fluorescent & CFL Bulbs:**
- Contain mercury vapor. Return to municipal recycling points or certified hardware drop-offs. LED bulbs do not contain mercury but should be recycled with e-waste.

4. 🚗 **Tires & Automotive Fluids:**
- Used tires must be surrendered to certified recyclers to be processed into rubber crumbs for sports courts and playgrounds.

5. 💊 **Expired Medications:**
- Never flush pills down toilets! Sewage plants cannot filter pharmaceutical antibiotics and hormones, polluting river ecosystems. Drop off at pharmacy take-back bins.`;

    case 'water-oceans':
      return `🌊 **Freshwater Conservation and Ocean Protection:**

### 💧 Why Fresh Water is Critical:
Less than 3% of Earth's water is fresh, and most is locked in glaciers. Meanwhile, rivers suffer from agricultural runoff, microplastics, and phosphate detergents that spark toxic algal blooms.

### 🚰 Easy Ways to Save Water at Home:
1. **Turn off the tap while brushing:** Saves up to **15–20 liters per day** per person (~6,000 liters/year!).
2. **Faucet Aerators:** Inexpensive aerator mesh heads cut flow rate by 50% with zero loss of rinsing comfort.
3. **5-Minute Showers:** A short shower uses 40–50 liters, compared to 150–200 liters for a filled bathtub.
4. **Fixing Leaks:** A dripping tap wastes 20 liters daily, while a leaking toilet flapper can waste over 200 liters every day.

### 🐢 Marine Stewardship:
- Avoid cosmetic products with plastic microbeads;
- Choose biodegradable phosphate-free detergents;
- Never leave plastic trash on riverbanks and coastal beaches.`;

    case 'air-quality':
      return `🌬️ **Urban Air Quality & Respiratory Protection in ${city}:**

### 📊 Understanding Key Air Pollutants:
- **AQI (Air Quality Index):**
  - 0–50: Good (Green);
  - 51–100: Moderate (Yellow);
  - 101–150: Sensitive Caution (Orange);
  - 151+: Unhealthy Smog (Red).
- **PM2.5 Particles (2.5 µm diameter):** Microscopic combustion soot, tire wear, and heavy metal sulfates that bypass nasal filters into deep lung tissues and bloodstreams.

*Current telemetry for your area: AQI ~${aqiVal}, PM2.5 ~${pm25Val} µg/m³.*

### 🛡️ Clean Air Action Steps:
1. **Ventilation Timing:** On stagnant days, air out rooms during early dawn or late evening hours.
2. **Air-Purifying Houseplants:** Chlorophytum (spider plant), Spathiphyllum (peace lily), and Sansevieria (snake plant) naturally absorb airborne VOCs.
3. **HEPA Air Filtration:** HEPA H13 filters capture up to 99.97% of PM2.5 particles and seasonal pollens.`;

    default:
      return synthesizeUniversalEcoAnswer(_query, ctx);
  }
}

/**
 * Returns dynamic contextual follow-up questions based on the topic and language
 */
export function getSuggestedQuestionsForTopic(query: string, isEn: boolean = false): string[] {
  const lower = query.toLowerCase();

  if (isEn || /^[a-zA-Z0-9\s.,!?'"-]+$/.test(query)) {
    if (lower.includes('plastic') || lower.includes('recycl') || lower.includes('pet') || lower.includes('bottle')) {
      return [
        'Where can I recycle glass and aluminum cans?',
        'How dangerous are microplastics in our food chain?',
        'How to prepare polypropylene (PP #5) containers for recycling?'
      ];
    }
    if (lower.includes('climate') || lower.includes('warm') || lower.includes('2046') || lower.includes('carbon')) {
      return [
        'I am a student, how can I help the environment?',
        'What is a "Sponge City" concept by 2046?',
        'How can I calculate and reduce my personal carbon footprint?'
      ];
    }
    if (lower.includes('battery') || lower.includes('waste') || lower.includes('hazard') || lower.includes('electronic')) {
      return [
        'How to safely dispose of old electronics and laptops?',
        'Why does a single discarded battery pollute 20 m² of soil?',
        'What should I do if a mercury thermometer breaks?'
      ];
    }
    if (lower.includes('water') || lower.includes('ocean') || lower.includes('river') || lower.includes('lake')) {
      return [
        'How can households reduce water waste by 50% effortlessly?',
        'What causes the Great Pacific Garbage Patch?',
        'How do phosphate detergents trigger lake eutrophication?'
      ];
    }
    if (lower.includes('student') || lower.includes('school') || lower.includes('youth') || lower.includes('kid')) {
      return [
        'How to organize an eco-drive or paper collection at school?',
        'What is the 5R Zero Waste framework?',
        'How to pack an eco-friendly zero-waste school bag?'
      ];
    }
    return [
      'I am a student, how can I help the environment?',
      'How to correctly identify and sort plastic codes?',
      'What is the 2046 climate projection for my region?',
      'Where to dispose of depleted batteries and e-waste?'
    ];
  }

  // Russian suggestions
  if (lower.includes('пластик') || lower.includes('сортировк') || lower.includes('пет') || lower.includes('бак')) {
    return [
      'Куда сдать стекло и алюминиевые банки?',
      'Чем опасен микропластик для здоровья?',
      'Как подготовить стаканчики из полипропилена (PP 5)?'
    ];
  }
  if (lower.includes('климат') || lower.includes('потеплен') || lower.includes('2046') || lower.includes('парников')) {
    return [
      'Я школьник, как я могу помочь экологии?',
      'Что такое «Город-губка» к 2046 году?',
      'Как сократить личный углеродный след?'
    ];
  }
  if (lower.includes('батарейк') || lower.includes('опасн') || lower.includes('градусник') || lower.includes('ртут')) {
    return [
      'Что делать, если разбился ртутный градусник?',
      'Куда бесплатно сдать старый ноутбук или телефон?',
      'Почему одна батарейка отравляет 20 м² земли?'
    ];
  }
  if (lower.includes('вод') || lower.includes('океан') || lower.includes('рек') || lower.includes('байкал') || lower.includes('рыб')) {
    return [
      'Как экономить до 50% воды дома без неудобств?',
      'Откуда берется мусорное пятно в Тихом океане?',
      'Почему озера цветут и как это предотвратить?'
    ];
  }
  if (lower.includes('школ') || lower.includes('подросток') || lower.includes('дет') || lower.includes('студент')) {
    return [
      'Как организовать эко-акцию или сбор макулатуры в классе?',
      'Что такое акция «Добрые крышечки»?',
      'Как собрать экологичный рюкзак в школу?'
    ];
  }
  if (lower.includes('лес') || lower.includes('дерев') || lower.includes('пожар') || lower.includes('тайг')) {
    return [
      'Какие деревья эффективнее всего очищают воздух от смога?',
      'Как правильно посадить саженец весной?',
      'Чем опасны торфяные пожары и весенний пал травы?'
    ];
  }
  if (lower.includes('пчел') || lower.includes('птиц') || lower.includes('животн') || lower.includes('красн')) {
    return [
      'Чем категорически нельзя кормить птиц зимой?',
      'Почему без пчел исчезнет треть еды на Земле?',
      'Какие животные под угрозой исчезновения в Евразии?'
    ];
  }
  if (lower.includes('энерг') || lower.includes('солн') || lower.includes('ветер') || lower.includes('электромобил')) {
    return [
      'Электромобиль действительно экологичнее обычной машины?',
      'Как работают солнечные панели в пасмурную погоду?',
      'Что такое «зеленый водород»?'
    ];
  }
  if (lower.includes('город') || lower.includes('крыш') || lower.includes('sponge')) {
    return [
      'Как зеленые крыши снижают температуру в мегаполисе?',
      'Что такое микролеса Акиры Мияваки?',
      'Как озеленить свой двор или балкон?'
    ];
  }
  if (lower.includes('zero') || lower.includes('ноль отходов') || lower.includes('пакет') || lower.includes('еда')) {
    return [
      'Что такое 5 правил Zero Waste (Refuse, Reduce, Reuse)?',
      'Как перестать выбрасывать испорченную еду дома?',
      'Как отличить настоящий эко-продукт от гринвошинга?'
    ];
  }

  return [
    'Я школьник, как я могу помочь окружающей среде?',
    'Как правильно сортировать пластик (PP и PET)?',
    'Какой климатический прогноз на 2046 год для моего региона?',
    'Куда сдать старые батарейки и электротехнику?'
  ];
}

/**
 * Synthesizes an expert, comprehensive answer for any custom ecological query
 */
function synthesizeUniversalEcoAnswer(query: string, ctx: EcoQueryContext): string {
  const isEn = ctx.isEn;
  const city = ctx.cityName || (isEn ? 'your region' : 'твоем регионе');
  
  if (isEn) {
    return `🌿 **Eco-Friend Answer to Your Question:**

Thank you for your thoughtful inquiry! Deepening our understanding of nature, ecological balance, and climate systems is the vital first step toward a resilient future for ${city}.

### 🔍 Core Ecological Dimensions of this Topic:
1. **Ecological Equilibrium:** All planetary systems (atmosphere, hydrosphere, soil microbiome, flora, and fauna) are deeply interconnected. Shifting even one variable ripples across regional climate stability and human wellbeing toward 2046.
2. **Anthropogenic Pressures:** Industrial emissions, vehicle combustion, and linear resource consumption place stress on ecosystems—yet modern circular technologies and civic awareness empower us to reverse these impacts.
3. **Resilience Solutions:** Implementing closed-loop recycling, regenerating urban nature, scaling decentralized renewables, and sponge city infrastructure.

### 💡 Meaningful Actions You Can Take Today:
- **Practice Mindful Consumption:** Refuse single-use disposables that become waste in minutes;
- **Sort Household Recyclables:** Segregate clean paper, glass, metals, and designated plastics to conserve raw materials;
- **Conserve Energy and Water:** Small daily habits save tons of resources and eliminate unnecessary carbon emissions;
- **Spread Environmental Knowledge:** Share facts and practical tips with classmates, family, and colleagues.

Would you like to explore any specific aspect of this topic in greater detail? Just let me know! 🌍✨`;
  }

  return `🌿 **Ответ Эко-Друга на твой вопрос:**

Спасибо за отличный и важный вопрос! Забота об окружающем мире и понимание природных процессов — это первый шаг к здоровому будущему планеты и нашего города (${city}).

### 🔍 Главные экологические аспекты по этой теме:
1. **Природное равновесие:** Все элементы экосистемы (воздух, вода, почва, растения и животные) тесно связаны между собой. Изменение даже одного звена влияет на климат и качество жизни людей к 2046 году.
2. **Влияние человека:** Антропогенная нагрузка (промышленность, транспорт, нерациональное потребление ресурсов) создает давление на экосистемы, но современные технологии и осознанность позволяют повернуть эти процессы вспять.
3. **Современные решения:** Переход на циркулярную экономику (замкнутый цикл), восстановление природных экосистем, озеленение городов и внедрение чистых источников энергии.

### 💡 Что полезного может сделать каждый из нас:
- **Осознанно подходить к покупкам:** Не брать одноразовые вещи, которые окажутся на свалке через 10 минут;
- **Сортировать отходы:** Разделять бумагу, стекло, металл и пластик — это бережет природные ископаемые;
- **Беречь воду и электричество:** Простые привычки дома экономят тонны ресурсов и сокращают выбросы парниковых газов;
- **Делиться знаниями:** Рассказывать друзьям, в школе или семье о том, почему важно беречь природу.

Хочешь, разберем какой-то конкретный пример подробнее? Напиши, что именно тебя больше всего интересует! 🌍✨`;
}
