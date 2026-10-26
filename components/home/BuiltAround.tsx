'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';

import { DARK_BLUR_DATA_URL } from '@/lib/constants';

export const BuiltAround: React.FC = () => {
  return (
    <section id="built-around" className="relative py-24 sm:py-32 bg-[#05060A] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5B5BF0]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="01" text="ABOUT DHARA" />
              <AnimatedHeading
                plainText="Built around"
                accentText="the experience."
                size="section"
                className="mb-8"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
                DHARA Event Pvt. Ltd. is a full-service event management and production company focused on creating, managing and executing sports events, corporate experiences, weddings, entertainment programmes and large-scale live events.
              </p>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed mb-10">
                From planning and creative development to production, branding, hospitality, catering, logistics and on-ground execution, DHARA brings complete event capabilities together.
              </p>
            </Reveal>

            {/* Steps indicator */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                <span className="text-white/70">PLAN</span>
                <span className="text-[#7C6CF5]">→</span>
                <span className="text-white/70">PRODUCE</span>
                <span className="text-[#7C6CF5]">→</span>
                <span className="text-white/70">MANAGE</span>
                <span className="text-[#7C6CF5]">→</span>
                <span className="text-white/70">EXECUTE</span>
                <span className="text-[#7C6CF5]">→</span>
                <span className="text-[#7C6CF5]">DELIVER</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image with floating card */}
          <div className="lg:col-span-7 relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/11] sm:aspect-[16/10] shadow-2xl group">
                <Image
                  src="/images/capability-audiovisual.jpg"
                  alt="DHARA Event Production Console"
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating card at bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-6 left-6 p-5 sm:p-6 rounded-xl bg-[#0E1020]/90 backdrop-blur-xl border border-white/10 max-w-xs shadow-2xl"
                >
                  <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#7C6CF5] block mb-1">
                    A COMPLETE EVENT EXPERIENCE
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-normal">
                    From concept to execution.
                  </h4>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
