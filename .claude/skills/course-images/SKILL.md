---
name: course-images
description: Generate branded 16:9 cover images for Soldadura Fuerte course láminas (or any new láminas added later) in one consistent visual style — an HTML/CSS template rendered and screenshotted with Playwright. Use whenever a lámina needs an image, when new láminas are added to courseContent.ts, or when the image style needs to change for all of them at once.
---

# Course Images (Soldadura Fuerte)

Generates the cover image shown at the top of each lámina in the demo
(`demo/src/screens/SlideView.tsx`), plus the course cover on `CourseView.tsx`.
Currently these are random, contextless photos from picsum.photos — this
skill replaces them with on-brand, icon-driven illustrations that all share
the exact same layout, so the whole course reads as one designed product
instead of a stock-photo grab bag.

There's no image-generation API available in this environment. Instead: an
HTML page is built per image (background + icon + label), rendered in
headless Chromium via Playwright, and screenshotted to PNG. Same template,
different icon/label each time → guaranteed visual consistency across all 42
(or more, if the course grows) images.

## Visual system

- **Canvas:** 1280×720 (16:9, matches the `aspect-video` slots in the UI).
- **Background:** diagonal navy gradient (`#1B3A5C` → `#12283F`) with a
  faint blueprint-style grid overlay for industrial/technical texture, plus
  two large faint outline circles in opposite corners — this echoes the
  decorative circles already used in the app's own hero headers
  (`FinalExam.tsx` intro, `FinalResult.tsx` celebration header), so the
  images feel native to the product rather than bolted on.
- **Icon badge:** a solid safety-orange (`#E67E22`) circle, 208px, centered,
  with a white [Lucide](https://lucide.dev) line icon inside (108px,
  stroke 1.6). One icon per lámina, chosen to represent its specific topic
  (see `tools/icons.json`) — not decorative filler.
- **Label:** bold white text under the badge, 44px, tight letter-spacing,
  matching what the lámina is actually about (2–5 words).
- **Kicker:** small orange uppercase "PRC-MG-026 · SOLDADURA FUERTE" in the
  top-left, tying every image back to the procedure code.

These colors match the palette **already implemented** in the demo UI
(`docs/brief-disenador-maqueta.md`'s "paleta sugerida": `#1B3A5C` navy,
`#E67E22` orange). Worth knowing: a separate skill on this machine
(`metrogas-branding`) has Metrogas's actual corporate palette — Green Vogue
`#033358` / Buddha Gold `#A2AD00` — which differs from what the mockup
currently uses. If the project ever migrates to the real brand colors,
update the `NAVY`, `NAVY_DARK`, `ACCENT` constants in `tools/generate.js`
and regenerate everything; the rest of this system (layout, icons, grid)
stays the same.

## Usage

The renderer is self-contained under `tools/` (its own `package.json` /
`node_modules` — Playwright and `lucide-static` are not app dependencies,
just generation tooling, so they don't bloat the deployed site).

```bash
cd demo/.claude/skills/course-images/tools
npm install                     # first time only
node generate.js                # render every seed in icons.json
node generate.js ppe cylinders  # render just these seeds
node generate.js --preview      # render one sample to tools/preview.jpg
```

Output goes to `demo/public/images/laminas/<seed>.jpg` — one file per
`imageSeed` key in `icons.json`. JPEG at quality 88, not PNG: this is a
gradient-heavy background with no transparency, so lossless PNG bloated to
~390KB/image (16MB+ for the whole course) for zero visible benefit; JPEG
brings the same 43 images down to ~2.5MB total with no perceptible quality
loss. Vite serves `public/` at the site's base path, so in code reference
images as:

```tsx
`${import.meta.env.BASE_URL}images/laminas/${slide.imageSeed}.jpg`
```

not a hardcoded `/images/...` path — the deployed site is served from
`/cursos-mockup/`, and `BASE_URL` resolves correctly in both dev and prod.

## Adding a new lámina image

1. Add the new lámina's `imageSeed` to `demo/src/data/courseContent.ts` as
   usual.
2. Add an entry to `tools/icons.json` with the same seed as the key:
   ```json
   "new-seed": { "icon": "lucide-icon-name", "label": "Short Spanish label" }
   ```
   Pick the icon by browsing `tools/node_modules/lucide-static/icons/` (or
   https://lucide.dev/icons) — verify the file exists before using it;
   `generate.js` throws a clear error naming the missing icon file if not.
   Keep icons unique per image where possible; reusing one across very
   different topics undermines the whole point of per-lámina icons.
3. `node generate.js new-seed` to render just that one.
4. Commit the new PNG under `demo/public/images/laminas/`.

## Changing the style for every image at once

Because every image comes from the same `buildHtml()` function in
`tools/generate.js`, a layout/color/typography change there and a re-run of
`node generate.js` (no arguments) regenerates all 42 images identically —
there's no per-image drift to reconcile.
