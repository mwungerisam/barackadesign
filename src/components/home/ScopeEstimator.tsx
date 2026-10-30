import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ScopeEstimatorProps {
  onOpenInquiryWithScope: (scopeSummary: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({
  onOpenInquiryWithScope,
}) => {
  const { language, t } = useLanguage();
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Brand Identity System',
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<'standard' | 'accelerated'>('standard');

  const getDisciplineOptions = () => {
    if (language === 'rw') {
      return [
        { id: 'Brand Identity System', label: 'Ikirango Rusange', desc: 'Ikirango cya vekitori & amabwiriza' },
        { id: 'Custom Typography', label: 'Inyandiko Zihariye', desc: 'Inyandiko y\'umwimerere ya OpenType' },
        { id: 'Physical Packaging', label: 'Gupfunyika Kugezweho', desc: 'Ibyuma by\'ifoili, agasanduku & ibikoresho' },
        { id: 'Digital Design', label: 'Urubuga rwa Mudasobwa', desc: 'Imbonerahamwe yaguka ya 1440px' },
      ];
    }
    if (language === 'fr') {
      return [
        { id: 'Brand Identity System', label: 'Identité de Marque', desc: 'Symbole vectoriel, charte & normes' },
        { id: 'Custom Typography', label: 'Typographie Sur Mesure', desc: 'Police d\'affichage OpenType propriétaire' },
        { id: 'Physical Packaging', label: 'Packaging de Luxe', desc: 'Fers de dorure, coffrets & unboxing' },
        { id: 'Digital Design', label: 'Design Digital Flagship', desc: 'Grille responsive fluide 1440px' },
      ];
    }
    return [
      { id: 'Brand Identity System', label: 'Brand Identity System', desc: 'Vector mark, logo suite & guidelines' },
      { id: 'Custom Typography', label: 'Bespoke Typography', desc: 'Proprietary OpenType display font' },
      { id: 'Physical Packaging', label: 'Luxury Physical Packaging', desc: 'Tooling dies, unboxing & materials' },
      { id: 'Digital Design', label: 'Digital Flagship Design', desc: '1440px fluid responsive layout' },
    ];
  };

  const disciplineOptions = getDisciplineOptions();

  const toggleDiscipline = (id: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((d) => d !== id) : prev) : [...prev, id]
    );
  };

  const handleProceed = () => {
    const summary = `Selected Scope: ${selectedDisciplines.join(', ')} | Timeline: ${
      selectedTimeline === 'standard' ? 'Standard 4–6 Weeks' : 'Accelerated 2–3 Weeks'
    }`;
    onOpenInquiryWithScope(summary);
  };

  return (
    <section className="py-20 sm:py-28 border-b border-white/10">
      <Container size="wide">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
            {t('scope.tag', '07. CLIENT ONBOARDING')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
            {t('scope.title', 'Commission Scope Matrix')}
          </h2>
          <p className="text-slate-400 text-base mt-2.5 leading-relaxed font-['Plus_Jakarta_Sans']">
            {t(
              'scope.subtitle',
              'Configure your deliverables to preview the recommended sprint timeline and scope structure before opening formal dialogue.'
            )}
          </p>
        </div>

        {/* Interactive Scope Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block mb-3">
                {t('scope.deliverables', '1. SELECT REQUIRED DELIVERABLES')}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {disciplineOptions.map((opt) => {
                  const isSelected = selectedDisciplines.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleDiscipline(opt.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between select-none ${
                        isSelected
                          ? 'bg-white/10 border-white/40 text-white'
                          : 'bg-[#0E1118] border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['Outfit'] font-semibold text-sm">
                          {opt.label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected
                              ? 'bg-white border-white text-black'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal font-['Plus_Jakarta_Sans']">
                        {opt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline Selector */}
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block mb-3">
                {t('scope.cadence', '2. TARGET SPRINT CADENCE')}
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTimeline('standard')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTimeline === 'standard'
                      ? 'bg-white/10 border-white/40 text-white'
                      : 'bg-[#0E1118] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span className="font-['Outfit'] font-semibold text-sm block">
                    {language === 'rw' ? 'Igihe Gisanzwe' : language === 'fr' ? 'Sprint Standard' : 'Standard Sprint'}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block font-['Space_Mono']">
                    {language === 'rw' ? 'IBYUMWERU 4–6' : language === 'fr' ? 'CADENCE 4–6 SEMAINES' : '4–6 WEEKS CADENCE'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTimeline('accelerated')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTimeline === 'accelerated'
                      ? 'bg-white/10 border-white/40 text-white'
                      : 'bg-[#0E1118] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span className="font-['Outfit'] font-semibold text-sm block">
                    {language === 'rw' ? 'Igihe Cyihuse' : language === 'fr' ? 'Sprint Accéléré' : 'Accelerated Sprint'}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block font-['Space_Mono']">
                    {language === 'rw' ? 'IBYUMWERU 2–3 BYIHUSE' : language === 'fr' ? '2–3 SEMAINES INTENSIF' : '2–3 WEEKS INTENSIVE'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Scope Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131722] via-[#0F131C] to-[#0A0C11] border border-white/15 flex flex-col justify-between gap-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-['Space_Mono'] text-slate-400">
                <span className="flex items-center gap-1.5 text-white">
                  <Calculator className="w-4 h-4 text-slate-300" />
                  {t('scope.summary', 'SCOPE SUMMARY')}
                </span>
                <span className="tabular-nums">
                  {selectedDisciplines.length} {language === 'rw' ? 'IBICE' : language === 'fr' ? 'MODULES' : 'MODULES'}
                </span>
              </div>

              <div className="space-y-2 text-xs font-['Plus_Jakarta_Sans']">
                <span className="text-slate-500 font-['Space_Mono'] uppercase">
                  {language === 'rw' ? 'IBIKENEWE BYATORANYIJWE:' : language === 'fr' ? 'LIVRABLES INCLUS :' : 'INCLUDED DELIVERABLES:'}
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {selectedDisciplines.map((d) => {
                    const matchedOpt = disciplineOptions.find(o => o.id === d);
                    return (
                      <li key={d} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{matchedOpt ? matchedOpt.label : d}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/5 text-xs font-['Space_Mono']">
                <span className="text-slate-500 block">
                  {language === 'rw' ? 'UMUVUDUKO WO GUHEREREZA' : language === 'fr' ? 'CADENCE DE LIVRAISON' : 'DELIVERY CADENCE'}
                </span>
                <span className="text-white font-bold">
                  {selectedTimeline === 'standard'
                    ? language === 'rw'
                      ? 'Ibyumweru 4–6 (Ibyiciro Bibiri byo Guhindura)'
                      : language === 'fr'
                      ? '4–6 Semaines (Deux Cycles d\'Itération)'
                      : '4–6 Weeks (Two Iteration Cycles)'
                    : language === 'rw'
                    ? 'Ibyumweru 2–3 (Uburyo Bwihuse Cyane)'
                    : language === 'fr'
                    ? '2–3 Semaines (Voie Rapide Dédiée)'
                    : '2–3 Weeks (Dedicated Fast-Track)'}
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={handleProceed}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t('scope.proceed', 'Initiate Dialogue with Scope')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
