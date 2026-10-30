import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import { SERVICES_PRODUCTS, ServiceProduct } from '../../data/services';
import { QuoteFormData, ServiceSelectionId, DeliveryLogistics, ArtworkUpload } from '../../types/quote';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  UploadCloud,
  FileCheck2,
  Truck,
  Building2,
  Clock,
  Printer,
  FileText,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';

interface QuotationWizardProps {
  onBackToHome: () => void;
  onOpenBackendDocs: () => void;
}

export const QuotationWizard: React.FC<QuotationWizardProps> = ({
  onBackToHome,
  onOpenBackendDocs,
}) => {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceSelectionId>('dtf');

  // Selected Service object
  const activeService =
    SERVICES_PRODUCTS.find((s) => s.id === selectedServiceId) || SERVICES_PRODUCTS[0];

  // Step 2: Options
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    activeService.customOptions.forEach((opt) => {
      initial[opt.name] = opt.options[0];
    });
    return initial;
  });

  // Update options if service changes
  const handleSelectService = (id: ServiceSelectionId) => {
    setSelectedServiceId(id);
    const newService = SERVICES_PRODUCTS.find((s) => s.id === id) || SERVICES_PRODUCTS[0];
    const initial: Record<string, string> = {};
    newService.customOptions.forEach((opt) => {
      initial[opt.name] = opt.options[0];
    });
    setSelectedOptions(initial);
    setQuantity(newService.pricingTiers[0].quantity);
  };

  // Step 3: Quantity
  const [quantity, setQuantity] = useState<number>(activeService.pricingTiers[0].quantity);

  // Step 4: Artwork
  const [artwork, setArtwork] = useState<ArtworkUpload>({
    fileName: '',
    fileSize: '',
    fileType: '',
    colorMode: 'CMYK',
    resolutionDPI: 300,
    hasOutlinedFonts: true,
    notes: '',
  });

  // Step 5: Delivery
  const [logistics, setLogistics] = useState<DeliveryLogistics>({
    method: 'express_courier',
    recipientName: '',
    companyName: '',
    email: '',
    phone: '',
    addressLine1: '',
    city: '',
    postalCode: '',
    country: 'United Kingdom',
    rushCadence: false,
    specialInstructions: '',
  });

  // Step 6: Confirmation
  const [quoteReferenceId, setQuoteReferenceId] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Pricing calculations
  const matchedTier =
    activeService.pricingTiers
      .slice()
      .reverse()
      .find((tier) => quantity >= tier.quantity) || activeService.pricingTiers[0];

  const estimatedUnitPrice = matchedTier.pricePerUnit;
  const estimatedSubtotal = quantity * estimatedUnitPrice;
  const shippingCost =
    logistics.method === 'atelier_pickup' ? 0 : logistics.rushCadence ? 45.0 : 25.0;
  const estimatedTotal = estimatedSubtotal + shippingCost;

  const handleSimulateArtworkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);
      setArtwork((prev) => ({
        ...prev,
        fileName: file.name,
        fileSize: `${sizeInMB} MB`,
        fileType: file.name.split('.').pop()?.toUpperCase() || 'VECTOR',
      }));
    }
  };

  const handleNextStep = () => {
    setValidationError(null);

    // Validation rules
    if (currentStep === 1 && !selectedServiceId) {
      setValidationError('Please select a production service to proceed.');
      return;
    }

    if (currentStep === 5) {
      if (!logistics.recipientName.trim() || !logistics.email.trim()) {
        setValidationError('Please enter your recipient contact name and valid email address.');
        return;
      }
      if (
        logistics.method !== 'atelier_pickup' &&
        (!logistics.addressLine1.trim() || !logistics.city.trim() || !logistics.postalCode.trim())
      ) {
        setValidationError('Please enter complete delivery address details for courier dispatch.');
        return;
      }
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setValidationError(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = () => {
    if (!termsAccepted) {
      setValidationError('Please confirm acceptance of pre-press proofs and production guidelines.');
      return;
    }
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ref = `BD-QUOTE-2026-${randomSuffix}`;
    setQuoteReferenceId(ref);
    setIsConfirmed(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const steps = [
    { num: '01', label: language === 'rw' ? 'Serivisi' : language === 'fr' ? 'Service' : 'Service' },
    { num: '02', label: language === 'rw' ? 'Imirangirize' : language === 'fr' ? 'Finitions' : 'Finishing' },
    { num: '03', label: language === 'rw' ? 'Ingano' : language === 'fr' ? 'Quantité' : 'Quantity' },
    { num: '04', label: language === 'rw' ? 'Dosiye' : language === 'fr' ? 'Fichier' : 'Artwork' },
    { num: '05', label: language === 'rw' ? 'Kugezwaho' : language === 'fr' ? 'Logistique' : 'Logistics' },
    { num: '06', label: language === 'rw' ? 'Kwemeza' : language === 'fr' ? 'Confirmation' : 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-[#090A0D] text-slate-100 font-['Plus_Jakarta_Sans'] pt-20 sm:pt-24 pb-24">
      <Container size="wide">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4 text-xs font-['Space_Mono']">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t('common.returnToStudio', 'RETURN TO STUDIO')}</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBackendDocs}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white underline underline-offset-4 decoration-white/30 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t('common.inspectBlueprint', 'Inspect Backend Integration Blueprint')}</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-400 hidden sm:inline">{t('common.prototypeEngine', 'PROTOTYPE QUOTE ENGINE')}</span>
          </div>
        </div>

        {/* Wizard Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block mb-2">
            {t('quote.kicker', 'INTEGRATED ESTIMATION WORKBENCH')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            {t('quote.title', 'Production Quotation & Prepress Order')}
          </h1>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            {t(
              'quote.subtitle',
              'Configure multi-discipline manufacturing parameters, verify vector prepress requirements, and generate an instant itemized quotation with real-time volume tier pricing.'
            )}
          </p>
        </div>

        {/* Step Progress Tracker (Zero-Pill compliant) */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex items-center gap-3 sm:gap-6 min-w-max text-xs font-['Space_Mono']">
            {steps.map((s, idx) => {
              const stepNumber = idx + 1;
              const isActive = currentStep === stepNumber;
              const isPast = currentStep > stepNumber;

              return (
                <div key={s.num} className="flex items-center gap-3">
                  <div
                    className={`flex items-center gap-2 transition-colors ${
                      isActive
                        ? 'text-white font-bold'
                        : isPast
                        ? 'text-slate-300'
                        : 'text-slate-600'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] border ${
                        isActive
                          ? 'bg-white text-black border-white'
                          : isPast
                          ? 'bg-white/10 text-white border-white/20'
                          : 'border-white/10 text-slate-600'
                      }`}
                    >
                      {isPast ? <Check className="w-3.5 h-3.5" /> : s.num}
                    </span>
                    <span className="uppercase">{s.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-6 sm:w-10 h-[1px] bg-white/10" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div className="mb-8 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs font-['Space_Mono'] text-red-200 flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Main Step Arena with Side Summary Tally */}
        {!isConfirmed ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Dynamic Body */}
            <div className="lg:col-span-8 bg-[#0E1118] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {/* STEP 1: SERVICE SELECTION */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      01. Select Manufacturing Service or Product
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose from our 8 dedicated production lines or prepress engineering services.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_PRODUCTS.map((prod) => {
                      const isSelected = selectedServiceId === prod.id;
                      return (
                        <div
                          key={prod.id}
                          onClick={() => handleSelectService(prod.id as ServiceSelectionId)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                            isSelected
                              ? 'bg-white/10 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]'
                              : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <span className="text-[10px] font-['Space_Mono'] uppercase text-slate-400 block">
                                {prod.categoryLabel}
                              </span>
                              <h4 className="font-['Outfit'] font-bold text-base mt-0.5">
                                {prod.name}
                              </h4>
                            </div>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-white bg-white text-black' : 'border-white/20'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </div>

                          <div className="w-full aspect-[21/9] rounded-lg overflow-hidden bg-black mb-3">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="flex items-center justify-between text-xs font-['Space_Mono'] text-slate-400 pt-2 border-t border-white/5">
                            <span>From {prod.pricingStartingAt}</span>
                            <span className="tabular-nums">MOQ: {prod.moq}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: FINISHING & SPECIFICATIONS */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      02. Configure Specifications &amp; Finishes
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Customizing options for: <span className="text-white font-semibold">{activeService.name}</span>
                    </p>
                  </div>

                  <div className="space-y-5">
                    {activeService.customOptions.map((opt) => (
                      <div key={opt.name} className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-slate-300 font-['Space_Mono']">
                          {opt.name}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {opt.options.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setSelectedOptions((prev) => ({ ...prev, [opt.name]: option }))}
                              className={`p-3 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                                selectedOptions[opt.name] === option
                                  ? 'bg-white/10 text-white border-white/40 font-semibold'
                                  : 'bg-black/30 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Material Invariant Reminder */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-['Space_Mono']">
                    <span className="text-slate-400 uppercase block">STANDARD MANUFACTURING PROTOCOL</span>
                    <ul className="space-y-1 text-slate-300 font-['Plus_Jakarta_Sans']">
                      {activeService.materials.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* STEP 3: QUANTITY & TIER PRICING */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      03. Volume Quantity &amp; Tier Discount
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tier pricing automatically updates based on production scale.
                    </p>
                  </div>

                  {/* Quantity Slider */}
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4 font-['Space_Mono']">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">DESIRED RUN SIZE:</span>
                      <span className="text-2xl font-bold text-white tabular-nums">
                        {quantity} {matchedTier.unitLabel}s
                      </span>
                    </div>

                    <input
                      type="range"
                      min={activeService.pricingTiers[0].quantity}
                      max={activeService.pricingTiers[activeService.pricingTiers.length - 1].quantity * 1.5}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full accent-white bg-slate-800 rounded-lg h-2 cursor-pointer"
                    />

                    {/* Quick Preset Buttons */}
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {activeService.pricingTiers.map((tier) => (
                        <button
                          key={tier.quantity}
                          type="button"
                          onClick={() => setQuantity(tier.quantity)}
                          className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                            quantity === tier.quantity
                              ? 'bg-white text-black font-bold border-white'
                              : 'bg-black/30 text-slate-400 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="text-xs">{tier.quantity}+</div>
                          <div className="text-[10px] opacity-75">${tier.pricePerUnit.toFixed(2)}/ea</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tier Table Display */}
                  <div className="border border-white/10 rounded-xl overflow-hidden font-['Space_Mono'] text-xs">
                    <div className="p-3 bg-black/60 border-b border-white/10 text-slate-400 flex items-center justify-between">
                      <span>VOLUME BRACKET</span>
                      <span>UNIT PRICE</span>
                    </div>
                    {activeService.pricingTiers.map((tier, idx) => {
                      const isCurrentBracket = matchedTier.quantity === tier.quantity;
                      return (
                        <div
                          key={idx}
                          className={`p-3 flex items-center justify-between border-b border-white/5 last:border-0 ${
                            isCurrentBracket ? 'bg-white/10 text-white font-bold' : 'text-slate-400'
                          }`}
                        >
                          <span>{tier.quantity}+ {tier.unitLabel}s</span>
                          <span className="tabular-nums">${tier.pricePerUnit.toFixed(2)} / unit</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: ARTWORK & PREPRESS VALIDATION */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      04. Artwork Asset &amp; Prepress Verification
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Upload your vector design files (.AI, .EPS, .PDF, .SVG) or describe pre-press requirements.
                    </p>
                  </div>

                  {/* Upload Simulator */}
                  <label className="border-2 border-dashed border-white/20 hover:border-white/40 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer bg-black/30 hover:bg-black/50 transition-all">
                    <UploadCloud className="w-8 h-8 text-slate-300" />
                    <div className="text-center">
                      <div className="font-['Outfit'] font-semibold text-white text-sm">
                        {artwork.fileName ? (
                          <span className="text-emerald-400 font-['Space_Mono']">
                            ✓ {artwork.fileName} ({artwork.fileSize})
                          </span>
                        ) : (
                          'Click to upload or drag vector file'
                        )}
                      </div>
                      <span className="text-xs text-slate-500 font-['Space_Mono'] mt-1 block">
                        SUPPORTED: .AI, .EPS, .PDF, .SVG (MAX 500MB)
                      </span>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept=".ai,.eps,.pdf,.svg,.png,.jpg"
                      onChange={handleSimulateArtworkUpload}
                    />
                  </label>

                  {/* Prepress Invariants Checklist */}
                  <div className="space-y-3 p-5 rounded-xl bg-black/40 border border-white/5 font-['Plus_Jakarta_Sans'] text-xs">
                    <span className="text-xs font-['Space_Mono'] uppercase text-slate-400 block mb-2">
                      PRE-PRESS COMPLIANCE PROTOCOL:
                    </span>
                    <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={artwork.hasOutlinedFonts}
                        onChange={(e) => setArtwork((prev) => ({ ...prev, hasOutlinedFonts: e.target.checked }))}
                        className="accent-white w-4 h-4 rounded"
                      />
                      <span>All fonts and strokes have been outlined into pure Bézier vector curves</span>
                    </label>
                    <div className="flex items-center gap-2 text-slate-400 pt-2 border-t border-white/5">
                      <FileCheck2 className="w-4 h-4 text-slate-300" />
                      <span>Color profile will be automatically checked for Fogra 51 / ISO 12647-2 standards.</span>
                    </div>
                  </div>

                  {/* Production Notes Input */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block mb-2">
                      Specific Prepress Instructions / Pantone Codes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={artwork.notes}
                      onChange={(e) => setArtwork((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="e.g. Pantone Black 6C, center 3.5 inches below collar on hoodie, hot peel required..."
                      className="w-full bg-[#080A0E] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-white/40 resize-none font-['Plus_Jakarta_Sans']"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: COLLECTION / DELIVERY LOGISTICS */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      05. Collection &amp; Delivery Logistics
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose between personal atelier collection or insured courier dispatch.
                    </p>
                  </div>

                  {/* Method Radio Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setLogistics((prev) => ({ ...prev, method: 'express_courier' }))}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        logistics.method === 'express_courier'
                          ? 'bg-white/10 text-white border-white'
                          : 'bg-black/30 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['Outfit'] font-bold text-sm">Insured Express Courier</span>
                        <Truck className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-slate-400">
                        Dispatched with tracked door-to-door signature delivery ($25.00)
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLogistics((prev) => ({ ...prev, method: 'atelier_pickup' }))}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        logistics.method === 'atelier_pickup'
                          ? 'bg-white/10 text-white border-white'
                          : 'bg-black/30 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['Outfit'] font-bold text-sm">Atelier Collection</span>
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-slate-400">
                        Collect directly from studio reception during business hours (Complimentary)
                      </span>
                    </button>
                  </div>

                  {/* Rush Surcharge Toggle */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-['Space_Mono']">
                    <div>
                      <span className="text-white font-bold block">PRIORITY RUSH DISPATCH (+24-48H)</span>
                      <span className="text-slate-400 text-[11px] font-['Plus_Jakarta_Sans']">
                        Fast-tracks shop-floor tooling &amp; dedicated conveyor queue (+$45.00)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={logistics.rushCadence}
                      onChange={(e) => setLogistics((prev) => ({ ...prev, rushCadence: e.target.checked }))}
                      className="accent-white w-4 h-4 rounded cursor-pointer"
                    />
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-['Plus_Jakarta_Sans']">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                        Recipient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={logistics.recipientName}
                        onChange={(e) => setLogistics((prev) => ({ ...prev, recipientName: e.target.value }))}
                        placeholder="Elena Vance"
                        className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={logistics.companyName}
                        onChange={(e) => setLogistics((prev) => ({ ...prev, companyName: e.target.value }))}
                        placeholder="Atelier Vance Ltd"
                        className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={logistics.email}
                        onChange={(e) => setLogistics((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="elena@ateliervance.com"
                        className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                        Contact Telephone
                      </label>
                      <input
                        type="tel"
                        value={logistics.phone}
                        onChange={(e) => setLogistics((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+44 20 7946 0991"
                        className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                      />
                    </div>

                    {logistics.method !== 'atelier_pickup' && (
                      <>
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                            Delivery Address *
                          </label>
                          <input
                            type="text"
                            required
                            value={logistics.addressLine1}
                            onChange={(e) => setLogistics((prev) => ({ ...prev, addressLine1: e.target.value }))}
                            placeholder="14 Bruton Street, Mayfair"
                            className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                            City / Municipality *
                          </label>
                          <input
                            type="text"
                            required
                            value={logistics.city}
                            onChange={(e) => setLogistics((prev) => ({ ...prev, city: e.target.value }))}
                            placeholder="London"
                            className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-1">
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            required
                            value={logistics.postalCode}
                            onChange={(e) => setLogistics((prev) => ({ ...prev, postalCode: e.target.value }))}
                            placeholder="W1J 6QA"
                            className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-white/40"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 6: REVIEW & AUDIT */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Outfit'] font-bold text-xl text-white">
                      06. Quotation Review &amp; Prepress Confirmation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Verify order specifics, logistics, and total quotation prior to submission.
                    </p>
                  </div>

                  {/* Summary Table */}
                  <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4 font-['Space_Mono'] text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-slate-400">SERVICE DISCIPLINE:</span>
                      <span className="text-white font-bold">{activeService.name}</span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-slate-400">ORDER VOLUME:</span>
                      <span className="text-white tabular-nums">
                        {quantity} {matchedTier.unitLabel}s (${estimatedUnitPrice.toFixed(2)}/unit)
                      </span>
                    </div>

                    <div className="pb-3 border-b border-white/10 space-y-1">
                      <span className="text-slate-400 block mb-1">CUSTOM FINISHING CONFIGURATION:</span>
                      {Object.entries(selectedOptions).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-slate-300">
                          <span className="text-slate-500">{k}:</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-slate-400">ARTWORK STATUS:</span>
                      <span className="text-white">
                        {artwork.fileName ? `✓ ${artwork.fileName}` : 'Manual review / to be supplied'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-slate-400">LOGISTICS METHOD:</span>
                      <span className="text-white">
                        {logistics.method === 'atelier_pickup' ? 'Atelier Pickup' : 'Express Tracked Courier'}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-base">
                      <span className="text-slate-300 font-bold">TOTAL ESTIMATED QUOTE:</span>
                      <span className="text-2xl font-bold text-white tabular-nums">
                        ${estimatedTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Terms Acceptance Checkbox */}
                  <div className="p-4 rounded-xl bg-[#11151E] border border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer text-xs font-['Plus_Jakarta_Sans'] text-slate-300">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="accent-white w-4 h-4 rounded shrink-0 mt-0.5"
                      />
                      <span>
                        I accept the production prepress guidelines. I understand digital proofs will be generated
                        and submitted for final sign-off before manufacturing commences.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Controls Bar */}
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  {t('quote.prev', 'Previous Step')}
                </Button>

                {currentStep < 6 ? (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleNextStep}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {t('quote.next', 'Continue to')} {steps[currentStep].label}
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleFinalSubmit}
                    icon={<CheckCircle2 className="w-4 h-4" />}
                  >
                    {t('quote.submit', 'Submit Quotation & Generate Specimen ID')}
                  </Button>
                )}
              </div>
            </div>

            {/* Sticky Live Quotation Tally Card */}
            <div className="lg:col-span-4 bg-[#10131B] border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-2xl sticky top-24">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-['Space_Mono']">
                  <span className="text-slate-400">
                    {language === 'rw' ? 'INCAMAKE Y\'IGICIRO' : language === 'fr' ? 'DEVIS EN COURS' : 'RUNNING QUOTE ESTIMATE'}
                  </span>
                  <span className="text-slate-200">
                    {language === 'rw' ? 'AKO KANYA' : language === 'fr' ? 'EN DIRECT' : 'LIVE TALLY'}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-['Outfit'] font-bold text-lg text-white">
                    {activeService.name}
                  </h4>
                  <span className="text-xs text-slate-400 font-['Space_Mono']">
                    {language === 'rw' ? 'IGIHE CYO GUKORA:' : language === 'fr' ? 'DÉLAI DE PRODUCTION :' : 'LEAD TIME:'} {activeService.leadTime}
                  </span>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/5 text-xs font-['Space_Mono']">
                  <div className="flex justify-between text-slate-400">
                    <span>{language === 'rw' ? 'IKIGUZI CY\'IGICE' : language === 'fr' ? 'PRIX UNITAIRE' : 'UNIT RATE'} ({matchedTier.quantity}+):</span>
                    <span className="text-slate-200 tabular-nums">${estimatedUnitPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t('quote.subtotal', 'SUBTOTAL')} ({quantity} {language === 'rw' ? 'ibicuruzwa' : language === 'fr' ? 'unités' : 'units'}):</span>
                    <span className="text-slate-200 tabular-nums">${estimatedSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t('quote.shipping', 'LOGISTICS / SHIPPING')}:</span>
                    <span className="text-slate-200 tabular-nums">
                      {shippingCost === 0 ? (language === 'rw' ? 'UBUNTU (Kwitwarira)' : language === 'fr' ? 'GRATUIT (Retrait)' : 'FREE (Pickup)') : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                    <span className="text-white font-bold">{t('quote.total', 'ESTIMATED TOTAL')}:</span>
                    <span className="text-xl font-bold text-white tabular-nums">
                      ${estimatedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-400 font-['Space_Mono'] space-y-2">
                <div className="flex items-center justify-between">
                  <span>{language === 'rw' ? 'IGIHE CY\'AGACIRO: IMINSI 30' : language === 'fr' ? 'VALIDITÉ DU DEVIS : 30 JOURS' : 'ESTIMATE VALIDITY: 30 DAYS'}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                  </span>
                </div>
                <span className="block text-slate-400 leading-normal">
                  {language === 'rw' ? 'Isuzuma ryo gucapa ryoherezwa mu masaha 24.' : language === 'fr' ? 'BAT prépresse envoyé sous 24h après validation.' : 'Pre-production proofs dispatched within 24h of review.'}
                </span>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl({
                      service: activeService.name,
                      quantity: quantity,
                      total: `$${estimatedTotal}`,
                      context: 'Prepress quotation inquiry in progress',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Atelier Desk</span>
                  </a>
                  <a
                    href={CONTACT_DETAILS.telLink}
                    className="text-slate-400 hover:text-white"
                  >
                    {CONTACT_DETAILS.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 6 CONFIRMATION SCREEN */
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111520] via-[#0E121B] to-[#0A0D14] border border-white/20 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono']">
                {language === 'rw' ? 'UMUSHINGA WABARUWE' : language === 'fr' ? 'DEVIS VALIDÉ' : 'QUOTATION DRAFT RESERVED'}
              </span>
              <h2 className="text-3xl font-['Outfit'] font-bold text-white tracking-tight mt-1">
                {t('quote.refGenerated', 'Quotation Reference Generated')}
              </h2>
              <div className="mt-3 p-3 rounded-lg bg-black/60 border border-white/10 inline-block font-['Space_Mono'] text-lg font-bold text-white tracking-widest select-all">
                {quoteReferenceId}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              {language === 'rw' ? (
                <>
                  Murakoze, <span className="text-white font-medium">{logistics.recipientName}</span>. Igiciro cyawe cyo gukora{' '}
                  <span className="text-white font-medium">{quantity} {activeService.name}</span> cyahawe numero{' '}
                  <span className="text-white font-mono">{quoteReferenceId}</span>. Umuyobozi ushinzwe icapa azasuzuma dosiye zose zoherereze inyemezabwishyu mu masaha 24 y'akazi.
                </>
              ) : language === 'fr' ? (
                <>
                  Merci, <span className="text-white font-medium">{logistics.recipientName}</span>. Votre devis de fabrication pour{' '}
                  <span className="text-white font-medium">{quantity} {activeService.name}</span> a reçu la référence{' '}
                  <span className="text-white font-mono">{quoteReferenceId}</span>. Un directeur prépresse inspectera vos fichiers vectoriels et émettra la facture officielle sous 24 heures ouvrées.
                </>
              ) : (
                <>
                  Thank you, <span className="text-white font-medium">{logistics.recipientName}</span>. Your manufacturing quote for{' '}
                  <span className="text-white font-medium">{quantity} {activeService.name}</span> has been assigned reference ID{' '}
                  <span className="text-white font-mono">{quoteReferenceId}</span>. A studio prepress director will inspect the vector files and transmit the formal commercial invoice within 24 business hours.
                </>
              )}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-left text-xs font-['Space_Mono'] space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">{t('quote.total', 'ESTIMATED TOTAL')}:</span>
                <span className="text-white font-bold">${estimatedTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'rw' ? 'IMELI YO GOHEREZAHO:' : language === 'fr' ? 'EMAIL DESTINATAIRE :' : 'DISPATCH RECIPIENT:'}</span>
                <span className="text-white">{logistics.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'rw' ? 'IGIHE CYO GUKORA:' : language === 'fr' ? 'DÉLAI ESTIMÉ :' : 'TARGET DISPATCH:'}</span>
                <span className="text-white">{activeService.leadTime}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/5">
                <span className="text-slate-500">ATELIER CONTACT:</span>
                <span className="text-emerald-400 font-mono font-bold">+250 789 320 757</span>
              </div>
            </div>

            {/* High-Conversion Primary WhatsApp Direct Dispatch Action */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto space-y-3">
              <span className="text-xs font-['Space_Mono'] text-emerald-400 font-bold block uppercase">
                {language === 'rw'
                  ? 'KOMEZA AKO KANYA KURI WHATSAPP'
                  : language === 'fr'
                  ? 'TRANSMISSION IMMÉDIATE SUR WHATSAPP'
                  : 'INSTANT ATELIER WHATSAPP DISPATCH'}
              </span>
              <p className="text-xs text-slate-300">
                {language === 'rw'
                  ? 'Ohereza iyi nimero y\'igiciro n\'ibisobanuro ako kanya kuri WhatsApp ya ateliye (+250 789 320 757) kugira ngo byemezwe mu buryo bwihuse.'
                  : language === 'fr'
                  ? 'Transmettez cette référence et vos paramètres immédiatement sur WhatsApp (+250 789 320 757) pour un bon à tirer express.'
                  : 'Forward this reference and project specs directly to the atelier WhatsApp desk (+250 789 320 757) for immediate prepress authorization.'}
              </p>
              <a
                href={getWhatsAppUrl({
                  referenceId: quoteReferenceId,
                  service: activeService.name,
                  quantity: quantity,
                  total: `$${estimatedTotal.toFixed(2)}`,
                  context: `Recipient: ${logistics.recipientName} (${logistics.email}) | Method: ${logistics.method} | Lead Time: ${activeService.leadTime}`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all shadow-[0_4px_20px_rgba(16,185,129,0.35)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === 'rw'
                    ? 'Ohereza Igiciro kuri WhatsApp (+250 789 320 757)'
                    : language === 'fr'
                    ? 'Transmettre le Devis sur WhatsApp (+250 789 320 757)'
                    : 'Send Quote via WhatsApp (+250 789 320 757)'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Supplementary Studio Actions */}
            <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <a
                href={CONTACT_DETAILS.telLink}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-['Space_Mono'] border border-white/15 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Atelier: +250 789 320 757</span>
              </a>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  window.print();
                }}
                icon={<Printer className="w-3.5 h-3.5" />}
              >
                {t('quote.print', 'Print Specification Summary')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setIsConfirmed(false);
                  setCurrentStep(1);
                  onBackToHome();
                }}
              >
                {t('quote.return', 'Return to Studio')}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
