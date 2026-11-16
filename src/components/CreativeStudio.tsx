import React from 'react';
import { ArrowRight, FileCode, Palette, ShieldCheck } from 'lucide-react';
import brandingImage from '../assets/images/branding_creative_studio_1794043015922.jpg';

interface CreativeStudioProps {
  onOpenQuote: (categoryId?: string, productId?: string) => void;
}

export const CreativeStudio: React.FC<CreativeStudioProps> = ({ onOpenQuote }) => {
  const capabilities = [
    {
      title: 'Brand identity',
      description: 'Logo systems, brand direction, and visual structure for businesses that need clarity and consistency.',
      icon: Palette
    },
    {
      title: 'Prepress',
      description: 'Artwork checks, production-ready files, and print preparation built for efficient manufacturing.',
      icon: FileCode
    },
    {
      title: 'Commercial design',
      description: 'Marketing assets, digital layouts, and presentation materials created to support real sales goals.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="border-b border-[#E9E3DD] bg-[#F5F3F0] py-16 text-[#111111] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666]">Creative studio</div>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-4xl">
              Clear brand thinking, designed for production.
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#4E4E4E]">
              BARACK DESIGN brings brand direction and production planning together so the final print, packaging, or digital asset is consistent, practical, and ready to use.
            </p>

            <button
              onClick={() => onOpenQuote('branding-design', 'logo-design')}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#000000] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition hover:bg-[#191919]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-[#E9E3DD] bg-white shadow-[0_20px_48px_rgba(17,17,17,0.06)]">
              <img
                src={brandingImage}
                alt="BARACK DESIGN creative and brand production studio"
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-[#E7E1DB] bg-white p-6 shadow-[0_8px_30px_rgba(17,17,17,0.03)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F0EE] text-[#111111]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm text-[#5C5C5C]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
