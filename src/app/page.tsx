import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import AzagroRange from "@/components/sections/AzagroRange";
import SpecialtyPortfolio from "@/components/sections/SpecialtyPortfolio";
import EnvironmentalStory from "@/components/sections/EnvironmentalStory";
import TechnologyScience from "@/components/sections/TechnologyScience";
import AboutPreview from "@/components/sections/AboutPreview";
import FieldMedia from "@/components/sections/FieldMedia";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <AzagroRange />
      <SpecialtyPortfolio />
      <EnvironmentalStory />
      <TechnologyScience />
      <AboutPreview />
      <FieldMedia />
      <CertificationsPreview />
      <Testimonials />
      <Contact />
    </main>
  );
}
