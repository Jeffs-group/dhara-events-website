'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image with slow zoom (1.0 to 1.06) */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/contact-luxury-backdrop.jpg"
          alt="About DHARA Event Management"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-[#05060A]/80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white/50 mb-6"
          >
            <span className="text-[#7C6CF5] font-semibold">01</span>
            <span className="w-8 h-[1px] bg-white/20 inline-block" />
            <span>ABOUT DHARA</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] tracking-tight text-white mb-6"
          >
            More than an event.{' '}
            <span className="italic block sm:inline font-serif text-[#7C6CF5]">
              An experience.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-2xl mb-10"
          >
            DHARA Event Pvt. Ltd. is a full-service event management and production company delivering sports, corporate, social and entertainment experiences from concept to execution.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Button href="/events" variant="primary" icon="arrow-right">
              EXPLORE OUR CAPABILITIES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
