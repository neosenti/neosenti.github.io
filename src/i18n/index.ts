import type { Content, Lang } from './types';
import pt from './pt';
import en from './en';

export const content: Record<Lang, Content> = { pt, en };

/** Código de idioma para <html lang> e hreflang */
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

export type PageKey = 'home' | 'press' | 'accessibility' | 'media';

/** Caminho de cada página em cada idioma. O seletor de idioma leva sempre para a mesma página no outro idioma. */
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en/' },
  press: { pt: '/imprensa/', en: '/en/press/' },
  accessibility: { pt: '/acessibilidade/', en: '/en/accessibility/' },
  media: { pt: '/midia/', en: '/en/media/' },
};

export const other = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');
