export interface RecyclingCode {
  code: string;
  name: string;
  russianName: string;
  nameEn?: string;
  recyclable: 'easy' | 'moderate' | 'hard' | 'non-recyclable';
  recyclableLabel: string;
  recyclableLabelEn?: string;
  description: string;
  descriptionEn?: string;
  commonProducts: string[];
  commonProductsEn?: string[];
  preparationTip: string;
  preparationTipEn?: string;
}

export const RECYCLING_CODES: RecyclingCode[] = [
  {
    code: '01 / PET (PETE)',
    name: 'Полиэтилентерефталат',
    russianName: 'ПЭТ',
    nameEn: 'Polyethylene Terephthalate',
    recyclable: 'easy',
    recyclableLabel: 'Легко перерабатывается',
    recyclableLabelEn: 'Widely Recycled',
    description: 'Самый распространенный пластик для напитков. Перерабатывается во флексы, полиэфирное волокно, утеплитель (холлофайбер) и новые бутылки.',
    descriptionEn: 'Most common plastic for beverage containers. Recycled into polyester fiber, insulation fleece, and new bottles.',
    commonProducts: ['Бутылки для воды, лимонадов, кваса', 'Прозрачные флаконы от шампуней', 'Контейнеры для ягод'],
    commonProductsEn: ['Water and soda bottles', 'Clear shampoo bottles', 'Berry clamshell containers'],
    preparationTip: 'Сполоснуть от остатков сахара, смять для уменьшения объема. Крышки (2 HDPE) можно сдавать вместе или отдельно в проект «Добрые крышечки».',
    preparationTipEn: 'Rinse out sugars/liquids and crush to save space. Caps (HDPE) can be recycled together or collected separately.'
  },
  {
    code: '02 / HDPE (PE-HD)',
    name: 'Полиэтилен высокой плотности',
    russianName: 'ПНД (низкого давления)',
    nameEn: 'High-Density Polyethylene',
    recyclable: 'easy',
    recyclableLabel: 'Легко перерабатывается',
    recyclableLabelEn: 'Widely Recycled',
    description: 'Безопасный прочный термопласт. Отлично подходит для многократной механической переработки в канистры, трубы, ящики и дорожные столбики.',
    descriptionEn: 'Sturdy, safe thermoplastic. Recycled into heavy-duty pipes, storage crates, detergent jugs, and plastic lumber.',
    commonProducts: ['Канистры от автохимии', 'Флаконы от моющих средств, гелей для душа', 'Крышки от бутылок', 'Трубы'],
    commonProductsEn: ['Detergent and shampoo bottles', 'Milk jugs', 'Bottle caps and chemical containers', 'Conduits'],
    preparationTip: 'Полностью смыть бытовую химию, снять дозаторы (в них металлическая пружинка).',
    preparationTipEn: 'Rinse clean of chemical residues. Remove pump sprayers (they contain metal springs).'
  },
  {
    code: '03 / PVC (V)',
    name: 'Поливинилхлорид',
    russianName: 'ПВХ',
    nameEn: 'Polyvinyl Chloride',
    recyclable: 'hard',
    recyclableLabel: 'Сложно переработать / Токсичен при горении',
    recyclableLabelEn: 'Difficult / Toxic When Burned',
    description: 'Содержит хлор и пластификаторы (фталаты). Выделяет диоксины при сжигании. Принимают только специализированные промоператоры.',
    descriptionEn: 'Contains chlorine and phthalates. Releases hazardous dioxins upon incineration. Accepted almost exclusively by specialized construction handlers.',
    commonProducts: ['Оконные профили', 'Натяжные потолки', 'Искусственная кожа', 'Упаковка для детских игрушек', 'Термоусадочная пленка'],
    commonProductsEn: ['Window profiles', 'Pipes & fittings', 'Synthetic leather', 'Toy packaging blisters', 'Shrink wraps'],
    preparationTip: 'Избегайте покупки продуктов в упаковке ПВХ (тройка в треугольнике). Сдавать только в специализированные пункты стройотходов.',
    preparationTipEn: 'Avoid PVC food packaging. Divert construction remnants strictly to specialized recycling points.'
  },
  {
    code: '04 / LDPE (PE-LD)',
    name: 'Полиэтилен низкой плотности',
    russianName: 'ПВД (высокого давления)',
    nameEn: 'Low-Density Polyethylene',
    recyclable: 'easy',
    recyclableLabel: 'Хорошо перерабатывается',
    recyclableLabelEn: 'Widely Recycled (Film drop-offs)',
    description: 'Эластичная пленка и мягкие пакеты. Перерабатывается в гранулы для мусорных пакетов и полимерпесчаной плитки.',
    descriptionEn: 'Flexible films and squeezy plastic bags. Melt-pelletized into trash liners, agricultural sheeting, and composite pavers.',
    commonProducts: ['Пакеты с ручками', 'Пупырчатая пленка', 'Упаковка туалетной бумаги', 'Пленка для упаковки паллет'],
    commonProductsEn: ['Carrier shopping bags', 'Bubble wrap', 'Paper towel wrappers', 'Stretch wrap packaging'],
    preparationTip: 'Очистить от наклеек и скотча, собрать в плотный ком.',
    preparationTipEn: 'Remove paper adhesive labels and tape, compress together into a tight bag-of-bags.'
  },
  {
    code: '05 / PP',
    name: 'Полипропилен',
    russianName: 'ПП',
    nameEn: 'Polypropylene',
    recyclable: 'easy',
    recyclableLabel: 'Широко принимается',
    recyclableLabelEn: 'Widely Recycled',
    description: 'Термостойкий прочный пластик, выдерживает микроволновку и кипяток. Перерабатывается в автодетали, ящики, вешалки.',
    descriptionEn: 'Heat-resistant, food-grade polymer. Recycled into car bumpers, storage totes, hangers, and gardening planters.',
    commonProducts: ['Стаканчики из-под сметаны и йогурта', 'Контейнеры для доставки еды', 'Одноразовые шприцы', 'Ведра'],
    commonProductsEn: ['Yogurt and dairy tubs', 'Takeaway food containers', 'Medicine bottles', 'Buckets'],
    preparationTip: 'Тщательно вымыть от жира. Снять фольгированную запайку (это алюминий, сдавать отдельно).',
    preparationTipEn: 'Wash off food grease completely. Peel off aluminum seal lids (recycle seals separately).'
  },
  {
    code: '06 / PS',
    name: 'Полистирол',
    russianName: 'ПС',
    nameEn: 'Polystyrene / EPS',
    recyclable: 'moderate',
    recyclableLabel: 'Ограниченный прием',
    recyclableLabelEn: 'Limited Acceptance',
    description: 'Бывает обычным и вспененным (пенопласт). При нагреве выделяет стирол. Перерабатывается в утеплители (пеноплекс) и багеты.',
    descriptionEn: 'Rigid or expanded foam (Styrofoam). Leaches styrene at high heat. Recycled into building insulation boards and picture frame moldings.',
    commonProducts: ['Подложки для мяса и овощей (вспененный)', 'Коробки для тортов', 'Вспененные лотки для яиц'],
    commonProductsEn: ['Expanded meat & fruit trays', 'Disposable cutlery', 'Foam egg cartons', 'Cake packaging boxes'],
    preparationTip: 'Принимают крупные экоцентры («Сборка», «Собиратор»). Вспененный лоток должен быть абсолютно чистым без следов крови.',
    preparationTipEn: 'Must be completely clean and oil-free. Accepted primarily at specialized eco-hubs.'
  },
  {
    code: '07 / OTHER',
    name: 'Смеси и другие пластики',
    russianName: 'Прочие полимеры (C/LDPE, SAN, ABS, биопластик)',
    nameEn: 'Other Plastics & Multi-layers',
    recyclable: 'non-recyclable',
    recyclableLabel: 'Практически не перерабатывается',
    recyclableLabelEn: 'Hard / Non-Recyclable',
    description: 'Многослойные композиты (паучи от кормов, дой-паки от майонеза, биоразлагаемые PLA стаканчики).',
    descriptionEn: 'Complex multi-material laminates (snack pouches, chip bags, toothpaste tubes, bio-plastics like PLA).',
    commonProducts: ['Дой-паки от соусов', 'Упаковка от чипсов (фольга+пластик)', 'Тюбики от зубной пасты'],
    commonProductsEn: ['Condiment squeeze pouches', 'Metallic chip bags', 'Toothpaste tubes', 'Multi-layer blister packs'],
    preparationTip: 'По возможности заменять на мономатериалы. Тюбики можно разрезать и сдавать в редкие спецпункты.',
    preparationTipEn: 'Opt for mono-materials wherever possible. Cut tubes open and clean if taking to specialty drop-offs.'
  },
  {
    code: '20-22 / PAP',
    name: 'Макулатура (Картон, Бумага, Гофрокартон)',
    russianName: 'Бумага',
    nameEn: 'Paper & Corrugated Cardboard',
    recyclable: 'easy',
    recyclableLabel: 'Отлично перерабатывается до 7 раз',
    recyclableLabelEn: 'Easily Recycled (up to 7 cycles)',
    description: 'Перерабатывается в туалетную бумагу, картонные коробки, лотки для яиц и крафт-бумагу.',
    descriptionEn: 'Pulp fibers can be re-manufactured up to 7 times into shipping boxes, egg cartons, and tissue paper.',
    commonProducts: ['Книги, журналы, газеты', 'Картонные коробки', 'Офисная бумага А4'],
    commonProductsEn: ['Shipping boxes', 'Office documents and envelopes', 'Newspapers, books, magazines'],
    preparationTip: 'Чеки (термобумага), салфетки, одноразовые стаканчики (с пластиковым ламинированием) в макулатуру НЕ идут!',
    preparationTipEn: 'Receipts (thermal BPA paper), dirty napkins, and plastic-lined coffee cups are NOT paper recyclable.'
  },
  {
    code: '40-41 / FE & ALU',
    name: 'Металлы (Жесть и Алюминий)',
    russianName: 'Металлолом',
    nameEn: 'Metals (Tinplate & Aluminum)',
    recyclable: 'easy',
    recyclableLabel: 'Бесконечный цикл переработки',
    recyclableLabelEn: 'Infinitely Recyclable (Zero Loss)',
    description: 'Переплавляется без потери качества неограниченное число раз, экономя до 95% энергии по сравнению с первичной добычей руды.',
    descriptionEn: 'Can be melted indefinitely without quality loss, saving 95% energy versus smelting virgin bauxite ore.',
    commonProducts: ['Алюминиевые банки от напитков', 'Консервные банки', 'Крышки от стеклянных банок', 'Алюминиевая фольга'],
    commonProductsEn: ['Aluminum drink cans', 'Food tins and soup cans', 'Jar metal lids', 'Clean baking foil'],
    preparationTip: 'Ополоснуть от остатков еды, смять для экономии места.',
    preparationTipEn: 'Rinse food residues and crush cans to save storage space.'
  },
  {
    code: '70-72 / GL',
    name: 'Стеклотара (Белое, Зеленое, Коричневое)',
    russianName: 'Стекло',
    nameEn: 'Glass (Clear, Green, Amber)',
    recyclable: 'easy',
    recyclableLabel: '100% переработка навсегда',
    recyclableLabelEn: '100% Infinitely Recyclable',
    description: 'Стеклобой переплавляется в новые бутылки или пеностекольный утеплитель бесконечное количество раз.',
    descriptionEn: 'Cullet is melted into new containers or cellular glass insulation infinite times with zero degradation.',
    commonProducts: ['Бутылки от напитков', 'Банки от варенья и консервации', 'Флаконы от духов'],
    commonProductsEn: ['Beverage bottles', 'Preserve & pickle jars', 'Cosmetic perfume bottles'],
    preparationTip: 'Снять металлические крышки. Оконное стекло, зеркала, хрусталь и керамику в общий контейнер для стеклотары класть нельзя.',
    preparationTipEn: 'Remove metal lids. Window glass, mirrors, crystal, and ceramics must not go into container glass bins.'
  }
];
