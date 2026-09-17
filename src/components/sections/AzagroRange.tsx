"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { COMMON_TARGET_PESTS, mediaUrl } from "@/lib/media";

import { FEATURED_AZAGRO_RANGE as AZAGRO_RANGE } from "@/lib/products";

// Matched to the supplied bottle labels; dark text preserves contrast on lighter labels.
const LABEL_COLOURS: Record<string, { backgroundColor: string; color: string }> = {
  "300 PPM": { backgroundColor: "#073b12", color: "#ffffff" },
  "1500 PPM": { backgroundColor: "#67a91c", color: "#12200a" },
  "3000 PPM": { backgroundColor: "#00421c", color: "#ffffff" },
  "30000 PPM": { backgroundColor: "#f1ca16", color: "#29220a" },
  "50000 PPM": { backgroundColor: "#075e65", color: "#ffffff" },
};

export default function AzagroRange() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = AZAGRO_RANGE[selectedIndex];

  return (
    <section id="azagro-range" className="relative overflow-hidden bg-[#faf8f5] py-20 text-slate-900 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow text-slate-600">The Azagro concentration system</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              One botanical platform. Five precise strengths.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Select the concentration that matches your crop-protection program. Every formulation is a neem-oil based emulsifiable concentrate designed for anti-feedant, repellent and insect growth regulating action.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {AZAGRO_RANGE.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <button
                key={item.ppm}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-[1.4rem] border px-3 pb-4 pt-3 text-left transition-all duration-300 ${
                  active
                    ? "border-slate-700 bg-white text-slate-950 ring-2 ring-slate-700 ring-offset-4 ring-offset-[#faf8f5] shadow-lg shadow-slate-900/10"
                    : "border-stone-200 bg-white text-slate-900 hover:border-slate-400 hover:shadow-md"
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
                <p style={LABEL_COLOURS[item.ppm]} className="mt-3 rounded-lg px-3 py-2 text-center text-sm font-extrabold tracking-tight">{item.ppm}</p>
                <p className="mt-2 text-center text-[11px] text-slate-600">{item.active}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200 bg-white text-slate-900 shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex items-center justify-center border-b border-stone-200 bg-stone-100 p-3 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="relative aspect-[3/2] w-full">
              <Image
                key={selected.family}
                src={mediaUrl(selected.family)}
                alt={`Azagro ${selected.ppm} complete pack range`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p style={LABEL_COLOURS[selected.ppm]} className="self-start rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-[0.12em]">Azagro {selected.ppm}</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Botanical power, calibrated.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{selected.summary}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4">
                  <Droplets className="h-5 w-5 text-slate-600" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">TDS foliar rate</p>
                  <p className="mt-1 font-bold text-slate-950">{selected.foliar}</p>
                  <p className="mt-1 text-xs text-slate-500">in 200–250 L water</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <ShieldCheck className="h-5 w-5 text-amber-700" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">Availability</p>
                  <p className="mt-1 font-bold text-slate-950">100 ml to 200 L</p>
                  <p className="mt-1 text-xs text-slate-500">HDPE packs and drums</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {COMMON_TARGET_PESTS.map((pest) => (
                  <span key={pest} className="rounded-full border border-stone-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                    {pest}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mediaUrl(selected.sheet)}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-900"
                >
                  <Download className="h-4 w-4" />
                  Download technical sheet
                </a>
                <Link href={`/products/azagro-${selected.ppm.split(" ")[0]}-ppm/`} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-emerald-300 hover:text-slate-800">
                  <Leaf className="h-4 w-4" />
                  About this product
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
