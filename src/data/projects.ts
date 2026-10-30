export type ProjectProvenance = 'actual_commission' | 'licensed_reference';

export interface GalleryImage {
  url: string;
  caption: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  provenance: ProjectProvenance;
  provenanceLabel: string;
  category: 'identity' | 'typography' | 'packaging' | 'editorial' | 'industrial';
  categoryLabel: string;
  tagline: string;
  description: string;
  coverImage: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  colSpan: string;
  gallery: GalleryImage[];
  vectorSpecs: {
    anchors: number;
    bezierPrecision: string;
    printFinish: string;
    primaryTypeface: string;
    substrate: string;
  };
  palette: string[];
  editorialBrief: string;
  outcomeMetrics: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'barack-stationery',
    slug: 'barack-atelier-stationery',
    title: 'BARACK Atelier Brand Collateral',
    client: 'BARACK DESIGN Internal Archive',
    year: '2026',
    provenance: 'actual_commission',
    provenanceLabel: 'ORIGINAL BARACK DESIGN COMMISSION',
    category: 'identity',
    categoryLabel: 'Original Studio Identity & Foil Stamping',
    tagline: 'Signature Studio Stationery & Hot-Stamped Medallion',
    description:
      'The official executive stationery suite for BARACK DESIGN. Printed on 600gsm Colorplan Sirio Black duplex board with custom CNC-machined brass stamping dies, applying micro-relief metallic liquid silver foil of the circular BARACK pen-nib seal.',
    coverImage: '/src/assets/images/case_barack_stationery_1793363011926.jpg',
    aspectRatio: '4:3',
    colSpan: 'col-span-1 md:col-span-2',
    gallery: [
      {
        url: '/src/assets/images/case_barack_stationery_1793363011926.jpg',
        caption: 'Signature 600gsm duplex business cards with hot-stamped silver chrome BARACK seal and fountain pen.',
        aspectRatio: '4:3',
      },
      {
        url: '/public/assets/aistudio/image_716280c1.png',
        caption: 'The original mathematical circular seal with dual fountain pen nibs and right Bézier lobe.',
        aspectRatio: '1:1',
      },
    ],
    vectorSpecs: {
      anchors: 48,
      bezierPrecision: '0.001mm CNC micro-etching tolerance',
      printFinish: 'Precision hot silver chrome foil with blind letterpress impression',
      primaryTypeface: 'Outfit Heavy & Space Mono',
      substrate: '600 GSM Fedrigoni Sirio Black Uncoated Cotton Cardstock',
    },
    palette: ['#090A0D', '#E2E8F0', '#FFFFFF', '#1B1E26'],
    editorialBrief:
      'Engineered to embody the studio motto: Form Governed by Mathematical Restraint. The circular emblem combines mathematical curvature with traditional fountain pen nib geometry, reflecting our synthesis of algorithmic precision and classical calligraphic craft.',
    outcomeMetrics: 'Selected for inclusion in International Brand Identity Annual 2026.',
  },
  {
    id: 'silver-obsidian',
    slug: 'silver-obsidian-parfumerie',
    title: 'Silver Obsidian Parfumerie',
    client: 'Maison Obsidian Paris',
    year: '2026',
    provenance: 'actual_commission',
    provenanceLabel: 'ORIGINAL BARACK DESIGN COMMISSION',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging & Identity',
    tagline: 'Artisanal Paris Haute Parfumerie Unboxing Suite',
    description:
      'Complete brand identity, bespoke vector typography, and physical packaging engineering for an artisanal Paris fragrance maison. Features heavy optical glass, tactile brushed platinum closure, and micro-embossed silver foil labeling.',
    coverImage: '/src/assets/images/case_fragrance_monolith_1793361991103.jpg',
    aspectRatio: '16:9',
    colSpan: 'col-span-1 md:col-span-2',
    gallery: [
      {
        url: '/src/assets/images/case_fragrance_monolith_1793361991103.jpg',
        caption: 'Minimalist optical glass flacon with brushed platinum cap and silver-embossed typography on obsidian stone.',
        aspectRatio: '16:9',
      },
      {
        url: '/src/assets/images/gallery_perfume_unboxing_1793363009834.jpg',
        caption: 'Rigid presentation unboxing drawer with velvet bed and numbered certificate of authenticity.',
        aspectRatio: '16:9',
      },
    ],
    vectorSpecs: {
      anchors: 38,
      bezierPrecision: '0.05pt tolerance',
      printFinish: 'Micro-etched hot stamp foil on 450gsm Fedrigoni Sirio Black',
      primaryTypeface: 'Custom Obsidian Serif & Outfit',
      substrate: '450 GSM FSC Archival Cardstock & Optical Silica Glass',
    },
    palette: ['#090A0D', '#E2E8F0', '#94A3B8', '#C5A880'],
    editorialBrief:
      'Maison Obsidian required a sensory balance between mineral density and liquid luminosity. The brand mark pairs a monolithic silhouette with hairline vector typography, executed in liquid platinum foil and heavy fluted flacon glass.',
    outcomeMetrics: '+180% retail wholesale accounts in Paris & London boutiques within 6 months.',
  },
  {
    id: 'aurora-chronograph',
    slug: 'aurora-chronograph-no-1',
    title: 'Aurora Chronograph No. 1',
    client: 'Manufacture Horlogère Aurora',
    year: '2026',
    provenance: 'actual_commission',
    provenanceLabel: 'ORIGINAL BARACK DESIGN COMMISSION',
    category: 'typography',
    categoryLabel: 'Vector Typography & Dial Craft',
    tagline: 'Titanium Timepiece Dial Typography & Sub-Millimeter Glyphs',
    description:
      'Mathematical vector numeral engineering and dial layout for a limited titanium chronograph timepiece. Every serif, sub-dial index, and tachymeter marker was mathematically plotted at sub-millimeter tolerances.',
    coverImage: '/src/assets/images/case_chronograph_vector_1793361991770.jpg',
    aspectRatio: '4:3',
    colSpan: 'col-span-1',
    gallery: [
      {
        url: '/src/assets/images/case_chronograph_vector_1793361991770.jpg',
        caption: 'Close-up studio view of the micro-engraved dial numerals and sub-dial concentric guilloché.',
        aspectRatio: '4:3',
      },
      {
        url: '/src/assets/images/gallery_watch_macro_case_1793363010694.jpg',
        caption: 'Macro angle of the brushed Grade 5 titanium case lugs and micro-engraved crown monogram.',
        aspectRatio: '16:9',
      },
    ],
    vectorSpecs: {
      anchors: 64,
      bezierPrecision: '0.002mm laser ablation tolerance',
      printFinish: 'Diamond-drag CNC micro-engraving on Grade 5 Titanium',
      primaryTypeface: 'Aurora Chrono Sans (Bespoke)',
      substrate: 'Grade 5 Satin-Brushed Aerospace Titanium',
    },
    palette: ['#0B0E14', '#CBD5E1', '#475569', '#F8FAFC'],
    editorialBrief:
      'Designing for watch dials is an exercise in extreme typographic scale. The vector glyphs must maintain optical clarity under 10x loupe magnification while providing instantaneous legibility at wrist distance.',
    outcomeMetrics: 'Limited edition of 250 numbered timepieces sold out within 72 hours of launch.',
  },
  {
    id: 'aetheria-audio',
    slug: 'aetheria-sound-systems',
    title: 'Aetheria Sound Systems',
    client: 'Aetheria Acoustics Stockholm',
    year: '2025',
    provenance: 'licensed_reference',
    provenanceLabel: 'LICENSED REFERENCE PHOTOGRAPHY',
    category: 'industrial',
    categoryLabel: 'Industrial Design & Vector Marking',
    tagline: 'Minimalist Audiophile Hardware & Precision Laser Engraving',
    description:
      'Acoustic product identity and CNC laser-etched earcup branding for Stockholm-based high-fidelity headphone manufacturer. Features machined aerospace aluminum yokes, supple lambskin ear cushions, and minimal geometric vector typography.',
    coverImage: '/src/assets/images/case_aetheria_audio_1793363011936.jpg',
    aspectRatio: '4:3',
    colSpan: 'col-span-1',
    gallery: [
      {
        url: '/src/assets/images/case_aetheria_audio_1793363011936.jpg',
        caption: 'Matte black over-ear headphones with laser-etched vector acoustic emblem on dark granite.',
        aspectRatio: '4:3',
      },
    ],
    vectorSpecs: {
      anchors: 36,
      bezierPrecision: '0.01mm rotary laser tolerance',
      printFinish: 'Sub-surface fiber laser etching on anodized aluminum',
      primaryTypeface: 'Outfit Regular & Space Mono',
      substrate: 'Anodized 6061 Aerospace Aluminum & Full-Grain Leather',
    },
    palette: ['#090B10', '#334155', '#94A3B8', '#E2E8F0'],
    editorialBrief:
      'Conceptualized as an exercise in acoustic purism. The identity eschews flamboyant graphics in favor of hairline circular arcs that echo the acoustic diaphragm geometry.',
    outcomeMetrics: 'Featured across international industrial design publications.',
  },
  {
    id: 'structura-monograph',
    slug: 'structura-architectural-monograph',
    title: 'Structura Architectural Monograph',
    client: 'Nordic Spatial Institute',
    year: '2025',
    provenance: 'licensed_reference',
    provenanceLabel: 'LICENSED REFERENCE PHOTOGRAPHY',
    category: 'editorial',
    categoryLabel: 'Editorial Design & Monograph',
    tagline: 'Scandinavian Brutalist Architecture Retrospective',
    description:
      'A 320-page retrospective monograph celebrating Scandinavian concrete architecture. Engineered on a 12-column Swiss proportional grid with blind-debossed vector line art and uncoated archival Japanese cotton paper.',
    coverImage: '/src/assets/images/case_architectural_monograph_1793361991774.jpg',
    aspectRatio: '4:3',
    colSpan: 'col-span-1',
    gallery: [
      {
        url: '/src/assets/images/case_architectural_monograph_1793361991774.jpg',
        caption: 'Open spread displaying the Solstice Pavilion case study on dark textured slate.',
        aspectRatio: '4:3',
      },
    ],
    vectorSpecs: {
      anchors: 42,
      bezierPrecision: '100% Vector Proportional Grid',
      printFinish: 'Blind deboss with matte silver edge gilding',
      primaryTypeface: 'Plus Jakarta Sans & Space Mono',
      substrate: '150 GSM Uncoated Japanese Cotton Text Paper',
    },
    palette: ['#1A1D24', '#E2E8F0', '#8A94A6', '#D1D5DB'],
    editorialBrief:
      'Structura explores how concrete structures capture natural light across the Nordic winter. The layout relies on generous architectural margins, allowing stark architectural photography and minimal typography to breathe.',
    outcomeMetrics: 'Winner of the Scandinavian Book Design Gold Medal 2025.',
  },
  {
    id: 'atelier-vane-couture',
    slug: 'atelier-vane-couture',
    title: 'Atelier Vane Haute Couture',
    client: 'Vane Studio Milan',
    year: '2026',
    provenance: 'actual_commission',
    provenanceLabel: 'ORIGINAL BARACK DESIGN COMMISSION',
    category: 'packaging',
    categoryLabel: 'Brand Identity & Rigid Packaging',
    tagline: 'Geometric Monogram & Rigid Presentation Box Suite',
    description:
      'Geometric vector monogram and bespoke unboxing suite for a Milanese couture atelier. Includes custom debossed rigid presentation boxes, silk faille grosgrain ribbons, and a unified cryptographic typographic monogram.',
    coverImage: '/src/assets/images/case_couture_packaging_1793361991833.jpg',
    aspectRatio: '4:3',
    colSpan: 'col-span-1 md:col-span-2',
    gallery: [
      {
        url: '/src/assets/images/case_couture_packaging_1793361991833.jpg',
        caption: 'Luxury packaging suite of rigid boxes and shopping bags with hot-stamped silver geometric monogram.',
        aspectRatio: '4:3',
      },
    ],
    vectorSpecs: {
      anchors: 52,
      bezierPrecision: 'Mathematical Golden Ratio tangents',
      printFinish: 'Hot silver stamping on custom matte soft-touch laminated stock',
      primaryTypeface: 'Outfit Geometric & Vane Display',
      substrate: '1200 GSM Heavy Greyboard with Soft-Touch Lamination',
    },
    palette: ['#050608', '#F1F5F9', '#94A3B8', '#1E232E'],
    editorialBrief:
      'The Vane monogram reinterprets architectural scissor angles into a modular letterform system. Scaled across unboxing suites, woven labels, and digital flagships, the geometry remains razor sharp.',
    outcomeMetrics: 'Unified packaging experience implemented across Milan, Paris, and Tokyo flagship boutiques.',
  },
];
