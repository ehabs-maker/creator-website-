const i18n = {
  lang: localStorage.getItem('creator-lang') || 'fr',

  t: {
    'nav.about':        { fr: 'À propos',    en: 'About' },
    'nav.expertises':   { fr: 'Expertises',  en: 'Expertise' },
    'nav.realisations': { fr: 'Réalisations',en: 'Projects' },
    'nav.contact':      { fr: 'Contact',     en: 'Contact' },
    'nav.cta':          { fr: 'Nous contacter', en: 'Contact us' },
    'footer.copy':      { fr: '© 2025 CREATOR. Guédiawaye, Sénégal. Au service de la santé animale dans le monde.', en: '© 2025 CREATOR. Guédiawaye, Senegal. Serving animal health worldwide.' },

    /* ── INDEX ── */
    'idx.eyebrow': { fr: 'Cabinet de conseil en affaires réglementaires vétérinaires', en: 'Veterinary Regulatory Affairs Consulting Firm' },
    'idx.h1':      { fr: 'La conformité réglementaire, <em>moteur</em> de votre accès au marché mondial.', en: 'Regulatory compliance, the <em>engine</em> of your global market access.' },
    'idx.p':       { fr: 'CREATOR accompagne les entreprises de la santé animale — laboratoires, fabricants et porteurs de projets — dans la stratégie, l\'audit et l\'enregistrement de leurs produits vétérinaires, du dossier initial jusqu\'à l\'autorisation de mise sur le marché.', en: 'CREATOR supports animal health companies — laboratories, manufacturers and project owners — in the strategy, audit and registration of their veterinary products, from the initial file to market authorization.' },
    'idx.btn1':    { fr: 'Planifier un échange', en: 'Schedule a meeting' },
    'idx.btn2':    { fr: 'Découvrir nos expertises', en: 'Discover our expertise' },
    'idx.step1':   { fr: 'Stratégie & cadrage du projet', en: 'Strategy & project framing' },
    'idx.step2':   { fr: 'Audit & conformité réglementaire', en: 'Audit & regulatory compliance' },
    'idx.step3':   { fr: 'Enregistrement du produit', en: 'Product registration' },
    'idx.step4':   { fr: 'Accès au marché mondial', en: 'Global market access' },
    'idx.strip.p': { fr: 'Une expertise couvrant l\'ensemble des filières animales', en: 'Expertise covering all animal sectors' },
    'idx.sp1':     { fr: 'Équine',          en: 'Equine' },
    'idx.sp2':     { fr: 'Bovine',          en: 'Bovine' },
    'idx.sp3':     { fr: 'Canine & féline', en: 'Canine & feline' },
    'idx.sp4':     { fr: 'Avicole',         en: 'Poultry' },
    'idx.kicker1': { fr: 'À propos de CREATOR', en: 'About CREATOR' },
    'idx.h2.1':    { fr: 'Une excellence réglementaire au service d\'un impact global.', en: 'Regulatory excellence in service of a global impact.' },
    'idx.lead1':   { fr: 'Nous sommes le partenaire réglementaire des acteurs de la santé animale qui veulent avancer vite, sans jamais transiger sur la rigueur. Notre rôle : traduire des exigences réglementaires complexes en une trajectoire claire, de la stratégie initiale jusqu\'à l\'enregistrement effectif du produit.', en: 'We are the regulatory partner for animal health stakeholders who want to move fast without compromising on rigor. Our role: translate complex regulatory requirements into a clear roadmap, from initial strategy to effective product registration.' },
    'idx.stat1.b': { fr: '4',     en: '4' },
    'idx.stat1.s': { fr: 'Piliers d\'expertise', en: 'Pillars of expertise' },
    'idx.stat2.b': { fr: '5+',    en: '5+' },
    'idx.stat2.s': { fr: 'Dossiers AMM déposés', en: 'AMM files submitted' },
    'idx.stat3.b': { fr: 'UEMOA', en: 'UEMOA' },
    'idx.stat3.s': { fr: 'Zone d\'intervention', en: 'Area of operation' },
    'idx.btn3':    { fr: 'En savoir plus', en: 'Learn more' },
    'idx.lead2':   { fr: 'Chaque dossier réglementaire porte un enjeu de santé publique et un enjeu économique. CREATOR conçoit ses interventions comme un pont entre les deux : des méthodes rigoureuses, une lecture fine des cadres réglementaires locaux et internationaux, et un accompagnement de proximité pour chaque client.', en: 'Every regulatory file carries both a public health and an economic stake. CREATOR designs its interventions as a bridge between the two: rigorous methods, a fine reading of local and international regulatory frameworks, and close support for each client.' },
    'idx.founder.title': { fr: 'Fondateur & Directeur de CREATOR', en: 'Founder & Director of CREATOR' },
    'idx.founder.p':     { fr: 'Vétérinaire spécialisé en affaires réglementaires, fort d\'une expérience terrain en Afrique de l\'Ouest et d\'une maîtrise approfondie du cadre réglementaire UEMOA.', en: 'Veterinary specialist in regulatory affairs, with field experience in West Africa and in-depth mastery of the UEMOA regulatory framework.' },
    'idx.kicker2':  { fr: 'Nos expertises', en: 'Our expertise' },
    'idx.h2.2':     { fr: 'Quatre piliers, une seule ambition : sécuriser votre accès au marché.', en: 'Four pillars, one ambition: securing your market access.' },
    'idx.s1.h3':    { fr: 'Stratégie & accompagnement de projets', en: 'Strategy & project support' },
    'idx.s1.p':     { fr: 'Analyse de faisabilité, feuille de route réglementaire et pilotage jusqu\'à la mise en œuvre.', en: 'Feasibility analysis, regulatory roadmap and management through implementation.' },
    'idx.s2.h3':    { fr: 'Audit & conformité réglementaire', en: 'Audit & regulatory compliance' },
    'idx.s2.p':     { fr: 'Évaluation de vos dossiers et systèmes qualité pour anticiper les non-conformités.', en: 'Assessment of your files and quality systems to anticipate non-conformities.' },
    'idx.s3.h3':    { fr: 'Enregistrement des produits vétérinaires', en: 'Registration of veterinary products' },
    'idx.s3.p':     { fr: 'Constitution et dépôt de dossiers d\'AMM avec suivi jusqu\'à l\'obtention de l\'autorisation.', en: 'Preparation and submission of AMM files with follow-up until authorization.' },
    'idx.s4.h3':    { fr: 'Élaboration de dossiers de projet industriels', en: 'Industrial project file development' },
    'idx.s4.p':     { fr: 'Montage de projets agroalimentaires et industriels pour PME et porteurs de projets.', en: 'Development of agri-food and industrial projects for SMEs and project owners.' },
    'idx.btn4':     { fr: 'Voir toutes nos expertises', en: 'View all our expertise' },
    'idx.kicker3':  { fr: 'Notre approche', en: 'Our approach' },
    'idx.h2.3':     { fr: 'Une méthode exigeante, pensée pour la santé animale.', en: 'A rigorous method, designed for animal health.' },
    'idx.lead3':    { fr: 'Chaque mission s\'appuie sur les mêmes fondamentaux, quel que soit le marché ou la filière concernée.', en: 'Every mission is built on the same fundamentals, whatever the market or sector.' },
    'idx.v1.b':     { fr: 'Rigueur',       en: 'Rigor' },
    'idx.v1.p':     { fr: 'Des dossiers construits pour résister à l\'examen le plus strict des autorités.', en: 'Files built to withstand the strictest regulatory scrutiny.' },
    'idx.v2.b':     { fr: 'Clarté',        en: 'Clarity' },
    'idx.v2.p':     { fr: 'Une feuille de route réglementaire lisible, sans jargon inutile.', en: 'A readable regulatory roadmap, without unnecessary jargon.' },
    'idx.v3.b':     { fr: 'Proximité',     en: 'Proximity' },
    'idx.v3.p':     { fr: 'Un interlocuteur unique, disponible à chaque étape du projet.', en: 'A single point of contact, available at every stage of the project.' },
    'idx.v4.b':     { fr: 'Vision globale',en: 'Global vision' },
    'idx.v4.p':     { fr: 'Une lecture des marchés locaux et internationaux pour anticiper vos expansions.', en: 'A reading of local and international markets to anticipate your expansions.' },

    /* ── APROPOS ── */
    'ap.kicker.hero': { fr: 'À propos de CREATOR', en: 'About CREATOR' },
    'ap.h1':          { fr: 'Une excellence réglementaire au service d\'un impact global.', en: 'Regulatory excellence in service of a global impact.' },
    'ap.hero.p':      { fr: 'Fondé en 2025 à Guédiawaye, Sénégal, CREATOR est le partenaire réglementaire des acteurs de la santé animale en Afrique de l\'Ouest et au-delà.', en: 'Founded in 2025 in Guédiawaye, Senegal, CREATOR is the regulatory partner for animal health stakeholders in West Africa and beyond.' },
    'ap.kicker1':     { fr: 'Notre mission', en: 'Our mission' },
    'ap.h2.1':        { fr: 'La conformité réglementaire comme levier stratégique.', en: 'Regulatory compliance as a strategic lever.' },
    'ap.lead1':       { fr: 'CREATOR accompagne les laboratoires, fabricants et porteurs de projets de la santé animale dans la sécurisation de leur accès aux marchés — de la stratégie initiale jusqu\'à l\'obtention de l\'Autorisation de Mise sur le Marché.', en: 'CREATOR supports animal health laboratories, manufacturers and project owners in securing their market access — from initial strategy to obtaining Market Authorization.' },
    'ap.p1':          { fr: 'Notre conviction : la conformité réglementaire n\'est pas une contrainte administrative, mais un levier stratégique. Un dossier bien construit, une stratégie de dépôt bien cadrée et une veille réglementaire rigoureuse permettent de réduire les délais, d\'éviter les rejets, et d\'ouvrir la voie à de nouveaux marchés.', en: 'Our conviction: regulatory compliance is not an administrative constraint, but a strategic lever. A well-built file, a well-framed submission strategy, and rigorous regulatory monitoring reduce delays, avoid rejections, and open the way to new markets.' },
    'ap.stat1.b':     { fr: '2025', en: '2025' },
    'ap.stat1.s':     { fr: 'Année de création', en: 'Year founded' },
    'ap.stat2.b':     { fr: '4', en: '4' },
    'ap.stat2.s':     { fr: 'Filières animales', en: 'Animal sectors' },
    'ap.stat3.b':     { fr: 'UEMOA+', en: 'UEMOA+' },
    'ap.stat3.s':     { fr: 'Zone d\'intervention', en: 'Area of operation' },
    'ap.founder.title': { fr: 'Fondateur & Directeur Général', en: 'Founder & CEO' },
    'ap.founder.p1':    { fr: 'Vétérinaire spécialisé en affaires réglementaires, Dr Malick SENE a fondé CREATOR avec la conviction que les acteurs africains de la santé animale méritent un accompagnement réglementaire de haut niveau, ancré dans les réalités du continent.', en: 'Veterinary specialist in regulatory affairs, Dr Malick SENE founded CREATOR with the conviction that African animal health stakeholders deserve high-level regulatory support, rooted in the realities of the continent.' },
    'ap.founder.p2':    { fr: 'Sa maîtrise du cadre réglementaire UEMOA (Règlement N°02/2006/CM/UEMOA) et son expérience dans la constitution de dossiers d\'AMM complexes font de lui un interlocuteur de référence pour les entreprises qui souhaitent accéder aux marchés d\'Afrique de l\'Ouest.', en: 'His mastery of the UEMOA regulatory framework (Regulation N°02/2006/CM/UEMOA) and his experience in preparing complex AMM files make him a key contact for companies seeking access to West African markets.' },
    'ap.kicker2':     { fr: 'Champ d\'intervention', en: 'Scope of work' },
    'ap.h2.2':        { fr: 'De l\'Afrique de l\'Ouest au monde entier.', en: 'From West Africa to the entire world.' },
    'ap.lead2':       { fr: 'Nous intervenons principalement dans le cadre du Règlement N°02/2006/CM/UEMOA régissant le médicament vétérinaire en Afrique de l\'Ouest, avec une vocation résolument internationale.', en: 'We primarily operate within the framework of Regulation N°02/2006/CM/UEMOA governing veterinary medicines in West Africa, with a resolutely international vocation.' },
    'ap.zone1.title': { fr: 'Zone UEMOA', en: 'UEMOA Zone' },
    'ap.zone1.p':     { fr: 'Maîtrise approfondie du cadre réglementaire communautaire : dépôt auprès du Secrétariat Permanent du Comité Régional du Médicament Vétérinaire (CRMV), suivi avec la Commission de l\'UEMOA.', en: 'In-depth mastery of the community regulatory framework: submission to the Permanent Secretariat of the Regional Veterinary Medicine Committee (CRMV), follow-up with the UEMOA Commission.' },
    'ap.zone2.title': { fr: 'Vocation internationale', en: 'International scope' },
    'ap.zone2.p':     { fr: 'Accompagnement de laboratoires européens et internationaux souhaitant enregistrer leurs produits en Afrique, avec une lecture croisée des exigences locales et des standards internationaux.', en: 'Support for European and international laboratories wishing to register their products in Africa, with a cross-reading of local requirements and international standards.' },
    'ap.strip.p':     { fr: 'Filières animales couvertes par CREATOR', en: 'Animal sectors covered by CREATOR' },
    'ap.kicker3':     { fr: 'Nos valeurs', en: 'Our values' },
    'ap.h2.3':        { fr: 'Une méthode exigeante, pensée pour la santé animale.', en: 'A rigorous method, designed for animal health.' },
    'ap.lead3':       { fr: 'Chaque mission s\'appuie sur les mêmes fondamentaux, quel que soit le marché ou la filière concernée.', en: 'Every mission is built on the same fundamentals, whatever the market or sector.' },

    /* ── EXPERTISES ── */
    'ex.kicker.hero': { fr: 'Nos expertises', en: 'Our expertise' },
    'ex.h1':          { fr: 'Quatre piliers, une seule ambition.', en: 'Four pillars, one ambition.' },
    'ex.hero.p':      { fr: 'Sécuriser votre accès au marché, de la stratégie initiale jusqu\'à l\'enregistrement effectif de votre produit.', en: 'Securing your market access, from initial strategy to effective product registration.' },
    'ex.s1.h3':   { fr: 'Stratégie & accompagnement de projets', en: 'Strategy & project support' },
    'ex.s1.p':    { fr: 'Nous cadrons votre projet de santé animale dès l\'amont : analyse d\'opportunité, choix des marchés cibles, feuille de route réglementaire et pilotage jusqu\'à la mise en œuvre.', en: 'We frame your animal health project from the outset: opportunity analysis, target market selection, regulatory roadmap and management through implementation.' },
    'ex.s1.li1':  { fr: 'Diagnostic et faisabilité réglementaire', en: 'Regulatory diagnosis and feasibility' },
    'ex.s1.li2':  { fr: 'Analyse des marchés cibles et des cadres applicables', en: 'Analysis of target markets and applicable frameworks' },
    'ex.s1.li3':  { fr: 'Feuille de route multi-marchés', en: 'Multi-market roadmap' },
    'ex.s1.li4':  { fr: 'Pilotage de projet et coordination des parties prenantes', en: 'Project management and stakeholder coordination' },
    'ex.s1.li5':  { fr: 'Veille réglementaire ciblée', en: 'Targeted regulatory monitoring' },
    'ex.s2.h3':   { fr: 'Audit & conformité réglementaire', en: 'Audit & regulatory compliance' },
    'ex.s2.p':    { fr: 'Nous évaluons vos dossiers, vos systèmes qualité et vos process au regard des exigences en vigueur, pour anticiper les non-conformités avant qu\'elles ne deviennent des blocages.', en: 'We evaluate your files, quality systems and processes against current requirements, to anticipate non-conformities before they become obstacles.' },
    'ex.s2.li1':  { fr: 'Audit de dossiers techniques et administratifs', en: 'Audit of technical and administrative files' },
    'ex.s2.li2':  { fr: 'Audit de sites de fabrication', en: 'Manufacturing site audit' },
    'ex.s2.li3':  { fr: 'Identification des écarts et plans d\'action correctifs', en: 'Gap identification and corrective action plans' },
    'ex.s2.li4':  { fr: 'Mise en conformité documentaire', en: 'Documentary compliance' },
    'ex.s2.li5':  { fr: 'Suivi des évolutions réglementaires', en: 'Regulatory change monitoring' },
    'ex.s3.h3':   { fr: 'Enregistrement des produits vétérinaires', en: 'Registration of veterinary products' },
    'ex.s3.p':    { fr: 'Nous constituons et déposons vos dossiers d\'enregistrement auprès des autorités compétentes — notamment dans le cadre du Règlement N°02/2006/CM/UEMOA —, en assurant le suivi jusqu\'à l\'obtention de l\'AMM.', en: 'We prepare and submit your registration files to the competent authorities — particularly under Regulation N°02/2006/CM/UEMOA — ensuring follow-up until AMM is obtained.' },
    'ex.s3.li1':  { fr: 'Constitution de dossiers techniques complets', en: 'Preparation of complete technical files' },
    'ex.s3.li2':  { fr: 'Rédaction des parties administratives et réglementaires', en: 'Drafting of administrative and regulatory sections' },
    'ex.s3.li3':  { fr: 'Dépôt auprès du Secrétariat Permanent CRMV / Commission UEMOA', en: 'Submission to the CRMV Permanent Secretariat / UEMOA Commission' },
    'ex.s3.li4':  { fr: 'Suivi des demandes et réponses aux questions des autorités', en: 'Follow-up on requests and responses to authority questions' },
    'ex.s3.li5':  { fr: 'Maintien et renouvellement de l\'enregistrement post-AMM', en: 'Maintenance and renewal of post-AMM registration' },
    'ex.s4.h3':   { fr: 'Élaboration de dossiers de projet industriels', en: 'Industrial project file development' },
    'ex.s4.p':    { fr: 'Nous accompagnons les PME et porteurs de projets dans la structuration et la formalisation de leurs projets industriels, notamment dans le secteur agroalimentaire, pour faciliter leur financement et leur mise en œuvre.', en: 'We support SMEs and project owners in structuring and formalizing their industrial projects, particularly in the agri-food sector, to facilitate their financing and implementation.' },
    'ex.s4.li1':  { fr: 'Études de faisabilité et plans d\'affaires', en: 'Feasibility studies and business plans' },
    'ex.s4.li2':  { fr: 'Montage de dossiers de financement (banques, fonds, bailleurs)', en: 'Financing file preparation (banks, funds, donors)' },
    'ex.s4.li3':  { fr: 'Analyse du cadre réglementaire applicable à l\'activité', en: 'Analysis of the regulatory framework applicable to the activity' },
    'ex.s4.li4':  { fr: 'Accompagnement dans les démarches administratives', en: 'Support with administrative procedures' },
    'ex.s4.li5':  { fr: 'Structuration de projets agroalimentaires et industriels', en: 'Structuring of agri-food and industrial projects' },
    'ex.cta.h2':  { fr: 'Un projet ? Parlons-en.', en: 'A project? Let\'s talk.' },
    'ex.cta.p':   { fr: 'Décrivez-nous votre besoin : nous revenons vers vous avec une première lecture sous 48h.', en: 'Describe your need: we\'ll get back to you with an initial assessment within 48 hours.' },
    'ex.cta.btn': { fr: 'Planifier un échange', en: 'Schedule a meeting' },

    /* ── REALISATIONS ── */
    're.kicker.hero': { fr: 'Nos réalisations', en: 'Our projects' },
    're.h1':          { fr: 'Des dossiers concrets, des résultats mesurables.', en: 'Concrete files, measurable results.' },
    're.hero.p':      { fr: 'CREATOR a accompagné des clients internationaux et des entreprises locales dans des missions réglementaires et industrielles exigeantes.', en: 'CREATOR has supported international clients and local companies in demanding regulatory and industrial missions.' },
    're.kicker1':     { fr: 'Enregistrement de produits vétérinaires', en: 'Veterinary product registration' },
    're.h2.1':        { fr: 'Dossiers d\'AMM auprès de la Commission de l\'UEMOA.', en: 'AMM files submitted to the UEMOA Commission.' },
    're.chemi.h3':    { fr: '5 dossiers d\'AMM déposés auprès de la Commission de l\'UEMOA', en: '5 AMM files submitted to the UEMOA Commission' },
    're.chemi.p1':    { fr: 'CREATOR a accompagné Chemifarma S.p.A., laboratoire pharmaceutique vétérinaire italien, dans la constitution et le dépôt de 5 dossiers d\'Autorisation de Mise sur le Marché auprès du Secrétariat Permanent du Comité Régional du Médicament Vétérinaire (Commission de l\'UEMOA).', en: 'CREATOR supported Chemifarma S.p.A., an Italian veterinary pharmaceutical laboratory, in the preparation and submission of 5 Marketing Authorization files to the Permanent Secretariat of the Regional Veterinary Medicine Committee (UEMOA Commission).' },
    're.chemi.p2':    { fr: 'Les dossiers portent sur plusieurs classes thérapeutiques : <strong style="color:var(--gold-light)">antibiotiques</strong> (érythromycine, doxycycline, amoxicilline) et <strong style="color:var(--gold-light)">antiparasitaire</strong> (amprolium). Ces dossiers ont été officiellement reçus et enregistrés par la Direction du Médicament Vétérinaire de l\'UEMOA.', en: 'The files cover several therapeutic classes: <strong style="color:var(--gold-light)">antibiotics</strong> (erythromycin, doxycycline, amoxicillin) and <strong style="color:var(--gold-light)">antiparasitic</strong> (amprolium). These files were officially received and registered by the UEMOA Directorate of Veterinary Medicines.' },
    're.kicker2':     { fr: 'Dossiers de projet industriels', en: 'Industrial project files' },
    're.h2.2':        { fr: 'Accompagnement de PME et porteurs de projets.', en: 'Support for SMEs and project owners.' },
    're.diallo.h3':   { fr: 'Dossier de projet industriel', en: 'Industrial project file' },
    're.diallo.p':    { fr: 'Élaboration complète du dossier de projet industriel pour DIALLO COMPANY, comprenant l\'étude de faisabilité, le plan d\'affaires et la structuration financière du projet.', en: 'Full preparation of the industrial project file for DIALLO COMPANY, including the feasibility study, business plan and financial structuring.' },
    're.sonabi.h3':   { fr: '3 dossiers de projet élaborés', en: '3 project files prepared' },
    're.sonabi.p':    { fr: 'Accompagnement de SONABI dans la structuration et la formalisation de 3 dossiers de projets industriels distincts, destinés à la recherche de financement et à la mise en œuvre opérationnelle.', en: 'Support for SONABI in the structuring and formalization of 3 distinct industrial project files, aimed at securing financing and operational implementation.' },
    're.sonaby.h3':   { fr: 'Dossier de projet industriel', en: 'Industrial project file' },
    're.sonaby.p':    { fr: 'Constitution du dossier de projet pour SONABY, avec structuration du montage financier, analyse du cadre réglementaire applicable et accompagnement dans les démarches de formalisation.', en: 'Preparation of the project file for SONABY, with financial structuring, analysis of the applicable regulatory framework and support with formalization procedures.' },
    're.cta.h2':  { fr: 'Votre projet mérite le même niveau d\'exigence.', en: 'Your project deserves the same level of excellence.' },
    're.cta.p':   { fr: 'Quelle que soit l\'étape de votre projet, CREATOR vous accompagne avec méthode et rigueur.', en: 'Whatever stage your project is at, CREATOR supports you with method and rigor.' },
    're.cta.btn': { fr: 'Discuter de votre projet', en: 'Discuss your project' },

    /* ── CONTACT ── */
    'co.kicker.hero': { fr: 'Contact', en: 'Contact' },
    'co.h1':          { fr: 'Parlons de votre projet réglementaire.', en: 'Let\'s talk about your regulatory project.' },
    'co.hero.p':      { fr: 'Décrivez-nous votre produit, votre marché cible ou votre échéance : nous revenons vers vous avec une première lecture sous 48h.', en: 'Describe your product, target market or deadline: we\'ll get back to you with an initial assessment within 48 hours.' },
    'co.kicker1':     { fr: 'Nos coordonnées', en: 'Our contact details' },
    'co.h2':          { fr: 'Nous sommes à votre écoute.', en: 'We are here for you.' },
    'co.lead':        { fr: 'Que vous soyez laboratoire international, PME locale ou porteur de projet, CREATOR vous répond avec réactivité et professionnalisme.', en: 'Whether you are an international laboratory, a local SME or a project owner, CREATOR responds with responsiveness and professionalism.' },
    'co.lbl.email':   { fr: 'E-mail', en: 'Email' },
    'co.lbl.phone':   { fr: 'Téléphone', en: 'Phone' },
    'co.lbl.based':   { fr: 'Basé à', en: 'Based in' },
    'co.lbl.founder': { fr: 'Fondateur & Directeur', en: 'Founder & Director' },
    'co.lbl.zone':    { fr: 'Zone d\'intervention principale', en: 'Primary area of operation' },
    'co.zone.val':    { fr: 'UEMOA — Afrique de l\'Ouest & International', en: 'UEMOA — West Africa & International' },
    'co.form.name.lbl':    { fr: 'Nom complet *', en: 'Full name *' },
    'co.form.name.ph':     { fr: 'Votre nom', en: 'Your name' },
    'co.form.org.lbl':     { fr: 'Structure / Organisation', en: 'Organization' },
    'co.form.org.ph':      { fr: 'Nom de votre entreprise / laboratoire', en: 'Name of your company / laboratory' },
    'co.form.email.lbl':   { fr: 'E-mail *', en: 'Email *' },
    'co.form.phone.lbl':   { fr: 'Téléphone', en: 'Phone' },
    'co.form.topic.lbl':   { fr: 'Type de besoin *', en: 'Type of need *' },
    'co.form.topic.ph':    { fr: '-- Sélectionnez un type de besoin --', en: '-- Select a type of need --' },
    'co.form.opt1':        { fr: 'Stratégie & accompagnement de projets', en: 'Strategy & project support' },
    'co.form.opt2':        { fr: 'Audit & conformité réglementaire', en: 'Audit & regulatory compliance' },
    'co.form.opt3':        { fr: 'Enregistrement de produits vétérinaires (AMM)', en: 'Registration of veterinary products (AMM)' },
    'co.form.opt4':        { fr: 'Élaboration de dossier de projet industriel', en: 'Industrial project file development' },
    'co.form.opt5':        { fr: 'Autre demande', en: 'Other request' },
    'co.form.msg.lbl':     { fr: 'Votre message *', en: 'Your message *' },
    'co.form.msg.ph':      { fr: 'Décrivez votre projet en quelques lignes : produit, marché cible, échéance...', en: 'Describe your project in a few lines: product, target market, deadline...' },
    'co.form.submit':      { fr: 'Envoyer la demande →', en: 'Send request →' },
    'co.success':          { fr: '✓ Votre message a été envoyé avec succès. Nous vous répondrons sous 48h.', en: '✓ Your message was sent successfully. We will reply within 48 hours.' },
  },

  apply() {
    const l = this.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t[key];
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val[l] || val.fr;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val[l] || val.fr;
      } else {
        el.innerHTML = val[l] || val.fr;
      }
    });
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.textContent = l === 'fr' ? 'EN' : 'FR';
      btn.setAttribute('aria-label', l === 'fr' ? 'Switch to English' : 'Passer en français');
    });
  },

  toggle() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('creator-lang', this.lang);
    this.apply();
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.apply());
