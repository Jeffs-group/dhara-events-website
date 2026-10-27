'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LogoMarkAnimated } from '@/components/LogoAnimated';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion, finish quickly
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(quickTimer);
    }

    // Task 2 requirement: Total about 2.2s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          suppressHydrationWarning
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060A] pointer-events-auto"
        >
          {/* Animated Mark Container */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <LogoMarkAnimated
                size={130}
                mode="preloader"
                className="drop-shadow-[0_0_24px_rgba(107,92,246,0.35)]"
              />
            </div>

            {/* Wordmark and Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1.5"
            >
              <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-white font-normal">
                DHARA
              </h2>
              <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#6B5CF6] font-semibold">
                EVENT PVT. LTD.
              </p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light pt-1">
                Creating Experiences. Delivering Excellence.
              </p>
            </motion.div>

            {/* Glowing violet progress line */}
            <div className="w-36 h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#6B5CF6] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
