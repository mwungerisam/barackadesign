import React, { useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ServiceCategory, ServiceSubitem } from '../data/servicesData';

interface ProductDetailModalProps {
  category: ServiceCategory;
  product: ServiceSubitem;
  onClose: () => void;
  onSelectProduct: (product: ServiceSubitem) => void;
  onRequestQuote: (categoryId: string, productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ category, product, onClose, onSelectProduct, onRequestQuote }) => {
  const dialogRef = useRef<HTMLElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusableElements = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) || []).filter((element) => element.getClientRects().length > 0);
    (dialogRef.current?.querySelector<HTMLElement>('[data-dialog-initial-focus]') || focusableElements()[0])?.focus();

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
  }, []);

  const relatedProducts = category.subitems.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="product-detail-title" className="my-5 grid w-full max-w-3xl overflow-hidden border border-[#D0D0D0] bg-white text-[#111111] sm:grid-cols-2">
        <div className="relative min-h-56 bg-[#F2F2F2] sm:min-h-full">
          <img src={category.image} alt="" onError={(event) => { event.currentTarget.style.display = 'none'; }} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-8">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{category.imageLabel}</span>
            <span className="shrink-0 border border-white/40 bg-black/35 px-2 py-1 text-[9px] font-medium uppercase tracking-wide text-white">Reference image</span>
          </span>
        </div>
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs text-[#666666]">{category.title}</p>
            <button type="button" data-dialog-initial-focus onClick={onClose} aria-label="Close product details" className="-mr-2 -mt-2 p-2 text-[#555555] hover:bg-[#F2F2F2]"><X className="h-5 w-5" /></button>
          </div>
          <h2 id="product-detail-title" className="mt-3 text-2xl font-semibold tracking-tight">{product.name}</h2>
          <p className="mt-3 text-sm leading-6 text-[#555555]">{product.description}</p>

          {product.customizationOptions && product.customizationOptions.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-medium text-[#111111]">Customization options</h3>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-[#666666]">
                {product.customizationOptions.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          )}

          {product.artworkRequirements && product.artworkRequirements.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-medium text-[#111111]">Artwork requirements</h3>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-[#666666]">
                {product.artworkRequirements.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          )}

          {product.useCases && product.useCases.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-medium text-[#111111]">Typical uses</h3>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-[#666666]">
                {product.useCases.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          )}

          <div className="mt-6 border-y border-[#E5E5E5] py-4">
            <h3 className="text-sm font-medium">Request options</h3>
            <p className="mt-2 text-sm leading-6 text-[#666666]">Include your quantity, dimensions or size, customization needs, and any artwork or reference in your request. Options and pricing are confirmed after review.</p>
          </div>
          <button type="button" onClick={() => onRequestQuote(category.id, product.id)} className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#111111] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#333333]">
            Request a quote <ArrowRight className="h-4 w-4" />
          </button>
          {relatedProducts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs font-medium uppercase tracking-wide text-[#666666]">Related products</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedProducts.map((item) => (
                  <button type="button" key={item.id} onClick={() => onSelectProduct(item)} className="border border-[#E5E5E5] px-2.5 py-1.5 text-xs text-[#444444] hover:border-[#808080] hover:bg-[#F5F5F5]">{item.name}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
