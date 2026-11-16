import React from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (catId?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => (
  <section className="hero-3d relative overflow-hidden bg-[#0B0D10] text-white">
    <div className="hero-backdrop" aria-hidden="true" />
    <div className="hero-glow hero-glow-one" aria-hidden="true" />
    <div className="hero-glow hero-glow-two" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#808080] to-transparent" aria-hidden="true" />

    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="max-w-6xl">
        <h1 className="hero-title max-w-6xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl lg:text-[5rem]">
          Print, branding,
          <span className="mt-1 block text-[#F5F5F5]">crafted for business.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#D5D5D5] sm:text-lg">
          Commercial print, branded products, packaging, event materials, and design solutions for professional businesses.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => onOpenQuote()} className="hero-cta hero-cta-primary inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E5E5E5]">
            <FileText className="h-4 w-4" /> Request a Quote
          </button>
          <button onClick={onExploreServices} className="hero-cta hero-cta-secondary inline-flex min-h-12 items-center justify-center gap-2 border border-[#808080] bg-[#0F1114] px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-[#14181C]">
            Explore Services <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm text-[#C0C0C0]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          <span>Town Centre Building, F5A-005, KN 70 St, Kigali, Rwanda</span>
        </p>
      </div>
    </div>
  </section>
);
