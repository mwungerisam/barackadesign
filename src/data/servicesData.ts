import heroImage from '../assets/images/hero_print_branding_1794043015828.jpg';
import apparelImage from '../assets/images/apparel_textile_branding_1794043015458.jpg';
import packagingImage from '../assets/images/stickers_packaging_1794043016239.jpg';
import largeFormatImage from '../assets/images/large_format_display_1794043015815.jpg';
import brandingImage from '../assets/images/branding_creative_studio_1794043015922.jpg';

export interface ServiceSubitem {
  id: string;
  name: string;
  description: string;
  popularFinishes?: string[];
  commonSizes?: string[];
}

export interface ServiceCategory {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  subitems: ServiceSubitem[];
  materials?: string[];
  finishes?: string[];
}

export const APPROVED_SERVICES: ServiceCategory[] = [
  {
    id: "printing-paper",
    letter: "A",
    title: "Printing & Paper Products",
    subtitle: "Commercial & Business Stationery",
    description: "High-precision offset and digital printing on premium cardstock, textured paper, and specialty stocks.",
    image: heroImage,
    materials: ["350gsm Silk Cardstock", "Cotton Textured Stock", "Kraft Recycled Paper", "Metallic Pearl Board"],
    finishes: ["Hot Foil Stamping (Silver/Gold)", "Spot UV Coating", "Debossing & Embossing", "Soft-Touch Matte Lamination", "Round Corner Die-Cut"],
    subitems: [
      { id: "biz-cards", name: "Business Cards", description: "Executive 350gsm-600gsm cards with metallic foil, spot UV, or letterpress detailing.", popularFinishes: ["Hot Foil Stamping", "Spot UV", "Soft-Touch Matte"] },
      { id: "flyers", name: "Flyers & Leaflets", description: "Vibrant single & double-sided promotional flyers printed on high-gloss or matte stock.", popularFinishes: ["Gloss Lamination", "Matte Lamination"] },
      { id: "brochures", name: "Brochures & Catalogues", description: "Multi-page bi-fold, tri-fold, or saddle-stitched product brochures.", popularFinishes: ["Spot UV Cover", "Saddle Stitch", "Perfect Binding"] },
      { id: "posters", name: "Art & Promotional Posters", description: "High-definition indoor posters printed with lightfast archival inks.", popularFinishes: ["Satin Finish", "Photo Gloss"] },
      { id: "booklets", name: "Booklets & Reports", description: "Annual reports, company profiles, and presentation booklets.", popularFinishes: ["Wire-O Binding", "Perfect Binding", "Soft-Touch Cover"] },
      { id: "company-profiles", name: "Company Profiles", description: "Hardcover or premium softcover brand profile books for corporate tenders.", popularFinishes: ["Embossed Cover", "Silver Foil Title"] },
      { id: "letterheads", name: "Letterheads & Envelopes", description: "Laser-compatible 100gsm-120gsm bond paper with matching branded envelopes.", popularFinishes: ["Textured Bond", "DL/C4 Envelopes"] },
      { id: "invitations", name: "Invitations & Cards", description: "Luxury event invitations with custom wax seals, foil accents, and translucent sleeves.", popularFinishes: ["Gold/Silver Foil", "Deckled Edges"] },
      { id: "folders", name: "Presentation Folders", description: "Custom pocket folders with business card slots for press kits and proposals.", popularFinishes: ["Pocket Die-Cut", "Matte Lamination"] },
      { id: "calendars", name: "Desk & Wall Calendars", description: "Custom corporate wall and desk flip calendars with metal spiral binding.", popularFinishes: ["Twin Loop Wire", "Stand Up Board"] },
      { id: "notebooks", name: "Notebooks & Diaries", description: "Branded hardback journals, lined notebooks, and executive annual diaries.", popularFinishes: ["Debossed Logo", "Ribbon Bookmark"] }
    ]
  },
  {
    id: "apparel-textile",
    letter: "B",
    title: "Apparel & Textile Branding",
    subtitle: "Custom Wearables & Workwear",
    description: "DTF (Direct-to-Film) printing, precision embroidery, and screen printing on premium textiles.",
    image: apparelImage,
    materials: ["100% Ring-Spun Heavyweight Cotton", "Poly-Cotton Blends", "Performance Dri-Fit Mesh", "Fleece & French Terry"],
    finishes: ["High-Density DTF Print", "3D Puff Embroidery", "Flat Precision Stitching", "Woven Neck Label Sewing"],
    subitems: [
      { id: "tshirts", name: "Custom T-Shirts", description: "Premium cotton tees with vibrant front/back DTF prints or screen printing.", popularFinishes: ["DTF Full Color", "Screen Print"] },
      { id: "polos", name: "Corporate Polo Shirts", description: "High-grade pique cotton polos with embroidered crest logos for staff.", popularFinishes: ["Chest Embroidery", "Sleeve Print"] },
      { id: "hoodies", name: "Hoodies & Sweatshirts", description: "Heavyweight fleece hoodies and crewnecks with custom branding.", popularFinishes: ["Puff Embroidery", "DTF Back Print"] },
      { id: "caps", name: "Caps & Headwear", description: "Structured baseball caps, snapbacks, and beanies with 3D embroidered branding.", popularFinishes: ["3D Puff Embroidery", "Laser Etched Patch"] },
      { id: "uniforms", name: "Uniform & Workwear Branding", description: "Durable branded uniforms for industrial, hospitality, and corporate teams.", popularFinishes: ["Reflective Vinyl", "Reinforced Embroidery"] },
      { id: "dtf-printing", name: "DTF Transfer Film Service", description: "Ready-to-press Direct-to-Film print rolls for garment decorators.", popularFinishes: ["Hot Peel Film", "Ultra-Vibrant Pigment"] }
    ]
  },
  {
    id: "promotional-gifts",
    letter: "C",
    title: "Promotional Products & Corporate Gifts",
    subtitle: "Branded Merchandise & Executive Sets",
    description: "Laser-engraved, UV-printed, and pad-printed corporate gifts that leave a lasting executive impression.",
    image: packagingImage,
    materials: ["Stainless Steel Vacuum Insulated", "Ceramic & Glassware", "Genuine & PU Leather", "Anodized Aluminum"],
    finishes: ["Laser Engraving", "Full-Color UV Printing", "Silkscreen Printing", "Custom Presentation Gift Boxes"],
    subitems: [
      { id: "mugs-cups", name: "Branded Mugs & Drinkware", description: "Ceramic mugs, travel tumblers, and thermal coffee cups.", popularFinishes: ["Sublimation", "Laser Etched Stainless"] },
      { id: "water-bottles", name: "Custom Water Bottles", description: "Insulated stainless steel water flasks with laser engraved logos.", popularFinishes: ["Laser Engraving", "Matte Powder Coat"] },
      { id: "pens", name: "Executive Pens", description: "Metal ballpoint pens, rollerballs, and stylus pens in gift cases.", popularFinishes: ["Precision Laser Etching"] },
      { id: "tote-bags", name: "Branded Tote Bags", description: "Heavy canvas and eco-friendly jute totes with custom printed branding.", popularFinishes: ["Screen Printing", "Full Color Transfer"] },
      { id: "gift-sets", name: "Corporate Gift Boxes & Sets", description: "Curated executive sets containing notebook, pen, flask, and USB drive in a foam-lined gift box.", popularFinishes: ["Custom Rigid Box", "Foil Stamped Lid"] },
      { id: "promo-merch", name: "Promotional Accessories", description: "Keychains, lanyards, USB drives, mousepads, and corporate badge holders.", popularFinishes: ["Sublimated Lanyard", "Laser Engraved Metal"] },
      { id: "event-giveaways", name: "Event Giveaways", description: "Useful branded gifts and merchandise prepared for conferences, launches, and campaigns.", popularFinishes: ["Custom Branding", "Bulk Event Packs"] }
    ]
  },
  {
    id: "large-format",
    letter: "D",
    title: "Large-Format Printing & Displays",
    subtitle: "Signage, Banners & Exhibition Graphics",
    description: "Weatherproof PVC banners, roll-ups, backdrops, and architectural signs for maximum visual impact.",
    image: largeFormatImage,
    materials: ["510gsm Weatherproof PVC Flex", "Backlit Film", "Satin Fabric Banner", "Aluminum Composite (ACP)", "Acrylic & Acrylic Cutouts"],
    finishes: ["UV Curable Outdoor Inks", "Reinforced Hem & Eyelets", "Aluminum Roll-Up Hardware", "LED Edge Lighting"],
    subitems: [
      { id: "pvc-banners", name: "PVC Heavy-Duty Banners", description: "High-durability outdoor PVC banners with welded hems and brass eyelets.", popularFinishes: ["Hemmed & Grommeted", "Mesh Windproof"] },
      { id: "rollup-banners", name: "Roll-Up & Pull-Up Banners", description: "Portable aluminum banner stands with high-resolution non-curl satin inserts.", popularFinishes: ["Luxury Wide Base", "Standard Cassette"] },
      { id: "backdrops", name: "Stage & Backdrop Banners", description: "Large media wall backdrops for press conferences, launches, and photo walls.", popularFinishes: ["Seamless Fabric", "Tension Banner Frame"] },
      { id: "exhibition", name: "Exhibition Graphics & Shell Schemes", description: "Complete booth wall wraps, promotional counters, and pop-up displays.", popularFinishes: ["Pop-Up Curved Wall", "Counter Wrap"] },
      { id: "signage", name: "Business & Outdoor Signage", description: "3D acrylic letters, backlit shop fascias, directional signs, and ACP boards.", popularFinishes: ["LED Illuminated 3D", "Brushed Aluminum"] },
      { id: "flags", name: "Flags & Feather Banners", description: "Printed indoor and outdoor flags for storefronts, events, and promotions.", popularFinishes: ["Feather Flag", "Cross Base"] },
      { id: "vehicle-branding", name: "Vehicle Graphics & Branding", description: "Branded vehicle graphics, decals, and fleet identification produced to fit your brief.", popularFinishes: ["Cut Vinyl", "Printed Vehicle Wrap"] },
      { id: "booth-build", name: "Exhibition Booths & Displays", description: "Printed booth walls, counters, display panels, and event graphics for exhibitions.", popularFinishes: ["Modular Display", "Custom Counter Wrap"] }
    ]
  },
  {
    id: "stickers-packaging",
    letter: "E",
    title: "Stickers, Labels & Packaging",
    subtitle: "Product Branding & Custom Boxes",
    description: "Die-cut vinyl stickers, water-resistant product labels, custom rigid boxes, and branded paper bags.",
    image: packagingImage,
    materials: ["Waterproof Vinyl", "Clear Transparent Film", "Metallic Gold/Silver Foil Vinyl", "Kraft & Bleached Packaging Board"],
    finishes: ["Kiss-Cut & Die-Cut", "Gloss/Matte UV Lamination", "Gold Foil Stamping", "Custom Ribbon Handles"],
    subitems: [
      { id: "custom-stickers", name: "Custom Vinyl Stickers", description: "Individually cut kiss-cut and die-cut vinyl stickers for products and branding.", popularFinishes: ["Die-Cut Contour", "Waterproof Gloss"] },
      { id: "product-labels", name: "Roll & Sheet Product Labels", description: "High-speed application labels for cosmetics, food, beverages, and honey jars.", popularFinishes: ["Clear Vinyl", "Gold Foil Accent"] },
      { id: "branded-boxes", name: "Custom Printed Boxes", description: "Folding carton packaging, rigid luxury gift boxes, and mailer boxes.", popularFinishes: ["Spot UV Packaging", "Rigid Box Construction"] },
      { id: "paper-bags", name: "Branded Paper Bags", description: "Luxury boutique paper bags with twisted or cotton rope handles.", popularFinishes: ["Embossed Logo", "Rope Handle"] }
    ]
  },
  {
    id: "branding-design",
    letter: "F",
    title: "Branding & Graphic Design",
    subtitle: "Visual Identity & Artwork Preparation",
    description: "Strategic visual identity creation, logo systems, brand guidelines, and print-ready prepress artwork.",
    image: brandingImage,
    materials: ["Vector Master Formats (AI, EPS, SVG)", "Brand Style Guide PDF", "Print-Ready PDF/X-1a"],
    finishes: ["Full Brand System Guidelines", "Typography Palette", "Vector Iconography Set"],
    subitems: [
      { id: "logo-design", name: "Logo Design & Identity System", description: "Comprehensive logo development including primary, secondary, and badge variants.", popularFinishes: ["Vector Master Files", "Usage Guidelines"] },
      { id: "brand-guidelines", name: "Brand Identity Guidelines", description: "Complete brand bible detailing color codes (CMYK, Pantone, RGB, HEX), typography, and grid rules.", popularFinishes: ["Comprehensive PDF Book"] },
      { id: "stationery-design", name: "Business Stationery Design", description: "Cohesive visual layout for business cards, letterheads, email signatures, and folders.", popularFinishes: ["Print-Ready Prepress Files"] },
      { id: "marketing-artwork", name: "Marketing Material Design", description: "Professional layout design for catalogues, flyers, billboards, and brochures.", popularFinishes: ["CMYK Color Separated"] },
      { id: "prepress-prep", name: "Print-Ready Prepress Preparation", description: "Auditing third-party artwork for bleeding, safe margins, spot varnish layers, and resolution.", popularFinishes: ["Preflight Certification"] }
    ]
  },
  {
    id: "creative-event-branding",
    letter: "G",
    title: "Creative Event Branding",
    subtitle: "Conference & Stage Graphics Production",
    description: "Tailored physical print & visual production for corporate summits, exhibitions, and press events.",
    image: largeFormatImage,
    materials: ["Non-Glare Fabric Backdrop", "PVC Flex Banner", "High-Density Foam Board", "Laminated Event Card"],
    finishes: ["Anti-Reflection Matte Finish", "Custom Die-Cut Badges", "Gold Foil Event Seals"],
    subitems: [
      { id: "conference-branding", name: "Conference Stage Graphics", description: "Stage backdrops, podium signs, lectern wraps, and speaker banners.", popularFinishes: ["Matte Anti-Glare Banner"] },
      { id: "event-badges", name: "Delegate Badges & Lanyards", description: "PVC or heavy card delegate passes with custom branded satin lanyards.", popularFinishes: ["Custom Printed Lanyard", "Clear Badge Pouch"] },
      { id: "delegate-folders", name: "Delegate Folders & Notebooks", description: "Branded event kits containing conference notebooks, pens, and event agendas.", popularFinishes: ["Foil Stamped Cover", "Custom Pocket"] },
      { id: "event-signage", name: "Event Directional Signage", description: "Wayfinding signs, registration booth wraps, and venue schedule boards.", popularFinishes: ["Foam Board Mount", "Self-Standing Frame"] },
      { id: "event-backdrops", name: "Event Backdrops & Screens", description: "Photo walls, stage backdrops, and branded screen surrounds for live events.", popularFinishes: ["Fabric Backdrop", "Step-and-Repeat Wall"] },
      { id: "id-cards", name: "ID Cards & Event Badges", description: "Printed staff IDs, delegate badges, access passes, and matching lanyards.", popularFinishes: ["PVC ID Cards", "Printed Lanyards"] }
    ]
  },
  {
    id: "digital-design",
    letter: "H",
    title: "Social Media & Campaign Design",
    subtitle: "Digital Campaign Creative",
    description: "On-brand social media graphics, campaign artwork, and digital ad creative to support your marketing.",
    image: brandingImage,
    materials: ["Social Media Templates", "Campaign Artwork", "High-Resolution Digital Assets"],
    finishes: ["Platform-Ready Formats", "Consistent Brand Layouts"],
    subitems: [
      { id: "social-graphics", name: "Social Media Graphics", description: "Branded post, story, and cover artwork for your social channels.", popularFinishes: ["Instagram & Facebook", "LinkedIn Creative"] },
      { id: "digital-ads", name: "Digital Advertising Creative", description: "Campaign visuals sized for online advertising and promotions.", popularFinishes: ["Campaign Variations", "Platform-Ready Formats"] },
      { id: "social-templates", name: "Social Media Template Kits", description: "Reusable branded layouts that help your team publish consistently.", popularFinishes: ["Editable Templates", "Brand-Matched Layouts"] },
      { id: "presentation-decks", name: "Business Presentation Design", description: "Clear, polished slide decks for company profiles, proposals, and presentations.", popularFinishes: ["PowerPoint", "PDF Presentation"] }
    ]
  },
  {
    id: "photo-decorative",
    letter: "I",
    title: "Photo & Decorative Printing",
    subtitle: "Canvas Prints, Wall Art & Framing",
    description: "Fine art canvas wrapping, custom framed photo prints, and interior decorative wall graphics.",
    image: heroImage,
    materials: ["100% Cotton Artist Canvas", "Archival Photo Paper", "Solid Wood Frames", "Clear Acrylic Panel"],
    finishes: ["Gallery Gallery-Wrapped Stretcher Bars", "Non-Reflective Glass", "Custom Mat Board"],
    subitems: [
      { id: "canvas-prints", name: "Stretched Canvas Prints", description: "Fine art photo prints stretched over kiln-dried wooden stretcher frames.", popularFinishes: ["Gallery Wrap Edge"] },
      { id: "framed-prints", name: "Custom Framed Wall Art", description: "High-resolution photographic prints in black, silver, or natural wood frames.", popularFinishes: ["Mat Board Surround", "UV Protective Glass"] },
      { id: "wall-graphics", name: "Decorative Wall Murals", description: "Custom vinyl wall decals and large decorative murals for corporate offices.", popularFinishes: ["Textured Wall Vinyl"] }
    ]
  },
  {
    id: "document-finishing",
    letter: "J",
    title: "Document & Finishing Services",
    subtitle: "High-Volume Print, Binding & Scanning",
    description: "Fast-turnaround document printing, architectural plan printing, wire binding, and high-speed scanning.",
    image: heroImage,
    materials: ["80gsm-160gsm Bond Paper", "Spiral Wire", "Thermal Binding Strips", "Clear PVC Covers"],
    finishes: ["Comb & Wire-O Binding", "Lamination (A4 to A0)", "Custom Tab Dividers"],
    subitems: [
      { id: "doc-printing", name: "High-Volume Document Printing", description: "Black & white and full-color document printing for legal, academic, and corporate files.", popularFinishes: ["Double-Sided Duplex"] },
      { id: "binding-finishing", name: "Document Binding & Covers", description: "Wire-O, comb, plastic coil, and hardcover book binding with protective covers.", popularFinishes: ["Wire-O Metal Binding", "Clear PVC Front"] },
      { id: "scanning-archiving", name: "High-Speed Document Scanning", description: "Digital archiving of physical records into high-resolution searchable PDF files.", popularFinishes: ["OCR Text Recognition"] }
    ]
  }
];
