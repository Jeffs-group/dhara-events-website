'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  plainText: string;
  accentText?: string;
  subText?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'hero' | 'section' | 'card' | 'medium';
  className?: string;
  align?: 'left' | 'center' | 'right';
  accentColor?: 'violet' | 'lavender' | 'white';
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  plainText,
  accentText,
  subText,
  as: Component = 'h2',
  size = 'section',
  className = '',
  align = 'left',
  accentColor = 'violet',
}) => {
  const sizeClasses = {
    hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.08] tracking-[-0.02em]',
    section: 'text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.12] tracking-[-0.02em]',
    medium: 'text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-[-0.015em]',
    card: 'text-xl sm:text-2xl md:text-3xl leading-[1.25]',
  }[size];

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  const accentColorClass = {
    violet: 'text-[#6B5CF6]',
    lavender: 'gradient-text-lavender',
    white: 'text-white',
  }[accentColor];

  return (
    <div className={`overflow-hidden ${alignClasses} ${className}`}>
      <motion.div
        initial={{ y: '30%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component className={`font-serif text-white font-normal ${sizeClasses}`}>
          {plainText}{' '}
          {accentText && (
            <span className={`italic font-serif font-normal ${accentColorClass}`}>
              {accentText}
            </span>
          )}
          {subText && (
            <span className="block mt-1 font-serif text-white">{subText}</span>
          )}
        </Component>
      </motion.div>
    </div>
  );
};
