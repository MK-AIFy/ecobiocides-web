import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATALOG_PRODUCTS, PRODUCT_CATEGORIES, productHref } from "@/lib/products";

export default function ProductMenu() {
  return (
    <ul className="space-y-1 text-sm text-slate-950">
      {PRODUCT_CATEGORIES.map((group) => {
        const products = CATALOG_PRODUCTS.filter((product) => product.categoryId === group.id);
        return (
        <li key={group.name}>
          {products.length > 1 || group.id === "biostimulant" ? (
            <details className="rounded-xl bg-stone-50/70">
              <summary className="cursor-pointer rounded-xl px-4 py-3 font-bold hover:bg-stone-100">{group.name}</summary>
              <ul className="space-y-1 px-3 pb-3">
                {products.map((product) => (
                  <li key={product.slug}><Link href={productHref(product)} className="flex min-h-11 items-center justify-between gap-3 rounded-lg bg-white px-4 py-2 hover:bg-stone-100">{product.name}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link></li>
                ))}
              </ul>
            </details>
          ) : (
            <Link href={productHref(products[0])} className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-4 py-3 font-semibold hover:bg-stone-50">{group.name}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
          )}
        </li>
      );})}
    </ul>
  );
}
