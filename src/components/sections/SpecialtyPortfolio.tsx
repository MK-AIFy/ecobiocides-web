import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mediaUrl, SPECIALTY_PRODUCTS } from "@/lib/media";

export default function SpecialtyPortfolio() {
  return (
    <section className="bg-[#f4f0e6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow text-emerald-800">Beyond crop protection</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">A broader botanical portfolio.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Soil enrichers, grain protectors, technical ingredients and botanical oils—developed around the same commitment to plant-based performance.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTY_PRODUCTS.map((product, index) => (
            <article
              key={product.name}
              className={`group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${index === 0 || index === 1 ? "lg:col-span-1" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white to-emerald-50">
                <Image
                  src={mediaUrl(product.image)}
                  alt={product.name}
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">{product.category}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-emerald-950">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-sm transition-all hover:border-emerald-700 hover:shadow-md">
            Explore the complete portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
