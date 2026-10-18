# Design Proposal — ColdSolutions: "Engineered Heritage"

**Status:** awaiting approval · 2026-10-19
**Selections:** Style: Engineered Heritage (recommended) · Layout: recommended for audience · Motion: Normal · Smooth scroll: Lenis

## 1. Business & goals
Turn a loud, crowded brochure site into a calm, credible booking machine for two audiences in Houston and Corpus Christi. Success means more **quote requests** (installs/replacements) and **booked service** (repair/maintenance) per visit, with membership as the follow-through.

## 2. Audience & journey
Homeowners (urgent, mobile, judging on reviews and warranty) and small commercial operators (refrigeration downtime, response time). Journey detail and evidence: `MARKET_RESEARCH.md`.

## 3. Market position
Local competitors all share blue palettes, badge walls, coupons and "since 19XX". ColdSolutions differentiates on **lineage** (refrigeration in the family since a 1926-born ice-cream shop owner), **commercial refrigeration plus homes**, and **long warranties**: 10-yr residential, 5-yr commercial and lifetime on repairs, all for members.

## 4. Offering positioning
- **Homes:** repair (Book service), replacement (Request a quote / instant quote), membership.
- **Businesses:** commercial refrigeration, commercial HVAC/RTUs (Request a quote, Call).
- IAQ, duct cleaning and mini-splits are secondary services.

## 5. Creative thesis
> **"Cold is a craft passed down."** The site feels like a precisely engineered instrument with a family story inside it. It uses the deep, quiet navy of a cold coil and the brand's electric blue and aqua only where something matters (an action, a temperature, a promise). Everything sits on a slanted geometry taken from the logo, so the brand's motion is built into the layout rather than added as effects.

Why it fits only this company: the slant comes from the ColdSolutions badge; the aqua/electric pair is their existing equity; the 1926 → Zacatecas → Texas lineage belongs to no one else; and refrigeration is a specialty their competitors don't claim.

**Anti-references:** no purple gradients, glass cards, floating orbs, stock "smiling tech with thumbs up", badge walls, coupon-scissor graphics, a repeated "Contact Us" under every tile, or unverifiable "#1" claims.

## 6. Art direction
**Color (tokens in `@theme`):**
| Token | Value | Role |
|---|---|---|
| `coil-950` | `#050C22` | primary dark base |
| `coil-900` | `#0A1638` | dark surface |
| `electric-600` | `#053CF7` | brand blue (existing): links and brand on light backgrounds |
| `aqua-300` | `#31FBED` | existing accent, **used only on dark** (passes AA there); primary CTA fill with navy text |
| `frost-50` | `#F3F7FC` | light sections |
| `steel-500` | `#5B6B8C` | secondary text on light (AA verified at build) |
| `ink-900` | `#0B1220` | body text on light |
| `alert-500` | warm amber (TBD) | used only for emergency / 24-7 |

Sections alternate deep coil (hero, lineage, final CTA) with frost (services, proof, membership) for rhythm and readability.

**Typography:** two self-hosted families.
- **Archivo (variable, width + weight):** condensed widths (≈75%, 600–800) for display. This keeps the industrial energy of the current Oswald, fixes its 300-weight legibility issues, and normal width serves as body text.
- **IBM Plex Mono:** used sparingly for "instrument" data: temperatures, warranty years, response times, license number.

Sentence-case headlines (no all-caps paragraphs), a fluid type scale, and body text capped at 65–70 characters per line.

**Geometry:** the logo's slant angle (measured from the vector at build, ≈16°) applies to image masks, section dividers, the CTA button edge and the active-nav indicator. That is one motif, used consistently.

**Imagery:** real job photos (supplied), a CompanyCam live feed, real owner/team photos *(to request)*, and existing service line icons redrawn to one stroke weight. No stock photography. Captions on the supplied boiler photos wait for the client to confirm their location.

## 7. Sitemap (same scope as the current site)
Home · **Homes** hub → AC repair, AC installation, furnace repair, furnace installation, package unit repair, package unit installation, mini-split, indoor air quality, duct cleaning · **Businesses** hub → commercial refrigeration, commercial HVAC · Membership · Financing & offers · About (our story) · Reviews (+ leave a review) · Contact · Service areas → Houston, Corpus Christi (Bellaire folded into Houston; 404s redirected) · Shop (Contractor Commerce embed).

Built as four templates: **Home**, **Service**, **Location** and **Utility**. That keeps 20+ pages consistent and maintainable.

## 8. Home page composition
1. **Header:** slim bar with logo, Homes, Businesses, Membership, About, a city switch (Houston / Corpus Christi) that controls which phone number shows site-wide, plus *Book service* and *Request a quote*.
2. **Hero (split):** headline on deep coil on the left (draft: "Three generations of keeping Texas cold."), proof line (24/7 · lifetime repair warranty for members · Houston & Corpus Christi), then two doors, **For your home** and **For your business**, each with its own primary action. On the right, a real job photo in a slanted mask with a small mono readout (e.g. "Supply 55°F").
3. **Two-path services:** frost background, editorial modular grid (not identical cards); Homes and Businesses columns with typographic service lists.
4. **Warranty & membership proof:** member vs non-member comparison table (10/10, 5/5, lifetime vs 1/1, 15% off, 4–6 hr priority response, no overtime) with *Join* and *Book a tune-up* buttons.
5. **Lineage (signature moment):** 1926 → ice-cream shop → Zacatecas → 2013 ColdSolutions → today, drawn along a scroll-linked "refrigerant line".
6. **Real work:** CompanyCam feed and supplied photos.
7. **Reviews:** Housecall Pro widget, styled container.
8. **Financing strip:** Wisetack (0% over 3 months on repairs), FTL, and "ask about current utility rebates".
9. **Service areas:** two city panels, each with its verified phone, hours and emergency line.
10. **Final CTA + footer:** license number, brands serviced, NAP.

## 9. Conversion strategy
- **Request a quote** opens the Contractor Commerce instant-quote journey, with a short form fallback.
- **Book service** opens the Housecall Pro modal (`HCPWidget.openModal()`).
- **Call** uses the city-aware number.
- One primary and one secondary action per section, never twelve identical buttons.
- Mobile gets a sticky bottom bar: Call · Book · Quote.

## 10. Responsive approach
Designed mobile-first at 375 px, with deliberate layouts at 768, 1024, 1280 and 1536. The hero stacks with the doors above the photo on mobile; the comparison table becomes a member/non-member toggle on mobile; the header collapses to logo + city + menu.

## 11. Smooth scrolling: Lenis
- Lenis **1.3.x**, pinned to the newest release at least two weeks old at build time (1.3.27 is the current npm release, published 2026-10-15). Installed through npm; `dist/lenis.min.js` and `lenis.css` are copied into `assets/vendor/` by a build script. No bundler, no runtime CDN.
- One instance with `autoRaf: true` (a single rAF loop) and `anchors` enabled with an offset for the sticky header. Native `scroll-behavior: smooth` is not set alongside it.
- `prefers-reduced-motion: reduce` means Lenis isn't initialised: native scroll and instant anchors, with all content still visible.
- QA will cover the HCP booking modal and Contractor Commerce sidebar (`data-lenis-prevent` on their scroll containers), anchors, back/forward, touch and keyboard.

## 12. Reveal animation: Normal (restrained)
- Headline line-mask reveals; image reveals through the slanted clip-path; a small stagger on service lists and table rows.
- One scroll-linked moment: the lineage line drawing, driven by Lenis scroll progress → a CSS custom property.
- Hover and focus: slant-edge underline on links, button edge shift, a mono readout tick.
- **Implementation:** IntersectionObserver + CSS classes + one small scroll-progress function. **No GSAP, ScrollTrigger or Three.js**: the planned motion doesn't need a timeline library, which saves about 70 KB+ of JS.
- Content is visible without JS; reduced motion turns reveals off.

## 13. Tech & dependencies
HTML5 · Tailwind CSS v4.3 via `@tailwindcss/cli` (tokens in `@theme`, compiled to `dist/styles.css`, minified) · vanilla JS (`js/main.js`, target < 8 KB) · Lenis (~5 KB gz). Third-party embeds stay as they are today (HCP, Contractor Commerce, CompanyCam), loaded on interaction or lazily where their docs allow. Analytics tags are kept as the client specifies.

## 14. Accessibility & performance targets
WCAG 2.2 AA contrast (aqua never on light backgrounds), visible focus rings, a skip link, semantic landmarks, labelled forms, 44 px touch targets, reduced-motion path. LCP < 2.5 s on throttled mobile (hero image preloaded, AVIF/WebP, sized), CLS < 0.1, two font files (variable woff2, subset), no console errors from our code. `HVACBusiness` JSON-LD for each location, unique titles and meta descriptions.

## 15. Acceptance criteria
- All current pages rebuilt with the four templates; 2 broken URLs redirected or removed.
- One consistent phone number per city everywhere.
- Quote and Book flows open the existing integrations on desktop and mobile.
- Lenis smooth on wheel, trackpad and touch; anchors land below the sticky header; no motion when reduced motion is requested.
- Lighthouse a11y ≥ 95 and performance ≥ 85 mobile on our pages (third-party widgets reported separately).
- QA_REPORT.md documents real browser checks at 375 / 768 / 1280 / 1536.

## 16. Assumptions & items needed from the client
1. **Which phone number per city is correct** (six numbers are live today).
2. Texas TACLA license number.
3. Location of the supplied boiler photos; more Texas job photos and owner/team portraits.
4. Current offers, membership price, and current rebates (the IRA copy will be removed).
5. Permission to keep or drop "#1" and "50 years" claims (recommended: drop, or substantiate).
6. Hosting target; whether the PHP review form (`add-review.php`) moves to the HCP review link.

Copy: existing accurate content is kept and edited for clarity; new copy is drafted from audit facts only and marked for client review.
