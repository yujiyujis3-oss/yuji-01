// 確認用コンタクトシート: node tools/sheet.js out.png id id ...
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [out, ...ids] = process.argv.slice(2);
const H = 620, imgs = [];
for (const id of ids) { const b = await sharp(path.join(root, 'thumbs', id + '.webp')).resize({ height: H }).png().toBuffer(); imgs.push([b, (await sharp(b).metadata()).width]); }
let x = 0; const comps = imgs.map(([b, w]) => { const c = { input: b, left: x, top: 0 }; x += w + 10; return c; });
await sharp({ create: { width: x, height: H, channels: 3, background: '#888' } }).composite(comps).png().toFile(out);
