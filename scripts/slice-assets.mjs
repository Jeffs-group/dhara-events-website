import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const brainDir = 'C:/Users/dell/.gemini/antigravity-ide/brain/9df29408-80be-4fe1-b77c-50aeb57e864c';
const publicDir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public';

// Ensure directories exist
fs.mkdirSync(path.join(publicDir, 'images'), { recursive: true });
fs.mkdirSync(path.join(publicDir, 'logo'), { recursive: true });

async function processLogo() {
  const logoPath = path.join(brainDir, 'WhatsApp Image 2026-10-26 at 2.13.06 PM.jpeg');
  
  // 1. Copy original
  await sharp(logoPath)
    .resize(1000, 1000)
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'logo/dhara-logo-original.webp'));

  // 2. Extract emblem monogram 'D' (top half)
  await sharp(logoPath)
    .extract({ left: 320, top: 100, width: 620, height: 500 })
    .resize(500, 400)
    .png()
    .toFile(path.join(publicDir, 'logo/dhara-emblem.png'));

  // 3. Extract full crest + text centered
  await sharp(logoPath)
    .extract({ left: 80, top: 80, width: 1090, height: 950 })
    .resize(800, 700)
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, 'logo/dhara-logo-badge.webp'));

  // 4. Create favicon icon
  await sharp(logoPath)
    .extract({ left: 340, top: 110, width: 580, height: 480 })
    .resize(192, 192, { fit: 'contain', background: { r: 5, g: 6, b: 10, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'logo/icon-192.png'));

  await sharp(logoPath)
    .extract({ left: 340, top: 110, width: 580, height: 480 })
    .resize(32, 32, { fit: 'contain', background: { r: 5, g: 6, b: 10, alpha: 1 } })
    .png()
    .toFile('c:/Users/dell/Desktop/Jeff\'s Group/DHARA/app/icon.png');

  console.log('✓ Logo processed successfully');
}

async function extractFromHome() {
  const homePath = path.join(brainDir, 'Home.png');
  const img = sharp(homePath);

  // Hero BG: 0 to 860
  await sharp(homePath)
    .extract({ left: 0, top: 0, width: 1440, height: 860 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/hero-home.webp'));

  // Built Around the experience: ~1100 to 1800
  await sharp(homePath)
    .extract({ left: 590, top: 1180, width: 770, height: 520 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/home-built-around.webp'));

  // Bento 01: Sports Events (left column top)
  await sharp(homePath)
    .extract({ left: 80, top: 2600, width: 620, height: 580 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/bento-sports.webp'));

  // Bento 02: Corporate Events (right column top)
  await sharp(homePath)
    .extract({ left: 740, top: 2600, width: 620, height: 275 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/bento-corporate.webp'));

  // Bento 03: Weddings & Social (right column bottom)
  await sharp(homePath)
    .extract({ left: 740, top: 2905, width: 620, height: 275 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/bento-weddings.webp'));

  // Bento 04: Entertainment & Live (bottom wide)
  await sharp(homePath)
    .extract({ left: 80, top: 3210, width: 1280, height: 290 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/bento-entertainment.webp'));

  // Capabilities image
  await sharp(homePath)
    .extract({ left: 590, top: 4120, width: 770, height: 520 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/capabilities-production.webp'));

  // Gallery: 6 items
  // 01: left top
  await sharp(homePath)
    .extract({ left: 80, top: 5250, width: 280, height: 280 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-1.webp'));

  // 02: center top
  await sharp(homePath)
    .extract({ left: 390, top: 5250, width: 500, height: 280 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-2.webp'));

  // 03: right tall
  await sharp(homePath)
    .extract({ left: 920, top: 5250, width: 440, height: 590 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-3.webp'));

  // 04: left bottom
  await sharp(homePath)
    .extract({ left: 80, top: 5560, width: 380, height: 280 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-4.webp'));

  // 05: center bottom
  await sharp(homePath)
    .extract({ left: 490, top: 5560, width: 400, height: 420 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-5.webp'));

  // 06: right bottom
  await sharp(homePath)
    .extract({ left: 920, top: 5870, width: 440, height: 240 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/gallery-6.webp'));

  // Sports scale stadium background
  await sharp(homePath)
    .extract({ left: 0, top: 6450, width: 1440, height: 600 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/sports-scale-stadium.webp'));

  // Home CTA bg
  await sharp(homePath)
    .extract({ left: 0, top: 7100, width: 1440, height: 400 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/cta-bg.webp'));

  console.log('✓ Home assets extracted successfully');
}

async function extractFromAbout() {
  const aboutPath = path.join(brainDir, 'About Us.png');

  // Hero BG
  await sharp(aboutPath)
    .extract({ left: 0, top: 0, width: 1440, height: 650 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/hero-about.webp'));

  // Who We Are: main stage image + VIP image
  await sharp(aboutPath)
    .extract({ left: 580, top: 960, width: 780, height: 540 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/about-who-main.webp'));

  await sharp(aboutPath)
    .extract({ left: 490, top: 1120, width: 330, height: 440 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/about-who-vip.webp'));

  // Leadership 1: Bhuvi G R
  await sharp(aboutPath)
    .extract({ left: 80, top: 4330, width: 620, height: 440 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/leader-bhuvi.webp'));

  // Leadership 2: Prachi Shar
  await sharp(aboutPath)
    .extract({ left: 740, top: 4330, width: 620, height: 440 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/leader-prachi.webp'));

  // How We Deliver background
  await sharp(aboutPath)
    .extract({ left: 0, top: 3550, width: 1440, height: 500 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/how-we-deliver-bg.webp'));

  console.log('✓ About assets extracted successfully');
}

async function extractFromEvents() {
  const eventsPath = path.join(brainDir, 'Event.png');

  // Hero BG
  await sharp(eventsPath)
    .extract({ left: 0, top: 0, width: 1440, height: 750 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/hero-events.webp'));

  // Sports section image
  await sharp(eventsPath)
    .extract({ left: 80, top: 1100, width: 620, height: 600 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/events-sports.webp'));

  // Corporate section image
  await sharp(eventsPath)
    .extract({ left: 740, top: 2000, width: 620, height: 600 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/events-corporate.webp'));

  // Weddings section image
  await sharp(eventsPath)
    .extract({ left: 80, top: 2900, width: 620, height: 600 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/events-weddings.webp'));

  // Entertainment section image
  await sharp(eventsPath)
    .extract({ left: 740, top: 3800, width: 620, height: 600 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/events-entertainment.webp'));

  // Events CTA bg
  await sharp(eventsPath)
    .extract({ left: 0, top: 6800, width: 1440, height: 450 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/events-cta-bg.webp'));

  console.log('✓ Events assets extracted successfully');
}

async function main() {
  await processLogo();
  await extractFromHome();
  await extractFromAbout();
  await extractFromEvents();
  console.log('🎉 All assets successfully extracted and prepared!');
}

main().catch(console.error);
