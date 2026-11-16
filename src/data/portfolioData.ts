import heroImage from '../assets/images/hero_print_branding_1794043015828.jpg';
import apparelImage from '../assets/images/apparel_textile_branding_1794043015458.jpg';
import largeFormatImage from '../assets/images/large_format_display_1794043015815.jpg';
import packagingImage from '../assets/images/stickers_packaging_1794043016239.jpg';
import brandingImage from '../assets/images/branding_creative_studio_1794043015922.jpg';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  clientType: string;
  location: string;
  summary: string;
  image: string;
  technique: string;
  material: string;
  finishes: string[];
  specs: Record<string, string>;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-01",
    title: "Aether Tech Executive Stationery & Metal Accent Cards",
    category: "Printing & Paper Products",
    categoryId: "printing-paper",
    clientType: "Enterprise Technology Firm",
    location: "Kigali Innovation City, Rwanda",
    summary: "Bespoke executive stationery suite featuring 600gsm duplexed cotton board with silver hot foil stamping and dark graphite edge gilding.",
    image: heroImage,
    technique: "Prepress Foil Stamping & Precision Edge Gilding",
    material: "600gsm Ultra-Dense Cotton Stock",
    finishes: ["Silver Metallic Foil", "Debossed Iconography", "Graphite Edge Foil"],
    specs: {
      "Paper Stock": "600gsm Cotton Duplex",
      "Print Method": "Prepress Foil Stamping",
      "Special Finish": "Silver Edge Gilding",
      "Quantity": "2,500 Units"
    }
  },
  {
    id: "project-02",
    title: "Kivu Reserve Apparel & Workwear Collection",
    category: "Apparel & Textile Branding",
    categoryId: "apparel-textile",
    clientType: "Luxury Hospitality Group",
    location: "Kigali & Lake Kivu, Rwanda",
    summary: "Custom uniform branding including 240gsm pique cotton polo shirts with 3D metallic thread embroidery and heavyweight French terry hoodies.",
    image: apparelImage,
    technique: "High-Density DTF Print & Precision 3D Embroidery",
    material: "240gsm Combed Pique Cotton & 380gsm Fleece",
    finishes: ["Silver Thread Embroidery", "High-Density DTF Back Graphic", "Custom Woven Label"],
    specs: {
      "Fabric Weight": "240gsm Pique / 380gsm Fleece",
      "Decoration": "3D Metallic Embroidery",
      "Turnaround": "5 Business Days",
      "Quantity": "850 Pieces"
    }
  },
  {
    id: "project-03",
    title: "Rwanda Tech Summit Exhibition Backdrops & Displays",
    category: "Large-Format Printing & Displays",
    categoryId: "large-format",
    clientType: "International Conference",
    location: "Kigali Convention Centre",
    summary: "Comprehensive venue wrap including 12-meter seamless fabric stage backdrops, illuminated LED roll-up banners, and directional signage.",
    image: largeFormatImage,
    technique: "UV Curable Dye-Sublimation & Outdoor Vinyl Print",
    material: "Non-Glare Satin Fabric & 510gsm PVC Flex",
    finishes: ["Anti-Reflection Matte Finish", "Illuminated Aluminum Cassette", "Reinforced Hems"],
    specs: {
      "Stage Backdrop": "12m x 4m Seamless Tension Fabric",
      "Roll-Up Banners": "85cm x 200cm Luxury Aluminum Base",
      "Resolution": "1440 DPI Ultra HD",
      "Installation": "On-Site Setup in Kigali"
    }
  },
  {
    id: "project-04",
    title: "Empress Skincare Rigid Luxury Boxes & Foil Labels",
    category: "Stickers, Labels & Packaging",
    categoryId: "stickers-packaging",
    clientType: "Premium Cosmetic Brand",
    location: "Kigali, Rwanda",
    summary: "Custom rigid presentation packaging featuring soft-touch matte lamination, interior velvet tray, and metallic silver foil product labels.",
    image: packagingImage,
    technique: "Die-Cut Rigid Box Fabrication & Foil Stamping",
    material: "1200gsm Rigid Chipboard & Silver Foil Vinyl",
    finishes: ["Soft-Touch Lamination", "Hot Foil Stamped Logo", "Custom Ribbon Pull"],
    specs: {
      "Box Type": "Two-Piece Rigid Box",
      "Label Material": "Waterproof Silver Foil Vinyl",
      "Interior": "Custom Die-Cut EVA Foam",
      "Quantity": "5,000 Sets"
    }
  },
  {
    id: "project-05",
    title: "Avant-Garde Architecture Visual Identity & Brand Book",
    category: "Branding & Graphic Design",
    categoryId: "branding-design",
    clientType: "Architectural Studio",
    location: "Town Centre, Kigali",
    summary: "Complete visual identity design including master logo vectors, brand bible, digital design system, and print-ready stationery prepress.",
    image: brandingImage,
    technique: "Strategic Brand Design & Vector System Engineering",
    material: "Master Vector Suite & Hardcover Brand Book",
    finishes: ["Silver Stamped Cover", "Pantone Color Specs", "Digital Asset Kit"],
    specs: {
      "Scope": "Logo, Color Palette, Typography & Prepress",
      "Deliverables": "Brand Guidelines Book + Vector Assets",
      "Formats": "AI, EPS, SVG, PDF/X-1a, Figma UI Kit"
    }
  }
];
