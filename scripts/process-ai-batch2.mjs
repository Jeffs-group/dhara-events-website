import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/dell/.gemini/antigravity-ide/brain/9df29408-80be-4fe1-b77c-50aeb57e864c';
const destDir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public/images';

const newBatch = [
  {
    prefix: 'large_scale_stadium_',
    destName: 'large-scale-stadium.jpg',
    width: 3840,
  },
  {
    prefix: 'contact_luxury_backdrop_',
    destName: 'contact-luxury-backdrop.jpg',
    width: 3840,
  },
  {
    prefix: 'capability_audiovisual_',
    destName: 'capability-audiovisual.jpg',
    width: 2400,
  },
  {
    prefix: 'capability_manpower_',
    destName: 'capability-manpower.jpg',
    width: 2400,
  },
  {
    prefix: 'capability_logistics_',
    destName: 'capability-logistics.jpg',
    width: 2400,
  },
  {
    prefix: 'capability_sponsorship_',
    destName: 'capability-sponsorship.jpg',
    width: 2400,
  },
];

async function processBatch() {
  const files = fs.readdirSync(brainDir);

  for (const item of newBatch) {
    const match = files.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
    if (!match) {
      console.warn(`No match found for prefix: ${item.prefix}`);
      continue;
    }

    const srcPath = path.join(brainDir, match);
    const destPath = path.join(destDir, item.destName);

    const metadata = await sharp(srcPath).metadata();
    const targetWidth = item.width;
    const targetHeight = Math.round((metadata.height / metadata.width) * targetWidth);

    await sharp(srcPath)
      .resize(targetWidth, targetHeight, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover',
      })
      .jpeg({
        quality: 95,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toFile(destPath);

    console.log(`✓ Processed and saved ${item.destName} (${targetWidth}x${targetHeight})`);
  }
}

processBatch().catch(console.error);
