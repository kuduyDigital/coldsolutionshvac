# QA Report — ColdSolutions homepage

**Date:** 2026-10-19 · **Scope:** `index.html` only (homepage; inner links point to the existing live pages)
**Method:** built-in Chromium browser pane against the local server (`npm run serve`), DOM/JS measurements, screenshots at 375, 768, ~800, 1024, 1280, ~1327 and 1536 px.

## Verified (actually run)

| Check | Result |
|---|---|
| Horizontal overflow | None at 375 / 768 / 1024 / 1536 (`scrollWidth ≤ innerWidth`) |
| Console errors (our code) | None |
| Lenis 1.3.26 | Initialises once, `autoRaf` (single rAF loop); wheel scroll works; `window.lenis` exposed |
| Anchor navigation | `#quote` lands 68 px from top under a 69 px sticky header (uses CSS `scroll-margin-top`); Back returns to top |
| Keyboard focus jump | Focusing a form field mid-page scrolls natively and stays put (Lenis doesn't fight it) |
| Reveal animations | Classes apply via IntersectionObserver; clip-path reveals observe their parent (fix for fully clipped targets) |
| City switch | Updates every `data-phone-*` link/label + both switches; persists via localStorage (try/catch guarded) |
| Mobile menu | Opens full-height, `aria-expanded` toggles, Escape closes and returns focus to the toggle |
| Quote form validation | Empty submit → 5 field errors, `aria-invalid`, focus to first field, live status message; bad email/ZIP → specific messages |
| Book service | Lazy-loads the Housecall Pro script on first click and opens the real booking modal; closing restores scrolling |
| Reviews widget | Housecall Pro iframe loads live reviews (5.0 rating shown by the widget) |
| CompanyCam feed | Script lazy-loads near the viewport; real projects render (shadow DOM) |
| Contrast (WCAG AA) | All token pairs pass — lowest: steel-500 on frost-50 **5.45:1**; aqua on coil-950 14.9:1; white on electric 7.0:1 |
| Mobile comparison table | Restacks to labelled Member / Non-member pairs below 640 px |
| Mobile action bar | Never covers content at max scroll (footer credit 715 px vs bar top 739 px) |
| Page weight (own assets, uncompressed) | CSS 39 KB · JS 8 KB · Lenis 19 KB · fonts 104 KB (2 files) · hero AVIF 17 KB (760w) |

## Fixed during QA
1. Reveals never fired on clip-path-hidden elements → observe parent.
2. Header nav/phone wrapping at 1280–1440 → nowrap, phone shown from 1536 px.
3. Hero CTAs below the fold at 1280×800 → 7/5 grid, tighter spacing.
4. Hero crop cut the van's logo/tagline → focal point + aspect per breakpoint.
5. Decorative timeline track was an `<li>` (5 list items announced) → moved to `::before/::after`.
6. Mobile membership table cramped → stacked layout (unlayered CSS to beat utilities).
7. Lenis anchor offset doubled with `scroll-margin-top` → `anchors: true`.
8. City switch label wrapped at 1536 → nowrap.
9. Houston rooftop strip showed a scrollbar and a clipped 5th tile → 5-up grid ≥768 px, hidden-scrollbar swipe row on mobile.
10. Service-row hover bar floated in the gutter → contained frost wash + straight electric edge.
11. Duplicate "Our latest projects" heading next to CompanyCam's own → removed ours.
12. Hero mobile overlays covered the photo → 4:3 crop, smaller readout, one chip.
13. Added a no-JS safety: if `main.js` never runs, reveal-hiding is removed after 2.5 s.

## Not verified / limitations
- **Reduced motion was not emulated** (the pane can't toggle `prefers-reduced-motion`). Code path: Lenis not initialised, reveals forced visible, CSS animations disabled, temp counter shows final value — reviewed, not run.
- **Real devices / Safari / Firefox** not tested; touch scrolling only emulated.
- **Lighthouse / Core Web Vitals** not run. Local server has no compression or caching.
- **Form submission** not tested end-to-end: it posts to `/contact.php` with the live site's field names and only works on the client's server (reCAPTCHA key still to be added).
- Screenshots in the pane run as a background page, so reveal timing appears delayed in captures; the class changes were confirmed by script.
- Photos are low resolution (384–680 px client images, 262 px rooftop tiles); hero is 1320 px. Higher-res originals would sharpen large displays.

## Content placeholders for the client (search `PLACEHOLDER` in `index.html`)
Phone number per city (six are live today) · TACLA license number · membership price · whether offers are current · **IRA rebate amounts (federal credits ended 2025; Texas HEAR not yet open)** · "number one choice" statement · job locations for the four boiler/condenser photos · Google rating to display.
