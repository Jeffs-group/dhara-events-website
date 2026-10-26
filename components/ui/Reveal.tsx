'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  viewportAmount?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variants = fadeInUp,
  delay = 0,
  className = '',
  viewportAmount = 0.2,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerDelay?: number;
}> = ({ children, className = '', delayChildren = 0.1, staggerDelay = 0.12 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
