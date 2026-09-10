import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, relative, join, sep } from "node:path";

const root = resolve("out");
assert(existsSync(root), "Run npm run build before checking the export.");
const site = new URL((process.env.NEXT_PUBLIC_SITE_URL || "https://mk-aify.github.io/ecobiocides-web").replace(/\/+$/, "") + "/");
const basePath = "/ecobiocides-web";
const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}
walk(root);
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
const documents = new Map(htmlFiles.map((path) => {
  const html = readFileSync(path, "utf8");
  return [path, { html, ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])) }];
}));
const errors = [];
let references = 0;
for (const [file, { html }] of documents) {
  const route = relative(root, file).split(sep).join("/").replace(/index\.html$/, "");
  const currentUrl = new URL(route, site);
  for (const [, tag, attrs] of html.matchAll(/<(a|link|img|script|source|video)\b([^>]+)>/gi)) {
    for (const [, attribute, rawValue] of attrs.matchAll(/\b(href|src|poster)="([^"]+)"/g)) {
      const value = decode(rawValue);
      if (/^(data:|mailto:|tel:|blob:)/.test(value)) continue;
      const url = new URL(value, currentUrl);
      if (url.origin !== site.origin) continue;
      // Canonical URLs and exported assets must stay within the configured Pages project.
      const pathname = decodeURIComponent(url.pathname);
      if (!pathname.startsWith(basePath + "/") && pathname !== basePath) {
        errors.push(`${route}: ${tag} ${attribute} escapes the project base path: ${pathname}`);
        continue;
      }
      const localPath = pathname.slice(basePath.length).replace(/^\//, "");
      let target = resolve(root, localPath);
      if (target !== root && !target.startsWith(root + sep)) { errors.push(`${route}: invalid path ${value}`); continue; }
      if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
      if (!existsSync(target)) { errors.push(`${route}: missing ${value}`); continue; }
      references++;
      if (tag === "a" && url.hash && documents.has(target) && !documents.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))) {
        errors.push(`${route}: missing anchor ${value}`);
      }
    }
  }
}

// Acceptance criteria transcribed from the owner's handwritten product hierarchy.
const requiredSlugs = [
  "azagro-300-ppm", "azagro-1500-ppm", "azagro-3000-ppm", "azagro-30000-ppm", "azagro-50000-ppm",
  "cold-pressed-neem-oil", "karanja-oil", "neem-activa", "karanja-activa", "azavigr", "nitro-rich",
  "neem-grow-granules", "seaweed-gold-max-granules", "neem-karanja-oil-ec", "neem-cake", "azadirachtin-technical-powder",
  "azagro-10000-ppm", // Existing product documentation is preserved.
];
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
const catalog = readFileSync(join(root, "products/index.html"), "utf8");
const canonicalUrls = new Set();
for (const slug of requiredSlugs) {
  const path = join(root, "products", slug, "index.html");
  assert(existsSync(path), `Missing product route: ${slug}`);
  const html = readFileSync(path, "utf8");
  assert(catalog.includes(`/products/${slug}/`), `Product is not reachable from catalogue: ${slug}`);
  const expectedCanonical = new URL(`products/${slug}/`, site).href;
  assert(html.includes(`rel="canonical" href="${expectedCanonical}"`), `Wrong canonical: ${slug}`);
  assert(sitemap.includes(`<loc>${expectedCanonical}</loc>`), `Missing sitemap entry: ${slug}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Product requires one main heading: ${slug}`);
  canonicalUrls.add(expectedCanonical);
}
assert.equal(canonicalUrls.size, 17);
const nitro = readFileSync(join(root, "products/nitro-rich/index.html"), "utf8");
assert(nitro.includes("Biostimulant") && nitro.includes("NitroRich"), "Biostimulant → NitroRich hierarchy missing");
const certifications = readFileSync(join(root, "certifications/index.html"), "utf8");
for (const period of ["2007–08", "2008–09"]) assert(certifications.includes(period), `Missing award period: ${period}`);
assert(certifications.includes("District Award"), "Award must be identified as a district award");
const home = readFileSync(join(root, "index.html"), "utf8");
assert(!home.includes("Six precise strengths"), "Homepage concentration count is stale");
assert.equal(new Set(errors).size, 0, [...new Set(errors)].join("\n"));
console.log(`Verified ${htmlFiles.length} exported HTML files, ${references} local references, 17 product routes, the product hierarchy, awards, canonical URLs and sitemap.`);
