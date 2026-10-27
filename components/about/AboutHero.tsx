'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/Logo';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const AboutHero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image with slow zoom */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { scale: 1 }
            : { scale: [1.0, 1.05, 1.0] }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
          {/* Brand Emblem & Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: BRAND_EASE }}
            className="flex items-center gap-3.5 mb-6"
          >
            <div className="p-1.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-[0_0_20px_rgba(107,92,246,0.2)] backdrop-blur-md flex items-center justify-center">
              <Logo variant="mark" height={32} href="" />
            </div>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white/60">
              <span className="text-[#6B5CF6] font-semibold">01</span>
              <span className="w-8 h-[1px] bg-white/20 inline-block" />
              <span>ABOUT DHARA EVENT PVT. LTD.</span>
            </div>
          </motion.div>

          {/* Heading with line-by-line masked reveal */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] tracking-tight text-white mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15, ease: BRAND_EASE }}
                className="block"
              >
                More than an event.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.5, ease: BRAND_EASE }}
                className="italic font-serif text-[#6B5CF6] block sm:inline"
              >
                An experience.
              </motion.span>
            </span>
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: BRAND_EASE }}
            className="text-base sm:text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-2xl mb-10"
          >
            DHARA Event Pvt. Ltd. is a full-service event management and production company delivering sports, corporate, social and entertainment experiences from concept to execution.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: BRAND_EASE }}
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
