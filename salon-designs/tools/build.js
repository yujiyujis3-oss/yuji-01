// 使い方: node tools/build.js [id ...]   例) node tools/build.js h01 h02
// 各デザインを source/*.html に書き出し、Chromiumで images/*.webp に書き出します
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import sharp from 'sharp';
import { baseCss, GF } from './lib.js';
import hair from './hair.js';
import ester from './ester.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const all = [...hair, ...ester];
const want = process.argv.slice(2);
const list = want.length ? all.filter((d) => want.some((p) => d.id.startsWith(p))) : all;

fs.mkdirSync(path.join(root, 'source'), { recursive: true });
fs.mkdirSync(path.join(root, 'images'), { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
for (const d of list) {
  const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>${d.title}</title>${GF}<style>${baseCss}${d.css || ''}</style></head><body><div class="d ${d.cls || ''}" style="width:${d.w}px;height:${d.h}px">${d.body}</div></body></html>`;
  fs.writeFileSync(path.join(root, 'source', d.id + '.html'), html);
  const ctx = await browser.newContext({ viewport: { width: d.w, height: d.h }, deviceScaleFactor: d.scale || 1 });
  const page = await ctx.newPage();
  await page.goto('file://' + path.join(root, 'source', d.id + '.html'), { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: d.w, height: d.h } });
  await sharp(png).webp({ quality: 90 }).toFile(path.join(root, 'images', d.id + '.webp'));
  // 確認用の軽量プレビュー
  fs.mkdirSync(path.join(root, 'thumbs'), { recursive: true });
  await sharp(png).resize({ width: 640 }).webp({ quality: 82 }).toFile(path.join(root, 'thumbs', d.id + '.webp'));
  await ctx.close();
  console.log('ok', d.id, d.title);
}
await browser.close();
