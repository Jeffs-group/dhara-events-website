'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session to avoid annoyance on every route change
    const hasLoaded = sessionStorage.getItem('dhara_preloader_shown');
    const delay = hasLoaded ? 0 : 1200;

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (!hasLoaded) {
        sessionStorage.setItem('dhara_preloader_shown', 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          suppressHydrationWarning
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060A] pointer-events-auto"
        >
          {/* Logo animation container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6">
              <Image
                src="/logo/logo-full.jpg"
                alt="DHARA Logo"
                fill
                priority
                sizes="144px"
                className="object-contain"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-1"
            >
              <h2 className="font-serif text-2xl tracking-[0.2em] text-white font-normal">
                DHARA
              </h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7C6CF5] font-semibold">
                EVENT PVT. LTD.
              </p>
            </motion.div>

            {/* Subtle animated loader line */}
            <div className="w-32 h-[1px] bg-white/10 mt-8 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#7C6CF5] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
