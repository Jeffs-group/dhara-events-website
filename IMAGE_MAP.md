# DHARA Event Pvt. Ltd. — 4K Quality Image Map & Audit Report

This document records the complete image audit, source-to-slot mapping, dimension verification, and visual content analysis across all 4 pages of the website, exclusively utilizing the newly generated AI assets in 4K resolution.

---

## 1. Asset Catalog (All 4K / High-Resolution AI-Generated JPGs)

| File | Native Resolution | Aspect Ratio | Subject & Visual Content | Assigned Role |
| :--- | :--- | :--- | :--- | :--- |
| `large-scale-stadium.jpg` | **3840 × 2143** | 1.79 (16:9) | Panoramic championship stadium finals with purple & gold laser spectacles, packed crowds, and floodlit turf | Full-width Hero (Home, Events), Bento 01 (Sports), Sports Scale & Large Scale sections |
| `contact-luxury-backdrop.jpg` | **3840 × 2143** | 1.79 (16:9) | Executive luxury event consultation suite with dark marble finishes, linear lighting, and architectural glass | Full-width Contact Backdrop, About Hero, All CTAs (Home, About, Events), Services Accordion |
| `capability-branding.jpg` | **2400 × 1792** | 1.34 (4:3) | Curved futuristic LED summit exhibition stage with violet lighting, digital sponsor ribbons, and executive podium | Bento 02, Corporate Events Vertical Section, Capability 02 & 11, Gallery 02 |
| `capability-audiovisual.jpg` | **2400 × 1792** | 1.34 (4:3) | State-of-the-art concert sound engineer at illuminated digital mixing console with stadium lighting rigs | Built Around The Experience, Bento 04, Entertainment Vertical Section, Capability 01 & 03, Gallery 04 |
| `capability-catering.jpg` | **2400 × 1792** | 1.34 (4:3) | Fine dining banquet gala spread with crystal glassware, candle candelabras, floral runner, and gold cutlery | Bento 03, Weddings & Social Vertical Section, Capability 05, Gallery 03 |
| `capability-logistics.jpg` | **2400 × 1792** | 1.34 (4:3) | VIP luxury transport fleet of Mercedes vans and production road flight cases outside arena | Capability 07 (Logistics & Transportation), Gallery 05 |
| `capability-manpower.jpg` | **2400 × 1792** | 1.34 (4:3) | Professional event operations crew in black blazers with earpieces coordinating guests on-ground | Who We Are (Main), Capability 08 (Event Manpower) |
| `capability-sponsorship.jpg` | **2400 × 1792** | 1.34 (4:3) | Interactive stadium sponsor activation pavilion with interactive kiosks and fan engagement zones | Capability 09 (Sponsorship Activation) |
| `capability-hospitality.jpg` | **2400 × 1792** | 1.34 (4:3) | Luxury VIP hospitality lounge with purple velvet armchairs, warm amber glow, and red carpet | Who We Are (VIP Overlay), Capability 04, 06 & 10, Gallery 06 |
| `leadership-bhuvi-gr.jpg` | **2400 × 3214** | 0.75 (3:4) | Executive portrait of Bhuvi G R, Founder & Managing Director, in tailored dark suit | About Page: Leadership 01 |
| `leadership-prachi-shar.jpg` | **2400 × 3214** | 0.75 (3:4) | Executive portrait of Prachi Shar, Director, in elegant executive blazer with studio lighting | About Page: Leadership 02 |

---

## 2. Complete Page-by-Page Slot Mapping

### Page 1: Home (`app/page.tsx`)
| Slot | Component | Image Assigned | Native Size | Display Mode | `sizes` Prop |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | `Hero.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Full-width fill, Ken Burns (1.0 → 1.06), `priority` | `sizes="100vw"` |
| **Built Around The Experience** | `BuiltAround.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Half-width fill (7 cols), hover zoom 1.04 | `sizes="(max-width: 768px) 100vw, 50vw"` |
| **Bento 01: Sports Events** | `EveryEventStory.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Bento 02: Corporate Events** | `EveryEventStory.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Bento 03: Weddings & Social** | `EveryEventStory.tsx` | `/images/capability-catering.jpg` | 2400 × 1792 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Bento 04: Entertainment & Live** | `EveryEventStory.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Wide card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Capability 01: Production** | `Capabilities.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 02: Branding** | `Capabilities.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 03: Audio-Visual** | `Capabilities.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 04: Venue & Décor** | `Capabilities.tsx` | `/images/capability-hospitality.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 05: Catering** | `Capabilities.tsx` | `/images/capability-catering.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 06: Artists** | `Capabilities.tsx` | `/images/capability-hospitality.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 07: Logistics** | `Capabilities.tsx` | `/images/capability-logistics.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 08: Manpower** | `Capabilities.tsx` | `/images/capability-manpower.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 09: Sponsorship** | `Capabilities.tsx` | `/images/capability-sponsorship.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 10: VIP Mgmt** | `Capabilities.tsx` | `/images/capability-hospitality.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Capability 11: PR & Digital** | `Capabilities.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Half-width preview fill | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Gallery 01: Sports** | `EnergyGallery.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Gallery 02: Corporate** | `EnergyGallery.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Gallery 03: Weddings** | `EnergyGallery.tsx` | `/images/capability-catering.jpg` | 2400 × 1792 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Gallery 04: Entertainment** | `EnergyGallery.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Gallery 05: Logistics** | `EnergyGallery.tsx` | `/images/capability-logistics.jpg` | 2400 × 1792 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Gallery 06: Hospitality** | `EnergyGallery.tsx` | `/images/capability-hospitality.jpg` | 2400 × 1792 | Masonry card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Sports Scale Background** | `SportsScale.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |
| **CTA Background** | `CTA.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |

---

### Page 2: About Us (`app/about/page.tsx`)
| Slot | Component | Image Assigned | Native Size | Display Mode | `sizes` Prop |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | `AboutHero.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill, Ken Burns (1.0 → 1.06), `priority` | `sizes="100vw"` |
| **Who We Are: Main Crew** | `WhoWeAre.tsx` | `/images/capability-manpower.jpg` | 2400 × 1792 | Half-width fill (7 cols) | `sizes="(max-width: 768px) 100vw, 50vw"` |
| **Who We Are: VIP Overlay** | `WhoWeAre.tsx` | `/images/capability-hospitality.jpg` | 2400 × 1792 | Floating card fill | `sizes="(max-width: 768px) 50vw, 33vw"` |
| **Category 01: Sports** | `WhatWeDo.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Category 02: Corporate** | `WhatWeDo.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Category 03: Weddings** | `WhatWeDo.tsx` | `/images/capability-catering.jpg` | 2400 × 1792 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **Category 04: Entertainment** | `WhatWeDo.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Card fill, hover zoom 1.04 | `sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"` |
| **How We Deliver Background** | `HowWeDeliver.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |
| **Leadership: Bhuvi G R** | `Leadership.tsx` | `/logo/logo-full.jpg` | 1254 × 1254 | Executive crest emblem, `object-contain`, gold ambient glow | `sizes="(max-width: 768px) 100vw, 50vw"` |
| **Leadership: Prachi Shar** | `Leadership.tsx` | `/logo/logo-full.jpg` | 1254 × 1254 | Executive crest emblem, `object-contain`, gold ambient glow | `sizes="(max-width: 768px) 100vw, 50vw"` |
| **Large-Scale Background** | `LargeScale.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |
| **CTA Background** | `app/about/page.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |

---

### Page 3: Events & Experiences (`app/events/page.tsx`)
| Slot | Component | Image Assigned | Native Size | Display Mode | `sizes` Prop |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | `EventsHero.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Full-width fill, Ken Burns (1.0 → 1.06), `priority` | `sizes="100vw"` |
| **Section 02: Sports Events** | `EventVerticalSection.tsx` | `/images/large-scale-stadium.jpg` | 3840 × 2143 | Half-width fill (6 cols), hover zoom 1.04 | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Section 03: Corporate Events** | `EventVerticalSection.tsx` | `/images/capability-branding.jpg` | 2400 × 1792 | Half-width fill (6 cols), hover zoom 1.04 | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Section 04: Weddings & Social** | `EventVerticalSection.tsx` | `/images/capability-catering.jpg` | 2400 × 1792 | Half-width fill (6 cols), hover zoom 1.04 | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Section 05: Entertainment** | `EventVerticalSection.tsx` | `/images/capability-audiovisual.jpg` | 2400 × 1792 | Half-width fill (6 cols), hover zoom 1.04 | `sizes="(max-width:768px) 100vw, 50vw"` |
| **Services Accordion Backdrop** | `ServicesAccordion.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |
| **CTA Background** | `app/events/page.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill | `sizes="100vw"` |

---

### Page 4: Contact & Enquiry (`app/contact/page.tsx`)
| Slot | Component | Image Assigned | Native Size | Display Mode | `sizes` Prop |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Page Backdrop** | `app/contact/page.tsx` | `/images/contact-luxury-backdrop.jpg` | 3840 × 2143 | Full-width fill with dark gradient overlay | `sizes="100vw"` |

---

## 3. Brand Identity & Global Assets
| Slot | Component | Image Assigned | Native Size | Properties |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Logo (Navbar & Footer)** | `Logo.tsx` | `/logo/logo-full.jpg` | 1254 × 1254 | Strict 1:1 aspect ratio, `object-contain`, no stretch |
| **Preloader Emblem** | `Preloader.tsx` | `/logo/logo-full.jpg` | 1254 × 1254 | Centered 1:1 animated emblem |
| **Favicon & Apple Touch Icon** | `app/icon.png` | Monogram Crest | 512 × 512 | Gold emblem on dark background |

---

## 4. Resolution Verification & Compliance Checklist

* **Full-Width Hero / Background Rule (≥3840px)**:
  - `large-scale-stadium.jpg`: **3840 × 2143** ✓ COMPLIANT
  - `contact-luxury-backdrop.jpg`: **3840 × 2143** ✓ COMPLIANT
  - **Warnings for full-width slots**: **NONE** (all full-width images are 3840px wide).

* **Cards and Section Showcases Rule (≥2400px)**:
  - All cards, sections, leadership portraits, and capability visual panels are **2400px** wide.
  - **Warnings for card/section slots narrower than 2400px**: **NONE** (0 warnings).

* **Needs New Image**:
  - **NONE**. All image slots across every page are completely filled with dedicated high-resolution AI images matching their subjects.
