/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';
import { useLanguage } from '../../i18n/LanguageContext';
import { MessageCircle, Phone, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-['Plus_Jakarta_Sans']">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 p-5 rounded-2xl bg-[#0F131D]/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-slate-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-['Space_Mono'] font-bold text-white tracking-wider">
                  KIGALI ATELIER DESK
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close contact widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {language === 'rw'
                ? 'Vugana natwe ako kanya kuri WhatsApp cyangwa uhamagare telefone yacu i Kigali.'
                : language === 'fr'
                ? 'Contactez directement notre atelier de Kigali par WhatsApp ou téléphone.'
                : 'Direct connection to our Kigali production atelier. Instant responses for quotes and vector prepress.'}
            </p>

            <div className="space-y-2.5">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-[0_2px_15px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Live Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Direct Telephone Line */}
              <a
                href={CONTACT_DETAILS.telLink}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all border border-white/15 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-mono">{CONTACT_DETAILS.phoneFormatted}</span>
                </div>
                <span className="text-[10px] uppercase font-['Space_Mono'] text-slate-400">Call Now</span>
              </a>
            </div>

            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-['Space_Mono'] text-slate-400">
              <span>KIGALI, RWANDA</span>
              <span>CAT (UTC+2)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Toggle */}
      <div className="flex items-center gap-2">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-[0_6px_25px_rgba(16,185,129,0.4)] transition-transform hover:scale-105 cursor-pointer"
          aria-label="Direct WhatsApp chat"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="font-mono text-[11px]">+250 789 320 757</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-xl ${
            isOpen
              ? 'bg-white text-black border-white'
              : 'bg-[#0E121B] text-slate-200 border-white/20 hover:border-white/40 hover:text-white'
          }`}
          aria-label={isOpen ? 'Close contact assistant' : 'Open contact assistant'}
        >
          {isOpen ? <X className="w-4 h-4" /> : <Phone className="w-4 h-4 text-sky-400" />}
        </button>
      </div>
    </div>
  );
};
