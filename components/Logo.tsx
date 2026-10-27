'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { LogoMarkAnimated, NavbarLogoAnimated } from './LogoAnimated';

export { LogoMarkAnimated, NavbarLogoAnimated };

export interface LogoProps {
  variant?: 'full' | 'stacked' | 'mark' | 'navbar';
  theme?: 'dark' | 'light';
  height?: number;
  href?: string;
  className?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  height = 40,
  href = '/',
  className = '',
  animated = true,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Normalize variant ('navbar' maps to 'full')
  const actualVariant = variant === 'navbar' ? 'full' : variant;

  // 1. Mark Only Variant (Used below 400px or for icon displays)
  if (actualVariant === 'mark') {
    const markContent = (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ height: `${height}px`, width: `${height}px` }}
      >
        <LogoMarkAnimated size={height} mode="navbar" />
      </div>
    );

    if (href && href !== '') {
      return (
        <Link
          href={href}
          className="inline-flex items-center focus:outline-none"
          aria-label="DHARA Event Pvt. Ltd."
        >
          {markContent}
        </Link>
      );
    }
    return markContent;
  }

  // 2. Stacked Variant (Used in Footer & About page cards)
  if (actualVariant === 'stacked') {
    const markSize = Math.max(50, Math.round(height * 0.42));
    const titleSize = Math.max(24, Math.round(height * 0.19));
    const subTitleSize = Math.max(8, Math.round(height * 0.052));
    const taglineSize = Math.max(7.5, Math.round(height * 0.046));

    const stackedContent = (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col items-center text-center select-none group"
      >
        {/* Animated 4K Vector Mark */}
        <div className="relative mb-3 flex items-center justify-center">
          <LogoMarkAnimated
            size={markSize}
            mode="navbar"
            isHovered={isHovered}
          />
        </div>

        {/* Brand Typography with native 4K font rendering */}
        <span
          className="font-serif font-semibold tracking-[0.16em] text-white group-hover:text-[#A89BFF] transition-colors duration-300 leading-none"
          style={{ fontSize: `${titleSize}px` }}
        >
          DHARA
        </span>

        {/* Line with Subtitle */}
        <div className="mt-2 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#6B5CF6]/40 hidden sm:inline-block" />
          <span
            className="font-sans font-bold tracking-[0.34em] text-[#6B5CF6] uppercase group-hover:tracking-[0.38em] transition-all duration-300"
            style={{ fontSize: `${subTitleSize}px` }}
          >
            EVENT PVT. LTD.
          </span>
          <span className="w-8 h-[1px] bg-[#6B5CF6]/40 hidden sm:inline-block" />
        </div>

        <span
          className="font-sans font-light tracking-[0.2em] uppercase text-white/50 mt-2.5"
          style={{ fontSize: `${taglineSize}px` }}
        >
          CREATING EXPERIENCES. DELIVERING EXCELLENCE.
        </span>
      </div>
    );

    const animatedWrapper = !prefersReducedMotion ? (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-flex flex-col items-center ${className}`}
      >
        {stackedContent}
      </motion.div>
    ) : (
      <div className={`inline-flex flex-col items-center ${className}`}>
        {stackedContent}
      </div>
    );

    if (href && href !== '') {
      return (
        <Link
          href={href}
          className="inline-flex items-center focus:outline-none"
          aria-label="DHARA Event Pvt. Ltd."
        >
          {animatedWrapper}
        </Link>
      );
    }
    return animatedWrapper;
  }

  // 3. Full Horizontal Variant (Navbar / Mobile Menu) with Animated Motion & 4K native fonts
  if (animated) {
    return (
      <NavbarLogoAnimated
        height={height}
        className={className}
        href={href}
      />
    );
  }

  // Static fallback if animated is explicitly false
  return (
    <NavbarLogoAnimated
      height={height}
      className={className}
      href={href}
    />
  );
};

export default Logo;
