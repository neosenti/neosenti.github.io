// Manifesto do kit de mídia. Os arquivos ficam em public/midia/arquivos/ e as miniaturas em public/midia/miniaturas/.
import type { Lang } from './i18n/types';

export type MediaGroup = 'photos' | 'renders' | 'drawings';
export interface MediaItem {
  key: string;
  group: MediaGroup;
  /** nome do arquivo sem extensão */
  base: string;
  formats: ('jpg' | 'png' | 'svg')[];
  w: number;
  h: number;
  /** recebe marca d'água invisível (fotos e imagens 3D) */
  wm: boolean;
}

const item = (key: string, group: MediaGroup, formats: MediaItem['formats'], w: number, h: number, wm: boolean): MediaItem => ({
  key, group, base: `bia-radar-${key}`, formats, w, h, wm,
});

export const MEDIA: MediaItem[] = [
  item('foto-demonstracao', 'photos', ['jpg'], 899, 1600, true),
  item('foto-encaixe-na-bengala', 'photos', ['jpg'], 1600, 899, true),
  item('foto-ajuste-da-alca', 'photos', ['jpg'], 1600, 899, true),
  item('foto-prototipos', 'photos', ['jpg'], 1600, 899, true),
  item('foto-braille', 'photos', ['jpg'], 1600, 899, true),
  item('render-lado-direito', 'renders', ['png'], 962, 683, true),
  item('render-lado-direito-inclinado', 'renders', ['png'], 1033, 982, true),
  item('render-lado-esquerdo', 'renders', ['png'], 973, 692, true),
  item('render-lado-esquerdo-inclinado', 'renders', ['png'], 1043, 990, true),
  item('render-tras-cima-direita', 'renders', ['png'], 664, 886, true),
  item('render-tras-cima-esquerda', 'renders', ['png'], 666, 889, true),
  item('render-ponta-cima', 'renders', ['png'], 677, 981, true),
  item('desenho-lado-direito', 'drawings', ['png', 'svg'], 1646, 1169, false),
  item('desenho-lado-direito-inclinado', 'drawings', ['png', 'svg'], 1768, 1681, false),
  item('desenho-lado-esquerdo', 'drawings', ['png', 'svg'], 1664, 1182, false),
  item('desenho-lado-esquerdo-inclinado', 'drawings', ['png', 'svg'], 1787, 1699, false),
  item('desenho-tras-cima-direita', 'drawings', ['png', 'svg'], 1138, 1516, false),
  item('desenho-tras-cima-esquerda', 'drawings', ['png', 'svg'], 1141, 1523, false),
  item('desenho-ponta-cima', 'drawings', ['png', 'svg'], 1161, 1682, false),
];

export const creditFor = (g: MediaGroup, lang: Lang) =>
  g === 'photos' ? (lang === 'pt' ? 'Foto: Michelly Domiciano' : 'Photo: Michelly Domiciano') : lang === 'pt' ? 'Imagem: Neosenti' : 'Image: Neosenti';
