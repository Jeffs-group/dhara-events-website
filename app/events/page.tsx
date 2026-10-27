import React from 'react';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { EventsHero } from '@/components/events/EventsHero';
import { EventVerticalSection } from '@/components/events/EventVerticalSection';
import { ServicesAccordion } from '@/components/events/ServicesAccordion';
import { EndToEndTimeline } from '@/components/events/EndToEndTimeline';
import { CTA } from '@/components/home/CTA';
import { EVENTS_SECTIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore DHARA Event Pvt. Ltd. portfolio across Sports Events, Corporate Conventions, Luxury Weddings & Social Galas, and Live Entertainment Concerts.',
};

export default function EventsPage() {
  return (
    <PageTransition>
      <EventsHero />

      {/* 4 Alternating Vertical Sections */}
      {EVENTS_SECTIONS.map((section, idx) => (
        <EventVerticalSection
          key={section.id}
          data={section}
          isFirst={idx === 0}
        />
      ))}

      {/* Services Breakdown Accordion */}
      <ServicesAccordion />

      {/* 11-Step Delivery Flow */}
      <EndToEndTimeline />

      {/* CTA Section */}
      <CTA
        labelNumber="08"
        labelText="LET'S CREATE SOMETHING"
        plainHeading="Have an event"
        accentHeading="in mind?"
        description="Tell us what you're planning. Let's build the experience around it."
        bgImage="/images/contact-luxury-backdrop.jpg"
      />
    </PageTransition>
  );
}
