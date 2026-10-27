'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const WhoWeAre: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxMain = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-25, 25]
  );

  const parallaxVip = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [35, -35]
  );

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
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
                <span className="text-[#6B5CF6]">•</span>
                <span className="text-white/80">PRODUCTION</span>
                <span className="text-[#6B5CF6]">•</span>
                <span className="text-white/80">EXECUTION</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Two Overlapping Images entering from opposite sides with parallax */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[540px]">
            {/* Main Stage Image: Enters from right */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: BRAND_EASE }}
              style={{ y: parallaxMain }}
              className="relative ml-auto w-full sm:w-[85%] rounded-2xl overflow-hidden border border-white/10 aspect-[16/11] shadow-2xl will-change-transform bg-[#0E1020]"
            >
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
            </motion.div>

            {/* Overlapping VIP Card: Enters from left with different parallax speed */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: BRAND_EASE }}
              style={{ y: parallaxVip }}
              className="absolute left-0 bottom-0 sm:-bottom-6 w-[65%] sm:w-[50%] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0E1020] will-change-transform"
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

              {/* Hospitality & VIP Label: Slides in */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6, ease: BRAND_EASE }}
                className="absolute bottom-4 left-4 right-4 z-10"
              >
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/95 block bg-[#05060A]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  HOSPITALITY & VIP
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
