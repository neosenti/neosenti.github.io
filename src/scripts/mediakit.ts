// Kit de mídia: aceite dos termos, marcação dos arquivos no navegador e download.
// Nada é enviado a servidor. Fotos e imagens 3D recebem marca invisível (wm.js) ligada ao e-mail;
// todos os arquivos recebem nome, e-mail, data, crédito e link dos termos nos metadados.
import JSZip from 'jszip';
import { embed, payloadBits } from './wm.js';

interface Item { key: string; group: string; base: string; formats: string[]; wm: boolean; title: string; credit: string }
interface Data {
  lang: 'pt' | 'en';
  items: Item[];
  terms: { title: string; version: string; sections: { h: string; p: string }[] };
  termsUrl: string;
  readmeTitle: string;
  msg: { preparing: string; done: string; error: string; invalid: string };
}
interface Who { name: string; email: string; date: string }

const KEY = 'ns-kit-aceite-v1';

// ---------- metadados ----------
const enc = new TextEncoder();
const ascii = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\x20-\x7e]/g, '?');

let CRC_TABLE: Uint32Array | null = null;
function crc32(buf: Uint8Array) {
  if (!CRC_TABLE) {
    CRC_TABLE = new Uint32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; CRC_TABLE[n] = c >>> 0; }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
const concat = (...parts: Uint8Array[]) => { const out = new Uint8Array(parts.reduce((a, p) => a + p.length, 0)); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; } return out; };
const u32 = (n: number) => new Uint8Array([(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255]);

function pngChunk(type: string, data: Uint8Array) {
  const td = concat(enc.encode(type), data);
  return concat(u32(data.length), td, u32(crc32(td)));
}
function pngWithText(png: Uint8Array, fields: Record<string, string>) {
  const chunks = Object.entries(fields).map(([k, v]) => pngChunk('iTXt', concat(enc.encode(k), new Uint8Array([0, 0, 0, 0, 0]), enc.encode(v))));
  return concat(png.slice(0, 33), ...chunks, png.slice(33)); // depois do IHDR
}

function exifSegment(fields: { description: string; artist: string; copyright: string }) {
  const entries = [[0x010e, ascii(fields.description)], [0x013b, ascii(fields.artist)], [0x8298, ascii(fields.copyright)]] as const;
  const n = entries.length, ifdSize = 2 + n * 12 + 4;
  let dataOff = 8 + ifdSize;
  const head: number[] = [0x49, 0x49, 0x2a, 0x00, 8, 0, 0, 0, n & 255, n >> 8];
  const data: number[] = [];
  for (const [tag, str] of entries) {
    const bytes = [...enc.encode(str), 0];
    head.push(tag & 255, tag >> 8, 2, 0, bytes.length & 255, (bytes.length >> 8) & 255, 0, 0);
    head.push(dataOff & 255, (dataOff >> 8) & 255, 0, 0);
    data.push(...bytes); if (bytes.length % 2) data.push(0);
    dataOff = 8 + ifdSize + data.length;
  }
  head.push(0, 0, 0, 0);
  const tiff = new Uint8Array([...head, ...data]);
  const body = concat(enc.encode('Exif\0\0'), tiff);
  return concat(new Uint8Array([0xff, 0xe1, ((body.length + 2) >> 8) & 255, (body.length + 2) & 255]), body);
}
function comSegment(text: string) {
  const b = enc.encode(text);
  return concat(new Uint8Array([0xff, 0xfe, ((b.length + 2) >> 8) & 255, (b.length + 2) & 255]), b);
}
function jpegWithMeta(jpg: Uint8Array, exif: Uint8Array, com: Uint8Array) {
  let p = 2;
  if (jpg[2] === 0xff && jpg[3] === 0xe0) p = 4 + ((jpg[4] << 8) | jpg[5]); // depois do JFIF
  return concat(jpg.slice(0, p), exif, com, jpg.slice(p));
}
const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- preparação de cada arquivo ----------
async function prepare(item: Item, format: string, who: Who, d: Data): Promise<{ name: string; blob: Blob }> {
  const url = `/midia/arquivos/${item.base}.${format}`;
  const name = `${item.base}.${format}`;
  const license = d.lang === 'pt'
    ? `Licenciado para ${who.name} <${who.email}> em ${who.date}. ${item.credit}. Termos de uso: ${d.termsUrl}`
    : `Licensed to ${who.name} <${who.email}> on ${who.date}. ${item.credit}. Terms of use: ${d.termsUrl}`;
  const owner = item.group === 'photos' ? 'Michelly Domiciano' : 'Neosenti';
  const copyright = `(c) ${owner}. ${d.lang === 'pt' ? 'Uso conforme termos' : 'Use under terms'}: ${d.termsUrl}`;

  if (format === 'svg') {
    const txt = await (await fetch(url)).text();
    const meta = `<!-- ${xml(license)} -->\n<metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description dc:creator="${xml(owner)}" dc:rights="${xml(copyright)}" dc:description="${xml(license)}"/></rdf:RDF></metadata>`;
    return { name, blob: new Blob([txt.replace(/(<svg[^>]*>)/, `$1\n${meta}\n`)], { type: 'image/svg+xml' }) };
  }

  const img = await createImageBitmap(await (await fetch(url)).blob());
  const canvas = document.createElement('canvas');
  canvas.width = img.width; canvas.height = img.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0);
  if (item.wm) {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { bits } = await payloadBits(who.email);
    embed(data, bits, 1, item.group === 'photos' ? 2.0 : 1.0); // fotos escondem mais ruído que as imagens 3D
    ctx.putImageData(data, 0, 0);
  }
  const type = format === 'jpg' ? 'image/jpeg' : 'image/png';
  const blob: Blob = await new Promise((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('toBlob'))), type, 0.95));
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const out = format === 'jpg'
    ? jpegWithMeta(bytes, exifSegment({ description: license, artist: owner, copyright }), comSegment(license))
    : pngWithText(bytes, { Author: owner, Copyright: copyright, Description: license, Source: d.termsUrl });
  return { name, blob: new Blob([out], { type }) };
}

function readme(who: Who, d: Data) {
  const t = d.terms;
  const lines = [
    `Neosenti · ${d.readmeTitle}`,
    '',
    d.lang === 'pt' ? `Licenciado para: ${who.name} <${who.email}>, em ${who.date}.` : `Licensed to: ${who.name} <${who.email}>, on ${who.date}.`,
    '',
    d.lang === 'pt' ? 'Créditos obrigatórios' : 'Required credits',
    ...d.items.map((i) => `- ${i.base}: ${i.credit}`),
    '',
    t.title,
    ...t.sections.flatMap((s) => ['', s.h, s.p]),
    '',
    t.version,
    d.termsUrl,
  ];
  return lines.join('\r\n');
}

function save(blob: Blob, name: string) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 30000);
}

// ---------- interface ----------
export function initMediaKit() {
  const d: Data = JSON.parse(document.getElementById('kit-data')!.textContent || '{}');
  const dialog = document.querySelector<HTMLDialogElement>('.kit-dialog')!;
  const form = dialog.querySelector<HTMLFormElement>('form')!;
  const err = dialog.querySelector<HTMLElement>('[data-error]')!;
  const status = document.querySelector<HTMLElement>('[data-status]')!;
  let pending: { key: string; format: string } | null = null;
  let opener: HTMLElement | null = null;

  const getWho = (): Who | null => { try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch { return null; } };

  async function run(key: string, format: string, who: Who) {
    status.textContent = d.msg.preparing;
    try {
      if (key === 'all') {
        const zip = new JSZip();
        for (const it of d.items) for (const f of it.formats) { const r = await prepare(it, f, who, d); zip.file(r.name, r.blob); }
        zip.file(`${d.readmeTitle}.txt`, readme(who, d));
        save(await zip.generateAsync({ type: 'blob' }), d.lang === 'pt' ? 'neosenti-kit-de-midia.zip' : 'neosenti-media-kit.zip');
      } else {
        const it = d.items.find((i) => i.key === key)!;
        const r = await prepare(it, format, who, d);
        save(r.blob, r.name);
      }
      status.textContent = d.msg.done;
    } catch (e) {
      console.error(e);
      status.textContent = d.msg.error;
    }
  }

  document.querySelectorAll<HTMLButtonElement>('[data-dl]').forEach((b) => {
    b.addEventListener('click', () => {
      const req = { key: b.dataset.dl!, format: b.dataset.format || '' };
      const who = getWho();
      if (who) { run(req.key, req.format, who); return; }
      pending = req; opener = b;
      err.textContent = '';
      dialog.showModal();
      form.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    });
  });

  dialog.querySelector('[data-cancel]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const ok = name.split(/\s+/).length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && fd.get('accept');
    if (!ok) { err.textContent = d.msg.invalid; return; }
    const who: Who = { name, email, date: new Date().toISOString().slice(0, 10) };
    try { sessionStorage.setItem(KEY, JSON.stringify(who)); } catch { /* sem armazenamento: segue só neste download */ }
    dialog.close();
    if (pending) run(pending.key, pending.format, who);
    pending = null;
  });
}
