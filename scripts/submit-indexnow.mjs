/**
 * IndexNow URL submission script.
 * Usage: node scripts/submit-indexnow.mjs
 *
 * Submits all site URLs to Bing, Yandex, and other IndexNow-compatible
 * search engines for near-instant indexing.
 *
 * Run after each deploy or whenever new pages go live.
 */

const SITE_URL = "https://www.bluerosewrapsandgraphics.com";
const INDEXNOW_KEY = "7e3f2a8b6c1d4e9f0a5b8c3d2e7f1a4b";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// All static pages
const staticUrls = [
  `${SITE_URL}/`,
  `${SITE_URL}/services/`,
  `${SITE_URL}/locations/`,
  `${SITE_URL}/portfolio/`,
  `${SITE_URL}/about/`,
  `${SITE_URL}/faq/`,
  `${SITE_URL}/get-a-quote/`,
  `${SITE_URL}/contact/`,
];

// Service page slugs — keep in sync with src/data/services.ts
const serviceSlugs = [
  "full-vehicle-wraps",
  "color-change-wraps",
  "partial-wraps",
  "fleet-vehicle-wraps",
  "commercial-truck-wraps",
  "van-wraps",
  "car-decals-and-stickers",
  "racing-stripes",
  "custom-graphics",
  "window-graphics",
  "storefront-signage",
  "yard-signs-and-banners",
  "paint-protection-film",
  "chrome-delete",
  "vehicle-lettering",
  "graphic-design",
  "wrap-installation",
];

// Location page slugs — keep in sync with src/data/locations.ts
const locationSlugs = [
  "eugene-or",
  "springfield-or",
  "santa-clara-or",
  "coburg-or",
  "lowell-or",
  "veneta-or",
  "creswell-or",
  "harrisburg-or",
  "cottage-grove-or",
  "junction-city-or",
  "north-springfield-or",
];

const serviceUrls = serviceSlugs.map((s) => `${SITE_URL}/services/${s}/`);
const locationUrls = locationSlugs.map((l) => `${SITE_URL}/locations/${l}/`);

const allUrls = [...staticUrls, ...serviceUrls, ...locationUrls];

// IndexNow endpoints (all accept the same payload format)
const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function submitToIndexNow() {
  const payload = {
    host: "www.bluerosewrapsandgraphics.com",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: allUrls,
  };

  console.log(`\nSubmitting ${allUrls.length} URLs to IndexNow...\n`);

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const engine = new URL(endpoint).hostname;
      if (res.ok || res.status === 202) {
        console.log(`✅  ${engine} — ${res.status} ${res.statusText}`);
      } else {
        const body = await res.text().catch(() => "");
        console.warn(`⚠️  ${engine} — ${res.status} ${res.statusText} ${body}`);
      }
    } catch (err) {
      console.error(`❌  ${endpoint} — ${err.message}`);
    }
  }

  console.log("\nDone. URLs submitted:");
  allUrls.forEach((u) => console.log(`  ${u}`));
}

submitToIndexNow();
