"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search, X } from "lucide-react";
import { CATALOG_PRODUCTS, PRODUCT_CATEGORIES, productHref } from "@/lib/products";
import { mediaUrl } from "@/lib/media";

export default function ProductMenu({ columns = 1 }: { columns?: 1 | 2 }) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const normalized = query.trim().toLowerCase().replace(/,/g, "");
  const groups = PRODUCT_CATEGORIES.map((group) => ({
    ...group,
    products: CATALOG_PRODUCTS.filter((product) => product.categoryId === group.id && `${group.name} ${product.name}`.toLowerCase().replace(/,/g, "").includes(normalized)),
  })).filter((group) => group.products.length > 0);
  const count = groups.reduce((total, group) => total + group.products.length, 0);

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">Search products</label>
      <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-3 focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200">
        <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-500" />
        <input id={inputId} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by product or PPM…" className="min-h-11 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none!" />
        {query && <button type="button" aria-label="Clear product search" onClick={() => setQuery("")} className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-stone-200"><X aria-hidden="true" className="h-4 w-4" /></button>}
      </div>
      <p role="status" className="my-3 px-1 text-xs text-slate-500">{count} {count === 1 ? "product" : "products"}{normalized ? " found" : " · Choose a product to view details"}</p>
      <div className="max-h-[min(42dvh,24rem)] overflow-y-auto overscroll-contain pr-1">
        {count === 0 ? <p className="rounded-xl bg-stone-50 px-5 py-8 text-center text-sm leading-6 text-slate-600">No products found. Try “neem”, “Azagro” or a PPM strength.</p> : (
          <ul className={`grid items-start gap-2 text-sm text-slate-950 ${columns === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
            {groups.map((group) => (
              <li key={group.id} className={columns === 2 && group.id === "azagro-ec" ? "lg:col-span-2" : ""}>
                {group.products.length > 1 || group.id === "azagro-ec" || group.id === "biostimulant" ? (
                  <details key={`${group.id}-${normalized}`} open className="group/category rounded-2xl border border-stone-200 bg-stone-50">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 font-bold hover:bg-stone-100 [&::-webkit-details-marker]:hidden">{group.name}<ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-open/category:rotate-180" /></summary>
                    <ul className={`grid gap-2 px-3 pb-3 ${columns === 2 && group.id === "azagro-ec" ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
                      {group.products.map((product) => <li key={product.slug}><Link href={productHref(product)} className="group/item flex min-h-14 items-center gap-3 rounded-xl border border-stone-100 bg-white px-3 py-2 transition-colors hover:border-slate-300 hover:bg-stone-50">
                        {product.image && <Image src={mediaUrl(product.image)} alt="" width={32} height={40} className="h-10 w-8 shrink-0 object-contain" />}
                        <span className="flex-1 font-semibold">{product.name}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 group-hover/item:text-slate-900" />
                      </Link></li>)}
                    </ul>
                  </details>
                ) : (
                  <Link href={productHref(group.products[0])} className="group/item flex min-h-20 items-center gap-3 rounded-2xl border border-stone-100 px-3 py-3 transition-colors hover:border-slate-300 hover:bg-stone-50">
                    {group.products[0].image && <Image src={mediaUrl(group.products[0].image)} alt="" width={44} height={48} className="h-12 w-11 shrink-0 rounded-lg bg-stone-50 object-contain" />}
                    <span className="flex-1 font-semibold leading-5">{group.name}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 group-hover/item:text-slate-900" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
