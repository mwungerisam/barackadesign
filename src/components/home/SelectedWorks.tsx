import React, { useState } from 'react';
import { Container } from '../common/Container';
import { MetadataText } from '../common/MetadataText';
import { PROJECTS, Project } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowUpRight, ShieldCheck, Info } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
  onOpenProjectDetail?: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  onSelectProject,
  onOpenProjectDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('works.filterAll', 'All Projects (6)') },
    { id: 'actual', label: t('works.filterActual', 'Actual Commissions') },
    { id: 'packaging', label: t('works.filterPackaging', 'Packaging & Foil') },
    { id: 'typography', label: t('works.filterTypography', 'Vector Typography') },
    { id: 'identity', label: t('works.filterIdentity', 'Brand Systems') },
    { id: 'editorial', label: t('works.filterEditorial', 'Editorial & Monograph') },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'actual') return p.provenance === 'actual_commission';
    if (activeCategory === 'packaging') return p.category === 'packaging';
    if (activeCategory === 'typography') return p.category === 'typography';
    if (activeCategory === 'identity') return p.category === 'identity';
    if (activeCategory === 'editorial') return p.category === 'editorial';
    return true;
  });

  const handleCardClick = (project: Project) => {
    if (onOpenProjectDetail) {
      onOpenProjectDetail(project);
    } else {
      onSelectProject(project);
    }
  };

  return (
    <section id="works" className="py-20 sm:py-28 border-b border-white/10">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
              {t('works.tag', '02. PORTFOLIO & ARCHIVE')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
              {t('works.title', 'Selected Works & Case Studies')}
            </h2>
            <p className="text-slate-400 text-base mt-2.5 leading-relaxed font-['Plus_Jakarta_Sans']">
              {t(
                'works.subtitle',
                'A curated retrospective of bespoke vector marks, luxury packaging suites, and editorial monographs. Provenance is rigorously classified between actual studio commissions and licensed conceptual references.'
              )}
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#10131B] rounded-xl border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-['Outfit'] font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Provenance Key Guide (Zero-Pill compliant) */}
        <div className="mb-8 p-3 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-['Space_Mono']">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-slate-500">PROVENANCE:</span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('works.provenanceActual', 'ORIGINAL BARACK DESIGN COMMISSION')}</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Info className="w-3.5 h-3.5" />
              <span>{t('works.provenanceLicensed', 'LICENSED REFERENCE PHOTOGRAPHY')}</span>
            </span>
          </div>
          <span className="text-slate-500 tabular-nums">
            {t('works.showing', 'SHOWING')} {filteredProjects.length} {t('works.of', 'OF')} {PROJECTS.length} {t('works.works', 'WORKS')}
          </span>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isActual = project.provenance === 'actual_commission';
            const provenanceText = isActual
              ? t('works.provenanceActual', project.provenanceLabel)
              : t('works.provenanceLicensed', project.provenanceLabel);

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className={`group relative rounded-2xl bg-[#0D1016] border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                  isActual
                    ? 'border-white/15 hover:border-sky-400/50'
                    : 'border-white/10 hover:border-white/25'
                } ${project.colSpan}`}
              >
                {/* Product Photography Container */}
                <div className="relative w-full aspect-video overflow-hidden bg-black/60">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1016] via-transparent to-black/20 opacity-80" />

                  {/* Top Provenance & Client Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div
                      className={`backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-['Space_Mono'] border flex items-center gap-1.5 ${
                        isActual
                          ? 'bg-sky-950/80 text-sky-200 border-sky-400/40'
                          : 'bg-black/70 text-slate-300 border-white/10'
                      }`}
                    >
                      {isActual ? (
                        <ShieldCheck className="w-3 h-3 text-sky-400" />
                      ) : (
                        <Info className="w-3 h-3 text-slate-400" />
                      )}
                      <span>{provenanceText}</span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-3 font-['Plus_Jakarta_Sans']">
                  <MetadataText
                    items={[
                      project.categoryLabel,
                      { label: project.year, isMono: true },
                      { label: `${project.vectorSpecs.anchors} ANCHORS`, isMono: true },
                    ]}
                    separator="·"
                  />

                  <h3 className="font-['Outfit'] text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-['Space_Mono'] text-slate-400">
                    <span className="text-slate-400 truncate max-w-[200px] sm:max-w-none">
                      {project.vectorSpecs.primaryTypeface}
                    </span>
                    <span className="text-white group-hover:underline underline-offset-4 flex items-center gap-1 shrink-0">
                      {t('works.inspect', 'Explore Case Study & Gallery')} <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
