import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const workspaceRoot = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA';
const logoDir = path.join(workspaceRoot, 'public/logo');
const appDir = path.join(workspaceRoot, 'app');
const publicDir = path.join(workspaceRoot, 'public');

// 1. High-Contrast, Scalable Browser Favicon SVG (optimized for 16x16, 32x32, 64x64 tab visibility)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <defs>
    <linearGradient id="fav-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080A14"/>
      <stop offset="100%" stop-color="#05060A"/>
    </linearGradient>
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
    <filter id="fav-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Background Badge with rounded corners -->
  <rect width="120" height="120" rx="28" fill="url(#fav-bg)" stroke="rgba(107,92,246,0.35)" stroke-width="2"/>
  
  <!-- Stylized D letterform -->
  <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill="url(#fav-d-grad)" />
  <path d="M42 24 H56 V27 H42 Z" fill="url(#fav-d-grad)" />
  <path d="M42 89 H56 V92 H42 Z" fill="url(#fav-d-grad)" />

  <!-- Dynamic stream lines -->
  <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill="url(#fav-stream-grad)" />
  <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill="url(#fav-stream-grad)" />
  <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill="#6B5CF6" />

  <!-- Radiant Spark -->
  <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill="#FFFFFF" filter="url(#fav-glow)" />
  <circle cx="39" cy="14" r="1.8" fill="#A89BFF" />
  <circle cx="34" cy="24" r="1.5" fill="#6B5CF6" />
</svg>`;

// Write Favicon SVG to both /public/logo/favicon.svg, /public/favicon.svg, and app/icon.svg
fs.writeFileSync(path.join(logoDir, 'favicon.svg'), faviconSvg, 'utf8');
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');
fs.writeFileSync(path.join(appDir, 'icon.svg'), faviconSvg, 'utf8');
console.log('✓ favicon.svg written to public/logo, public/, and app/icon.svg');

async function generateAll() {
  const faviconBuffer = Buffer.from(faviconSvg);

  // 1. 512x512 PWA Favicon PNG
  await sharp(faviconBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(logoDir, 'favicon-512.png'));
  await sharp(faviconBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(appDir, 'icon.png'));
  console.log('✓ 512x512 favicon-512.png & app/icon.png created');

  // 2. 180x180 Apple Touch Icon
  await sharp(faviconBuffer)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('✓ 180x180 app/apple-icon.png created');

  // 3. Multi-layer 48x48 / 32x32 / 16x16 Favicon ICO
  // Sharp can output crisp 32x32 or 48x48 PNG and we copy to favicon.ico
  const ico32Buffer = await sharp(faviconBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico32Buffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32Buffer);
  console.log('✓ app/favicon.ico and public/favicon.ico updated with brand mark!');

  // 4. Generate True 4K Ultra-Resolution Logo PNGs
  const markSvg = fs.readFileSync(path.join(logoDir, 'logo-mark.svg'));
  await sharp(markSvg)
    .resize(2048, 2048)
    .png({ quality: 100 })
    .toFile(path.join(logoDir, 'logo-mark-4k.png'));
  console.log('✓ 2048x2048 logo-mark-4k.png created');

  const stackedSvg = fs.readFileSync(path.join(logoDir, 'logo-stacked-dark.svg'));
  await sharp(stackedSvg)
    .resize(2600, 1700)
    .png({ quality: 100 })
    .toFile(path.join(logoDir, 'logo-stacked-dark-4k.png'));
  console.log('✓ 2600x1700 logo-stacked-dark-4k.png created');

  const fullDarkSvg = fs.readFileSync(path.join(logoDir, 'logo-full-dark.svg'));
  await sharp(fullDarkSvg)
    .resize(3800, 900)
    .png({ quality: 100 })
    .toFile(path.join(logoDir, 'logo-full-dark-4k.png'));
  console.log('✓ 3800x900 logo-full-dark-4k.png created');
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
