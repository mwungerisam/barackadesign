import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../i18n/LanguageContext';
import { CONTACT_DETAILS, getWhatsAppUrl } from '../../data/contact';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOverview?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialOverview = '',
}) => {
  const { language, t } = useLanguage();
  const [projectType, setProjectType] = useState('Brand Identity System');
  const [budgetRange, setBudgetRange] = useState('$15k – $30k');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [overview, setOverview] = useState(initialOverview);

  // Sync overview when initialOverview changes
  React.useEffect(() => {
    if (initialOverview) {
      setOverview(initialOverview);
    }
  }, [initialOverview]);

  // Accessibility: Escape key listener & body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const [submitted, setSubmitted] = useState(false);

  const getProjectTypes = () => {
    if (language === 'rw') {
      return [
        'Ikirango Rusange',
        'Vekitori & Inyandiko',
        'Urubuga rw\'Ikoranabuhanga',
        'Umushinga Wose wa Ateliye',
      ];
    }
    if (language === 'fr') {
      return [
        'Système d\'Identité de Marque',
        'Vecteur & Typographie',
        'Design Produit Digital',
        'Commission Globale Atelier',
      ];
    }
    return [
      'Brand Identity System',
      'Custom Vector & Typography',
      'Digital Product Design',
      'Full Studio Commission',
    ];
  };

  const projectTypes = getProjectTypes();

  const budgetTiers = [
    'Under $15k',
    '$15k – $30k',
    '$30k – $60k',
    '$60k+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setOverview('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0F1218] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-2">
                    {t('inquiry.kicker', 'STUDIO COMMISSION · 2026/2027')}
                  </div>
                  <h3 className="text-2xl font-['Outfit'] font-bold text-white tracking-tight">
                    {t('inquiry.title', 'Initiate Studio Dialogue')}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed font-['Plus_Jakarta_Sans']">
                    {t(
                      'inquiry.subtitle',
                      'Share brief project coordinates. The studio reviews and responds within 24 business hours.'
                    )}
                  </p>
                </div>

                {/* Instant WhatsApp Concierge Banner */}
                <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">
                        {language === 'rw' ? 'Ukeneye Igisubizo Ako Kanya?' : language === 'fr' ? 'Besoin d\'une Réponse Immédiate?' : 'Prefer Instant WhatsApp Chat?'}
                      </span>
                      <span className="text-slate-300 font-['Space_Mono'] text-[11px]">
                        {CONTACT_DETAILS.phoneFormatted} · &lt; 15 min reply
                      </span>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl({
                      context: overview || 'Project Commission Inquiry via Dialogue Form',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs shrink-0 transition-all cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-['Plus_Jakarta_Sans']">
                  {/* Discipline / Project Type Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      {t('inquiry.projectDiscipline', 'Project Discipline')}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className={`px-3 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer border ${
                            projectType === type
                              ? 'bg-white/10 text-white border-white/30 font-medium'
                              : 'bg-black/30 text-slate-400 border-white/5 hover:border-white/15 hover:text-slate-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Allocation Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      {t('inquiry.budgetRange', 'Anticipated Budget Range')}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudgetRange(tier)}
                          className={`px-2.5 py-1.5 text-xs text-center rounded-lg transition-colors cursor-pointer border ${
                            budgetRange === tier
                              ? 'bg-white/10 text-white border-white/30 font-medium'
                              : 'bg-black/30 text-slate-400 border-white/5 hover:border-white/15 hover:text-slate-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        {t('inquiry.name', 'Your Name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full bg-[#080A0D] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        {t('inquiry.email', 'Work Email')}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@atelier.studio"
                        className="w-full bg-[#080A0D] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                      {t('inquiry.scopeOverview', 'Scope Overview')}
                    </label>
                    <textarea
                      rows={3}
                      value={overview}
                      onChange={(e) => setOverview(e.target.value)}
                      placeholder={
                        language === 'rw'
                          ? 'Incamake y\'ibisabwa, igihe wifuza gutangirira, n\'icyerekezo cy\'umushinga...'
                          : language === 'fr'
                          ? 'Brève description des besoins, date de lancement souhaitée et objectifs esthétiques...'
                          : 'Brief description of requirements, target launch, and design aspirations...'
                      }
                      className="w-full bg-[#080A0D] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                      {t('inquiry.cancel', 'Cancel')}
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      type="submit"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {t('inquiry.submit', 'Submit Commission')}
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6 text-slate-200" />
                </div>
                <div>
                  <h3 className="text-xl font-['Outfit'] font-bold text-white tracking-tight">
                    {t('inquiry.receivedTitle', 'Transmission Received')}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {language === 'rw' ? (
                      <>
                        Murakoze, {fullName}. Ubusabe bwanyu kuri <span className="text-slate-200">{projectType}</span> bwanditswe. Umuyobozi w'ubuhanzi azabusuzuma mu buryo bwihuse.
                      </>
                    ) : language === 'fr' ? (
                      <>
                        Merci, {fullName}. Votre demande pour <span className="text-slate-200">{projectType}</span> a été enregistrée. Notre directeur de création étudiera votre dossier rapidement.
                      </>
                    ) : (
                      <>
                        Thank you, {fullName}. Your inquiry for <span className="text-slate-200">{projectType}</span> has been logged. Our design director will review your brief promptly.
                      </>
                    )}
                  </p>
                </div>
                <div className="pt-2">
                  <Button variant="secondary" size="sm" onClick={handleResetAndClose}>
                    {t('inquiry.returnToStudio', 'Return to Studio')}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
