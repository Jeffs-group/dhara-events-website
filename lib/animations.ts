import { Variants } from 'framer-motion';

export const EASE_CUSTOM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const textMaskReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: 'easeOut',
    },
  },
};

export const cardHover: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const imageZoom: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const clipPathReveal: Variants = {
  hidden: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    opacity: 0,
  },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const accordionVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const glowPulse: Variants = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
