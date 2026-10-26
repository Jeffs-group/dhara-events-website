import sharp from 'sharp';
import path from 'path';

const brainDir = 'C:/Users/dell/.gemini/antigravity-ide/brain/9df29408-80be-4fe1-b77c-50aeb57e864c';

const files = [
  'WhatsApp Image 2026-10-26 at 2.13.06 PM.jpeg',
  'Home.png',
  'About Us.png',
  'Event.png',
  'contact.png'
];

async function run() {
  for (const f of files) {
    const p = path.join(brainDir, f);
    const meta = await sharp(p).metadata();
    console.log(`${f}: ${meta.width}x${meta.height}, format: ${meta.format}, channels: ${meta.channels}`);
  }
}

run().catch(console.error);
