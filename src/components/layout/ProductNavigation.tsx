"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import ProductMenu from "@/components/ui/ProductMenu";

export default function ProductNavigation({ mobile = false, active = false }: { mobile?: boolean; active?: boolean }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent | FocusEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    // Focus entering another control is reliable across browsers; blur with a null
    // relatedTarget can otherwise hide a link before its click is delivered.
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    const breakpoint = window.matchMedia("(min-width: 1024px)");
    const closeAtBreakpoint = () => setOpen(false);
    breakpoint.addEventListener("change", closeAtBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
      breakpoint.removeEventListener("change", closeAtBreakpoint);
    };
  }, [open]);

  return (
    <div ref={container} className={mobile ? "relative" : "static"} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
        event.stopPropagation();
      }
    }}>
      <div className={`flex items-center rounded-xl transition-colors ${open || active ? "bg-stone-100 text-slate-950" : "text-slate-600 hover:bg-stone-50 hover:text-slate-950"}`}>
        <Link href="/products/" aria-current={active ? "page" : undefined} className={`min-h-11 flex items-center font-medium ${mobile ? "flex-1 px-4 py-3 text-base" : "pl-3 pr-1 text-sm"}`}>Products</Link>
        <button ref={toggle} type="button" aria-label={open ? "Close product menu" : "Open product menu"} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hover:bg-stone-200/70">
          <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div id={panelId} hidden={!open} className={mobile ? "mt-2 overflow-hidden rounded-2xl border border-stone-200 bg-white" : "absolute inset-x-4 top-full z-10 mx-auto mt-2 max-h-[calc(100dvh-7rem)] max-w-5xl overflow-y-auto rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-slate-950/15"}>
        <div className="flex items-center justify-between gap-3 border-b border-stone-100 bg-stone-50 px-4 py-4 sm:px-6">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Our products</p><p className="mt-1 text-sm text-slate-600">Find your botanical solution.</p></div>
          <button type="button" aria-label="Close product dropdown" onClick={() => { setOpen(false); toggle.current?.focus(); }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-600 hover:bg-stone-100"><X aria-hidden="true" className="h-4 w-4" /></button>
        </div>
        <div className="p-3 sm:p-4"><ProductMenu key={String(open)} columns={mobile ? 1 : 2} /></div>
        <Link href="/products/" className="flex min-h-12 items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-3 text-sm font-bold text-slate-900 hover:bg-stone-100">View all products<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
      </div>
    </div>
  );
}
