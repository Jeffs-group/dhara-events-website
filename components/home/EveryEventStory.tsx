'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { HOME_BENTO, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const EveryEventStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="02" text="WHAT WE DO" />
              <AnimatedHeading
                plainText="Every event"
                accentText="has a story."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                From sporting competitions to corporate gatherings, celebrations and live entertainment, DHARA creates experiences designed around the occasion, audience and scale.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {HOME_BENTO.map((item, idx) => {
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`${item.colSpan} group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 sm:p-8 hover:border-[#7C6CF5]/40 transition-colors duration-500 shadow-xl`}
              >
                <Link href={item.href} className="absolute inset-0 z-30" aria-label={item.title} />

                {/* Background Image */}
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
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/70 to-[#05060A]/30 transition-opacity duration-300 group-hover:opacity-85" />
                </div>

                {/* Top Corner: Number Watermark & Arrow */}
                <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
                  <span className="font-serif text-3xl sm:text-4xl text-white/40 group-hover:text-white/80 transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-[#7C6CF5] group-hover:bg-[#5B5BF0] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10 max-w-xl">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3 group-hover:text-amber-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
