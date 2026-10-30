import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../tokens';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';

interface NavbarProps {
  onOpenInquiry: () => void;
  activeSection?: string;
  onNavigate?: (destination: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  activeSection = '',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLabel = (id: string, fallback: string) => {
    switch (id) {
      case 'works':
        return t('nav.works', fallback);
      case 'services':
        return t('nav.services', fallback);
      case 'quote':
        return t('nav.quote', fallback);
      case 'vector-lab':
        return t('nav.vectorLab', fallback);
      case 'disciplines':
        return t('nav.disciplines', fallback);
      case 'studio':
        return t('nav.studio', fallback);
      case 'contact':
        return t('nav.contact', fallback);
      default:
        return fallback;
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('#top');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#090A0D]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        {/* Strictly compliant 3-Zone Top Bar Contract */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Brand Mark & Wordmark */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group transition-opacity hover:opacity-95 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="BARACK DESIGN Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-['Outfit'] font-medium text-slate-300"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const label = getNavLabel(item.id, item.label);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-200"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action & Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Header Language Selector */}
            <div className="hidden sm:block">
              <LanguageSwitcher variant="compact" />
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenInquiry}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              {t('nav.startProject', 'Instant Quote')}
            </Button>

            {/* Mobile Menu Toggle (Within 15% sticky cap) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 sm:top-18 z-30 bg-[#090A0D]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-['Outfit']">
              {/* Mobile Language Switcher */}
              <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-['Space_Mono'] text-slate-400">LANGUAGE / URURIMI:</span>
                <LanguageSwitcher variant="segmented" />
              </div>

              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg py-2 text-slate-200 hover:text-white border-b border-white/5 transition-colors cursor-pointer"
                >
                  {getNavLabel(item.id, item.label)}
                </button>
              ))}

              {/* Direct Telephone and WhatsApp Mobile Quick Actions */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-['Space_Mono']">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={CONTACT_DETAILS.telLink}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Atelier</span>
                </a>
              </div>

              <div className="pt-1">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {t('nav.startProject', 'Instant Quote')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
