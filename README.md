# ColdSolutions — homepage redesign

Static homepage: semantic HTML5 + Tailwind CSS v4 (CLI) + vanilla JS + Lenis smooth scroll. No framework, no bundler.
Design by [KUDUY](https://kuduy.com/).

## Run

```bash
npm install
npm run build   # copies vendor files, optimises images, compiles dist/styles.css
npm run serve   # http://localhost:5173 (or $PORT)
```

While editing styles: `npm run css:watch`.

## Structure

```
index.html            homepage
src/input.css         Tailwind source: @theme tokens, components, motion
dist/styles.css       compiled, minified CSS (commit this for deploys)
js/main.js            Lenis, reveals, city-aware phone, HCP booking, CompanyCam, form validation
assets/src/           original images (not served)
assets/images/        generated AVIF/WebP (npm run vendor)
assets/fonts/         Archivo variable + IBM Plex Mono 500 (self-hosted)
assets/vendor/        lenis.min.js + lenis.css (pinned 1.3.26)
scripts/vendor.mjs    asset pipeline (sharp)
scripts/serve.mjs     local static server
```

## Integrations (kept from the live site)
- **Housecall Pro** booking modal (loaded on first "Book service" click; falls back to the hosted booking page) and reviews widget.
- **Contractor Commerce** instant quote / shop: links to the live `/shop` journey.
- **CompanyCam** showcase `2e174df5-…` (script loads near the viewport).
- **Wisetack** and **FTL Finance** links.
- Quote form posts to `/contact.php` with the existing field names. It works only on the client's server and needs the reCAPTCHA key.

## Editing phone numbers
City numbers live in `CITIES` at the top of `js/main.js` (header, hero, mobile bar), plus the static numbers in the service-area, quote and footer sections and the JSON-LD in `<head>`. Search for `PLACEHOLDER`.

## Docs
`EXISTING_SITE_AUDIT.md` · `MARKET_RESEARCH.md` · `DESIGN_PROPOSAL.md` · `DECISIONS.md` · `QA_REPORT.md`

## Dependencies
| Package | Version | Why |
|---|---|---|
| lenis | 1.3.26 (exact) | Smooth scroll (KUDUY default); newest release ≥ 2 weeks old at build |
| tailwindcss, @tailwindcss/cli | 4.3.3 | CSS build |
| @fontsource-variable/archivo, @fontsource/ibm-plex-mono | 5.3.0 | Font files (copied, self-hosted) |
| sharp | dev | Image optimisation |

Brand logos, coupon product shots, credentials and maps are the client's existing site assets.
