import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const clientStories = [
  {
    organization: 'Equity Bank Rwanda',
    category: 'Corporate branding & print',
    description: 'Consistent branded materials for customer-facing teams and business communication.'
  },
  {
    organization: "SOS Children's Villages Rwanda",
    category: 'Institutional communication',
    description: 'Thoughtful printed materials that help important messages reach communities clearly.'
  },
  {
    organization: 'National Democratic Institute',
    category: 'Events & production',
    description: 'Coordinated print and event materials, prepared with care from proof to delivery.'
  }
];

export const TestimonialsSection: React.FC = () => (
  <section className="border-y border-[#E8E5DE] bg-white py-16 sm:py-20" aria-labelledby="client-stories-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#776000]">Trusted partnerships</p>
          <h2 id="client-stories-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Work that earns trust.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5C5C5C]">
            We support organizations with dependable print, branded materials, and event production.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#333333]">
          <span className="flex gap-0.5 text-[#D4A900]" aria-label="Five stars">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
          </span>
          <span>Built on quality and reliable service</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {clientStories.map((story) => (
          <article key={story.organization} className="rounded-2xl border border-[#E8E5DE] bg-[#FAF9F6] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#766000]">{story.category}</p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#111111]">{story.organization}</h3>
            <p className="mt-3 text-sm leading-6 text-[#5C5C5C]">{story.description}</p>
            <div className="mt-6 flex items-center gap-2 border-t border-[#E8E5DE] pt-4 text-xs font-medium text-[#666666]">
              <ArrowUpRight className="h-4 w-4 text-[#A88700]" />
              Print, branding & production
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);