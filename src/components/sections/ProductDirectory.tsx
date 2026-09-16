import { ChevronDown } from "lucide-react";
import ProductMenu from "@/components/ui/ProductMenu";

export default function ProductDirectory() {
  return (
    <section id="product-categories" className="scroll-mt-28 border-b border-emerald-100 bg-[#f4f0e6] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow text-emerald-700">Find your product</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">Explore our product categories.</h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-600">Open the menu, choose a product or concentration, and explore its images and details.</p>
        </div>
        <details className="group self-start rounded-2xl border border-emerald-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-bold text-emerald-950 [&::-webkit-details-marker]:hidden">Browse products &amp; subcategories<ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" /></summary>
          <div className="max-h-[32rem] overflow-y-auto border-t border-emerald-100 p-3"><ProductMenu /></div>
        </details>
      </div>
    </section>
  );
}
