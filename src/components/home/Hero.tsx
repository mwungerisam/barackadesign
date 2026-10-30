import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowDown, ArrowUpRight, Code, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWorks }) => {
  const [viewMode, setViewMode] = useState<'authentic' | 'wireframe'>('authentic');
  const [handleTension, setHandleTension] = useState<number>(36);
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pb-24 border-b border-white/10">
      {/* Ambient Radial Backlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(226, 232, 240, 0.3), transparent 75%)',
        }}
      />

      <Container size="wide">
        {/* Zero-Pill Header Kicker */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <MetadataText
            items={[
              { label: t('hero.atelier', 'BARACK DESIGN ATELIER'), isMono: true },
              t('hero.kicker', 'Brand Identity & Vector Systems'),
              { label: t('hero.status', 'EST. 2024 · COMMISSIONS OPEN'), isMono: true },
            ]}
            separator="·"
          />
          <div className="text-xs text-slate-500 font-['Space_Mono'] uppercase">
            {t('hero.spec', 'GEOMETRIC PRECISION ATELIER')}
          </div>
        </div>

        {/* Split-Screen Hero Grid (Items Stretch for Balanced Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div className="flex flex-col gap-6">
              <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.05] text-balance">
                {t('hero.headlineStart', 'Precision Vector Systems &')}{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  {t('hero.headlineAccent', 'Brand Architecture')}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal font-['Plus_Jakarta_Sans']">
                {t(
                  'hero.lead',
                  'BARACK DESIGN is an independent studio specializing in bespoke brand identity systems, mathematical vector typography, and tactile packaging craft for founders, luxury maisons, and progressive institutions globally.'
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2 flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenInquiry}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {t('hero.ctaQuote', 'Instant Quote & Configuration')}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onExploreWorks}
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  {t('hero.ctaWorks', 'Explore Selected Works')}
                </Button>
              </div>
            </div>

            {/* Quiet Discipline Tags (Zero-Pill) */}
            <div className="pt-8 mt-6 border-t border-white/10">
              <MetadataText
                items={[
                  'Vector Identity',
                  'Dial Typography',
                  'Haute Packaging',
                  'Design Engineering',
                ]}
                separator="·"
              />
            </div>
          </div>

          {/* Right Column: Interactive Logo Medallion / Vector Wireframe Explorer */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl bg-gradient-to-b from-[#141822] via-[#10131B] to-[#0A0C11] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.7)] group">
              {/* Header Mode Toggle */}
              <div className="w-full flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                <span className="text-xs text-slate-400 font-['Space_Mono'] uppercase tracking-wider">
                  {t('hero.emblemCraft', 'STUDIO EMBLEM CRAFT')}
                </span>

                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setViewMode('authentic')}
                    className={`px-2.5 py-1 text-xs font-['Outfit'] rounded font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'authentic'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    {t('hero.viewLuster', 'Luster')}
                  </button>
                  <button
                    onClick={() => setViewMode('wireframe')}
                    className={`px-2.5 py-1 text-xs font-['Outfit'] rounded font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'wireframe'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code className="w-3 h-3" />
                    {t('hero.viewGrid', 'Bézier Grid')}
                  </button>
                </div>
              </div>

              {/* Central Visual Arena */}
              <div className="relative my-auto flex flex-col items-center justify-center py-6">
                {viewMode === 'authentic' ? (
                  <motion.div
                    key="authentic"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Concentric Halo */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-white/30 via-white/5 to-white/40 shadow-[0_0_50px_rgba(255,255,255,0.12)]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#090A0D] border border-white/20">
                        <img
                          src="/assets/aistudio/image_716280c1.png"
                          alt="BARACK DESIGN Original Seal"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('/public/assets/')) {
                              target.src = '/public/assets/aistudio/image_716280c1.png';
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <div className="font-['Outfit'] text-lg font-bold tracking-tight text-white uppercase">
                        BARACK <span className="font-light text-slate-400">DESIGN</span>
                      </div>
                      <div className="text-xs text-slate-400 font-['Space_Mono'] mt-1">
                        {t('hero.sealDesc', 'ORIGINAL SEAL · MATTE OBSIDIAN & PLATINUM')}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="wireframe"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full flex flex-col items-center"
                  >
                    {/* Interactive Vector Blueprint */}
                    <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full border border-sky-400/30 bg-[#06080C] p-2 flex items-center justify-center shadow-[inset_0_0_30px_rgba(56,189,248,0.08)]">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                        <circle cx="50" cy="50" r="48" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />

                        <path
                          d={`M50 8 C${50 + handleTension} 8 92 26 92 50 C92 74 ${50 + handleTension} 92 50 92`}
                          stroke="#38BDF8"
                          strokeWidth="2"
                          fill="none"
                        />

                        <polygon points="46,38 58,44 46,50 42,47 46,38" stroke="#F8FAFC" strokeWidth="1.5" fill="none" />
                        <circle cx="58" cy="44" r="1.5" fill="#38BDF8" />
                        <path
                          d={`M58 44 C66 44 ${54 + handleTension / 2} 32 72 32`}
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <rect x="71" y="31" width="2" height="2" fill="#38BDF8" />

                        <polygon points="46,56 58,62 46,68 42,65 46,56" stroke="#F8FAFC" strokeWidth="1.5" fill="none" />
                        <circle cx="58" cy="62" r="1.5" fill="#38BDF8" />
                        <path
                          d={`M58 62 C66 62 ${54 + handleTension / 2} 74 72 74`}
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <rect x="71" y="73" width="2" height="2" fill="#38BDF8" />

                        <line x1="50" y1="8" x2="50" y2="92" stroke="#38BDF8" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div className="w-full max-w-xs mt-4 flex flex-col gap-1.5 font-['Space_Mono'] text-xs">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>{t('hero.tension', 'BÉZIER TENSION')}</span>
                        <span className="text-sky-400 tabular-nums">{handleTension}pt</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="50"
                        value={handleTension}
                        onChange={(e) => setHandleTension(Number(e.target.value))}
                        className="w-full accent-sky-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Card Footer Technical Coordinates */}
              <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-['Space_Mono']">
                <span>{t('hero.curvature', 'MATHEMATICAL CURVATURE')}</span>
                <span className="text-slate-600">·</span>
                <span className="tabular-nums">0.001MM TOLERANCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric & Proof Row Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-['Plus_Jakarta_Sans']">
          <div className="flex flex-col gap-1">
            <span className="font-['Space_Mono'] text-2xl sm:text-3xl font-bold text-white tabular-nums">
              24+
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {t('hero.metricAccolades', 'Global Design Accolades')}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-['Space_Mono'] text-2xl sm:text-3xl font-bold text-white tabular-nums">
              100%
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {t('hero.metricBespoke', 'Bespoke Vector Engineering')}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-['Space_Mono'] text-2xl sm:text-3xl font-bold text-white tabular-nums">
              1440px
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {t('hero.metricGrid', 'Fluid Desktop Precision')}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-['Space_Mono'] text-2xl sm:text-3xl font-bold text-white tabular-nums">
              14 Days
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {t('hero.metricSprint', 'Average Direction Sprint')}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
