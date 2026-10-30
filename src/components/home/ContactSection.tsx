/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Navigation,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenInquiry,
  onOpenQuote,
}) => {
  const { language, t } = useLanguage();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [kigaliTime, setKigaliTime] = useState('');

  // Live Kigali Local Time (CAT / UTC+2)
  useEffect(() => {
    const updateKigaliTime = () => {
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
    updateKigaliTime();
    const interval = setInterval(updateKigaliTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(CONTACT_DETAILS.phoneFormatted);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(CONTACT_DETAILS.location.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-white/10 bg-[#07090D] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
              {language === 'rw'
                ? '08. KWANDIKIRA ATELIYE & AHO DUKORERA'
                : language === 'fr'
                ? '08. CONTACT DIRECT & COORDONNÉES DE L\'ATELIER'
                : '08. DIRECT ACCESS & ATELIER DESK'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
              {language === 'rw'
                ? 'Twandikire Ako Kanya & Reba Aho Dukorera'
                : language === 'fr'
                ? 'Contact Direct & Coordonnées de l\'Atelier'
                : 'Direct Contact & Atelier Coordinates'}
            </h2>
            <p className="text-slate-400 text-base mt-2.5 leading-relaxed">
              {language === 'rw'
                ? 'Hamagara kuri telefone ako kanya, vugana natwe kuri WhatsApp, cyangwa usure ateliye yacu i Kigali mu Rwanda.'
                : language === 'fr'
                ? 'Ligne téléphonique directe, conciergerie WhatsApp en temps réel et visite sur rendez-vous à notre atelier de Kigali, Rwanda.'
                : 'Direct telephone line, instant WhatsApp consultation, and physical studio appointments at our flagship atelier in Kigali, Rwanda.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenInquiry}
              icon={<Send className="w-3.5 h-3.5" />}
            >
              {language === 'rw' ? 'Ohereza Ubutumwa' : language === 'fr' ? 'Formulaire Studio' : 'Studio Inquiry'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenQuote}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              {t('nav.quote', 'Instant Quote')}
            </Button>
          </div>
        </div>

        {/* 3-Column Primary Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Column 1: WhatsApp Instant Concierge */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#0F1614] via-[#0B100F] to-[#080B0A] border border-emerald-500/30 flex flex-col justify-between gap-6 shadow-[0_10px_30px_rgba(16,185,129,0.06)] relative group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-['Space_Mono']">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  WHATSAPP DIRECT DESK
                </span>
                <span className="text-slate-400 tabular-nums">&lt; 15 MIN REPLY</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['Outfit'] font-bold text-white tracking-tight">
                      WhatsApp Live Chat
                    </h3>
                    <span className="text-xs text-slate-400 font-['Space_Mono']">
                      {CONTACT_DETAILS.phoneFormatted}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {language === 'rw'
                    ? 'Ohereza amashusho ya vekitori, ibipimo byo gucapa, cyangwa saba ibiciro byihuse kuri WhatsApp ako kanya.'
                    : language === 'fr'
                    ? 'Transmettez vos fichiers vectoriels, échangez sur les finitions d\'impression et validez vos devis directement sur WhatsApp.'
                    : 'Send vector assets, review production samples, discuss gang sheets, or get instantaneous quotation guidance directly on WhatsApp.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] font-['Space_Mono'] text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>ATELIER STATUS:</span>
                  <span className="text-emerald-400 font-semibold">ACTIVE &amp; DISPATCHING</span>
                </div>
                <div className="flex justify-between">
                  <span>NUMBER:</span>
                  <span className="text-white font-mono">{CONTACT_DETAILS.phoneFormatted}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === 'rw'
                    ? 'Vugana Natwe kuri WhatsApp'
                    : language === 'fr'
                    ? 'Discuter sur WhatsApp'
                    : 'Chat on WhatsApp Now'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyPhone}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-['Space_Mono'] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied Number
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy WhatsApp Number
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Column 2: Direct Telephone Line */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#0D1016] border border-white/15 flex flex-col justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-['Space_Mono']">
                <span className="flex items-center gap-2 text-sky-400 font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  VOICE DISPATCH LINE
                </span>
                <span className="text-slate-400">RWANDA · +250</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['Outfit'] font-bold text-white tracking-tight">
                      Telephone Atelier
                    </h3>
                    <a
                      href={CONTACT_DETAILS.telLink}
                      className="text-base text-sky-400 hover:text-sky-300 font-['Space_Mono'] font-bold tracking-wide transition-colors block"
                    >
                      {CONTACT_DETAILS.phoneFormatted}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {language === 'rw'
                    ? 'Hamagara abashinzwe gukora ibirango n\'ibicuruzwa byo gucapa mu masaha y\'akazi i Kigali.'
                    : language === 'fr'
                    ? 'Appel direct avec notre responsable de production pour urgences prépresse, tirages spéciaux et commandes sur mesure.'
                    : 'Direct telephone line connecting directly with our Kigali mastercraft atelier for urgent turnarounds, custom dies, and corporate accounts.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] font-['Space_Mono'] text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>OPERATING HOURS:</span>
                  <span className="text-slate-200">08:30 – 18:30 CAT</span>
                </div>
                <div className="flex justify-between">
                  <span>SATURDAYS:</span>
                  <span className="text-slate-200">09:00 – 16:00 CAT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={CONTACT_DETAILS.telLink}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all border border-white/20 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>
                  {language === 'rw'
                    ? 'Hamagara Telefone Ako Kanya'
                    : language === 'fr'
                    ? 'Composer le Numéro'
                    : 'Call Atelier (+250 789 320 757)'}
                </span>
              </a>

              <a
                href={CONTACT_DETAILS.emailLink}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-['Space_Mono'] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CONTACT_DETAILS.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Physical Studio Location & Kigali Coordinates */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-[#0D1016] border border-white/15 flex flex-col justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-['Space_Mono']">
                <span className="flex items-center gap-2 text-slate-300 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  KIGALI ATELIER
                </span>
                <span className="text-slate-400 font-mono tabular-nums">{kigaliTime} CAT</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['Outfit'] font-bold text-white tracking-tight">
                      Studio Coordinates
                    </h3>
                    <span className="text-xs text-slate-400 font-['Space_Mono']">
                      {CONTACT_DETAILS.location.city}, {CONTACT_DETAILS.location.country}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-slate-300 space-y-1 leading-relaxed">
                  <p className="font-medium text-white">
                    {CONTACT_DETAILS.location.address}
                  </p>
                  <p className="text-slate-400">
                    {CONTACT_DETAILS.location.district}
                  </p>
                  <p className="font-mono text-[11px] text-slate-500 pt-1">
                    COORDINATES: {CONTACT_DETAILS.location.coordinates}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] font-['Space_Mono'] text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>ATELIER VISITS:</span>
                  <span className="text-slate-200">By Appointment / Walk-in</span>
                </div>
                <div className="flex justify-between">
                  <span>TIME ZONE:</span>
                  <span className="text-slate-200">CAT (UTC+2 · Kigali)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={CONTACT_DETAILS.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all border border-white/20 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-rose-400" />
                <span>
                  {language === 'rw'
                    ? 'Fungura muri Google Maps'
                    : language === 'fr'
                    ? 'Ouvrir dans Google Maps'
                    : 'Open in Google Maps'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-['Space_Mono'] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied Address
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy Kigali Address
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* High-Fidelity Kigali Atelier Visual Map Card & Direct Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0C1018] via-[#0E131E] to-[#0A0D15] border border-white/15 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-['Space_Mono'] text-xs font-semibold border border-white/15">
                KIGALI HUB · RWANDA
              </span>
              <span className="text-xs text-slate-400 font-['Space_Mono']">
                CAT CENTRAL AFRICA TIME
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white tracking-tight">
              {language === 'rw'
                ? 'Ukeneye Inama Zihariye cyangwa Gusura Ateliye?'
                : language === 'fr'
                ? 'Besoin d\'un Conseil Sur Mesure ou d\'un Rendez-Vous?'
                : 'Need Bespoke Production Consultation or Direct Proof Review?'}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {language === 'rw'
                ? 'Dufasha abakiriya bacu kubona ibipimo nyabyo bya vekitori mbere yo gucapa. Hamagara cyangwa wandikire +250 789 320 757 kuri WhatsApp kugira ngo tubonane muri ateliye yacu i Kigali.'
                : language === 'fr'
                ? 'Nous accompagnons fondateurs et directeurs artistiques dans l\'optimisation de leurs fichiers prépresse. Contactez le +250 789 320 757 sur WhatsApp pour convenir d\'une séance technique en atelier.'
                : 'We guide founders, creative studios, and fashion labels through material curation, Pantone ink calibration, and vector prepress. Connect directly via WhatsApp at +250 789 320 757.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={getWhatsAppUrl({
                context: 'I would like to schedule an atelier appointment and discuss my production project.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-[0_4px_25px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Atelier Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_DETAILS.telLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+250 789 320 757</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
