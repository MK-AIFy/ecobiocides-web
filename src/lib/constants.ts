import { AWARDS } from "./company-content";
import { CURRENT_PRODUCTS } from "./products";

export const COMPANY = {
  name: "Ecobiocides & Botanicals",
  legalName: "Ecobiocides & Botanicals Pvt Ltd",
  tagline: "Nature's Science, Engineered for Agriculture",
  description:
    "Manufacturer of neem oil, neem cake, Azadirachtin and botanical agricultural products, built on the expertise of Karna Oil Mill in Theni, Tamil Nadu.",
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
  mapUrl: "https://maps.google.com/?q=10.042108,77.492966",
  mapEmbedUrl: "https://maps.google.com/maps?q=10.042108,77.492966&z=16&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/certifications" },
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

// Compatibility model for the older product-section components.
export const PRODUCTS: readonly Product[] = CURRENT_PRODUCTS.map((product) => ({
  id: product.slug,
  title: product.name,
  shortDescription: product.summary,
  description: product.description,
  features: product.specifications.map((spec) => `${spec.label}: ${spec.value}`),
  icon: "leaf",
}));

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
    year: "1991",
    title: "Karna Oil Mill",
    description: "Mr. M. Karunakaran began neem oil and neem cake production at Karna Oil Mill.",
  },
  ...AWARDS.map((award) => ({
    year: award.period,
    title: award.title,
    description: `${award.distinction}, presented to ${award.recipient} by ${award.issuer}.`,
  })),
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
