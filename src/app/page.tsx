import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ProductsPreview from "@/components/sections/ProductsPreview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import CertificationsPreview from "@/components/sections/CertificationsPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsPreview />
      <IndustriesPreview />
      <AboutPreview />
      <CertificationsPreview />
      <Testimonials />
      <Contact />
    </main>
  );
}
