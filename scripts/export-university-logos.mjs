import fs from 'node:fs/promises';
import sharp from 'sharp';

// Official vector marks are exported at high resolution with transparent,
// tightly bounded canvases. CSS supplies the surrounding layout spacing.
const metu = await fs.readFile('scripts/logo-sources/metu.svg', 'utf8');
const tum = await fs.readFile('scripts/logo-sources/tum.svg', 'utf8');
for (const [name, vector] of [
  ['metu', metu],
  ['metu-dark', metu.replace('fill:#55565a', 'fill:#fff')],
  ['tum', tum.replace('#FFFFFF', '#0065BD')],
  ['tum-dark', tum],
]) {
  const png = await sharp(Buffer.from(vector), { density: 600 }).png().toBuffer();
  await sharp(png).trim({ background: '#00000000', threshold: 1 }).png()
    .toFile(`public/media/institutions/${name}.png`);
}
