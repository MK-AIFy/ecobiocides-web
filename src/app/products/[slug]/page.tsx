import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Leaf, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";
import { CATALOG_PRODUCTS, CURRENT_PRODUCTS, getCategory, getProduct, productHref } from "@/lib/products";
import CatalogProductCard from "@/components/ui/CatalogProductCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATALOG_PRODUCTS.map((product) => ({ slug: product.slug }));
}

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: product.summary, alternates: { canonical: siteUrl(productHref(product)) } };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const category = getCategory(product.categoryId)!;
  const related = CURRENT_PRODUCTS.filter((item) => item.categoryId === product.categoryId && item.slug !== product.slug);
  const enquiry = `Hello! I would like product specifications, technical documentation and supply information for ${product.name}.`;
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(enquiry)}`;
  const emailUrl = `mailto:${COMPANY.emails[0]}?subject=${encodeURIComponent(`${product.name} enquiry`)}&body=${encodeURIComponent(enquiry)}`;
  return (
    <main className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600"><ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link href="/" className="hover:underline">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/products/" className="hover:underline">Products</Link></li><li aria-hidden="true">/</li>
          {category.name !== product.name && <><li><Link href={`/products/#${category.id}`} className="hover:underline">{category.name}</Link></li><li aria-hidden="true">/</li></>}
          <li aria-current="page" className="font-semibold text-emerald-900">{product.name}</li>
        </ol></nav>
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-start">
          {product.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-emerald-50/60"><Image src={mediaUrl(product.image)} alt={product.imageAlt ?? product.name} fill priority className="object-contain p-6" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          ) : (
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-5 rounded-3xl bg-emerald-950 p-8 text-center text-lime-200" aria-hidden="true"><Leaf className="h-12 w-12" /><span className="font-display text-4xl font-bold">{product.name}</span></div>
          )}
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">{category.name}</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-emerald-950 sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
            {product.specifications.length > 0 && <dl className="mt-7 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 px-5">{product.specifications.map((spec) => <div key={spec.label} className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-4"><dt className="text-base text-slate-600">{spec.label}</dt><dd className="text-base font-semibold text-emerald-950">{spec.value}</dd></div>)}</dl>}
            {product.documentationRequired && <p className="mt-6 rounded-2xl bg-emerald-50 p-5 text-base leading-7 text-emerald-950">Request the technical specification and application guidance from our team to discuss this product.</p>}
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-bold text-white hover:bg-emerald-900"><MessageCircle className="h-5 w-5" />Enquire on WhatsApp</a>
              <a href={emailUrl} className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-200 px-6 py-3 font-bold text-emerald-900 hover:bg-emerald-50">Email product enquiry</a>
            </div>
            {product.sheet && <div className="mt-7 border-t border-slate-200 pt-6"><a href={mediaUrl(product.sheet)} download className="inline-flex min-h-11 items-center gap-2 font-bold text-emerald-800 underline underline-offset-4"><Download className="h-5 w-5" />Download technical sheet (DOCX)</a><p className="mt-3 text-sm leading-6 text-slate-600">Follow the product label and applicable agronomic guidance for use, handling and storage.</p></div>}
            <Link href={`/products/#${category.id}`} className="mt-8 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-emerald-800"><ArrowLeft className="h-4 w-4" />Back to products</Link>
          </div>
        </div>
        {product.slug === "azavigr" && <section className="mt-12 rounded-3xl border border-emerald-100 p-6 sm:p-8"><h2 className="text-2xl font-bold text-emerald-950">Azavigr variants</h2><div className="mt-6 grid gap-6 sm:grid-cols-2">{[{name:"Azavigr 0.15%",image:"/media/specialty/azavigr-015.webp"},{name:"Azavigr 1%",image:"/media/specialty/azavigr-1.webp"}].map((variant) => <figure key={variant.name}><div className="relative aspect-[4/3]"><Image src={mediaUrl(variant.image)} alt={`${variant.name} packaging`} fill className="object-contain" sizes="(max-width: 640px) 100vw, 50vw" /></div><figcaption className="mt-3 text-center text-base font-semibold text-emerald-950">{variant.name}</figcaption></figure>)}</div></section>}
        {related.length > 0 && <section className="mt-16"><h2 className="text-3xl font-bold text-emerald-950">More from {category.name}</h2><div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <CatalogProductCard key={item.slug} product={item} />)}</div></section>}
      </div>
    </main>
  );
}
