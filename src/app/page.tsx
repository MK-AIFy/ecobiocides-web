import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ProductsPreview from "@/components/sections/ProductsPreview";
import EnvironmentalStory from "@/components/sections/EnvironmentalStory";
import TechnologyScience from "@/components/sections/TechnologyScience";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import Sustainability from "@/components/sections/Sustainability";
import AboutPreview from "@/components/sections/AboutPreview";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ProductsPreview />
      <EnvironmentalStory />
      <TechnologyScience />
      <IndustriesPreview />
      <Sustainability />
      <AboutPreview />
      <CertificationsPreview />
      <Testimonials />
      <Contact />
    </main>
  );
}
