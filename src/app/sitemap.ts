import type { MetadataRoute } from "next";
import { CATALOG_PRODUCTS, productHref } from "@/lib/products";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/products/", "/about/", "/industries/", "/certifications/", ...CATALOG_PRODUCTS.map(productHref)].map((path) => ({ url: siteUrl(path) }));
}
