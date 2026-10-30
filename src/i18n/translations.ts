import { Language } from './types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.works': 'Works',
    'nav.services': 'Services & Products',
    'nav.quote': 'Instant Quote',
    'nav.vectorLab': 'Vector Lab',
    'nav.disciplines': 'Disciplines',
    'nav.studio': 'Studio',
    'nav.startProject': 'Instant Quote',
    'nav.inquire': 'Inquire',
    'nav.contact': 'Contact',

    // Hero
    'hero.kicker': 'Brand Identity & Vector Systems',
    'hero.atelier': 'BARACK DESIGN ATELIER',
    'hero.status': 'EST. 2024 · COMMISSIONS OPEN',
    'hero.spec': 'GEOMETRIC PRECISION ATELIER',
    'hero.headlineStart': 'Precision Vector Systems &',
    'hero.headlineAccent': 'Brand Architecture',
    'hero.lead':
      'BARACK DESIGN is an independent studio specializing in bespoke brand identity systems, mathematical vector typography, and tactile packaging craft for founders, luxury maisons, and progressive institutions globally.',
    'hero.ctaQuote': 'Instant Quote & Configuration',
    'hero.ctaWorks': 'Explore Selected Works',
    'hero.viewLuster': 'Luster',
    'hero.viewGrid': 'Bézier Grid',
    'hero.emblemCraft': 'STUDIO EMBLEM CRAFT',
    'hero.tension': 'BÉZIER TENSION',
    'hero.sealDesc': 'ORIGINAL SEAL · MATTE OBSIDIAN & PLATINUM',
    'hero.curvature': 'MATHEMATICAL CURVATURE',
    'hero.metricAccolades': 'Global Design Accolades',
    'hero.metricBespoke': 'Bespoke Vector Engineering',
    'hero.metricGrid': 'Fluid Desktop Precision',
    'hero.metricSprint': 'Average Direction Sprint',

    // Works & Portfolio
    'works.tag': '02. PORTFOLIO & ARCHIVE',
    'works.title': 'Selected Works & Case Studies',
    'works.subtitle':
      'A curated retrospective of bespoke vector marks, luxury packaging suites, and editorial monographs. Provenance is rigorously classified between actual studio commissions and licensed conceptual references.',
    'works.filterAll': 'All Projects (6)',
    'works.filterActual': 'Actual Commissions',
    'works.filterPackaging': 'Packaging & Foil',
    'works.filterTypography': 'Vector Typography',
    'works.filterIdentity': 'Brand Systems',
    'works.filterEditorial': 'Editorial & Monograph',
    'works.provenanceActual': 'ORIGINAL BARACK DESIGN COMMISSION',
    'works.provenanceLicensed': 'LICENSED REFERENCE PHOTOGRAPHY',
    'works.inspect': 'Explore Case Study & Gallery',
    'works.showing': 'SHOWING',
    'works.of': 'OF',
    'works.works': 'WORKS',

    // Services Catalog
    'services.tag': '03. BESPOKE PRODUCTION & SERVICES',
    'services.title': 'Dedicated Services & Products',
    'services.subtitle':
      'Commercial-grade production infrastructure engineered for fashion brands, studios, and luxury enterprises. From high-definition DTF heat transfers to CNC brass seal embossers.',
    'services.filterAll': 'All Offerings (8)',
    'services.filterTransfers': 'DTF Transfers',
    'services.filterApparel': 'Apparel & Clothing',
    'services.filterDrinkware': 'Mugs & Cups',
    'services.filterPrint': 'Flyers, Stamps & Banners',
    'services.filterDesign': 'Graphic Design & Prepress',
    'services.startAt': 'STARTING AT',
    'services.inspectSpecs': 'Inspect Specs & Order',
    'services.bundleTitle': 'Need Multi-Discipline Production Bundling?',
    'services.bundleSubtitle':
      'We coordinate full turnkey product drops: custom streetwear hoodies + DTF gang sheets + ceramic mugs + laser-etched tumblers + foiled flyer suites packaged together under unified brand art direction.',
    'services.bundleCta': 'Request Multi-Product Quote',

    // Vector Lab
    'lab.tag': '04. MATHEMATICAL LABORATORY',
    'lab.title': 'Interactive Vector Engine',
    'lab.subtitle':
      'Experience the mathematical curvature governing the BARACK DESIGN emblem. Adjust the cubic Bézier control tangents, pen nib orientation, and stroke geometry.',
    'lab.reset': 'Reset Vector Invariants',
    'lab.viewport': 'CANVAS VIEWPORT · 400 × 400',
    'lab.tolerance': 'TOLERANCE: 0.001MM',
    'lab.arcTension': 'BÉZIER ARC TENSION',
    'lab.nibAngle': 'PEN NIB PITCH',
    'lab.strokeWeight': 'HAIRLINE WEIGHT',
    'lab.copy': 'Copy Path',
    'lab.copied': 'Copied',

    // Disciplines
    'disciplines.tag': '05. STUDIO CAPABILITIES',
    'disciplines.title': 'Four Core Disciplines',
    'disciplines.subtitle':
      'Every commission is treated as a mastercraft engagement. We do not assemble templates; we architect bespoke visual language from foundational geometry.',
    'disciplines.commission': 'Commission Studio Discipline',

    // Studio Credo
    'credo.tag': '06. PHILOSOPHY & ETHOS',
    'credo.title': 'Form Governed by Mathematical Restraint',
    'credo.testimonials': 'COMMISSION TESTIMONIALS',

    // Scope Estimator
    'scope.tag': '07. CLIENT ONBOARDING',
    'scope.title': 'Commission Scope Matrix',
    'scope.subtitle':
      'Configure your deliverables to preview the recommended sprint timeline and scope structure before opening formal dialogue.',
    'scope.deliverables': '1. SELECT REQUIRED DELIVERABLES',
    'scope.cadence': '2. TARGET SPRINT CADENCE',
    'scope.standard': 'Standard Sprint (4–6 Weeks)',
    'scope.accelerated': 'Accelerated Sprint (2–3 Weeks)',
    'scope.summary': 'SCOPE SUMMARY',
    'scope.proceed': 'Initiate Dialogue with Scope',

    // Quote Wizard
    'quote.kicker': 'INTEGRATED ESTIMATION WORKBENCH',
    'quote.title': 'Production Quotation & Prepress Order',
    'quote.subtitle':
      'Configure multi-discipline manufacturing parameters, verify vector prepress requirements, and generate an instant itemized quotation with real-time volume tier pricing.',
    'quote.step1': 'Select Manufacturing Service or Product',
    'quote.step2': 'Configure Specifications & Finishes',
    'quote.step3': 'Volume Quantity & Tier Discount',
    'quote.step4': 'Artwork Asset & Prepress Verification',
    'quote.step5': 'Collection & Delivery Logistics',
    'quote.step6': 'Quotation Review & Prepress Confirmation',
    'quote.prev': 'Previous Step',
    'quote.next': 'Continue to',
    'quote.submit': 'Submit Quotation & Generate Specimen ID',
    'quote.refGenerated': 'Quotation Reference Generated',
    'quote.print': 'Print Specification Summary',
    'quote.return': 'Return to Studio',
    'quote.pickup': 'Atelier Collection (Complimentary)',
    'quote.courier': 'Insured Express Courier ($25.00)',
    'quote.rush': 'PRIORITY RUSH DISPATCH (+24-48H)',
    'quote.subtotal': 'SUBTOTAL',
    'quote.shipping': 'SHIPPING',
    'quote.total': 'ESTIMATED TOTAL',

    // Footer
    'footer.thesis':
      'Independent digital design studio engineering bespoke brand identity systems, vector typography, and tactile digital products with meticulous mathematical precision.',
    'footer.clock': 'STUDIO CLOCK',
    'footer.index': 'Index',
    'footer.newCommissions': 'New Commissions',
    'footer.commissionsText':
      'Accepting select brand identity commissions and design engineering partnerships for the upcoming design quarter.',
    'footer.initiate': 'Initiate Studio Dialogue',
    'footer.rights': 'ALL RIGHTS RESERVED',
    'footer.grid': 'PRECISION GRID 1440PX',

    // Common & Detail Pages
    'common.returnToStudio': 'RETURN TO STUDIO',
    'common.returnToCatalog': 'RETURN TO CATALOG',
    'common.returnToPortfolio': 'RETURN TO PORTFOLIO GRID',
    'common.provenanceClassification': 'PROVENANCE CLASSIFICATION',
    'common.authenticProductionCraft': 'AUTHENTIC PRODUCTION CRAFT',
    'common.moq': 'MOQ',
    'common.productionSpecifications': 'PRODUCTION SPECIFICATIONS',
    'common.pricingMatrix': 'VOLUME PRICING MATRIX',
    'common.configureAndInquire': 'Configure & Request Quote',
    'common.verifiedCommissionDesc': 'Official verified commission engineered by BARACK DESIGN studio',
    'common.licensedStockDesc': 'Licensed stock & conceptual design reference benchmark',
    'common.exploreGallery': 'Explore Case Study & Gallery',
    'common.inspectBlueprint': 'Inspect Backend Integration Blueprint',
    'common.prototypeEngine': 'PROTOTYPE QUOTE ENGINE',

    // Inquiry Modal
    'inquiry.kicker': 'STUDIO COMMISSION · 2026/2027',
    'inquiry.title': 'Initiate Studio Dialogue',
    'inquiry.subtitle': 'Share brief project coordinates. The studio reviews and responds within 24 business hours.',
    'inquiry.projectDiscipline': 'Project Discipline',
    'inquiry.budgetRange': 'Anticipated Budget Range',
    'inquiry.name': 'Your Name',
    'inquiry.email': 'Work Email',
    'inquiry.scopeOverview': 'Scope Overview',
    'inquiry.cancel': 'Cancel',
    'inquiry.submit': 'Submit Commission',
    'inquiry.receivedTitle': 'Transmission Received',
    'inquiry.returnToStudio': 'Return to Studio',
  },

  rw: {
    // Nav
    'nav.works': 'Imirimo',
    'nav.services': 'Serivisi n\'Ibicuruzwa',
    'nav.quote': 'Igiciro Ako Kanya',
    'nav.vectorLab': 'Labo ya Vekitori',
    'nav.disciplines': 'Inzego z\'Ubuhanga',
    'nav.studio': 'Ateliye',
    'nav.startProject': 'Igiciro Ako Kanya',
    'nav.inquire': 'Kubaza',
    'nav.contact': 'Twandikire',

    // Hero
    'hero.kicker': 'Imiterere y\'Ikirango n\'Uburyo bwa Vekitori',
    'hero.atelier': 'ATELIYE YA BARACK DESIGN',
    'hero.status': 'YATANGIYE 2024 · IMIRIMO IRAFUNGURE',
    'hero.spec': 'ATELIYE Y\'UBUHANGA NYABWO',
    'hero.headlineStart': 'Uburyo bwa Vekitori Isukuye n\'',
    'hero.headlineAccent': 'Ubwubatsi bw\'Ikirango',
    'hero.lead':
      'BARACK DESIGN ni ateliye yigenga yihariye mu gukora ibirango byihariye, inyandiko zishingiye ku mibare n\'uburyo bwo gupfunyika bugezweho ku bakiriya n\'ibigo bikomeye ku isi.',
    'hero.ctaQuote': 'Igiciro Ako Kanya & Guhitamo',
    'hero.ctaWorks': 'Reba Imirimo Yatoranyijwe',
    'hero.viewLuster': 'Ubwiza nyabwo',
    'hero.viewGrid': 'Urubuga rwa Bézier',
    'hero.emblemCraft': 'IKIRANGO CY\'UMWIMERERE',
    'hero.tension': 'INGUFUMI YA BÉZIER',
    'hero.sealDesc': 'IKIRANGO NYAKURI · UMUKARA W\'ISUKU & PLATINE',
    'hero.curvature': 'IMIBEREHO Y\'IMIRONGO Y\'IMBARE',
    'hero.metricAccolades': 'Ibihembo Mpuzamahanga by\'Igishushanyo',
    'hero.metricBespoke': 'Ubuhanga bwa Vekitori bw\'Umwimerere',
    'hero.metricGrid': 'Imiterere Isukuye ya Mudasobwa',
    'hero.metricSprint': 'Igihe cyo Gusoza Umushinga',

    // Works & Portfolio
    'works.tag': '02. UBUBIKO BW\'IMIRIMO',
    'works.title': 'Imirimo Yatoranyijwe & Inyandiko z\'Ubushakashatsi',
    'works.subtitle':
      'Urutonde rw\'ibirango bya vekitori, ibipfunyika by\'akataraboneka, n\'ibitabo by\'ubwubatsi. Inkomoko igaragaza neza imishinga yakorewe abakiriya n\'inyandiko z\'icyitegererezo.',
    'works.filterAll': 'Imishinga Yose (6)',
    'works.filterActual': 'Ibyakorewe Abakiriya Nyabo',
    'works.filterPackaging': 'Gupfunyika & Ifoili',
    'works.filterTypography': 'Inyandiko za Vekitori',
    'works.filterIdentity': 'Ibirango Rusange',
    'works.filterEditorial': 'Ibitabo & Imyandikire',
    'works.provenanceActual': 'UMWIMERERE WA BARACK DESIGN',
    'works.provenanceLicensed': 'IFOTO Y\'ICYITEGEREREZO IFITE URUHUSHYA',
    'works.inspect': 'Fungura Amashusho yose n\'Inyandiko',
    'works.showing': 'HAGARAGAJWE',
    'works.of': 'KURI',
    'works.works': 'IMIRIMO',

    // Services Catalog
    'services.tag': '03. SERIVISI NYA NYABWO & IBICURUZWA',
    'services.title': 'Serivisi zihariye n\'Ibicuruzwa',
    'services.subtitle':
      'Ibikoresho by\'inganda byateguriwe inzu z\'imyenda, amakampani, n\'ibigo bikomeye. Uhereye ku gucapa DTF kugeza ku bimenyetso bya kanoheje by\'umuringa.',
    'services.filterAll': 'Ibicuruzwa Byose (8)',
    'services.filterTransfers': 'Gucapa DTF',
    'services.filterApparel': 'Imyenda & Imyenda y\'Ubuziranenge',
    'services.filterDrinkware': 'Ibikombe by\'Icyayi n\'Amazi',
    'services.filterPrint': 'Impapuro, Sitampu n\'Ibyapa',
    'services.filterDesign': 'Gushushanya & Prepress',
    'services.startAt': 'BIHEREYE KURI',
    'services.inspectSpecs': 'Reba Ibisobanuro & Tegeka',
    'services.bundleTitle': 'Ukeneye Gukomatanya Ibicuruzwa Byinshi?',
    'services.bundleSubtitle':
      'Duhuza umushinga wose: imyenda y\'ubwoko bwa hoodie + impapuro za DTF + ibikombe bya ceramic + tumblers zanditseho na laser munsi y\'ubuyobozi bw\'ubuhanzi bumwe.',
    'services.bundleCta': 'Saba Igiciro cy\'Ibicuruzwa Byinshi',

    // Vector Lab
    'lab.tag': '04. LABORATWARI Y\'IMIBARE',
    'lab.title': 'Mudasobwa Yikora ya Vekitori',
    'lab.subtitle':
      'Iyumvire imibare igenga ikirango cya BARACK DESIGN. Hindura ingufu za Bézier, icyerekezo cy\'ikaramu, n\'ubunini bw\'umurongo.',
    'lab.reset': 'Subiza ku Miterere y\'Intangiriro',
    'lab.viewport': 'ISURA Y\'IKIRANGO · 400 × 400',
    'lab.tolerance': 'UBUSUGIRE: 0.001MM',
    'lab.arcTension': 'INGUFU Z\'UMURONGO WA BÉZIER',
    'lab.nibAngle': 'ICYEREKEZO CY\'IKARAMU',
    'lab.strokeWeight': 'UBUNINI BW\'UMURONGO',
    'lab.copy': 'Koporora Umurongo',
    'lab.copied': 'Byakoporowe',

    // Disciplines
    'disciplines.tag': '05. UBUHANGA BWA ATELIYE',
    'disciplines.title': 'Inzego Enye z\'Ubuhanga',
    'disciplines.subtitle':
      'Buri mushinga ufatwa nk\'ubuhanga budasanzwe. Ntidukoresha ibiteguwe mbere; twubaka ururimi rushya rw\'amashusho guhera ku mibare nyakuri.',
    'disciplines.commission': 'Saba Umushinga w\'Ubuhanga',

    // Studio Credo
    'credo.tag': '06. IMYITWARIRE N\'INDANGAGACIRO',
    'credo.title': 'Isura Iyobowe n\'Imibare Isukuye',
    'credo.testimonials': 'UBUHAMYA BW\'ABAKIRIYA',

    // Scope Estimator
    'scope.tag': '07. ITANGIRIRO RY\'UMUKIRIYA',
    'scope.title': 'Imbonerahamwe y\'Ibyifuzo',
    'scope.subtitle':
      'Hitamo ibyo ukeneye kugira ngo ubone igihe kigenwe n\'imiterere y\'umushinga mbere yo gutangira ibiganiro.',
    'scope.deliverables': '1. HITAMO SERIVISI UKENEYE',
    'scope.cadence': '2. HITAMO UMUVIEGO W\'IGIHE',
    'scope.standard': 'Igihe Gisanzwe (Ibyumweru 4–6)',
    'scope.accelerated': 'Igihe Cyihuse (Ibyumweru 2–3)',
    'scope.summary': 'INCAMAKE Y\'IBIKENEWE',
    'scope.proceed': 'Tangira Ibiganiro ku Byatoranyijwe',

    // Quote Wizard
    'quote.kicker': 'MUDASOBWA YO KUBARA IBICIRO',
    'quote.title': 'Gusaba Igiciro cyo Gukora & Prepress',
    'quote.subtitle':
      'Hitamo ibipimo byo gukora, suzuma ibisabwa kuri vekitori, ubone igiciro ako kanya gishingiye ku bwinshi bw\'ibyo ukeneye.',
    'quote.step1': 'Hitamo Serivisi cyangwa Igicuruzwa',
    'quote.step2': 'Guhitamo Ibisobanuro & Imirangirize',
    'quote.step3': 'Ingano & Igabanyirizwa ry\'Ubwinshi',
    'quote.step4': 'Kwinjiza Dosiye & Isuzuma rya Prepress',
    'quote.step5': 'Uburyo bwo Kwakira cyangwa Kugezwaho',
    'quote.step6': 'Isuzuma rya Nyuma & Kwemeza',
    'quote.prev': 'Intambwe Ibanza',
    'quote.next': 'Komeza kuri',
    'quote.submit': 'Ohereza Igiciro & Fata Nimero',
    'quote.refGenerated': 'Nimero y\'Igiciro Yemejwe',
    'quote.print': 'Gucapa Incamake y\'Ibiciro',
    'quote.return': 'Subira muri Ateliye',
    'quote.pickup': 'Gufatira muri Ateliye (Ubuntu)',
    'quote.courier': 'Kugezwaho n\'Ubutumwa Bwihuse ($25.00)',
    'quote.rush': 'UBURYO BW\'IHUSE CYANWE (+24-48H)',
    'quote.subtotal': 'IGITERANYO CY\'IBICURUZWA',
    'quote.shipping': 'IKIGUZI CYO KUGEZAHO',
    'quote.total': 'IGITERANYO CYOSE HAMWE',

    // Footer
    'footer.thesis':
      'Ateliye yigenga y\'ubuhanzi bw\'ikoranabuhanga ikora ibirango byihariye, inyandiko za vekitori, n\'ibikoresho bifatika ifite ubuhanga bushingiye ku mibare nyakuri.',
    'footer.clock': 'ISAA YA ATELIYE',
    'footer.index': 'Urutonde',
    'footer.newCommissions': 'Imishinga Mishya',
    'footer.commissionsText':
      'Turakira imishinga micye yatoranyijwe y\'ibirango n\'ubufatanye mu gihembwe gitaha cy\'igishushanyo.',
    'footer.initiate': 'Tangira Ibiganiro na Ateliye',
    'footer.rights': 'UBURENGANZIRA BWBOSE BWUGAMIWE',
    'footer.grid': 'IMBONERAHAMWE NYAKURI YA 1440PX',

    // Common & Detail Pages
    'common.returnToStudio': 'SUBIRA MURI ATELIYE',
    'common.returnToCatalog': 'SUBIRA KU RUTONDE RW\'IBICURUZWA',
    'common.returnToPortfolio': 'SUBIRA KU RUBUGA RW\'IMIRIMO',
    'common.provenanceClassification': 'ICYICIRO CY\'INKOMOKO',
    'common.authenticProductionCraft': 'UBUHANGA NYABWO BWO GUKORA',
    'common.moq': 'INGANO NTO IKORWA',
    'common.productionSpecifications': 'IBISOBANURO BYO GUKORA',
    'common.pricingMatrix': 'IMBONERAHAMWE Y\'IBICIRO BY\'UBWINSHI',
    'common.configureAndInquire': 'Guhitamo & Saba Igiciro',
    'common.verifiedCommissionDesc': 'Umushinga wemewe kandi wakozwe na ateliye ya BARACK DESIGN',
    'common.licensedStockDesc': 'Ifoto ifite uruhushya n\'icyitegererezo cy\'igishushanyo',
    'common.exploreGallery': 'Reba Amashusho Yose & Ibisobanuro',
    'common.inspectBlueprint': 'Reba Ikoranabuhanga rya Backend',
    'common.prototypeEngine': 'ICYITEGEREREZO CYO KUBARA IBICIRO',

    // Inquiry Modal
    'inquiry.kicker': 'UMUSHINGA WA ATELIYE · 2026/2027',
    'inquiry.title': 'Tangira Ibiganiro na Ateliye',
    'inquiry.subtitle': 'Tanga incamake y\'umushinga. Ateliye irasuzuma kandi igusubize mu masaha 24 y\'akazi.',
    'inquiry.projectDiscipline': 'Ubwoko bw\'Umushinga',
    'inquiry.budgetRange': 'Ingengo y\'Imari Itiganijwe',
    'inquiry.name': 'Izina Ryawe',
    'inquiry.email': 'Imeli y\'Akazi',
    'inquiry.scopeOverview': 'Incamake y\'Ibyifuzo',
    'inquiry.cancel': 'Kureka',
    'inquiry.submit': 'Ohereza Umushinga',
    'inquiry.receivedTitle': 'Ubutumwa Bwakiriwe',
    'inquiry.returnToStudio': 'Subira muri Ateliye',
  },

  fr: {
    // Nav
    'nav.works': 'Réalisations',
    'nav.services': 'Services & Produits',
    'nav.quote': 'Devis Immédiat',
    'nav.vectorLab': 'Labo Vectoriel',
    'nav.disciplines': 'Disciplines',
    'nav.studio': 'Atelier',
    'nav.startProject': 'Devis Immédiat',
    'nav.inquire': 'Demande',
    'nav.contact': 'Contact',

    // Hero
    'hero.kicker': 'Identité de Marque & Systèmes Vectoriels',
    'hero.atelier': 'ATELIER BARACK DESIGN',
    'hero.status': 'FONDÉ EN 2024 · COMMISSIONS OUVERTES',
    'hero.spec': 'ATELIER DE PRÉCISION GÉOMÉTRIQUE',
    'hero.headlineStart': 'Systèmes Vectoriels de Précision &',
    'hero.headlineAccent': 'Architecture de Marque',
    'hero.lead':
      'BARACK DESIGN est un studio indépendant spécialisé dans les systèmes d\'identité de marque sur mesure, la typographie vectorielle mathématique et le packaging tactile pour fondateurs, maisons de luxe et institutions culturelles mondiales.',
    'hero.ctaQuote': 'Devis Immédiat & Configuration',
    'hero.ctaWorks': 'Explorer les Réalisations',
    'hero.viewLuster': 'Finition Réelle',
    'hero.viewGrid': 'Grille Bézier',
    'hero.emblemCraft': 'SCEAU OFFICIEL DE L\'ATELIER',
    'hero.tension': 'TENSION DE BÉZIER',
    'hero.sealDesc': 'SCEAU ORIGINAL · OBSIDIENNE MATE & PLATINE',
    'hero.curvature': 'COURBURE MATHÉMATIQUE',
    'hero.metricAccolades': 'Distinctions Internationales',
    'hero.metricBespoke': 'Ingénierie Vectorielle Sur Mesure',
    'hero.metricGrid': 'Grille Fluide Précise 1440px',
    'hero.metricSprint': 'Délai Moyen de Direction Artistique',

    // Works & Portfolio
    'works.tag': '02. PORTFOLIO & ARCHIVES',
    'works.title': 'Travaux Sélectionnés & Monographies',
    'works.subtitle':
      'Une rétrospective organisée de symboles vectoriels sur mesure, de coffrets de luxe et de monographies éditoriales. La provenance est rigoureusement classée entre commandes réelles et références conceptuelles.',
    'works.filterAll': 'Tous les Projets (6)',
    'works.filterActual': 'Commandes Réelles',
    'works.filterPackaging': 'Packaging & Dorure',
    'works.filterTypography': 'Typographie Vectorielle',
    'works.filterIdentity': 'Systèmes d\'Identité',
    'works.filterEditorial': 'Édition & Monographies',
    'works.provenanceActual': 'COMMISSION ORIGINALE BARACK DESIGN',
    'works.provenanceLicensed': 'PHOTOGRAPHIE DE RÉFÉRENCE SOUS LICENCE',
    'works.inspect': 'Explorer l\'Étude & la Galerie',
    'works.showing': 'AFFICHAGE DE',
    'works.of': 'SUR',
    'works.works': 'PROJETS',

    // Services Catalog
    'services.tag': '03. PRODUCTION & SERVICES SUR MESURE',
    'services.title': 'Services Dédiés & Lignes de Produits',
    'services.subtitle':
      'Infrastructure de production de qualité industrielle conçue pour les marques de mode, les studios et les maisons prestigieuses. Des transferts thermiques DTF haute définition aux sceaux en laiton usinés CNC.',
    'services.filterAll': 'Toutes les Offres (8)',
    'services.filterTransfers': 'Transferts DTF',
    'services.filterApparel': 'Vêtements & Streetwear',
    'services.filterDrinkware': 'Mugs & Gobelets',
    'services.filterPrint': 'Flyers, Tampons & Bannières',
    'services.filterDesign': 'Design Graphique & Prépresse',
    'services.startAt': 'À PARTIR DE',
    'services.inspectSpecs': 'Consulter les Spécifications & Commander',
    'services.bundleTitle': 'Besoin d\'un Forfait Multi-Produits?',
    'services.bundleSubtitle':
      'Nous coordonnons des lancements complets clé en main : sweats à capuche personnalisés + planches DTF + mugs en céramique + verres gravés au laser sous une direction artistique unifiée.',
    'services.bundleCta': 'Demander un Devis Multi-Produits',

    // Vector Lab
    'lab.tag': '04. LABORATOIRE MATHÉMATIQUE',
    'lab.title': 'Moteur Vectoriel Interactif',
    'lab.subtitle':
      'Découvrez la courbure mathématique régissant l\'emblème BARACK DESIGN. Ajustez les tangentes cubiques de Bézier, l\'inclinaison de la plume et la géométrie des traits.',
    'lab.reset': 'Réinitialiser les Invariants',
    'lab.viewport': 'ZONE D\'AFFICHAGE · 400 × 400',
    'lab.tolerance': 'TOLÉRANCE: 0.001MM',
    'lab.arcTension': 'TENSION D\'ARC BÉZIER',
    'lab.nibAngle': 'INCLINAISON DE LA PLUME',
    'lab.strokeWeight': 'ÉPAISSEUR DU TRAIT',
    'lab.copy': 'Copier le Tracé',
    'lab.copied': 'Copié',

    // Disciplines
    'disciplines.tag': '05. CAPACITÉS DU STUDIO',
    'disciplines.title': 'Quatre Disciplines Fondamentales',
    'disciplines.subtitle':
      'Chaque commande est abordée comme un chef-d\'œuvre. Nous ne faisons aucun assemblage générique ; nous architecturons un langage visuel unique issu de la géométrie pure.',
    'disciplines.commission': 'Commander une Discipline',

    // Studio Credo
    'credo.tag': '06. PHILOSOPHIE & ÉTHIQUE',
    'credo.title': 'La Forme Gouvernée par la Rigueur Mathématique',
    'credo.testimonials': 'TÉMOIGNAGES DE COMMANDITAIRES',

    // Scope Estimator
    'scope.tag': '07. ACCUEIL CLIENT',
    'scope.title': 'Matrice de Cadrage du Projet',
    'scope.subtitle':
      'Configurez vos livrables pour prévisualiser le calendrier recommandé et la structure du sprint avant d\'ouvrir un dialogue formel.',
    'scope.deliverables': '1. SÉLECTIONNEZ LES LIVRABLES REQUIS',
    'scope.cadence': '2. CADENCE DU SPRINT CIBLÉ',
    'scope.standard': 'Sprint Standard (4–6 Semaines)',
    'scope.accelerated': 'Sprint Accéléré (2–3 Semaines)',
    'scope.summary': 'RÉSUMÉ DU PÉRIMÈTRE',
    'scope.proceed': 'Ouvrir le Dialogue avec ce Périmètre',

    // Quote Wizard
    'quote.kicker': 'ATELIER D\'ESTIMATION INTÉGRÉ',
    'quote.title': 'Devis de Production & Commande Prépresse',
    'quote.subtitle':
      'Configurez vos paramètres de fabrication, vérifiez les normes prépresse vectorielles et obtenez une estimation détaillée immédiate avec remises de volume en temps réel.',
    'quote.step1': 'Sélectionnez le Service ou Produit',
    'quote.step2': 'Configuration & Finitions Spéciales',
    'quote.step3': 'Volume de Quantité & Remises par Palier',
    'quote.step4': 'Fichier Graphique & Vérification Prépresse',
    'quote.step5': 'Logistique de Retrait & Expédition',
    'quote.step6': 'Vérification du Devis & Confirmation',
    'quote.prev': 'Étape Précédente',
    'quote.next': 'Continuer vers',
    'quote.submit': 'Soumettre le Devis & Générer l\'ID',
    'quote.refGenerated': 'Référence de Devis Générée',
    'quote.print': 'Imprimer la Fiche de Spécifications',
    'quote.return': 'Retourner au Studio',
    'quote.pickup': 'Retrait à l\'Atelier (Gratuit)',
    'quote.courier': 'Coursier Express Suivi Assuré (25,00 $)',
    'quote.rush': 'EXPÉDITION D\'URGENCE PRIORITAIRE (+24-48H)',
    'quote.subtotal': 'SOUS-TOTAL',
    'quote.shipping': 'EXPÉDITION',
    'quote.total': 'TOTAL ESTIMÉ',

    // Footer
    'footer.thesis':
      'Studio de design indépendant concevant des systèmes d\'identité de marque sur mesure, de la typographie vectorielle et des produits physiques d\'une grande précision mathématique.',
    'footer.clock': 'HORLOGE DU STUDIO',
    'footer.index': 'Index',
    'footer.newCommissions': 'Nouvelles Commandes',
    'footer.commissionsText':
      'Acceptation de mandats d\'identité de marque et de partenariats de direction artistique pour le prochain trimestre.',
    'footer.initiate': 'Initier un Dialogue avec l\'Atelier',
    'footer.rights': 'TOUS DROITS RÉSERVÉS',
    'footer.grid': 'GRILLE DE PRÉCISION 1440PX',

    // Common & Detail Pages
    'common.returnToStudio': 'RETOURNER AU STUDIO',
    'common.returnToCatalog': 'RETOURNER AU CATALOGUE',
    'common.returnToPortfolio': 'RETOURNER À LA GRILLE DE PROJETS',
    'common.provenanceClassification': 'CLASSIFICATION DE PROVENANCE',
    'common.authenticProductionCraft': 'SAVOIR-FAIRE DE FABRICATION AUTHENTIQUE',
    'common.moq': 'QUANTITÉ MINIMALE',
    'common.productionSpecifications': 'SPÉCIFICATIONS TECHNIQUES',
    'common.pricingMatrix': 'GRILLE TARIFAIRE DÉGRESSIVE',
    'common.configureAndInquire': 'Configurer & Demander un Devis',
    'common.verifiedCommissionDesc': 'Commande officielle et vérifiée réalisée par l\'atelier BARACK DESIGN',
    'common.licensedStockDesc': 'Photographie sous licence et référence de design conceptuel',
    'common.exploreGallery': 'Explorer l\'Étude & la Galerie',
    'common.inspectBlueprint': 'Consulter l\'Architecture Backend',
    'common.prototypeEngine': 'MOTEUR DE DEVIS PROTOTYPE',

    // Inquiry Modal
    'inquiry.kicker': 'COMMISSION ATELIER · 2026/2027',
    'inquiry.title': 'Initier un Dialogue avec l\'Atelier',
    'inquiry.subtitle': 'Partagez vos coordonnées de projet. L\'atelier étudie votre demande sous 24 heures ouvrées.',
    'inquiry.projectDiscipline': 'Discipline du Projet',
    'inquiry.budgetRange': 'Fourchette Budgétaire Estimée',
    'inquiry.name': 'Votre Nom',
    'inquiry.email': 'Email Professionnel',
    'inquiry.scopeOverview': 'Aperçu du Cahier des Charges',
    'inquiry.cancel': 'Annuler',
    'inquiry.submit': 'Soumettre la Commande',
    'inquiry.receivedTitle': 'Transmission Reçue',
    'inquiry.returnToStudio': 'Retourner au Studio',
  },
};
