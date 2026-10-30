import React, { useState } from 'react';
import { ServiceProduct, SERVICES_PRODUCTS } from '../../data/services';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  FileCheck2,
  ChevronDown,
  UploadCloud,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Phone
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';

interface ServiceDetailPageProps {
  service: ServiceProduct;
  onBack: () => void;
  onSelectService: (service: ServiceProduct) => void;
  onOpenInquiry: (initialOverview: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectService,
  onOpenInquiry,
}) => {
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState<number>(service.pricingTiers[0].quantity);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    service.customOptions.forEach((opt) => {
      initial[opt.name] = opt.options[0];
    });
    return initial;
  });
  const [simulatedFile, setSimulatedFile] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Calculate pricing tier
  const matchedTier =
    service.pricingTiers
      .slice()
      .reverse()
      .find((tier) => quantity >= tier.quantity) || service.pricingTiers[0];

  const estimatedTotal = (quantity * matchedTier.pricePerUnit).toFixed(2);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSimulatedFile(e.target.files[0].name);
    }
  };

  const handleProceedToInquiry = () => {
    const optionsText = Object.entries(selectedOptions)
      .map(([k, v]) => `${k}: ${v}`)
      .join(' | ');

    const summary = `Product Commission: ${service.name}
Quantity: ${quantity} ${matchedTier.unitLabel}s
Estimated Base Total: $${estimatedTotal} ($${matchedTier.pricePerUnit.toFixed(2)}/unit)
Configuration: ${optionsText}
Lead Time: ${service.leadTime}
Uploaded Vector Asset: ${simulatedFile || 'To be provided'}`;

    onOpenInquiry(summary);
  };

  return (
    <div className="min-h-screen bg-[#090A0D] text-slate-100 font-['Plus_Jakarta_Sans'] pt-20 sm:pt-24 pb-24">
      <Container size="wide">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs font-['Space_Mono']">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t('common.returnToCatalog', 'RETURN TO CATALOG')}</span>
          </button>

          <MetadataText
            items={[
              { label: 'CATALOGUE', isMono: true },
              service.categoryLabel.toUpperCase(),
              { label: service.leadTime.toUpperCase(), isMono: true },
            ]}
            separator="·"
          />
        </div>

        {/* Product Hero Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          {/* Left Column: Product Photography & Material Specifications */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-black/30 opacity-70" />

              {/* Genuine Product Label Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-['Space_Mono'] text-white border border-white/15">
                  {t('common.authenticProductionCraft', 'AUTHENTIC PRODUCTION CRAFT')}
                </span>
                <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-['Space_Mono'] text-slate-300 border border-white/15">
                  {t('common.moq', 'MOQ')}: {service.moq}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block">
                  {service.tagline}
                </span>
                <h1 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white tracking-tight">
                  {service.name}
                </h1>
              </div>
            </div>

            {/* Material Engineering Breakdown */}
            <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/10 flex flex-col gap-4">
              <h3 className="font-['Outfit'] text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-300" />
                Raw Material Composition &amp; Standards
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-['Plus_Jakarta_Sans']">
                {service.materials.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-black/30 p-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Features */}
            <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/10 flex flex-col gap-3">
              <h3 className="font-['Outfit'] text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                Laboratory Performance Characteristics
              </h3>
              <div className="space-y-2 text-xs text-slate-300 font-['Plus_Jakarta_Sans']">
                {service.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Order & Interactive Price Calculator */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10131B] border border-white/15 flex flex-col gap-6 shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] block mb-1">
                  INSTANT SPECIFICATION CALCULATOR
                </span>
                <h2 className="text-2xl font-['Outfit'] font-bold text-white tracking-tight">
                  Configure Custom Order
                </h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Select your quantity and production finishes to generate a live instant quotation.
                </p>
              </div>

              {/* Quantity Selector Slider & Presets */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 font-['Space_Mono'] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">PRODUCTION QUANTITY</span>
                  <span className="text-white text-base font-bold tabular-nums">
                    {quantity} {matchedTier.unitLabel}s
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {service.pricingTiers.map((tier) => (
                    <button
                      key={tier.quantity}
                      type="button"
                      onClick={() => setQuantity(tier.quantity)}
                      className={`py-2 px-1 text-center rounded-lg border text-xs transition-colors cursor-pointer ${
                        quantity === tier.quantity
                          ? 'bg-white text-slate-950 font-bold border-white'
                          : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="tabular-nums">{tier.quantity}+</div>
                      <div className="text-[10px] opacity-75">${tier.pricePerUnit.toFixed(2)}/ea</div>
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min={service.pricingTiers[0].quantity}
                  max={service.pricingTiers[service.pricingTiers.length - 1].quantity * 1.5}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-white bg-slate-800 rounded-lg h-1.5 cursor-pointer mt-1"
                />
              </div>

              {/* Custom Finishing Options */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {service.customOptions.map((opt) => (
                  <div key={opt.name} className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono']">
                      {opt.name}
                    </label>
                    {opt.type === 'select' ? (
                      <div className="relative">
                        <select
                          value={selectedOptions[opt.name]}
                          onChange={(e) => handleOptionChange(opt.name, e.target.value)}
                          className="w-full bg-[#080A0E] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white appearance-none focus:outline-none focus:border-white/40 cursor-pointer pr-10"
                        >
                          {opt.options.map((option) => (
                            <option key={option} value={option} className="bg-[#0D1016] text-white">
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {opt.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleOptionChange(opt.name, option)}
                            className={`p-2.5 text-xs text-left rounded-lg border transition-colors cursor-pointer ${
                              selectedOptions[opt.name] === option
                                ? 'bg-white/10 text-white border-white/40 font-semibold'
                                : 'bg-black/30 text-slate-400 border-white/5 hover:border-white/15 hover:text-slate-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Artwork Upload Simulation Box */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] flex items-center justify-between">
                  <span>VECTOR ARTWORK UPLOAD</span>
                  <span className="text-slate-500">.AI, .EPS, .PDF, .SVG</span>
                </label>
                <label className="border border-dashed border-white/20 hover:border-white/40 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer bg-black/20 hover:bg-black/40 transition-colors">
                  <UploadCloud className="w-5 h-5 text-slate-400" />
                  <span className="text-xs text-slate-300 text-center">
                    {simulatedFile ? (
                      <span className="text-emerald-400 font-['Space_Mono'] font-bold">
                        ✓ {simulatedFile}
                      </span>
                    ) : (
                      'Click or drag vector file to attach'
                    )}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".ai,.eps,.pdf,.svg,.png,.jpg"
                    onChange={handleSimulateUpload}
                  />
                </label>
              </div>

              {/* Pricing Calculation Summary Box */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-2 font-['Space_Mono']">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>PRICE PER UNIT:</span>
                  <span className="text-white font-bold tabular-nums">
                    ${matchedTier.pricePerUnit.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>ESTIMATED LEAD TIME:</span>
                  <span className="text-white font-bold">{service.leadTime}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-bold uppercase">
                    {t('quote.total', 'ESTIMATED TOTAL')}:
                  </span>
                  <span className="text-2xl font-bold text-white tabular-nums">
                    ${estimatedTotal}
                  </span>
                </div>
              </div>

              {/* Order Submission Buttons */}
              <div className="space-y-2.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleProceedToInquiry}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  {t('common.configureAndInquire', 'Configure & Request Quote')}
                </Button>

                {/* Direct WhatsApp Conversion Action */}
                <a
                  href={getWhatsAppUrl({
                    service: service.name,
                    quantity: quantity,
                    total: `$${estimatedTotal}`,
                    context: `Configuration: ${Object.entries(selectedOptions).map(([k, v]) => `${k}: ${v}`).join(', ')} | Lead Time: ${service.leadTime}`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-[0_4px_18px_rgba(16,185,129,0.3)] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {language === 'rw'
                      ? 'Tumiza Ako Kanya kuri WhatsApp (+250 789 320 757)'
                      : language === 'fr'
                      ? 'Commander Directement sur WhatsApp (+250 789 320 757)'
                      : 'Fast Order via WhatsApp (+250 789 320 757)'}
                  </span>
                </a>

                <div className="pt-2 flex items-center justify-between text-[11px] font-['Space_Mono'] text-slate-400">
                  <a
                    href={CONTACT_DETAILS.telLink}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Call: {CONTACT_DETAILS.phoneFormatted}</span>
                  </a>
                  <span>Kigali Atelier Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mb-16 p-8 rounded-2xl bg-[#0D1016] border border-white/10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <h3 className="font-['Outfit'] text-xl font-bold text-white">
              {t('common.productionSpecifications', 'Engineering & Manufacturing Parameters')}
            </h3>
            <span className="text-xs font-['Space_Mono'] text-slate-500">
              ISO 9001 COMPLIANT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Space_Mono'] text-xs">
            {service.specs.map((s, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                <span className="text-slate-500">{s.label}</span>
                <span className="text-slate-200 font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Press File Preparation Guidelines */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono']">
              PRODUCTION HYGIENE
            </div>
            <h3 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white tracking-tight">
              Pre-Press File Guidelines
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              To guarantee faithful color fidelity, razor-sharp edges, and avoid production delays,
              please adhere strictly to our vector prepress protocols.
            </p>
          </div>

          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0E1118] border border-white/10 space-y-3 font-['Plus_Jakarta_Sans'] text-xs text-slate-300">
            {service.prepressGuidelines.map((guide, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/5">
                <FileCheck2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{guide}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mb-16 p-8 rounded-2xl bg-[#0C0E14] border border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-['Outfit'] text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              Frequently Asked Questions
            </h3>
            <span className="text-xs font-['Space_Mono'] text-slate-500">
              DIRECTOR FAQ
            </span>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-black/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-['Outfit'] font-semibold text-sm text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeFaq === idx ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans'] border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Product Navigator */}
        <div className="pt-8 border-t border-white/10">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] block mb-6">
            EXPLORE PARALLEL PRODUCTION DISCIPLINES
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SERVICES_PRODUCTS.filter((s) => s.id !== service.id)
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 rounded-xl bg-[#0E1118] border border-white/10 hover:border-white/30 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-3 bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] font-semibold text-sm text-white group-hover:text-slate-200">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-['Space_Mono'] text-slate-500 block mt-1">
                      From {item.pricingStartingAt}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
