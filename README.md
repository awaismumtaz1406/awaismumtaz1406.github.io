# Awais Mumtaz — Developer Portfolio (React & TypeScript)

Modern, high-performance portfolio application built with React 19, TypeScript, and Vite. Features dark/light mode switching, interactive credential lightbox modal, responsive mobile drawer navigation, and clean accessible markup.

---

## Architecture & Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Modern CSS design system with custom CSS variables, glassmorphic cards, and dark/light mode themes
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Icons**: Inline SVG icons optimized for performance and accessibility

---

## Project Structure

```
├── index.html                 # Entry HTML template with SEO and OpenGraph meta tags
├── vite.config.ts             # Vite configuration with React plugin
├── tsconfig.json              # TypeScript compilation settings
├── css/
│   └── style.css              # Theme-adaptive design system & components
├── src/
│   ├── main.tsx               # React application entry point
│   ├── App.tsx                # Main App shell, theme manager, and scrollspy
│   ├── types.ts               # Strong TypeScript interfaces for portfolio data
│   ├── vite-env.d.ts          # Vite client ambient types
│   ├── data/
│   │   └── portfolio.ts       # Typed portfolio content data
│   └── components/
│       ├── Header.tsx         # Navigation header, theme switcher & mobile drawer
│       ├── Hero.tsx           # Hero introduction, status badge, and CTA buttons
│       ├── ClientWork.tsx     # Client deliverables & verified testimonial
│       ├── Projects.tsx       # Flagship projects showcase with category tags
│       ├── Experience.tsx     # Work experience timeline & leadership spotlight
│       ├── Certifications.tsx # Academic degree & Google verified credentials
│       ├── Contact.tsx        # Direct contact options & resume download
│       ├── Footer.tsx         # Footer branding & social media links
│       ├── FloatingWhatsApp.tsx # Floating contact shortcut with pulse animation
│       └── CertModal.tsx      # Lightbox modal for viewing PDF & image certificates
├── assets/                    # Certificates, recommendation letters & profile photos
└── resume.pdf                 # Resume PDF for direct download
```

---

## Development

To run the development server locally:

```bash
npm install
npm run dev
```

The app will be accessible at `http://localhost:3000`.

## Production Build

To build the static production distribution:

```bash
npm run build
```

To type-check without emitting:

```bash
npm run lint
```
