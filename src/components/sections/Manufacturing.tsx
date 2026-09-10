import { Check, Users } from "lucide-react";
import { MANUFACTURING } from "@/lib/company-content";

export default function Manufacturing() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div><p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Neem processing and manufacturing</p><h2 className="mt-3 font-display text-4xl font-extrabold text-emerald-950">From raw neem to botanical formulations.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{MANUFACTURING.introduction}</p><p className="mt-5 text-lg leading-8 text-slate-600">{MANUFACTURING.processing}</p></div>
            <div className="rounded-3xl bg-emerald-50 p-6 sm:p-8"><h3 className="text-2xl font-bold text-emerald-950">Our core strengths</h3><ul className="mt-6 space-y-4">{MANUFACTURING.strengths.map((strength) => <li key={strength} className="flex items-start gap-3 text-base leading-7 text-emerald-950"><Check className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />{strength}</li>)}</ul></div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2"><p className="text-lg leading-8 text-slate-600">{MANUFACTURING.innovation}</p><p className="text-lg leading-8 text-slate-600">{MANUFACTURING.purpose}</p></div>
          <div className="mt-10 rounded-3xl border border-emerald-100 p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Our commitment</p><blockquote className="mt-4 max-w-4xl text-2xl font-semibold leading-relaxed text-emerald-950">{MANUFACTURING.commitment}</blockquote></div>
        </div>
      </section>
      <section id="people" className="scroll-mt-24 bg-emerald-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Users className="h-9 w-9 text-lime-300" />
          <h2 className="mt-5 font-display text-4xl font-extrabold">Our people &amp; workforce</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2"><p className="text-lg leading-8 text-white/80">{MANUFACTURING.people}</p><p className="text-lg leading-8 text-white/80">{MANUFACTURING.workforce}</p></div>
          <ol aria-label="Manufacturing stages" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{MANUFACTURING.stages.map((stage, index) => <li key={stage} className="flex items-center gap-4 rounded-2xl border border-white/20 p-4 text-base font-semibold"><span className="text-lime-300">{String(index + 1).padStart(2, "0")}</span>{stage}</li>)}</ol>
          <blockquote className="mt-10 max-w-4xl border-l-2 border-lime-300 pl-6 text-xl leading-8 text-lime-100">{MANUFACTURING.peopleQuote}</blockquote>
        </div>
      </section>
    </>
  );
}
