import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e9648",
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: `${COMPANY.name} — Eco-Safe Protection for Modern Environments`,
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
    url: COMPANY.website,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Eco-Safe Protection for Modern Environments`,
    description: COMPANY.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — Eco-Safe Bio Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Eco-Safe Protection for Modern Environments`,
    description: COMPANY.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: COMPANY.website,
  },
  category: "Environmental Technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: COMPANY.website,
  logo: `${COMPANY.website}/logo.png`,
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
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Azadirachtin Technical",
          description:
            "High-purity neem kernel extract powder for organic crop protection",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Azagro EC Formulations",
          description:
            "Ready-to-use emulsifiable concentrates from 300 to 50,000 ppm",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cold Pressed Neem Oil",
          description:
            "Premium cold-crushed neem kernel oil with high Azadirachtin content",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Neem Cake",
          description: "Organic manure and soil conditioner from neem seeds",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
