/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCatalogue } from './components/ServiceCatalogue';
import { CreativeStudio } from './components/CreativeStudio';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProductionProcess } from './components/ProductionProcess';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuotationModal } from './components/QuotationModal';
import { FAQSection } from './components/FAQSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CookieBanner } from './components/CookieBanner';
import { getScrollBehavior, scrollToSection, scrollToTop } from './utils/scroll';

const NAV_TABS = ['home', 'services', 'creative-studio', 'portfolio', 'about', 'contact'] as const;
const getTabFromLocation = () => {
  const hashTab = window.location.hash.slice(1);
  return NAV_TABS.includes(hashTab as typeof NAV_TABS[number]) ? hashTab : 'home';
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(getTabFromLocation);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteCatId, setQuoteCatId] = useState<string | undefined>(undefined);
  const [quoteProdId, setQuoteProdId] = useState<string | undefined>(undefined);
  const [serviceSearch, setServiceSearch] = useState('');

  useEffect(() => {
    const syncTabWithLocation = () => {
      setActiveTab(getTabFromLocation());
      setQuoteCatId(undefined);
      if (getTabFromLocation() === 'home') setServiceSearch('');
    };
    window.addEventListener('popstate', syncTabWithLocation);
    window.addEventListener('hashchange', syncTabWithLocation);
    return () => {
      window.removeEventListener('popstate', syncTabWithLocation);
      window.removeEventListener('hashchange', syncTabWithLocation);
    };
  }, []);

  const updateLocationForTab = (tab: string) => {
    const hash = tab === 'home' ? '' : `#${tab}`;
    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
      window.history.pushState({ tab }, '', nextUrl);
    }
  };

  const handleOpenQuote = (catId?: string, prodId?: string) => {
    setQuoteCatId(catId);
    setQuoteProdId(prodId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveTab('services');
    updateLocationForTab('services');
    setQuoteCatId(catId);
  };

  const handleSearchSubmit = (query: string) => {
    setServiceSearch(query);
    setQuoteCatId(undefined);
    setActiveTab('services');
    updateLocationForTab('services');
    scrollToTop();
  };

  const handleExploreServices = () => {
    setActiveTab('home');
    window.setTimeout(() => scrollToSection(document.getElementById('services')), 0);
  };

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    updateLocationForTab(tab);
    setQuoteCatId(undefined);
    if (tab === 'home') setServiceSearch('');
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#C0C0C0] selection:text-[#000000]">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigation}
        onOpenQuote={handleOpenQuote}
        onSelectCategory={handleSelectCategory}
        searchValue={serviceSearch}
        onSearchChange={setServiceSearch}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main Content View Switcher */}
      <main id="main-content" tabIndex={-1} className="flex-1 bg-white focus:outline-none">
        {activeTab === 'home' && (
          <>
            <Hero
              onOpenQuote={handleOpenQuote}
              onExploreServices={handleExploreServices}
            />
            <AboutSection onOpenQuote={() => handleOpenQuote()} />
            <ServiceCatalogue
              selectedCategoryId={quoteCatId}
              onOpenQuote={handleOpenQuote}
              searchQuery={serviceSearch}
              onSearchChange={setServiceSearch}
            />
            <FeaturedProducts onOpenQuote={handleOpenQuote} />
            <PortfolioShowcase onOpenQuote={handleOpenQuote} />
            <CreativeStudio onOpenQuote={handleOpenQuote} />
            <ProductionProcess onOpenQuote={() => handleOpenQuote()} />
            <FAQSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'services' && (
          <div className="pt-4">
            <ServiceCatalogue
              selectedCategoryId={quoteCatId}
              onOpenQuote={handleOpenQuote}
              searchQuery={serviceSearch}
              onSearchChange={setServiceSearch}
            />
          </div>
        )}

        {activeTab === 'creative-studio' && (
          <div className="pt-4">
            <CreativeStudio onOpenQuote={handleOpenQuote} />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-4">
            <PortfolioShowcase onOpenQuote={handleOpenQuote} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-4">
            <AboutSection onOpenQuote={() => handleOpenQuote()} />
            <ProductionProcess onOpenQuote={() => handleOpenQuote()} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-4">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavigation}
        onOpenQuote={handleOpenQuote}
      />

      {/* Global Quotation System Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialCategoryId={quoteCatId}
        initialProductId={quoteProdId}
      />
      <CookieBanner />
    </div>
  );
}
