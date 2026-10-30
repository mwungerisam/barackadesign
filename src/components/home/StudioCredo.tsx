import React from 'react';
import { Container } from '../common/Container';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const StudioCredo: React.FC = () => {
  const { language, t } = useLanguage();

  const getTestimonials = () => {
    if (language === 'rw') {
      return [
        {
          quote:
            'BARACK DESIGN yongeye kubaka ikirango cyacu cy\'imibavu kuva hasi kugeza hejuru. Ikirango cya vekitori cyihariye n\'icupa ryirabura byazamuye ubucuruzi bwacu i Paris n\'i Londres, byongera abakiriya bacu ba zahabu ku kigero cya 180% mu mezi atandatu ya mbere.',
          author: 'Antoine Moreau',
          role: 'Umuyobozi w\'Ubuhanzi & Uwabitangije',
          organization: 'Maison Obsidian Paris',
          year: 'Umushinga wa 2026',
        },
        {
          quote:
            'Ubushakashatsi n\'ubwitonzi bukabije BARACK DESIGN yakoresheje ku isaha yacu ya titanium ntibisanzwe. Imibare yabo ya vekitori yarebwe na mikorosikope inshuro 20 nta kosa na rimwe rigaragaye.',
          author: 'Henrik Lindqvist',
          role: 'Umuyobozi w\'Ubwubatsi bw\'Ibicuruzwa',
          organization: 'Manufacture Horlogère Aurora',
          year: 'Umushinga wa 2026',
        },
      ];
    }

    if (language === 'fr') {
      return [
        {
          quote:
            'BARACK DESIGN a repensé notre maison de haute parfumerie de fond en comble. Le monogramme vectoriel sur mesure et le flacon noir mat débossé ont sublimé notre présence à Paris et Londres, propulsant nos ventes en boutique de luxe de 180% dès les deux premiers trimestres.',
          author: 'Antoine Moreau',
          role: 'Directeur de Création & Fondateur',
          organization: 'Maison Obsidian Paris',
          year: 'Commission 2026',
        },
        {
          quote:
            'Le niveau de rigueur micro-typographique apporté par BARACK DESIGN à notre chronographe en titane est sans précédent. Leurs ancres vectorielles ont résisté à une inspection sous loupe 20x sans le moindre artefact d\'interpolation.',
          author: 'Henrik Lindqvist',
          role: 'Directeur de l\'Architecture Produit',
          organization: 'Manufacture Horlogère Aurora',
          year: 'Commission 2026',
        },
      ];
    }

    return [
      {
        quote:
          'BARACK DESIGN reimagined our heritage fragrance brand from the ground up. The custom vector monogram and debossed black flacon elevated our retail presence in Paris and London, accelerating our luxury boutique accounts by 180% within the first two quarters.',
        author: 'Antoine Moreau',
        role: 'Creative Director & Founder',
        organization: 'Maison Obsidian Paris',
        year: '2026 Commission',
      },
      {
        quote:
          'The level of micro-typographic rigor BARACK DESIGN applied to our titanium chronograph dial is unprecedented. Their mathematical vector anchors held up to 20x loupe inspection without a single interpolation artifact.',
        author: 'Henrik Lindqvist',
        role: 'Head of Product Architecture',
        organization: 'Manufacture Horlogère Aurora',
        year: '2026 Commission',
      },
    ];
  };

  const testimonials = getTestimonials();

  return (
    <section id="studio" className="py-20 sm:py-28 border-b border-white/10 bg-[#090B0F]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Manifesto */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono']">
              {t('credo.tag', '06. PHILOSOPHY & ETHOS')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight leading-tight">
              {t('credo.title', 'Form Governed by Mathematical Restraint')}
            </h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
              {language === 'rw' ? (
                <>
                  <p>
                    Mu gihe amashusho menshi akorwa n'ikoranabuhanga ryihuta kandi rigana ku busa,
                    BARACK DESIGN ikorera ku mahame ya kera: ingano z'imibare, umwanya w'isuku,
                    n'ubushakashatsi bwa vekitori butadohoka.
                  </p>
                  <p>
                    Buri kadomo dushyizeho gafite intego. Buri bwoko bw'inyandiko duhuje bufite
                    amateka akomeye. Twaba dukora igitabo cy'amateka cyangwa ikirango cy'agaciro
                    gahambaye, intego yacu ni ubwiza buhoraho.
                  </p>
                </>
              ) : language === 'fr' ? (
                <>
                  <p>
                    Dans un paysage digital saturé de modes éphémères et d'interfaces répliquées
                    par algorithme, BARACK DESIGN applique des principes classiques : proportions
                    géométriques, espace négatif discipliné et rigueur vectorielle absolue.
                  </p>
                  <p>
                    Chaque point d'ancrage tracé est délibéré. Chaque typographie porte une gravité
                    historique. De la monographie d'archives au monogramme d'une maison de luxe, notre
                    but est la permanence esthétique.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In a digital landscape oversaturated with transient trends and algorithmically
                    replicated interfaces, BARACK DESIGN operates on classical principles: geometric
                    proportions, disciplined negative space, and relentless vector precision.
                  </p>
                  <p>
                    Every anchor point we plot is deliberate. Every typeface pairing has historical
                    gravity. Whether constructing an archival monograph or an avant-garde luxury
                    monogram, our goal is permanent visual poise.
                  </p>
                </>
              )}
            </div>

            {/* Studio Metrics Specimen */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-['Space_Mono'] text-xs">
              <div>
                <span className="text-slate-500 block">
                  {language === 'rw' ? 'UMWAKA WO GUTANGIRA' : language === 'fr' ? 'ANNÉE DE FONDATION' : 'FOUNDATION YEAR'}
                </span>
                <span className="text-white text-base font-bold tabular-nums">2024</span>
              </div>
              <div>
                <span className="text-slate-500 block">
                  {language === 'rw' ? 'AHO ATELIYE IKORERA' : language === 'fr' ? 'SIÈGE DE L\'ATELIER' : 'STUDIO LOCATION'}
                </span>
                <span className="text-white text-base font-bold">
                  {language === 'rw' ? 'KIGALI · KU ISI HOSE' : language === 'fr' ? 'KIGALI · RAYONNEMENT MONDIAL' : 'KIGALI · GLOBAL ENGAGEMENT'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Attributable Testimonials */}
          <div className="lg:col-span-6 flex flex-col gap-6 font-['Plus_Jakarta_Sans']">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono']">
              {t('credo.testimonials', 'COMMISSION TESTIMONIALS')}
            </span>

            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0E1118] border border-white/10 flex flex-col justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="flex gap-4">
                  <Quote className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div>
                    <h5 className="font-['Outfit'] font-bold text-white text-sm">
                      {t.author}
                    </h5>
                    <span className="text-slate-400">
                      {t.role} · {t.organization}
                    </span>
                  </div>
                  <span className="font-['Space_Mono'] text-slate-500">
                    {t.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
