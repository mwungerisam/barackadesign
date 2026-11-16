import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { APPROVED_SERVICES } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenQuote: (categoryId?: string, productId?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_PROJECTS.filter(p => {
    if (selectedFilter === 'all') return true;
    return p.categoryId === selectedFilter;
  });

  return (
    <section id="portfolio" className="border-b border-[#E9E3DD] bg-[#F5F3F0] py-16 text-[#111111] sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666]">Project examples</div>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-4xl">
              A clearer view of what we can make.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#5C5C5C]">
              A selection of print, apparel, display, packaging, and identity projects from Kigali.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
                className={`rounded-lg px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#555555] hover:text-[#111111]'
              }`}
            >
              All Projects ({PORTFOLIO_PROJECTS.length})
            </button>
            {APPROVED_SERVICES.slice(0, 5).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                  className={`rounded-lg px-3.5 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === cat.id
                    ? 'bg-[#111111] text-white font-semibold'
                    : 'bg-white text-[#555555] hover:text-[#111111]'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E1DB] bg-white shadow-[0_8px_30px_rgba(17,17,17,0.03)] transition-colors hover:border-[#C9C1BA]"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden bg-[#E9E3DD] sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
                <div className="space-y-2.5">
                  <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#777777]">
                    {project.category} · Example
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-[#111111]">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[#5C5C5C]">
                    {project.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#EEE9E4] pt-3 text-xs">
                  <span className="font-medium text-[#555555]">View project</span>
                  <ArrowRight className="h-4 w-4 text-[#111111]" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Specs Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative max-h-[85vh] w-full max-w-3xl space-y-6 overflow-y-auto rounded-2xl border border-[#E7E1DB] bg-white p-6 text-left shadow-2xl sm:p-8">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute right-4 top-4 rounded-lg p-2 text-[#666666] hover:bg-[#F2F0EE] hover:text-[#111111]"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="overflow-hidden rounded-xl border border-[#EEE9E4]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#777777]">{activeModalProject.category} · Project example</span>
                <h3 className="font-heading text-xl font-semibold text-[#111111]">{activeModalProject.title}</h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C]">{activeModalProject.summary}</p>

                <div className="space-y-1 pt-2 text-xs text-[#333333]">
                  <div><strong className="text-[#777777]">Client type:</strong> {activeModalProject.clientType}</div>
                  <div><strong className="text-[#777777]">Location:</strong> {activeModalProject.location}</div>
                  <div><strong className="text-[#777777]">Technique:</strong> {activeModalProject.technique}</div>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className="space-y-3 border-t border-[#EEE9E4] pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#444444]">Example specifications</h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Object.entries(activeModalProject.specs).map(([key, value]) => (
                  <div key={key} className="rounded-lg border border-[#EEE9E4] bg-[#FAF9F7] p-3 text-left">
                    <div className="font-mono text-[10px] uppercase text-[#777777]">{key}</div>
                    <div className="mt-0.5 text-xs font-semibold text-[#111111]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#EEE9E4] pt-4">
              <span className="text-xs text-[#666666]">Discuss a similar project with our team.</span>
              <button
                onClick={() => {
                  const catId = activeModalProject.categoryId;
                  setActiveModalProject(null);
                  onOpenQuote(catId);
                }}
                className="rounded-lg bg-[#111111] px-5 py-2.5 text-xs font-semibold uppercase text-white hover:bg-[#333333]"
              >
                Request Similar Quote
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
