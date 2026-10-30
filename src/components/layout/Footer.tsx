import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Container } from '../common/Container';
import { NAV_ITEMS } from '../../tokens';
import { ArrowUpRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';

interface FooterProps {
  onOpenInquiry: () => void;
  onNavigate?: (destination: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigate }) => {
  const [kigaliTime, setKigaliTime] = useState<string>('');
  const { t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setKigaliTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Kigali',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const getNavLabel = (id: string, fallback: string) => {
    if (id === 'works') return t('nav.works', fallback);
    if (id === 'services') return t('nav.services', fallback);
    if (id === 'quote') return t('nav.quote', fallback);
    if (id === 'vector-lab') return t('nav.vectorLab', fallback);
    if (id === 'disciplines') return t('nav.disciplines', fallback);
    if (id === 'studio') return t('nav.studio', fallback);
    if (id === 'contact') return t('nav.contact', fallback);
    return fallback;
  };

  return (
    <footer className="bg-[#07080A] border-t border-white/10 pt-16 pb-12 text-slate-400 font-['Plus_Jakarta_Sans']">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Studio Thesis */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t(
                'footer.thesis',
                'Independent digital design studio engineering bespoke brand identity systems, vector typography, and tactile digital products with meticulous mathematical precision.'
              )}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-['Space_Mono'] pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                KIGALI ATELIER CLOCK
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-200 tabular-nums">{kigaliTime || '12:00:00'} CAT</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4 font-['Outfit']">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
              {t('footer.index', 'Index')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-white transition-colors inline-block cursor-pointer"
                  >
                    {getNavLabel(item.id, item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Atelier Contact & WhatsApp */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold font-['Outfit']">
                Direct Contact &amp; Atelier
              </h4>
              <LanguageSwitcher variant="compact" />
            </div>

            <div className="text-xs space-y-2 text-slate-300 font-['Space_Mono']">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{CONTACT_DETAILS.location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={CONTACT_DETAILS.telLink}
                  className="hover:text-white transition-colors"
                >
                  Direct Call: {CONTACT_DETAILS.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Concierge: {CONTACT_DETAILS.phoneFormatted}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:text-slate-200 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
              >
                <span>{t('footer.initiate', 'Initiate Studio Dialogue')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-slate-700">·</span>
              <a
                href={CONTACT_DETAILS.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 decoration-white/20 transition-colors"
              >
                Directions in Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-['Space_Mono']">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} BARACK DESIGN</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>{t('footer.rights', 'ALL RIGHTS RESERVED')}</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>VECTOR CRAFT &amp; BRAND SYSTEMS</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{t('footer.grid', 'PRECISION GRID 1440PX')}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
