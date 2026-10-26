'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Image with slow Ken Burns effect (1.0 to 1.06 on wrapper) */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/large-scale-stadium.jpg"
          alt="DHARA Luxury Event Production"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark cinematic overlays matching Figma */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/75 to-[#05060A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#05060A]/60 to-[#05060A]" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 sm:pt-20">
        <div className="max-w-4xl">
          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#7C6CF5] uppercase mb-6"
          >
            <span>EVENT MANAGEMENT</span>
            <span className="w-1 h-1 rounded-full bg-[#7C6CF5]" />
            <span>PRODUCTION</span>
            <span className="w-1 h-1 rounded-full bg-[#7C6CF5]" />
            <span>LIVE EXPERIENCES</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight text-white mb-6"
          >
            Creating experiences.{' '}
            <span className="italic block sm:inline font-serif text-[#7C6CF5]">
              Delivering excellence.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10"
          >
            From sports events and corporate experiences to weddings, entertainment and large-scale live programmes, DHARA delivers end-to-end event solutions from concept to execution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button href="#built-around" variant="secondary" icon="arrow-down">
              Explore events
            </Button>
            <Button href="/contact" variant="primary" icon="arrow-right">
              Plan an event
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-5 rounded-full bg-gradient-to-b from-[#7C6CF5] to-transparent"
        />
      </motion.div>
    </section>
  );
};
