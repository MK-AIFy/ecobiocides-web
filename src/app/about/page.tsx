"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, FlaskConical, Leaf, Microscope, Users } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
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
        subtitle="Since 1991, Ecobiocides has combined botanical knowledge, formulation science and disciplined manufacturing at its Theni facility to advance safer crop protection."
        backgroundImage="/media/factory/factory-exterior.webp"
        imagePosition="center 52%"
        highlights={[`${COMPANY.experience}+ years of experience`, "Integrated factory", "In-house quality control"]}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-emerald-700">Our operating philosophy</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Nature sets the direction. Science delivers the precision.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Our work starts with neem and other proven botanical inputs, then applies controlled extraction, careful formulation and quality assurance to create dependable agricultural solutions.</p>
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
            <p className="eyebrow text-emerald-700">What keeps us moving</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Built as one connected quality system.</h2>
          </div>
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
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">A real factory, shown as it operates.</h2>
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
            <p className="eyebrow text-lime-300">Founder-led vision</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Mr. M. Karunakaran</h2>
            <p className="mt-2 font-bold text-lime-200">Managing Director · {COMPANY.experience}+ years in the neem industry</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Beginning with Karna Oil Mill in 1991, his vision grew a local neem-oil operation into an integrated botanical manufacturing business serving agricultural and formulation markets.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              [`${COMPANY.experience}+`, "Years of experience"],
              [COMPANY.investment, "Facility investment"],
              ["6", "Azagro strengths"],
              ["4", "Core certifications"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-extrabold text-lime-300">{value}</p>
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
          <div className="relative mt-14 space-y-4 before:absolute before:bottom-4 before:left-[23px] before:top-4 before:w-px before:bg-emerald-200 sm:before:left-[71px]">
            {TIMELINE.map((item, index) => (
              <motion.article key={item.year} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: index * 0.04 }} className="relative grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[144px_1fr] sm:gap-7">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-emerald-800 text-[11px] font-extrabold text-white shadow-md sm:ml-12">{item.year}</div>
                <div className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="text-lg font-extrabold text-emerald-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[#f4f0e6] p-7 text-center sm:p-10 lg:flex-row lg:text-left">
            <div><p className="eyebrow text-emerald-700">Build with us</p><h2 className="mt-3 font-display text-3xl font-extrabold text-emerald-950">Let’s advance plant-powered agriculture.</h2></div>
            <Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-800 px-7 py-4 text-sm font-extrabold text-white transition-colors hover:bg-emerald-900">Partner with us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
