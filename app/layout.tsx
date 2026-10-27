import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { Preloader } from '@/components/layout/Preloader';
import { CONTACT_INFO } from '@/lib/constants';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dharaevents.com'),
  title: {
    default: 'DHARA Event Pvt. Ltd. | Creating Experiences. Delivering Excellence.',
    template: '%s | DHARA Events',
  },
  description:
    'DHARA Event Pvt. Ltd. is a full-service event management and production company in India delivering sports events, corporate experiences, luxury weddings, and entertainment programmes from concept to execution.',
  keywords: [
    'DHARA Event Pvt Ltd',
    'Event Management India',
    'Sports Event Management',
    'Corporate Events Bangalore',
    'Luxury Wedding Planner',
    'Live Concert Production',
    'Event Production Company',
    'Bhuvi G R',
  ],
  authors: [{ name: 'DHARA Event Pvt. Ltd.' }],
  creator: 'DHARA Event Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dharaevents.com',
    siteName: 'DHARA Event Pvt. Ltd.',
    title: 'DHARA Event Pvt. Ltd. | Creating Experiences. Delivering Excellence.',
    description:
      'Full-service event management and production company delivering sports, corporate, weddings, and entertainment experiences from concept to execution.',
    images: [
      {
        url: '/logo/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DHARA Event Pvt. Ltd.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHARA Event Pvt. Ltd. | Creating Experiences. Delivering Excellence.',
    description:
      'Premier event management and production delivering sports, corporate, wedding, and entertainment experiences.',
    images: ['/logo/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logo/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo/favicon.svg',
    apple: '/logo/favicon-512.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EventPlanner', 'LocalBusiness', 'Organization'],
    name: 'DHARA Event Pvt. Ltd.',
    alternateName: 'DHARA Events',
    url: 'https://dharaevents.com',
    logo: 'https://dharaevents.com/logo/logo-mark.svg',
    image: 'https://dharaevents.com/logo/og-image.png',
    description:
      'Full-service event management and production company delivering sports events, corporate experiences, luxury weddings, and entertainment programmes from concept to execution.',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Bhuvi G R',
      jobTitle: 'Founder & Managing Director',
    },
    sameAs: [
      CONTACT_INFO.whatsappUrl,
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/favicon-512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#05060A] text-white font-sans antialiased selection:bg-[#5B5BF0] selection:text-white" suppressHydrationWarning>
        <SmoothScroll>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
