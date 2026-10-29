// Estrutura de conteúdo compartilhada pelos dois idiomas.
// pt.ts e en.ts implementam esta interface; o TypeScript garante que nenhum texto falte num idioma.
// Regra: o site da Neosenti fala da empresa e da visão. Produto, preço e especificações ficam em biaradar.com.
// Nenhum valor monetário (preço, prêmio, mercado) é publicado aqui.

export type Lang = 'pt' | 'en';

export type SectionKey = 'impact' | 'how' | 'beliefs' | 'products' | 'about' | 'contact';

export interface Link {
  label: string;
  href: string;
  /** true quando leva para outro site (o componente anuncia "abre outro site") */
  external?: boolean;
}

export interface Content {
  meta: { title: string; description: string };
  ui: {
    skipToContent: string;
    navLabel: string;
    homeLabel: string;
    /** nome do outro idioma, escrito nele, ex.: na página pt: "English" */
    switchLang: string;
    externalHint: string;
    menu: string;
    footerNav: string;
  };
  /** âncora (no idioma da página, sem acento) de cada seção */
  sectionIds: Record<SectionKey, string>;
  nav: { section: SectionKey; label: string }[];

  hero: {
    h1: string;
    lead: string;
    ctaPrimary: Link;
    ctaSecondary: Link;
    /** título e descrição acessíveis do gráfico ilustrativo (cauda longa) */
    graphicTitle: string;
    graphicDesc: string;
    graphicHead: string;
    graphicTail: string;
  };

  impact: {
    kicker: string;
    h2: string;
    stats: { value: string; text: string }[];
    source: string;
    whoTitle: string;
    who: string[];
    closing: string;
  };

  how: { kicker: string; h2: string; items: { title: string; text: string }[] };

  beliefs: { kicker: string; h2: string; items: { title: string; text: string }[] };

  products: {
    kicker: string;
    h2: string;
    bia: { name: string; text: string; link: Link; imageAlt: string };
    nextTitle: string;
    next: string;
  };

  about: {
    kicker: string;
    h2: string;
    text: string;
    quote: string;
    quoteBy: string;
    milestonesTitle: string;
    milestones: { year: string; text: string }[];
    photoAlt: string;
  };

  contact: {
    kicker: string;
    h2: string;
    lead: string;
    audiences: { who: string; why: string }[];
    email: string;
    emailLabel: string;
    location: string;
  };

  footer: { tagline: string; legal: string; links: Link[] };

  langPrompt: { title: string; text: string; close: string };

  press: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    factsTitle: string;
    facts: { term: string; desc: string }[];
    boilerplateTitle: string;
    boilerplate: string;
    downloadsTitle: string;
    /** na ordem: logo, foto do fundador, desenho da BIA Radar */
    downloads: { label: string; desc: string }[];
    contactTitle: string;
    contactText: string;
  };

  accessibility: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    sections: { h2: string; paragraphs: string[] }[];
    reportCta: string;
  };

  notFound: { title: string; text: string; home: string };
}
