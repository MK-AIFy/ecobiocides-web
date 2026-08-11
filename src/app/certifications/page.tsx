"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, FileCheck, Microscope, Shield, ShieldCheck } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import { CERTIFICATIONS } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";

const certIcons = [Shield, Award, FileCheck, CheckCircle2];

const attestations = [
  "Approved input for organic agriculture according to the NPOP standard, attested by Ecocert India Pvt. Ltd. (NPOP/NAB/002).",
  "Inspected by Ecocert SA F-32600 as an input suitable for organic farming and compliant under NOP.",
  "Inspected by Ecocert SA F-32600 for use in organic farming according to EC 834/2007 and 889/2008 regulations.",
];

export default function CertificationsPage() {
  return (
    <main>
      <PageBanner
        badge="Certifications and compliance"
        title="Quality made visible, documented and repeatable."
        subtitle="Our certifications and operating controls support consistent botanical inputs for organic agriculture, commercial partnerships and global markets."
        backgroundImage="/media/story/neem-shield.webp"
        imagePosition="center"
        highlights={["Quality management", "Organic-input attestations", "Batch discipline"]}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-emerald-700">Core credentials</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Standards that support buyer confidence.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Certification is one part of a broader quality system spanning raw materials, formulation, finished-product checks and controlled documentation.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CERTIFICATIONS.map((cert, index) => {
              const Icon = certIcons[index % certIcons.length];
              return (
                <motion.article key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-900 text-lime-300"><Icon className="h-6 w-6" /></div>
                  <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">{cert.category}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-emerald-950">{cert.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{cert.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e6] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-xl shadow-emerald-950/10">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.45rem] bg-[#f8eeee]">
              <Image src={mediaUrl("/media/story/ecocert-approved.webp")} alt="Ecocert Inputs approval artwork supplied by Ecobiocides" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 44vw" />
            </div>
          </motion.div>
          <div>
            <p className="eyebrow text-emerald-700">Official attestations</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">Organic-input compliance across key frameworks.</h2>
            <div className="mt-7 space-y-3">
              {attestations.map((text) => (
                <div key={text} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-lime-300">Beyond the certificate</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Quality is an operating habit.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Microscope, "Test", "Assess raw materials and finished products against defined quality parameters."],
              [ShieldCheck, "Control", "Coordinate formulation, hygiene, packing and traceability with documented checks."],
              [FileCheck, "Document", "Support commercial and export conversations with product and compliance information."],
            ].map(([Icon, title, description]) => {
              const QualityIcon = Icon as React.ElementType;
              return (
                <article key={title as string} className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm">
                  <QualityIcon className="h-7 w-7 text-lime-300" />
                  <h3 className="mt-5 text-xl font-extrabold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{description as string}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 transition-colors hover:bg-lime-200">Request certification information <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
