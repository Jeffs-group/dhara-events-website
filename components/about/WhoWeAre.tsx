'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';

import { DARK_BLUR_DATA_URL } from '@/lib/constants';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="02" text="WHO WE ARE" />
              <AnimatedHeading
                plainText="Built around"
                accentText="the experience."
                size="section"
                className="mb-8"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
                DHARA Event Pvt. Ltd. brings together event management, production, branding, hospitality, catering, logistics and on-ground execution to deliver complete event solutions.
              </p>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed mb-10">
                The company works across sports events, corporate events, weddings and social celebrations, concerts and live entertainment, with capabilities spanning planning, production and execution.
              </p>
            </Reveal>

            {/* Core Pillars */}
            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-white/40 uppercase">
                <span className="text-white/80">PLANNING</span>
                <span className="text-[#7C6CF5]">•</span>
                <span className="text-white/80">PRODUCTION</span>
                <span className="text-[#7C6CF5]">•</span>
                <span className="text-white/80">EXECUTION</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Overlapping Photos */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[540px]">
            {/* Main Stage & Production Photo */}
            <Reveal delay={0.2}>
              <div className="relative ml-auto w-full sm:w-[85%] rounded-2xl overflow-hidden border border-white/10 aspect-[16/11] shadow-2xl">
                <Image
                  src="/images/capability-manpower.jpg"
                  alt="Production and Stage Engineering"
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>

            {/* Overlapping VIP Hospitality Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute left-0 bottom-0 sm:-bottom-6 w-[65%] sm:w-[50%] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0E1020]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/capability-hospitality.jpg"
                  alt="VIP Hospitality and Guest Experience"
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/40 to-transparent" />
              </div>

              {/* VIP Card Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 block">
                  HOSPITALITY & VIP
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
