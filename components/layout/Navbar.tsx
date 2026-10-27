'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/Logo';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    setIsScrolled(current > 20);
  });

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'py-3.5 bg-[#05060A]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-[#05060A]/30 backdrop-blur-md py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Left: <Logo height={40} /> (shrinks to 34 on scroll with no layout shift). Below 400px use <Logo variant="mark" height={36} /> */}
          <div className="h-10 flex items-center">
            <div className="block min-[401px]:hidden">
              <Logo variant="mark" height={36} />
            </div>
            <div className="hidden min-[401px]:block">
              <Logo height={isScrolled ? 34 : 40} />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#6B5CF6]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6B5CF6] rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <Button href="/contact" size="sm" icon="arrow-right">
              PLAN AN EVENT
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#6B5CF6]/50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
