import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CURRENT_PRODUCTS, productHref } from "@/lib/products";
import { AWARDS } from "@/lib/company-content";
import { siteUrl } from "@/lib/site";
import { COMPANY } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e9648",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${COMPANY.name} — Botanical Crop Protection, Made Precise`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "eco-safe pest management",
    "sustainable crop protection",
    "neem based bio pesticide",
    "azadirachtin manufacturer India",
    "organic pesticide",
    "environmental protection",
    "botanical pesticide",
    "integrated pest management",
    "ecocert certified neem products",
    "bio pesticide manufacturer Tamil Nadu",
    "organic agriculture inputs",
    "neem kernel extract",
    "ecobiocides",
    "green technology agriculture",
    "biodegradable pesticide",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.website }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl(),
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Botanical Crop Protection, Made Precise`,
    description: COMPANY.description,
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: `${COMPANY.name} — Azagro botanical crop-protection range`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Botanical Crop Protection, Made Precise`,
    description: COMPANY.description,
    images: ["/og.png"],
  },
  alternates: {
    canonical: siteUrl(),
  },
  category: "Environmental Technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: siteUrl(),
  logo: siteUrl("/ecobiosides-logo.png"),
  award: AWARDS.map((award) => `${award.title} (${award.distinction}), ${award.period}`),
  description: COMPANY.description,
  foundingDate: "1991",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: "IN",
  },
  contactPoint: COMPANY.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone,
    contactType: "sales",
    areaServed: ["IN", "US", "EU"],
    availableLanguage: ["English", "Tamil"],
  })),
  sameAs: Object.values(COMPANY.social),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Neem-Based Bio Pesticide Products",
    itemListElement: CURRENT_PRODUCTS.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: product.summary,
        url: siteUrl(productHref(product)),
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
