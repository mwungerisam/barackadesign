import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, FileText, Search, ArrowRight } from 'lucide-react';
import { APPROVED_SERVICES } from '../data/servicesData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: (categoryId?: string, productId?: string) => void;
  onSelectCategory?: (categoryId: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuote,
  onSelectCategory,
  searchValue,
  onSearchChange,
  onSearchSubmit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);
  const [searchPromptIndex, setSearchPromptIndex] = useState(0);
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isDeletingPrompt, setIsDeletingPrompt] = useState(false);
  const searchPrompts = [
    'Search paper & print',
    'Search branded apparel',
    'Search banners & signage',
    'Search packaging & labels',
    'Search corporate gifts'
  ];

  useEffect(() => {
    if (searchValue || isSearchFocused) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSearchPrompt(searchPrompts[searchPromptIndex]);
      return;
    }

    const currentPrompt = searchPrompts[searchPromptIndex];
    const isPromptComplete = searchPrompt === currentPrompt;
    const delay = isPromptComplete && !isDeletingPrompt ? 1350 : isDeletingPrompt ? 34 : 68;
    const timeout = window.setTimeout(() => {
      if (!isDeletingPrompt && !isPromptComplete) {
        setSearchPrompt(currentPrompt.slice(0, searchPrompt.length + 1));
      } else if (!isDeletingPrompt) {
        setIsDeletingPrompt(true);
      } else if (searchPrompt.length > 0) {
        setSearchPrompt(searchPrompt.slice(0, -1));
      } else {
        setIsDeletingPrompt(false);
        setSearchPromptIndex((searchPromptIndex + 1) % searchPrompts.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeletingPrompt, isSearchFocused, searchPrompt, searchPromptIndex, searchValue]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        mobileMenuToggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    setActiveTab('services');
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#333333] bg-[#0B0D10]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 max-[360px]:gap-1 lg:gap-8">
          
          {/* Zone 1: Brand Wordmark & Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex shrink-0 items-center gap-3 rounded-lg p-1 text-left focus:outline-none focus:ring-1 focus:ring-[#C0C0C0] group max-[360px]:gap-2"
          >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden transition-opacity group-hover:opacity-80 max-[360px]:h-8 max-[360px]:w-8">
              <img 
                src="/assets/aistudio/image_4cbf8bac.png" 
                alt="BARACK DESIGN Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="whitespace-nowrap font-heading text-lg font-extrabold tracking-wider text-white transition-colors group-hover:text-[#C0C0C0] max-[360px]:text-sm">
                BARACK DESIGN
              </span>
              <span className="-mt-0.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] text-[#808080] max-[360px]:hidden">
                KIGALI · RWANDA
              </span>
            </div>
          </button>

          <form
            className="navbar-search-control hidden xl:flex min-w-[260px] max-w-[420px] 2xl:max-w-[520px] flex-1 items-center rounded-full border border-[#D0D0D0] bg-white px-4 py-2 text-[#111111]"
            role="search"
            onSubmit={(event) => { event.preventDefault(); onSearchSubmit(searchValue); }}
          >
            <Search className="h-4 w-4 shrink-0 text-[#777777]" />
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              aria-label="Search services and products"
              placeholder={searchPrompt || 'Search paper & print'}
              className="navbar-search-input w-full min-w-0 bg-transparent px-3 text-sm outline-none placeholder:text-[#777777]"
            />
            <button type="submit" aria-label="Search" className="rounded-full p-1 text-[#111111] hover:bg-[#E5E5E5]">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Zone 2: Navigation Links (Single-Line, 4-5 core items) */}
          <nav className="hidden lg:flex items-center gap-4 2xl:gap-6 text-sm font-medium text-[#E5E5E5]">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                activeTab === 'home' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onFocus={() => setServicesDropdownOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesDropdownOpen(false);
              }}
            >
              <button
                onClick={() => handleNavClick('services')}
                aria-expanded={servicesDropdownOpen}
                aria-controls={servicesDropdownOpen ? 'services-dropdown' : undefined}
                className={`flex items-center gap-1.5 hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'services' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-white' : 'text-[#808080]'}`} />
              </button>

              {/* Mega Dropdown */}
              {servicesDropdownOpen && (
                <div id="services-dropdown" className="absolute top-full left-1/2 -translate-x-1/2 w-[min(720px,calc(100vw-2rem))] bg-[#0B0D10] border border-[#191919] rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-3 mt-1 backdrop-blur-xl z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#191919] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Browse services</span>
                    <button 
                      onClick={() => handleNavClick('services')} 
                      className="text-xs text-[#C0C0C0] hover:text-white font-medium hover:underline"
                    >
                      Browse all services →
                    </button>
                  </div>
                  {APPROVED_SERVICES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#191919] transition-all text-left group"
                    >
                      <span className="w-6 h-6 rounded bg-[#191919] group-hover:bg-[#C0C0C0] group-hover:text-black text-[#808080] font-heading font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                        {cat.letter}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#C0C0C0] transition-colors leading-snug">
                          {cat.title}
                        </div>
                        <div className="text-[11px] text-[#808080] truncate max-w-[260px] mt-0.5">
                          {cat.subtitle}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('creative-studio')}
              className={`hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                activeTab === 'creative-studio' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
              }`}
            >
              Creative Studio
            </button>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                activeTab === 'portfolio' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
              }`}
            >
              Our Work
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                activeTab === 'about' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-white transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                activeTab === 'contact' ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0C0C0]' : 'text-[#808080]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#191919] hover:bg-[#333333] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-black" />
                <span>Request a quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex shrink-0 items-center gap-2 max-[360px]:gap-1 lg:hidden">
            <button
              onClick={() => onOpenQuote()}
              className="shrink-0 bg-[#191919] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#333333] max-[360px]:px-2"
            >
              Quote
            </button>
            <button
              ref={mobileMenuToggleRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#808080] hover:text-white hover:bg-[#191919] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <form
        className="mx-auto flex max-w-7xl items-center px-4 pb-3 xl:hidden sm:px-6"
        role="search"
        onSubmit={(event) => { event.preventDefault(); onSearchSubmit(searchValue); }}
      >
        <div className="navbar-search-control flex w-full items-center rounded-full border border-[#D0D0D0] bg-white px-3 py-2 text-[#111111]">
          <Search className="h-4 w-4 shrink-0 text-[#777777]" />
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            aria-label="Search services and products"
            placeholder={searchPrompt || 'Search paper & print'}
            className="navbar-search-input w-full min-w-0 bg-transparent px-3 text-sm outline-none placeholder:text-[#777777]"
          />
          <button type="submit" aria-label="Search" className="rounded p-1 text-[#111111] hover:bg-[#E5E5E5]">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-[#0B0D10] border-b border-[#191919] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'home' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'services' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('creative-studio')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'creative-studio' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            Creative Studio
          </button>
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'portfolio' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            Our Work
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'about' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            About BARACK DESIGN
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left py-2 px-3 text-sm rounded-lg ${activeTab === 'contact' ? 'bg-[#191919] text-white font-semibold' : 'text-[#808080]'}`}
          >
            Contact & Map
          </button>
          <div className="pt-2 border-t border-[#191919]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#191919] hover:bg-[#333333] text-center"
            >
              Request a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
