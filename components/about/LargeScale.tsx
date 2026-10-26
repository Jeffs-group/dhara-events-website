'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { LARGE_SCALE_STEPS, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const LargeScale: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#05060A] relative overflow-hidden border-t border-white/[0.08]">
      {/* 4K Stadium Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/large-scale-stadium.jpg"
          alt="Large-scale sports arena event operations"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/85 to-[#05060A]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel number="06" text="LARGE-SCALE EVENTS" />
            <AnimatedHeading
              plainText="Ready for"
              accentText="complex events."
              size="section"
              className="mb-6"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              DHARA provides turnkey, end-to-end event solutions for sports leagues, tournaments, corporate events, entertainment programmes and other large-scale events.
            </p>
          </Reveal>
        </div>

        {/* 7-Step Dotted Timeline */}
        <div className="overflow-x-auto pb-6 scrollbar-none">
          <div className="min-w-[700px] relative">
            {/* Dotted connecting line */}
            <div className="absolute top-[18px] left-6 right-6 h-[1px] border-t border-dotted border-white/20 z-0" />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {LARGE_SCALE_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Dot */}
                  <div className="w-9 h-9 rounded-full bg-[#0E1020] border border-white/20 flex items-center justify-center mb-3 group-hover:border-[#7C6CF5] group-hover:shadow-[0_0_12px_#7C6CF5] transition-all">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C6CF5]" />
                  </div>

                  {/* ID */}
                  <span className="text-[10px] text-[#7C6CF5] font-semibold tracking-widest uppercase mb-1">
                    {step.id}
                  </span>

                  {/* Label */}
                  <span className="text-xs font-medium text-white/80 tracking-wider uppercase group-hover:text-white transition-colors">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
