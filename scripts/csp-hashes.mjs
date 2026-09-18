import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = 'dist';
const HEADERS = join(DIST, '_headers');

// Origins that must survive the script-src rewrite below (Cloudflare Web Analytics beacon).
const EXTRA_SCRIPT_SRC = ['https://static.cloudflareinsights.com'];

const sha256 = (s) => `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`;

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (extname(entry.name) === '.html') out.push(full);
  }
  return out;
}

const scripts = new Set();
const styles = new Set();

for (const file of await htmlFiles(DIST)) {
  const html = await readFile(file, 'utf8');
  for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    if (m[1].length) scripts.add(m[1]);
  }
  for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    if (m[1].length) styles.add(m[1]);
  }
}

const scriptHashes = [...scripts].map(sha256).join(' ');
const styleHashes = [...styles].map(sha256).join(' ');

let headers = await readFile(HEADERS, 'utf8');
headers = headers
  .replace(
    /script-src [^;]*/,
    `script-src 'self' ${EXTRA_SCRIPT_SRC.join(' ')} ${scriptHashes}`
  )
  .replace(/style-src [^;]*/, `style-src 'self' ${styleHashes}`);

await writeFile(HEADERS, headers);
console.log(
  `[csp] hashed ${scripts.size} inline script(s), ${styles.size} inline style(s) -> dist/_headers`
);
