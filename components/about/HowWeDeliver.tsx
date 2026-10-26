'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ABOUT_DELIVERY_STEPS, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const HowWeDeliver: React.FC = () => {
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
        <div className="relative">
          {/* Timeline connecting bar (desktop) */}
          <div className="hidden lg:block absolute top-4 left-6 right-6 h-[1px] bg-white/15 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {ABOUT_DELIVERY_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative flex flex-col"
              >
                {/* Dot */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#0E1020] border border-white/20 flex items-center justify-center group-hover:border-[#7C6CF5] group-hover:shadow-[0_0_12px_#7C6CF5] transition-all flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#7C6CF5]" />
                  </div>
                  <span className="lg:hidden text-xs uppercase tracking-widest text-[#7C6CF5] font-semibold">
                    STEP {item.step}
                  </span>
                </div>

                {/* Big Step Number */}
                <span className="hidden lg:block font-serif text-4xl text-[#7C6CF5] font-medium mb-3">
                  {item.step}
                </span>

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
