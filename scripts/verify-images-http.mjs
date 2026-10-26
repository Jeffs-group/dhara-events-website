import http from 'http';

const images = [
  '/images/hero-dramatic-hall.jpg',
  '/images/hero-multi-event.jpg',
  '/images/cta-cinematic-strip.jpg',
  '/images/large-scale-stadium.jpg',
  '/images/contact-luxury-backdrop.jpg',
  '/images/production-team-console.jpg',
  '/images/sports-stadium-card.jpg',
  '/images/corporate-stage-card.jpg',
  '/images/wedding-card.jpg',
  '/images/entertainment-musicians-strip.jpg',
  '/images/event-production.jpg',
  '/images/events-sports.jpg',
  '/images/events-corporate.jpg',
  '/images/events-weddings.jpg',
  '/images/events-entertainment.jpg',
  '/images/leadership-bhuvi-gr.jpg',
  '/images/leadership-prachi-shar.jpg',
  '/images/capability-branding.jpg',
  '/images/capability-catering.jpg',
  '/images/capability-hospitality.jpg',
  '/images/capability-audiovisual.jpg',
  '/images/capability-manpower.jpg',
  '/images/capability-logistics.jpg',
  '/images/capability-sponsorship.jpg',
  '/logo/logo-full.jpg',
];

function checkImage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3002${urlPath}`, (res) => {
      resolve({ path: urlPath, status: res.statusCode, contentType: res.headers['content-type'] });
    }).on('error', (err) => {
      resolve({ path: urlPath, error: err.message });
    });
  });
}

async function verifyAll() {
  console.log('Testing image availability on dev server (http://localhost:3002)...');
  const results = await Promise.all(images.map(checkImage));
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
    console.log('\n✓ ALL 25 IMAGES RETURNED 200 OK! Zero 404s.');
  }
}

verifyAll();
