import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MetadataText } from '../common/MetadataText';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Check,
  Award,
  Layers,
  ArrowUpRight,
  Copy,
  Info
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onOpenInquiry: (initialOverview: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject,
  onOpenInquiry,
}) => {
  const { language, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeImage = project.gallery[activeImageIndex] || {
    url: project.coverImage,
    caption: project.title,
    aspectRatio: project.aspectRatio,
  };

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const isActualCommission = project.provenance === 'actual_commission';

  return (
    <div className="min-h-screen bg-[#090A0D] text-slate-100 font-['Plus_Jakarta_Sans'] pt-20 sm:pt-24 pb-24">
      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs font-['Space_Mono']">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t('common.returnToPortfolio', 'RETURN TO PORTFOLIO GRID')}</span>
          </button>

          <MetadataText
            items={[
              { label: project.client.toUpperCase() },
              { label: project.year, isMono: true },
              project.categoryLabel.toUpperCase(),
            ]}
            separator="·"
          />
        </div>

        {/* Clear Provenance Distinction Banner */}
        <div
          className={`p-4 rounded-xl border mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-['Space_Mono'] ${
            isActualCommission
              ? 'bg-[#0E1522] border-sky-400/30 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.06)]'
              : 'bg-[#141418] border-white/15 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {isActualCommission ? (
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            ) : (
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
            )}
            <div>
              <span className="font-bold tracking-wider">
                {t('common.provenanceClassification', 'PROVENANCE CLASSIFICATION')}:{' '}
              </span>
              <span className={isActualCommission ? 'text-white' : 'text-slate-300'}>
                {isActualCommission
                  ? t('works.provenanceActual', 'ORIGINAL BARACK DESIGN COMMISSION')
                  : t('works.provenanceLicensed', 'LICENSED REFERENCE PHOTOGRAPHY')}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            {isActualCommission
              ? t('common.verifiedCommissionDesc', 'Official verified commission engineered by BARACK DESIGN studio')
              : t('common.licensedStockDesc', 'Licensed stock & conceptual design reference benchmark')}
          </div>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] block mb-2">
            {project.tagline}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4 font-normal">
            {project.description}
          </p>
        </div>

        {/* Responsive Multi-Angle Image Gallery */}
        <div className="mb-16 flex flex-col gap-4">
          {/* Main Active Image Viewport */}
          <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
            <img
              src={activeImage.url}
              alt={activeImage.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/90 via-transparent to-transparent opacity-80" />

            {/* Floating Image Caption */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <p className="text-xs sm:text-sm text-slate-200 font-['Plus_Jakarta_Sans'] max-w-xl bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                {activeImage.caption}
              </p>
              <span className="text-xs font-['Space_Mono'] text-slate-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                PLATE {activeImageIndex + 1} OF {project.gallery.length}
              </span>
            </div>
          </div>

          {/* Interactive Gallery Thumbnails (if multiple images) */}
          {project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-28 sm:w-36 aspect-video rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-white ring-2 ring-white/30 scale-105'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detailed Case Study Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start font-['Plus_Jakarta_Sans']">
          {/* Left Column: Creative Direction & Outcome */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-3">
                ART DIRECTION &amp; RATIONALE
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.editorialBrief}
              </p>
            </div>

            {/* Verifiable Outcome / Proof Adjacency */}
            <div className="p-6 rounded-2xl bg-[#0D1017] border border-white/10 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] flex items-center gap-2">
                <Award className="w-4 h-4 text-slate-300" />
                VERIFIED OUTCOME &amp; RECOGNITION
              </span>
              <p className="text-sm text-white font-medium leading-relaxed">
                {project.outcomeMetrics}
              </p>
            </div>

            {/* Bespoke Brand Palette with Copy-to-Clipboard */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-3">
                CHROMATIC SYSTEM (CLICK TO COPY HEX)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.palette.map((hex, i) => (
                  <div
                    key={i}
                    onClick={() => handleCopyColor(hex)}
                    className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-white/30 transition-all cursor-pointer flex flex-col items-center gap-2 group"
                  >
                    <div
                      className="w-full h-10 rounded-lg border border-white/10 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: hex }}
                    />
                    <div className="flex items-center justify-between w-full text-[11px] font-['Space_Mono'] text-slate-400">
                      <span className="uppercase">{hex}</span>
                      {copiedColor === hex ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering & Vector Specifications */}
          <div className="lg:col-span-5 flex flex-col gap-6 font-['Space_Mono'] text-xs">
            <div className="p-6 rounded-2xl bg-[#0E121A] border border-white/15 flex flex-col gap-4 shadow-xl">
              <h3 className="font-['Outfit'] text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-300" />
                Engineering Specification Sheet
              </h3>

              <div className="space-y-3 text-xs pt-2">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                  <span className="text-slate-500">VECTOR CONTROL NODES</span>
                  <span className="text-white font-bold tabular-nums">
                    {project.vectorSpecs.anchors} Mathematical Tangents
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                  <span className="text-slate-500">BÉZIER PRECISION</span>
                  <span className="text-white">{project.vectorSpecs.bezierPrecision}</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                  <span className="text-slate-500">PRIMARY SUBSTRATE</span>
                  <span className="text-white">{project.vectorSpecs.substrate}</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                  <span className="text-slate-500">MANUFACTURING FINISH</span>
                  <span className="text-slate-300">{project.vectorSpecs.printFinish}</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-1">
                  <span className="text-slate-500">TYPOGRAPHIC SYSTEM</span>
                  <span className="text-slate-300">{project.vectorSpecs.primaryTypeface}</span>
                </div>
              </div>

              {/* Commission Action */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() =>
                    onOpenInquiry(`Commission Inquiry: Inquiring regarding ${project.title} (${project.categoryLabel})`)
                  }
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full"
                >
                  Commission Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Space_Mono'] text-xs">
          <button
            onClick={() => {
              onSelectProject(prevProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREV: {prevProject.title}</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">·</span>

          <button
            onClick={() => {
              onSelectProject(nextProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>NEXT: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </div>
  );
};
