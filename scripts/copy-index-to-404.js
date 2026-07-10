import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(root, '..', 'dist');
const indexPath = resolve(distDir, 'index.html');
const notFoundPath = resolve(distDir, '404.html');

if (existsSync(indexPath)) {
  mkdirSync(distDir, { recursive: true });
  copyFileSync(indexPath, notFoundPath);
}
