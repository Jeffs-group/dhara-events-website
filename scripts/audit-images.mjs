import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA/public/images';
const files = fs.readdirSync(dir);

async function audit() {
  const results = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    try {
      const meta = await sharp(fullPath).metadata();
      results.push({
        file,
        format: meta.format,
        width: meta.width,
        height: meta.height,
        aspectRatio: (meta.width / meta.height).toFixed(2),
        sizeKB: Math.round(fs.statSync(fullPath).size / 1024),
      });
    } catch (err) {
      results.push({ file, error: err.message });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

audit();
