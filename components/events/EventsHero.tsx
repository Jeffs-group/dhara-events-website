'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';
import { BRAND_EASE } from '@/lib/animations';

export const EventsHero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-32 pb-8">
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
          src="/images/large-scale-stadium.jpg"
          alt="DHARA Events Overview"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-[#05060A]/85" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: BRAND_EASE }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white/50 mb-6"
          >
            <span className="text-[#6B5CF6] font-semibold">01</span>
            <span className="w-8 h-[1px] bg-white/20 inline-block" />
            <span>EVENTS</span>
          </motion.div>

          {/* Heading with line-by-line masked reveal */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight text-white mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15, ease: BRAND_EASE }}
                className="block"
              >
                Every event.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.5, ease: BRAND_EASE }}
                className="italic font-serif text-[#6B5CF6] block sm:inline"
              >
                Every detail.
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
            From sports and corporate events to weddings, social celebrations and live entertainment, DHARA brings together the creative, technical and operational capabilities required to deliver complete event experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: BRAND_EASE }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button href="/contact" variant="primary" icon="arrow-right">
              PLAN AN EVENT
            </Button>
            <Button href="#sports" variant="secondary" icon="arrow-down">
              EXPLORE EVENTS
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-4 sm:gap-6 text-white/50 tracking-widest text-[11px] uppercase">
          <Link href="#sports" className="hover:text-white transition-colors">SPORTS</Link>
          <span className="text-white/20">/</span>
          <Link href="#corporate" className="hover:text-white transition-colors">CORPORATE</Link>
          <span className="text-white/20">/</span>
          <Link href="#weddings" className="hover:text-white transition-colors">SOCIAL</Link>
          <span className="text-white/20">/</span>
          <Link href="#entertainment" className="hover:text-white transition-colors">LIVE</Link>
        </div>

        <Link
          href="#sports"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase"
        >
          <span>SCROLL THROUGH THE EXPERIENCES</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#6B5CF6]" />
        </Link>
      </div>
    </section>
  );
};
