# DHARA Event Pvt. Ltd. — Production Website

A complete, production-ready, fully responsive, animated multi-page website built for **DHARA Event Pvt. Ltd.** ("Creating Experiences. Delivering Excellence."). 

Designed with pixel-level precision matching the official Figma designs:
- **Home Page**: Concept to execution, bento grid showcases, interactive capabilities, energy masonry gallery, and sports scale solutions.
- **About Us Page**: Brand narrative, core pillars, 5-step delivery methodology, executive leadership profiles (Bhuvi G R & Prachi Shar) with expandable biographies, and complex event infrastructure.
- **Events & Experiences Page**: 4 alternating vertical showcases (Sports Events, Corporate Conventions, Weddings & Social Galas, Entertainment & Live Concerts), 7-item expandable service accordion, and 11-step end-to-end timeline.
- **Contact Page**: Two-column layout with real-time validated enquiry form, direct phone/WhatsApp channel, email enquiries, and FormSubmit AJAX integration.

---

## 1. Tech Stack

- **Framework**: [Next.js 16+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript (strict type safety)
- **Styling**: Tailwind CSS with custom theme tokens & glassmorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (60fps viewport triggers, stagger effects, magnetic interactions, and accordion height transitions)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis) (cinematic momentum scrolling with `prefers-reduced-motion` detection)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: `Playfair Display` (editorial serif headings with italic violet accents) + `Inter` (high-legibility body) via `next/font`
- **Forms & Validation**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **Image Optimization**: `next/image` at 4K quality (`quality={90}`), 3840px heroes, 2400px cards/sections, responsive `sizes`, AVIF/WebP formats, deviceSizes up to 3840px, and zero missing images (documented in `IMAGE_MAP.md`)

---

## 2. Design System Tokens

- **Theme**: Dark, cinematic, high-end luxury
- **Background**: `#05060A` / `#0A0B12`
- **Surface / Cards**: `#0E1020` with `1px border rgba(255, 255, 255, 0.08)`
- **Primary Accent Gradient**: Indigo-violet `#5B5BF0` → `#7C6CF5` (used on pill buttons, active indicators, and italic heading accents)
- **Gold Brand Accent**: `#D4AF37` → `#F5D77A` (used in monogram crest, badges, and highlights)
- **Text**: Pure white (`#FFFFFF`) / Muted white (`rgba(255, 255, 255, 0.65)`)
- **Typography**:
  - Headings: `font-serif` (`Playfair Display`), with italic keywords highlighted in `#7C6CF5`.
  - Section Labels: Small uppercase tracked text with number divider (`01 —— ABOUT DHARA`).

---

## 3. Project Structure

```text
DHARA/
├── app/
│   ├── about/
│   │   └── page.tsx           # About Us page
│   ├── contact/
│   │   └── page.tsx           # Contact & enquiry page
│   ├── events/
│   │   └── page.tsx           # Events & services page
│   ├── globals.css            # Dark theme, glassmorphism, scrollbars
│   ├── icon.png               # High-res favicon mark
│   ├── layout.tsx             # Root layout, Google fonts, JSON-LD schema
│   ├── page.tsx               # Home page
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic sitemap.xml
├── components/
│   ├── about/                 # AboutHero, WhoWeAre, WhatWeDo, HowWeDeliver, Leadership, LargeScale
│   ├── contact/               # EnquiryForm
│   ├── events/                # EventsHero, EventVerticalSection, ServicesAccordion, EndToEndTimeline
│   ├── home/                  # Hero, BuiltAround, EveryEventStory, Capabilities, EnergyGallery, SportsScale, CTA
│   ├── layout/                # Navbar, Footer, MobileMenu, SmoothScroll, ScrollProgress, WhatsAppButton, PageTransition
│   └── ui/                    # Button, SectionLabel, Reveal, AnimatedHeading, Accordion, Counter, Logo
├── lib/
│   ├── animations.ts          # Framer Motion variants & easing definitions
│   ├── constants.ts           # Centralized site copy, metadata, and structured data
│   └── validations.ts         # Zod schema for enquiry validation
├── public/
│   ├── images/                # Extracted and WebP-compressed photography
│   └── logo/                  # High-resolution gold monogram & badge
├── tailwind.config.ts         # Custom colors, fonts, keyframes
└── package.json
```

---

## 4. Getting Started Locally

### Prerequisites
- Node.js `v18.18+` or `v20+` (Tested on `v24`)
- npm `v10+`

### Installation
Clone the repository and install dependencies:
```bash
cd DHARA
npm install --legacy-peer-deps
```

### Environment Variables
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_FORMSUBMIT_EMAIL=bhuvighimag@gmail.com
```

### Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal output) to view the site.

### Production Build
```bash
npm run build
npm start
```

---

## 5. Contact Form & FormSubmit Activation

The contact form is configured to submit via AJAX to [FormSubmit.co](https://formsubmit.co) without redirecting the user, providing instant animated feedback.

### Important One-Time Activation Step:
1. When the first enquiry is submitted through the website, FormSubmit sends an **Activation Email** to `bhuvighimag@gmail.com`.
2. Open that email and click the **"Activate Form"** confirmation button.
3. Once confirmed, all future enquiries will arrive directly in your inbox as formatted tables.
4. **Security Tip (Optional)**: After activation, FormSubmit provides a random alphanumeric string (e.g. `https://formsubmit.co/ajax/a1b2c3d4...`). You can update `NEXT_PUBLIC_FORMSUBMIT_EMAIL` in `.env.local` with that alias string to hide your real email address from web scrapers.

---

## 6. Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. In **Environment Variables**, add:
   - `NEXT_PUBLIC_FORMSUBMIT_EMAIL` = `bhuvighimag@gmail.com`
5. Click **Deploy**. Vercel will automatically build the static pages and deploy the site to a global CDN with SSL enabled.

---

## 7. SEO, Schema & Accessibility

- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` tagging.
- **Structured Data**: Inlined JSON-LD for `LocalBusiness`, `Organization`, and `EventVenue` schema.
- **Search Metadata**: Unique `<title>` tags, meta descriptions, OpenGraph tags, and Twitter summary cards per page.
- **Accessibility**: ARIA labels on all interactive controls, visible focus rings, and high contrast ratios meeting WCAG AA standards.
- **Sitemap & Robots**: Pre-configured `/sitemap.xml` and `/robots.txt` for search crawler indexing.

---

© 2026 DHARA Event Pvt. Ltd. All rights reserved.
