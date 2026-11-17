import apparelImage from '../assets/images/apparel_textile_branding_1794043015458.webp';
import brandIdentityImage from '../assets/images/branding_creative_studio_1794043015922.webp';
import largeFormatImage from '../assets/images/large_format_display_1794043015815.webp';
import printProductionImage from '../assets/images/hero_print_branding_1794043015828.webp';
import packagingImage from '../assets/images/stickers_packaging_1794043016239.webp';

const CATEGORY_IMAGES = {
  'printing-paper': printProductionImage,
  'corporate-branding': brandIdentityImage,
  'logo-branding': 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
  'promotional-products': 'https://raw.githubusercontent.com/mwungerisam/barackadesign/292efd7ef7c0c58579c4b7c97debffeaa095ee08/src/assets/images/mugs_ceramic_matte_1793362635861.jpg',
  'apparel-textile': apparelImage,
  'large-format': largeFormatImage,
  'stickers-packaging': packagingImage,
  'graphic-design': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  'event-branding': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  'photo-decorative': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80',
  'document-finishing': 'https://raw.githubusercontent.com/mwungerisam/barackadesign/292efd7ef7c0c58579c4b7c97debffeaa095ee08/src/assets/images/case_architectural_monograph_1793361991774.jpg'
} as const;

export interface ServiceSubitem {
  id: string;
  name: string;
  description: string;
  customizationOptions?: string[];
  artworkRequirements?: string[];
  useCases?: string[];
}

export interface ServiceCategory {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageLabel: string;
  subitems: ServiceSubitem[];
}

export const APPROVED_SERVICES: ServiceCategory[] = [
  {
    id: 'printing-paper', letter: 'A', title: 'Printing & Paper Products', subtitle: 'Business stationery and printed materials', imageLabel: 'Print & paper',
    description: 'Professional printed materials for business communication, promotions, publishing, and event presentation.', image: CATEGORY_IMAGES['printing-paper'],
    subitems: [
      {
        id: 'business-card-printing',
        name: 'Business Card Printing',
        description: 'Refined business cards designed for professionals, teams, and corporate representatives who need a polished first impression.',
        customizationOptions: ['Standard layouts', 'Double-sided arrangements', 'Brand and contact updates'],
        artworkRequirements: ['Logo or artwork files', 'Contact details and branding references'],
        useCases: ['Networking', 'Client introductions', 'Corporate identity']
      },
      {
        id: 'company-profile-printing',
        name: 'Company Profile Printing',
        description: 'Professionally printed company profiles that present your services, values, and business strengths with clarity.',
        customizationOptions: ['Brand-compliant copy layouts', 'Image placement', 'Section ordering'],
        useCases: ['Sales presentations', 'Business introductions', 'Investor and client packs']
      },
      { id: 'flyers', name: 'Flyers', description: 'Focused promotional flyers designed for campaigns, launches, announcements, and time-sensitive offers.' },
      { id: 'brochures', name: 'Brochures', description: 'Well-structured brochures for service showcases, product ranges, and corporate messaging.' },
      { id: 'posters', name: 'Posters', description: 'High-impact posters for visibility, promotion, and clear communication in public-facing spaces.' },
      { id: 'catalogues', name: 'Catalogues', description: 'Professional catalogues that present products and service offerings in a clear, organized format.' },
      { id: 'magazines', name: 'Magazines', description: 'Editorial print pieces for brand storytelling, communication, and campaign publishing.' },
      { id: 'booklets', name: 'Booklets', description: 'Concise, polished booklets for reports, guides, studies, and brand communications.' },
      { id: 'letterheads', name: 'Letterheads', description: 'Business letterheads that strengthen brand recognition in formal communication and documentation.' },
      { id: 'envelopes', name: 'Envelopes', description: 'Branded envelopes that complement formal stationery and business correspondence.' },
      { id: 'invitations', name: 'Invitations', description: 'Elegant printed invitations for weddings, launches, corporate functions, and formal gatherings.' },
      { id: 'certificates', name: 'Certificates', description: 'Professionally presented certificates for recognition, training, achievement, and formal programs.' },
      { id: 'menus', name: 'Menus', description: 'Well-crafted menus for food service, hospitality, and event-based customer experiences.' },
      { id: 'presentation-folders', name: 'Presentation Folders', description: 'Refined presentation folders for proposals, pitch packs, and professional company materials.' },
      { id: 'receipt-books', name: 'Receipt Books', description: 'Practical receipt books designed for clean, professional transaction records.' },
      { id: 'notebooks', name: 'Notebooks', description: 'Custom notebooks for corporate gifting, internal programs, promotions, and branded essentials.' },
      { id: 'custom-stationery', name: 'Custom Stationery', description: 'Tailored stationery sets that elevate everyday business communication and brand presentation.' },
      { id: 'corporate-documents', name: 'Corporate Documents', description: 'Printed administrative and corporate documents designed for clarity, professionalism, and internal use.' },
      { id: 'wedding-event-stationery', name: 'Wedding & Event Stationery', description: 'Thoughtfully designed stationery for weddings, launches, ceremonies, and memorable occasions.' }
    ]
  },
  {
    id: 'corporate-branding', letter: 'B', title: 'Corporate Branding & Business Cards', subtitle: 'Professional identity materials', imageLabel: 'Corporate identity',
    description: 'Corporate print essentials that present a polished, credible, and consistent business identity.', image: CATEGORY_IMAGES['corporate-branding'],
    subitems: [
      { id: 'standard-business-cards', name: 'Standard Business Cards', description: 'Classic business cards for everyday networking and professional introductions.' },
      { id: 'premium-business-cards', name: 'Premium Business Cards', description: 'Elevated card layouts for brands that want a more refined and memorable touch.' },
      { id: 'double-sided-business-cards', name: 'Double-Sided Business Cards', description: 'Business cards with space for contact details, services, and additional brand information.' },
      { id: 'custom-business-cards', name: 'Custom Business Cards', description: 'Tailored card designs for different teams, job roles, and business identities.' },
      { id: 'corporate-stationery', name: 'Corporate Stationery', description: 'Complete stationery systems for professional office and client communication.' },
      { id: 'company-letterheads', name: 'Company Letterheads', description: 'Branded letterheads for formal documentation, proposals, and business correspondence.' },
      { id: 'branded-envelopes', name: 'Branded Envelopes', description: 'Printed company envelopes that align with your letterhead and professional styling.' },
      { id: 'company-folders', name: 'Company Folders', description: 'Presentation folders created to hold proposals, welcome packs, or digital materials.' },
      { id: 'employee-id-cards', name: 'Employee ID Cards', description: 'Professional identification cards for staff, visitors, and internal access management.' },
      { id: 'membership-cards', name: 'Membership Cards', description: 'Membership and affiliation cards for associations, clubs, and organizations.' },
      { id: 'loyalty-cards', name: 'Loyalty Cards', description: 'Printed loyalty cards to support repeat customer programs and retention.' },
      { id: 'appointment-cards', name: 'Appointment Cards', description: 'Cards used for bookings, reminders, and appointment confirmation in service businesses.' },
      { id: 'thank-you-cards', name: 'Thank-You Cards', description: 'Printed cards for client appreciation, event follow-ups, and brand touchpoints.' },
      { id: 'corporate-presentation-materials', name: 'Corporate Presentation Materials', description: 'Branded presentation tools created to help companies communicate clearly and professionally.' }
    ]
  },
  {
    id: 'logo-branding', letter: 'C', title: 'Logo Design & Brand Identity', subtitle: 'Creative identity services', imageLabel: 'Logo & identity design',
    description: 'Professional brand direction and identity design that give businesses a sharper, more memorable presence.', image: CATEGORY_IMAGES['logo-branding'],
    subitems: [
      {
        id: 'logo-design',
        name: 'Logo Design',
        description: 'Custom logo creation built around your business, values, audience, and market positioning.',
        customizationOptions: ['Concept development', 'Multiple design directions', 'Brand refinement'],
        artworkRequirements: ['Business name', 'Industry context', 'Any inspiration references'],
        useCases: ['Brand launches', 'Business set-up', 'Repositioning and growth']
      },
      {
        id: 'logo-redesign',
        name: 'Logo Redesign',
        description: 'A strategic refresh for existing identities that need greater clarity, relevance, and consistency.',
        customizationOptions: ['Modernization review', 'Color and typography updates', 'Brand alignment'],
        artworkRequirements: ['Existing logo files', 'Current brand references', 'Business goals']
      },
      { id: 'brand-identity-development', name: 'Brand Identity Development', description: 'A full brand direction built around your business personality, values, and voice.' },
      { id: 'corporate-identity', name: 'Corporate Identity', description: 'Brand systems that translate a business vision into practical visual language and communication.' },
      { id: 'brand-color-systems', name: 'Brand Color Systems', description: 'Consistent color direction to anchor a brand across print, signage, digital, and merchandise.' },
      { id: 'typography-selection', name: 'Typography Selection', description: 'Font and type choices designed to support a brand’s tone, clarity, and professional expression.' },
      { id: 'brand-guidelines', name: 'Brand Guidelines', description: 'A clear guide for how the brand should be used consistently across different channels and touchpoints.' },
      { id: 'business-stationery-design', name: 'Business Stationery Design', description: 'Coordinated stationery design for documents, forms, cards, and everyday corporate materials.' },
      { id: 'brand-application-design', name: 'Brand Application Design', description: 'Creative application of the brand within print, signage, packaging, and promotional materials.' },
      { id: 'marketing-material-design', name: 'Marketing Material Design', description: 'Brand-aligned layouts for marketing collateral, offers, and business communications.' },
      { id: 'visual-identity-systems', name: 'Visual Identity Systems', description: 'A complete identity framework that keeps graphics, layouts, and communications aligned.' },
      { id: 'brand-consistency-consultation', name: 'Brand Consistency Consultation', description: 'Guidance and review to keep the brand visually consistent as it grows and expands.' }
    ]
  },
  {
    id: 'promotional-products', letter: 'D', title: 'Promotional Products & Branded Merchandise', subtitle: 'Custom gifts and branded items', imageLabel: 'Branded mugs & gifts',
    description: 'Practical branded products that help businesses build visibility, recognition, and lasting customer touchpoints.', image: CATEGORY_IMAGES['promotional-products'],
    subitems: [
      {
        id: 'custom-mug-printing',
        name: 'Mug Branding',
        description: 'Custom-branded mugs featuring your logo, artwork, or message—ideal for business gifts, staff kits, promotions, and events.',
        customizationOptions: ['Logo or full-colour artwork', 'Brand colours and messaging', 'Single or multiple mug quantities'],
        artworkRequirements: ['Print-ready logo or artwork, if available', 'Preferred colours and mug quantity'],
        useCases: ['Corporate and client gifts', 'Staff appreciation', 'Promotional campaigns and events']
      },
      { id: 'branded-cups', name: 'Branded Cups', description: 'Custom cups for campaigns, hospitality settings, and event giveaways.' },
      { id: 'water-bottle-branding', name: 'Water Bottle Branding', description: 'Custom-branded bottles for staff awareness, sports events, and promotional outreach.' },
      { id: 'travel-mug-branding', name: 'Travel Mug Branding', description: 'Travel mugs designed for practical everyday visibility and corporate gifting.' },
      { id: 'branded-pens', name: 'Branded Pens', description: 'Useful, portable items for campaigns, offices, events, and client touchpoints.' },
      { id: 'branded-notebooks', name: 'Branded Notebooks', description: 'Elegant notebooks for gifting, seminars, internal programs, and team appreciation.' },
      { id: 'keyholder-branding', name: 'Keyholder Branding', description: 'Branded key holders tailored for giveaways, welcome packs, and professional gift sets.' },
      { id: 'tote-bag-printing', name: 'Tote Bag Printing', description: 'Reusable tote bags for retail, campaigns, events, and practical everyday promotion.' },
      { id: 'corporate-gift-branding', name: 'Corporate Gift Branding', description: 'Curated branded gifts that strengthen business relationships and recognition.' },
      { id: 'promotional-merchandise', name: 'Promotional Merchandise', description: 'A well-rounded mix of branded products for launches, campaigns, and customer engagement.' },
      { id: 'personalized-gifts', name: 'Personalized Gifts', description: 'Custom gift items for milestones, appreciation moments, and client-facing brand experiences.' },
      { id: 'employee-appreciation-gifts', name: 'Employee Appreciation Gifts', description: 'Thoughtful branded gifts for recognition, morale, and team appreciation.' },
      { id: 'custom-branded-merchandise', name: 'Custom Branded Merchandise', description: 'Tailored merchandise designed around your identity, audience, and business objectives.' }
    ]
  },
  {
    id: 'apparel-textile', letter: 'E', title: 'Apparel & Textile Branding', subtitle: 'Custom clothing and uniforms', imageLabel: 'Apparel branding',
    description: 'Custom garments and branded textile items for teams, organizations, events, and promotional visibility.', image: CATEGORY_IMAGES['apparel-textile'],
    subitems: [
      { id: 'custom-tshirt-printing', name: 'Custom T-Shirt Printing', description: 'Custom printed T-shirts for events, campaigns, teams, and organizational visibility.' },
      { id: 'polo-shirt-branding', name: 'Polo Shirt Branding', description: 'Branded polos for uniforms, hospitality teams, and professional business presentation.' },
      { id: 'hoodie-printing', name: 'Hoodie Printing', description: 'Printed hoodies suited to events, schools, promotional teams, and corporate merchandise.' },
      { id: 'sweatshirt-branding', name: 'Sweatshirt Branding', description: 'Branded sweatshirts for teams, organizations, and recognition programs.' },
      { id: 'uniform-branding', name: 'Uniform Branding', description: 'Branded uniforms that maintain consistency across teams and customer-facing roles.' },
      { id: 'workwear-branding', name: 'Workwear Branding', description: 'Custom workwear identity solutions for staff uniformity and organization visibility.' },
      { id: 'cap-branding', name: 'Cap Branding', description: 'Custom-branded caps for teams, campaigns, events, and brand visibility.' },
      { id: 'sportswear-branding', name: 'Sportswear Branding', description: 'Printed or branded sportswear for teams, schools, clubs, and fitness initiatives.' },
      { id: 'team-apparel', name: 'Team Apparel', description: 'Coordinated team clothing for events, activations, and strong corporate identity.' },
      { id: 'promotional-clothing', name: 'Promotional Clothing', description: 'Printed garments for awareness campaigns, promotions, and branded giveaways.' },
      { id: 'dtf-printing', name: 'DTF Printing', description: 'Direct-to-film printing for apparel projects where available and matched to the brief.' }
    ]
  },
  {
    id: 'large-format', letter: 'F', title: 'Large-Format Printing & Signage', subtitle: 'Displays, banners, and signage', imageLabel: 'Banners & displays',
    description: 'Large-format visuals designed to communicate clearly across retail, business, exhibition, and event environments.', image: CATEGORY_IMAGES['large-format'],
    subitems: [
      { id: 'banners', name: 'Banners', description: 'Printed banners for promotions, launches, retail messaging, and clear visual impact.' },
      { id: 'roll-up-banners', name: 'Roll-Up Banners', description: 'Portable display banners for events, exhibitions, and presentation spaces.' },
      { id: 'event-backdrops', name: 'Event Backdrops', description: 'Backdrop graphics for stages, booths, interviews, and branded installations.' },
      { id: 'exhibition-displays', name: 'Exhibition Displays', description: 'Visual display graphics for trade-show booths, branded spaces, and product engagement.' },
      { id: 'posters-large', name: 'Posters', description: 'Printed posters for awareness, indoor communication, and high-visibility promotional messaging.' },
      { id: 'window-graphics', name: 'Window Graphics', description: 'Printed graphics for storefronts, offices, and glass-facing brand visibility.' },
      { id: 'wall-graphics', name: 'Wall Graphics', description: 'Decorative or branded wall graphics for interiors, reception spaces, and business environments.' },
      { id: 'promotional-signs', name: 'Promotional Signs', description: 'High-impact signage for campaigns, sales, and business visibility.' },
      { id: 'indoor-signage', name: 'Indoor Signage', description: 'Interior graphics and signage for directions, information, and brand presentation.' },
      { id: 'outdoor-signage', name: 'Outdoor Signage', description: 'External graphics and signage for visibility, advertising, and retail communication.' },
      { id: 'vinyl-printing', name: 'Vinyl Printing', description: 'Printed vinyl graphics for adaptable branding, display, and wayfinding applications.' },
      { id: 'display-graphics', name: 'Display Graphics', description: 'Printed visuals for merchandising, product presentation, and promotional displays.' },
      { id: 'directional-signs', name: 'Directional Signs', description: 'Clear directional graphics for offices, events, buildings, and public spaces.' }
    ]
  },
  {
    id: 'stickers-packaging', letter: 'G', title: 'Stickers, Labels & Packaging', subtitle: 'Branding for products and retail packaging', imageLabel: 'Labels & packaging',
    description: 'Practical branding solutions for retail, product presentation, event packaging, and business-ready packaging needs.', image: CATEGORY_IMAGES['stickers-packaging'],
    subitems: [
      { id: 'product-labels', name: 'Product Labels', description: 'Labels that help products communicate information, identity, and presentation.' },
      { id: 'custom-stickers', name: 'Custom Stickers', description: 'Printed stickers for packaging, product branding, giveaways, and promotions.' },
      { id: 'logo-stickers', name: 'Logo Stickers', description: 'Simple, effective logo stickers for branding across products and packaging.' },
      { id: 'vinyl-stickers', name: 'Vinyl Stickers', description: 'Durable vinyl stickers for signage, labeling, packaging, and product use.' },
      { id: 'die-cut-stickers', name: 'Die-Cut Stickers', description: 'Precision-cut stickers that add a premium finish to product or promotional items.' },
      { id: 'packaging-labels', name: 'Packaging Labels', description: 'Printed labels for product boxes, containers, and retail presentation.' },
      { id: 'branded-packaging', name: 'Branded Packaging', description: 'Packaging design and print support to give products a polished, professional finish.' },
      { id: 'paper-bags', name: 'Paper Bags', description: 'Branded paper bags for retail, events, gifting, and shopping experiences.' },
      { id: 'custom-boxes', name: 'Custom Boxes', description: 'Printed or branded boxes suited to gifts, retail products, and packaging presentation.' },
      { id: 'product-packaging-artwork', name: 'Product Packaging Artwork', description: 'Creative layout work for product boxes, wrappers, and retail packaging outputs.' },
      { id: 'retail-packaging-design', name: 'Retail Packaging Design', description: 'Packaging design that supports product visibility, professionalism, and retail appeal.' },
      { id: 'food-beverage-labels', name: 'Food & Beverage Labels', description: 'Labels and packaging graphics for food, beverage, and consumer product presentation.' }
    ]
  },
  {
    id: 'graphic-design', letter: 'H', title: 'Graphic Design & Marketing Materials', subtitle: 'Creative design services', imageLabel: 'Graphic design',
    description: 'Creative design support for brands, campaigns, businesses, and product communication across print and digital channels.', image: CATEGORY_IMAGES['graphic-design'],
    subitems: [
      { id: 'flyer-design', name: 'Flyer Design', description: 'Campaign flyer layouts created to communicate offers, events, or services clearly.' },
      { id: 'poster-design', name: 'Poster Design', description: 'Poster concepts designed to support awareness, promotion, and visual communication.' },
      { id: 'brochure-design', name: 'Brochure Design', description: 'Structured brochure layouts for businesses, service providers, and branded information.' },
      { id: 'business-card-design', name: 'Business Card Design', description: 'Custom business card designs aligned to a company’s tone, audience, and identity.' },
      { id: 'social-media-graphics', name: 'Social Media Graphics', description: 'Social-ready designs for campaigns, announcements, engagement, and brand content.' },
      { id: 'advertising-creatives', name: 'Advertising Creatives', description: 'Marketing visuals for brand awareness, seasonal campaigns, and promotional updates.' },
      { id: 'company-profiles', name: 'Company Profiles', description: 'Professional profiles that present a business clearly and convincingly for clients and partners.' },
      { id: 'product-catalogue-design', name: 'Product Catalogue Design', description: 'Catalogue layouts for products and service ranges that need both structure and presentation.' },
      { id: 'presentation-design', name: 'Presentation Design', description: 'Presentations and pitch decks designed to communicate clearly in business settings.' },
      { id: 'marketing-campaign-artwork', name: 'Marketing Campaign Artwork', description: 'Creative artwork for campaign rollouts across print and digital materials.' },
      { id: 'digital-promotional-materials', name: 'Digital Promotional Materials', description: 'Branded digital content for social posts, web campaigns, and promotional initiatives.' }
    ]
  },
  {
    id: 'event-branding', letter: 'I', title: 'Event & Corporate Branding', subtitle: 'Printed visual branding for events', imageLabel: 'Event branding',
    description: 'Visual branding and printed collateral designed for corporate functions, exhibitions, and customer-facing event experiences.', image: CATEGORY_IMAGES['event-branding'],
    subitems: [
      { id: 'event-backdrops-branding', name: 'Event Backdrops', description: 'Backdrop graphics for event branding, objectives, and presentation environments.' },
      { id: 'conference-branding', name: 'Conference Branding', description: 'Printed and branded materials for conferences, seminars, and corporate gatherings.' },
      { id: 'exhibition-graphics', name: 'Exhibition Graphics', description: 'Wall graphics and branded visuals for exhibitions and showcase environments.' },
      { id: 'event-banners', name: 'Event Banners', description: 'Event banners used for entrances, booths, stages, and promotional displays.' },
      { id: 'branded-invitations', name: 'Branded Invitations', description: 'Printed invitations that match the event theme and corporate message.' },
      { id: 'event-badges', name: 'Event Badges', description: 'Printed badges for attendees, staff, VIPs, and ceremony participation.' },
      { id: 'corporate-event-stationery', name: 'Corporate Event Stationery', description: 'Event materials such as cards, programs, and branded stationery for professional gatherings.' },
      { id: 'stage-and-presentation-graphics', name: 'Stage & Presentation Graphics', description: 'Visual materials for stage branding, presentation screens, and event communication.' },
      { id: 'promotional-event-materials', name: 'Promotional Event Materials', description: 'Printed event collateral for awareness, registration, and visitor engagement.' },
      { id: 'branded-merchandise-for-events', name: 'Branded Merchandise for Events', description: 'Printed promotional merchandise for conferences, launches, and branded activations.' }
    ]
  },
  {
    id: 'photo-decorative', letter: 'J', title: 'Photography & Decorative Printing', subtitle: 'Photo prints and wall art', imageLabel: 'Photo prints & wall art',
    description: 'Printed photography and decorative display pieces for homes, offices, gifting, and personal presentation.', image: CATEGORY_IMAGES['photo-decorative'],
    subitems: [
      { id: 'photo-printing', name: 'Photo Printing', description: 'Professional photo printing for personal images, brand moments, and keepsakes.' },
      { id: 'large-photo-prints', name: 'Large Photo Prints', description: 'Larger-format prints created for display, storytelling, or decor applications.' },
      { id: 'canvas-prints', name: 'Canvas Prints', description: 'Canvas photo prints designed for wall display and decorative presentation.' },
      { id: 'wall-art', name: 'Wall Art', description: 'Decorative wall prints for residences, studios, offices, and hospitality spaces.' },
      { id: 'framed-photo-prints', name: 'Framed Photo Prints', description: 'Photo printing prepared for framing and polished presentation.' },
      { id: 'personalized-photo-gifts', name: 'Personalized Photo Gifts', description: 'Custom photo products for gifting, milestones, and branded personalized keepsakes.' },
      { id: 'decorative-posters', name: 'Decorative Posters', description: 'Decorative poster prints for home, office, or event space styling.' }
    ]
  },
  {
    id: 'document-finishing', letter: 'K', title: 'Document & Finishing Services', subtitle: 'Document print and finishing support', imageLabel: 'Document finishing',
    description: 'Practical document and finishing support for business paperwork, presentations, and everyday professional records.', image: CATEGORY_IMAGES['document-finishing'],
    subitems: [
      { id: 'document-printing', name: 'Document Printing', description: 'Print services for reports, forms, files, and general office documentation.' },
      { id: 'photocopying', name: 'Photocopying', description: 'Photocopy support for documents, records, and everyday professional duplication.' },
      { id: 'scanning', name: 'Scanning', description: 'Document scanning for digital access, storage, and archiving workflows.' },
      { id: 'document-binding', name: 'Document Binding', description: 'Binding support for manuals, reports, proposals, and presentation materials.' },
      { id: 'lamination', name: 'Lamination', description: 'Protective lamination for documents, signage, and presentation pieces.' },
      { id: 'certificate-finishing', name: 'Certificate Finishing', description: 'Finishing support for certificates, recognition pieces, and formal documentation.' },
      { id: 'booklet-finishing', name: 'Booklet Finishing', description: 'Finishing options for booklets and handcrafted printed documents.' },
      { id: 'business-document-finishing', name: 'Business Document Finishing', description: 'Final presentation support for business reports, office files, and branded documentation.' }
    ]
  }
];
