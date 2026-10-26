'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ArrowRight, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const navItemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.08,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-[#05060A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top header inside drawer */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
            <Logo variant="navbar" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-10 space-y-6">
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={navItemVariants}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-2"
                  >
                    <span
                      className={`font-serif text-3xl sm:text-4xl transition-colors duration-200 ${
                        isActive
                          ? 'text-[#7C6CF5]'
                          : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 ${
                        isActive ? 'text-[#7C6CF5]' : 'text-white/30'
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom actions & info */}
          <div className="border-t border-white/[0.08] pt-6 space-y-6">
            <Button
              href="/contact"
              onClick={onClose}
              className="w-full text-center py-4"
              size="lg"
            >
              PLAN AN EVENT
            </Button>

            <div className="space-y-2 text-xs text-white/50">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#7C6CF5]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#7C6CF5]" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
