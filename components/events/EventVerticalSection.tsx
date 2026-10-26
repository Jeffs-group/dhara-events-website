'use client';

import React from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';

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
          {/* Image Column */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <Reveal>
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1020] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl">
                <Image
                  src={data.image}
                  alt={data.titleLine1}
                  fill
                  quality={90}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom tags on image */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-semibold text-white/70">
                  <span>{data.id.toUpperCase()} EVENTS</span>
                  <span className="flex items-center gap-1.5 text-white/50">
                    <span>THE DHARA EXPERIENCE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C6CF5]" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content Column */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <Reveal>
              <SectionLabel text={data.label.replace(/^[0-9]+\s*——\s*/, '')} number={data.label.split('——')[0]?.trim()} />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.15] mb-6">
                {data.titleLine1}{' '}
                <span className="text-white block sm:inline">
                  {data.titleAccent}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
                {data.description}
              </p>
            </Reveal>

            {/* EVENT FORMATS TAGS */}
            <Reveal delay={0.2}>
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
            </Reveal>

            {/* WHAT DHARA HANDLES (2 Columns of bullets) */}
            <Reveal delay={0.25}>
              <div className="border-t border-white/[0.08] pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 block mb-4">
                  WHAT DHARA HANDLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  <div className="space-y-2.5">
                    {data.handlesCol1.map((item) => (
                      <div
                        key={item}
                        className="text-xs sm:text-sm text-white/70 flex items-center gap-2.5 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C6CF5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {data.handlesCol2.map((item) => (
                      <div
                        key={item}
                        className="text-xs sm:text-sm text-white/70 flex items-center gap-2.5 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C6CF5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
