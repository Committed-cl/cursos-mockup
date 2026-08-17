#!/usr/bin/env node
// Generates branded 16:9 lámina cover images for the Soldadura Fuerte course.
// One HTML page per image, rendered and screenshotted with Playwright, so
// every image shares the exact same layout/typography/color system.
//
// Usage:
//   node generate.js                 render every seed in icons.json
//   node generate.js training-purpose [learning-outcomes ...]   render just these
//   node generate.js --preview       render one sample to preview.png next to this script

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const WIDTH = 1280;
const HEIGHT = 720;

const SKILL_DIR = path.resolve(__dirname, '..');
const ICONS_JSON = path.join(__dirname, 'icons.json');
const LUCIDE_DIR = path.join(__dirname, 'node_modules', 'lucide-static', 'icons');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../public/images/laminas');

// Brand system — matches the palette already implemented in the demo UI
// (docs/brief-disenador-maqueta.md "paleta sugerida"). See SKILL.md for the
// note about Metrogas's real corporate palette if this ever needs to change.
const NAVY_DARK = '#12283F';
const NAVY = '#1B3A5C';
const ACCENT = '#E67E22';

function readIconSvg(iconName) {
  const file = path.join(LUCIDE_DIR, `${iconName}.svg`);
  if (!fs.existsSync(file)) {
    throw new Error(`Unknown lucide icon "${iconName}" (expected ${file})`);
  }
  // lucide-static SVGs already use stroke="currentColor"; wrapping color is set via CSS.
  return fs.readFileSync(file, 'utf8');
}

function buildHtml({ label, iconSvg }) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    overflow: hidden;
    font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
  }
  .frame {
    position: relative;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background: linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DARK} 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  /* Faint blueprint grid for industrial/technical texture */
  .grid {
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px);
  }
  /* Decorative outline circles, echoing the app's own celebration/hero headers */
  .circle {
    position: absolute;
    border: 6px solid rgba(255,255,255,0.08);
    border-radius: 50%;
  }
  .circle-1 { width: 260px; height: 260px; top: -80px; left: -80px; }
  .circle-2 { width: 380px; height: 380px; bottom: -140px; right: -120px; }

  .kicker {
    position: absolute;
    top: 36px;
    left: 44px;
    color: ${ACCENT};
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0.9;
  }

  .badge {
    position: relative;
    width: 208px;
    height: 208px;
    border-radius: 50%;
    background: ${ACCENT};
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  .badge svg {
    width: 108px;
    height: 108px;
    stroke: #ffffff;
    stroke-width: 1.6;
  }

  .label {
    color: #ffffff;
    font-size: 44px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-align: center;
    max-width: 920px;
    line-height: 1.15;
    text-shadow: 0 2px 12px rgba(0,0,0,0.25);
  }
</style>
</head>
<body>
  <div class="frame">
    <div class="grid"></div>
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="kicker">PRC-MG-026 · Soldadura Fuerte</div>
    <div class="badge">${iconSvg}</div>
    <div class="label">${label}</div>
  </div>
</body>
</html>`;
}

async function render(browser, seed, entry, outDir) {
  const iconSvg = readIconSvg(entry.icon);
  const html = buildHtml({ label: entry.label, iconSvg });
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  // JPEG, not PNG: this is a photographic-weight gradient background, and
  // lossless PNG bloats to ~390KB/image (16MB+ for the whole course) for no
  // visible benefit — there's no transparency or sharp-edged UI chrome here.
  const outPath = path.join(outDir, `${seed}.jpg`);
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 88 });
  await page.close();
  return outPath;
}

async function main() {
  const args = process.argv.slice(2);
  const icons = JSON.parse(fs.readFileSync(ICONS_JSON, 'utf8'));

  const browser = await chromium.launch({ args: ['--no-sandbox'] });

  try {
    if (args.includes('--preview')) {
      const [seed, entry] = Object.entries(icons)[0];
      const outPath = await render(browser, seed, entry, __dirname);
      const previewPath = path.join(__dirname, 'preview.jpg');
      fs.renameSync(outPath, previewPath);
      console.log(`Preview written to ${previewPath}`);
      return;
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const seeds = args.length > 0 ? args : Object.keys(icons);
    const missing = seeds.filter((s) => !icons[s]);
    if (missing.length) {
      console.error(`Unknown seed(s), not in icons.json: ${missing.join(', ')}`);
      process.exitCode = 1;
      return;
    }

    for (const seed of seeds) {
      const outPath = await render(browser, seed, icons[seed], OUTPUT_DIR);
      console.log(`✓ ${seed} -> ${outPath}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
