import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const logoDir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public/logo';
if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

// 1. Standalone Logo Mark SVG (viewBox="0 0 120 120")
const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="dhara-d-grad" x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="50%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="dhara-stream-grad" x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="45%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="dhara-stream-subtle" x1="20" y1="90" x2="85" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="60%" stop-color="#3535D2"/>
      <stop offset="100%" stop-color="#6B5CF6"/>
    </linearGradient>
    <linearGradient id="dhara-spark-grad" x1="42" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E0DBFF"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <filter id="dhara-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Group 1: The 'D' Letterform Body -->
  <g class="dhara-d-body">
    <!-- Main D Spine and Bowl -->
    <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#dhara-d-grad)" />
    <!-- Serif base accent -->
    <path d="M42 24 H56 V27 H42 Z" fill="url(#dhara-d-grad)" />
    <path d="M42 89 H56 V92 H42 Z" fill="url(#dhara-d-grad)" />
  </g>

  <!-- Group 2: The Three Dynamic Stream Lines -->
  <g class="dhara-stream-lines">
    <!-- Stream Line 1 (Upper Arc flowing to the spark) -->
    <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#dhara-stream-grad)" />
    <!-- Stream Line 2 (Central Wave surging through D) -->
    <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#dhara-stream-grad)" />
    <!-- Stream Line 3 (Lower Flow Anchor) -->
    <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill="url(#dhara-stream-subtle)" />
  </g>

  <!-- Group 3: The Radiant 4-Point Spark & Ambient Stardust -->
  <g class="dhara-spark">
    <!-- Core 4-Point Star -->
    <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="url(#dhara-spark-grad)" filter="url(#dhara-glow)" />
    <!-- Tiny Stardust Accents -->
    <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
    <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
    <circle cx="32" cy="34" r="1" fill="#A89BFF" opacity="0.6" />
    <circle cx="53" cy="14" r="1" fill="#FFFFFF" opacity="0.9" />
  </g>
</svg>`;

// 2. Full Horizontal Logo on Dark (#05060A)
const logoFullDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="fd-d-grad" x1="15" y1="75" x2="75" y2="15" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="50%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="fd-stream-grad" x1="10" y1="60" x2="65" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="45%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="fd-stream-subtle" x1="15" y1="68" x2="60" y2="45" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="60%" stop-color="#3535D2"/>
      <stop offset="100%" stop-color="#6B5CF6"/>
    </linearGradient>
    <linearGradient id="fd-spark-grad" x1="31" y1="9" x2="39" y2="21" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E0DBFF"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <filter id="fd-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Left Mark (scaled to 75x75 within 90h) -->
  <g transform="translate(10, 8) scale(0.74)">
    <!-- D Body -->
    <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#fd-d-grad)" />
    <path d="M42 24 H56 V27 H42 Z" fill="url(#fd-d-grad)" />
    <path d="M42 89 H56 V92 H42 Z" fill="url(#fd-d-grad)" />
    <!-- Streams -->
    <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#fd-stream-grad)" />
    <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#fd-stream-grad)" />
    <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill="url(#fd-stream-subtle)" />
    <!-- Spark -->
    <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="url(#fd-spark-grad)" filter="url(#fd-glow)" />
    <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
    <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
    <circle cx="32" cy="34" r="1" fill="#A89BFF" opacity="0.6" />
  </g>

  <!-- Typography Right -->
  <text x="105" y="47" font-family="'Playfair Display', Georgia, serif" font-size="36" font-weight="600" fill="#FFFFFF" letter-spacing="0.08em">DHARA</text>
  <text x="106" y="66" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#6B5CF6" letter-spacing="0.28em">EVENT PVT. LTD.</text>
  <path d="M255 63 H360" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
</svg>`;

// 3. Full Horizontal Logo on Light Backgrounds
const logoFullLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="fl-d-grad" x1="15" y1="75" x2="75" y2="15" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="50%" stop-color="#3535D2"/>
      <stop offset="100%" stop-color="#6B5CF6"/>
    </linearGradient>
    <linearGradient id="fl-stream-grad" x1="10" y1="60" x2="65" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="50%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
  </defs>

  <g transform="translate(10, 8) scale(0.74)">
    <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#fl-d-grad)" />
    <path d="M42 24 H56 V27 H42 Z" fill="url(#fl-d-grad)" />
    <path d="M42 89 H56 V92 H42 Z" fill="url(#fl-d-grad)" />
    <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#fl-stream-grad)" />
    <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#fl-stream-grad)" />
    <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill="#3535D2" />
    <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="#6B5CF6" />
  </g>

  <text x="105" y="47" font-family="'Playfair Display', Georgia, serif" font-size="36" font-weight="600" fill="#05060A" letter-spacing="0.08em">DHARA</text>
  <text x="106" y="66" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#3535D2" letter-spacing="0.28em">EVENT PVT. LTD.</text>
  <path d="M255 63 H360" stroke="rgba(5,6,10,0.15)" stroke-width="1" />
</svg>`;

// 4. Stacked Logo on Dark (Footer: 260x170)
const logoStackedDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 170" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="st-d-grad" x1="20" y1="90" x2="90" y2="15" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="50%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="st-stream-grad" x1="15" y1="70" x2="80" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="45%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="st-stream-subtle" x1="20" y1="80" x2="75" y2="50" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="60%" stop-color="#3535D2"/>
      <stop offset="100%" stop-color="#6B5CF6"/>
    </linearGradient>
    <linearGradient id="st-spark-grad" x1="42" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E0DBFF"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <filter id="st-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Centered Mark on top -->
  <g transform="translate(86, 0) scale(0.74)">
    <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#st-d-grad)" />
    <path d="M42 24 H56 V27 H42 Z" fill="url(#st-d-grad)" />
    <path d="M42 89 H56 V92 H42 Z" fill="url(#st-d-grad)" />
    <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#st-stream-grad)" />
    <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#st-stream-grad)" />
    <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill="url(#st-stream-subtle)" />
    <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="url(#st-spark-grad)" filter="url(#st-glow)" />
    <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
    <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
  </g>

  <!-- Typography Center-Aligned -->
  <text x="130" y="105" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="600" fill="#FFFFFF" letter-spacing="0.12em">DHARA</text>
  
  <g transform="translate(130, 122)">
    <text x="0" y="0" text-anchor="middle" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#6B5CF6" letter-spacing="0.32em">EVENT PVT. LTD.</text>
    <path d="M-105 -3 H-65" stroke="rgba(107,92,246,0.4)" stroke-width="1" />
    <path d="M65 -3 H105" stroke="rgba(107,92,246,0.4)" stroke-width="1" />
  </g>

  <text x="130" y="148" text-anchor="middle" font-family="'Inter', sans-serif" font-size="9" font-weight="300" fill="rgba(255,255,255,0.5)" letter-spacing="0.14em">CREATING EXPERIENCES. DELIVERING EXCELLENCE.</text>
</svg>`;

// 5. Favicon SVG (32x32 clean scalable)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <defs>
    <linearGradient id="fav-d-grad" x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="50%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
    <linearGradient id="fav-stream-grad" x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3535D2"/>
      <stop offset="45%" stop-color="#6B5CF6"/>
      <stop offset="100%" stop-color="#A89BFF"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="26" fill="#05060A"/>
  <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#fav-d-grad)" />
  <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#fav-stream-grad)" />
  <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#fav-stream-grad)" />
  <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="#FFFFFF" />
</svg>`;

// Write SVGs
fs.writeFileSync(path.join(logoDir, 'logo-mark.svg'), logoMarkSvg, 'utf8');
fs.writeFileSync(path.join(logoDir, 'logo-full-dark.svg'), logoFullDarkSvg, 'utf8');
fs.writeFileSync(path.join(logoDir, 'logo-full-light.svg'), logoFullLightSvg, 'utf8');
fs.writeFileSync(path.join(logoDir, 'logo-stacked-dark.svg'), logoStackedDarkSvg, 'utf8');
fs.writeFileSync(path.join(logoDir, 'favicon.svg'), faviconSvg, 'utf8');

console.log('✓ All 5 SVGs written to /public/logo/');

// Render favicon-512.png and og-image.png via Sharp
async function renderPंनी() {
  // 512x512 Favicon
  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png({ quality: 95 })
    .toFile(path.join(logoDir, 'favicon-512.png'));
  console.log('✓ favicon-512.png rendered (512x512)');

  // 1200x630 OpenGraph Image
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <radialGradient id="og-glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="rgba(107, 92, 246, 0.25)"/>
        <stop offset="60%" stop-color="rgba(53, 53, 210, 0.08)"/>
        <stop offset="100%" stop-color="rgba(5, 6, 10, 0)"/>
      </radialGradient>
      <linearGradient id="og-d-grad" x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#3535D2"/>
        <stop offset="50%" stop-color="#6B5CF6"/>
        <stop offset="100%" stop-color="#A89BFF"/>
      </linearGradient>
      <linearGradient id="og-stream-grad" x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#3535D2"/>
        <stop offset="45%" stop-color="#6B5CF6"/>
        <stop offset="100%" stop-color="#A89BFF"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#05060A"/>
    <circle cx="600" cy="260" r="450" fill="url(#og-glow)"/>
    
    <!-- Central Stacked Logo -->
    <g transform="translate(510, 80) scale(1.5)">
      <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#og-d-grad)" />
      <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#og-stream-grad)" />
      <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#og-stream-grad)" />
      <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="#FFFFFF" />
    </g>

    <text x="600" y="360" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="76" font-weight="600" fill="#FFFFFF" letter-spacing="0.14em">DHARA</text>
    <text x="600" y="415" text-anchor="middle" font-family="'Inter', sans-serif" font-size="18" font-weight="700" fill="#6B5CF6" letter-spacing="0.36em">EVENT PVT. LTD.</text>
    <path d="M380 408 H460" stroke="rgba(107,92,246,0.5)" stroke-width="2" />
    <path d="M740 408 H820" stroke="rgba(107,92,246,0.5)" stroke-width="2" />
    
    <text x="600" y="475" text-anchor="middle" font-family="'Inter', sans-serif" font-size="20" font-weight="300" fill="rgba(255,255,255,0.7)" letter-spacing="0.16em">CREATING EXPERIENCES. DELIVERING EXCELLENCE.</text>

    <!-- Bottom Tagline Pill -->
    <rect x="425" y="525" width="350" height="42" rx="21" fill="rgba(107,92,246,0.12)" stroke="rgba(107,92,246,0.3)" stroke-width="1"/>
    <text x="600" y="552" text-anchor="middle" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#A89BFF" letter-spacing="0.22em">SPORTS • CORPORATE • WEDDINGS • LIVE</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile(path.join(logoDir, 'og-image.png'));
  console.log('✓ og-image.png rendered (1200x630)');
}

renderPंनी().catch(console.error);
