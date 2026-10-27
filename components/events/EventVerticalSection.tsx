'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { BRAND_EASE, fadeUp, staggerFast } from '@/lib/animations';

export interface EventSectionData {
  id: string;
  label: string;
  titleLine1: string;
  titleAccent: string;
  description: string;
  formats: string[];
  handlesCol1: string[];
  handlesCol2: string[];
  image: string;
  imagePosition: 'left' | 'right';
}

interface EventVerticalSectionProps {
  data: EventSectionData;
  isFirst?: boolean;
}

export const EventVerticalSection: React.FC<EventVerticalSectionProps> = ({
  data,
  isFirst = false,
}) => {
  const isImageLeft = data.imagePosition === 'left';

  return (
    <section
      id={data.id}
      className={`py-24 sm:py-32 bg-[#05060A] relative overflow-hidden ${
        !isFirst ? 'border-t border-white/[0.08]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column: slides in from its side with a clip-path wipe */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: isImageLeft ? -30 : 30,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0, margin: '150px' }}
              transition={{ duration: 0.8, ease: BRAND_EASE }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl"
            >
              <Image
                src={data.image}
                alt={data.titleLine1}
                fill
                quality={90}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom tags on image */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-semibold text-white/70">
                <span>{data.id.toUpperCase()} EVENTS</span>
                <span className="flex items-center gap-1.5 text-white/50">
                  <span>THE DHARA EXPERIENCE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CF6]" />
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text Content Column: Staggers in from the other side */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 45 : -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: BRAND_EASE }}
            className={`lg:col-span-6 ${
              isImageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <SectionLabel
              text={data.label.replace(/^[0-9]+\s*——\s*/, '')}
              number={data.label.split('——')[0]?.trim()}
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.15] mb-6">
              {data.titleLine1}{' '}
              <span className="text-[#6B5CF6] italic font-serif block sm:inline">
                {data.titleAccent}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
              {data.description}
            </p>

            {/* EVENT FORMATS TAGS */}
            <div className="mb-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 block mb-3">
                EVENT FORMATS
              </span>
              <div className="flex flex-wrap gap-2">
                {data.formats.map((fmt) => (
                  <span
                    key={fmt}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/75 font-light"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>

            {/* WHAT DHARA HANDLES: Bullet list items stagger in one by one */}
            <div className="border-t border-white/[0.08] pt-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 block mb-4">
                WHAT DHARA HANDLES
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerFast}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5"
              >
                <div className="space-y-2.5">
                  {data.handlesCol1.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="text-xs sm:text-sm text-white/70 flex items-center gap-2.5 font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CF6]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {data.handlesCol2.map((item) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="text-xs sm:text-sm text-white/70 flex items-center gap-2.5 font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CF6]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
