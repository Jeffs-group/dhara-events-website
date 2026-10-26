import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/dell/.gemini/antigravity-ide/brain/9df29408-80be-4fe1-b77c-50aeb57e864c';
const destDir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public/images';

const newAssets = [
  {
    srcPrefix: 'leadership_prachi_shar_',
    destName: 'leadership-prachi-shar.jpg',
    width: 2400,
  },
  {
    srcPrefix: 'leadership_bhuvi_gr_',
    destName: 'leadership-bhuvi-gr.jpg',
    width: 2400,
  },
  {
    srcPrefix: 'event_branding_stage_',
    destName: 'capability-branding.jpg',
    width: 2400,
  },
  {
    srcPrefix: 'luxury_catering_gala_',
    destName: 'capability-catering.jpg',
    width: 2400,
  },
  {
    srcPrefix: 'vip_hospitality_lounge_',
    destName: 'capability-hospitality.jpg',
    width: 2400,
  },
];

async function processAiImages() {
  const files = fs.readdirSync(brainDir);

  for (const item of newAssets) {
    const match = files.find(f => f.startsWith(item.srcPrefix) && f.endsWith('.jpg'));
    if (!match) {
      console.warn(`No match found for prefix: ${item.srcPrefix}`);
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

processAiImages().catch(console.error);
