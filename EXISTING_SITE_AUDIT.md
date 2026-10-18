# Existing Site Audit — coldsolutionshvac.com

**Audited:** 2026-10-19 · **Method:** built-in browser (rendered desktop + 375px mobile), DOM/computed-style inspection, fetch of every sitemap URL, `dembrandt` token extraction (`research/dembrandt-coldsolutions-DESIGN.md`).
**Built by:** Red Barn Media Group (footer credit). Bootstrap 5.3 + partial Tailwind 4 classes, Font Awesome 6 Pro kit.

## 1. Coverage

| | Count |
|---|---|
| URLs in `sitemap.xml` | 27 |
| Fetched and text-inspected | 27 (all) |
| Rendered visually (screenshots) | Homepage desktop + mobile |
| Broken (404) | 2: `/service-area/houston/tx/AC-Cooling-and-Air-Conditioning-Systems`, `/service-area/houston/tx/Air-Conditioning-Maintenance` |
| Thin pages (~111 words, template only) | 4: `/service-area/`, `/service-area/bellaire/tx` and its two sub-pages |

Page types: Home · 2 commercial service pages · 9 residential service pages (AC repair/install, furnace repair/install, package unit repair/install, mini-split repair, IAQ, duct cleaning) · Financing · Maintenance agreement · Specials · Reviews · Add review · About · Contact · Shop (Contractor Commerce app) · Service-area pages (Houston is the only substantial one).

**Not verified:** interactive states of third-party widgets (booking modal, shop journey, CompanyCam gallery); individual inner pages were not rendered visually, only text-inspected.

## 2. Visual identity (verified computed values)

| Token | Value | Use |
|---|---|---|
| Electric blue | `#053CF7` | h2, body links, button text |
| Cyan / aqua | `#31FBED` (hover `#9FFFF8`) | buttons, highlighted paragraphs |
| Royal blue | `#291EDD`, `#0000FF` | header bar, hero band |
| Mid blue | `#156ED7` | secondary panels |
| Text | `#333333` on `#FFFFFF`; `#212529` | body |
| Display font | **Oswald** 200–700, all-caps | H1 40px/300, H2 21px/700 |
| Body font | **Open Sans** 300–800 | 16px body |
| Extra loaded | Source Sans Pro ×4 weights, FA Pro ×4 | unused weight cost |

**Logo:** italic, techno-styled "ColdSolutions" wordmark in a slanted cyan→white→royal-blue chrome badge with a faint compressor/fan line drawing behind it. The slant and the cyan/blue pairing are the brand's strongest equity — keep both.

**Imagery:** brand banners (`cs-banner-*.webp`), custom line icons for services and core values, OEM logo strip, coupon graphics. Little real job photography is visible on the homepage; real job proof lives in the CompanyCam widget.

## 3. Structure & content (homepage, top to bottom)

Sticky blue header (two phones, Menu / Book Now / Call) → review + Facebook badges → H1 band → Buy Services / Instant HVAC Quote / Buy Filters → mission statement → 3 service cards (Commercial Refrigeration, Commercial HVAC, Residential AC) + contact form → 10-year warranty → Lifetime Unlimited repair warranty → 15% member discount → financing (Wisetack, FTL) → 6 commercial service tiles → founder quote → 5 core values → 1926 family story → reviews widget → duct cleaning → service areas → 6 residential tiles → IRA rebates → 3 coupons → OEM logos → two location cards → recent work → footer.

That is ~20 sections and roughly 10 different CTAs on one page.

### Content worth preserving (accurate, specific, differentiating)
- **The family lineage:** Jose Santiago De Santiago Olguin (b. 1926), ice-cream shop owner who fixed his own refrigeration; son Alfredo started a refrigeration business in Zacatecas; Alfredo and his son built ColdSolutions (est. 2013). This is a genuinely rare, ownable story — currently buried mid-page.
- **Warranties:** 10-yr parts & labor (residential installs, members) + 2 yrs maintenance; 5-yr parts & labor (commercial, members) + 1 yr maintenance; Lifetime Unlimited Warranty on repairs for members; 1/1 for non-members.
- **Membership benefits:** 15% off service calls (parts & labor), no overtime, locked diagnostic & PM price, up to 2 lb refrigerant, priority 4–6 hr response, ColdSolution bucks.
- **Call-before-5pm promise:** no time-and-a-half if they can't arrive until later.
- **Commercial refrigeration** competence (walk-ins, reach-ins, RTUs) — rare among residential-led competitors.
- Integrations: Housecall Pro booking (`HCPWidget.openModal()`), Housecall Pro review widget, Contractor Commerce shop/instant quote (`/shop#/journey/buy_h_v_a_c_system`), CompanyCam showcase, Wisetack + FTL financing.

## 4. Interactions & motion
Bootstrap defaults only: 0.15–0.25s color transitions on links/buttons. No scroll motion. Floating "Buy HVAC System" chip (Contractor Commerce sidebar) bottom-left.

## 5. Strengths
Clear service split (commercial vs residential); real warranties and membership value; 24/7 emergency and two-city coverage stated early; online booking + instant quote already integrated; memorable color pair.

## 6. UX & visual issues
1. **Desktop hero renders as a near-empty white band** on first paint in our test (white H1 with no visible background behind it until assets load) — the first screen communicates almost nothing. *Observed once; re-verify.*
2. Saturated `#0000FF` + `#31FBED` everywhere: cyan text on white and white on cyan fail contrast; the brand reads loud rather than expert.
3. Oswald at weight 300 in all-caps for long H1s → 7-line wrap on mobile; the H1 pushes all CTAs below the fold on a 375px screen.
4. Repeated "CONTACT US" button under every tile (12+ times) — no hierarchy between quote, book and call.
5. Section overload: residential and commercial tile grids appear twice; specials/rebates appear on several pages.
6. Header eats ~140px on mobile (logo bar + 3-button bar).
7. 4 font families, 103 network requests, 4 tag managers/analytics scripts, Bootstrap + Tailwind both loaded.
8. No `LocalBusiness`/`HVACBusiness` structured data found.

## 7. Content & conversion problems
- **Phone-number chaos:** the site exposes **six different numbers** — (832) 957-0060, (361) 317-7171, (361) 490-2157, (832) 957-2107, (361) 371-7171 (furnace pages; likely a typo of 317), and meta-description 832-420-8955. Needs a single source of truth from the client.
- **Geo mismatch:** H1s and titles target "Bellaire" and "Katy" while nav promises Houston + Corpus Christi; Corpus Christi has no real service-area page.
- **Unverifiable superlatives:** "#1 HVAC…", "number one choice… of Texas", "50 Years of experience" — no evidence shown. Risky and generic.
- **Outdated incentive claims:** "IRA rebates up to $2,000 / grant up to $5,000". Federal 25C/25D credits ended 2025-12-31 and Texas HEAR/HOMES had not launched as of mid-2026 (see MARKET_RESEARCH.md). Must be removed or rewritten with the client.
- Coupon "$500 off when you purchase your system off our website" vs image alt "15% OFF AC Installation" — conflicting offers.
- Duplicate meta description on IAQ and duct-cleaning pages; empty meta on Specials, Contact, Reviews; title "Service in" on `/service-area/`.
- Typos: "Iur Trusted Brands", "perfromance", "HVAC Contractorin", stray `”` in a title.
- Mission statement and core values are generic corporate language and occupy prime space.

## 8. Opportunities
1. Lead with the **three-generation refrigeration lineage** — no local competitor has an origin story this specific.
2. Make **warranties + membership** the central proof block (the Lifetime repair warranty is the strongest commercial message on the site).
3. Two clear paths at the top: **Request a quote** (installs → Contractor Commerce instant quote / form) and **Book service** (repair/maintenance → Housecall Pro), with call as a persistent utility.
4. Split audiences cleanly: Homes / Businesses (refrigeration + commercial HVAC).
5. Real job photography (client-supplied) + CompanyCam feed as proof instead of stock banners.
6. Proper Houston and Corpus Christi location pages; fix 404s; consistent NAP; schema.
7. Refine the color system: keep the electric blue + aqua identity but rebalance to a deep, readable base.

## 9. Evidence limits & open items
- Client-supplied photos (Force boiler, Navien combi boiler wall, outdoor condenser, oil-fired boiler with circulators) show hydronic/boiler equipment typical of northern climates; the user states they are real company work. **Confirm location/context with the client before captioning them as Houston or Corpus Christi jobs.**
- Review counts/ratings were not verifiable from public sources (Housecall Pro widget renders in an iframe; third-party directories are ambiguous).
- The supplied "$25K/month to your HVAC business" ad and the site's Skool community link suggest the owner also runs contractor coaching — **out of scope** for the customer site unless the client wants it.
