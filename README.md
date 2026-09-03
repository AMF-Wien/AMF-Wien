# AMF-Wien.com — Astro-Grundgerüst

## Wichtig zuerst
Falls noch nicht erledigt: GitHub Personal Access Token unter
github.com/settings/tokens widerrufen und neu erstellen — der bisherige
wurde im Klartext in einem Chat geteilt und gilt als kompromittiert.

## Setup (lokal, macOS)

```bash
# Im leeren, geklonten Repo-Ordner:
# Diesen Ordnerinhalt (astro-project/*) dorthin kopieren, dann:

npm install
npm run dev
# → http://localhost:4321
```

## Struktur

- `src/pages/index.astro` — Startseite
- `src/pages/blog/index.astro` — Blog-Übersicht
- `src/pages/blog/[...slug].astro` — Template für einzelne Artikel
- `src/content/blog/*.md` — Blogartikel (neuer Artikel = neue .md-Datei, kein Code nötig)
- `src/layouts/Layout.astro` — gemeinsames Grundgerüst (Header/Footer)
- `public/styles/global.css` — Design (Farben, Typografie), identisch zur Meta-Ads-Bildsprache der Agentur

## Neuen Blogartikel hinzufügen

Neue Datei in `src/content/blog/` anlegen, z.B. `mein-artikel.md`:

```markdown
---
title: "Titel des Artikels"
excerpt: "Kurzbeschreibung für die Vorschau-Kachel."
date: 2026-09-01
draft: false
---

Text des Artikels in Markdown.
```

Erscheint automatisch in der Blog-Übersicht und auf der Startseite (die 3 neuesten).

## Deployment (empfohlen: Vercel oder Netlify)

1. Bei vercel.com (oder netlify.com) mit GitHub-Account anmelden
2. Repo `AMF-Wien/AMF-Wien.com` importieren
3. Build-Befehl: `npm run build`, Output-Ordner: `dist`
4. Bei jedem `git push` auf `main` wird automatisch neu deployed

## Git — ersten Commit erstellen

```bash
git add .
git commit -m "Astro-Grundgerüst: Homepage + Blog"
git push origin main
```

## Offene Punkte

- Logo/Favicon in `public/` ergänzen
- LinkedIn-Company-Page-Link im Footer (`src/layouts/Layout.astro`) eintragen, sobald angelegt
- Domain (amf-wien.com) beim Hoster auf Vercel/Netlify verweisen (DNS)
