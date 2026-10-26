'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DHARA Events on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated radar pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />

        {/* Hover tooltip label */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0E1020] text-xs text-white/90 border border-white/10 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Enquire on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
