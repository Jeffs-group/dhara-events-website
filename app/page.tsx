import React from 'react';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { Hero } from '@/components/home/Hero';
import { BuiltAround } from '@/components/home/BuiltAround';
import { EveryEventStory } from '@/components/home/EveryEventStory';
import { Capabilities } from '@/components/home/Capabilities';
import { EnergyGallery } from '@/components/home/EnergyGallery';
import { SportsScale } from '@/components/home/SportsScale';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'DHARA Event Pvt. Ltd. | Creating Experiences. Delivering Excellence. Full-service event management and production company in India across sports, corporate, weddings, and live entertainment.',
};

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <BuiltAround />
      <EveryEventStory />
      <Capabilities />
      <EnergyGallery />
      <SportsScale />
      <CTA />
    </PageTransition>
  );
}
