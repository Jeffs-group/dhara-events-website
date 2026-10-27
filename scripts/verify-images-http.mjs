import http from 'http';

const assets = [
  '/images/large-scale-stadium.jpg',
  '/images/contact-luxury-backdrop.jpg',
  '/images/capability-branding.jpg',
  '/images/capability-catering.jpg',
  '/images/capability-hospitality.jpg',
  '/images/capability-audiovisual.jpg',
  '/images/capability-manpower.jpg',
  '/images/capability-logistics.jpg',
  '/images/capability-sponsorship.jpg',
  '/logo/logo-full-dark.svg',
  '/logo/logo-full-light.svg',
  '/logo/logo-stacked-dark.svg',
  '/logo/logo-mark.svg',
  '/logo/favicon.svg',
  '/logo/favicon-512.png',
  '/logo/og-image.png',
];

function checkAsset(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3002${urlPath}`, (res) => {
      resolve({ path: urlPath, status: res.statusCode, contentType: res.headers['content-type'] });
    }).on('error', (err) => {
      resolve({ path: urlPath, error: err.message });
    });
  });
}

async function verifyAll() {
  console.log('Testing asset availability on dev server (http://localhost:3002)...');
  const results = await Promise.all(assets.map(checkAsset));
  let allPass = true;
  for (const r of results) {
    if (r.status !== 200) {
      console.error(`FAIL: ${r.path} -> ${r.status || r.error}`);
      allPass = false;
    } else {
      console.log(`✓ 200 OK: ${r.path} (${r.contentType})`);
    }
  }
  if (allPass) {
    console.log(`\n✓ ALL ${assets.length} ASSETS RETURNED 200 OK! Zero 404s.`);
  }
}

verifyAll();
