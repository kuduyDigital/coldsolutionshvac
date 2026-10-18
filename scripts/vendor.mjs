// Copies runtime vendor files (Lenis, fonts) and builds optimized images.
// Source photos live in assets/src/ (originals, not served).
import { mkdir, copyFile, access } from 'node:fs/promises';
import sharp from 'sharp';

const out = (p) => mkdir(p, { recursive: true });
await Promise.all([out('assets/vendor'), out('assets/fonts'), out('assets/images')]);

await Promise.all([
  copyFile('node_modules/lenis/dist/lenis.min.js', 'assets/vendor/lenis.min.js'),
  copyFile('node_modules/lenis/dist/lenis.css', 'assets/vendor/lenis.css'),
  // Archivo "standard" = variable wght + wdth axes in one file
  copyFile('node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2', 'assets/fonts/archivo-var.woff2'),
  copyFile('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2', 'assets/fonts/plex-mono-500.woff2'),
]);

const src = (f) => `assets/src/${f}`;
const exists = (p) => access(p).then(() => true, () => false);

// name, source, optional crop {left, top, width, height}, output widths
const jobs = [
  { name: 'hero-van', file: 'cs-hero-2000-725.webp', crop: { left: 240, top: 30, width: 1320, height: 695 }, widths: [1320, 760] },
  { name: 'owner-wide', file: 'cs-banner-owner-1200.webp', crop: { left: 120, top: 0, width: 960, height: 391 }, widths: [960] },
  { name: 'job-condenser', file: 'client-condenser.png', widths: [384] },
  { name: 'job-navien', file: 'client-navien.webp', widths: [680] },
  { name: 'job-boiler-oil', file: 'client-boiler-oil.png', widths: [384] },
  { name: 'job-boiler-gas', file: 'client-boiler-gas.png', widths: [384] },
  { name: 'team-portrait', file: 'cs-banner-employee-775-475.webp', crop: { left: 90, top: 0, width: 520, height: 475 }, widths: [520] },
  { name: 'brands-oem', file: 'cs-banner-oem-logos.webp', widths: [1400] },
  { name: 'brand-fujitsu', file: 'cs-fujitsu-logo.png', widths: [200] },
  { name: 'brand-icm', file: 'cs-icm-logo-new.png', widths: [200] },
  { name: 'brand-micro-air', file: 'cs-micro-air-logo.png', widths: [200] },
  { name: 'brand-reme', file: 'cs-reme-logo.png', widths: [200] },
  { name: 'credentials', file: 'cs-banner-credentials.webp', widths: [900] },
  { name: 'coupon-ac-repair', file: 'cs-coupon-american-standard-ac.webp', widths: [300] },
  { name: 'coupon-system', file: 'cs-coupon-rheem-ac.webp', widths: [300] },
  { name: 'coupon-refrigeration', file: 'cs-coupon-reach-in.webp', widths: [300] },
  { name: 'map-corpus', file: 'cs-banner-corpus-service-area.webp', widths: [792] },
  { name: 'map-houston', file: 'cs-banner-houston-service-area.webp', widths: [788] },
  { name: 'ftl-finance', file: 'cs-financing-ftl-finance.webp', widths: [250] },
  // five tiles cut from the existing "recent work" strip
  ...[[8, 262], [290, 261], [570, 260], [850, 262], [1132, 233]].map(([left, width], i) => ({
    name: `houston-work-${i + 1}`, file: 'cs-banner-work-gallery.webp', crop: { left, top: 5, width, height: 238 }, widths: [width],
  })),
];

for (const j of jobs) {
  if (!(await exists(src(j.file)))) { console.warn('missing', j.file); continue; }
  for (const w of j.widths) {
    let img = sharp(src(j.file));
    if (j.crop) img = img.extract(j.crop);
    img = img.resize({ width: w, withoutEnlargement: true });
    const suffix = j.widths.length > 1 ? `-${w}` : '';
    await img.clone().webp({ quality: 80 }).toFile(`assets/images/${j.name}${suffix}.webp`);
    await img.clone().avif({ quality: 55 }).toFile(`assets/images/${j.name}${suffix}.avif`);
  }
}

// Logo: trim the white canvas, then flood-fill the outer white to transparent
// (interior whites of the chrome gradient stay opaque because they are not edge-connected).
if (await exists(src('client-logo.webp'))) {
  const { data, info } = await sharp(src('client-logo.webp')).trim({ threshold: 12 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const seen = new Uint8Array(W * H);
  const stack = [];
  const light = (i) => data[i * 4] > 225 && data[i * 4 + 1] > 225 && data[i * 4 + 2] > 225;
  for (let x = 0; x < W; x++) stack.push(x, x + (H - 1) * W);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
  while (stack.length) {
    const p = stack.pop();
    if (seen[p] || !light(p)) continue;
    seen[p] = 1; data[p * 4 + 3] = 0;
    const x = p % W, y = (p / W) | 0;
    if (x > 0) stack.push(p - 1); if (x < W - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - W); if (y < H - 1) stack.push(p + W);
  }
  const logo = sharp(data, { raw: { width: W, height: H, channels: 4 } });
  await logo.clone().resize({ width: 480 }).webp({ quality: 90, alphaQuality: 90 }).toFile('assets/images/logo.webp');
  await logo.clone().resize({ width: 480 }).png().toFile('assets/images/logo.png');
  await logo.clone().resize({ width: 64, height: 64, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('assets/images/favicon.png');
  await logo.clone().resize({ width: 1000 }).png().toBuffer().then((b) =>
    sharp({ create: { width: 1200, height: 630, channels: 3, background: '#050C22' } }).composite([{ input: b }]).jpeg({ quality: 82 }).toFile('assets/images/og.jpg'));
}
console.log('vendor + images done');
