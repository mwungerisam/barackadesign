import React from 'react';
import { MapPin, MessageSquare, Phone } from 'lucide-react';
import heroImage from '../assets/images/hero_print_branding_1794043015828.jpg';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="border-b border-[#E9E3DD] bg-[#F5F3F0] py-16 text-[#111111] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666]">About BARACK DESIGN</div>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-4xl">
              Practical production support for growing businesses.
            </h2>

            <p className="mt-5 max-w-xl text-base text-[#4E4E4E]">
              Based in Kigali, BARACK DESIGN helps businesses with branding, commercial printing, packaging, and visual communication that is clear, consistent, and commercially useful.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E7E1DB] bg-white p-4">
                <div className="text-xl font-semibold text-[#111111]">Print</div>
                <p className="mt-2 text-sm text-[#5C5C5C]">Business cards, stationery, signage, and packaging.</p>
              </div>
              <div className="rounded-2xl border border-[#E7E1DB] bg-white p-4">
                <div className="text-xl font-semibold text-[#111111]">Brand</div>
                <p className="mt-2 text-sm text-[#5C5C5C]">Visual identity and communication systems that support growth.</p>
              </div>
              <div className="rounded-2xl border border-[#E7E1DB] bg-white p-4">
                <div className="text-xl font-semibold text-[#111111]">Production</div>
                <p className="mt-2 text-sm text-[#5C5C5C]">In-house workflow from concept to final finishing and delivery.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="rounded-lg bg-[#000000] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#191919]"
              >
                Request Quotation
              </button>
              <a
                href="https://wa.me/250789320757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D8D2CC] bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111111] transition hover:border-[#B9B0A9]"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#E9E3DD] bg-white shadow-[0_20px_48px_rgba(17,17,17,0.05)]">
              <img
                src={heroImage}
                alt="BARACK DESIGN workshop and production space in Kigali"
                className="h-[320px] w-full object-cover"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-[#E7E1DB] bg-white p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-[#111111]">
                <MapPin className="h-4 w-4 text-[#666666]" />
                <span>Town Centre Building, F5A-005, KN 70 St, Kigali</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-[#111111]">
                <Phone className="h-4 w-4 text-[#666666]" />
                <span>+250 789 320 757</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
