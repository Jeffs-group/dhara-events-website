import React from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { Hero } from '@/components/home/Hero';
import { BuiltAround } from '@/components/home/BuiltAround';
import { EveryEventStory } from '@/components/home/EveryEventStory';
import { Capabilities } from '@/components/home/Capabilities';
import { EnergyGallery } from '@/components/home/EnergyGallery';
import { SportsScale } from '@/components/home/SportsScale';
import { CTA } from '@/components/home/CTA';

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
