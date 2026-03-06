export const COMPANY = {
  name: "Ecobiocides & Botanicals",
  legalName: "Ecobiocides & Botanicals Pvt Ltd",
  tagline: "Nature's Science, Engineered for Agriculture",
  description:
    "Leading manufacturer of neem-based bio pesticides and organic agricultural inputs. Pioneering sustainable crop protection since 1991.",
  founded: 1991,
  experience: new Date().getFullYear() - 1991,
  investment: "USD 10 Million",
  address: {
    street: "27, East Market Street, Periyakulam Road",
    city: "Theni",
    state: "Tamil Nadu",
    zip: "625 531",
    country: "India",
  },
  phones: ["+91 9443352020", "+91 9443342020", "+91 4546 252020"],
  whatsapp: "+919443352020",
  emails: [
    "info@ecobiocides.com",
    "bhuvana@ecobiocides.com",
    "nimalan@ecobiocides.com",
  ],
  social: {
    facebook: "https://facebook.com/ecobiocides",
    twitter: "https://twitter.com/ecobiocides",
    youtube: "https://youtube.com/@ecobiocides",
    linkedin: "https://linkedin.com/company/ecobiocides",
  },
  website: "https://ecobiocides.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8!2d77.47!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTheni%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
] as const;

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: readonly string[];
  icon: string;
  variants?: readonly string[];
}

export const PRODUCTS = [
  {
    id: "azadirachtin-technical",
    title: "Azadirachtin Technical",
    shortDescription:
      "High-purity neem kernel extract powder — the gold standard active ingredient for organic crop protection.",
    description:
      "Brown-yellow free-flowing powder extracted from neem kernels. Contains Azadirachtin A (20-28%), Azadirachtin B (2-7%), and other bioactive limonoids. Controls over 400 insect species. Biodegradable with zero toxic residues.",
    features: [
      "Azadirachtin A: 20-28%",
      "Azadirachtin B: 2-7%",
      "Controls 400+ insect species",
      "100% biodegradable",
      "Non-toxic to beneficial organisms",
    ],
    icon: "flask",
  },
  {
    id: "azagro-formulations",
    title: "Azagro EC Formulations",
    shortDescription:
      "Ready-to-use emulsifiable concentrates in 300 to 50,000 ppm — precision-engineered for every crop protection need.",
    description:
      "Complete range of Azadirachtin-based EC formulations from 300 ppm to 50,000 ppm. Formulated with specially treated neem oil for maximum stability and efficacy. Systemic action suitable for foliar spray, tree injection, and soil drench.",
    features: [
      "300ppm to 50,000ppm range",
      "Emulsifiable concentrate format",
      "Systemic + contact action",
      "7-15 day spray intervals",
      "Safe for pollinators",
    ],
    variants: [
      "Azagro 300 ppm",
      "Azagro 1500 ppm",
      "Azagro 3000 ppm",
      "Azagro 10000 ppm",
      "Azagro 30000 ppm",
      "Azagro 50000 ppm",
    ],
    icon: "droplets",
  },
  {
    id: "cold-pressed-neem-oil",
    title: "Cold Pressed Neem Oil",
    shortDescription:
      "Premium cold-crushed neem kernel oil with 2,500–3,000 ppm Azadirachtin — nature's broad-spectrum shield.",
    description:
      "Extracted from selected neem kernels by cold crushing method. Acts as insecticide and pest resistant at broad spectrum. Contains Azadirachtin (0.2-0.3%), Salanin (0.5-0.6%), and Nimbin (0.4-0.5%). Also used in pharmaceuticals and cosmetics.",
    features: [
      "Azadirachtin: 2,500-3,000 ppm",
      "Cold pressed extraction",
      "Broad spectrum protection",
      "Multi-industry applications",
      "Eco-friendly & biodegradable",
    ],
    icon: "leaf",
  },
  {
    id: "neem-cake",
    title: "Neem Cake",
    shortDescription:
      "Nutrient-rich organic manure and soil conditioner — dual-action fertilizer and pest deterrent.",
    description:
      "Organic manure byproduct of neem seed oil production. Rich in nitrogen, phosphorus, potassium, calcium, magnesium, and sulphur compounds. Available in powder, flakes, or pellet form. Acts as both fertilizer and pest repellent.",
    features: [
      "Nitrogen: 1.5-5%",
      "Natural pest repellent",
      "Soil conditioning properties",
      "Powder, flakes & pellets",
      "Boosts crop yield significantly",
    ],
    icon: "sprout",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Agriculture & Horticulture",
    description:
      "Bio pesticide solutions for organic farming across cereals, pulses, fruit orchards, and vegetable cultivation.",
    icon: "wheat",
  },
  {
    title: "Organic Farming",
    description:
      "Ecocert-certified inputs compliant with NPOP, NOP, and EU organic regulations for certified organic produce.",
    icon: "leaf",
  },
  {
    title: "Plantation Crops",
    description:
      "Specialized formulations for tea, coffee, rubber, coconut, and spice plantations.",
    icon: "trees",
  },
  {
    title: "Floriculture",
    description:
      "Gentle yet effective pest management for commercial flower cultivation and nurseries.",
    icon: "flower2",
  },
  {
    title: "Pharmaceuticals & Cosmetics",
    description:
      "High-purity neem extracts for medicinal, veterinary, and personal care product manufacturing.",
    icon: "pill",
  },
  {
    title: "Export & Global Trade",
    description:
      "International-grade neem products meeting stringent quality standards for global agricultural markets.",
    icon: "globe",
  },
] as const;

export const TIMELINE = [
  {
    year: 1991,
    title: "Foundation",
    description:
      "KARNA OIL MILL established by Mr. M. Karunakaran for neem oil and neem cake production.",
  },
  {
    year: 2000,
    title: "Recognition",
    description:
      "Awarded by Tamil Nadu State Government for excellence in neem-based manufacturing.",
  },
  {
    year: 2008,
    title: "Government Award",
    description:
      "Mr. Karunakaran recognized by TN Government for outstanding contribution to bio-agriculture.",
  },
  {
    year: 2009,
    title: "Continued Excellence",
    description:
      "Second consecutive year of government recognition for industrial excellence.",
  },
  {
    year: 2010,
    title: "ISO Certification",
    description:
      "Achieved ISO 9001:2008 certification, establishing world-class quality management systems.",
  },
  {
    year: 2015,
    title: "Ecocert Attestation",
    description:
      "Received Ecocert organic certification — NPOP, NOP, and EU Organic Regulation compliance.",
  },
  {
    year: 2020,
    title: "USD 10M Facility",
    description:
      "State-of-the-art Azadirachtin manufacturing unit commissioned with $10 million capital investment.",
  },
  {
    year: 2025,
    title: "Global Expansion",
    description:
      "Scaling operations for international markets with expanded product portfolio and production capacity.",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "ISO 9001:2008",
    description: "International quality management system certification ensuring consistent product excellence.",
    category: "Quality",
  },
  {
    title: "Ecocert NPOP",
    description:
      "Approved input for organic agriculture per National Programme for Organic Production standard.",
    category: "Organic",
  },
  {
    title: "Ecocert NOP",
    description:
      "Inspected by Ecocert SA, product suitable for organic farming compliant under USDA NOP regulations.",
    category: "Organic",
  },
  {
    title: "EU Organic (EC 834/2007)",
    description:
      "Inputs suitable for organic farming according to EC n° 834/2007 & 889/2008 Regulations.",
    category: "Organic",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Director of Agriculture",
    organization: "State Agriculture Department",
    industry: "Government",
    quote:
      "Ecobiocides has transformed our approach to organic pest management. Their Azagro formulations deliver consistent results across diverse crops while maintaining soil health.",
    rating: 5,
  },
  {
    name: "Anand Subramanian",
    role: "Plantation Manager",
    organization: "Southern Spice Estates",
    industry: "Plantation",
    quote:
      "We switched to Ecobiocides' neem-based products three years ago. Our crop yield improved by 22% while eliminating chemical pesticide dependency entirely.",
    rating: 5,
  },
  {
    name: "Prof. Meera Patel",
    role: "Research Head",
    organization: "Institute of Agricultural Sciences",
    industry: "Research",
    quote:
      "The Azadirachtin Technical grade from Ecobiocides meets the highest purity standards. It's our benchmark reference material for neem bioactivity research.",
    rating: 5,
  },
  {
    name: "Krishnamurthy V.",
    role: "CEO",
    organization: "Organic Farms Collective",
    industry: "Organic Farming",
    quote:
      "With Ecocert certifications and ISO quality, Ecobiocides is the only supplier we trust for our certified organic produce destined for European markets.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "35+", label: "Years Experience" },
  { value: "400+", label: "Insects Controlled" },
  { value: "6+", label: "Product Variants" },
  { value: "4", label: "Global Certifications" },
] as const;

export const TRUST_INDUSTRIES = [
  { label: "Agriculture", icon: "wheat" },
  { label: "Healthcare", icon: "heart-pulse" },
  { label: "Food Processing", icon: "utensils" },
  { label: "Industrial", icon: "factory" },
  { label: "Commercial", icon: "building" },
  { label: "Residential", icon: "home" },
  { label: "Organic Farming", icon: "leaf" },
  { label: "Pharmaceuticals", icon: "pill" },
] as const;

export const SUSTAINABILITY_STATS = [
  { value: 400, suffix: "+", label: "Insect Species Controlled", prefix: "" },
  { value: 0, suffix: "", label: "Toxic Residues", prefix: "Zero" },
  { value: 100, suffix: "%", label: "Biodegradable Products", prefix: "" },
  { value: 35, suffix: "+", label: "Years Pioneering Eco-Safety", prefix: "" },
] as const;

export const TECHNOLOGY_POINTS = [
  {
    title: "Eco-Safe Botanical Chemistry",
    description:
      "All products derived from neem — a renewable botanical source. Our extraction process preserves bioactive compounds while ensuring zero synthetic chemical residues.",
  },
  {
    title: "Integrated Pest Management",
    description:
      "Multi-modal action combining anti-feedant, growth-disrupting, and repellent properties. Effective against 400+ insect species without harming beneficial organisms.",
  },
  {
    title: "Environmental Protection Standards",
    description:
      "Compliant with NPOP, USDA NOP, and EU Organic regulations. Our products break down naturally, leaving no persistent environmental contamination.",
  },
  {
    title: "Precision Formulation Science",
    description:
      "Emulsifiable concentrates engineered from 300 to 50,000 ppm Azadirachtin — precision-tuned for specific crops, pests, and application methods.",
  },
] as const;
