import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Reveal } from '@/components/ui/Reveal';
import { EnquiryForm } from '@/components/contact/EnquiryForm';
import { CONTACT_INFO, DARK_BLUR_DATA_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Plan an Event with DHARA',
  description:
    'Get in touch with DHARA Event Pvt. Ltd. to plan sports tournaments, corporate conventions, luxury weddings, or entertainment festivals. Reach out via email, phone, or direct enquiry.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-36 pb-28 bg-[#05060A] relative overflow-hidden">
        {/* 4K Luxury Office & Consultation Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-luxury-backdrop.jpg"
            alt="DHARA Event Executive Suite"
            fill
            quality={90}
            placeholder="blur"
            blurDataURL={DARK_BLUR_DATA_URL}
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/90 to-[#05060A]/85" />
        </div>

        {/* Ambient violet and gold glow */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#5B5BF0]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading, Context, and Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <SectionLabel number="08" text="EVENT ENQUIRY" />
                <AnimatedHeading
                  plainText="Let's create"
                  accentText="something memorable."
                  size="section"
                  className="mb-6"
                />
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed mb-6">
                  Planning a sports event, corporate experience, celebration or
                  large-scale live programme? Talk to DHARA.
                </p>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Share a few details about your event, and our executive team will review your requirements and coordinate with you directly.
                </p>
              </Reveal>

              {/* Direct Reach Cards */}
              <Reveal delay={0.25}>
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#7C6CF5]/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5B5BF0]/10 border border-[#5B5BF0]/20 flex items-center justify-center text-[#7C6CF5] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                        CALL US DIRECTLY
                      </span>
                      <span className="text-sm text-white font-medium group-hover:text-[#7C6CF5] transition-colors">
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                        WHATSAPP CHAT
                      </span>
                      <span className="text-sm text-white font-medium group-hover:text-emerald-400 transition-colors">
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#7C6CF5]/40 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5B5BF0]/10 border border-[#5B5BF0]/20 flex items-center justify-center text-[#7C6CF5] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                        EMAIL ENQUIRIES
                      </span>
                      <span className="text-sm text-white font-medium group-hover:text-[#7C6CF5] transition-colors">
                        {CONTACT_INFO.email}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                        OPERATIONAL REACH
                      </span>
                      <span className="text-xs text-white/70">
                        {CONTACT_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <EnquiryForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
