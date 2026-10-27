'use client';

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AlertCircle, Loader2, Send } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { EVENT_TYPES, CONTACT_INFO } from '@/lib/constants';
import { BRAND_EASE, fadeUp, staggerFast } from '@/lib/animations';

export const EnquiryForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const prefersReducedMotion = useReducedMotion();

  // Magnetic submit button state
  const buttonRef = useRef<HTMLDivElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setBtnPos({
      x: (e.clientX - centerX) * 0.22,
      y: (e.clientY - centerY) * 0.22,
    });
  };

  const handleBtnMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      eventType: 'Corporate Event',
      eventDate: '',
      message: '',
      _honey: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Spam bot honeypot detection
    if (data._honey && data._honey.length > 0) {
      return;
    }

    setSubmissionStatus('loading');
    setErrorMessage('');

    try {
      const email =
        process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || CONTACT_INFO.email;
      const endpoint = `https://formsubmit.co/ajax/${email}`;

      const payload = {
        name: data.name,
        company: data.company || 'N/A',
        email: data.email,
        phone: data.phone,
        eventType: data.eventType,
        eventDate: data.eventDate || 'Not specified',
        message: data.message,
        _subject: 'New Event Enquiry – DHARA Website',
        _template: 'table',
        _captcha: 'false',
        _honey: '',
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Form submission failed. Please try again.');
      }

      setSubmissionStatus('success');
      reset();
    } catch (err: unknown) {
      console.error(err);
      setSubmissionStatus('error');
      setErrorMessage(
        'Unable to send enquiry right now. Please check your connection or contact us directly via WhatsApp / phone.'
      );
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#0E1020]/90 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl">
      <AnimatePresence mode="wait">
        {submissionStatus === 'success' ? (
          /* Success state with animated SVG checkmark draw */
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: BRAND_EASE }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-16 h-16">
                {/* Outer animated circle */}
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.65, ease: BRAND_EASE }}
                />
                {/* Animated checkmark draw */}
                <motion.path
                  d="M19 32 L28 41 L45 23"
                  stroke="#10B981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: BRAND_EASE }}
                />
              </svg>
            </div>
            <h3 className="font-serif text-3xl text-white">Thank you!</h3>
            <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
              We&apos;ll get back to you shortly. Our executive team has received your details.
            </p>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => setSubmissionStatus('idle')}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80 hover:text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            key="enquiry-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            {/* Honeypot Spam Trap (hidden from view) */}
            <input
              type="text"
              {...register('_honey')}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Form fields stagger in */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerFast}
              className="space-y-6"
            >
              {/* Row 1: Name & Company with Floating Labels & Violet Glow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Name <span className="text-[#6B5CF6]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register('name')}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company or host name"
                    {...register('company')}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6] transition-all"
                  />
                </motion.div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Email <span className="text-[#6B5CF6]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register('email')}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Phone <span className="text-[#6B5CF6]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 99000 00000"
                    {...register('phone')}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Row 3: Event Type & Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="eventType"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Event Type <span className="text-[#6B5CF6]">*</span>
                  </label>
                  <select
                    id="eventType"
                    {...register('eventType')}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05060A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6] transition-all cursor-pointer"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#05060A]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.eventType.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp} className="group/field relative">
                  <label
                    htmlFor="eventDate"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                  >
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    {...register('eventDate')}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05060A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6] transition-all cursor-pointer [color-scheme:dark]"
                  />
                </motion.div>
              </div>

              {/* Row 4: Message */}
              <motion.div variants={fadeUp} className="group/field relative">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 group-focus-within/field:text-[#6B5CF6] transition-colors"
                >
                  Message <span className="text-[#6B5CF6]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about the event you are planning (scale, location, estimated dates, requirements)..."
                  {...register('message')}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-[#6B5CF6] focus:shadow-[0_0_20px_rgba(107,92,246,0.35)] focus:ring-1 focus:ring-[#6B5CF6]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>
            </motion.div>

            {/* Error Banner with Shake Animation */}
            {submissionStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [-8, 8, -6, 6, -3, 3, 0],
                }}
                transition={{ duration: 0.55 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-red-400 text-xs"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmissionStatus('idle')}
                  className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Retry
                </button>
              </motion.div>
            )}

            {/* Magnetic Submit Button with Sliding Arrow */}
            <div
              ref={buttonRef}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              className="inline-block"
            >
              <motion.div
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
              >
                <button
                  type="submit"
                  disabled={submissionStatus === 'loading'}
                  className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#3535D2] to-[#6B5CF6] text-white font-medium text-sm hover:shadow-[0_0_35px_rgba(107,92,246,0.6)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Expanding Glow Aura */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3535D2] via-[#6B5CF6] to-[#A89BFF] opacity-0 blur-lg group-hover:opacity-80 transition-all duration-300 -z-10 group-hover:scale-110 pointer-events-none"
                  />

                  {submissionStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                      <span className="relative z-10">Sending enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send enquiry</span>
                      <Send className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
