import React from 'react';
import { Container } from '../common/Container';
import { ArrowUpRight, Compass, Layers, Cpu, Box } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface DisciplinesProps {
  onOpenInquiry: () => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ onOpenInquiry }) => {
  const { language, t } = useLanguage();

  const getDisciplines = () => {
    if (language === 'rw') {
      return [
        {
          num: '01',
          title: 'Ubwubatsi bw\'Ikirango & Imiterere ya Vekitori',
          icon: <Compass className="w-5 h-5 text-slate-300" />,
          description:
            'Uburyo bwose bw\'ibirango bwubatswe ku mibare n\'umuco nyakuri. Dukora ibimenyetso bya vekitori byaguka, amoko y\'inyandiko, amabara, n\'amabwiriza y\'ibirango.',
          deliverables: [
            'Ibimenyetso bya Vekitori by\'Ibanze n\'Ibyunganira',
            'Imbonerahamwe y\'Imibare yo Gushushanya',
            'Ibisobanuro by\'Inyandiko & Ubwoko bw\'Imyandikire',
            'Igitabo cy\'Amabwiriza y\'Ikirango (Impapuro 200+)',
          ],
        },
        {
          num: '02',
          title: 'Inyandiko zihariye & Imibare ya Vekitori',
          icon: <Layers className="w-5 h-5 text-slate-300" />,
          description:
            'Inyandiko zihariye n\'imibare byateguriwe amasaha, ibipfunyika by\'akataraboneka, n\'ibyapa binini by\'inyubako. Guhera ku nyandiko zisanze kugeza ku zikomeye.',
          deliverables: [
            'Ubwoko bw\'Inyandiko bwa OpenType',
            'Imbonerahamwe y\'Imibare y\'Amasaha',
            'Ikoranabuhanga ryo Kwagura Inyandiko',
            'Inyuguti Zose z\'Ikilatini n\'Ibimenyetso',
          ],
        },
        {
          num: '03',
          title: 'Gupfunyika Kugezweho & Ibikoresho Bifashishwa',
          icon: <Box className="w-5 h-5 text-slate-300" />,
          description:
            'Ibipfunyika bifatika byakorewe gutanga ubwiza bukora ku mutima. Dutoranya impapuro z\'umwimerere, ifoili y\'icyuma, no gufungura kugezweho.',
          deliverables: [
            'Agasanduku gakomeye & Icupa rya Parfum',
            'Ibyuma byo Guhoma Ifoili n\'Ibimenyetso',
            'Impapuro z\'Ubwiza (Fedrigoni, G.F Smith)',
            'Icyitegererezo cy\'Ubupfunyiki Kirambye',
          ],
        },
        {
          num: '04',
          title: 'Uburyo bwa Mudasobwa & Imikoranire y\'Ikoranabuhanga',
          icon: <Cpu className="w-5 h-5 text-slate-300" />,
          description:
            'Urubuga rukomeye n\'imikoranire yihuta cyane izana ubwiza bw\'ikirango muri mudasobwa yawe. Imbonerahamwe yaguka ya 1440px.',
          deliverables: [
            'Ubwubatsi bw\'Urubuga rwa Mudasobwa',
            'Imbonerahamwe Yaguka ku Maso Yose',
            'Uburyo bw\'Imigendekere Yihuta',
            'Imikoranire y\'Amashusho ya WebGL & SVG',
          ],
        },
      ];
    }

    if (language === 'fr') {
      return [
        {
          num: '01',
          title: 'Architecture de Marque & Identité Vectorielle',
          icon: <Compass className="w-5 h-5 text-slate-300" />,
          description:
            'Systèmes d\'identité complets développés avec rigueur géométrique et profondeur culturelle. Nous concevons des logos vectoriels scalables, des hiérarchies typographiques et des chartes graphiques complètes.',
          deliverables: [
            'Logos Vectoriels Principaux & Secondaires',
            'Grille de Construction Mathématique',
            'Hiérarchie Typographique & Spécifications de Crénage',
            'Manuel de Marque Détaillé (200+ Pages)',
          ],
        },
        {
          num: '02',
          title: 'Typographie Sur Mesure & Systèmes Numériques',
          icon: <Layers className="w-5 h-5 text-slate-300" />,
          description:
            'Polices d\'affichage sur mesure et jeux de chiffres calibrés pour garde-temps de haute horlogerie, packaging de luxe et signalétique architecturale monumentale.',
          deliverables: [
            'Ingénierie de Polices OpenType Propriétaires',
            'Jeux de Numéraux Tabulaires & Cadrans',
            'Optimisation Optique (Micro / Affichage)',
            'Jeu de Caractères Latin Complet avec Diacritiques',
          ],
        },
        {
          num: '03',
          title: 'Packaging Tactile & Production de Matières',
          icon: <Box className="w-5 h-5 text-slate-300" />,
          description:
            'Packaging physique pensé pour susciter une émotion tactile et un luxe viscéral. Nous sélectionnons les papiers d\'art, fers à dorer, gaufrages et chorégraphies d\'unboxing.',
          deliverables: [
            'Ingénierie de Coffrets Rigides & Flacons',
            'Fers de Dorure à Chaud & Débossage CNC',
            'Sélection de Papiers d\'Art (Fedrigoni, G.F Smith)',
            'Prototypage Structurel Durable',
          ],
        },
        {
          num: '04',
          title: 'Systèmes Numériques & Ingénierie d\'Interaction',
          icon: <Cpu className="w-5 h-5 text-slate-300" />,
          description:
            'Vitrines digitales et expériences web interactives à haut framerate traduisant l\'élégance de la marque sur écran. Grilles fluides 1440px ultra-précises et physique de ressort soignée.',
          deliverables: [
            'Ingénierie de Design Interactif',
            'Architecture de Grille Fluide Responsive',
            'Systèmes de Mouvement Haute Fréquence',
            'Interactions WebGL & SVG Sur Mesure',
          ],
        },
      ];
    }

    return [
      {
        num: '01',
        title: 'Brand Architecture & Vector Identity',
        icon: <Compass className="w-5 h-5 text-slate-300" />,
        description:
          'Comprehensive identity systems developed through geometric rigour and cultural insight. We engineer scalable vector marks, typographic hierarchies, color theories, and immutable brand guidelines.',
        deliverables: [
          'Primary & Secondary Vector Marks',
          'Mathematical Construction Grid',
          'Typography Hierarchy & Kerning Spec',
          'Identity System Manual (200+ Pages)',
        ],
      },
      {
        num: '02',
        title: 'Bespoke Typography & Numerical Systems',
        icon: <Layers className="w-5 h-5 text-slate-300" />,
        description:
          'Custom display typefaces and numerical sets tailored for timepieces, luxury packaging, and monumental spatial signage. From hairline serifs to industrial athletic grotesques.',
        deliverables: [
          'Proprietary OpenType Font Engineering',
          'Tabular Numeral & Dial Sets',
          'Optical Size Optimization (Micro/Display)',
          'Full Latin & Diacritical Character Sets',
        ],
      },
      {
        num: '03',
        title: 'Tactile Packaging & Material Production',
        icon: <Box className="w-5 h-5 text-slate-300" />,
        description:
          'Physical packaging designed to evoke visceral luxury upon touch. We specify paper stocks, custom tooling dies, blind debossing, foil stamping, and structural unboxing choreography.',
        deliverables: [
          'Rigid Box & Flacon Engineering',
          'Hot Foil & Emboss Tooling Dies',
          'Paper Stock Curation (Fedrigoni, G.F Smith)',
          'Sustainable Structural Prototyping',
        ],
      },
      {
        num: '04',
        title: 'Digital Systems & Interaction Craft',
        icon: <Cpu className="w-5 h-5 text-slate-300" />,
        description:
          'Digital flagships and high-framerate interactive web experiences that translate brand poise into the browser. Ultra-responsive 1440px fluid grids and frictionless spring physics.',
        deliverables: [
          'Interactive Design Engineering',
          'Fluid Responsive Grid Architecture',
          'High-Framerate Motion Systems',
          'Bespoke WebGL & SVG Interactions',
        ],
      },
    ];
  };

  const disciplines = getDisciplines();

  return (
    <section id="disciplines" className="py-20 sm:py-28 border-b border-white/10">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono'] mb-2">
              {t('disciplines.tag', '05. STUDIO CAPABILITIES')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit'] font-bold text-white tracking-tight">
              {t('disciplines.title', 'Four Core Disciplines')}
            </h2>
            <p className="text-slate-400 text-base mt-2.5 leading-relaxed font-['Plus_Jakarta_Sans']">
              {t(
                'disciplines.subtitle',
                'Every commission is treated as a mastercraft engagement. We do not assemble templates; we architect bespoke visual language from foundational geometry.'
              )}
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-slate-200 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
          >
            <span>{t('disciplines.commission', 'Commission Studio Discipline')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 font-['Plus_Jakarta_Sans']">
          {disciplines.map((item) => (
            <div
              key={item.num}
              className="p-8 sm:p-10 rounded-2xl bg-[#0C0F15] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="font-['Space_Mono'] text-sm text-slate-500 font-bold">
                    {item.num}.
                  </span>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-['Outfit'] text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-slate-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Deliverables List (Zero-Pill compliant) */}
              <div className="pt-6 border-t border-white/5 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-['Space_Mono']">
                  PRIMARY DELIVERABLES
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-300 font-['Plus_Jakarta_Sans']">
                  {item.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
