'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { DARK_BLUR_DATA_URL } from '@/lib/constants';

interface CTAProps {
  labelNumber?: string;
  labelText?: string;
  plainHeading?: string;
  accentHeading?: string;
  description?: string;
  bgImage?: string;
}

export const CTA: React.FC<CTAProps> = ({
  labelNumber = '07',
  labelText = 'PLAN WITH DHARA',
  plainHeading = "Let's create",
  accentHeading = 'something memorable.',
  description = 'Planning a sports event, corporate experience, celebration or large-scale live programme? Talk to DHARA.',
  bgImage = '/images/contact-luxury-backdrop.jpg',
}) => {
  const magneticRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !magneticRef.current) return;
    const { left, top, width, height } = magneticRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#05060A] overflow-hidden border-t border-white/[0.08]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Create Memorable Events with DHARA"
          fill
          quality={90}
          placeholder="blur"
          blurDataURL={DARK_BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-[#05060A]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel number={labelNumber} text={labelText} />
            <AnimatedHeading
              plainText={plainHeading}
              accentText={accentHeading}
              size="section"
              className="mb-6"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6">
              {/* Magnetic Button with Glow Pulse */}
              <div
                ref={magneticRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative inline-block"
              >
                <motion.div
                  animate={{ x: position.x, y: position.y }}
                  transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
                  className="relative"
                >
                  {/* Glow Pulse Ring */}
                  {!prefersReducedMotion && (
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.85, 0.4],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] blur-md pointer-events-none -z-10"
                    />
                  )}
                  <Button href="/contact" variant="primary" icon="arrow-right" size="lg">
                    Plan an event
                  </Button>
                </motion.div>
              </div>

              <Button href="/contact" variant="secondary" icon="none" size="lg">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
