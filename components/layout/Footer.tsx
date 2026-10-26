'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO } from '@/lib/constants';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] border-t border-white/[0.08] relative overflow-hidden pt-20 pb-12">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5B5BF0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <Logo variant="footer" />
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/70 hover:text-white transition-colors">{CONTACT_INFO.email}</a></p>
              <p>Phone: <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-white/70 hover:text-white transition-colors">{CONTACT_INFO.phone}</a></p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-[#7C6CF5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-[#7C6CF5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            <p>© 2026 {CONTACT_INFO.company} All rights reserved.</p>
          </div>

          <div className="hidden md:flex items-center gap-3 tracking-[0.2em] uppercase text-[10px] text-white/30">
            <span>PLAN</span>
            <span>•</span>
            <span>PRODUCE</span>
            <span>•</span>
            <span>DELIVER</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
