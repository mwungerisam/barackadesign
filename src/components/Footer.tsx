import React from 'react';
import { APPROVED_SERVICES } from '../data/servicesData';
import { MapPin, Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenQuote: (catId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-white border-t border-[#191919] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#191919] border border-[#808080]/30 flex items-center justify-center">
                <img 
                  src="/assets/aistudio/image_4cbf8bac.png" 
                  alt="BARACK DESIGN Logo" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-wider">
                BARACK DESIGN
              </span>
            </div>

            <p className="text-xs text-[#808080] max-w-sm leading-relaxed">
              Branding, Commercial Printing & Creative Production Studio based in Kigali, Rwanda. Serving businesses, institutions, and creative clients.
            </p>

            <div className="space-y-1.5 text-xs text-[#E5E5E5] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C0C0C0]" />
                <span>Town Centre Building, F5A-005, KN 70 St, Kigali</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C0C0C0]" />
                <span>+250 789 320 757</span>
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
            <div className="text-xs font-bold text-white uppercase tracking-wider">Physical Production</div>
            <ul className="space-y-2 text-xs text-[#808080]">
              {APPROVED_SERVICES.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => onOpenQuote(cat.id)} className="hover:text-white transition-colors text-left truncate max-w-full">
                    Div {cat.letter}: {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Approved Divisions F-J (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Branding & Creative</div>
            <ul className="space-y-2 text-xs text-[#808080]">
              {APPROVED_SERVICES.slice(5, 10).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => onOpenQuote(cat.id)} className="hover:text-white transition-colors text-left truncate max-w-full">
                    Div {cat.letter}: {cat.title}
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

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/250789320757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp (+250 789 320 757)
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
