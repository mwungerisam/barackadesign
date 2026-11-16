import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CreativeStudioProps {
  onOpenQuote: (categoryId?: string, productId?: string) => void;
}

const creativeServices = [
  { title: 'Brand identity', description: 'Logo and visual identity design for your business.' },
  { title: 'Print artwork', description: 'Layouts for stationery, promotional materials, and packaging.' },
  { title: 'Marketing graphics', description: 'Social media and campaign artwork for digital channels.' },
  { title: 'Brand consistency', description: 'Creative guidance to maintain a clear, professional message across materials.' }
];

export const CreativeStudio: React.FC<CreativeStudioProps> = ({ onOpenQuote }) => (
  <section id="creative-studio" className="border-b border-[#E5E5E5] bg-[#F5F5F5] py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Branding & creative</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Design that works across your materials.</h2>
          <button onClick={() => onOpenQuote('logo-branding', 'logo-design')} className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#111111] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#333333]">
            Discuss a branding project <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="divide-y divide-[#DADADA] border-y border-[#DADADA]">
          {creativeServices.map((service, index) => (
            <article key={service.title} className="grid gap-1 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
              <span className="text-xs text-[#777777]">0{index + 1}</span>
              <div>
                <h3 className="text-base font-medium text-[#111111]">{service.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#666666]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
