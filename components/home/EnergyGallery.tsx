'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { GALLERY_ITEMS, DARK_BLUR_DATA_URL } from '@/lib/constants';
import { clipPathReveal, staggerFast } from '@/lib/animations';

export const EnergyGallery: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="04" text="EVENT EXPERIENCES" />
              <AnimatedHeading
                plainText="The energy"
                accentText="of the event."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-xs sm:text-sm text-white/40 font-light leading-relaxed">
                Category imagery only. These scenes are illustrative and are not represented as DHARA projects.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Masonry Layout: Items stagger in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerFast}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.number}
              variants={clipPathReveal}
              className={`${item.span} group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] min-h-[260px] sm:min-h-[290px] flex flex-col justify-between p-6 hover:border-[#6B5CF6]/60 hover:shadow-[0_0_25px_rgba(107,92,246,0.3)] transition-all duration-500 shadow-xl`}
            >
              {/* Background Image: zooms to 1.04 on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Balanced dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/45 to-transparent transition-opacity duration-300 group-hover:opacity-85" />
              </div>

              {/* Top Watermark */}
              <div className="relative z-10 flex justify-end">
                <span className="font-serif text-3xl sm:text-4xl text-white/50 group-hover:text-white/90 transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Bottom Label and Arrow with caption sliding up */}
              <div className="relative z-10 flex items-center justify-between gap-3 pt-6 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-[#6B5CF6] group-hover:bg-[#6B5CF6] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
