'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { EVENT_TYPES, CONTACT_INFO } from '@/lib/constants';

export const EnquiryForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

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
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-white">Thank you!</h3>
            <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
              We&apos;ll get back to you shortly.
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

            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Name <span className="text-[#7C6CF5]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  {...register('name')}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-[#7C6CF5]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company or host name"
                  {...register('company')}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#7C6CF5] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Email <span className="text-[#7C6CF5]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                    errors.email
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-[#7C6CF5]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Phone <span className="text-[#7C6CF5]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 99000 00000"
                  {...register('phone')}
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                    errors.phone
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-[#7C6CF5]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Event Type & Event Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Event Type <span className="text-[#7C6CF5]">*</span>
                </label>
                <select
                  id="eventType"
                  {...register('eventType')}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#05060A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C6CF5] transition-all cursor-pointer"
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
              </div>

              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-xs font-medium text-white/70 mb-2"
                >
                  Event Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  {...register('eventDate')}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#05060A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C6CF5] transition-all cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-white/70 mb-2"
              >
                Message <span className="text-[#7C6CF5]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about the event you are planning (scale, location, estimated dates, requirements)..."
                {...register('message')}
                className={`w-full px-4 py-3.5 rounded-xl bg-[#05060A]/90 border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all ${
                  errors.message
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/10 focus:border-[#7C6CF5]'
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Error Banner with Retry */}
            {submissionStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-red-400 text-xs">
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
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#5B5BF0] to-[#7C6CF5] text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(91,91,240,0.6)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
              >
                {submissionStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
