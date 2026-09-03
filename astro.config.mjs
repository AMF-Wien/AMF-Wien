import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amf-wien.github.io',
  base: '/AMF-Wien.com',
  // WICHTIG: Sobald die eigene Domain amf-wien.com in GitHub Pages
  // aktiv ist, hier "site" auf 'https://www.amf-wien.com' zurücksetzen
  // und die Zeile "base" komplett entfernen — sonst zeigen alle Links
  // fälschlich auf .../AMF-Wien.com/... statt auf die eigene Domain.
});
