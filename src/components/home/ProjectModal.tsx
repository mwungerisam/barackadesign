import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Compass, ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { Project } from '../../data/projects';
import { MetadataText } from '../common/MetadataText';
import { Button } from '../common/Button';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
  onViewDetailPage?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
  onViewDetailPage,
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isActualCommission = project.provenance === 'actual_commission';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0D1016] border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10 my-6"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0C11]">
            <MetadataText
              items={[
                { label: project.client.toUpperCase() },
                { label: project.year, isMono: true },
                project.categoryLabel,
              ]}
              separator="·"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="max-h-[80vh] overflow-y-auto">
            {/* Primary High-Resolution Product Photography */}
            <div className="relative w-full aspect-video sm:aspect-[21/9] bg-black overflow-hidden border-b border-white/10">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1016] via-transparent to-transparent opacity-80" />

              {/* Provenance Badge Overlay */}
              <div className="absolute top-4 left-6">
                <span
                  className={`px-3 py-1 rounded text-xs font-['Space_Mono'] backdrop-blur-md border flex items-center gap-1.5 ${
                    isActualCommission
                      ? 'bg-sky-950/80 text-sky-200 border-sky-400/40'
                      : 'bg-black/70 text-slate-300 border-white/15'
                  }`}
                >
                  {isActualCommission ? (
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  ) : (
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  {isActualCommission
                    ? t('works.provenanceActual', 'ORIGINAL BARACK DESIGN COMMISSION')
                    : t('works.provenanceLicensed', 'LICENSED REFERENCE PHOTOGRAPHY')}
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-['Space_Mono'] text-slate-400 uppercase">
                    {language === 'rw' ? 'UBUBIKO BW\'IMIRIMO' : language === 'fr' ? 'ARCHIVE D\'ÉTUDES DE CAS' : 'CASE STUDY ARCHIVE'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {onViewDetailPage && (
                  <button
                    onClick={() => {
                      onClose();
                      onViewDetailPage(project);
                    }}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-['Space_Mono'] transition-colors cursor-pointer border border-white/20"
                  >
                    <span>{t('common.exploreGallery', 'Explore Case Study & Gallery')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Case Study Details Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 font-['Plus_Jakarta_Sans']">
              {/* Left Column: Editorial Brief */}
              <div className="md:col-span-7 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-2">
                    Editorial &amp; Creative Direction
                  </h4>
                  <p className="text-base text-slate-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <h5 className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-slate-300" />
                    Curator's Notes
                  </h5>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.editorialBrief}
                  </p>
                </div>

                {/* Color Palette Specimen */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono'] mb-3">
                    Bespoke Brand Palette
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.palette.map((color, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg bg-black/30 border border-white/10"
                      >
                        <div
                          className="w-full h-8 rounded border border-white/10"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[11px] font-['Space_Mono'] text-slate-400 uppercase">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mathematical & Vector Specifications */}
              <div className="md:col-span-5 flex flex-col gap-5">
                <div className="p-5 rounded-xl bg-[#121620] border border-white/10 flex flex-col gap-4">
                  <h4 className="text-xs uppercase tracking-wider text-slate-300 font-['Outfit'] font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-slate-300" />
                    Engineering Specifications
                  </h4>

                  <div className="flex flex-col gap-3 text-xs font-['Space_Mono']">
                    <div>
                      <span className="text-slate-500 block">VECTOR ANCHOR COUNT</span>
                      <span className="text-slate-200 tabular-nums">
                        {project.vectorSpecs.anchors} Tangent Control Points
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-slate-500 block">BÉZIER PRECISION</span>
                      <span className="text-slate-200">
                        {project.vectorSpecs.bezierPrecision}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-slate-500 block">PRIMARY SUBSTRATE</span>
                      <span className="text-slate-200">
                        {project.vectorSpecs.substrate}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-slate-500 block">MANUFACTURING CRAFT</span>
                      <span className="text-slate-300">
                        {project.vectorSpecs.printFinish}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-[#151924] to-[#10131B] border border-white/15 flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-['Space_Mono']">
                    {language === 'rw' ? 'SABA UMUSHINGA NKAWA' : language === 'fr' ? 'COMMANDER UN PROJET SIMILAIRE' : 'COMMISSION SIMILAR CRAFT'}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === 'rw'
                      ? 'Saba isuzuma ry\'ibanze ry\'ikirango cyangwa ibipfunyika byawe bishya.'
                      : language === 'fr'
                      ? 'Demandez une étude exploratoire pour votre prochain projet d\'identité ou de packaging.'
                      : 'Request an exploratory review for your upcoming brand identity or packaging commission.'}
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      onClose();
                      onOpenInquiry();
                    }}
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    {t('footer.initiate', 'Start Studio Dialogue')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
