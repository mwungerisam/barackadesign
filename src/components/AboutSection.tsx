import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => (
  <section id="about" className="border-b border-[#E5E5E5] bg-[#F5F5F5] py-12 sm:py-16">
    <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">About BARACK DESIGN</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          A Kigali studio for print, branding, and creative production.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#555555]">
          We help businesses and organizations prepare branded materials for their teams, products, and events. Share your brief and we’ll discuss the right approach for your project.
        </p>
      </div>
      <button onClick={onOpenQuote} className="inline-flex min-h-11 items-center justify-center gap-2 justify-self-start border border-[#111111] px-4 py-2.5 text-sm font-medium text-[#111111] transition hover:bg-[#111111] hover:text-white md:justify-self-end">
        Start a conversation <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);
