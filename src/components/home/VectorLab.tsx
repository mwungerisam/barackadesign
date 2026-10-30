import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import { Copy, Check, RotateCcw, PenTool } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const VectorLab: React.FC = () => {
  const { t } = useLanguage();
  const [arcTension, setArcTension] = useState<number>(38);
  const [nibAngle, setNibAngle] = useState<number>(0);
  const [strokeWeight, setStrokeWeight] = useState<number>(2);
  const [copied, setCopied] = useState<boolean>(false);

  const resetParams = () => {
    setArcTension(38);
    setNibAngle(0);
    setStrokeWeight(2);
  };

  const svgPathData = `M 50 10 C ${50 + arcTension} 10 92 28 92 50 C 92 72 ${50 + arcTension} 90 50 90 Z`;

  const handleCopyPath = () => {
    navigator.clipboard?.writeText(svgPathData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="vector-lab" className="py-20 sm:py-28 border-b border-white/10 bg-[#08090D]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
              {t('lab.tag', '04. MATHEMATICAL LABORATORY')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
              {t('lab.title', 'Interactive Vector Engine')}
            </h2>
            <p className="text-slate-400 text-base mt-2.5 leading-relaxed font-['Plus_Jakarta_Sans']">
              {t(
                'lab.subtitle',
                'Experience the mathematical curvature governing the BARACK DESIGN emblem. Adjust the cubic Bézier control tangents, pen nib orientation, and stroke geometry.'
              )}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={resetParams}
            icon={<RotateCcw className="w-3.5 h-3.5" />}
          >
            {t('lab.reset', 'Reset Vector Invariants')}
          </Button>
        </div>

        {/* Vector Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive SVG Viewport */}
          <div className="lg:col-span-7 bg-[#0E1118] border border-white/15 rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-['Space_Mono'] text-slate-400">
              <span className="flex items-center gap-2">
                <PenTool className="w-3.5 h-3.5 text-sky-400" />
                {t('lab.viewport', 'CANVAS VIEWPORT · 400 × 400')}
              </span>
              <span className="text-slate-500 tabular-nums">
                {t('lab.tolerance', 'TOLERANCE: 0.001MM')}
              </span>
            </div>

            {/* Central Vector Renderer */}
            <div className="my-8 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative bg-[#06080C] border border-white/10 rounded-2xl p-4 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.06)" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.06)" />
                  <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />

                  {/* Dynamic Outer B Lobe */}
                  <path
                    d={svgPathData}
                    stroke="#F8FAFC"
                    strokeWidth={strokeWeight}
                    fill="rgba(255,255,255,0.02)"
                  />

                  {/* Bezier Tangent Handle Lines */}
                  <line
                    x1="50"
                    y1="10"
                    x2={50 + arcTension}
                    y2="10"
                    stroke="#38BDF8"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <circle cx={50 + arcTension} cy="10" r="2.5" fill="#38BDF8" />

                  <line
                    x1="50"
                    y1="90"
                    x2={50 + arcTension}
                    y2="90"
                    stroke="#38BDF8"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <circle cx={50 + arcTension} cy="90" r="2.5" fill="#38BDF8" />

                  {/* Pen Nibs with Rotation */}
                  <g transform={`rotate(${nibAngle} 50 38)`}>
                    <polygon points="44,32 58,38 44,44 40,41" stroke="#F8FAFC" strokeWidth="1.5" fill="#12151D" />
                    <circle cx="58" cy="38" r="1.5" fill="#38BDF8" />
                    <path d={`M 58 38 Q ${66 + arcTension / 4} 38 72 28`} stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
                    <rect x="71" y="27" width="2" height="2" fill="#38BDF8" />
                  </g>

                  <g transform={`rotate(${-nibAngle} 50 62)`}>
                    <polygon points="44,56 58,62 44,68 40,65" stroke="#F8FAFC" strokeWidth="1.5" fill="#12151D" />
                    <circle cx="58" cy="62" r="1.5" fill="#38BDF8" />
                    <path d={`M 58 62 Q ${66 + arcTension / 4} 62 72 72`} stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
                    <rect x="71" y="71" width="2" height="2" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Path Output String */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/5 font-['Space_Mono'] text-xs">
              <span className="text-slate-400 truncate max-w-md">{svgPathData}</span>
              <button
                onClick={handleCopyPath}
                className="shrink-0 flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> {t('lab.copied', 'Copied')}
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3.5 h-3.5" /> {t('lab.copy', 'Copy Path')}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Parameters Slider Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/10 flex flex-col gap-5">
              <h4 className="font-['Outfit'] font-bold text-white text-lg">
                Curvature Parameters
              </h4>

              {/* Slider 1: Arc Tension */}
              <div className="flex flex-col gap-2 font-['Space_Mono'] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t('lab.arcTension', 'BÉZIER ARC TENSION')}</span>
                  <span className="text-sky-400 tabular-nums">{arcTension}pt</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="52"
                  value={arcTension}
                  onChange={(e) => setArcTension(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 font-['Plus_Jakarta_Sans']">
                  Controls the outward cubic expansion of the right hemisphere lobe.
                </span>
              </div>

              {/* Slider 2: Nib Pitch Angle */}
              <div className="flex flex-col gap-2 font-['Space_Mono'] text-xs pt-3 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t('lab.nibAngle', 'PEN NIB PITCH')}</span>
                  <span className="text-sky-400 tabular-nums">{nibAngle}°</span>
                </div>
                <input
                  type="range"
                  min="-15"
                  max="15"
                  value={nibAngle}
                  onChange={(e) => setNibAngle(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 font-['Plus_Jakarta_Sans']">
                  Adjusts the fountain pen attack angle against the vector handle node.
                </span>
              </div>

              {/* Slider 3: Stroke Weight */}
              <div className="flex flex-col gap-2 font-['Space_Mono'] text-xs pt-3 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t('lab.strokeWeight', 'HAIRLINE WEIGHT')}</span>
                  <span className="text-sky-400 tabular-nums">{strokeWeight}px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.5"
                  value={strokeWeight}
                  onChange={(e) => setStrokeWeight(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 font-['Plus_Jakarta_Sans']">
                  Calculates razor-sharp edge contrast under micro and macro viewports.
                </span>
              </div>
            </div>

            {/* Architectural Invariants Box */}
            <div className="p-5 rounded-2xl bg-[#0B0D13] border border-white/5 flex flex-col gap-3 font-['Space_Mono'] text-xs text-slate-400">
              <span className="text-white font-semibold">STUDIO INVARIANTS:</span>
              <MetadataText
                items={[
                  'Geometric Symmetry',
                  'Zero Tangent Distortion',
                  'Mathematical Curvature',
                ]}
                separator="·"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
