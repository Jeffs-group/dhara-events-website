'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'emblemOnly' | 'full';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  if (variant === 'emblemOnly') {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <div className="relative w-10 h-10 aspect-square overflow-hidden">
          <Image
            src="/logo/logo-full.jpg"
            alt="DHARA Monogram"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  if (variant === 'footer') {
    return (
      <Link href="/" className={`inline-flex flex-col group ${className}`}>
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 aspect-square flex-shrink-0">
            <Image
              src="/logo/logo-full.jpg"
              alt="DHARA Crest"
              fill
              sizes="44px"
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <span className="font-serif text-3xl font-normal tracking-wider text-white group-hover:text-[#F5D77A] transition-colors">
              DHARA
            </span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#7C6CF5] uppercase">
            EVENT PVT. LTD.
          </span>
        </div>
        <p className="mt-3 text-xs text-white/50 tracking-wide font-light">
          Creating Experiences. Delivering Excellence.
        </p>
      </Link>
    );
  }

  // Default navbar variant
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label="DHARA Event Pvt. Ltd. Home"
    >
      <div className="relative w-9 h-9 aspect-square flex-shrink-0">
        <Image
          src="/logo/logo-full.jpg"
          alt="DHARA Logo"
          fill
          sizes="36px"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-2xl font-normal tracking-wider text-white group-hover:text-[#F5D77A] transition-colors">
          DHARA
        </span>
        <span className="hidden sm:inline-block text-[10px] font-semibold tracking-[0.2em] text-[#7C6CF5] uppercase">
          EVENT PVT. LTD.
        </span>
      </div>
    </Link>
  );
};
