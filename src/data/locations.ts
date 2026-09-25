import type { Location } from "@/types";

export const LOCATIONS: Location[] = [
  {
    city: "Eugene",
    slug: "eugene-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97401", "97402", "97403", "97404", "97405"],
    driveTime: "10–15 minutes",
    driveMiles: 7,
    lat: 44.0521,
    lng: -123.0868,
    neighborhoods: [
      { name: "Downtown Eugene", note: "High density of retail and restaurant fleet wrap inquiries" },
      { name: "Whiteaker", note: "Creative businesses, food trucks, and independent operators" },
      { name: "South Eugene", note: "Residential and professional services corridor" },
      { name: "West Eugene", note: "Industrial and manufacturing fleet operators" },
      { name: "Amazon District", note: "Commercial and service businesses along Amazon Pkwy" },
    ],
    landmarks: [
      "University of Oregon",
      "Lane County Fairgrounds",
      "Eugene Airport (EUG)",
      "Autzen Stadium",
      "5th Street Public Market",
    ],
    popularServiceSlugs: ["fleet-wraps", "commercial-vehicle-lettering", "van-wraps", "storefront-signage"],
    intro:
      "Blue Rose Wraps & Graphics serves the entire Eugene metro from our Springfield shop — just 7 miles and 10–15 minutes from downtown Eugene. Eugene's mix of University District businesses, West Eugene industrial operators, and a thriving food and creative scene means strong demand for both commercial fleet wraps and high-quality personal vehicle wraps.",
    body: `Eugene is Lane County's largest city and the commercial center of the entire region. For vehicle wrap and graphics work, that translates to a wide range of clients: HVAC, plumbing, and electrical contractors operating fleet vehicles throughout the city; food truck operators who understand that their truck's exterior IS their brand; retail businesses needing storefront window graphics; University-area businesses needing professional vehicle lettering; and private enthusiasts building custom daily drivers.

We serve every ZIP code in the Eugene metro — 97401 through 97405 and beyond. Most Eugene clients drop their vehicles at our Springfield shop (3436 Olympic St, Suite 300) for a 3–5 day install, or we can arrange on-site lettering and simple graphic applications for fleet clients with large numbers of vehicles.

**Why Eugene businesses choose Blue Rose Wraps:** We understand the Eugene market. The combination of independent business culture, University-area brand-consciousness, and a strong trades sector means we've wrapped everything from electricians' vans to food truck exteriors to custom personal builds, all within this community.`,
    metaTitle: "Vehicle Wraps & Graphics in Eugene, OR | Blue Rose Wraps",
    metaDescription: "Professional vehicle wraps, fleet graphics, and custom signage in Eugene, OR. 10 minutes from Springfield. Full wraps, fleet programs, storefront signs. Call (541) 520-3807.",
  },

  {
    city: "Springfield",
    slug: "springfield-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97477", "97478"],
    driveTime: "We're here",
    driveMiles: 0,
    lat: 44.0462,
    lng: -122.9995,
    neighborhoods: [
      { name: "Downtown Springfield", note: "Our home base — 3436 Olympic St, Suite 300" },
      { name: "Gateway District", note: "High-traffic commercial corridor along Gateway St" },
      { name: "North Springfield", note: "Industrial operators and trades fleets" },
      { name: "Mohawk area", note: "Service businesses and contractor fleets" },
    ],
    landmarks: [
      "Willamalane Park",
      "Springfield Utility Board",
      "PeaceHealth Riverbend Hospital",
      "Gateway Mall area",
      "Oregon 126 corridor",
    ],
    popularServiceSlugs: ["full-vehicle-wraps", "fleet-wraps", "color-change-wraps", "storefront-signage"],
    intro:
      "Blue Rose Wraps & Graphics is located right here in Springfield at 3436 Olympic St, Suite 300. Springfield is our home market — we know the business landscape, the industrial corridors, and the community. Zero drive time. Drop off and pick up at our shop.",
    body: `Springfield is where we live and work. Our shop at 3436 Olympic St (Suite 300) serves Springfield businesses and residents directly, and our central location on the Eugene–Springfield corridor means we're equally accessible to clients from both cities.

Springfield's economy includes a significant industrial and manufacturing base, a strong trades sector (construction, HVAC, landscaping, plumbing), the PeaceHealth Riverbend hospital campus, and a growing small-business community. We've built a strong local client base across all of these categories.

**Springfield fleet clients in particular:** the industrial and trades businesses operating out of North Springfield and the Olympic/Gateway corridors need durable, professional fleet graphics that can withstand Pacific Northwest weather conditions. We use premium cast vinyl and UV-protective laminates on every commercial job because we know what the Oregon coast climate does to budget vinyl films over a 3-year period.

For personal vehicle wraps, Springfield residents have full access to every service we offer — color change wraps, partial wraps, chrome delete, custom graphics — same quality as any project we do for commercial clients.`,
    metaTitle: "Vehicle Wraps & Graphics in Springfield, OR | Blue Rose Wraps",
    metaDescription: "Blue Rose Wraps & Graphics is based in Springfield, OR (3436 Olympic St, Suite 300). Full wraps, fleet graphics, custom decals. Your local wrap shop. Call (541) 520-3807.",
  },

  {
    city: "Santa Clara",
    slug: "santa-clara-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97404"],
    driveTime: "15–20 minutes",
    driveMiles: 10,
    lat: 44.0852,
    lng: -123.1107,
    neighborhoods: [
      { name: "Santa Clara Road corridor", note: "Primary commercial strip" },
    ],
    landmarks: ["Santa Clara High School", "Fern Ridge Road corridor"],
    popularServiceSlugs: ["fleet-wraps", "partial-wraps", "vehicle-graphics-decals"],
    intro:
      "Santa Clara is a northwest Eugene unincorporated community with a growing commercial and residential population. Blue Rose Wraps serves Santa Clara clients from our Springfield shop — approximately 15–20 minutes east on OR-126.",
    body: `Santa Clara's location along the River Road and Santa Clara Road corridors supports a mix of small businesses, home services operators, and light commercial activity. Many Santa Clara-area trades businesses (landscaping, irrigation, property management) choose us for their fleet lettering and partial wrap programs.

Getting to our Springfield shop from Santa Clara: take OR-126 East (Gateway) approximately 10 miles — easy direct route with no major congestion outside of peak hours.`,
    metaTitle: "Vehicle Wraps & Fleet Graphics in Santa Clara, OR | Blue Rose Wraps",
    metaDescription: "Vehicle wraps and commercial fleet graphics serving Santa Clara, OR from our Springfield shop (15–20 min). Full wraps, partial wraps, lettering. Call (541) 520-3807.",
  },

  {
    city: "Coburg",
    slug: "coburg-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97408"],
    driveTime: "20–25 minutes",
    driveMiles: 14,
    lat: 44.1385,
    lng: -123.0614,
    neighborhoods: [],
    landmarks: ["Coburg Antiques Row", "I-5 corridor access"],
    popularServiceSlugs: ["fleet-wraps", "commercial-vehicle-lettering", "box-truck-wraps"],
    intro:
      "Coburg sits along I-5 north of Eugene with a well-known antique district and light industrial activity. Blue Rose Wraps serves Coburg clients from our Springfield shop, about 20–25 minutes south.",
    body: `Coburg's proximity to I-5 makes it a natural hub for businesses that need vehicle branding visible to highway traffic. Box truck wraps, van wraps, and commercial vehicle lettering are the most common requests from Coburg operators.

Route to our shop: I-5 South to OR-126 East — straightforward, no surface road congestion.`,
    metaTitle: "Vehicle Wraps & Commercial Graphics in Coburg, OR | Blue Rose Wraps",
    metaDescription: "Vehicle wraps and commercial vehicle graphics serving Coburg, OR from our Springfield shop. Fleet wraps, box truck wraps, lettering. Call (541) 520-3807.",
  },

  {
    city: "Lowell",
    slug: "lowell-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97452"],
    driveTime: "30–35 minutes",
    driveMiles: 21,
    lat: 43.9101,
    lng: -122.7829,
    neighborhoods: [],
    landmarks: ["Lookout Point Reservoir", "Fall Creek Reservoir"],
    popularServiceSlugs: ["fleet-wraps", "vehicle-graphics-decals", "partial-wraps"],
    intro:
      "Lowell is a small Lane County community southeast of Springfield along the Row River. We serve Lowell area clients from our Springfield shop — about 30–35 minutes via OR-58 or the Row River Road corridor.",
    body: `Lowell-area clients typically include outdoor and recreation-related businesses, small trades contractors, and agriculture-adjacent services. Partial wraps and commercial vehicle lettering are the most cost-effective starting points for smaller operations in rural communities.`,
    metaTitle: "Vehicle Wraps Serving Lowell, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Vehicle wraps, partial wraps, and commercial lettering serving Lowell, OR from our Springfield shop (30 min). Call (541) 520-3807.",
  },

  {
    city: "Veneta",
    slug: "veneta-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97487"],
    driveTime: "30–35 minutes",
    driveMiles: 22,
    lat: 44.0424,
    lng: -123.3496,
    neighborhoods: [],
    landmarks: ["Fern Ridge Reservoir", "Oregon Country Fair grounds"],
    popularServiceSlugs: ["fleet-wraps", "partial-wraps", "commercial-vehicle-lettering"],
    intro:
      "Veneta is a west Lane County community 22 miles from our Springfield shop, about 30–35 minutes via OR-126 West. The community supports local businesses, agricultural operations, and outdoor recreation services.",
    body: `Veneta clients reach our Springfield shop by taking OR-126 East — a straightforward direct route. For businesses in the Veneta area considering fleet wraps or vehicle lettering, we offer competitive quotes that account for travel time on your end. For larger fleet programs, we can arrange phased installation schedules that minimize your operating disruption.`,
    metaTitle: "Vehicle Wraps Serving Veneta, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Vehicle wraps and commercial graphics serving Veneta, OR. 30 minutes to our Springfield shop. Competitive quotes for local businesses. Call (541) 520-3807.",
  },

  {
    city: "Creswell",
    slug: "creswell-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97426"],
    driveTime: "20–25 minutes",
    driveMiles: 17,
    lat: 43.9188,
    lng: -123.0239,
    neighborhoods: [],
    landmarks: ["Creswell Airport", "I-5 South corridor"],
    popularServiceSlugs: ["fleet-wraps", "van-wraps", "commercial-vehicle-lettering"],
    intro:
      "Creswell is a growing I-5 community 17 miles south of Springfield. Accessible via I-5 North to our shop in approximately 20–25 minutes. Strong trades and light-industrial presence in the local economy.",
    body: `Creswell's location between Springfield and Cottage Grove along I-5 makes it a natural fit for our service area. Contractors, delivery businesses, and service companies operating in the Creswell area frequently bring fleet vehicles to our shop for wraps and lettering.`,
    metaTitle: "Vehicle Wraps Serving Creswell, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Fleet wraps, van wraps, and vehicle lettering serving Creswell, OR (20 min to Springfield). Call Blue Rose Wraps at (541) 520-3807.",
  },

  {
    city: "Harrisburg",
    slug: "harrisburg-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Linn County",
    zipCodes: ["97446"],
    driveTime: "30–35 minutes",
    driveMiles: 23,
    lat: 44.2688,
    lng: -123.1731,
    neighborhoods: [],
    landmarks: ["Willamette River access", "OR-99E corridor"],
    popularServiceSlugs: ["fleet-wraps", "commercial-vehicle-lettering", "box-truck-wraps"],
    intro:
      "Harrisburg is a Linn County community 23 miles north of our Springfield shop, accessible via I-5 North or OR-99E. Agricultural services, construction, and light manufacturing businesses in the area regularly use our fleet wrap and commercial lettering services.",
    body: `Harrisburg sits in the Willamette Valley agricultural corridor where farm equipment dealers, agricultural services companies, and construction contractors all need professional vehicle branding. Box truck wraps and van lettering are the most common request from Harrisburg-area businesses.`,
    metaTitle: "Vehicle Wraps Serving Harrisburg, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Commercial vehicle wraps and fleet lettering serving Harrisburg, OR (30 min to Springfield). Ag, construction, and service businesses welcome. Call (541) 520-3807.",
  },

  {
    city: "Cottage Grove",
    slug: "cottage-grove-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97424"],
    driveTime: "25–30 minutes",
    driveMiles: 20,
    lat: 43.7974,
    lng: -123.0584,
    neighborhoods: [],
    landmarks: ["Coast Fork Willamette River", "Bohemia Mining District", "Row River Trail"],
    popularServiceSlugs: ["full-vehicle-wraps", "color-change-wraps", "fleet-wraps"],
    intro:
      "Cottage Grove is a Lane County community 20 miles south of our Springfield shop, about 25–30 minutes via I-5 North. Strong consumer vehicle wrap demand alongside commercial fleet business in this community.",
    body: `Cottage Grove has a proud local identity and a community that values unique, well-built things — qualities that translate to genuine enthusiasm for custom vehicle wraps. Consumer vehicle wraps (color changes, custom graphics, partial wraps on personal vehicles) are especially popular with Cottage Grove clients, alongside commercial van and truck lettering for local businesses.

Getting to our shop: I-5 North to OR-126 East, about 25–30 minutes door to door.`,
    metaTitle: "Vehicle Wraps in Cottage Grove, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Custom vehicle wraps, color changes, and fleet graphics serving Cottage Grove, OR. 25 minutes to our Springfield shop. Call (541) 520-3807.",
  },

  {
    city: "Junction City",
    slug: "junction-city-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97448"],
    driveTime: "30–35 minutes",
    driveMiles: 22,
    lat: 44.2188,
    lng: -123.2078,
    neighborhoods: [],
    landmarks: ["Junction City Scandinavian Festival", "OR-99W corridor"],
    popularServiceSlugs: ["fleet-wraps", "commercial-vehicle-lettering", "van-wraps"],
    intro:
      "Junction City is a Lane County agricultural community 22 miles northwest of our Springfield shop. Agricultural, landscaping, and light-industrial businesses in the Junction City area are regular fleet wrap clients.",
    body: `Junction City's OR-99W corridor supports agriculture-related businesses, nurseries, and landscaping operations that all benefit from professionally branded fleet vehicles. A well-wrapped landscaping trailer or nursery van is immediately recognizable to the residential neighborhoods these businesses serve.`,
    metaTitle: "Vehicle Wraps Serving Junction City, OR | Blue Rose Wraps & Graphics",
    metaDescription: "Fleet wraps and vehicle lettering serving Junction City, OR (30 min to Springfield). Agricultural and commercial businesses welcome. Call (541) 520-3807.",
  },

  {
    city: "North Springfield",
    slug: "north-springfield-or",
    state: "Oregon",
    stateAbbr: "OR",
    county: "Lane County",
    zipCodes: ["97477"],
    driveTime: "5 minutes",
    driveMiles: 3,
    lat: 44.0669,
    lng: -123.0055,
    neighborhoods: [
      { name: "Q Street industrial corridor", note: "High density of trades and manufacturing businesses" },
      { name: "Jasper Road area", note: "Contractor and home services operators" },
    ],
    landmarks: ["North Springfield industrial district", "Mohawk Boulevard corridor"],
    popularServiceSlugs: ["fleet-wraps", "van-wraps", "box-truck-wraps", "commercial-vehicle-lettering"],
    intro:
      "North Springfield is our nearest neighbor — just 3 miles and 5 minutes from our shop at 3436 Olympic St. The North Springfield industrial corridor is home to dozens of trades and manufacturing businesses, many of which we serve with fleet wraps and commercial vehicle lettering.",
    body: `North Springfield's industrial zone along Q Street and the Mohawk corridor is one of the most dense concentrations of commercial vehicle operators in our entire service area. HVAC companies, plumbing contractors, electrical firms, restoration companies, and manufacturing businesses all operate here — and all of them benefit from professionally branded fleet vehicles.

Because of the proximity, we're the natural first call for any North Springfield fleet operator. Same-day assessments and fast turnaround on lettering jobs are routinely available for North Springfield clients.`,
    metaTitle: "Vehicle Wraps & Fleet Graphics in North Springfield, OR | Blue Rose Wraps",
    metaDescription: "Just 5 minutes from Blue Rose Wraps in Springfield. Fleet wraps, box truck wraps, van lettering for North Springfield industrial businesses. Call (541) 520-3807.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
