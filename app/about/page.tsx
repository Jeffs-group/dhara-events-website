import React from 'react';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAre } from '@/components/about/WhoWeAre';
import { WhatWeDo } from '@/components/about/WhatWeDo';
import { HowWeDeliver } from '@/components/about/HowWeDeliver';
import { Leadership } from '@/components/about/Leadership';
import { LargeScale } from '@/components/about/LargeScale';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About Us | DHARA Event Pvt. Ltd.',
  description:
    'Learn about DHARA Event Pvt. Ltd., our leadership under Bhuvi G R and Prachi Shar, our 5-step delivery process, and our turnkey event management capabilities.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeDeliver />
      <Leadership />
      <LargeScale />
      <CTA
        labelNumber="07"
        labelText="LET'S TALK"
        plainHeading="Let's create"
        accentHeading="something memorable."
        description="Planning an event? Talk to DHARA about your next experience."
        bgImage="/images/contact-luxury-backdrop.jpg"
      />
    </PageTransition>
  );
}
