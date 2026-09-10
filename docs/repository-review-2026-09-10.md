# Ecobiocides website repository review

## Scope and source material

Reviewed the repository at `2cfcdcf57362afc87f4be22070aee3d929f0aa91`: application
routes, shared content, navigation, product components, media references, contact
flow, metadata, static-export configuration and GitHub Pages workflow. The content
update uses the supplied `about us.docx`, `industries.docx`, handwritten product
hierarchy and two award photographs. Existing Azagro technical sheets were also
read. All 61 pre-existing binary assets were checked against their GitHub blob
hashes; they remain unchanged.

The existing Next.js App Router, React, Tailwind, Framer Motion and GitHub Pages
static-export architecture is retained. No database, application server, customer
accounts, new paid service or replacement hosting project has been introduced.

## Findings and implemented changes

| Area | Finding | Change |
| --- | --- | --- |
| Products | Neem Activa, Karanja Activa and NitroRich were absent | Added to the current catalogue |
| Hierarchy | Six Azagro strengths appeared together; the handwritten list specifies five | Five primary strengths; existing 10,000 ppm documentation remains separately accessible |
| Product details | Specialty cards had no product-specific detail destination | Added statically generated detail routes, breadcrumbs, back links and product-specific email/WhatsApp enquiries |
| Content consistency | Multiple product arrays and hardcoded footer links could drift | Centralized the catalogue; the active homepage, footer, detail pages and structured data share it |
| About | Founder history, expertise, investment and vision did not reflect the new document | Integrated the Karna Oil Mill origin, 25+ years of prior technical expertise, USD 10 million facility investment and vision |
| Industries | Manufacturing, core strengths and workforce text were missing | Added processing, research, seven core strengths, people, manufacturing stages and commitment |
| Awards | Exact certificates were absent; the timeline contained unsupported milestone dates | Added original 2007–08 and 2008–09 district award photographs and corrected award history; removed unsubstantiated dated milestones |
| Search metadata | Root canonical was inherited by pages; sitemap only covered the homepage; organization logo path was missing | Added route-specific canonical URLs, complete generated sitemap/robots and a valid organization logo/catalogue |
| Contact | Opening an email draft was incorrectly described as successful delivery | Corrected the wording and preserved the entered enquiry when returning from the draft prompt |
| Navigation | Home, Testimonials and Contact could all appear active on the homepage | Prevented hash links from incorrectly sharing the page-level active indicator |
| Responsive content | Homepage About text was constrained inside a fixed-height overlay | Made the section height follow its content; adjusted long investment values |
| Release checks | Deployment built the application without checking exported link integrity | Added lint and export validation before Pages artifact upload, plus a pull-request validation workflow |

## Product mapping

| Category or product family | Product detail entries |
| --- | --- |
| Azagro EC | 300, 1,500, 3,000, 30,000 and 50,000 ppm |
| Cold-Pressed Neem Oil | Cold-Pressed Neem Oil |
| Karanja Oil | Karanja Oil |
| Neem Activa | Neem Activa |
| Karanja Activa | Karanja Activa |
| Azavigr | Azavigr, retaining existing 0.15% and 1% variant information |
| Biostimulant | NitroRich |
| Neem Grow Granules | Neem Grow Granules; existing packaging says NeemGrow 3X |
| Seaweed Gold Max Granules | Seaweed Gold Max Granules |
| Neem Karanja Oil EC | Neem Karanja Oil EC |
| Neem Cake | Neem Cake |
| Azadirachtin Technical Powder | Azadirachtin Technical Powder |

The handwritten hierarchy yields 12 top-level entries and 16 current products.
A seventeenth detail page preserves the pre-existing Azagro 10,000 ppm product.
Its original images and downloadable sheet are not deleted. All six Azagro
technical-sheet downloads remain available.

## Award treatment

Both certificates identify the Department of Industries and Commerce, Government
of Tamil Nadu, and the District Award for Best Entrepreneur (General), awarded
to M/s. Eco Biocides and Botanicals Pvt. Ltd., Theni. Their periods are 2007–08
and 2008–09. These are historical business awards, not product certifications.
Original photographs are displayed without cropping, recoloring or rewriting.

## Product-owner verification still needed

1. Supply approved product photographs and technical sheets for Neem Activa,
   Karanja Activa and NitroRich. Their pages intentionally do not invent
   composition, dosage, performance, certification or packaging claims.
2. Review the existing technical sheets' soil-drench instructions. Several
   concentration/dilution statements appear inconsistent, and the 50,000 ppm
   sheet contains the literal typo `15s ml`. For example, the 1,500 ppm sheet
   simultaneously specifies a 20–30 ppm target and 3.25 ml per litre. This is a
   technical-document review flag, not replacement application advice. The
   original documents remain unchanged; the new detail pages do not reproduce
   those drench or tree-injection recipes.
3. Confirm current product-specific certification scope and validity. Existing
   ISO/Ecocert statements, regulatory references, testimonials, absolute
   environmental/safety claims and performance statistics elsewhere in the site
   are inherited content, not independently substantiated by these attachments.
   Do not treat the new award photographs as supporting that separate content.
4. Confirm the preferred legal spelling. The existing site, new documents and
   award photographs vary between Botanical/Botanicals and Ecobiocides/Eco
   Biocides. The site's established brand/legal constants are preserved, while
   award captions follow the certificates.
5. The existing 1991 foundation date is retained from the repository; the new
   About document itself does not supply a precise founding year.

## Security and operational assessment

The initial production-dependency audit reported five affected packages: one
critical, three high and one moderate. Next.js was pinned to 16.1.6. The official
[16.3.4 release](https://github.com/vercel/next.js/releases/tag/v16.3.4) follows the
security fixes described in the [AVIF image optimization advisory](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4)
and [Windows-hosted server advisory](https://github.com/advisories/GHSA-p293-qw3h-jr36).
The existing Pages deployment serves static files with image optimization
disabled; it does not expose those Next.js server endpoints. This reduces the
relevance of those particular runtime attack paths, but does not replace
dependency maintenance or justify calling the application vulnerability-free.

Updated Next.js and eslint-config-next to 16.3.4, refreshed affected transitive
dependencies and committed the regenerated lockfile. The final
`npm audit --omit=dev` on 10 September 2026 reported zero known production
dependency vulnerabilities. This is an advisory scan, not a penetration test.

The site has no server-side form delivery, durable enquiry tracking or rate-limit
service. Client-side validation and the honeypot are usability/spam hints, not a
server security boundary. Reliable automatic delivery would require a separate
approved service and implementation. No credentials were added to the source.
JSON-LD serialization now escapes the `<` character.

The existing loader, long image/video galleries, motion effects, third-party map,
testimonial provenance and host-level security headers remain areas for a future
performance, accessibility and content-governance review. No Lighthouse score,
penetration-test result or cross-browser certification is claimed.

## Validation and deployment

The checks include lint, TypeScript through the production build, generated
product pages, local image/video/download targets, category anchors, one main
heading per product, canonical URLs, sitemap coverage and award periods.
The final lint, TypeScript/build and export checks all passed after the dependency
update: 25 HTML files and 1,525 local references, including all 17 product routes.
The same checks run again in GitHub Actions before deployment.

No interactive browser/device testing was performed during this source/content
update. Responsive classes and document structure were reviewed, but this is not
a substitute for acceptance testing on the customer's actual devices.

The `main` branch's existing GitHub Pages workflow remains the release mechanism.
It must complete successfully before the release is considered deployed.
