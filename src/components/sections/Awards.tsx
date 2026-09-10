import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AWARDS } from "@/lib/company-content";
import { mediaUrl } from "@/lib/media";

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-24 bg-[#f4f0e6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Recognition in Theni</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-emerald-950 sm:text-5xl">Best Entrepreneur Awards</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">The Department of Industries and Commerce, Government of Tamil Nadu, presented Ecobiocides with the district award for Best Entrepreneur (General) for 2007–08 and 2008–09.</p>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {AWARDS.map((award) => <figure key={award.period} className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
            <a href={mediaUrl(award.image)} target="_blank" rel="noopener noreferrer" className="block p-3" aria-label={`View original ${award.period} award certificate (opens in a new tab)`}><Image src={mediaUrl(award.image)} alt={`${award.title}, ${award.distinction}, ${award.period}, awarded to ${award.recipient} by ${award.issuer}`} width={award.width} height={award.height} className="h-auto w-full rounded-2xl" sizes="(max-width: 768px) 100vw, 50vw" /></a>
            <figcaption className="p-6 pt-3"><p className="text-2xl font-bold text-emerald-950">{award.period}</p><p className="mt-2 text-base font-semibold text-emerald-800">{award.distinction}</p><p className="mt-3 text-base leading-7 text-slate-600">{award.recipient}</p><p className="mt-2 text-sm leading-6 text-slate-600">{award.issuer}</p><a href={mediaUrl(award.image)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-emerald-800">View original certificate <ExternalLink className="h-4 w-4" /><span className="sr-only"> for {award.period} (opens in a new tab)</span></a></figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  );
}
