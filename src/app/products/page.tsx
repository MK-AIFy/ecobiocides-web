import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Droplets, PackageCheck, ShieldCheck } from "lucide-react";
import SpecialtyPortfolio from "@/components/sections/SpecialtyPortfolio";
import { COMPANY } from "@/lib/constants";
import { AZAGRO_RANGE, COMMON_TARGET_PESTS, mediaUrl } from "@/lib/media";

export const metadata: Metadata = {
  title: "Botanical Crop Protection Products | Ecobiocides",
  description:
    "Explore Azagro neem-based botanical pesticides from 300 to 50,000 PPM, plus soil-health, grain-storage and botanical input solutions.",
};

export default function ProductsPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I would like to discuss the Ecobiocides product range.")}`;

  return (
    <main>
      <section className="relative isolate min-h-[620px] overflow-hidden bg-emerald-950 pt-24 text-white sm:pt-28">
        <Image src={mediaUrl("/media/products/azagro-10000-family-storm.webp")} alt="Azagro product range in an agricultural landscape" fill priority loading="eager" fetchPriority="high" className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-emerald-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-lime-300">The product portfolio</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Plant-powered protection, from field to formulation.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Explore the complete Azagro concentration system and specialist botanical inputs for crop protection, soil health and grain storage.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 transition-colors hover:bg-lime-200">
              Discuss your requirement
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-emerald-700">Azagro emulsifiable concentrates</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Choose the right concentration.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Six supplied technical sheets are available below. Product labels and agronomic guidance remain the authority for final application decisions.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {AZAGRO_RANGE.map((product) => (
              <article key={product.ppm} className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#fbfdf8] to-[#edf5e8]">
                  <Image src={mediaUrl(product.bottle)} alt={`Azagro ${product.ppm} bottle`} fill className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                  <span className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${product.tone} px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-950 shadow-sm`}>{product.active}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-extrabold text-emerald-950">Azagro {product.ppm}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-emerald-50 p-3.5">
                      <Droplets className="h-4 w-4 text-emerald-700" />
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Foliar rate</p>
                      <p className="mt-1 text-sm font-bold text-emerald-950">{product.foliar}</p>
                    </div>
                    <div className="rounded-2xl bg-amber-50 p-3.5">
                      <PackageCheck className="h-4 w-4 text-amber-700" />
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Pack range</p>
                      <p className="mt-1 text-sm font-bold text-emerald-950">100 ml–200 L</p>
                    </div>
                  </div>
                  <a href={mediaUrl(product.sheet)} download className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-800 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-900">
                    <Download className="h-4 w-4" />
                    Download technical sheet
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[1.8rem] border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-800"><ShieldCheck className="h-5 w-5" /><p className="text-sm font-extrabold">Common target pest spectrum</p></div>
                <div className="mt-4 flex flex-wrap gap-2">{COMMON_TARGET_PESTS.map((pest) => <span key={pest} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">{pest}</span>)}</div>
              </div>
              <p className="max-w-lg text-sm leading-6 text-emerald-950/65">The supplied sheets describe brownish EC liquids with characteristic neem odor, water emulsification and a two-year shelf life under recommended storage conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <SpecialtyPortfolio />

      <section className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Need formulation or bulk-supply guidance?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Share your crop, pest pressure, geography and pack requirement with our technical team.</p>
          <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 hover:bg-lime-200">Contact Ecobiocides <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
