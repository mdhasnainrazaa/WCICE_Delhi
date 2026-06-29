# WCIEC Delhi SEO, GEO, and Technical Growth Report

Generated: June 10, 2026

Website: https://wciecdelhi.com/
Business: Study MBBS Abroad Consultancy
Primary markets: India, with MBBS abroad demand for Kyrgyzstan, Kazakhstan, Russia, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, and China.

## Executive Summary

WCIEC already had a strong Kyrgyzstan and university footprint, but the live crawl and sitemap showed a narrow indexable architecture. Google was also surfacing legacy PHP URLs such as `/contact.php`, `/kyrgyzstan-universities.php`, `/medical-scholarship.php`, and `/kazakhstan-universities.php`, which creates duplicate/canonical dilution risk.

This implementation expands WCIEC from a Kyrgyzstan-heavy site into a broader MBBS abroad topical hub. The repo now includes generated country pages, high-intent decision guides, stronger schema, expanded sitemap coverage, AI-readable `llms.txt`, legacy redirects, and a real `/search/` endpoint for WebSite SearchAction schema.

## Current Implemented Architecture

Home
- MBBS Abroad
- MBBS in Kyrgyzstan
- MBBS in Russia
- MBBS in Kazakhstan
- MBBS in Uzbekistan
- MBBS in Georgia
- MBBS in Bangladesh
- MBBS in Nepal
- MBBS in Egypt
- MBBS in China
- MBBS Admission 2026
- MBBS Fees Abroad
- MBBS Without Donation
- MBBS Admission Through NEET
- NMC Guidelines for MBBS Abroad
- FMGE/NExT Guide
- MBBS Abroad Visa Process
- MBBS Abroad Hostel Facilities
- MBBS Abroad Student Life
- MBBS Abroad Scholarships
- MBBS Abroad Eligibility
- Universities
- Osh State University
- Osh International Medical University
- Central Asian International Medical University
- Jalal-Abad State University
- Jalal-Abad International University
- Kyrgyzstan Medical Universities
- MBBS Abroad Consultants in Delhi
- Admission
- Blog
- Search
- About
- Contact
- Legal

## Crawl Findings

Observed live crawl before this implementation:

| Finding | Evidence | Impact | Fix |
| --- | --- | --- | --- |
| Live sitemap was thin | Live sitemap listed only home, about, contact, universities, admission, legal, and 5 university URLs | Google discovery was limited for existing and planned MBBS abroad pages | Expanded `src/app/sitemap.ts` to include core, blog, university, country, and guide pages |
| Old PHP URLs indexed | Search results surfaced old `.php` URLs | Duplicate/canonical dilution and poor UX | Added Apache `.htaccess` and Vercel redirects |
| Main nav missed money pages | Nav emphasized About, University, Admission, Legal, Contact | Important pages were deeper or orphan-prone | Added MBBS Abroad dropdown with country and intent pages |
| Footer lacked topical hub | Footer had limited crawl paths | Weak internal linking | Added MBBS Countries and guide links |
| Schema was thin | Organization and WebSite schema were minimal | Weak entity clarity for Google and AI search | Added Organization/EducationalOrganization/LocalBusiness/Service graph and SearchAction |
| Missing country pages | Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, and China were not covered as first-class pages | Lost rankings for target country keywords | Added generated SSG pages from `src/data/seoPages.ts` |

## Missing, Weak, Duplicate, Thin, and Orphan Pages

Completed in this pass:
- Missing country pages: Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, China.
- Missing intent pages: admission 2026, fees abroad, no donation, NEET admission, NMC guidelines, FMGE/NExT, visa, hostels, student life, scholarships, eligibility.
- Orphan risk reduced through nav, footer, sitemap, and related links.
- Duplicate legacy PHP risk reduced through 301 redirect rules.

Remaining risks:
- Some older route/page content still contains lint and copy-quality issues.
- Country pages are now indexable, but should be enriched with first-party fee tables, admission deadlines, real student images, and counselor-reviewed facts.
- The existing live deployment may not reflect repo changes until redeployed.
- Backlink and domain authority analysis requires Search Console plus Ahrefs, Semrush, Moz, or a similar backlink index.

## Technical SEO Audit

### Crawlability

Current implementation:
- `public/robots.txt` allows crawling and disallows `/api/`.
- Sitemap points to `https://wciecdelhi.com/sitemap.xml`.
- `src/app/sitemap.ts` now generates all major SEO routes.
- Static export output confirms generated folders for the new pages.

Recommendations:
- Submit the updated sitemap in Google Search Console after deploy.
- Inspect legacy PHP URLs in Search Console and request re-crawl after redirects deploy.
- Monitor crawl stats for 404s and redirect chains.

### Indexability

Current implementation:
- Canonicals are set through page metadata for generated pages.
- Dynamic SEO pages use trailing slash canonical URLs.
- WebSite, Organization, FAQ, Breadcrumb, Article, and Service schema are present where relevant.

Recommendations:
- Add Search Console property for both `https://wciecdelhi.com/` and domain-level ownership if not already done.
- Track indexed vs submitted URLs weekly for the first 60 days after deploy.
- Add `noindex` only for truly duplicate or admin/API surfaces. Do not block render assets.

### Rendering

Current project strategy:
- Next.js App Router.
- Static export via `output: "export"`.
- Generated SEO pages use SSG with `generateStaticParams`.
- Existing API routes are dynamic and will not work from a purely static host unless deployed on a platform/server that supports them.

Recommended strategy:
- Use SSG for country, guide, university, blog, legal, contact, and about pages.
- Use ISR only if moving away from static export to a server-capable deployment.
- Keep forms/API routes on a server-capable target or move form handling to a third-party endpoint if hosting as static files.

## Core Web Vitals Audit

Likely risks from code/assets:
- Large videos under `public/images/*`.
- Multiple image assets and gallery sections can affect LCP and INP.
- Framer Motion and heavy gallery components may add JS cost.
- Existing homepage dynamic import for gallery is positive.

Implemented/confirmed:
- Build passes.
- New generated SEO pages are mostly server-rendered/static and lightweight.
- Search page is client-side but small.

Next fixes:
- Run PageSpeed Insights after deploy on home, `/mbbs-in-kyrgyzstan/`, `/mbbs-abroad/`, `/mbbs-in-russia/`, and a university page.
- Add poster images and explicit dimensions for videos.
- Lazy load below-fold videos.
- Prefer `next/image` for all non-SVG raster images where export constraints allow.
- Preload the true LCP image on the homepage.

## On-Page SEO Pattern

Each generated SEO page now includes:
- Optimized title.
- Optimized meta description.
- Canonical URL.
- Single H1.
- Multiple H2 content sections.
- FAQ section.
- FAQPage, BreadcrumbList, Article, and Service JSON-LD.
- Primary/secondary keyword coverage.
- Related internal links.

Priority pages to enrich manually next:
- `/mbbs-in-kyrgyzstan/`
- `/mbbs-abroad/`
- `/mbbs-in-russia/`
- `/mbbs-in-kazakhstan/`
- `/mbbs-fees-abroad/`
- `/mbbs-admission-2026/`
- `/mbbs-admission-through-neet/`

## Keyword Research

Primary keywords:
- MBBS Abroad
- Study MBBS Abroad
- MBBS Admission 2026
- MBBS in Kyrgyzstan
- MBBS in Russia
- MBBS in Kazakhstan
- Best MBBS Consultant
- MBBS Without Donation
- MBBS Fees Abroad
- MBBS Admission Through NEET

Secondary keywords:
- MBBS abroad for Indian students
- Low cost MBBS abroad
- Direct MBBS admission abroad
- NMC guidelines for MBBS abroad
- NEET required for MBBS abroad
- FMGE/NExT for MBBS abroad
- MBBS abroad visa process
- Indian hostel and food abroad
- MBBS abroad scholarships

Question keywords:
- Is NEET required for MBBS abroad?
- Which country is best for MBBS abroad?
- Is MBBS in Kyrgyzstan valid in India?
- What is the cost of MBBS abroad?
- Can I study MBBS abroad without donation?
- What are NMC rules for foreign medical graduates?
- How to choose an MBBS abroad consultant?

## Content Cluster Strategy

Pillar: MBBS Abroad
- Country pages: Kyrgyzstan, Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, China.
- Money guides: Fees, no donation, admission 2026, NEET admission, eligibility.
- Trust guides: NMC guidelines, FMGE/NExT, visa process, hostel, student life, scholarships.
- University pages: Osh State, OIMU, CAIMU, JASU, JAIU.
- Blog support: country comparisons, fee updates, NEET year guides, parent safety guides, FMGE preparation.

Internal linking rules:
- Every country page links to MBBS Abroad, Kyrgyzstan, Universities, Admission, Contact.
- Footer links to every country page.
- Nav links to top country and money pages.
- Sitemap includes every generated URL.

## University SEO Strategy

For each university page, add or maintain:
- URL: `/universities/{slug}/`
- Title: `{University} MBBS Fees, Admission 2026 | WCIEC`
- Meta: fee, admission, hostel, Indian food, recognition, city.
- Schema: CollegeOrUniversity, EducationalOrganization, BreadcrumbList, FAQPage.
- FAQs: recognition, fees, hostel, food, admission documents, NEET, clinical training.
- Internal links: MBBS in Kyrgyzstan, Kyrgyzstan Medical Universities, Fees Abroad, NMC Guidelines, Admission, Contact.
- Content outline: Overview, quick facts, fees, eligibility, documents, admission steps, hostel/food, clinical exposure, FMGE/NExT support, FAQs.

## AI SEO, GEO, and AEO

Implemented:
- Expanded `public/llms.txt`.
- Added AI crawler allowances in `robots.txt`.
- Added entity-rich Organization schema.
- Added answer-friendly FAQ sections on generated pages.
- Added concise pages for common AI-answer questions.

Next steps:
- Add author/reviewer boxes to medical-education compliance pages.
- Add dates and update notes to fee/regulatory pages.
- Add source citations to NMC and official university pages.
- Create comparison tables that AI systems can quote safely.
- Add "short answer" blocks near top of key pages.

## Schema Implementation

Implemented globally:
- Organization
- EducationalOrganization
- LocalBusiness
- Service
- WebSite
- SearchAction

Implemented on generated pages:
- BreadcrumbList
- FAQPage
- Service
- Article

Already present/partly present elsewhere:
- University schema
- Article schema on blog posts

Recommended next:
- Add Review schema only if there are real, review-policy-compliant first-party reviews.
- Add VideoObject schema for actual hosted videos with titles, descriptions, thumbnails, upload dates, and duration.
- Add Course schema only where the page describes a specific course/program and the details are accurate.

## Competitor Snapshot

Search-visible competitors and adjacent players include:

| Competitor | Observed strength | WCIEC gap/opportunity |
| --- | --- | --- |
| Eklavya Overseas | Broad country footprint and many country pages | WCIEC must match breadth while being more transparent on fees and NMC checks |
| PSP Education / mbbsfromabroad.com | Clear MBBS abroad positioning across Russia, Kazakhstan, Uzbekistan | WCIEC now has pages, but should add richer country comparison tables |
| Pacific Educational Consultants | Broad India presence and country/university pages | WCIEC can compete locally through Delhi office trust and first-party student proof |
| Global Medical Foundation | Delhi consultant positioning and country breadth | WCIEC needs stronger E-E-A-T, reviews, and consultant profiles |
| MBBSDirect | Clear direct admission messaging and multi-country focus | WCIEC should emphasize official documents, transparent payments, and post-arrival support |

Backlinks/authority:
- Not measured in this local implementation because no backlink index API is available.
- Use Ahrefs, Semrush, Moz, or Search Console links report to quantify referring domains, DR/DA, anchor text, and toxic links.

## Scores After This Implementation

| Area | Score | Notes |
| --- | ---: | --- |
| Technical SEO | 82/100 | Sitemap, robots, redirects, SSG pages, schema improved; legacy lint and hosting/API caveats remain |
| On-Page SEO | 80/100 | Generated metadata, H1s, FAQs, internal links; needs deeper unique fee tables and citations |
| Content SEO | 74/100 | Strong cluster added; needs first-party details, images, real university data, expert review |
| AI SEO/GEO | 82/100 | `llms.txt`, schema, FAQ, concise guide pages implemented |
| Authority | 45/100 | Backlink and brand authority work still required |
| Trust | 70/100 | Address, phone, schema, no-donation guidance improved; reviews and proof assets needed |
| E-E-A-T | 68/100 | Needs named counselors, reviewer bios, update logs, source citations |
| Ranking probability | Medium | Improved architecture supports growth, but Page 1 depends on content depth, links, reviews, and deployment |
| Traffic growth potential | High | New country and guide pages unlock many long-tail queries |

## Issue Roadmap

| Priority | Problem | Root cause | Impact | Solution | Success metric |
| --- | --- | --- | --- | --- | --- |
| Critical | Old PHP URLs indexed | Legacy URLs not redirected | Duplicate signals and poor UX | Deploy `.htaccess` or `vercel.json` redirects | Old URLs show 301 in URL Inspection |
| Critical | Missing country pages | Narrow Kyrgyzstan-only structure | Lost rankings for Russia/Kazakhstan/etc. | Generated SSG country pages | Country URLs indexed within 30 days |
| High | Sitemap incomplete | Static list omitted pages | Weak discovery | Expanded dynamic sitemap | Submitted vs indexed ratio improves |
| High | Main nav missed money pages | Internal linking not aligned to search intent | Lower crawl priority | Added MBBS Abroad dropdown | Key pages crawl depth <= 2 |
| High | Thin trust evidence | Few visible citations/reviewer details | Lower E-E-A-T | Add counselor bios, update dates, official citations | Better engagement and assisted leads |
| Medium | Core Web Vitals unknown post-deploy | No lab/field run in this pass | Ranking and conversion risk | Run PageSpeed and optimize LCP/INP | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| Medium | Lint backlog | Existing code quality issues | Maintenance risk | Separate cleanup pass | `npm run lint` passes |
| Low | Search page basic | Client-side index only | Limited UX | Add blog/university richer search index | More internal searches to leads |

## Ranking Roadmap

### 7 Days
- Deploy changes.
- Submit sitemap in Google Search Console.
- Validate redirects for old PHP URLs.
- Inspect `/mbbs-in-russia/`, `/mbbs-in-kazakhstan/`, `/mbbs-fees-abroad/`, `/mbbs-admission-2026/`.
- Run Rich Results Test on generated pages.
- Run PageSpeed Insights on home and top SEO pages.

### 30 Days
- Add full fee tables for Kyrgyzstan, Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, China.
- Add official source citations and update dates.
- Add counselor/reviewer profiles.
- Publish comparison blogs: Kyrgyzstan vs Kazakhstan, Russia vs Kyrgyzstan, Bangladesh vs Kyrgyzstan.
- Add real student photos/videos with VideoObject schema where eligible.

### 90 Days
- Build backlinks from education portals, local Delhi listings, student communities, university partners, and PR.
- Publish 20 support blogs around NEET, FMGE/NExT, fees, visa, hostels, parent safety, documents, and country comparisons.
- Add review/testimonial collection with compliant review markup only if eligible.
- Track conversions by landing page.

### 6 Months
- Build country hubs with university-specific pages for Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, and China.
- Add downloadable checklists and fee calculators.
- Create YouTube/video content and embed transcripts.
- Earn topical authority through citations and consistent updates.

### 12 Months
- Target Page 1 for long-tail country and admission keywords first.
- Use Search Console data to refresh pages every month.
- Build an MBBS abroad knowledge center with expert-reviewed content.
- Grow authority with legitimate partnerships, press, and student success stories.

## Sources Used

- WCIEC live site: https://wciecdelhi.com/
- WCIEC live sitemap: https://wciecdelhi.com/sitemap.xml
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google structured data intro: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Next.js sitemap docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js robots docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Next.js generateMetadata docs: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- NMC official document endpoint surfaced in search: https://www.nmc.org.in/MCIRest/open/getDocument?path=%2FDocuments%2FPublic%2FPortal%2FLatestNews%2FAdvisory+2.pdf
- Competitor examples surfaced in search: https://www.eklavyaoverseas.com/, https://mbbsfromabroad.com/, https://www.pacificeducation.in/, https://gmfadmission.in/, https://mbbsdirect.com/
