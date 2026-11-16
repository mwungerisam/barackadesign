import React, { useEffect, useState } from 'react';
import { APPROVED_SERVICES } from '../data/servicesData';
import { ArrowRight, FileText, Search, X } from 'lucide-react';

interface ServiceCatalogueProps {
  selectedCategoryId?: string;
  onOpenQuote: (categoryId?: string, productId?: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const ServiceCatalogue: React.FC<ServiceCatalogueProps> = ({
  selectedCategoryId,
  onOpenQuote,
  searchQuery,
  onSearchChange
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>(selectedCategoryId || 'all');

  useEffect(() => {
    if (selectedCategoryId) setActiveCategoryTab(selectedCategoryId);
  }, [selectedCategoryId]);

  // Filter categories
  const displayedCategories = APPROVED_SERVICES.filter(cat => {
    if (activeCategoryTab !== 'all' && cat.id !== activeCategoryTab) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchesTitle = cat.title.toLowerCase().includes(q);
      const matchesSub = cat.subtitle.toLowerCase().includes(q);
      const matchesSubitem = cat.subitems.some(s => `${s.name} ${s.description} ${s.popularFinishes?.join(' ') || ''}`.toLowerCase().includes(q));
      return matchesTitle || matchesSub || matchesSubitem;
    }
    return true;
  });

  return (
    <section id="services" className="border-b border-[#E9E3DD] bg-[#F5F3F0] py-16 text-[#111111] sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#776000]">Our services</div>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-4xl">
              Print, branding, and production.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#5C5C5C]">
              From business print to branded merchandise and event displays, we make it easy to get your project produced.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search print, apparel, banners..."
              aria-label="Search services and products"
              className="w-full rounded-lg border border-[#D8D2CC] bg-white py-3 pl-10 pr-4 text-sm text-[#111111] placeholder-[#777777] transition-colors focus:border-[#808080] focus:outline-none"
            />
            {searchQuery && <button type="button" onClick={() => onSearchChange('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]"><X className="h-4 w-4" /></button>}
          </div>
        </div>

        {/* Division Filter Bar (Segmented Controls) */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto border-b border-[#E5DFD9] pb-4 scrollbar-none">
          <button
            onClick={() => setActiveCategoryTab('all')}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors ${
              activeCategoryTab === 'all'
                ? 'bg-[#111111] text-white'
                : 'bg-white text-[#555555] hover:text-[#111111]'
            }`}
          >
            All Services ({APPROVED_SERVICES.length})
          </button>
          {APPROVED_SERVICES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryTab(cat.id)}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategoryTab === cat.id
                ? 'bg-[#111111] text-white font-semibold'
                : 'bg-white text-[#555555] hover:text-[#111111]'
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold ${activeCategoryTab === cat.id ? 'bg-white/20 text-white' : 'bg-[#F2F0EE] text-[#666666]'}`}>
                {cat.letter}
              </span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Service Categories Grid */}
        {displayedCategories.length === 0 ? (
          <div className="rounded-2xl border border-[#E7E1DB] bg-white py-16 text-center">
            <p className="text-sm text-[#5C5C5C]">No services found matching “{searchQuery}”.</p>
            <button
              onClick={() => { onSearchChange(''); setActiveCategoryTab('all'); }}
              className="mt-3 text-xs font-semibold text-[#111111] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {displayedCategories.map((cat) => (
              <div
                key={cat.id}
                className="overflow-hidden rounded-2xl border border-[#E7E1DB] bg-white text-left shadow-[0_8px_30px_rgba(17,17,17,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#C9C1BA] hover:shadow-[0_14px_36px_rgba(17,17,17,0.08)]"
              >
                <div className="relative h-40 overflow-hidden bg-[#F0EEE9]">
                  <img src={cat.image} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111111]">{cat.subtitle}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">{cat.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#5C5C5C]">{cat.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.subitems.filter((sub) => !searchQuery.trim() || `${sub.name} ${sub.description} ${sub.popularFinishes?.join(' ') || ''}`.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, searchQuery ? 6 : 4).map((sub) => (
                      <button key={sub.id} onClick={() => onOpenQuote(cat.id, sub.id)} className="rounded-full border border-[#E8E5DE] bg-[#FAF9F6] px-3 py-1.5 text-xs text-[#444444] transition hover:border-[#D4A900] hover:bg-[#FFF9D9]">
                        {sub.name}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => onOpenQuote(cat.id)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F4C400] px-4 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#E5B900]"
                  >
                    <FileText className="h-4 w-4" />
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
};
