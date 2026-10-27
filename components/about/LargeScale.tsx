'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { LARGE_SCALE_STEPS, DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const LargeScale: React.FC = () => {
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
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden border-t border-white/[0.08]">
      {/* 4K Stadium Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/large-scale-stadium.jpg"
          alt="Large-scale sports arena event operations"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/85 to-[#05060A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel number="06" text="LARGE-SCALE EVENTS" />
            <AnimatedHeading
              plainText="Ready for"
              accentText="complex events."
              size="section"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              DHARA provides turnkey, end-to-end event solutions for sports leagues, tournaments, corporate events, entertainment programmes and other large-scale events.
            </p>
          </Reveal>
        </div>

        {/* 7-Step Dotted Timeline: Dotted line draws on scroll, dots pulse in sequence */}
        <div ref={timelineRef} className="overflow-x-auto pb-6 scrollbar-none">
          <div className="min-w-[700px] relative">
            {/* Background dotted track */}
            <div className="absolute top-[18px] left-6 right-6 h-[2px] border-t-2 border-dotted border-white/15 z-0" />

            {/* Dotted line draws on scroll */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="absolute top-[18px] left-6 right-6 h-[2px] border-t-2 border-dotted border-[#6B5CF6] origin-left z-0 will-change-transform shadow-[0_0_10px_#6B5CF6]"
            />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {LARGE_SCALE_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: BRAND_EASE }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Dot with Sequential Pulse */}
                  <div className="w-9 h-9 rounded-full bg-[#0E1020] border border-white/20 flex items-center justify-center mb-3 group-hover:border-[#6B5CF6] group-hover:shadow-[0_0_14px_#6B5CF6] transition-all">
                    <motion.span
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              scale: [1, 1.35, 1],
                              opacity: [0.75, 1, 0.75],
                            }
                      }
                      transition={{
                        duration: 2.2,
                        delay: idx * 0.25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-2.5 h-2.5 rounded-full bg-[#6B5CF6] shadow-[0_0_8px_#6B5CF6]"
                    />
                  </div>

                  {/* ID */}
                  <span className="text-[10px] text-[#6B5CF6] font-semibold tracking-widest uppercase mb-1">
                    {step.id}
                  </span>

                  {/* Label */}
                  <span className="text-xs font-medium text-white/80 tracking-wider uppercase group-hover:text-white transition-colors">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
