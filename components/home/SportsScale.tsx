'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SPORTS_SCALE_STEPS, SPORTS_TAGS, DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const SportsScale: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'center center'],
  });

  const lineScaleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <section ref={containerRef} className="relative py-28 sm:py-36 bg-[#05060A] overflow-hidden">
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
        <div ref={timelineRef} className="mb-14 overflow-x-auto pb-6 scrollbar-none">
          <div className="min-w-[760px] relative">
            {/* Background line track */}
            <div className="absolute top-[18px] left-6 right-6 h-[2px] bg-white/10 z-0" />

            {/* Connecting line draws as you scroll */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="absolute top-[18px] left-6 right-6 h-[2px] bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] origin-left z-0 will-change-transform shadow-[0_0_10px_#6B5CF6]"
            />

            <div className="grid grid-cols-8 gap-4 relative z-10">
              {SPORTS_SCALE_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: BRAND_EASE }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Marker: lights up in sequence */}
                  <motion.div
                    initial={{ scale: 0.8, borderColor: 'rgba(255,255,255,0.15)' }}
                    whileInView={{
                      scale: 1,
                      borderColor: '#6B5CF6',
                      boxShadow: '0 0 16px rgba(107,92,246,0.6)',
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="w-9 h-9 rounded-full bg-[#0E1020] border flex items-center justify-center mb-3 transition-colors"
                  >
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0.4 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + idx * 0.1, duration: 0.4 }}
                      className="w-2.5 h-2.5 rounded-full bg-[#6B5CF6]"
                    />
                  </motion.div>

                  {/* Step ID */}
                  <span className="text-[10px] text-[#6B5CF6] font-semibold tracking-widest uppercase mb-1">
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
                className="px-4 py-2 rounded-full text-xs font-light text-white/70 bg-white/[0.04] border border-white/[0.08] hover:border-[#6B5CF6]/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
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
