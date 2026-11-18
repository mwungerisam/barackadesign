import React from 'react';
import { APPROVED_SERVICES } from '../data/servicesData';
import { MapPin, Phone, ArrowUp, Instagram } from 'lucide-react';
import { scrollToTop } from '../utils/scroll';

const WhatsAppIcon = ({ className = 'h-3.5 w-3.5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.52 3.49A11.85 11.85 0 0 0 12.07 0C5.46 0 .09 5.36.09 11.97c0 2.11.55 4.17 1.6 5.99L.02 24l6.21-1.63a12 12 0 0 0 5.84 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.54-8.39Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M17.9 14.5c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.91-1.8-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67 0 1.58 1.15 3.1 1.31 3.31.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" fill="currentColor"/>
  </svg>
);

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenQuote: (catId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenQuote }) => {
  return (
    <footer className="bg-[#000000] text-white border-t border-[#191919] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button type="button" onClick={() => onNavClick('home')} aria-label="BARACK DESIGN home" className="brand-logo-frame brand-logo-frame-footer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C0C0C0]">
              <img
                src="/BARACK%20DESIGN%20LOGO.svg"
                alt="BARACK DESIGN official logo"
                className="brand-logo-artwork"
              />
            </button>

            <p className="text-xs text-[#808080] max-w-sm leading-relaxed">
              Printing, branded products, packaging, event materials, and graphic design in Kigali, Rwanda.
            </p>

            <div className="space-y-1.5 text-xs text-[#E5E5E5] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C0C0C0]" />
                <span>Town Centre Building, F5A-005, KN 70 St, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C0C0C0]" />
                <a href="tel:+250789320757" className="hover:text-white">+250 789 320 757</a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-xs text-[#808080]">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('creative-studio')} className="hover:text-white transition-colors">
                  Creative Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('portfolio')} className="hover:text-white transition-colors">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Approved Divisions A-E (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Print & products</div>
            <ul className="space-y-2 text-xs text-[#808080]">
              {APPROVED_SERVICES.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => onOpenQuote(cat.id)} className="hover:text-white transition-colors text-left truncate max-w-full">
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Remaining approved services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Design & production</div>
            <ul className="space-y-2 text-xs text-[#808080]">
              {APPROVED_SERVICES.slice(5).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => onOpenQuote(cat.id)} className="hover:text-white transition-colors text-left truncate max-w-full">
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#191919] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#808080]">
          <div>
            © {new Date().getFullYear()} BARACK DESIGN. All rights reserved. Kigali, Rwanda.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start">
            <a 
              href="https://wa.me/250789320757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#C0C0C0]" />
              <span>WhatsApp (+250 789 320 757)</span>
            </a>
            <a
              href="https://www.instagram.com/barack.design/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BARACK DESIGN on Instagram"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="h-3.5 w-3.5 text-[#C0C0C0]" />
              <span>Instagram</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#191919] hover:bg-[#2A2D35] text-white rounded-lg transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
