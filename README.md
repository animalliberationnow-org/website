# Animal Liberation Now (ALN) Website

A modern, fast, and secure static website for Animal Liberation Now - an organization dedicated to ending animal exploitation through advocacy, education, and direct action.

[![Built with React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-cyan.svg)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Building](#-building)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Image Optimization](#-image-optimization)
- [Available Scripts](#-available-scripts)
- [Adding Content](#-adding-content)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Performance](#-performance)
- [License](#-license)

---

## ✨ Features

- 🚀 **Fast & Modern** - Built with React 18 and Vite for lightning-fast performance
- 🖼️ **Optimized Images** - WebP format with 96% size reduction (~25MB total)
- 🎨 **Dark/Light Theme** - User-controlled theme with system preference support
- 🔒 **Secure** - HTTPS, security headers, and best practices implemented
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG-compliant with semantic HTML and ARIA labels
- 💎 **Glassmorphism UI** - Modern glass-panel design with glow effects
- 📝 **Content Rich** - FAQs, events, resources, and educational materials
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt for search engines
- 🗺️ **Interactive Map** - Leaflet-based chapter location map
- ⚡ **Performance** - Optimized bundle size and lazy loading

---

## 🛠 Tech Stack

### Core

- **React 18.3.1** - UI library with hooks
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Build tool and dev server
- **React Router 6.22.3** - Client-side routing with future flags

### Styling

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - Vendor prefixes
- **Custom Theme System** - Dark/light mode with context API

### Maps & Geolocation

- **Leaflet 1.9.4** - Interactive map for chapter locations
- **OpenStreetMap** - Map tile provider
- **ipapi.co** - User location detection

### Icons & UI

- **React Icons (HeroIcons v2)** - Modern icon library
- **Simple Icons** - Social media icons
- **Inter Font** - Typography

### Development

- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **ImageMagick** - Image optimization script

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **ImageMagick** (for image optimization) - `sudo apt install imagemagick`

Check your versions:

```bash
node --version  # Should be v18.x.x or higher
npm --version   # Should be 9.x.x or higher
convert --version  # ImageMagick version
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/animalliberationnow-org/website.git
cd website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies from `package.json`.

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:5173**

---

## 💻 Development

### Development Server

```bash
npm run dev
```

Features:

- ⚡ Hot Module Replacement (HMR) - instant updates
- 🔍 TypeScript checking in real-time
- 🎨 Tailwind CSS with JIT compilation

### Code Quality

**Run Linter:**

```bash
npm run lint
```

Fix auto-fixable issues:

```bash
npm run lint -- --fix
```

**Type Checking:**

```bash
npx tsc --noEmit
```

### Generate Sitemap

After adding/removing articles or pages:

```bash
node sitemap-generator.js
```

This generates `public/sitemap.xml` with all routes and includes documentation about:
- Website sitemap hierarchy
- Public folder structure
- Ideal image organization

---

## 🏗 Building

### Production Build

```bash
npm run build
```

Output: `dist/` folder with optimized static files

**Build includes:**

- ✅ TypeScript compilation
- ✅ Code minification
- ✅ Tree shaking (removes unused code)
- ✅ Asset optimization
- ✅ CSS purging (removes unused Tailwind classes)

**Expected bundle sizes:**

- JavaScript: ~267KB (~79KB gzipped)
- CSS: ~20KB (~4.5KB gzipped)
- Images: ~25MB (WebP optimized)

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to test production build.

---

## 🚀 Deployment

The site is hosted in **S3** (`aln-website-v1`, `ap-south-2`) and served through **CloudFront** (`E37F2SI13R2RMO`, aliases `animalliberationnow.org` and `www.animalliberationnow.org`).

Deployment is currently **manual**. Requires AWS credentials with write access to the bucket and invalidation rights on the distribution.

```bash
# 1. Build
npm run build

# 2. Upload to S3 (--delete prunes files no longer in the build)
aws s3 sync dist/ s3://aln-website-v1/ --delete

# 3. Invalidate the CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E37F2SI13R2RMO \
  --paths "/*"
```

### ⚠️ Do not skip steps 2 and 3

Committing a change does **not** deploy it. A fix merged in July 2026 (a QR redirect corrected from `/documentaries` to `/resources`) sat undeployed for weeks because only the source was pushed — the live site kept serving the previously built bundle.

**Recommended:** re-apply the no-cache header on `index.html` after every sync.

```bash
aws s3 cp s3://aln-website-v1/index.html s3://aln-website-v1/index.html \
  --metadata-directive REPLACE \
  --cache-control "no-cache,must-revalidate" \
  --content-type "text/html"
```

`index.html` names which hashed JS bundles to load. If it gets cached, browsers keep requesting the old bundles regardless of what was uploaded — which is the same stale-content failure by a different route.

### Verifying a Deploy

```bash
# Which bundle is the live site actually serving?
curl -s https://animalliberationnow.org/ | grep -o 'assets/index-[^"]*\.js'

# Confirm index.html is not being cached
curl -sI https://animalliberationnow.org/ | grep -i cache-control
```

Compare the first result against the filename in your local `dist/assets/`. If they differ, the deploy didn't land.

> **Note:** this process is a candidate for automation via GitHub Actions (build, sync, and invalidate on push to `main`), which would remove the risk of forgetting a step.

---

## 📁 Project Structure

```
website/
├── public/                      # Static assets (served as-is)
│   ├── logos/                   # Logo files (SVG)
│   │   ├── aln-icon.svg
│   │   └── animal-liberation-now-coloured-logo-dark.svg
│   ├── heroes/                  # Hero/banner images (WebP, 1920x1080, ~200KB)
│   │   └── support-articles-hero.webp
│   ├── misc/                    # General website images (WebP, ~200KB)
│   │   ├── NS1.webp
│   │   ├── NS2.webp
│   │   ├── NS3.webp
│   │   └── NS4.webp
│   ├── events/                  # Event gallery images (WebP, 1600x1200, ~150KB)
│   │   ├── bannerghatta-zoo-bengaluru/
│   │   ├── chennai-inauguration/
│   │   ├── cmrit/
│   │   ├── pondy-bazar/
│   │   ├── ramaiah-college/
│   │   ├── srm/
│   │   └── vadalur-zoo/
│   ├── team/                    # Team member photos (WebP, 600x600, ~50KB)
│   ├── originals/               # Backup of original images (not deployed)
│   ├── robots.txt               # Search engine instructions
│   └── sitemap.xml              # Generated sitemap
│
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Layout/
│   │   │   ├── Header.tsx       # Navigation with theme toggle
│   │   │   ├── Footer.tsx       # Site footer with social links
│   │   │   └── Layout.tsx       # Main layout wrapper
│   │   ├── UI/
│   │   │   ├── Hero.tsx         # Hero section with background images
│   │   │   └── Section.tsx      # Section wrapper with dark/light variants
│   │   └── Map/
│   │       └── ChapterMap.tsx   # Interactive Leaflet map
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Home/
│   │   │   └── HomePage.tsx     # Landing page
│   │   ├── Events/
│   │   │   ├── EventsPage.tsx   # Events listing (Activism)
│   │   │   ├── EventDetailPage.tsx
│   │   │   └── EventCard.tsx
│   │   ├── Articles/
│   │   │   ├── ArticlesPage.tsx       # FAQs listing
│   │   │   ├── ArticleDetailPage.tsx  # Single FAQ
│   │   │   └── ArticleCard.tsx
│   │   ├── Resources/
│   │   │   └── ResourcesPage.tsx      # Resources hub (Learn More, FAQs, Activism Starter Kit)
│   │   ├── WhoAreWe/
│   │   │   └── WhoAreWePage.tsx       # Who Are We page
│   │   ├── Support/
│   │   │   └── SupportPage.tsx        # Volunteer form & social sharing
│   │   ├── QR/
│   │   │   └── QRPage.tsx             # QR code redirector
│   │   ├── Chapters/
│   │   │   ├── ChaptersPage.tsx       # Chapters listing (commented out)
│   │   │   └── ChapterDetailPage.tsx
│   │   └── NotFound/
│   │       └── NotFoundPage.tsx       # 404 page
│   │
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme provider (dark/light mode)
│   │
│   ├── data/                    # Static data (content)
│   │   ├── articlesData.ts      # FAQs content
│   │   ├── eventsData.ts        # Events data
│   │   └── chaptersData.ts      # Chapter locations
│   │
│   ├── App.tsx                  # Root component with routing
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles + Tailwind
│   └── vite-env.d.ts            # Vite type definitions
│
├── dist/                        # Production build (generated)
├── .claude/                     # Claude Code settings
│
├── index.html                   # HTML entry point
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS config (custom colors, glassmorphism)
├── tsconfig.json                # TypeScript config
├── eslint.config.js             # ESLint config
├── postcss.config.js            # PostCSS config
├── package.json                 # Dependencies & scripts
├── sitemap-generator.js         # Sitemap generator script (with docs)
├── optimize-images.sh           # Image optimization script (ImageMagick)
│
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🖼️ Image Optimization

All images are optimized to **WebP format** for maximum performance (96% size reduction).
`optimize-images.sh` also standardizes filenames (removes "Copy of " prefixes, spaces,
mixed casing) before optimizing.

### Running Image Optimization

```bash
# Make script executable (first time only)
chmod +x optimize-images.sh

# Dry run: preview filename renames only. Nothing is touched and
# optimization does NOT run.
./optimize-images.sh

# Rename files AND optimize them (WebP + JPG fallback) in one pass.
./optimize-images.sh --apply
```

### What It Does

- ✅ Renames files to kebab-case, category-specific naming conventions
- ✅ Sequentially numbers event gallery images (`thumb.webp`, `event-01.webp`, ...)
- ✅ Converts all JPG/PNG/HEIC images to WebP
- ✅ Resizes to appropriate dimensions
- ✅ Compresses to optimal quality
- ✅ Creates JPG fallbacks for old browsers
- ✅ Backs up originals to `public/originals/`
- ✅ Shows detailed statistics

Requires `pillow-heif` for HEIC support: `pip3 install --user pillow-heif`
(apt's `heif-convert` fails on many modern iPhone HEIC files).

### Ideal Image Sizes

The script automatically optimizes images to these specifications:

| Category | Dimensions | Quality | Target Size | Use Case |
|----------|-----------|---------|-------------|----------|
| **Heroes** | 1920x1080px | 85% | 150-300KB | Page backgrounds |
| **Events Full** | 1600x1200px | 80% | 150-250KB | Event galleries |
| **Events Thumb** | 800x600px | 75-80% | 50-100KB | Event cards |
| **Team Photos** | 600x600px | 80% | 30-60KB | Team member profiles |

### Performance Impact

- **Before:** ~592MB total
- **After:** ~25MB total
- **Reduction:** 96% smaller
- **Load Time:** 10-12x faster

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Start dev server with HMR |
| **Build** | `npm run build` | Create production build |
| **Preview** | `npm run preview` | Preview production build locally |
| **Lint** | `npm run lint` | Run ESLint on codebase |
| **Sitemap** | `node sitemap-generator.js` | Generate sitemap.xml |
| **Optimize Images** | `./optimize-images.sh` | Optimize all images to WebP |

---

## 📝 Adding Content

### Add a New FAQ Article

1. **Edit:** `src/data/articlesData.ts`
2. **Add article object:**
   ```typescript
   {
     id: '7',
     title: 'Your FAQ Title',
     excerpt: 'Brief summary...',
     content: '<p>Full HTML content...</p>',
     category: 'ethics',
     tags: ['tag1', 'tag2'],
     relatedArticles: ['1', '2']
   }
   ```
3. **Regenerate sitemap:** `node sitemap-generator.js`
4. **Build:** `npm run build`

### Add a New Event

1. **Edit:** `src/data/eventsData.ts`
2. **Add event object:**
   ```typescript
   {
     id: '7',
     title: 'Event Name',
     summary: 'Brief description...',
     date: '2026-02-15',
     place: 'Location Name',
     image: '/events/event-folder/image.webp',
     link: '/events/7',
     status: 'upcoming', // or 'recent'
     gallery: ['/events/...'] // optional
   }
   ```
3. **Add event images:** Place in `public/events/event-name/`
4. **Optimize images:** `./optimize-images.sh`

### Add a New Page

1. **Create component:** `src/pages/NewPage/NewPage.tsx`
2. **Add route:** `src/App.tsx`
   ```typescript
   const NewPage = lazy(() => import('./pages/NewPage/NewPage'));

   <Route path="/new-page" element={<NewPage />} />
   ```
3. **Add navigation:** `src/components/Layout/Header.tsx`
4. **Update sitemap:** Edit `sitemap-generator.js`

---

## 🎨 Theme System

The website supports dark and light themes using React Context:

### Using Theme in Components

```typescript
import { useTheme } from '../../context/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-primary text-text-main">
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Theme-Aware Classes

Use these Tailwind classes for automatic theme support:

- `bg-primary` - Background color
- `text-text-main` - Main text color
- `text-text-muted` - Muted text color
- `border-glass-border` - Border color
- `glass-panel` - Glassmorphism panel
- `shadow-glow-white` - Glow effect
- `hover:shadow-neon` - Neon glow on hover

---

## 🗺️ Current Sitemap

### Active Routes

```
/                      → HomePage
/activism              → EventsPage (Activism navigation)
  /activism/:id        → EventDetailPage
/faqs                  → ArticlesPage (linked from Resources page)
  /faqs/:id            → ArticleDetailPage
/resources             → ResourcesPage (includes Learn More, FAQs preview, Activism Starter Kit)
/who-are-we            → WhoAreWePage
/support               → SupportPage (Join Us button)
/qr/:slug              → QRPage (QR code redirector)
```

### Disabled Routes (Commented Out in App.tsx)

```
/chapters              → ChaptersPage
  /chapters/:id        → ChapterDetailPage
```

### Navigation Structure

**Desktop & Mobile Header:**
- Home (icon)
- Activism → /activism
- Resources → /resources
- Who Are We? → /who-are-we
- Contact Us (scroll to footer)
- Join Us (button) → /support
- Theme Toggle (sun/moon icon)

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Images Not Loading

1. Check if images are in WebP format
2. Verify paths in data files (`eventsData.ts`, `chaptersData.ts`)
3. Run optimization script: `./optimize-images.sh`
4. Check browser console for 404 errors

### Port 5173 Already in Use

```bash
# Kill the process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Type Errors

```bash
# Check TypeScript errors
npx tsc --noEmit

# Common fixes:
# - Missing prop types
# - Incorrect import paths
# - Missing type definitions
```

### Map Not Loading

1. Check browser console for Leaflet errors
2. Ensure Leaflet CSS is loaded (ChapterMap.tsx:20-23)
3. Clear browser cache
4. Check network tab for failed script loads

### Console Warnings

**React Router Warnings:** Fixed with future flags in `main.tsx`

**Cookie/CSP Warnings:** Normal for embedded content (YouTube, Google Forms) - can be safely ignored

**Feature Policy Warnings:** From third-party embeds - not fixable, no impact on functionality

---

## 📊 Performance

### Current Metrics

- **Lighthouse Performance:** 90+
- **First Contentful Paint:** ~1.2s
- **Time to Interactive:** ~2.5s
- **Total Bundle Size:** ~267KB (79KB gzipped)
- **Images Total:** ~25MB (WebP optimized)

### Performance Features

- ✅ Image optimization (WebP, 96% reduction)
- ✅ Code splitting with lazy loading
- ✅ Tree shaking
- ✅ CSS purging
- ✅ Minification
- ✅ Gzip compression
- ✅ CDN-ready static files

### Further Optimizations

- [ ] Implement service worker (PWA)
- [ ] Add resource hints (preload/prefetch)
- [ ] Enable HTTP/2 server push
- [ ] Implement image lazy loading
- [ ] Add skeleton loading states

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork & Clone

```bash
git clone https://github.com/animalliberationnow-org/website.git
cd website
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

- Follow existing code style
- Write meaningful commit messages
- Test your changes locally
- Run linter: `npm run lint`
- Optimize any new images: `./optimize-images.sh`

### 4. Commit & Push

```bash
git add .
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to GitHub and create a PR
- Describe your changes
- Link any related issues

### Code Style Guidelines

- **TypeScript:** Use interfaces for props, avoid `any`
- **Components:** Functional components with hooks
- **Naming:** PascalCase for components, camelCase for functions
- **CSS:** Use Tailwind utilities, custom CSS only when needed
- **Imports:** Organize: React → third-party → local components → styles
- **Images:** Always use WebP format, run optimization script

---

## 🔐 Security

- ✅ All dependencies regularly updated
- ✅ No sensitive data in codebase
- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Content Security Policy implemented
- ✅ XSS protection via React
- ✅ Input validation on forms
- ✅ Third-party iframe sandboxing

**Report security issues:** Contact maintainers directly at security@animalliberationnow.org

---

## 🌐 Browser Support

- Chrome/Edge: Last 2 versions ✅
- Firefox: Last 2 versions ✅
- Safari: Last 2 versions ✅
- Mobile iOS: 12+ ✅
- Mobile Android: 8+ ✅
- WebP Support: 95%+ (JPG fallback provided) ✅

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Leaflet** - For the interactive maps
- **React Icons** - For the beautiful icons
- **ImageMagick** - For powerful image optimization
- **All Contributors** - Thank you for your contributions!

---

## 📞 Contact & Support

- **Website:** https://animalliberationnow.org
- **Email:** contact@animalliberationnow.org
- **Instagram:** [@animalliberationnow](https://www.instagram.com/animalliberationnow)
- **Facebook:** [Animal Liberation Now!](https://www.facebook.com/animalliberationnowofficial)
- **X (Twitter):** [@alnofficial](https://x.com/alnofficial)
- **GitHub Issues:** [Report bugs or request features](https://github.com/animalliberationnow-org/website/issues)

---

## 🗺 Roadmap

### Phase 1 ✅ (Completed - January 2026)

- [x] Basic website structure
- [x] Static pages (Home, Events, Resources, FAQs, Support, Who Are We)
- [x] Responsive design with mobile-first approach
- [x] Dark/Light theme toggle
- [x] SEO optimization (sitemap, robots.txt)
- [x] Interactive chapter map with Leaflet
- [x] Image optimization (WebP, 96% reduction)
- [x] Glassmorphism UI design
- [x] Documentation (README, sitemap comments)

### Phase 2 🚧 (Q2 2026)

- [ ] CMS integration (Sanity/Contentful)
- [ ] Newsletter subscription
- [ ] Event registration forms
- [ ] Contact forms with validation
- [ ] Analytics integration (privacy-focused)
- [ ] Image lazy loading
- [ ] PWA support

### Phase 3 📋 (Q3 2026)

- [ ] Multi-language support (English, Tamil, Hindi)
- [ ] Member portal with authentication
- [ ] Donation integration
- [ ] Blog with comments
- [ ] Advanced search functionality
- [ ] Social media feed integration

### Phase 4 🔮 (Q4 2026)

- [ ] Mobile app (React Native)
- [ ] Offline support
- [ ] Push notifications
- [ ] Advanced analytics dashboard
- [ ] A/B testing framework
- [ ] Community forum

---

## 🎯 Quick Links

- [Live Website](https://animalliberationnow.org)
- [GitHub Repository](https://github.com/animalliberationnow-org/website)
- [Issue Tracker](https://github.com/animalliberationnow-org/website/issues)
- [Sitemap Generator Docs](./sitemap-generator.js) (includes architecture docs)
- [Image Optimization Script](./optimize-images.sh) (includes size guidelines)

---

**Made with ❤️ for animals by the Animal Liberation Now! team**

_Last Updated: July 12, 2026_
