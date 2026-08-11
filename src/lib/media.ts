const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const mediaUrl = (path: string) => `${basePath}${path}`;

export const COMMON_TARGET_PESTS = [
  "Aphids",
  "Whiteflies",
  "Thrips",
  "Mites",
  "Mealybugs",
  "Caterpillars",
] as const;

export const AZAGRO_RANGE = [
  {
    ppm: "300 PPM",
    active: "0.03% Azadirachtin",
    bottle: "/media/products/azagro-300-bottle.webp",
    family: "/media/products/azagro-300-family.webp",
    sheet: "/resources/technical-data-sheets/azagro-300-ppm.docx",
    foliar: "2.5–3 L / acre",
    tone: "from-lime-300 to-emerald-600",
    summary: "A versatile neem-oil EC for routine botanical crop protection programs.",
  },
  {
    ppm: "1500 PPM",
    active: "0.15% Azadirachtin",
    bottle: "/media/products/azagro-1500-bottle.webp",
    family: "/media/products/azagro-1500-family.webp",
    sheet: "/resources/technical-data-sheets/azagro-1500-ppm.docx",
    foliar: "0.75–1.5 L / acre",
    tone: "from-emerald-300 to-teal-700",
    summary: "Concentrated anti-feedant, repellent and insect growth regulating action.",
  },
  {
    ppm: "3000 PPM",
    active: "0.30% Azadirachtin",
    bottle: "/media/products/azagro-3000-bottle.webp",
    family: "/media/products/azagro-3000-family.webp",
    sheet: "/resources/technical-data-sheets/azagro-3000-ppm.docx",
    foliar: "0.75–1.5 L / acre",
    tone: "from-emerald-400 to-green-800",
    summary: "A premium EC formulation designed for sucking and chewing pest pressure.",
  },
  {
    ppm: "10000 PPM",
    active: "1% Azadirachtin",
    bottle: "/media/products/azagro-10000-bottle.webp",
    family: "/media/products/azagro-10000-family-light.webp",
    alternateFamily: "/media/products/azagro-10000-family-storm.webp",
    sheet: "/resources/technical-data-sheets/azagro-10000-ppm.docx",
    foliar: "0.25–0.75 L / acre",
    tone: "from-amber-300 to-emerald-800",
    summary: "High-strength botanical protection for integrated pest management programs.",
  },
  {
    ppm: "30000 PPM",
    active: "3% Azadirachtin",
    bottle: "/media/products/azagro-30000-bottle.webp",
    family: "/media/products/azagro-30000-family.webp",
    sheet: "/resources/technical-data-sheets/azagro-30000-ppm.docx",
    foliar: "0.20–0.70 L / acre",
    tone: "from-yellow-300 to-green-950",
    summary: "A powerful concentrated option for demanding crop-protection applications.",
  },
  {
    ppm: "50000 PPM",
    active: "5% Azadirachtin",
    bottle: "/media/products/azagro-50000-bottle.webp",
    family: "/media/products/azagro-50000-family.webp",
    sheet: "/resources/technical-data-sheets/azagro-50000-ppm.docx",
    foliar: "0.10–0.15 L / acre",
    tone: "from-cyan-300 to-emerald-950",
    summary: "The most concentrated Azagro formulation in the range for precision use.",
  },
] as const;

export const SPECIALTY_PRODUCTS = [
  {
    name: "NeemGrow 3X Granules",
    category: "Soil Enrichment",
    image: "/media/specialty/neemgrow-3x.webp",
    description: "Neem, humic acid and seaweed enriched granules for soil fertility and root development.",
  },
  {
    name: "Seaweed Gold Max",
    category: "Organic Nutrition",
    image: "/media/specialty/seaweed-gold-max.webp",
    description: "A seaweed-based soil enricher with alginic acid, amino acids and humic acid.",
  },
  {
    name: "Azavigr 1%",
    category: "Grain Protection",
    image: "/media/specialty/azavigr-1.webp",
    description: "Neem-based rice and grain storage protection with 1% Azadirachtin.",
  },
  {
    name: "Azavigr 0.15%",
    category: "Grain Protection",
    image: "/media/specialty/azavigr-015.webp",
    description: "A botanical 0.15% Azadirachtin option for rice and grain storage programs.",
  },
  {
    name: "Neem Karanja Oil EC",
    category: "Botanical Pesticide",
    image: "/media/specialty/neem-karanja-ec.webp",
    description: "Neem and karanja botanical actives combined in an oil emulsion concentrate.",
  },
  {
    name: "Azadirachtin Technical Powder",
    category: "Technical Ingredient",
    image: "/media/specialty/azadirachtin-powder.webp",
    description: "A technical botanical input for professional formulation requirements.",
  },
  {
    name: "Neem Cake",
    category: "Organic Soil Input",
    image: "/media/specialty/neem-cake.webp",
    description: "Nutrient-rich organic material that supports soil conditioning and natural pest management.",
  },
  {
    name: "Cold Pressed Neem Oil",
    category: "Botanical Oil",
    image: "/media/specialty/neem-oil.webp",
    description: "Dark, cold-pressed neem oil for agricultural and formulation applications.",
  },
  {
    name: "Karanja Oil",
    category: "Botanical Oil",
    image: "/media/specialty/karanja-oil.webp",
    description: "A plant-derived oil used in botanical crop-protection formulations.",
  },
] as const;

export const STORY_GALLERY = [
  { image: "/media/story/regenerative-farm.webp", title: "Regenerative landscapes", alt: "Mountain farm with rows of healthy crops" },
  { image: "/media/story/indian-farmer.webp", title: "Rooted in Indian agriculture", alt: "Farmer working fields with cattle at sunrise" },
  { image: "/media/story/neem-shield.webp", title: "Botanical protection", alt: "Neem seedling protected by a luminous shield" },
  { image: "/media/story/pest-spectrum.webp", title: "Broad pest spectrum", alt: "Collage of common agricultural pests" },
  { image: "/media/story/ecocert-approved.webp", title: "Ecocert input approval", alt: "Ecocert Inputs approval artwork" },
  { image: "/media/story/open-field.webp", title: "Field-scale thinking", alt: "Open green agricultural field under a dramatic sky" },
  { image: "/media/story/seedling-dew.webp", title: "Healthy beginnings", alt: "Dew-covered seedling emerging from soil" },
  { image: "/media/story/seedling-minimal.webp", title: "Precision growth", alt: "Minimal seedling against a dark background" },
  { image: "/media/story/seedling-growth.webp", title: "Stronger establishment", alt: "Young plant growing in illuminated soil" },
  { image: "/media/story/neem-extract-lab.webp", title: "Neem extracts", alt: "Botanical extracts beside neem leaves and fruit" },
  { image: "/media/story/botanical-oils.webp", title: "Botanical oils", alt: "Plant-derived oils beside neem fruit" },
  { image: "/media/story/pest-macro.webp", title: "Targeted intervention", alt: "Macro view of an agricultural pest" },
  { image: "/media/story/whitefly.webp", title: "Sucking pest control", alt: "Whitefly on a leaf" },
  { image: "/media/story/soil-lab.webp", title: "Soil-led science", alt: "Scientist testing an agricultural soil sample" },
  { image: "/media/story/manufacturing-process.webp", title: "From neem to finished product", alt: "Neem formulation and packing process infographic" },
] as const;

export const FIELD_VIDEOS = [
  { src: "/media/videos/field-story-01.mp4", title: "Field story 01", poster: "/media/products/azagro-300-family.webp" },
  { src: "/media/videos/field-story-02.mp4", title: "Field story 02", poster: "/media/products/azagro-1500-family.webp" },
  { src: "/media/videos/field-story-03.mp4", title: "Field story 03", poster: "/media/products/azagro-3000-family.webp" },
  { src: "/media/videos/field-story-04.mp4", title: "Field story 04", poster: "/media/products/azagro-50000-family.webp" },
] as const;
