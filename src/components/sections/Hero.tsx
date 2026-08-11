"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I would like to discuss Ecobiocides botanical crop-protection solutions.")}`;

  return (
    <section id="home" className="relative isolate min-h-[780px] overflow-hidden bg-emerald-950 text-white lg:min-h-screen">
      <Image
        src={mediaUrl("/media/story/regenerative-farm.webp")}
        alt="Regenerative farm landscape"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,32,20,.96)_0%,rgba(2,32,20,.88)_42%,rgba(2,32,20,.38)_72%,rgba(2,32,20,.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,32,20,.92)_0%,transparent_38%,rgba(2,32,20,.28)_100%)]" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-lime-300/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:pt-36 lg:min-h-screen lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-20 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-200/25 bg-lime-100/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Botanical intelligence since {COMPANY.founded}
          </div>

          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            Botanical crop protection,
            <span className="mt-2 block text-lime-300">made precise.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
            Neem-based crop protection, soil enrichment and botanical inputs engineered for modern agriculture—from 300 to 50,000 PPM.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#azagro-range" className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 shadow-xl shadow-black/20 transition-all hover:bg-lime-200">
              Explore the range
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/15">
              <MessageCircle className="h-4 w-4 text-[#59e391]" />
              Talk to our team
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3 border-t border-white/15 pt-7 sm:grid-cols-3">
            {["Neem-based formulations", "Integrated pest management", "Bulk & export supply"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs font-semibold leading-5 text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[570px] lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-white/95 p-3 shadow-2xl shadow-black/35 sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#f9fff1] to-[#e8f4dc]">
              <Image
                src={mediaUrl("/media/products/azagro-3000-bottle.webp")}
                alt="Azagro 3000 PPM neem-based botanical pesticide bottle"
                fill
                className="object-contain p-3 sm:p-5"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-12 rounded-2xl border border-white/20 bg-emerald-950/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10 sm:px-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">Full spectrum</p>
            <p className="mt-1 text-lg font-extrabold">300–50,000 PPM</p>
          </div>
          <div className="absolute -bottom-4 right-2 rounded-2xl border border-white/50 bg-white px-5 py-4 text-emerald-950 shadow-2xl sm:-right-8 sm:bottom-8">
            <p className="text-2xl font-extrabold">{COMPANY.experience}+ years</p>
            <p className="text-xs font-semibold text-emerald-700">of neem expertise</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
