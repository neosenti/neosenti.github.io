// Marca d'água invisível e periódica (espalhamento espectral em blocos).
// Embute 64 bits (48 bits de impressão digital do e-mail + CRC-16) repetidos em mosaico pela imagem,
// o que permite recuperar a marca mesmo depois de captura de tela, redimensionamento, recorte e JPEG.
export const WM = { G: 32, BITS: 64, SEED: 0x4e53_b1a5 };

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Mapa fixo de células: para cada célula, -1 = sincronismo, ou o índice do bit; e o sinal pseudoaleatório. */
export function layout() {
  const { G, BITS, SEED } = WM;
  const n = G * G, rnd = mulberry32(SEED);
  const sign = new Int8Array(n), role = new Int16Array(n);
  for (let i = 0; i < n; i++) sign[i] = rnd() < 0.5 ? -1 : 1;
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const nSync = 256;
  for (let k = 0; k < n; k++) role[idx[k]] = k < nSync ? -1 : (k - nSync) % BITS;
  return { sign, role };
}

function crc16(bytes) {
  let c = 0xffff;
  for (const b of bytes) { c ^= b << 8; for (let i = 0; i < 8; i++) c = c & 0x8000 ? ((c << 1) ^ 0x1021) & 0xffff : (c << 1) & 0xffff; }
  return c;
}

/** 48 bits do SHA-256 do e-mail normalizado + CRC-16 = 64 bits. */
export async function payloadBits(email) {
  const norm = email.trim().toLowerCase();
  const h = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(norm))).slice(0, 6);
  const c = crc16(h);
  const bytes = [...h, c >> 8, c & 0xff];
  const bits = [];
  for (const b of bytes) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  return { bits, hex: [...h].map((x) => x.toString(16).padStart(2, '0')).join('') };
}

/** Aplica a marca em ImageData (in-place). Pixels transparentes não são alterados. */
export function embed(img, bits, strength = 1, base = 1.0) {
  const { G } = WM;
  const { sign, role } = layout();
  const { width: W, height: H, data } = img;
  // tamanho da célula: baseado na área opaca (imagens com fundo transparente precisam de mais repetições)
  let opaque = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] >= 128) opaque++;
  const side = Math.min(Math.min(W, H), Math.sqrt(opaque));
  const cs = Math.max(4, Math.floor(side / (2.5 * G)));
  // luminância e desvio local (para esconder a marca em áreas com textura)
  const Y = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) Y[i] = 0.299 * data[4 * i] + 0.587 * data[4 * i + 1] + 0.114 * data[4 * i + 2];
  const cellVal = new Float32Array(G * G);
  for (let c = 0; c < G * G; c++) cellVal[c] = role[c] < 0 ? sign[c] : sign[c] * (bits[role[c]] ? 1 : -1);
  // atividade local por bloco
  const bw = Math.ceil(W / cs), bh = Math.ceil(H / cs);
  const act = new Float32Array(bw * bh);
  for (let by = 0; by < bh; by++) for (let bx = 0; bx < bw; bx++) {
    let s = 0, s2 = 0, n = 0;
    for (let y = by * cs; y < Math.min(H, (by + 1) * cs); y += 2) for (let x = bx * cs; x < Math.min(W, (bx + 1) * cs); x += 2) { const v = Y[y * W + x]; s += v; s2 += v * v; n++; }
    const m = s / n; act[by * bw + bx] = Math.sqrt(Math.max(0, s2 / n - m * m));
  }
  for (let y = 0; y < H; y++) {
    const cy = Math.floor(y / cs) % G, fy = (y % cs + 0.5) / cs;
    const wy = Math.sin(Math.PI * fy);
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      if (data[4 * i + 3] < 128) continue;
      const cx = Math.floor(x / cs) % G, fx = (x % cs + 0.5) / cs;
      const a = act[Math.floor(y / cs) * bw + Math.floor(x / cs)];
      const amp = strength * Math.min(6, base + 0.1 * a);
      const d = amp * cellVal[cy * G + cx] * wy * Math.sin(Math.PI * fx) * 1.6;
      for (let k = 0; k < 3; k++) { const v = data[4 * i + k] + d; data[4 * i + k] = v < 0 ? 0 : v > 255 ? 255 : v; }
    }
  }
  return { cs };
}
