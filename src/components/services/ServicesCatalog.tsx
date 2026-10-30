import React, { useState } from 'react';
import { ServiceProduct, SERVICES_PRODUCTS } from '../../data/services';
import { Container } from '../common/Container';
import { MetadataText } from '../common/MetadataText';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesCatalogProps {
  onSelectService: (service: ServiceProduct) => void;
  onOpenInquiry: (initialOverview: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onSelectService,
  onOpenInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('services.filterAll', 'All Offerings (8)') },
    { id: 'transfers', label: t('services.filterTransfers', 'DTF Transfers') },
    { id: 'apparel', label: t('services.filterApparel', 'Apparel & Clothing') },
    { id: 'drinkware', label: t('services.filterDrinkware', 'Mugs & Cups') },
    { id: 'print', label: t('services.filterPrint', 'Flyers, Stamps & Banners') },
    { id: 'design', label: t('services.filterDesign', 'Graphic Design & Prepress') },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_PRODUCTS
      : SERVICES_PRODUCTS.filter((s) => {
          if (activeCategory === 'drinkware') return s.category === 'drinkware';
          if (activeCategory === 'print') return s.category === 'print';
          return s.category === activeCategory;
        });

  return (
    <section id="services" className="py-20 sm:py-28 border-b border-white/10">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
              {t('services.tag', '03. BESPOKE PRODUCTION & SERVICES')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
              {t('services.title', 'Dedicated Services & Products')}
            </h2>
            <p className="text-slate-400 text-base mt-2.5 leading-relaxed font-['Plus_Jakarta_Sans']">
              {t(
                'services.subtitle',
                'Commercial-grade production infrastructure engineered for fashion brands, studios, and luxury enterprises. From high-definition DTF heat transfers to CNC brass seal embossers.'
              )}
            </p>
          </div>

          {/* Filter Bar (Zero-Pill interactive segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#10131B] rounded-xl border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-['Outfit'] font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Product / Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                onSelectService(service);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group rounded-2xl bg-[#0D1016] border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Product Photograph */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1016] via-transparent to-black/20 opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-['Space_Mono'] text-slate-300 border border-white/10">
                    {service.leadTime}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-4 font-['Plus_Jakarta_Sans']">
                <div>
                  <MetadataText
                    items={[
                      service.categoryLabel,
                      { label: `MOQ: ${service.moq}`, isMono: true },
                    ]}
                    separator="·"
                    size="xs"
                  />

                  <h3 className="font-['Outfit'] text-xl font-bold text-white tracking-tight mt-2 group-hover:text-slate-200 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Card Action & Price Strip */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-['Space_Mono']">
                  <div>
                    <span className="text-slate-500 block text-[10px]">{t('services.startAt', 'STARTING AT')}</span>
                    <span className="text-white font-bold">{service.pricingStartingAt}</span>
                  </div>
                  <span className="text-slate-300 group-hover:text-white flex items-center gap-1 group-hover:underline underline-offset-4">
                    {t('services.inspectSpecs', 'Inspect Specs & Order')} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Turnkey Production Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#121620] via-[#141A26] to-[#121620] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-['Space_Mono'] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-300" />
              CUSTOM BULK &amp; MULTI-PRODUCT CONTRACTS
            </span>
            <h3 className="text-xl sm:text-2xl font-['Outfit'] font-bold text-white tracking-tight">
              {t('services.bundleTitle', 'Need Multi-Discipline Production Bundling?')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
              {t(
                'services.bundleSubtitle',
                'We coordinate full turnkey product drops: custom streetwear hoodies + DTF gang sheets + ceramic mugs + laser-etched tumblers + foiled flyer suites packaged together under unified brand art direction.'
              )}
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Enterprise / Multi-Product Production Bundle Inquiry')}
            className="px-5 py-2.5 text-xs font-semibold font-['Outfit'] text-slate-950 bg-gradient-to-b from-white to-slate-200 rounded-lg hover:to-slate-100 transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            {t('services.bundleCta', 'Request Multi-Product Quote')}
          </button>
        </div>
      </Container>
    </section>
  );
};
