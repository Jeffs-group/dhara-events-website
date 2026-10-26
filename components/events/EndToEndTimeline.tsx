'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { END_TO_END_TIMELINE } from '@/lib/constants';

export const EndToEndTimeline: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden border-t border-white/[0.08]">
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

        {/* 11-Step Interactive Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {END_TO_END_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group p-5 rounded-xl bg-[#0E1020] border border-white/10 hover:border-[#7C6CF5]/40 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#7C6CF5] tracking-widest">
                  {item.id}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C6CF5] opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-white group-hover:text-amber-100 transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#7C6CF5] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
