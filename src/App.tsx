/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { TestimonialsSection } from './components/TestimonialsSection';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteCatId, setQuoteCatId] = useState<string | undefined>(undefined);
  const [quoteProdId, setQuoteProdId] = useState<string | undefined>(undefined);
  const [serviceSearch, setServiceSearch] = useState('');

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
    setQuoteCatId(catId);
  };

  const handleSearchSubmit = (query: string) => {
    setServiceSearch(query);
    setQuoteCatId(undefined);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] text-[#111111] flex flex-col font-sans selection:bg-[#C0C0C0] selection:text-[#000000]">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={handleOpenQuote}
        onSelectCategory={handleSelectCategory}
        searchValue={serviceSearch}
        onSearchChange={setServiceSearch}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 bg-[#F5F3F0]">
        {activeTab === 'home' && (
          <>
            <Hero
              onOpenQuote={handleOpenQuote}
              onExploreServices={() => setActiveTab('services')}
            />
            <ServiceCatalogue
              selectedCategoryId={quoteCatId}
              onOpenQuote={handleOpenQuote}
              searchQuery={serviceSearch}
              onSearchChange={setServiceSearch}
            />
            <CreativeStudio onOpenQuote={handleOpenQuote} />
            <PortfolioShowcase onOpenQuote={handleOpenQuote} />
            <TestimonialsSection />
            <ProductionProcess onOpenQuote={() => handleOpenQuote()} />
            <AboutSection onOpenQuote={() => handleOpenQuote()} />
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
        onNavClick={setActiveTab}
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
