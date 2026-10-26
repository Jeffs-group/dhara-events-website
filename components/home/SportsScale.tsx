'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SPORTS_SCALE_STEPS, SPORTS_TAGS, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const SportsScale: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#05060A] overflow-hidden">
      {/* Background Stadium Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/large-scale-stadium.jpg"
          alt="Stadium Atmosphere"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/85 to-[#05060A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#05060A]/70 to-[#05060A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel number="05" text="SPORTS & LARGE-SCALE EVENTS" />
            <AnimatedHeading
              plainText="Built for events"
              accentText="of every scale."
              size="section"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              DHARA provides end-to-end sports event management for leagues, tournaments, championships, competitions and large-scale sporting programmes.
            </p>
          </Reveal>
        </div>

        {/* 8-step Timeline (Horizontal with scroll on mobile) */}
        <div className="mb-14 overflow-x-auto pb-6 scrollbar-none">
          <div className="min-w-[760px] relative">
            {/* Connecting line */}
            <div className="absolute top-[18px] left-4 right-4 h-[1px] bg-white/10 z-0" />

            <div className="grid grid-cols-8 gap-4 relative z-10">
              {SPORTS_SCALE_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Dot */}
                  <div className="w-9 h-9 rounded-full bg-[#0E1020] border border-white/20 flex items-center justify-center mb-3 group-hover:border-[#7C6CF5] group-hover:shadow-[0_0_12px_#7C6CF5] transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C6CF5]" />
                  </div>

                  {/* Step ID */}
                  <span className="text-[10px] text-[#7C6CF5] font-semibold tracking-widest uppercase mb-1">
                    {step.id}
                  </span>

                  {/* Title */}
                  <span className="text-xs font-medium text-white/80 tracking-wider uppercase group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Tag Pills */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-6 border-t border-white/[0.08]">
            {SPORTS_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-light text-white/70 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
