'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export interface LogoMarkAnimatedProps {
  size?: number;
  className?: string;
  mode?: 'preloader' | 'navbar' | 'footer' | 'standalone';
  isHovered?: boolean;
  onAnimationComplete?: () => void;
}

export const LogoMarkAnimated: React.FC<LogoMarkAnimatedProps> = ({
  size = 120,
  className = '',
  mode = 'standalone',
  isHovered: externalHovered,
  onAnimationComplete,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const rawId = useId();
  // Sanitize id for SVG url references
  const uniqueId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  const dGradId = `d-grad-${uniqueId}`;
  const streamGradId = `stream-grad-${uniqueId}`;
  const streamSubtleId = `stream-subtle-${uniqueId}`;
  const sparkGradId = `spark-grad-${uniqueId}`;
  const glowFilterId = `glow-${uniqueId}`;

  const [internalHovered, setInternalHovered] = useState(false);
  const activeHover = externalHovered !== undefined ? externalHovered : internalHovered;

  // Fallback for reduced motion: render static SVG immediately
  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        style={{ width: size, height: size }}
        className={`select-none ${className}`}
        aria-label="DHARA Event Pvt. Ltd."
        role="img"
      >
        <defs>
          <linearGradient id={dGradId} x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="50%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamGradId} x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="45%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamSubtleId} x1="20" y1="90" x2="85" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="60%" stopColor="#3535D2" />
            <stop offset="100%" stopColor="#6B5CF6" />
          </linearGradient>
          <linearGradient id={sparkGradId} x1="42" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0DBFF" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g>
          <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill={`url(#${dGradId})`} />
          <path d="M42 24 H56 V27 H42 Z" fill={`url(#${dGradId})`} />
          <path d="M42 89 H56 V92 H42 Z" fill={`url(#${dGradId})`} />
        </g>
        <g>
          <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill={`url(#${streamGradId})`} />
          <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill={`url(#${streamGradId})`} />
          <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill={`url(#${streamSubtleId})`} />
        </g>
        <g>
          <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill={`url(#${sparkGradId})`} filter={`url(#${glowFilterId})`} />
          <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
          <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
          <circle cx="32" cy="34" r="1" fill="#A89BFF" opacity="0.6" />
          <circle cx="53" cy="14" r="1" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    );
  }

  // Preloader Mode Animation:
  // 1. D body fades and scales in (0.85 -> 1) [0s -> 0.6s]
  // 2. Three stream lines slide in from left one after another (60ms stagger) [0.45s, 0.51s, 0.57s]
  // 3. Spark pops in with a glow pulse [0.8s -> 1.4s]
  // 4. Preloader fades out after ~2.2s total
  if (mode === 'preloader') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        style={{ width: size, height: size }}
        className={`select-none overflow-visible ${className}`}
        aria-label="DHARA Event Pvt. Ltd."
        role="img"
      >
        <defs>
          <linearGradient id={dGradId} x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="50%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamGradId} x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="45%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamSubtleId} x1="20" y1="90" x2="85" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="60%" stopColor="#3535D2" />
            <stop offset="100%" stopColor="#6B5CF6" />
          </linearGradient>
          <linearGradient id={sparkGradId} x1="42" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0DBFF" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. D Body: fades and scales in (0.85 -> 1) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.85, originX: '55px', originY: '58px' }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill={`url(#${dGradId})`} />
          <path d="M42 24 H56 V27 H42 Z" fill={`url(#${dGradId})`} />
          <path d="M42 89 H56 V92 H42 Z" fill={`url(#${dGradId})`} />
        </motion.g>

        {/* 2. Stream Lines: slide in from the left one after another (60ms stagger) */}
        <g>
          {/* Stream Line 1 */}
          <motion.path
            d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z"
            fill={`url(#${streamGradId})`}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Stream Line 2 */}
          <motion.path
            d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z"
            fill={`url(#${streamGradId})`}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.51, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Stream Line 3 */}
          <motion.path
            d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z"
            fill={`url(#${streamSubtleId})`}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.57, ease: [0.22, 1, 0.36, 1] }}
          />
        </g>

        {/* 3. Radiant Spark & Stardust: pops in with a glow pulse */}
        <motion.g
          initial={{ opacity: 0, scale: 0, originX: '47px', originY: '20px' }}
          animate={{
            opacity: 1,
            scale: [0, 1.45, 1],
          }}
          transition={{
            duration: 0.65,
            delay: 0.72,
            times: [0, 0.6, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {/* Glow Pulse Filter Container */}
          <motion.path
            d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z"
            fill={`url(#${sparkGradId})`}
            filter={`url(#${glowFilterId})`}
            animate={{
              opacity: [0.8, 1, 0.9],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.2,
              delay: 0.85,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
          <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
          <circle cx="32" cy="34" r="1" fill="#A89BFF" opacity="0.6" />
          <circle cx="53" cy="14" r="1" fill="#FFFFFF" opacity="0.9" />
        </motion.g>
      </svg>
    );
  }

  // Navbar & Standalone Mode:
  // - On page load: fades in once
  // - On hover: soft light sweep across mark + stream lines shift 3px
  // - Spark twinkles slowly (scale 1 -> 1.15, 3s loop)
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setInternalHovered(true)}
      onMouseLeave={() => setInternalHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        style={{ width: size, height: size }}
        className="select-none overflow-visible"
        aria-label="DHARA Event Pvt. Ltd."
        role="img"
      >
        <defs>
          <linearGradient id={dGradId} x1="20" y1="100" x2="105" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="50%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamGradId} x1="15" y1="80" x2="90" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3535D2" />
            <stop offset="45%" stopColor="#6B5CF6" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <linearGradient id={streamSubtleId} x1="20" y1="90" x2="85" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="60%" stopColor="#3535D2" />
            <stop offset="100%" stopColor="#6B5CF6" />
          </linearGradient>
          <linearGradient id={sparkGradId} x1="42" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0DBFF" />
            <stop offset="100%" stopColor="#A89BFF" />
          </linearGradient>
          <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* D Body */}
        <path d="M48 24 H68 C88 24 102 38 102 58 C102 78 88 92 68 92 H48 Z M58 34 V82 H68 C82 82 92 72 92 58 C92 44 82 34 68 34 Z" fill={`url(#${dGradId})`} />
        <path d="M42 24 H56 V27 H42 Z" fill={`url(#${dGradId})`} />
        <path d="M42 89 H56 V92 H42 Z" fill={`url(#${dGradId})`} />

        {/* Stream Lines: Shift 3px on hover */}
        <motion.g
          animate={{ x: activeHover ? 3 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M22 66 C26 50 34 34 46 25 C45 28 43 35 43 42 C40 54 34 64 22 66 Z" fill={`url(#${streamGradId})`} />
          <path d="M20 78 C28 66 40 58 54 58 C68 58 78 68 94 68 C82 72 70 66 54 66 C42 66 30 72 20 78 Z" fill={`url(#${streamGradId})`} />
          <path d="M26 84 C34 76 44 72 56 72 C68 72 78 80 98 80 C84 83 72 78 56 78 C46 78 36 82 26 84 Z" fill={`url(#${streamSubtleId})`} />
        </motion.g>

        {/* Radiant Spark: Twinkles slowly (scale 1 -> 1.18, 2.6s loop) */}
        <motion.g
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.85, 1, 0.85],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ originX: '47px', originY: '20px' }}
        >
          <path d="M47 12 C47 18 43 20 37 20 C43 20 47 22 47 28 C47 22 51 20 57 20 C51 20 47 18 47 12 Z" fill={`url(#${sparkGradId})`} filter={`url(#${glowFilterId})`} />
          <circle cx="39" cy="14" r="1.5" fill="#A89BFF" opacity="0.85" />
          <circle cx="34" cy="24" r="1.2" fill="#6B5CF6" opacity="0.75" />
          <circle cx="32" cy="34" r="1" fill="#A89BFF" opacity="0.6" />
          <circle cx="53" cy="14" r="1" fill="#FFFFFF" opacity="0.9" />
        </motion.g>
      </svg>

      {/* Ambient violet hover glow aura */}
      <div
        className={`absolute -inset-2 bg-[#6B5CF6]/20 rounded-full blur-md pointer-events-none transition-all duration-500 ${
          activeHover ? 'opacity-100 scale-125' : 'opacity-0 scale-90'
        }`}
      />

      {/* Soft light sweep overlay on hover */}
      {activeHover && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[140%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
            initial={{ x: '-120%' }}
            animate={{ x: '140%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

// Full Animated Navbar Logo (Mark + Typography with animated motion)
export interface NavbarLogoAnimatedProps {
  height?: number;
  className?: string;
  href?: string;
}

export const NavbarLogoAnimated: React.FC<NavbarLogoAnimatedProps> = ({
  height = 40,
  className = '',
  href = '/',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const markSize = Math.max(28, Math.round(height * 0.95));
  const fontSize = Math.max(18, Math.round(height * 0.56));
  const subFontSize = Math.max(7.5, Math.round(height * 0.22));

  const content = (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-3 group select-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Animated Mark */}
      <div className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <LogoMarkAnimated
          size={markSize}
          mode="navbar"
          isHovered={isHovered}
        />
      </div>

      {/* Luxury Typography rendered at 4K native font resolution */}
      <div className="flex flex-col justify-center">
        <span
          className="font-serif font-semibold tracking-[0.14em] text-white group-hover:text-[#A89BFF] transition-colors duration-300 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          style={{ fontSize: `${fontSize}px` }}
        >
          DHARA
        </span>
        <span
          className="font-sans font-bold tracking-[0.32em] text-[#6B5CF6] group-hover:text-[#A89BFF] uppercase block mt-1 leading-none group-hover:tracking-[0.38em] transition-all duration-300"
          style={{ fontSize: `${subFontSize}px` }}
        >
          EVENT PVT. LTD.
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none"
        aria-label="DHARA Event Pvt. Ltd."
      >
        {content}
      </Link>
    );
  }

  return content;
};
