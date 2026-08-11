"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#031c13] text-white">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-lime-300/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-7 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-lime-300">Botanical crop protection, made precise</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Bring your crop, formulation or supply requirement to our team.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 transition-colors hover:bg-lime-200">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1 shadow-xl shadow-black/20">
                <Image src={`${basePath}/ecobiosides-logo.png`} alt="Ecobiocides & Botanicals Pvt Ltd" fill className="object-cover object-left" sizes="56px" />
              </div>
              <div><p className="text-lg font-extrabold leading-tight">Ecobiocides <span className="text-lime-300">&amp;</span> Botanicals</p><p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Private Limited</p></div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/52">{COMPANY.description}</p>
            <p className="mt-4 text-xs font-bold text-lime-200">Established {COMPANY.founded} · Theni, Tamil Nadu</p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/85">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/52 transition-colors hover:text-lime-300">{link.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/85">Portfolio</h3>
            <ul className="mt-5 space-y-3">
              {["Azagro EC range", "NeemGrow 3X", "Seaweed Gold Max", "Azavigr grain care", "Botanical oils"].map((product) => <li key={product}><Link href="/products" className="text-sm text-white/52 transition-colors hover:text-lime-300">{product}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/85">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/52">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" /><span>{COMPANY.address.street}, {COMPANY.address.city} – {COMPANY.address.zip}, {COMPANY.address.state}, {COMPANY.address.country}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" /><div>{COMPANY.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-lime-300">{phone}</a>)}</div></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" /><a href={`mailto:${COMPANY.emails[0]}`} className="transition-colors hover:text-lime-300">{COMPANY.emails[0]}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/38">© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/65 transition-colors hover:border-lime-300/40 hover:text-lime-300" aria-label="Back to top">Back to top <ArrowUp className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    </footer>
  );
}
