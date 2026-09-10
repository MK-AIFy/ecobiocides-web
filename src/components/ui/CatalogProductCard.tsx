import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import { getCategory, productHref, type CatalogProduct } from "@/lib/products";

export default function CatalogProductCard({ product, id }: { product: CatalogProduct; id?: string }) {
  return (
    <article id={id} className="group flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {product.image ? (
        <div className="relative aspect-[4/3] bg-emerald-50/50">
          <Image src={mediaUrl(product.image)} alt={product.imageAlt ?? product.name} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
      ) : (
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-emerald-950 px-6 text-center text-lime-200" aria-hidden="true"><Leaf className="h-9 w-9" /><span className="font-display text-3xl font-bold">{product.name}</span></div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {product.categoryId === "biostimulant" && <p className="mb-2 text-sm font-semibold text-emerald-700">{getCategory(product.categoryId)?.name}</p>}
        <h3 className="font-display text-2xl font-bold leading-tight text-emerald-950"><Link href={productHref(product)} className="hover:underline">{product.name}</Link></h3>
        <p className="mb-6 mt-3 text-base leading-7 text-slate-600">{product.summary}</p>
        <Link href={productHref(product)} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-emerald-800" aria-label={`About ${product.name}`}>About product <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
