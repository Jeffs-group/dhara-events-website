import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/dell/Desktop/Jeff\'s Group/DHARA';

const searchDirs = ['app', 'components', 'lib'];
const fileList = [];

function walk(dir) {
  const full = path.join(projectRoot, dir);
  if (!fs.existsSync(full)) return;
  for (const item of fs.readdirSync(full)) {
    const itemPath = path.join(full, item);
    if (fs.statSync(itemPath).isDirectory()) {
      walk(path.join(dir, item));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.css')) {
      fileList.push(path.join(dir, item));
    }
  }
}

searchDirs.forEach(walk);

const table = [];

for (const relFile of fileList) {
  const full = path.join(projectRoot, relFile);
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineIdx) => {
    // Check for next/image src, img src, url(), or background-image
    if (line.includes('src=') || line.includes('image:') || line.includes('bgImage') || line.includes('url(') || line.includes('<img')) {
      // Look for matches
      const imgMatch = line.match(/(['"`])(\/[^'"`]+\.(?:png|jpg|jpeg|webp|svg)|https?:\/\/[^'"`]+)\1/);
      if (imgMatch) {
        table.push({
          file: relFile.replace(/\\/g, '/'),
          lineNumber: lineIdx + 1,
          slotHint: line.trim(),
          source: imgMatch[2],
        });
      }
    }
  });
}

console.log(JSON.stringify(table, null, 2));
