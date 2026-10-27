'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CAPABILITIES, DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE, staggerFast } from '@/lib/animations';

export const Capabilities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = CAPABILITIES[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="03" text="OUR CAPABILITIES" />
              <AnimatedHeading
                plainText="Everything an event"
                accentText="needs to come to life."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                DHARA brings creative, technical, operational and hospitality capabilities together to deliver complete event solutions.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Content Layout: Left interactive list, Right interactive preview card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: 11-item Capabilities List (staggers in from left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerFast}
            className="lg:col-span-5 divide-y divide-white/[0.08] border-y border-white/[0.08]"
          >
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIndex === idx;

              return (
                <motion.button
                  key={cap.id}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: BRAND_EASE } },
                  }}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full text-left py-4 px-3 sm:px-4 flex items-center justify-between group transition-all duration-300 rounded-lg relative overflow-hidden ${
                    isActive
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Violet Progress Bar on Active Item */}
                  {isActive && (
                    <motion.div
                      layoutId="cap-active-bar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#6B5CF6] shadow-[0_0_12px_#6B5CF6]"
                      transition={{ duration: 0.25, ease: BRAND_EASE }}
                    />
                  )}

                  <div className="flex items-center gap-4 sm:gap-6 pl-2">
                    <span
                      className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                        isActive ? 'text-[#6B5CF6]' : 'text-white/30 group-hover:text-white/60'
                      }`}
                    >
                      {cap.id}
                    </span>
                    <span
                      className={`text-xs sm:text-sm uppercase tracking-wider font-medium transition-all ${
                        isActive ? 'text-white translate-x-1' : ''
                      }`}
                    >
                      {cap.title}
                    </span>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#6B5CF6] scale-100 shadow-[0_0_8px_#6B5CF6]' : 'opacity-0 scale-50'
                    }`}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Column: Dynamic Preview Card with Cross-fading & slight scaling image */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] aspect-[16/11] sm:aspect-[16/10] shadow-2xl flex flex-col justify-end p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: BRAND_EASE }}
                  className="absolute inset-0 z-0 will-change-transform"
                >
                  <Image
                    src={activeCapability.image}
                    alt={activeCapability.heading}
                    fill
                    quality={90}
                    placeholder="blur"
                    blurDataURL={DARK_BLUR_DATA_URL}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/70 to-[#05060A]/30" />
                </motion.div>
              </AnimatePresence>

              {/* Watermark Number */}
              <div className="absolute top-6 right-8 z-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`num-${activeCapability.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-5xl sm:text-6xl text-white/30"
                  >
                    {activeCapability.id}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Dynamic Info at Bottom */}
              <div className="relative z-10 max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeCapability.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: BRAND_EASE }}
                  >
                    <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3">
                      {activeCapability.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      {activeCapability.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
