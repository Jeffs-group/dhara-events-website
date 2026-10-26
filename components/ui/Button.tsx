'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-down' | 'none';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-5 py-2.5 gap-2',
    md: 'text-sm px-7 py-3.5 gap-2.5',
    lg: 'text-base px-9 py-4 gap-3',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#5B5BF0] to-[#7C6CF5] text-white font-medium hover:shadow-[0_0_30px_rgba(91,91,240,0.55)] border border-white/10',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 backdrop-blur-md',
    outline:
      'bg-transparent hover:bg-white/5 text-white/90 font-medium border border-white/25',
    glass:
      'bg-[#0E1020]/80 hover:bg-[#0E1020] text-white border border-white/10 backdrop-blur-xl',
  }[variant];

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center justify-center rounded-full tracking-wide transition-all duration-300 select-none ${sizeClasses} ${variantClasses} ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <span className="relative z-10 transition-transform duration-300">
        {children}
      </span>
      {icon === 'arrow-right' && (
        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === 'arrow-down' && (
        <ArrowDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent p-0 border-none outline-none focus:outline-none"
    >
      {content}
    </button>
  );
};
