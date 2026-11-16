import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Paperclip, X } from 'lucide-react';
import { APPROVED_SERVICES } from '../data/servicesData';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string;
  initialProductId?: string;
}

const inputClass = 'w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none transition focus:border-[#C0C0C0]';
const labelClass = 'mb-2 block text-sm font-medium text-[#E5E5E5]';
const isValidPhone = (value: string) => {
  const digits = value.match(/[0-9]/g)?.length || 0;
  return /^[+0-9().\s-]+$/.test(value) && digits >= 7 && digits <= 15;
};

export const QuotationModal: React.FC<QuotationModalProps> = ({ isOpen, onClose, initialCategoryId, initialProductId }) => {
  const [categoryId, setCategoryId] = useState(initialCategoryId || APPROVED_SERVICES[0].id);
  const [productId, setProductId] = useState(initialProductId || '');
  const [quantity, setQuantity] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [requirements, setRequirements] = useState('');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fulfillment, setFulfillment] = useState('Collection');
  const [artworkName, setArtworkName] = useState('');
  const [artworkError, setArtworkError] = useState('');
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const dialogRef = useRef<HTMLElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const category = useMemo(() => APPROVED_SERVICES.find((item) => item.id === categoryId) || APPROVED_SERVICES[0], [categoryId]);
  const product = category.subitems.find((item) => item.id === productId);

  useEffect(() => {
    if (!isOpen) return;
    const nextCategoryId = initialCategoryId || APPROVED_SERVICES[0].id;
    const nextCategory = APPROVED_SERVICES.find((item) => item.id === nextCategoryId) || APPROVED_SERVICES[0];
    setCategoryId(nextCategory.id);
    setProductId(initialProductId && nextCategory.subitems.some((item) => item.id === initialProductId) ? initialProductId : nextCategory.subitems[0]?.id || '');
    setQuantity('');
    setDimensions('');
    setRequirements('');
    setFullName('');
    setOrganization('');
    setPhone('');
    setEmail('');
    setFulfillment('Collection');
    setArtworkName('');
    setArtworkError('');
    setWhatsAppUrl('');
  }, [isOpen, initialCategoryId, initialProductId]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusableElements = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) || []).filter((element) => element.getClientRects().length > 0);
    const initialFocus = dialogRef.current?.querySelector<HTMLElement>('[data-dialog-initial-focus]') || focusableElements()[0];
    initialFocus?.focus();

    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = focusableElements();
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleDialogKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleDialogKeys);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!whatsAppUrl) return;
    dialogRef.current?.querySelector<HTMLElement>('[data-success-heading]')?.focus();
  }, [whatsAppUrl]);

  useEffect(() => {
    if (!category.subitems.some((item) => item.id === productId)) {
      setProductId(category.subitems[0]?.id || '');
    }
  }, [category, productId]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phoneInput = event.currentTarget.querySelector<HTMLInputElement>('#quote-phone');
    if (phoneInput && !isValidPhone(phone)) {
      phoneInput.setCustomValidity('Enter a valid phone number containing 7 to 15 digits.');
      phoneInput.reportValidity();
      return;
    }
    phoneInput?.setCustomValidity('');
    const details = [
      'Hello BARACK DESIGN, I would like to request a quotation.',
      `Service: ${category.title}`,
      `Product/project: ${product?.name || 'To be discussed'}`,
      quantity ? `Quantity: ${quantity}` : '',
      dimensions ? `Dimensions or size: ${dimensions}` : '',
      `Collection/delivery preference: ${fulfillment} (please confirm availability)`,
      `Name: ${fullName}`,
      organization ? `Organization: ${organization}` : '',
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      requirements ? `Requirements: ${requirements}` : '',
      artworkName ? `Reference artwork to attach separately: ${artworkName}` : '',
      artworkName ? 'I will attach the reference file in WhatsApp.' : ''
    ].filter(Boolean).join('\n');
    setWhatsAppUrl(`https://wa.me/250789320757?text=${encodeURIComponent(details)}`);
  };

  const handleArtworkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    setArtworkError('');
    if (!file) {
      setArtworkName('');
      return;
    }
    if (!/\.(pdf|png|jpe?g|svg)$/i.test(file.name)) {
      setArtworkError('Choose a PDF, PNG, JPG, or SVG file.');
      setArtworkName('');
      event.currentTarget.value = '';
      return;
    }
    if (file.size === 0 || file.size > 10 * 1024 * 1024) {
      setArtworkError(file.size === 0 ? 'This file is empty. Choose another file.' : 'The maximum file size is 10 MB.');
      setArtworkName('');
      event.currentTarget.value = '';
      return;
    }
    setArtworkName(file.name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="quote-title" className="my-3 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden border border-[#333333] bg-[#0B0D10] text-white shadow-2xl sm:my-5 sm:max-h-[calc(100dvh-2.5rem)]">
        <header className="flex items-center justify-between border-b border-[#333333] px-5 py-4 sm:px-7">
          <div>
            <h2 id="quote-title" className="text-xl font-semibold">Request a quote</h2>
            <p className="mt-1 text-sm text-[#A7A7A7]">Share your requirements. We’ll confirm details and pricing with you.</p>
          </div>
          <button type="button" data-dialog-initial-focus onClick={onClose} aria-label="Close quote form" className="shrink-0 p-2 text-[#C0C0C0] hover:bg-[#191919] hover:text-white"><X className="h-5 w-5" /></button>
        </header>

        {whatsAppUrl ? (
          <div className="px-5 py-10 text-center sm:px-10">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[#C0C0C0]" />
            <h3 data-success-heading tabIndex={-1} className="mt-4 text-2xl font-semibold focus:outline-none">Your request is ready</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#B8B8B8]">
              This website does not send or store quote requests. Open WhatsApp and press Send to contact BARACK DESIGN.
              {artworkName && ' Attach your selected artwork in the WhatsApp chat; this site has not uploaded the file.'}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-[#E5E5E5]">
                Continue to WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <button type="button" onClick={onClose} className="border border-[#555555] px-5 py-3 text-sm font-medium text-white hover:bg-[#191919]">Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="min-h-0 flex-1 space-y-7 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold">Project details</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-service" className={labelClass}>Service</label>
                  <select id="quote-service" value={categoryId} onChange={(event) => setCategoryId(event.target.value)} className={inputClass}>
                    {APPROVED_SERVICES.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-product" className={labelClass}>Product or project type</label>
                  <select id="quote-product" value={productId} onChange={(event) => setProductId(event.target.value)} className={inputClass}>
                    {category.subitems.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-quantity" className={labelClass}>Quantity <span className="font-normal text-[#999999]">(if applicable)</span></label>
                  <input id="quote-quantity" type="text" inputMode="numeric" maxLength={20} value={quantity} onChange={(event) => setQuantity(event.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="quote-dimensions" className={labelClass}>Dimensions or size <span className="font-normal text-[#999999]">(if applicable)</span></label>
                  <input id="quote-dimensions" type="text" maxLength={100} value={dimensions} onChange={(event) => setDimensions(event.target.value)} className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="quote-requirements" className={labelClass}>Project requirements <span aria-hidden="true">*</span></label>
                  <textarea id="quote-requirements" required rows={4} maxLength={1000} value={requirements} onChange={(event) => setRequirements(event.target.value)} className={inputClass} />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4 border-t border-[#333333] pt-6">
              <legend className="text-sm font-semibold">Artwork and collection</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-artwork" className={labelClass}>Reference artwork <span className="font-normal text-[#999999]">(optional)</span></label>
                  <label htmlFor="quote-artwork" className="flex min-h-12 cursor-pointer items-center gap-2 border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-[#E5E5E5] hover:border-[#808080] focus-within:outline focus-within:outline-2 focus-within:outline-[#C0C0C0]">
                    <Paperclip className="h-4 w-4 shrink-0" /><span className="truncate">{artworkName || 'Choose a file'}</span>
                  </label>
                  <input id="quote-artwork" type="file" accept=".pdf,.png,.jpg,.jpeg,.svg,application/pdf,image/png,image/jpeg,image/svg+xml" aria-describedby="quote-artwork-help quote-artwork-error" onChange={handleArtworkChange} className="sr-only" />
                  <p id="quote-artwork-help" className="mt-2 text-xs leading-5 text-[#999999]">PDF, PNG, JPG, or SVG up to 10 MB. The file stays on this device; attach it in WhatsApp.</p>
                  <p id="quote-artwork-error" role="alert" className="mt-1 min-h-5 text-xs leading-5 text-[#E5E5E5]">{artworkError}</p>
                </div>
                <div>
                  <label htmlFor="quote-fulfillment" className={labelClass}>Collection or delivery preference</label>
                  <select id="quote-fulfillment" value={fulfillment} onChange={(event) => setFulfillment(event.target.value)} className={inputClass}>
                    <option>Collection</option>
                    <option>Delivery (please confirm availability)</option>
                  </select>
                  <p className="mt-2 text-xs leading-5 text-[#999999]">Delivery availability is confirmed with your quotation.</p>
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4 border-t border-[#333333] pt-6">
              <legend className="text-sm font-semibold">Your contact details</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-name" className={labelClass}>Full name <span aria-hidden="true">*</span></label>
                  <input id="quote-name" required autoComplete="name" maxLength={100} value={fullName} onChange={(event) => setFullName(event.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="quote-organization" className={labelClass}>Organization <span className="font-normal text-[#999999]">(optional)</span></label>
                  <input id="quote-organization" autoComplete="organization" maxLength={100} value={organization} onChange={(event) => setOrganization(event.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="quote-phone" className={labelClass}>Phone / WhatsApp <span aria-hidden="true">*</span></label>
                  <input id="quote-phone" type="tel" required autoComplete="tel" inputMode="tel" maxLength={24} aria-describedby="quote-phone-help" value={phone} onChange={(event) => { event.currentTarget.setCustomValidity(''); setPhone(event.target.value); }} className={inputClass} />
                  <p id="quote-phone-help" className="mt-1 text-xs leading-5 text-[#999999]">Enter a number with 7–15 digits. Spaces, +, parentheses, hyphens, and periods are accepted.</p>
                </div>
                <div>
                  <label htmlFor="quote-email" className={labelClass}>Email <span className="font-normal text-[#999999]">(optional)</span></label>
                  <input id="quote-email" type="email" autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} />
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-3 border-t border-[#333333] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-[#999999]">No prices are estimated online. We’ll discuss your requirements before quoting.</p>
              <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E5E5E5]">
                Prepare WhatsApp request <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
