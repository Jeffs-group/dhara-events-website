'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const emptySubscribe = () => () => {};

export const ScrollProgress: React.FC = () => {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] origin-left z-50 pointer-events-none"
    />
  );
};
