"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, FlaskConical, Leaf, Microscope, Users } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import { COMPANY_STORY, AWARDS } from "@/lib/company-content";
import { FEATURED_AZAGRO_RANGE } from "@/lib/products";
import { COMPANY, TIMELINE } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";

const capabilities = [
  { icon: FlaskConical, title: "Botanical formulation", description: "Neem-derived actives developed into practical crop-protection and soil-health formats." },
  { icon: Microscope, title: "Quality-led science", description: "Batch-focused testing across extraction, formulation, stability and finished-product quality." },
  { icon: Factory, title: "Integrated manufacturing", description: "Extraction, formulation, quality control and packing coordinated through one operating system." },
  { icon: Users, title: "Agricultural expertise", description: "A cross-functional team supporting farmers, distributors, formulators and export partners." },
];

const factoryGallery = [
  {
    src: "/media/factory/factory-aerial-campus.webp",
    alt: "Aerial view of the Ecobiocides manufacturing campus in Theni",
    title: "Integrated manufacturing campus",
    description: "An original aerial view of our production footprint and surrounding industrial campus.",
    className: "lg:col-span-7",
    imageClassName: "object-cover",
  },
  {
    src: "/media/factory/factory-aerial-yard.webp",
    alt: "Aerial view of Ecobiocides production buildings and material handling yard",
    title: "Connected production areas",
    description: "Production, storage and material-handling areas coordinated within one facility.",
    className: "lg:col-span-5",
    imageClassName: "object-cover",
  },
  {
    src: "/media/factory/processing-tanks.webp",
    alt: "Stainless steel processing tanks inside the Ecobiocides factory",
    title: "Batch processing vessels",
    description: "Dedicated stainless-steel vessels support controlled botanical processing.",
    className: "lg:col-span-4",
    imageClassName: "object-cover",
  },
  {
    src: "/media/factory/process-storage-hall.webp",
    alt: "Process vessels and storage tanks inside the Ecobiocides facility",
    title: "Process and storage hall",
    description: "Organised utility lines, vessels and storage support repeatable production workflows.",
    className: "lg:col-span-4",
    imageClassName: "object-cover",
  },
  {
    src: "/media/factory/quality-control-lab.webp",
    alt: "Analytical equipment in the Ecobiocides quality-control laboratory",
    title: "Quality-control laboratory",
    description: "Analytical equipment supports product identity, consistency and finished-batch review.",
    className: "lg:col-span-4",
    imageClassName: "object-contain",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        badge="About Ecobiocides"
        title="Original manufacturing. Botanical expertise."
        subtitle="From Karna Oil Mill to Azadirachtin-based botanical solutions, our journey is rooted in neem expertise and sustainable agriculture."
        backgroundImage="/media/factory/factory-exterior.webp"
        imagePosition="center 52%"
        highlights={[`${COMPANY.experience}+ years of experience`, "Integrated factory", "In-house quality control"]}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-emerald-700">Our origins</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">From Karna Oil Mill to Ecobiocides.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{COMPANY_STORY.origin}</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">{COMPANY_STORY.foundation}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Botanical crop protection", "Soil and plant nutrition", "Grain-storage protection", "Technical and bulk supply"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-900">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-[#f7f5ec] p-3 shadow-xl shadow-emerald-950/10">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.45rem] bg-white">
              <Image src={mediaUrl("/media/factory/botanical-processing-line.webp")} alt="Botanical extraction and processing line inside the Ecobiocides factory" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f0e6] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-emerald-700">Our expertise &amp; legacy</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Traditional neem knowledge. Modern manufacturing.</h2>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2"><p className="text-lg leading-8 text-slate-600">{COMPANY_STORY.expertise}</p><p className="text-lg leading-8 text-slate-600">{COMPANY_STORY.facility}</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.6rem] border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-900 text-lime-300"><item.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-extrabold text-emerald-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-emerald-700">Inside our facility</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Inside our manufacturing facility.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              These original photographs present our manufacturing campus, processing equipment and quality-control laboratory—giving partners a direct view of the infrastructure behind our botanical portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {factoryGallery.map((photo, index) => (
              <motion.article
                key={photo.src}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className={`group overflow-hidden rounded-[1.65rem] border border-emerald-100 bg-[#f7f5ec] shadow-sm ${photo.className}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={mediaUrl(photo.src)}
                    alt={photo.alt}
                    fill
                    className={`${photo.imageClassName} transition-transform duration-700 group-hover:scale-[1.025]`}
                    sizes={index < 2 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 33vw"}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold text-emerald-950">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{photo.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-lime-300">Our vision</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Mr. M. Karunakaran</h2>
            <p className="mt-2 font-bold text-lime-200">Managing Director · {COMPANY.experience}+ years in the neem industry</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{COMPANY_STORY.vision}</p>
            <p className="mt-5 text-lg leading-8 text-white/80">{COMPANY_STORY.future}</p>
            <p className="mt-5 text-base font-semibold text-lime-200">{COMPANY_STORY.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              [`${COMPANY.experience}+`, "Years of experience"],
              [COMPANY.investment, "Facility investment"],
              [String(FEATURED_AZAGRO_RANGE.length), "Azagro EC strengths"],
              [String(AWARDS.length), "District awards"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="font-display break-words text-2xl font-extrabold text-lime-300 sm:text-3xl">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-emerald-700">Our journey</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Three decades of botanical progress.</h2>
          </div>
          <ol className="mt-10 space-y-4">
            {TIMELINE.map((item) => <li key={item.year} className="grid gap-4 rounded-2xl border border-emerald-100 p-6 sm:grid-cols-[120px_1fr]"><p className="text-lg font-bold text-emerald-700">{item.year}</p><div><h3 className="text-xl font-bold text-emerald-950">{item.title}</h3><p className="mt-2 text-base leading-7 text-slate-600">{item.description}</p></div></li>)}
          </ol>
          <Link href="/certifications/#awards" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-emerald-800">View our award certificates <ArrowRight className="h-4 w-4" /></Link>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[#f4f0e6] p-7 text-center sm:p-10 lg:flex-row lg:text-left">
            <div><p className="eyebrow text-emerald-700">Build with us</p><h2 className="mt-3 font-display text-3xl font-extrabold text-emerald-950">Let’s advance plant-powered agriculture.</h2></div>
            <Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-800 px-7 py-4 text-sm font-extrabold text-white transition-colors hover:bg-emerald-900">Partner with us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
