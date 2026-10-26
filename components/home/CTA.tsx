'use client';

import React from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';

interface CTAProps {
  labelNumber?: string;
  labelText?: string;
  plainHeading?: string;
  accentHeading?: string;
  description?: string;
  bgImage?: string;
}

export const CTA: React.FC<CTAProps> = ({
  labelNumber = '07',
  labelText = 'PLAN WITH DHARA',
  plainHeading = "Let's create",
  accentHeading = 'something memorable.',
  description = 'Planning a sports event, corporate experience, celebration or large-scale live programme? Talk to DHARA.',
  bgImage = '/images/contact-luxury-backdrop.jpg',
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#05060A] overflow-hidden border-t border-white/[0.08]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Create Memorable Events with DHARA"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-[#05060A]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel number={labelNumber} text={labelText} />
            <AnimatedHeading
              plainText={plainHeading}
              accentText={accentHeading}
              size="section"
              className="mb-6"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Button href="/contact" variant="primary" icon="arrow-right">
                Plan an event
              </Button>
              <Button href="/contact" variant="secondary" icon="none">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
