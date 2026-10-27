'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { END_TO_END_TIMELINE } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const EndToEndTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'center center'],
  });

  const progressScaleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="07" text="COMPLETE EVENT DELIVERY" />
              <AnimatedHeading
                plainText="One event. One team."
                accentText="End to end."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                DHARA provides turnkey event solutions covering planning, creative development, production, execution, branding, technical arrangements, entertainment, catering, hospitality, logistics and post-event services.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Scroll-Drawn Progress Bar at Top of Timeline Grid */}
        <div className="relative mb-10">
          <div className="w-full h-[2px] bg-white/10 rounded-full" />
          <motion.div
            style={{ scaleX: progressScaleX }}
            className="absolute inset-0 h-[2px] bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] rounded-full origin-left shadow-[0_0_12px_#6B5CF6]"
          />
        </div>

        {/* 12-Step Interactive Flow: Steps light up sequentially */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {END_TO_END_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: BRAND_EASE }}
              className="group p-5 rounded-xl bg-[#0E1020] border border-white/10 hover:border-[#6B5CF6]/60 hover:shadow-[0_0_25px_rgba(107,92,246,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#6B5CF6] tracking-widest">
                  {item.id}
                </span>
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.06, duration: 0.4 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#6B5CF6] shadow-[0_0_6px_#6B5CF6] group-hover:scale-125 transition-all"
                />
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-white group-hover:text-[#A89BFF] transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#6B5CF6] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
