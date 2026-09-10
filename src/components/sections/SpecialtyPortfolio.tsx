import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CatalogProductCard from "@/components/ui/CatalogProductCard";
import { CURRENT_PRODUCTS } from "@/lib/products";

export default function SpecialtyPortfolio({ showPortfolioLink = true }: { showPortfolioLink?: boolean }) {
  const products = CURRENT_PRODUCTS.filter((product) => product.categoryId !== "azagro-ec");
  return (
    <section className="bg-[#f4f0e6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold text-emerald-950 sm:text-5xl">Botanical oils, biostimulants and specialist inputs.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Explore the portfolio, from Cold-Pressed Neem Oil and Karanja Oil to NitroRich, granules and technical powder.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <CatalogProductCard key={product.slug} product={product} id={product.categoryId} />)}</div>
        {showPortfolioLink && <div className="mt-10 text-center"><Link href="/products/" className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white px-6 py-3 text-base font-bold text-emerald-900">Explore all products <ArrowRight className="h-4 w-4" /></Link></div>}
      </div>
    </section>
  );
}
