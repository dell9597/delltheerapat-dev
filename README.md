# Frontend Architect Portfolio — Next.js Landing Page

A production-ready, bilingual (TH/EN) portfolio landing page for a Senior Frontend Developer / Architect.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | Framework (App Router) |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Scroll animations |
| Lucide React | 0.400 | Icons |
| TypeScript | 5 | Type safety |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + JSON-LD
│   ├── page.tsx            # Main page (lang state wired here)
│   └── globals.css         # Tailwind + custom utilities
├── components/
│   ├── Navbar.tsx          # Sticky nav + dark mode + lang toggle
│   ├── HeroSection.tsx     # Hero + stats + floating code card
│   ├── TrustBar.tsx        # Company logos + tech stack badges
│   ├── ServicesSection.tsx # 3 service cards with features
│   ├── WorkSection.tsx     # Case study cards with metrics
│   ├── InsightsSection.tsx # Blog/thought leadership cards
│   ├── ContactSection.tsx  # Contact form + social links
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── i18n.ts             # All EN/TH translations (JSON objects)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy CI/CD
├── next.config.js          # output: 'export' for static build
├── tailwind.config.ts      # Dark mode, custom fonts, animations
└── tsconfig.json
```

---

## 🌍 Internationalization (i18n)

All text is stored in `lib/i18n.ts` as typed JSON objects:

```ts
import { translations, Lang } from '@/lib/i18n';
const t = translations['en']; // or 'th'
```

Language toggle is managed via React state in `app/page.tsx` and passed as props — no external i18n library needed, keeping the bundle lean.

---

## 🌙 Dark Mode

- Uses `class` strategy (Tailwind `darkMode: 'class'`)
- Toggle button in Navbar with animated Sun/Moon icon
- Persisted in `localStorage`
- Instant flash prevention script in `<head>` (no FOUC)

---

## 📦 Static Export (GitHub Pages)

```bash
npm run build   # outputs to /out
```

`next.config.js` is configured with:
```js
output: 'export'
trailingSlash: true
images: { unoptimized: true }
```

### GitHub Pages Setup

1. Push to GitHub repo
2. Go to **Settings → Pages → Source: GitHub Actions**
3. Push to `main` branch → auto-deploys via `.github/workflows/deploy.yml`

**If deploying to a subpath** (e.g. `username.github.io/repo-name`), add to `next.config.js`:
```js
basePath: '/repo-name',
assetPrefix: '/repo-name/',
```

---

## ✏️ Customization Checklist

- [ ] `app/layout.tsx` — Update name, domain URL, og:image path
- [ ] `lib/i18n.ts` — Replace all placeholder text with real content
- [ ] `components/TrustBar.tsx` — Replace company names with real clients
- [ ] `components/WorkSection.tsx` — Add real project data & screenshots
- [ ] `components/ContactSection.tsx` — Update email/LinkedIn/GitHub links
- [ ] `public/` — Add `og-image.png` (1200×630px) for social sharing
- [ ] `components/Navbar.tsx` — Update brand name from `dev.arch`

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Brand Orange | `#ea580c` (orange-600) | CTAs, accents, links |
| Background Light | `#ffffff` | Light mode bg |
| Background Dark | `#09090b` (neutral-950) | Dark mode bg |
| Font | Sora | Headings + body |
| Mono Font | JetBrains Mono | Code snippets |

---

## 📬 Contact Form

The form in `ContactSection.tsx` uses a basic `onSubmit` handler. To wire it to a real backend, replace the handler with:

- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', ...)`
- **Resend / EmailJS**: swap in their SDK
- **Next.js API Route**: add `app/api/contact/route.ts`

---

## 📈 SEO Features

- `Metadata` API in `layout.tsx` (title, description, og, twitter)
- Bilingual `alternates.languages` links
- JSON-LD `Person` schema for Google rich results
- Semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- `<h1>` → `<h2>` → `<h3>` hierarchy respected per section
