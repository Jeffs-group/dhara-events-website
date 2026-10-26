'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';

import { DARK_BLUR_DATA_URL } from '@/lib/constants';

const ABOUT_CATEGORIES = [
  {
    category: 'CATEGORY 01',
    number: '01',
    title: 'Sports Events',
    description: 'Leagues, tournaments, championships, competitions, sporting festivals, exhibitions, opening and closing ceremonies and other sports-related programmes.',
    image: '/images/large-scale-stadium.jpg',
    href: '/events#sports',
    colSpan: 'col-span-12 lg:col-span-6',
  },
  {
    category: 'CATEGORY 02',
    number: '02',
    title: 'Corporate Events',
    description: 'Conferences, seminars, meetings, annual functions, product launches, award ceremonies, dealer meets, employee engagement programmes and corporate celebrations.',
    image: '/images/capability-branding.jpg',
    href: '/events#corporate',
    colSpan: 'col-span-12 lg:col-span-6',
  },
  {
    category: 'CATEGORY 03',
    number: '03',
    title: 'Weddings & Social',
    description: 'Weddings, receptions, engagements, anniversaries, birthdays and social celebrations with planning, décor, entertainment, hospitality, catering and logistics.',
    image: '/images/capability-catering.jpg',
    href: '/events#weddings',
    colSpan: 'col-span-12 lg:col-span-6',
  },
  {
    category: 'CATEGORY 04',
    number: '04',
    title: 'Entertainment & Live',
    description: 'Concerts, musical shows, cultural events, festivals, fashion shows, celebrity events and public programmes.',
    image: '/images/capability-audiovisual.jpg',
    href: '/events#entertainment',
    colSpan: 'col-span-12 lg:col-span-6',
  },
];

export const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="03" text="WHAT WE DO" />
              <AnimatedHeading
                plainText="Every event"
                accentText="has a purpose."
                size="section"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                DHARA creates and manages experiences across sports, corporate, social and entertainment events.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {ABOUT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
              className={`${cat.colSpan} group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8 hover:border-[#7C6CF5]/40 transition-all duration-500 shadow-xl`}
            >
              <Link href={cat.href} className="absolute inset-0 z-30" aria-label={cat.title} />

              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/75 to-[#05060A]/40" />
              </div>

              {/* Top Watermark & Category Tag */}
              <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7C6CF5]">
                  {cat.category}
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-white/30 group-hover:text-white/70 transition-colors">
                  {cat.number}
                </span>
              </div>

              {/* Content at Bottom */}
              <div className="relative z-10 max-w-lg">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3 group-hover:text-amber-100 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
