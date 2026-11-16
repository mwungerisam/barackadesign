import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductionProcessProps {
  onOpenQuote: () => void;
}

const steps = [
  { number: '01', title: 'Share your brief', description: 'Tell us what you need, the quantity, and any relevant size or artwork details.' },
  { number: '02', title: 'Review the options', description: 'We’ll discuss your requirements and confirm the available options and quotation.' },
  { number: '03', title: 'Approve the details', description: 'Once you approve the quote and artwork, we can confirm the next production steps.' }
];

export const ProductionProcess: React.FC<ProductionProcessProps> = ({ onOpenQuote }) => (
  <section className="border-b border-[#333333] bg-[#0B0D10] py-16 text-white sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C0C0C0]">How it works</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">A clear path from brief to print.</h2>
      </div>
      <div className="mt-9 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.number} className="border-t border-[#666666] pt-4">
            <p className="text-xs text-[#C0C0C0]">{step.number}</p>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">{step.description}</p>
          </article>
        ))}
      </div>
      <button onClick={onOpenQuote} className="mt-8 inline-flex min-h-11 items-center gap-2 bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-[#E5E5E5]">
        Request a quote <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);
