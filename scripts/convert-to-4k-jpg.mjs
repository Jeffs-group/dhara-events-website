import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public/images';

const HEROES = [
  'hero-dramatic-hall',
  'hero-multi-event',
  'cta-cinematic-strip',
];

const CARDS_AND_SECTIONS = [
  'production-team-console',
  'sports-stadium-card',
  'corporate-stage-card',
  'wedding-card',
  'entertainment-musicians-strip',
  'event-production',
  'events-sports',
  'events-corporate',
  'events-weddings',
  'events-entertainment',
];

async function convertImages() {
  console.log('Converting images to 4K / 2400px high-resolution JPGs...');

  for (const name of HEROES) {
    const pngPath = path.join(imagesDir, `${name}.png`);
    const jpgPath = path.join(imagesDir, `${name}.jpg`);

    if (fs.existsSync(pngPath)) {
      const metadata = await sharp(pngPath).metadata();
      const currentWidth = metadata.width || 1440;
      const targetWidth = 3840;
      const targetHeight = Math.round((metadata.height / currentWidth) * targetWidth);

      await sharp(pngPath)
        .resize(targetWidth, targetHeight, {
          kernel: sharp.kernel.lanczos3,
          fit: 'cover',
        })
        .jpeg({
          quality: 95,
          mozjpeg: true,
          chromaSubsampling: '4:4:4',
        })
        .toFile(jpgPath);

      console.log(`✓ Created 3840px Hero: ${name}.jpg (${targetWidth}x${targetHeight})`);
    } else {
      console.warn(`! Not found: ${pngPath}`);
    }
  }

  for (const name of CARDS_AND_SECTIONS) {
    const pngPath = path.join(imagesDir, `${name}.png`);
    const jpgPath = path.join(imagesDir, `${name}.jpg`);

    if (fs.existsSync(pngPath)) {
      const metadata = await sharp(pngPath).metadata();
      const currentWidth = metadata.width || 800;
      const targetWidth = 2400;
      const targetHeight = Math.round((metadata.height / currentWidth) * targetWidth);

      await sharp(pngPath)
        .resize(targetWidth, targetHeight, {
          kernel: sharp.kernel.lanczos3,
          fit: 'cover',
        })
        .jpeg({
          quality: 95,
          mozjpeg: true,
          chromaSubsampling: '4:4:4',
        })
        .toFile(jpgPath);

      console.log(`✓ Created 2400px Card/Section: ${name}.jpg (${targetWidth}x${targetHeight})`);
    } else {
      console.warn(`! Not found: ${pngPath}`);
    }
  }

  console.log('Done converting images.');
}

convertImages().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
