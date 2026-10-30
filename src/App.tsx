import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { InquiryModal } from './components/layout/InquiryModal';
import { Hero } from './components/home/Hero';
import { SelectedWorks } from './components/home/SelectedWorks';
import { ServicesCatalog } from './components/services/ServicesCatalog';
import { ServiceDetailPage } from './components/services/ServiceDetailPage';
import { ProjectDetailPage } from './components/portfolio/ProjectDetailPage';
import { QuotationWizard } from './components/quote/QuotationWizard';
import { BackendDocModal } from './components/quote/BackendDocModal';
import { VectorLab } from './components/home/VectorLab';
import { Disciplines } from './components/home/Disciplines';
import { StudioCredo } from './components/home/StudioCredo';
import { ScopeEstimator } from './components/home/ScopeEstimator';
import { ContactSection } from './components/home/ContactSection';
import { FloatingContactWidget } from './components/common/FloatingContactWidget';
import { ProjectModal } from './components/home/ProjectModal';
import { Project, PROJECTS } from './data/projects';
import { ServiceProduct, SERVICES_PRODUCTS } from './data/services';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryScope, setInquiryScope] = useState('');
  const [selectedQuickProject, setSelectedQuickProject] = useState<Project | null>(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceProduct | null>(null);
  const [quoteViewActive, setQuoteViewActive] = useState(false);
  const [backendDocsOpen, setBackendDocsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle URL hash changes (e.g. #quote, #services/:id, #project/:id, #vector-lab, #studio, etc.)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;

      if (hash === '#quote') {
        setQuoteViewActive(true);
        setSelectedService(null);
        setSelectedProjectDetail(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        const matched = PROJECTS.find((p) => p.id === projectId || p.slug === projectId);
        if (matched) {
          setSelectedProjectDetail(matched);
          setSelectedService(null);
          setQuoteViewActive(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash.startsWith('#services/')) {
        const serviceId = hash.replace('#services/', '');
        const matched = SERVICES_PRODUCTS.find((s) => s.id === serviceId || s.slug === serviceId);
        if (matched) {
          setSelectedService(matched);
          setSelectedProjectDetail(null);
          setQuoteViewActive(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const knownSectionIds = [
        'works',
        'services',
        'vector-lab',
        'disciplines',
        'studio',
        'contact',
        'scope-estimator',
      ];
      const targetSection = knownSectionIds.find((id) => hash === `#${id}`);

      if (targetSection) {
        setSelectedService(null);
        setSelectedProjectDetail(null);
        setQuoteViewActive(false);
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
        return;
      }

      if (hash === '' || hash === '#' || hash === '#top') {
        setSelectedService(null);
        setSelectedProjectDetail(null);
        setQuoteViewActive(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setQuoteViewActive(false);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track active section for top bar indicator when on home view
  useEffect(() => {
    if (selectedService || selectedProjectDetail || quoteViewActive) return;

    const handleScroll = () => {
      const sections = ['works', 'services', 'vector-lab', 'disciplines', 'studio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedService, selectedProjectDetail, quoteViewActive]);

  const handleOpenInquiryWithScope = (scopeSummary: string) => {
    setInquiryScope(scopeSummary);
    setInquiryOpen(true);
  };

  const handleExploreWorks = () => {
    if (selectedService || selectedProjectDetail || quoteViewActive) {
      setSelectedService(null);
      setSelectedProjectDetail(null);
      setQuoteViewActive(false);
      window.location.hash = '#works';
      setTimeout(() => {
        const worksEl = document.getElementById('works');
        if (worksEl) worksEl.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const worksEl = document.getElementById('works');
      if (worksEl) worksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGlobalNavigate = (href: string) => {
    if (href === '#quote') {
      setSelectedService(null);
      setSelectedProjectDetail(null);
      setQuoteViewActive(true);
      window.location.hash = '#quote';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '#top') {
      setSelectedService(null);
      setSelectedProjectDetail(null);
      setQuoteViewActive(false);
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (selectedService || selectedProjectDetail || quoteViewActive) {
      setSelectedService(null);
      setSelectedProjectDetail(null);
      setQuoteViewActive(false);
      window.location.hash = href;
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (service: ServiceProduct) => {
    setSelectedService(service);
    setSelectedProjectDetail(null);
    setQuoteViewActive(false);
    window.location.hash = `#services/${service.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectDetail = (project: Project) => {
    setSelectedProjectDetail(project);
    setSelectedService(null);
    setQuoteViewActive(false);
    window.location.hash = `#project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    setSelectedProjectDetail(null);
    setQuoteViewActive(false);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090A0D] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] antialiased selection:bg-white/20 selection:text-white">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        onOpenInquiry={() => {
          setQuoteViewActive(true);
          window.location.hash = '#quote';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeSection={
          quoteViewActive
            ? 'quote'
            : selectedProjectDetail
            ? 'works'
            : selectedService
            ? 'services'
            : activeSection
        }
        onNavigate={handleGlobalNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {quoteViewActive ? (
          /* Dedicated Multi-Step Quotation Experience (Phase 5) */
          <QuotationWizard
            onBackToHome={handleBackToHome}
            onOpenBackendDocs={() => setBackendDocsOpen(true)}
          />
        ) : selectedProjectDetail ? (
          /* Dedicated Project Detail Page with Responsive Image Gallery & Provenance */
          <ProjectDetailPage
            project={selectedProjectDetail}
            onBack={handleBackToHome}
            onSelectProject={handleSelectProjectDetail}
            onOpenInquiry={handleOpenInquiryWithScope}
          />
        ) : selectedService ? (
          /* Dedicated Service & Product Page */
          <ServiceDetailPage
            service={selectedService}
            onBack={handleBackToHome}
            onSelectService={handleSelectService}
            onOpenInquiry={handleOpenInquiryWithScope}
          />
        ) : (
          /* Full Studio Homepage Flow */
          <div className="pt-16 sm:pt-18">
            {/* Split Hero with Authentic Seal & Vector Anatomy Mode */}
            <Hero
              onOpenInquiry={() => {
                setQuoteViewActive(true);
                window.location.hash = '#quote';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreWorks={handleExploreWorks}
            />

            {/* Selected Works Portfolio Grid with Category Filters & Provenance Badges */}
            <SelectedWorks
              onSelectProject={(project) => setSelectedQuickProject(project)}
              onOpenProjectDetail={handleSelectProjectDetail}
            />

            {/* Dedicated Services & Products Catalog */}
            <ServicesCatalog
              onSelectService={handleSelectService}
              onOpenInquiry={handleOpenInquiryWithScope}
            />

            {/* Interactive Vector Engine & Bezier Playground */}
            <VectorLab />

            {/* Studio Disciplines */}
            <Disciplines
              onOpenInquiry={() => {
                setInquiryScope('');
                setInquiryOpen(true);
              }}
            />

            {/* Studio Credo & Attributable Testimonials */}
            <StudioCredo />

            {/* Client Scope Estimator & Matrix */}
            <ScopeEstimator onOpenInquiryWithScope={handleOpenInquiryWithScope} />

            {/* Direct Studio Contact Experience & Kigali Coordinates */}
            <ContactSection
              onOpenInquiry={() => {
                setInquiryScope('');
                setInquiryOpen(true);
              }}
              onOpenQuote={() => {
                setSelectedService(null);
                setSelectedProjectDetail(null);
                setQuoteViewActive(true);
                window.location.hash = '#quote';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </main>

      {/* Studio Editorial Footer */}
      <Footer
        onOpenInquiry={() => {
          setQuoteViewActive(true);
          window.location.hash = '#quote';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigate={handleGlobalNavigate}
      />

      {/* Case Study Quick Lightbox Modal */}
      <ProjectModal
        project={selectedQuickProject}
        onClose={() => setSelectedQuickProject(null)}
        onOpenInquiry={() => {
          setInquiryScope(
            selectedQuickProject ? `Inquiry regarding case study: ${selectedQuickProject.title}` : ''
          );
          setInquiryOpen(true);
        }}
        onViewDetailPage={handleSelectProjectDetail}
      />

      {/* Commission Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialOverview={inquiryScope}
      />

      {/* In-App Backend Integration Architecture Modal */}
      <BackendDocModal
        isOpen={backendDocsOpen}
        onClose={() => setBackendDocsOpen(false)}
      />

      {/* Floating WhatsApp Concierge & Phone Assistant */}
      <FloatingContactWidget />
    </div>
  );
}
