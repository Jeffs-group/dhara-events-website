'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { LEADERSHIP_PROFILES, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const Leadership: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleBio = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel number="05" text="LEADERSHIP" />
            <AnimatedHeading
              plainText="The people"
              accentText="behind DHARA."
              size="section"
            />
          </Reveal>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {LEADERSHIP_PROFILES.map((leader, idx) => {
            const isExpanded = expandedId === leader.id;

            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] flex flex-col justify-between hover:border-[#7C6CF5]/30 transition-all duration-300 shadow-2xl"
              >
                {/* Photo container */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#070913] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,108,245,0.12),transparent_70%)] pointer-events-none" />
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    quality={90}
                    placeholder="blur"
                    blurDataURL={DARK_BLUR_DATA_URL}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={
                      leader.image.includes('/logo/')
                        ? 'object-contain p-10 sm:p-14 transition-transform duration-700 group-hover:scale-105'
                        : 'object-cover transition-transform duration-700 group-hover:scale-[1.04]'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1020] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Tag badge top */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50 bg-[#05060A]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {leader.tag}
                    </span>
                  </div>
                </div>

                {/* Details at bottom */}
                <div className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                      {leader.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#7C6CF5] font-medium mb-6">
                    {leader.role}
                  </p>

                  {/* Read biography accordion toggle */}
                  <div className="border-t border-white/[0.08] pt-4">
                    <button
                      type="button"
                      onClick={() => toggleBio(leader.id)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer group/btn"
                      aria-expanded={isExpanded}
                    >
                      <span>Read biography</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 text-[#7C6CF5]" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                            {leader.bio}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
