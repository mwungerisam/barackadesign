import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface PortfolioShowcaseProps {
  onOpenQuote: (categoryId?: string, productId?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenQuote }) => (
  <section id="portfolio" className="border-b border-[#E5E5E5] bg-white py-16 text-[#111111] sm:py-20" aria-labelledby="references-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Product references</p>
          <h2 id="references-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A look at what we make.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#666666]">
            These images are illustrative references, not a record of completed BARACK DESIGN client projects.
          </p>
        </div>
        <button
          onClick={() => onOpenQuote()}
          className="inline-flex items-center gap-2 self-start text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#666666] sm:self-auto"
        >
          Discuss a project <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PORTFOLIO_PROJECTS.map((reference) => (
          <article key={reference.id} className="overflow-hidden border border-[#E5E5E5] bg-white">
            <div className="relative aspect-[4/3] bg-[#F2F2F2]">
              <img src={reference.image} alt="" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = 'none'; }} className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#333333]">Illustrative reference</span>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#666666]">{reference.category}</p>
              <h3 className="mt-1 text-lg font-medium">{reference.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
