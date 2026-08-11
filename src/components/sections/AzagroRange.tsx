"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { AZAGRO_RANGE, COMMON_TARGET_PESTS, mediaUrl } from "@/lib/media";

export default function AzagroRange() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = AZAGRO_RANGE[selectedIndex];

  return (
    <section id="azagro-range" className="relative overflow-hidden bg-[#062819] py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_10%,#79d858_0,transparent_28%),radial-gradient(circle_at_90%_80%,#d8b85b_0,transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow text-lime-300">The Azagro concentration system</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              One botanical platform. Six precise strengths.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Select the concentration that matches your crop-protection program. Every formulation is a neem-oil based emulsifiable concentrate designed for anti-feedant, repellent and insect growth regulating action.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {AZAGRO_RANGE.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <button
                key={item.ppm}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-[1.4rem] border px-3 pb-4 pt-3 text-left transition-all duration-300 ${
                  active
                    ? "border-lime-300 bg-white text-emerald-950 shadow-2xl shadow-black/30"
                    : "border-white/10 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10"
                }`}
                aria-pressed={active}
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-28">
                  <Image
                    src={mediaUrl(item.bottle)}
                    alt={`Azagro ${item.ppm} 1000 ml bottle`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 150px"
                  />
                </div>
                <p className="mt-2 text-sm font-extrabold tracking-tight">{item.ppm}</p>
                <p className={`mt-0.5 text-[11px] ${active ? "text-emerald-700" : "text-white/55"}`}>{item.active}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-900 shadow-2xl shadow-black/25">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[290px] overflow-hidden bg-emerald-950 sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                key={selected.family}
                src={mediaUrl(selected.family)}
                alt={`Azagro ${selected.ppm} complete pack range`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent" />
              <span className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${selected.tone} px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-950 shadow-lg sm:left-7 sm:top-7`}>
                {selected.active}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Azagro {selected.ppm}</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Botanical power, calibrated.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{selected.summary}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <Droplets className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">TDS foliar rate</p>
                  <p className="mt-1 font-bold text-emerald-950">{selected.foliar}</p>
                  <p className="mt-1 text-xs text-slate-500">in 200–250 L water</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <ShieldCheck className="h-5 w-5 text-amber-700" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">Availability</p>
                  <p className="mt-1 font-bold text-emerald-950">100 ml to 200 L</p>
                  <p className="mt-1 text-xs text-slate-500">HDPE packs and drums</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {COMMON_TARGET_PESTS.map((pest) => (
                  <span key={pest} className="rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
                    {pest}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mediaUrl(selected.sheet)}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-900"
                >
                  <Download className="h-4 w-4" />
                  Download technical sheet
                </a>
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-800">
                  <Leaf className="h-4 w-4" />
                  Ask our technical team
                </Link>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-slate-400">Application rates are transcribed from the supplied technical data sheets. Follow the product label and local agronomic guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
