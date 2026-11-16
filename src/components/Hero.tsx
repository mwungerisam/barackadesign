import React from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_print_branding_1794043015828.jpg';

interface HeroProps {
  onOpenQuote: (catId?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section className="relative bg-[#0B0D10] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2D35] bg-[#111214] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C0C0C0]">
              <span>BARACK DESIGN</span>
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Branding and print that work for your business.
            </h1>

            <p className="mt-5 max-w-lg text-base text-[#A7A7A7] sm:text-lg">
              We create commercial printing, apparel branding, packaging, and visual identity systems for businesses in Rwanda and beyond.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F4C400] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] transition hover:bg-[#E5B900]"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2A2D35] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F0F0F0] transition hover:border-[#808080] hover:text-white"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-[#A7A7A7]">
              <MapPin className="h-4 w-4 text-[#C0C0C0]" />
              <span>Town Centre Building, F5A-005, Kigali</span>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-[#191919] bg-[#000000] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src={heroImage}
                alt="BARACK DESIGN commercial printing and branding studio in Kigali"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
