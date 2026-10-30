export interface ServiceProduct {
  id: string;
  slug: string;
  name: string;
  category: 'transfers' | 'apparel' | 'drinkware' | 'print' | 'design';
  categoryLabel: string;
  tagline: string;
  headline: string;
  description: string;
  image: string;
  leadTime: string;
  moq: string;
  pricingStartingAt: string;
  materials: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  customOptions: {
    name: string;
    type: 'select' | 'radio';
    options: string[];
  }[];
  pricingTiers: {
    quantity: number;
    pricePerUnit: number;
    unitLabel: string;
  }[];
  prepressGuidelines: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SERVICES_PRODUCTS: ServiceProduct[] = [
  {
    id: 'dtf',
    slug: 'dtf-transfers',
    name: 'DTF Printing & Transfers',
    category: 'transfers',
    categoryLabel: 'Direct-to-Film Transfers',
    tagline: 'Ultra-High-Definition Heat Transfer Films',
    headline: 'Industrial-Grade DTF Transfers & Custom Gang Sheets',
    description:
      'Direct-to-Film (DTF) transfers engineered with proprietary high-opacity white ink backing and premium polyurethane hot-peel adhesive powder. Delivers razor-sharp 2400 DPI vector reproduction on 100% cotton, polyester, canvas, nylon, and blended garments.',
    image: '/src/assets/images/dtf_transfer_print_1793362634794.jpg',
    leadTime: '24–48 Hours',
    moq: 'No minimum (from 1 transfer / gang sheet)',
    pricingStartingAt: '$12.00 / Gang Sheet',
    materials: [
      'Premium 75μm Double-Sided Matte PET Film',
      'High-Density Japanese Water-Based Pigment Inks',
      'Ultra-Stretch Fine Polyurethane Hot-Melt Adhesive Powder',
    ],
    features: [
      'Tested to 60+ commercial wash cycles without cracking or peeling',
      'Crisp zero-bleed gradient halftones down to 0.5pt vector line weight',
      'Universal fabric application: Cotton, Polyester, Denim, Leather, Nylon',
      'Instant hot-peel release in 12–15 seconds at 300°F–320°F (150°C–160°C)',
    ],
    specs: [
      { label: 'PRINT RESOLUTION', value: '2400 × 1200 DPI' },
      { label: 'FILM FORMATS', value: 'Custom Cut Transfers or 22" Wide Continuous Gang Sheets' },
      { label: 'PRESS SPECS', value: '305°F for 14s · Medium-Firm Pressure (5–6 bar)' },
      { label: 'COLOR SPACE', value: 'CMYK + Dual High-Density White Channels' },
      { label: 'STRETCH CAPACITY', value: '300% Elastic Recovery without tearing' },
    ],
    customOptions: [
      {
        name: 'Sheet Size / Format',
        type: 'select',
        options: ['Single Chest 11" x 11"', 'Full Back 12" x 16"', 'Gang Sheet 22" x 36"', 'Gang Sheet 22" x 72"'],
      },
      {
        name: 'Peel Type',
        type: 'radio',
        options: ['Ultra Hot-Peel (Instant peel on press)', 'Cold-Peel High-Gloss'],
      },
    ],
    pricingTiers: [
      { quantity: 5, pricePerUnit: 18.0, unitLabel: 'sheet' },
      { quantity: 25, pricePerUnit: 14.5, unitLabel: 'sheet' },
      { quantity: 100, pricePerUnit: 11.0, unitLabel: 'sheet' },
      { quantity: 250, pricePerUnit: 8.5, unitLabel: 'sheet' },
    ],
    prepressGuidelines: [
      'Files must be provided in CMYK color mode with 100% transparent backgrounds.',
      'Minimum resolution of 300 DPI at 100% scale (Vector .AI, .EPS, or .PDF preferred).',
      'Do not mirror or invert artwork; our RIP software automatically prepares the white underbase.',
      'Ensure vector line weights are at least 0.35mm (1.0pt) for clean adhesive grip.',
    ],
    faqs: [
      {
        q: 'What fabrics can your DTF transfers be applied to?',
        a: 'Our polyurethane hot-melt formula bonds permanently with 100% cotton, ring-spun combed cotton, 100% polyester, triblends, 50/50 fleece, heavy canvas, and treated nylon jackets.',
      },
      {
        q: 'How fast can I get custom DTF gang sheets produced?',
        a: 'Standard orders ship within 24 to 48 hours. Rush same-day production is available for approved print-ready vector files submitted before 12:00 PM.',
      },
    ],
  },
  {
    id: 'clothing',
    slug: 'custom-clothing',
    name: 'Clothing & Apparel',
    category: 'apparel',
    categoryLabel: 'Custom Apparel & Streetwear',
    tagline: 'Heavyweight Textiles & Luxury Garment Finishes',
    headline: 'Bespoke Custom Apparel, Streetwear Hoodies & Tees',
    description:
      'Turnkey luxury clothing production utilizing 450gsm organic French terry cotton hoodies, 240gsm drop-shoulder heavyweight tees, and custom zip-ups. Decorated with high-density screenprint, metallic foil stamping, or direct vector DTF.',
    image: '/src/assets/images/clothing_apparel_hoodie_1793362634821.jpg',
    leadTime: '5–8 Business Days',
    moq: '12 Units per design',
    pricingStartingAt: '$28.00 / Garment',
    materials: [
      '450 GSM Heavyweight Organic French Terry Cotton',
      '240 GSM Combed Ring-Spun Vintage Heavy Cotton Tee',
      'Double-Needle Flatlock Reinforcement & Custom Woven Labels',
    ],
    features: [
      'Preshrunk combed cotton with ultra-soft carbon brushed hand-feel',
      'Oversized luxury streetwear silhouette with ribbed side gussets',
      'Custom neck label printing and woven damask sleeve hem tags included',
      'Precision chest and back placement calibrated with laser alignment',
    ],
    specs: [
      { label: 'FABRIC WEIGHT', value: '450 GSM (Hoodies) / 240 GSM (Tees)' },
      { label: 'PRINT METHODS', value: 'DTF Transfer · High-Density Plastisol · Metallic Foil' },
      { label: 'FIT PROFILES', value: 'Boxy Drop-Shoulder / Classic Tailored / Vintage Loose' },
      { label: 'COLORWAYS', value: 'Onyx Black, Bone Off-White, Mineral Slate, Deep Navy' },
      { label: 'SIZING RANGE', value: 'XS through 3XL (Gender-Neutral)' },
    ],
    customOptions: [
      {
        name: 'Garment Silhouette',
        type: 'select',
        options: ['450 GSM Luxury Heavyweight Hoodie', '240 GSM Vintage Boxy Heavy Tee', '380 GSM Classic Crewneck Pullover'],
      },
      {
        name: 'Embellishment Location',
        type: 'radio',
        options: ['Front Center Chest Only', 'Front Chest + Oversized Back Print', 'Full Chest + Both Sleeves + Back'],
      },
    ],
    pricingTiers: [
      { quantity: 12, pricePerUnit: 48.0, unitLabel: 'garment' },
      { quantity: 50, pricePerUnit: 38.0, unitLabel: 'garment' },
      { quantity: 150, pricePerUnit: 32.0, unitLabel: 'garment' },
      { quantity: 500, pricePerUnit: 26.0, unitLabel: 'garment' },
    ],
    prepressGuidelines: [
      'Supply vector artwork with all fonts outlined and strokes expanded.',
      'Specify Pantone PMS solid coated swatch references if color matching is required.',
      'Chest graphics maximum width: 12.5" | Back graphics maximum width: 15.0".',
    ],
    faqs: [
      {
        q: 'Can I mix different sizes within the same minimum order?',
        a: 'Yes, you can distribute sizes (S, M, L, XL, 2XL) across your order at no additional charge, provided the artwork and garment color remain identical.',
      },
      {
        q: 'Do you provide sample garments before full production?',
        a: 'Yes, pre-production strike-off samples or single-unit prototypes can be commissioned prior to mass production runs.',
      },
    ],
  },
  {
    id: 'mugs',
    slug: 'custom-mugs',
    name: 'Ceramic Mugs',
    category: 'drinkware',
    categoryLabel: 'Artisanal Drinkware',
    tagline: 'Matte Ceramic & High-Fire Metallic Foil Imprints',
    headline: 'Bespoke Matte Ceramic Coffee Mugs & Tea Vessels',
    description:
      'Heavy ceramic stoneware mugs featuring velvety matte exterior glazes, comfortable ergonomic handles, and permanent high-fire vector branding. Finished in lustrous real metallic silver, platinum, or high-contrast gloss enamel.',
    image: '/src/assets/images/mugs_ceramic_matte_1793362635861.jpg',
    leadTime: '4–7 Business Days',
    moq: '24 Units',
    pricingStartingAt: '$9.50 / Unit',
    materials: [
      'High-Density Kiln-Fired Ceramic Stoneware (14oz / 415ml)',
      'Velvet-Touch Matte Obsidian Exterior Finish',
      'Food-Safe Lead-Free Gloss Interior Glaze',
    ],
    features: [
      'High-fire ceramic decal imprint baked at 1,400°F for permanent fusion',
      '100% Dishwasher and microwave safe glazes (non-metallic variants)',
      'Thick insulating walls that maintain beverage thermal retention',
      'Laser-precise typographic alignment on both front face and bottom stamp',
    ],
    specs: [
      { label: 'CAPACITY', value: '14 oz (415 ml) Heavy Stoneware' },
      { label: 'FINISH OPTIONS', value: 'Matte Black / Gloss Interior / Raw Ceramic Base' },
      { label: 'PRINT METHODS', value: 'High-Fire Ceramic Decal · Metallic Silver Lustre' },
      { label: 'PRINT AREA', value: '3.0" H x 2.75" W per side or 8.5" Full Wrap' },
      { label: 'WEIGHT', value: '440g per empty vessel (Solid hand-feel)' },
    ],
    customOptions: [
      {
        name: 'Finish Aesthetic',
        type: 'select',
        options: ['Matte Black with Polished Silver Lustre', 'All-Matte Tone-on-Tone Gloss Black', 'Matte Off-White with Charcoal Print'],
      },
      {
        name: 'Print Layout',
        type: 'radio',
        options: ['Single Side Focal Logo', 'Dual Side Print (Front & Back)', 'Full 360° Panoramic Wrap'],
      },
    ],
    pricingTiers: [
      { quantity: 24, pricePerUnit: 14.5, unitLabel: 'mug' },
      { quantity: 72, pricePerUnit: 11.2, unitLabel: 'mug' },
      { quantity: 144, pricePerUnit: 9.5, unitLabel: 'mug' },
      { quantity: 500, pricePerUnit: 7.8, unitLabel: 'mug' },
    ],
    prepressGuidelines: [
      'Vector art with minimum 0.5pt stroke thickness to ensure kiln decal crispness.',
      'Specify single or double-sided placement relative to handle (right or left hand orientation).',
    ],
    faqs: [
      {
        q: 'Are the metallic silver prints dishwasher safe?',
        a: 'Our high-fire metallic luster decals are kiln-cured at extreme temperatures and safely rated for commercial dishwashers up to 250 cycles.',
      },
    ],
  },
  {
    id: 'cups',
    slug: 'custom-cups',
    name: 'Cups & Tumblers',
    category: 'drinkware',
    categoryLabel: 'Insulated Tumblers & Glassware',
    tagline: 'Laser-Etched Stainless Steel & Frosted Glassware',
    headline: 'Double-Wall Insulated Tumblers & Craft Glass Cups',
    description:
      'Double-wall vacuum insulated stainless steel travel cups and frosted minimalist glassware. Features permanent CNC laser-etched branding that exposes the gleaming brushed steel beneath a durable matte powder coat.',
    image: '/src/assets/images/cups_tumbler_glassware_1793362635529.jpg',
    leadTime: '3–6 Business Days',
    moq: '20 Units',
    pricingStartingAt: '$16.00 / Unit',
    materials: [
      '18/8 Kitchen-Grade Pro Stainless Steel (BPA-Free)',
      'Chip-Resistant Matte Powder Coat Coating',
      'Heavy Base Soda-Lime Frosted Glassware Vessel',
    ],
    features: [
      'Cold for 24 hours / Hot for 12 hours vacuum thermal lock',
      'Precision rotary fiber laser engraving with sub-millimeter detail',
      'Leakproof magnetic slider lid with reusable steel straw included',
      'Cup holder friendly tapered base with non-slip silicone bottom',
    ],
    specs: [
      { label: 'CAPACITY', value: '20 oz (590 ml) Insulated Tumbler / 16 oz Glass' },
      { label: 'ENGRAVING METHOD', value: 'Rotary Fiber Laser Sub-Surface Ablation' },
      { label: 'COATING', value: 'Textured Electrostatic Matte Powder Coat' },
      { label: 'LID TYPE', value: 'Tritan Crystal-Clear Magnetic Slide Closure' },
      { label: 'DISPOSAL / CARE', value: '100% Dishwasher Safe' },
    ],
    customOptions: [
      {
        name: 'Vessel Style',
        type: 'select',
        options: ['20oz Matte Black Steel Tumbler with Straw', '16oz Frosted Minimalist Glass Cup', '12oz Insulated Lowball Bourbon Tumbler'],
      },
      {
        name: 'Branding Execution',
        type: 'radio',
        options: ['Silver Laser Etched (Bright Steel)', 'Dark Annealed Monogram', '360° Rotary Engraved Band'],
      },
    ],
    pricingTiers: [
      { quantity: 20, pricePerUnit: 24.0, unitLabel: 'cup' },
      { quantity: 50, pricePerUnit: 19.5, unitLabel: 'cup' },
      { quantity: 100, pricePerUnit: 16.0, unitLabel: 'cup' },
      { quantity: 300, pricePerUnit: 13.5, unitLabel: 'cup' },
    ],
    prepressGuidelines: [
      'Pure 1-color vector black/white files only for laser engraving.',
      'No raster photographic images; convert all shading into vector hatch patterns.',
    ],
    faqs: [
      {
        q: 'Will the laser-etched logo ever fade or scratch off?',
        a: 'No. Laser engraving physically vaporizes the powder-coat layer down to the underlying surgical steel, creating an immutable permanent mark.',
      },
    ],
  },
  {
    id: 'flyers',
    slug: 'custom-flyers',
    name: 'Luxury Flyers & Print',
    category: 'print',
    categoryLabel: 'Tactile Commercial Print',
    tagline: 'Foil-Stamped Promotional Collateral & Heavy Cardstock',
    headline: 'High-Impact Marketing Flyers, Cards & Lookbook Sheets',
    description:
      'Tactile marketing collateral produced on premium 450gsm Fedrigoni and G.F Smith card stocks. Finished with precision metallic silver foil stamping, blind letterpress debossing, soft-touch matte lamination, and painted silver edges.',
    image: '/src/assets/images/flyers_luxury_print_1793362636762.jpg',
    leadTime: '3–5 Business Days',
    moq: '50 Pieces',
    pricingStartingAt: '$0.45 / Piece',
    materials: [
      '450 GSM Sirio Black / Colorplan Extra-Dense Archival Cardstock',
      'Dual-Sided Silk Soft-Touch Velvet Matte Laminate',
      'Genuine Metallic Silver / Platinum Hot Stamping Foil',
    ],
    features: [
      'Heavy rigid hand-feel that commands tactile authority',
      'True deep dyed-through cardstock with no white core edge showing',
      'Micro-etched brass stamping dies for hairline typographic fidelity',
      'Available with hand-painted metallic silver edge gilding',
    ],
    specs: [
      { label: 'STANDARD SIZES', value: 'A5 (148×210mm) · A6 (105×148mm) · DL (99×210mm)' },
      { label: 'PAPER WEIGHT', value: '450 GSM Double-Thick Duplex Board' },
      { label: 'FOIL OPTIONS', value: 'Liquid Silver, Platinum Chrome, Matte Charcoal Foil' },
      { label: 'FINISHES', value: 'Blind Deboss · Spot UV Gloss · Silver Painted Edges' },
      { label: 'COLOR CALIBRATION', value: 'ISO 12647-2 Fogra 51 Prepress Standard' },
    ],
    customOptions: [
      {
        name: 'Flyer Dimensions',
        type: 'select',
        options: ['A5 Portrait (148 x 210 mm)', 'A6 Postcard (105 x 148 mm)', 'DL Architectural Narrow (99 x 210 mm)'],
      },
      {
        name: 'Foil & Emboss Treatment',
        type: 'radio',
        options: ['Metallic Silver Hot Foil Front Only', 'Foil Stamping + Blind Letterpress Deboss', 'Dual-Sided Foil with Painted Silver Edges'],
      },
    ],
    pricingTiers: [
      { quantity: 100, pricePerUnit: 1.25, unitLabel: 'flyer' },
      { quantity: 250, pricePerUnit: 0.85, unitLabel: 'flyer' },
      { quantity: 500, pricePerUnit: 0.58, unitLabel: 'flyer' },
      { quantity: 1000, pricePerUnit: 0.42, unitLabel: 'flyer' },
    ],
    prepressGuidelines: [
      'Supply 3mm bleed on all outer edges with crop marks enabled.',
      'Keep critical text and vector marks at least 5mm inside the trim line.',
      'Separate foil and spot UV elements onto a dedicated 100% K vector spot color layer.',
    ],
    faqs: [
      {
        q: 'Can you print double-sided with foil on both sides?',
        a: 'Yes. We use heavy 450gsm cardstock to ensure that foil stamping pressure on one side does not deform the opposite face.',
      },
    ],
  },
  {
    id: 'stamps',
    slug: 'custom-stamps',
    name: 'Custom Stamps & Seals',
    category: 'print',
    categoryLabel: 'Embossing Seals & Desk Stamps',
    tagline: 'Brass Handheld Embossers & Wax Monogram Seals',
    headline: 'Hand-Finished Brass Embossing Seals & Custom Stamps',
    description:
      'CNC-milled solid brass handheld seal embossers, wax seal stamps with turned walnut handles, and heavy-duty self-inking desk stamps. Ideal for authenticating contracts, luxury stationery, packaging, certificates, and archival correspondence.',
    image: '/src/assets/images/stamps_embossing_seal_1793362637515.jpg',
    leadTime: '3–5 Business Days',
    moq: '1 Unit (No minimums)',
    pricingStartingAt: '$45.00 / Stamp',
    materials: [
      'Solid Jewelers-Grade C36000 Naval Brass Die',
      'Turned Dark American Walnut Wooden Handle',
      'Heavy Cast-Iron Desk Embosser Mechanism with Steel Gears',
    ],
    features: [
      'Micro-milled counter-die ensures crisp 3D paper emboss without tearing',
      'Deep 0.8mm relief engraving for clean impressions on heavy paper stocks',
      'Includes padded travel pouch and presentation gift box',
      'Compatible with paper weights from 80gsm copy bond to 400gsm cardstock',
    ],
    specs: [
      { label: 'DIE DIAMETER', value: '40mm (1.57") Round or 50mm (2.0") Large Seal' },
      { label: 'ENGRAVING DEPTH', value: '0.8mm Micro-CNC Relief Milling' },
      { label: 'MECHANISM', value: 'Heavy Duty Steel Hand-Grip / Desk Plier' },
      { label: 'PAPER COMPATIBILITY', value: 'Up to 350 GSM Paper and Envelope Flaps' },
      { label: 'HANDLE FINISH', value: 'Hand-Rubbed Organic Linseed Oil on Walnut' },
    ],
    customOptions: [
      {
        name: 'Seal Apparatus',
        type: 'select',
        options: ['Heavy Duty Handheld Brass Embosser', 'Classic Turned Walnut Wax Seal Stamp', 'Self-Inking Heavy Office Desk Stamp'],
      },
      {
        name: 'Die Diameter',
        type: 'radio',
        options: ['Standard 40mm (1.57") Round Seal', 'Monumental 50mm (2.0") Round Seal'],
      },
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 65.0, unitLabel: 'stamp' },
      { quantity: 5, pricePerUnit: 52.0, unitLabel: 'stamp' },
      { quantity: 20, pricePerUnit: 42.0, unitLabel: 'stamp' },
      { quantity: 50, pricePerUnit: 34.0, unitLabel: 'stamp' },
    ],
    prepressGuidelines: [
      'Solid pure black and white vector outlines only (no grey tones or halftones).',
      'Text height must be at least 6pt to prevent overlapping brass ridges.',
      'Circular emblems should maintain 1.5mm inset from the outer die boundary.',
    ],
    faqs: [
      {
        q: 'Can I order just a replacement brass die for an existing embosser?',
        a: 'Yes, our brass inserts are modular and can be purchased individually if your brand mark or corporate address changes.',
      },
    ],
  },
  {
    id: 'banners',
    slug: 'custom-banners',
    name: 'Banners & Displays',
    category: 'print',
    categoryLabel: 'Exhibition & Showroom Signage',
    tagline: 'Anodized Aluminum Roll-Up Stands & Vinyl Displays',
    headline: 'Architectural Roll-Up Banners & Modular Exhibition Displays',
    description:
      'Precision roll-up pull-up retractable banners and wide-format vinyl display systems. Constructed with heavy satin-finish anodized aluminum bases, curl-free blockout polyester media, and ultra-sharp UV-curable archival inks.',
    image: '/src/assets/images/banners_roll_up_display_1793362639367.jpg',
    leadTime: '2–4 Business Days',
    moq: '1 Unit',
    pricingStartingAt: '$110.00 / Banner Unit',
    materials: [
      'Heavy Solid-Base Anodized Brushed Aluminum Cassette',
      '440 GSM Anti-Curl Blockout Grey-Backed Matte Polyester Film',
      'UV-Cured Latex Inks with Zero Odor & Scratch-Resistant Finish',
    ],
    features: [
      '100% Light-blockout core prevents showroom shadows and backlight glow',
      'Tension-balanced internal spring mechanism tested for 1,000+ deployments',
      'Padded ballistic nylon carrying bag with shoulder strap included',
      'Magnetic top profile clamp for swift graphic panel replacement',
    ],
    specs: [
      { label: 'STANDARD DIMENSIONS', value: '33.5" W × 79.0" H (85cm × 200cm)' },
      { label: 'MEDIA WEIGHT', value: '440 GSM No-Curl Matte Polypropylene' },
      { label: 'PRINT RESOLUTION', value: '1440 DPI Wide-Format Fine-Art Inks' },
      { label: 'BASE WEIGHT', value: '4.8 kg Heavyweight Stability Base' },
      { label: 'CERTIFICATIONS', value: 'B1 / M1 Fire Retardant for Indoor Trade Show Compliance' },
    ],
    customOptions: [
      {
        name: 'Banner Display Size',
        type: 'select',
        options: ['Standard Gallery 33.5" x 79" (85 x 200 cm)', 'Wide Presence 39.5" x 79" (100 x 200 cm)', 'Monumental Showroom 47.0" x 79" (120 x 200 cm)'],
      },
      {
        name: 'Base Hardware Tone',
        type: 'radio',
        options: ['Brushed Platinum Silver Anodized', 'Satin Matte Stealth Black Hardware'],
      },
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 145.0, unitLabel: 'display' },
      { quantity: 3, pricePerUnit: 125.0, unitLabel: 'display' },
      { quantity: 10, pricePerUnit: 98.0, unitLabel: 'display' },
      { quantity: 25, pricePerUnit: 82.0, unitLabel: 'display' },
    ],
    prepressGuidelines: [
      'Set artwork to 33.5" wide by 83.0" high (incorporating 4.0" bottom bleed for roller mechanism).',
      'Resolution: 150 DPI at 100% scale or 300 DPI at 50% scale.',
      'Ensure high-contrast typography is placed above the bottom 12" floor viewing line.',
    ],
    faqs: [
      {
        q: 'Can the graphic panel be replaced in the future without buying a new stand?',
        a: 'Yes. Our premium aluminum cassettes feature re-loadable graphic snap clamps so you can order replacement prints anytime.',
      },
    ],
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design-prepress',
    name: 'Graphic Design & Vector Prepress',
    category: 'design',
    categoryLabel: 'Design Engineering',
    tagline: 'Bespoke Vector Systems, Logo Craft & Production Prepress',
    headline: 'Bespoke Vector Identity, Logo Vectorization & Prepress Proofing',
    description:
      'Professional graphic design engineering services covering bespoke vector logos, mathematical bezier curves, manual high-precision vector tracing from legacy artwork, brand guidelines, and print-ready prepress file separation for all manufacturing processes.',
    image: '/src/assets/images/graphic_design_station_1793362638930.jpg',
    leadTime: '2–5 Business Days',
    moq: 'Single Project Engagement',
    pricingStartingAt: '$180.00 / Project',
    materials: [
      'Color-Calibrated EIZO ColorEdge & Adobe CC Suite',
      'Mathematical Golden Ratio Vector Geometry',
      'Complete Production Export Packages (.AI, .EPS, .SVG, .PDF, .DXF)',
    ],
    features: [
      'Hand-crafted bezier curve nodes with zero automated auto-trace artifacts',
      'Pantone PMS spot color ink separation for multi-color silk screening and offset',
      'Print die-line vector generation with cutting and scoring layers',
      'Full commercial intellectual property release upon project completion',
    ],
    specs: [
      { label: 'OUTPUT FORMATS', value: 'Vector .AI, .EPS, .SVG, Hi-Res PDF, TIFF' },
      { label: 'VECTOR TOLERANCE', value: 'Sub-pixel accuracy with optimized node count' },
      { label: 'COLOR COMPLIANCE', value: 'CMYK + Pantone Matching System (PMS Solid Coated)' },
      { label: 'TYPOGRAPHIC LICENSING', value: 'Outlined curves + open-source webfont packaging' },
      { label: 'TURNAROUND', value: '48hr Initial Concept Deck' },
    ],
    customOptions: [
      {
        name: 'Service Scope',
        type: 'select',
        options: ['Complete Brand Identity & Vector Logo Suite', 'Manual Vector Tracing & Prepress File Prep', 'Packaging Die-line & Print Production Separation'],
      },
      {
        name: 'Revision Depth',
        type: 'radio',
        options: ['Standard 2 Rounds of Architectural Revisions', 'Unlimited Iterative Sprint with Creative Director'],
      },
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 250.0, unitLabel: 'engagement' },
      { quantity: 3, pricePerUnit: 220.0, unitLabel: 'engagement' },
      { quantity: 5, pricePerUnit: 180.0, unitLabel: 'engagement' },
    ],
    prepressGuidelines: [
      'Submit sketches, reference images, or existing raster assets via our secure brief drawer.',
      'Our senior design director reviews vector paths to guarantee 100% manufacturing viability.',
    ],
    faqs: [
      {
        q: 'Do I own the full copyright to the created vector artwork?',
        a: 'Yes, 100% full intellectual property transfer is executed upon final invoice payment with no recurring royalties.',
      },
      {
        q: 'Can you fix broken or blurry logos so they can be printed on DTF, clothing, or banners?',
        a: 'Yes! Our manual vector tracing service meticulously reconstructs blurry low-resolution logos into infinitely scalable, razor-sharp vector graphics with clean Bézier nodes.',
      },
    ],
  },
];
