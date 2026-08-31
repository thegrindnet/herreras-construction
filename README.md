# Herrera's Construction Website

A production-ready single-page React/Vite website for Herrera's Construction, a roofing and construction business serving the El Paso and Las Cruces region.

## Design inspiration

Visual inspiration: https://www.tigerairtx.com/

The reference was used only for high-level design direction such as a bold service-business hero, CTA-forward navigation, image-led service presentation, strong uppercase typography, project gallery treatment, social proof, service-area emphasis, and practical contact/footer structure. No source code, branding, copy, or protected assets from Tiger Air are included.

## Technologies

- React
- Vite
- JavaScript / JSX
- Plain CSS
- GitHub Actions for GitHub Pages

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## Production build

```bash
npm run build
```

Vite writes the production build to `dist/` (not `build/`).

## GitHub Pages deployment

1. Create a GitHub repository named `herreras-construction`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. The included `.github/workflows/deploy.yml` workflow prepares a lockfile if one has not been committed yet, then runs `npm ci`, builds the Vite project, uploads `dist`, and deploys it. After your first local `npm install`, commit the generated `package-lock.json` for fully reproducible installs.
6. Expected project URL: `https://thegrindnet.github.io/herreras-construction/`

The Vite config uses `base: "./"` so built assets remain portable under a GitHub Pages project subdirectory.

## Business information

Business details, services, reviews, FAQs, service area, phone number, placeholder email, Instagram profile, and placeholder Facebook link live in:

`src/utils/constants.js`

Change the phone, email, social URLs, tagline, hours, services, or reviews there.

## Client images and logo

The website now uses the updated Herrera's Construction logo and the ten job-site photos supplied by the client. Web-optimized copies are stored in `src/assets/images/`. They are used in the hero, About section, project gallery, contact CTA, favicon, and Open Graph image.

The original upload is not required at runtime; the site imports the optimized local assets through Vite.

## Project structure

```text
herreras-construction/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.png
│   └── og-image.png
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── facebook.svg
│   │   │   └── instagram.svg
│   │   └── images/
│   │       ├── gallery-01-tile-roof.webp
│   │       ├── gallery-02-shingle-roof.webp
│   │       ├── gallery-03-concrete-work.webp
│   │       ├── gallery-04-roofing-construction.webp
│   │       ├── gallery-05-commercial-site.webp
│   │       ├── gallery-06-flat-roof.webp
│   │       ├── gallery-07-material-lift.webp
│   │       ├── gallery-08-roof-deck.webp
│   │       ├── gallery-09-exterior-work.webp
│   │       ├── gallery-10-addition-work.webp
│   │       ├── herreras-construction-logo.png
│   │       ├── roofing-about.webp
│   │       ├── roofing-cta.webp
│   │       └── roofing-hero.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Faq/
│   │   │   ├── Faq.css
│   │   │   └── Faq.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── ServiceArea/
│   │   │   ├── ServiceArea.css
│   │   │   └── ServiceArea.jsx
│   │   ├── Services/
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.jsx
│   │   └── TrustBar/
│   │       ├── TrustBar.css
│   │       └── TrustBar.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
