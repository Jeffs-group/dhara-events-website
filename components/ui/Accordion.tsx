'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { accordionVariants } from '@/lib/animations';

export interface AccordionItemData {
  id: string;
  title: string;
  subtitle: string;
  items: string[][];
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId = '01',
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-white/[0.08] border-y border-white/[0.08] ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`py-6 sm:py-8 px-4 sm:px-6 transition-all duration-300 ${
              isOpen
                ? 'border-l-4 border-l-[#6B5CF6] bg-white/[0.02] shadow-[inset_12px_0_24px_-12px_rgba(107,92,246,0.2)]'
                : 'border-l-4 border-l-transparent hover:bg-white/[0.01]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left group gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 lg:gap-12 flex-1">
                <span className="text-xs uppercase tracking-widest text-[#6B5CF6] font-semibold min-w-[28px]">
                  {item.id}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#6B5CF6] transition-colors duration-200">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm text-white/50 font-normal md:ml-auto">
                  {item.subtitle}
                </span>
              </div>

              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:border-[#6B5CF6] group-hover:text-white transition-colors flex-shrink-0">
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {isOpen ? <Minus className="w-4 h-4 text-[#6B5CF6]" /> : <Plus className="w-4 h-4" />}
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  variants={accordionVariants}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <div className="pt-8 pb-4 pl-0 md:pl-16 lg:pl-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {item.items.map((column, colIdx) => (
                        <ul key={colIdx} className="space-y-3">
                          {column.map((bullet, bulletIdx) => (
                            <li
                              key={bulletIdx}
                              className="text-xs sm:text-sm text-white/65 flex items-center gap-2.5 font-light"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CF6] flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
