import { EcoArticle } from '../types';

export const ECO_ARTICLES: EcoArticle[] = [
  {
    id: 'ocean-microplastic',
    categoryBadge: 'Океаны и технологии',
    categoryBadgeEn: 'Oceans & Technology',
    categorySlug: 'oceans',
    title: 'Невидимый океанский шторм: как микропластик захватывает планету и кто научился его побеждать',
    titleEn: 'The Invisible Ocean Tempest: How Microplastics Invade Earth and How We Learn to Defeat Them',
    lead: 'Каждую минуту в Мировой океан попадает грузовик пластикового мусора. Но самая коварная угроза скрыта от глаз: частицы размером меньше макового зернышка меняют климат и пищевую цепочку. Разбираемся, как инновации 2026 года возвращают океанам чистоту.',
    leadEn: 'Every single minute, a garbage truck full of plastic waste enters the World Ocean. Yet the most insidious threat remains hidden: particles smaller than a poppy seed alter climate cycles and the global food chain. Here is how 2026 innovations are restoring ocean clarity.',
    readTime: '4 мин чтения',
    readTimeEn: '4 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Микропластик', 'Мировой океан', 'Биотехнологии', 'Zero Waste', 'Экология'],
    tagsEn: ['Microplastics', 'World Ocean', 'Biotechnology', 'Zero Waste', 'Ecology'],
    keyFact: 'До 35% всего первичного микропластика попадает в океан при обычной машинной стирке синтетики.',
    keyFactEn: 'Up to 35% of all primary microplastics enter the oceans during standard machine washing of synthetic fabrics.',
    actionCallout: 'Выбирайте натуральные ткани, стирайте синтетику в защитных мешках и откажитесь от одноразовых пластиковых бутылок.',
    actionCalloutEn: 'Choose natural fabrics, wash synthetics in protective micro-catcher filter bags, and ditch single-use plastic bottles.',
    chatPrompt: 'Расскажи подробнее про океанический микропластик: как именно бактерии расщепляют ПЭТ-пластик за 48 часов и как защитить себя дома?',
    chatPromptEn: 'Tell me more about oceanic microplastics: how exactly do bacteria break down PET plastics in 48 hours and how can I protect myself at home?',
    contentHtml: `
<article class="eco-article" id="article-ocean-plastic">
  <header class="eco-article__header">
    <span class="eco-article__badge">Океаны и технологии</span>
    <h1 class="eco-article__title">Невидимый океанский шторм: как микропластик захватывает планету и кто научился его побеждать</h1>
    <p class="eco-article__lead">
      Каждую минуту в Мировой океан попадает грузовик пластикового мусора. Но самая коварная угроза скрыта от глаз: частицы размером меньше макового зернышка меняют климат и пищевую цепочку. Разбираемся, как инновации 2026 года возвращают океанам чистоту.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Куда исчезают миллионы тонн пластиковых пакетов?</h2>
    <p>
      Пластик не исчезает бесследно — солнце, соленая вода и волны дробят его на микроскопические фрагменты (микропластик). Сегодня эти частицы находят в арктических льдах, высокогорных облаках и даже в тканях глубоководных морских обитателей.
    </p>
    
    <ul>
      <li><strong>Масштаб проблемы:</strong> В океанах дрейфует более 170 триллионов частиц пластика общим весом свыше 2 миллионов тонн.</li>
      <li><strong>Скрытый источник:</strong> До 35% всего первичного микропластика попадает в воду во время обычной машинной стирки синтетических тканей (флис, полиэстер, акрил).</li>
      <li><strong>Эффект бумеранга:</strong> Морские организмы принимают микропластик за планктон, после чего токсичные соединения по пищевой цепочке возвращаются прямо к нам на стол.</li>
    </ul>

    <h2>Технологии надежды: от бактерий до умных барьеров</h2>
    <p>
      Экологические инженеры не сидят сложа руки. На смену ручному сбору мусора приходят умные биотехнологии:
    </p>
    <ul>
      <li><strong>Биоферменты-утилизаторы:</strong> Лабораторно выращенные бактерии способны расщеплять сложные пластиковые полимеры (ПЭТ) на безвредную воду и органические сахара всего за 48 часов.</li>
      <li><strong>Океанические плавучие барьеры:</strong> Автономные системы на солнечной энергии задерживают мусор в устьях рек еще до того, как он достигнет открытого моря.</li>
      <li><strong>Уловители волокон для стиральных машин:</strong> Микросетчатые фильтры удерживают до 90% синтетических волокон в бытовых стоках.</li>
    </ul>

    <h2>Твой шаг: как помочь океану уже сегодня</h2>
    <p>
      Спасение океана начинается не на пляже, а на нашей кухне и в ванной. Выбирай одежду из натуральных волокон (лен, хлопок, конопляное волокно), используй многоразовую бутылку для воды и стирай синтетику в специальных защитных мешках-уловителях. Твоя осознанность — это сотни спасенных морских жизней каждый год!
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-ocean-plastic-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Oceans & Technology</span>
    <h1 class="eco-article__title">The Invisible Ocean Tempest: How Microplastics Invade Earth and How We Learn to Defeat Them</h1>
    <p class="eco-article__lead">
      Every single minute, a garbage truck full of plastic waste enters the World Ocean. Yet the most insidious threat remains hidden: particles smaller than a poppy seed alter climate cycles and the global food chain. Here is how 2026 innovations are restoring ocean clarity.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Where Do Millions of Tons of Plastic Disappear?</h2>
    <p>
      Plastic never simply vanishes. Solar ultraviolet radiation, salty water, and abrasive wave action fragment it into microscopic pieces known as microplastics. Today, these particles are detected in Arctic pack ice, high-altitude alpine clouds, and even the tissues of deep-sea fauna.
    </p>
    
    <ul>
      <li><strong>Scale of the Crisis:</strong> Over 170 trillion plastic particles drift in global oceans, exceeding a combined weight of 2 million metric tons.</li>
      <li><strong>Hidden Culprit:</strong> Up to 35% of all primary microplastics enter wastewater during normal washing machine cycles of synthetic textiles (fleece, polyester, nylon).</li>
      <li><strong>Boomerang Effect:</strong> Marine fauna mistake microplastics for plankton, concentrating synthetic toxic compounds up the food chain straight to human plates.</li>
    </ul>

    <h2>Technologies of Hope: From Bio-Enzymes to Autonomous River Barriers</h2>
    <p>
      Environmental engineers have made immense strides. Instead of tedious manual cleanup, intelligent biotechnological solutions are taking over:
    </p>
    <ul>
      <li><strong>Bacterial Bio-Degraders:</strong> Bioengineered bacterial strains deploy specialized enzymes capable of breaking down complex PET polymers into water and harmless organic sugars in just 48 hours.</li>
      <li><strong>Autonomous River Interceptors:</strong> Solar-powered floating cleanup vessels trap river debris at key delta mouths before trash ever enters open marine waters.</li>
      <li><strong>Micro-Fiber Catchers for Home Laundry:</strong> Micro-mesh filters installed in residential washing machines capture up to 90% of shed synthetic microfibers.</li>
    </ul>

    <h2>Your Action: How to Protect the Oceans Today</h2>
    <p>
      Saving marine ecosystems begins at home — right in our wardrobes and kitchens. Choose clothes made from natural fibers (linen, organic cotton, hemp), keep a stylish reusable water flask, and wash synthetic sportswear in microfiber-catching laundry bags. Your daily mindfulness saves hundreds of marine lives every single year!
    </p>
  </div>
</article>
    `
  },
  {
    id: 'sponge-cities-climate',
    categoryBadge: 'Климат и архитектура',
    categoryBadgeEn: 'Climate & Architecture',
    categorySlug: 'cities',
    title: 'Города, которые дышат и пьют: как концепция «Sponge City» спасает нас от зноя и наводнений',
    titleEn: 'Cities That Breathe and Drink: How the «Sponge City» Concept Shields Us from Heatwaves and Floods',
    lead: 'Бетонные джунгли раскаляются летом до опасных пределов и тонут при каждом ливне. Новое поколение городской архитектуры отказывается от сплошного асфальта в пользу живой природы. Узнайте, как «города-губки» охлаждают планету на 3°C.',
    leadEn: 'Concrete jungles heat up dangerously during summer heatwaves and flood during torrential rains. A new generation of urban architecture replaces solid asphalt with living ecosystems. Learn how sponge cities cool our living environment by 3°C.',
    readTime: '5 мин чтения',
    readTimeEn: '5 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Sponge City', 'Климат 2046', 'Зеленые крыши', 'Леса Мияваки', 'Урбанистика'],
    tagsEn: ['Sponge City', 'Climate 2046', 'Green Roofs', 'Miyawaki Forests', 'Urban Planning'],
    keyFact: 'Зеленые крыши и пористые покрытия снижают температуру в квартале на 2–4°C и удерживают до 70% осадков.',
    keyFactEn: 'Green roofs and permeable pavements lower neighborhood temperatures by 2–4°C and retain up to 70% of storm precipitation.',
    actionCallout: 'Озеленяйте балконы, поддерживайте сохранение городских скверов и выбирайте общественный электротранспорт.',
    actionCalloutEn: 'Plant balcony greenery, advocate for the preservation of public parks, and opt for zero-emission public transport.',
    chatPrompt: 'Объясни подробнее концепцию Sponge City: как устроен дождевой сад и как микролеса Мияваки очищают городской воздух?',
    chatPromptEn: 'Explain the Sponge City concept in depth: how do rain gardens operate and how do Miyawaki microforests purify urban air?',
    contentHtml: `
<article class="eco-article" id="article-sponge-cities">
  <header class="eco-article__header">
    <span class="eco-article__badge">Климат и архитектура</span>
    <h1 class="eco-article__title">Города, которые дышат и пьют: как концепция «Sponge City» спасает нас от зноя и наводнений</h1>
    <p class="eco-article__lead">
      Бетонные джунгли раскаляются летом до опасных пределов и тонут при каждом ливне. Новое поколение городской архитектуры отказывается от сплошного асфальта в пользу живой природы. Узнайте, как «города-губки» охлаждают планету на 3°C.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Почему современные мегаполисы превратились в тепловые ловушки?</h2>
    <p>
      Асфальт и стекло поглощают солнечное тепло днем и медленно отдают его ночью, создавая эффект «городского теплового острова». Температура в центре мегаполиса может быть на 5–8°C выше, чем в пригороде. При этом обычная ливневая канализация не справляется с экстремальными залповыми осадками, вызванными изменением климата.
    </p>

    <h2>Анатомия города-губки: как это устроено?</h2>
    <p>
      Главный принцип «Sponge City» прост: <strong>не бороться с водой, а стать ее союзником</strong>. Вместо того чтобы быстро сливать дождевую воду в трубы, город впитывает, очищает и сохраняет ее:
    </p>
    <ul>
      <li><strong>Пористые покрытия:</strong> Эко-плитка и водопроницаемый асфальт пропускают дождевую воду напрямую в почву, предотвращая лужи и разгружая ливневки.</li>
      <li><strong>Зеленые крыши и вертикальные сады:</strong> Растения на фасадах и кровлях задерживают до 70% дождевых капель и работают как природный кондиционер, снижая потребность в энергоемких охладителях.</li>
      <li><strong>Биодренажные пруды и карманные парки:</strong> Городские дождевые сады собирают излишки воды, очищают ее корнями водных растений и создают оазисы прохлады для горожан.</li>
    </ul>

    <h2>Супер-оружие урбанистики: карманные микролеса Мияваки</h2>
    <p>
      Сверхплотные посадки местных видов деревьев на крошечных участках размером от 100 м² растут в 10 раз быстрее обычных парков. Они поглощают городской шум, улавливают опасную микропыль PM2.5 и снижают температуру в жилом квартале на 2–4°C во время летней жары.
    </p>

    <h2>Твой шаг: создай зеленый оазис вокруг себя</h2>
    <p>
      Превратить город в цветущий сад может каждый. Озелени балкон медоносными травами, поддержи высадку деревьев в своем дворе или откажись от лишней поездки на автомобиле в жаркий день в пользу велосипеда. Создавай комфортную городскую среду своими руками!
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-sponge-cities-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Climate & Architecture</span>
    <h1 class="eco-article__title">Cities That Breathe and Drink: How the «Sponge City» Concept Shields Us from Heatwaves and Floods</h1>
    <p class="eco-article__lead">
      Concrete jungles heat up dangerously during summer heatwaves and flood during torrential rains. A new generation of urban architecture replaces solid asphalt with living ecosystems. Learn how sponge cities cool our living environment by 3°C.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Why Have Modern Megacities Become Thermal Traps?</h2>
    <p>
      Dense asphalt and glass facades absorb solar radiation throughout the day and radiate it back at night, inducing the urban heat island effect. Downtown temperatures can register 5–8°C hotter than surrounding countryside areas. Simultaneously, traditional stormwater sewers are overwhelmed by extreme downpours triggered by climate destabilization.
    </p>

    <h2>Anatomy of a Sponge City: How It Operates</h2>
    <p>
      The core philosophy of a Sponge City is straightforward: <strong>do not fight rainwater, make it your primary ally</strong>. Rather than dumping storm runoff into overloaded drainage canals, the city absorbs, filters, and repurposes it:
    </p>
    <ul>
      <li><strong>Permeable Pavements:</strong> Porous eco-tiles and specialized asphalt allow rainfall to percolate naturally into the soil aquifer, preventing flash standing pools and sewer backups.</li>
      <li><strong>Green Roofs & Living Facades:</strong> Dense vegetation on building rooftops catches up to 70% of cloudburst precipitation, functioning as natural evaporative cooling to cut air-conditioning energy demands.</li>
      <li><strong>Bioswales & Pocket Rain Gardens:</strong> Engineered bio-retention swales collect urban runoff, phytoremediate contaminants with aquatic root microbiomes, and deliver refreshing microclimates.</li>
    </ul>

    <h2>Urban Superpower: Miyawaki Pocket Microforests</h2>
    <p>
      Ultra-dense plantings of indigenous multi-tier tree and shrub varieties on compact plots (as small as 100 m²) grow up to 10 times faster than conventional monoculture parks. They dampen street noise, trap toxic fine particulate matter (PM2.5), and lower ambient residential temperatures by 2–4°C during sweltering heatwaves.
    </p>

    <h2>Your Action: Cultivate a Green Oasis Around You</h2>
    <p>
      Everyone can help transform their city into a resilient urban sanctuary. Green your balcony with pollinator-friendly herbs, volunteer for community tree planting drives in your neighborhood, or replace an unnecessary car trip on hot summer days with an e-bike ride. Design a cooler, healthier city with your own hands!
    </p>
  </div>
</article>
    `
  },
  {
    id: 'zero-waste-five-r',
    categoryBadge: 'Эко-привычки и Zero Waste',
    categoryBadgeEn: 'Eco-Habits & Zero Waste',
    categorySlug: 'habits',
    title: 'Искусство жить легко: 5 простых привычек, которые уменьшат твой мусорный след на 80%',
    titleEn: 'The Art of Living Light: 5 Simple Habits That Cut Your Waste Footprint by 80%',
    lead: 'Экологичная жизнь — это не про строгие ограничения, а про комфорт, экономию бюджета и свободу от лишних вещей. Развенчиваем мифы об эко-активизме и делимся проверенным планом перехода на осознанное потребление без стресса.',
    leadEn: 'Eco-conscious living is not about harsh deprivation — it is about everyday comfort, family budget savings, and clarity of mind. We dismantle eco-perfectionist myths and present an actionable, stress-free roadmap to conscious consumption.',
    readTime: '4 мин чтения',
    readTimeEn: '4 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Zero Waste', 'Правило 5R', 'Осознанность', 'Сортировка отходов', 'Экономия'],
    tagsEn: ['Zero Waste', '5R Rule', 'Mindfulness', 'Waste Sorting', 'Savings'],
    keyFact: 'Отказ от одноразовых стаканчиков, бутылок и пакетов экономит семье до 40 000 рублей в год.',
    keyFactEn: 'Eliminating disposable coffee cups, bottled water, and single-use bags saves a household up to $500–$800 annually.',
    actionCallout: 'Начните с «Правила одной недели»: берите с собой шоппер и сдайте старые батарейки в бокс.',
    actionCalloutEn: 'Start with the "One-Week Rule": carry a compact reusable tote and deposit spent household batteries in a certified drop box.',
    chatPrompt: 'Как легко внедрить правило 5R (Refuse, Reduce, Reuse, Recycle, Rot) в обычной квартире и с чего начать новичку?',
    chatPromptEn: 'How can a beginner easily implement the 5R rule (Refuse, Reduce, Reuse, Recycle, Rot) in an urban apartment?',
    contentHtml: `
<article class="eco-article" id="article-zero-waste-habits">
  <header class="eco-article__header">
    <span class="eco-article__badge">Эко-привычки и Zero Waste</span>
    <h1 class="eco-article__title">Искусство жить легко: 5 простых привычек, которые уменьшат твой мусорный след на 80%</h1>
    <p class="eco-article__lead">
      Экологичная жизнь — это не про строгие ограничения, а про комфорт, экономию бюджета и свободу от лишних вещей. Развенчиваем мифы об эко-активизме и делимся проверенным планом перехода на осознанное потребление без стресса.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Миф о «100% идеальном эко-герое»</h2>
    <p>
      Многие думают, что жизнь в стиле Zero Waste («Ноль отходов») требует уместить весь годовой мусор в стеклянную баночку. Это опасное заблуждение. Нам не нужна сотня людей, идеально соблюдающих правила. Планете нужны <strong>миллионы людей, которые делают простые шаги каждый день</strong>.
    </p>

    <h2>Формула 5R: твоя карта разумного потребления</h2>
    <p>
      Запомни пять простых действий, которые берегут кошелек и природные ресурсы:
    </p>
    <ul>
      <li><strong>1. Refuse (Откажись):</strong> Скажи «спасибо, не надо» рекламным листовкам, одноразовым чехлам, пластиковым соломинкам и бесплатным пакетам на кассе.</li>
      <li><strong>2. Reduce (Сократи):</strong> Составляй список перед походом в магазин. До 30% купленных продуктов отправляются в мусорку только потому, что мы покупаем лишнее.</li>
      <li><strong>3. Reuse (Используй повторно):</strong> Стильный шоппер, термокружка для кофе и стеклянный контейнер для ланча спасают сотни килограммов пластика в год.</li>
      <li><strong>4. Recycle (Сдай в переработку):</strong> Сортируй хотя бы самые ликвидные фракции — алюминиевые банки, чистое стекло и макулатуру. Стекло и металл перерабатываются бесконечно без потери качества!</li>
      <li><strong>5. Rot (Верни почве):</strong> Заведи привычку правильно утилизировать опасные отходы (батарейки, электронику) и компостировать органику, если есть приусадебный участок.</li>
    </ul>

    <h2>В чем скрытая финансовая выгода?</h2>
    <p>
      Отказ от одноразовых пакетов, бутилированной воды и покупного кофе в бумажных стаканчиках экономит в среднем от 25 000 до 40 000 рублей в год на человека. Экологичность — это не только забота о будущем, но и разумное финансовое планирование!
    </p>

    <h2>Твой шаг: начни с «Правила одной недели»</h2>
    <p>
      Не пытайся изменить все привычки за один день. Выбери одно простое действие на эту неделю: например, всегда брать с собой шоппер или сдать накопившиеся старые батарейки в ближайший супермаркет. Попробуй прямо сейчас — природа скажет тебе спасибо!
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-zero-waste-habits-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Eco-Habits & Zero Waste</span>
    <h1 class="eco-article__title">The Art of Living Light: 5 Simple Habits That Cut Your Waste Footprint by 80%</h1>
    <p class="eco-article__lead">
      Eco-conscious living is not about harsh deprivation — it is about everyday comfort, family budget savings, and clarity of mind. We dismantle eco-perfectionist myths and present an actionable, stress-free roadmap to conscious consumption.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>The Myth of the «100% Perfect Eco-Hero»</h2>
    <p>
      Many assume that a Zero Waste lifestyle requires fitting an entire year's trash into a tiny mason jar. That is a counterproductive misconception. We do not need a handful of people practicing zero waste perfectly. What our planet desperately needs are <strong>millions of people taking imperfect, consistent steps every single day</strong>.
    </p>

    <h2>The 5R Hierarchy: Your Framework for Mindful Living</h2>
    <p>
      Memorize these five foundational pillars that protect both natural ecosystems and personal savings:
    </p>
    <ul>
      <li><strong>1. Refuse:</strong> Politely decline unsolicited paper flyers, disposable plastic cutlery, beverage straws, and single-use supermarket checkout bags.</li>
      <li><strong>2. Reduce:</strong> Make a weekly meal plan before grocery shopping. Up to 30% of perishable food ends up in municipal dumps simply because we overbuy impulsively.</li>
      <li><strong>3. Reuse:</strong> A durable canvas tote, an insulated coffee tumbler, and glass meal containers eliminate hundreds of pounds of unnecessary packaging every year.</li>
      <li><strong>4. Recycle:</strong> Sort at least high-value, endlessly recyclable fractions — aluminum cans, clean glass bottles, and corrugated cardboard. Metals and glass recycle perpetually with zero degradation of quality!</li>
      <li><strong>5. Rot (Compost):</strong> Safely recycle hazardous electronics and batteries, and compost kitchen organic scraps if you have access to a garden or municipal bio-collection bin.</li>
    </ul>

    <h2>The Hidden Financial Dividend</h2>
    <p>
      Skipping store plastic bags, single-use bottled water, and daily takeaway disposable cups saves on average $500 to $800 per person annually. Sustainability is not just planetary preservation — it is sound financial intelligence!
    </p>

    <h2>Your Action: Commit to the «One-Week Rule»</h2>
    <p>
      Do not try to revamp every single household routine overnight. Select just one frictionless habit for this coming week: keep a reusable tote in your everyday bag or drop off accumulated old batteries at a local retail collection kiosk. Give it a try right now!
    </p>
  </div>
</article>
    `
  },
  {
    id: 'perovskite-solar-energy',
    categoryBadge: 'Энергия будущего',
    categoryBadgeEn: 'Future Energy',
    categorySlug: 'energy',
    title: 'Перовскитовая революция: как гибкие солнечные пленки превращают окна и одежду в электростанции',
    titleEn: 'The Perovskite Revolution: How Flexible Solar Films Turn Windows and Clothes into Power Generators',
    lead: 'Кремниевые солнечные панели тяжелы и дороги в производстве. На смену им приходят наноматериалы на основе перовскитов, которые печатаются на обычном принтере и вырабатывают ток даже в пасмурный день. Разбираемся в энергетическом прорыве.',
    leadEn: 'Traditional silicon solar panels are bulky, rigid, and energy-intensive to manufacture. Enter revolutionary perovskite nanomaterials, printable on industrial roll-to-roll machinery to produce clean electricity even on overcast days. Here is the energy breakthrough of the decade.',
    readTime: '5 мин чтения',
    readTimeEn: '5 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Перовскиты', 'Солнечная энергия', 'ВИЭ', 'Технологии', 'Климат 2046'],
    tagsEn: ['Perovskites', 'Solar Energy', 'Renewables', 'Cleantech', 'Climate 2046'],
    keyFact: 'КПД тандемных перовскитовых фотоэлементов достиг рекордных 34%, превзойдя кремний в 1.5 раза.',
    keyFactEn: 'Tandem perovskite photovoltaic cell efficiency has reached a record 34%, beating traditional silicon limits by 1.5x.',
    actionCallout: 'Используйте портативные солнечные зарядные устройства и переходите на энергосберегающие приборы класса A+++.',
    actionCalloutEn: 'Use portable solar power banks when traveling and upgrade household appliances to premium A+++ energy efficiency ratings.',
    chatPrompt: 'Как работают перовскитовые солнечные элементы и когда они смогут полностью заменить ископаемое топливо в городах?',
    chatPromptEn: 'How do perovskite solar cells work, and when will they be able to fully replace fossil fuels in urban grids?',
    contentHtml: `
<article class="eco-article" id="article-perovskite-solar">
  <header class="eco-article__header">
    <span class="eco-article__badge">Энергия будущего</span>
    <h1 class="eco-article__title">Перовскитовая революция: как гибкие солнечные пленки превращают окна и одежду в электростанции</h1>
    <p class="eco-article__lead">
      Кремниевые солнечные панели тяжелы и дороги в производстве. На смену им приходят наноматериалы на основе перовскитов, которые печатаются на обычном принтере и вырабатывают ток даже в пасмурный день. Разбираемся в энергетическом прорыве.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Почему традиционный кремний достиг своего предела?</h2>
    <p>
      Обычные синие солнечные батареи на крышах состоят из жесткого кремния. Их производство требует экстремальных температур свыше 1400°C и токсичных растворителей. Кроме того, кремний плохо улавливает рассеянный свет в пасмурную погоду или зимнее время.
    </p>

    <h2>Перовскиты: чудо-кристаллы XXI века</h2>
    <p>
      Перовскиты — это полупроводниковые кристаллы с уникальной кристаллической решеткой. Их можно наносить в виде жидких «чернил» тончайшим слоем на стекло, полимерную пленку или даже ткань:
    </p>
    <ul>
      <li><strong>Прозрачные солнечные окна:</strong> Нанесенная на стекло пленка пропускает видимый свет, но улавливает ультрафиолетовый и инфракрасный спектр, вырабатывая электроэнергию для освещения офиса.</li>
      <li><strong>Работа при рассеянном свете:</strong> Перовскитовые панели начинают вырабатывать электричество на рассвете и продолжают работать во время дождя и тумана.</li>
      <li><strong>Экологичный углеродный след:</strong> Энергетическая окупаемость перовскитов составляет всего 2–3 месяца против 1.5–2 лет у классических кремниевых панелей.</li>
    </ul>

    <h2>Тандемное будущее чистой энергии</h2>
    <p>
      Объединение кремния и перовскита в двухслойные тандемные модули позволяет перешагнуть теоретический порог эффективности в 33%. В лабораторных условиях КПД таких элементов уже превышает 34%, делая киловатт-час экологически чистой энергии дешевле угля и газа.
    </p>

    <h2>Твой шаг: энергия твоего дома</h2>
    <p>
      Переходи на разумное энергопотребление: выключай технику из розеток (режим ожидания «съедает» до 10% счета), выбирай светодиодные лампы и поддерживай развитие локальных возобновляемых источников энергии.
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-perovskite-solar-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Future Energy</span>
    <h1 class="eco-article__title">The Perovskite Revolution: How Flexible Solar Films Turn Windows and Clothes into Power Generators</h1>
    <p class="eco-article__lead">
      Traditional silicon solar panels are bulky, rigid, and energy-intensive to manufacture. Enter revolutionary perovskite nanomaterials, printable on industrial roll-to-roll machinery to produce clean electricity even on overcast days. Here is the energy breakthrough of the decade.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Why Has Traditional Silicon Reached Its Physical Ceiling?</h2>
    <p>
      Conventional rooftop photovoltaic arrays rely on rigid crystallized silicon. Manufacturing them demands ultra-high furnace temperatures exceeding 1400°C and complex toxic chemical treatments. Moreover, silicon struggles to convert diffused, scattered ambient light on overcast or winter days.
    </p>

    <h2>Perovskites: The 21st Century Wonder Crystals</h2>
    <p>
      Perovskites are synthetic semiconductor crystalline structures with remarkable photon absorption. They can be formulated into fluid liquid inks and deposited onto glass, flexible polymer substrates, or even textile fabrics:
    </p>
    <ul>
      <li><strong>Semi-Transparent Solar Glazing:</strong> Micro-coated architectural window panes transmit visible daylight for indoor illumination while converting ultraviolet and near-infrared photons directly into clean electricity for the building.</li>
      <li><strong>Diffuse & Low-Light Harvesting:</strong> Perovskite matrices activate at dawn's earliest twilight and sustain power output through rain showers, smog, and heavy morning fog.</li>
      <li><strong>Ultra-Low Embodied Carbon:</strong> The energy payback time of roll-to-roll perovskites is only 2–3 months, compared to 1.5–2 years for high-temperature silicon wafers.</li>
    </ul>

    <h2>The Tandem Horizon of Clean Generation</h2>
    <p>
      By layering a top perovskite cell onto a bottom silicon substrate into a monolithic tandem module, solar engineers shatter the classical 33% Shockley-Queisser theoretical threshold. Laboratory cells exceed 34% photoelectric efficiency, driving green kilowatt-hour generation costs far below fossil coal and gas.
    </p>

    <h2>Your Action: Elevate Your Home Energy IQ</h2>
    <p>
      Embrace intelligent residential efficiency: eliminate vampire standby power (standby draws represent up to 10% of electric bills), switch to premium high-efficiency LED fixtures, and support rooftop solar community energy microgrids.
    </p>
  </div>
</article>
    `
  },
  {
    id: 'bees-pollination-crisis',
    categoryBadge: 'Биоразнообразие и фауна',
    categoryBadgeEn: 'Biodiversity & Wildlife',
    categorySlug: 'wildlife',
    title: 'Молчание ульев: почему исчезновение пчел угрожает каждому третьему блюду на твоем столе',
    titleEn: 'Silence in the Hives: Why the Decline of Pollinators Threatens Every Third Bite on Your Table',
    lead: 'За последние 15 лет популяции диких опылителей сократились на 40%. Без них с полок магазинов исчезнут яблоки, ягоды, кофе и шоколад. Рассказываем, как спасти главных тружеников планеты в городах и на фермах.',
    leadEn: 'Over the past 15 years, wild pollinator populations have plummeted by 40%. Without them, staples like apples, berries, coffee, and cocoa would vanish from global grocery shelves. Here is how urban and agricultural innovations protect Earth’s essential workers.',
    readTime: '4 мин чтения',
    readTimeEn: '4 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Пчелы', 'Опылители', 'Биоразнообразие', 'Продовольствие', 'Природа'],
    tagsEn: ['Bees', 'Pollinators', 'Biodiversity', 'Food Security', 'Nature'],
    keyFact: 'Более 75% ведущих продовольственных культур в мире напрямую зависят от опыления насекомыми.',
    keyFactEn: 'Over 75% of the world’s primary food crop species depend directly on animal and insect pollination.',
    actionCallout: 'Высаживайте медоносные цветы (лаванду, клевер, мяту) на клумбах и балконах, и откажитесь от пестицидов.',
    actionCalloutEn: 'Plant nectar-rich native blooms (lavender, clover, mint, marigolds) in balcony planters and avoid synthetic pesticides.',
    chatPrompt: 'Почему пчелы массово гибнут от пестицидов и как городское пчеловодство спасает биоразнообразие в 2046 году?',
    chatPromptEn: 'Why are bees suffering from pesticide exposure and how does urban beekeeping restore biodiversity in 2046?',
    contentHtml: `
<article class="eco-article" id="article-bees-biodiversity">
  <header class="eco-article__header">
    <span class="eco-article__badge">Биоразнообразие и фауна</span>
    <h1 class="eco-article__title">Молчание ульев: почему исчезновение пчел угрожает каждому третьему блюду на твоем столе</h1>
    <p class="eco-article__lead">
      За последние 15 лет популяции диких опылителей сократились на 40%. Без них с полок магазинов исчезнут яблоки, ягоды, кофе и шоколад. Рассказываем, как спасти главных тружеников планеты в городах и на фермах.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Не просто мед: невидимая опора мирового сельского хозяйства</h2>
    <p>
      Пчелы, шмели и бабочки — ключевые звенья природного механизма воспроизводства растений. Каждый третий кусочек пищи, который мы съедаем за день, существует благодаря опылению:
    </p>
    <ul>
      <li><strong>Под угрозой исчезновения:</strong> Миндаль, авокадо, черника, клубника, томаты, подсолнечник и кофе не дают полноценных плодов без участия насекомых-опылителей.</li>
      <li><strong>Синдром разрушения колоний:</strong> Применение агрессивных неоникотиноидных пестицидов нарушает навигацию пчел — они теряют ориентацию и не могут вернуться в улей.</li>
      <li><strong>Потеря естественной среды:</strong> Монокультурные поля и выстриженные городские газоны лишают пчел сезонного разнообразия цветущих медоносов.</li>
    </ul>

    <h2>Городские оазисы: как мегаполисы спасают диких пчел</h2>
    <p>
      Удивительный факт: в современных зеленых городах пчелы чувствуют себя безопаснее, чем на фермах, потому что в парках запрещено опрыскивание опасными химикатами:
    </p>
    <ul>
      <li><strong>Отели для насекомых (Insect Hotels):</strong> Деревянные домики из бамбуковых трубок и сухих веток дают приют сотням видов диких одиночных пчел и златоглазок.</li>
      <li><strong>Мавританские газоны вместо стриженой травы:</strong> Замена коротких газонов на луговое разнотравье увеличивает численность опылителей в 5 раз.</li>
      <li><strong>Пасеки на крышах:</strong> Кровли оперных театров и университетов Парижа, Берлина и Токио производят один из самых чистых видов меда.</li>
    </ul>

    <h2>Твой шаг: сделай свой балкон убежищем для опылителей</h2>
    <p>
      Посади в ящик на балконе шалфей, тимьян, душицу или бархатцы. Поставь небольшую поилку с камешками, чтобы пчелы могли безопасно пить воду в жару. Каждый цветок — это шанс для сохранения хрупкого баланса жизни!
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-bees-biodiversity-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Biodiversity & Wildlife</span>
    <h1 class="eco-article__title">Silence in the Hives: Why the Decline of Pollinators Threatens Every Third Bite on Your Table</h1>
    <p class="eco-article__lead">
      Over the past 15 years, wild pollinator populations have plummeted by 40%. Without them, staples like apples, berries, coffee, and cocoa would vanish from global grocery shelves. Here is how urban and agricultural innovations protect Earth’s essential workers.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Far Beyond Honey: The Pillar of Global Agriculture</h2>
    <p>
      Bees, bumblebees, hoverflies, and butterflies are the indispensable reproductive machinery of terrestrial flowering flora. Every third mouthful of food consumed by humans exists thanks to animal pollination:
    </p>
    <ul>
      <li><strong>Crops at High Risk:</strong> Almonds, avocados, blueberries, strawberries, heirloom tomatoes, and coffee beans cannot develop viable yields without pollinating insects.</li>
      <li><strong>Colony Collapse Disorder:</strong> Exposure to synthetic neonicotinoid insecticides scrambles honeybee geomagnetic navigation, preventing foragers from returning to the hive.</li>
      <li><strong>Habitat Fragmentation:</strong> Agricultural monocultures and scalped sterile suburban lawns deprive wild bees of season-long diverse flowering nectar sources.</li>
    </ul>

    <h2>Urban Sanctuaries: How Metropolises Protect Wild Species</h2>
    <p>
      Remarkably, bees in progressive green cities often thrive with greater resilience than on conventional agro-industrial farms, largely because municipal parklands ban toxic insecticides:
    </p>
    <ul>
      <li><strong>Insect Biodiversity Hotels:</strong> Perforated hardwood blocks and hollow bamboo bundles provide secure nesting cavities for solitary mason bees and beneficial lacewings.</li>
      <li><strong>Meadow Wilding over Mowed Turf:</strong> Replacing manicured, resource-heavy turf grass with native wild meadow mixes multiplies pollinator biodiversity fivefold.</li>
      <li><strong>Rooftop Apiaries:</strong> High-rise hives atop municipal landmarks in Paris, Berlin, and Tokyo produce pristine honey, shielded from industrial pesticide drifts.</li>
    </ul>

    <h2>Your Action: Turn Your Balcony into an Oasis</h2>
    <p>
      Pot a balcony planter with sage, thyme, oregano, lavender, or calendula. Place a shallow water dish with pebbles so thirsty bees can safely drink during heatwaves without drowning. Every single flower provides vital sustenance to keep the delicate web of life thriving!
    </p>
  </div>
</article>
    `
  },
  {
    id: 'forests-air-cleaners',
    categoryBadge: 'Леса и атмосфера',
    categoryBadgeEn: 'Forests & Atmosphere',
    categorySlug: 'forests',
    title: 'Зеленые легкие планеты: какие деревья поглощают тонны смога и как правильно сажать лес',
    titleEn: 'The Planet’s Green Lungs: Which Trees Absorb Tons of Smog and How to Plant Forests Effectively',
    lead: 'Не все деревья одинаково полезны для городской экологии. Одно взрослое дерево способно охладить воздух как 10 кондиционеров и задержать до 30 кг пыли в год. Узнайте, как наука фиторемедиации возрождает тайгу и городские парки.',
    leadEn: 'Not all tree species offer equal ecological performance in urban habitats. A single mature tree can provide the cooling power of 10 air conditioning units and trap up to 30 kg of particulate dust annually. Explore phytoremediation science and smart reforestation.',
    readTime: '5 мин чтения',
    readTimeEn: '5 min read',
    publishedDate: 'Апрель 2026',
    publishedDateEn: 'April 2026',
    author: 'Яся Саидова, эко-журналист «Планета 2046»',
    authorEn: 'Yasya Saidova, Eco-Journalist at «Planet 2046»',
    tags: ['Леса', 'Фиторемедиация', 'Деревья', 'Воздух', 'Климат'],
    tagsEn: ['Forests', 'Phytoremediation', 'Trees', 'Clean Air', 'Climate'],
    keyFact: 'Один гектар смешанного взрослого леса поглощает до 4 тонн CO₂ и выделяет кислород для 200 человек ежегодно.',
    keyFactEn: 'One hectare of mature mixed forest sequesters up to 4 metric tons of CO₂ and generates oxygen for 200 people annually.',
    actionCallout: 'Участвуйте в весенних и осенних посадках леса, защищайте городские тополя и березы от вырубки.',
    actionCalloutEn: 'Participate in seasonal community tree planting drives and protect mature urban trees and street canopies from illegal felling.',
    chatPrompt: 'Какие породы деревьев лучше всего очищают воздух от тяжелых металлов и микропыли PM2.5 в загрязненном городе?',
    chatPromptEn: 'Which tree species are most effective at filtering heavy metals and PM2.5 microdust in polluted industrial cities?',
    contentHtml: `
<article class="eco-article" id="article-forests-air-cleaners">
  <header class="eco-article__header">
    <span class="eco-article__badge">Леса и атмосфера</span>
    <h1 class="eco-article__title">Зеленые легкие планеты: какие деревья поглощают тонны смога и как правильно сажать лес</h1>
    <p class="eco-article__lead">
      Не все деревья одинаково полезны для городской экологии. Одно взрослое дерево способно охладить воздух как 10 кондиционеров и задержать до 30 кг пыли в год. Узнайте, как наука фиторемедиации возрождает тайгу и городские парки.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Природные суперфильтры: чемпионы по очистке воздуха</h2>
    <p>
      Деревья работают как гигантские биохимические фильтры. Они улавливают микрочастицы PM2.5 своей листвой и превращают углекислый газ в древесину и кислород:
    </p>
    <ul>
      <li><strong>Тополь бальзамический и белый:</strong> Абсолютный чемпион урбанистики. Одно дерево за сезон задерживает до 35 кг пыли и вырабатывает в 7 раз больше кислорода, чем ель. А мужские клоны не дают пуха!</li>
      <li><strong>Липа мелколистная:</strong> Выделяет мощные фитонциды — природные антибиотики, обеззараживающие городской воздух от болезнетворных бактерий.</li>
      <li><strong>Сосна и лиственница:</strong> Прекрасно аккумулируют тяжелые металлы и обогащают атмосферу целебными хвойными эфирными маслами.</li>
    </ul>

    <h2>Главные ошибки при посадке деревьев</h2>
    <p>
      Посадить дерево — это только 10% успеха. Чтобы саженец вырос в могучего защитника природы, важно соблюдать правила:
    </p>
    <ul>
      <li><strong>Разнообразие видов:</strong> Монокультурные посадки быстро погибают от вредителей. Лес должен быть ярусным и смешанным (дуб, береза, рябина, кустарники).</li>
      <li><strong>Правильная глубина корневой шейки:</strong> Нельзя закапывать ствол глубже уровня земли — это приводит к загниванию коры.</li>
      <li><strong>Полив в первые 2 года:</strong> Молодому дереву требуется регулярный полив, пока корни не достигнут глубоких грунтовых вод.</li>
    </ul>

    <h2>Твой шаг: посади свое дерево этой весной</h2>
    <p>
      Присоединяйся к волонтерским проектам по лесовосстановлению («Посади лес», «Сад памяти») или высади саженец рябины или сирени в своем дворе. Дерево, посаженное твоими руками сегодня, будет дарить тень и чистый воздух твоим правнукам через 100 лет!
    </p>
  </div>
</article>
    `,
    contentHtmlEn: `
<article class="eco-article" id="article-forests-air-cleaners-en">
  <header class="eco-article__header">
    <span class="eco-article__badge">Forests & Atmosphere</span>
    <h1 class="eco-article__title">The Planet’s Green Lungs: Which Trees Absorb Tons of Smog and How to Plant Forests Effectively</h1>
    <p class="eco-article__lead">
      Not all tree species offer equal ecological performance in urban habitats. A single mature tree can provide the cooling power of 10 air conditioning units and trap up to 30 kg of particulate dust annually. Explore phytoremediation science and smart reforestation.
    </p>
  </header>

  <div class="eco-article__content">
    <h2>Natural Super-Filters: Air Purification Champions</h2>
    <p>
      Trees function as massive biochemical bioreactors. Their waxy leaf cuticles capture microscopic PM2.5 particulates while sequestering carbon dioxide into resilient wood and releasing oxygen:
    </p>
    <ul>
      <li><strong>Balsam and Silver Poplars:</strong> The undisputed champions of urban air purification. A single mature tree catches up to 35 kg of airborne particulate matter per season and produces 7 times more oxygen than a spruce. Sterile male cultivars generate zero allergenic cotton fluff!</li>
      <li><strong>Small-Leaved Linden (Basswood):</strong> Synthesizes potent phytoncides — natural airborne antimicrobials that disinfect city air of pathogenic bacterial spores.</li>
      <li><strong>Scots Pine & Larch:</strong> Outstanding heavy metal accumulators that enrich atmospheric air with therapeutic essential terpene oils.</li>
    </ul>

    <h2>Critical Mistakes to Avoid When Planting Trees</h2>
    <p>
      Putting a sapling into the soil is merely 10% of the journey. To ensure healthy maturity, key arboricultural standards must be observed:
    </p>
    <ul>
      <li><strong>Species Biodiversity:</strong> Monoculture stands succumb quickly to pests and pathogens. Urban and rural forests must be multi-layered and mixed (oak, birch, mountain ash, and understory shrubs).</li>
      <li><strong>Proper Root Flare Depth:</strong> Never bury the root collar below ground level, as buried bark rots and suffocates roots.</li>
      <li><strong>Hydration During the First Two Years:</strong> Young saplings require consistent deep hydration until taproots tap into permanent groundwater reserves.</li>
    </ul>

    <h2>Your Action: Plant a Tree This Season</h2>
    <p>
      Join reforestation campaigns and community greening drives, or plant a rowan or lilac bush in your neighborhood courtyard. A tree planted by your hands today will provide cool shade and crisp, oxygen-rich air for your great-grandchildren a century from now!
    </p>
  </div>
</article>
    `
  }
];
