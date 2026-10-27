'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ABOUT_DELIVERY_STEPS, DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const HowWeDeliver: React.FC = () => {
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
    <section className="relative py-28 sm:py-36 bg-[#05060A] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/large-scale-stadium.jpg"
          alt="How DHARA Delivers Events"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/85 to-[#05060A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel number="04" text="HOW WE DELIVER" />
            <AnimatedHeading
              plainText="From first idea"
              accentText="to final execution."
              size="section"
            />
          </Reveal>
        </div>

        {/* 5-Step Horizontal Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline background track (desktop) */}
          <div className="hidden lg:block absolute top-4 left-6 right-6 h-[2px] bg-white/10 z-0" />

          {/* Horizontal line draws on scroll */}
          <motion.div
            style={{ scaleX: lineScaleX }}
            className="hidden lg:block absolute top-4 left-6 right-6 h-[2px] bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] origin-left z-0 will-change-transform shadow-[0_0_12px_#6B5CF6]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {ABOUT_DELIVERY_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: BRAND_EASE }}
                className="group relative flex flex-col"
              >
                {/* Dot & Light-up indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    initial={{ scale: 0.8, borderColor: 'rgba(255,255,255,0.15)' }}
                    whileInView={{
                      scale: 1,
                      borderColor: '#6B5CF6',
                      boxShadow: '0 0 16px rgba(107,92,246,0.6)',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2 + idx * 0.12, duration: 0.5 }}
                    className="w-8 h-8 rounded-full bg-[#0E1020] border flex items-center justify-center transition-all flex-shrink-0"
                  >
                    <motion.span
                      initial={{ scale: 0.4, opacity: 0.3 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + idx * 0.12, duration: 0.4 }}
                      className="w-2 h-2 rounded-full bg-[#6B5CF6]"
                    />
                  </motion.div>
                  <span className="lg:hidden text-xs uppercase tracking-widest text-[#6B5CF6] font-semibold">
                    STEP {item.step}
                  </span>
                </div>

                {/* Big Step Number: lights up in turn */}
                <motion.span
                  initial={{ opacity: 0.3, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.12, duration: 0.5, ease: BRAND_EASE }}
                  className="hidden lg:block font-serif text-4xl text-[#6B5CF6] font-medium mb-3 group-hover:text-[#A89BFF] transition-colors"
                >
                  {item.step}
                </motion.span>

                {/* Step Name */}
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-2">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
