import type { Content } from './types';

const EMAIL = 'contato@neosenti.com';

const en: Content = {
  meta: {
    title: 'Neosenti · Technology for problems too small for everyone else',
    description:
      'Neosenti builds technology for real problems the market dismisses as too small, designed with the people who will use it. Made in Brazil.',
  },

  ui: {
    skipToContent: 'Skip to main content',
    navLabel: 'Main',
    homeLabel: 'Neosenti, home page',
    switchLang: 'Português',
    externalHint: '(opens another site)',
    menu: 'Menu',
    footerNav: 'Footer',
  },

  sectionIds: {
    impact: 'impact',
    how: 'how-we-work',
    beliefs: 'what-we-believe',
    products: 'products',
    about: 'about',
    contact: 'contact',
  },

  nav: [
    { section: 'impact', label: 'Impact' },
    { section: 'how', label: 'How we work' },
    { section: 'products', label: 'Products' },
    { section: 'about', label: 'About' },
    { section: 'contact', label: 'Contact' },
  ],

  hero: {
    h1: 'Technology for problems too small for everyone else.',
    lead:
      'Many real problems go unsolved because, for a large company, the cost of development never pays off. Neosenti exists to solve them.',
    ctaPrimary: { label: 'Why this matters', href: '#impact' },
    ctaSecondary: { label: 'Talk to us', href: '#contact' },
    graphicTitle: 'The market looks at the average. We look at the edges.',
    graphicDesc:
      'Illustrative bell-shaped curve. The middle of the curve, where most people are, is where the market looks. The two highlighted edges stand for the people and problems left unsolved: that is where Neosenti works.',
    graphicHead: 'Where the market looks',
    graphicTail: 'Where Neosenti works',
  },

  impact: {
    kicker: 'Impact',
    h2: 'Billions of people rely on technology the market doesn’t prioritize.',
    stats: [
      { value: '2.5 billion', text: 'people need at least one assistive product, such as glasses, a white cane or a hearing aid.' },
      { value: '3.5 billion', text: 'will need one by 2050 as the world’s population ages.' },
      { value: '3% to 90%', text: 'is how much access to these products varies between poorer and wealthier countries.' },
    ],
    source: 'Source: WHO and UNICEF, Global Report on Assistive Technology, 2022.',
    whoTitle: 'Who needs us',
    who: [
      'People with disabilities, who rely on a product for their independence.',
      'Older adults, a group growing all over the world.',
      'People in countries where solutions arrive imported and expensive, or not at all.',
    ],
    closing:
      'When a market is too small for everyone else, these people are left with nothing. In Brazil, the government had to launch a national challenge just to get a solution built for white cane users. That is the space we fill.',
  },

  how: {
    kicker: 'How we work',
    h2: 'We make development fit a small market.',
    items: [
      {
        title: 'We start with people',
        text: 'Before any circuit board, we go to the people who will use the product. We build with them, not for them.',
      },
      {
        title: 'We reuse our core technology',
        text: 'Radar, on-device AI and modular electronics, developed in-house and reused in every product. A new problem never starts from scratch.',
      },
      {
        title: 'We manufacture in small batches',
        text: 'Industrial-quality production in low volumes, so a product doesn’t need to sell millions of units to exist.',
      },
    ],
  },

  beliefs: {
    kicker: 'What we believe',
    h2: 'Five principles guide every design decision.',
    items: [
      { title: 'The average user doesn’t exist.', text: 'We design for people at the edges, not for the average.' },
      { title: 'Design for the worst day.', text: 'No internet, the wrong cable, no repair shop nearby: it still has to work.' },
      { title: 'Ethical technology.', text: 'No artificial barriers. We only charge a recurring fee when providing the service has a recurring cost.' },
      { title: 'Price is access.', text: 'The people who need it most often have the least. Price decides who gets left out.' },
      { title: 'Brazil is the target, not the test.', text: 'What works here works almost anywhere.' },
    ],
  },

  products: {
    kicker: 'Products',
    h2: 'BIA Radar is the first proof that the idea works.',
    bia: {
      name: 'BIA Radar',
      text: 'A radar that clips onto a white cane and warns blind people about obstacles above the waist, the part of the path a cane can’t reach. Designed with blind people.',
      link: { label: 'Discover BIA Radar at biaradar.com', href: 'https://biaradar.com/', external: true },
      imageAlt: 'Line drawing of BIA Radar, a small module with buttons on top.',
    },
    nextTitle: 'What’s next',
    next: 'The same core technology, applied to other problems of independence and care.',
  },

  about: {
    kicker: 'About',
    h2: 'A company that started by listening, before building anything.',
    text: 'Rafael Farias Meneses, a computer engineering student at UTFPR, founded Neosenti in 2025 in Toledo, in southern Brazil. His first stop was an association of blind people, to understand the problem from those who live with it.',
    quote:
      'When I hear that it’s better to sell to half the people at twice the price, I think of the people being ignored instead of embraced.',
    quoteBy: 'Rafael Farias Meneses, founder and CEO',
    milestonesTitle: 'Milestones',
    milestones: [
      { year: '2025', text: 'Neosenti founded in Toledo, Paraná, Brazil.' },
      { year: '2026', text: '1st place in Brazil’s Smart Canes Challenge, run by ABDI (Brazilian Agency for Industrial Development) and the Paraná state government, with BIA Radar.' },
      { year: '2026', text: 'Na Prática Award, South region, for the founder.' },
    ],
    photoAlt: 'Portrait of Rafael Farias Meneses.',
  },

  contact: {
    kicker: 'Contact',
    h2: 'Let’s build this together.',
    lead: 'One email for everything. Tell us who you are and what you have in mind, in English or Portuguese.',
    audiences: [
      { who: 'Partners and industry', why: 'to develop or manufacture with us.' },
      { who: 'Institutions', why: 'to bring our solutions to the people you serve.' },
      { who: 'Investors', why: 'to get to know the company and our plans.' },
      { who: 'Press', why: 'for interviews, facts and images.' },
    ],
    email: EMAIL,
    emailLabel: `Email ${EMAIL}`,
    location: 'Toledo, Paraná, Brazil',
  },

  footer: {
    tagline: 'Technology for problems too small for everyone else.',
    legal: '© 2026 Neosenti · Toledo, Paraná, Brazil',
    links: [
      { label: 'Press', href: '/en/press/' },
      { label: 'Media kit', href: '/en/media/' },
      { label: 'Accessibility', href: '/en/accessibility/' },
      { label: 'BIA Radar', href: 'https://biaradar.com/', external: true },
    ],
  },

  langPrompt: { title: 'Language', text: 'Which language would you like to read this site in?', close: 'Close' },

  press: {
    metaTitle: 'Press · Neosenti',
    metaDescription: 'Facts, a company description, images and a press contact for Neosenti.',
    h1: 'Facts, images and a direct contact for journalists.',
    lead: 'You may use the text and images on this page in coverage of Neosenti.',
    factsTitle: 'Key facts',
    facts: [
      { term: 'Company', desc: 'Neosenti, founded in 2025 in Toledo, Paraná, Brazil.' },
      { term: 'Founder and CEO', desc: 'Rafael Farias Meneses.' },
      { term: 'What it does', desc: 'Technology for real problems the market dismisses as too small, starting with assistive technology.' },
      { term: 'First product', desc: 'BIA Radar, which warns blind people about obstacles above the waist. Product information at biaradar.com.' },
      { term: 'Recognition', desc: '1st place in Brazil’s Smart Canes Challenge, run by ABDI and the Paraná state government (2026). Na Prática Award 2026, South region, for the founder.' },
    ],
    boilerplateTitle: 'About Neosenti',
    boilerplate:
      'Neosenti is a technology company based in Toledo, Paraná, Brazil, founded in 2025 by Rafael Farias Meneses. It builds products for real problems the market dismisses as too small, designed with the people who will use them. To make that work, it reuses one core of radar, on-device AI and modular electronics, and manufactures in small batches. Its first product is BIA Radar, for blind people, which won 1st place in Brazil’s Smart Canes Challenge, run by ABDI and the Paraná state government.',
    downloadsTitle: 'Logo and images',
    downloads: [
      { label: 'Neosenti logo (SVG)', desc: 'Vector file' },
      { label: 'Photo of Rafael Farias Meneses (JPG)', desc: 'Portrait of the founder and CEO' },
      { label: 'BIA Radar drawing (PNG)', desc: 'Line drawing of the product' },
    ],
    contactTitle: 'Press contact',
    contactText: 'For interviews, facts or images, email us with the subject “Press”.',
  },

  accessibility: {
    metaTitle: 'Accessibility · Neosenti',
    metaDescription: 'How this site works with screen readers and keyboards, what is still missing and how to report a problem.',
    h1: 'This site is built to work with screen readers and keyboard alone.',
    sections: [
      {
        h2: 'We aim for WCAG 2.2 level AA.',
        paragraphs: [
          'We build technology with people with disabilities, and some of our visitors use screen readers. That is why we follow the Web Content Accessibility Guidelines (WCAG 2.2), level AA. The site has not had an external audit.',
        ],
      },
      {
        h2: 'What we did.',
        paragraphs: [
          'Each page has one main heading, and section headings make sense on their own. Header, navigation, content and footer are marked as regions, and the first link skips straight to the content.',
          'Text contrast meets level AA. Everything works with a keyboard, with a visible focus. The site respects your reduced motion, dark mode and high contrast settings.',
          'The language of each page, and of any passage in another language, is marked. Images have descriptions, and links say where they go.',
        ],
      },
      {
        h2: 'Found a problem? Let us know.',
        paragraphs: [
          'Tell us the page, what you were trying to do and, if you can, your browser and screen reader. This statement was last reviewed in October 2026.',
        ],
      },
    ],
    reportCta: 'Report an accessibility problem by email',
  },

  media: {
    metaTitle: 'Media kit · Neosenti',
    metaDescription: 'Photos, 3D images and drawings of BIA Radar for editorial use, with credits and terms of use.',
    h1: 'Photos, images and drawings of BIA Radar for people writing about it.',
    lead: 'Free to use in editorial, news, educational and academic content, with credit. Before your first download, please read and accept the terms.',
    howTitle: 'How it works',
    how: [
      'Pick a file or download the full kit.',
      'Enter your full name and email and accept the terms of use.',
      'The file is prepared in your browser, with your details written into it. Nothing is sent to Neosenti.',
    ],
    groups: {
      photos: { title: 'Photos', credit: 'Required credit: Photo: Michelly Domiciano' },
      renders: { title: '3D images', credit: 'Required credit: Image: Neosenti' },
      drawings: { title: 'Technical drawings (PNG and SVG)', credit: 'Required credit: Image: Neosenti' },
    },
    items: {
      'foto-demonstracao': { title: 'Demonstration at Toledo City Council', alt: 'Rafael Farias Meneses, standing in a council chamber, attaches BIA Radar to the grip of a red and white cane.' },
      'foto-encaixe-na-bengala': { title: 'Attaching to the cane', alt: 'Hands attaching BIA Radar just below the grip of a white cane.' },
      'foto-ajuste-da-alca': { title: 'Adjusting the strap', alt: 'Hands adjusting the rubber strap that holds BIA Radar to the cane.' },
      'foto-prototipos': { title: 'Two prototypes', alt: 'A black BIA Radar on a cane next to a clear prototype with visible electronics, resting on an open hand.' },
      'foto-braille': { title: 'Name in relief and braille', alt: 'Side of the black BIA Radar with the name BIA RADAR embossed and in braille, next to the clear prototype.' },
      'render-lado-direito': { title: 'Right side', alt: '3D image of BIA Radar seen exactly from the right side, on a transparent background.' },
      'render-lado-direito-inclinado': { title: 'Right side, tilted', alt: '3D image of BIA Radar seen from the right side, tilted about 30 degrees, on a transparent background.' },
      'render-lado-esquerdo': { title: 'Left side', alt: '3D image of BIA Radar seen exactly from the left side, showing the cane mount, on a transparent background.' },
      'render-lado-esquerdo-inclinado': { title: 'Left side, tilted', alt: '3D image of BIA Radar seen from the left side, tilted about 30 degrees, on a transparent background.' },
      'render-tras-cima-direita': { title: 'From behind and above, right', alt: '3D image of BIA Radar seen from behind and above, showing the buttons and the cane mount, on a transparent background.' },
      'render-tras-cima-esquerda': { title: 'From behind and above, left', alt: '3D image of BIA Radar seen from behind and above from the other side, showing the buttons and the cane mount, on a transparent background.' },
      'render-ponta-cima': { title: 'From above, other end', alt: '3D image of BIA Radar seen from above from the other end, showing the buttons and the radar dome, on a transparent background.' },
      'render-lado-direito-estudio': { title: 'Right side, studio background', alt: '3D image of BIA Radar seen from the right side, on a light studio background.' },
      'render-lado-esquerdo-estudio': { title: 'Left side, studio background', alt: '3D image of BIA Radar seen from the left side, showing the cane mount, on a light studio background.' },
      'render-tras-cima-direita-estudio': { title: 'From behind and above, studio background', alt: '3D image of BIA Radar seen from behind and above, showing the buttons and the cane mount, on a light studio background.' },
      'desenho-lado-direito': { title: 'Right side', alt: 'Line drawing of BIA Radar seen exactly from the right side.' },
      'desenho-lado-direito-inclinado': { title: 'Right side, tilted', alt: 'Line drawing of BIA Radar seen from the right side, tilted about 30 degrees.' },
      'desenho-lado-esquerdo': { title: 'Left side', alt: 'Line drawing of BIA Radar seen exactly from the left side, showing the cane mount.' },
      'desenho-lado-esquerdo-inclinado': { title: 'Left side, tilted', alt: 'Line drawing of BIA Radar seen from the left side, tilted about 30 degrees.' },
      'desenho-tras-cima-direita': { title: 'From behind and above, right', alt: 'Line drawing of BIA Radar seen from behind and above, showing the buttons and the cane mount.' },
      'desenho-tras-cima-esquerda': { title: 'From behind and above, left', alt: 'Line drawing of BIA Radar seen from behind and above from the other side, showing the buttons and the cane mount.' },
      'desenho-ponta-cima': { title: 'From above, other end', alt: 'Line drawing of BIA Radar seen from above from the other end, showing the buttons and the radar dome.' },
    },
    download: 'Download',
    downloadAll: 'Download the full kit (.zip)',
    downloadAllNote: 'All files, credits and terms of use, about 4 MB.',
    dialog: {
      title: 'Before you download',
      intro: 'Please read the terms of use and enter your details. They are written into the files you download.',
      termsTitle: 'Neosenti media kit terms of use',
      terms: [
        { h: '1. What you may do', p: 'Use the images in this kit, free of charge, in editorial, news, educational or academic content about Neosenti and BIA Radar, such as articles, books, ebooks, classes and presentations. You may resize and crop the images as long as you don’t change their meaning.' },
        { h: '2. Credits', p: 'Credit is required, next to the image or on the publication’s credits page. Photos: “Photo: Michelly Domiciano”. 3D images and drawings: “Image: Neosenti”.' },
        { h: '3. What is not allowed', p: 'Using the images in advertising or to promote other products, services or brands; implying a partnership, sponsorship or endorsement by Neosenti without written permission; editing the product or the people shown in a misleading way; using the people shown outside the context of BIA Radar; selling, sublicensing or redistributing the files; using the images to train artificial intelligence models; registering trademarks, designs or patents based on them.' },
        { h: '4. Ownership', p: 'The photos belong to Michelly Domiciano. The 3D images and drawings belong to Neosenti. BIA Radar and Neosenti are trademarks of Neosenti. This permission is free, personal, non-exclusive and non-transferable, and transfers no ownership rights.' },
        { h: '5. Revocation', p: 'Neosenti may revoke this permission at any time, for example in case of use outside these terms. Publications made under these terms before revocation may stay online.' },
        { h: '6. File identification', p: 'To protect the authors, every downloaded file carries your name and email in its metadata. Photos and 3D images also receive an invisible mark linked to your email. All of this happens in your browser: your details are not sent to or stored by Neosenti.' },
        { h: '7. Other uses and questions', p: 'For commercial use, advertising or anything not covered here, email contato@neosenti.com before publishing.' },
      ],
      version: 'Version 1.0, October 2026.',
      name: 'Full name',
      email: 'Email',
      accept: 'I have read and accept the terms of use',
      submit: 'Accept and download',
      cancel: 'Cancel',
      preparing: 'Preparing the file…',
      done: 'Download started.',
      error: 'We couldn’t prepare the file. Try again or email contato@neosenti.com.',
      invalid: 'Enter your full name and a valid email, and accept the terms.',
      readmeTitle: 'README',
    },
  },

  notFound: {
    title: 'This page doesn’t exist.',
    text: 'The address may have changed. The home page has everything about Neosenti.',
    home: 'Go to the home page',
  },
};

export default en;
