'use client';

import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { SERVICES_ACCORDION, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const ServicesAccordion: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden border-t border-white/[0.08]">
      {/* 4K Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-luxury-backdrop.jpg"
          alt="Event Services Infrastructure"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/90 to-[#05060A]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="06" text="EVENT SERVICES" />
              <AnimatedHeading
                plainText="Everything behind"
                accentText="the experience."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                From production and technical infrastructure to branding, hospitality, entertainment and logistics, DHARA brings the essential elements of event execution together.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Accordion Component */}
        <Reveal delay={0.25}>
          <Accordion items={SERVICES_ACCORDION} defaultOpenId="01" />
        </Reveal>
      </div>
    </section>
  );
};
