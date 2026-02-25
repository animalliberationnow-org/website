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
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🚀 **Fast & Modern** - Built with React 18 and Vite for lightning-fast performance
- 🔒 **Secure** - HTTPS, security headers, and best practices implemented
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG-compliant with semantic HTML and ARIA labels
- 🎨 **Beautiful UI** - Clean, professional design with Tailwind CSS
- 📝 **Content Rich** - Articles, events, and educational resources
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt for search engines
- 🌐 **Global CDN** - Fast loading worldwide via CloudFront (when deployed to AWS)
- 📊 **Analytics Ready** - Easy integration with Google Analytics or alternatives
- ⚡ **Performance** - Optimized bundle size and lazy loading

---

## 🛠 Tech Stack

### Core

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Build tool and dev server
- **React Router 6.22.3** - Client-side routing

### Styling

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - Vendor prefixes

### Icons & UI

- **React Fonts** - Modern icon library
- **Inter Font** - Typography

### Utilities

- **date-fns 3.3.1** - Date formatting and manipulation

### Development

- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Check your versions:

```bash
node --version  # Should be v18.x.x or higher
npm --version   # Should be 9.x.x or higher
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/animalliberationnow-org.git
cd animalliberationnow-org/website
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

This generates `public/sitemap.xml` with all routes.

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

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to test production build.

## 📁 Project Structure

```
website/
├── public/                      # Static assets (served as-is)
│   ├── aln-icon.svg            # Logo/favicon
│   ├── robots.txt              # Search engine instructions
│   ├── sitemap.xml             # Generated sitemap
│   ├── outreach/               # Event photos
│   ├── team-members/           # Team headshots
│   └── website-section/        # Hero images
│
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── Layout.tsx      # Main layout wrapper
│   │   └── UI/                 # Shared UI components
│   │       ├── Hero.tsx        # Hero section
│   │       └── Section.tsx     # Section wrapper
│   │
│   ├── pages/                  # Page components (routes)
│   │   ├── Home/
│   │   │   └── HomePage.tsx    # Landing page
│   │   ├── About/
│   │   │   └── AboutPage.tsx   # About page
│   │   ├── Calendar/
│   │   │   ├── CalendarPage.tsx  # Events listing
│   │   │   └── EventCard.tsx     # Event card component
│   │   ├── Articles/
│   │   │   ├── ArticlesPage.tsx       # Articles listing
│   │   │   ├── ArticleDetailPage.tsx  # Single article
│   │   │   └── ArticleCard.tsx        # Article card
│   │   ├── Support/
│   │   │   └── SupportPage.tsx  # Support/donate page
│   │   └── NotFound/
│   │       └── NotFoundPage.tsx # 404 page
│   │
│   ├── data/                   # Static data (content)
│   │   ├── articlesData.ts     # Articles content
│   │   └── eventsData.ts       # Events data
│   │
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles + Tailwind
│   └── vite-env.d.ts           # Vite type definitions
│
├── dist/                       # Production build (generated)
├── .github/                    # GitHub Actions workflows
├── .claude/                    # Claude Code settings
│
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── eslint.config.js            # ESLint config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies & scripts
├── sitemap-generator.js        # Sitemap generator script
│
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
```

---

## 📜 Available Scripts

| Script          | Command                     | Description                      |
| --------------- | --------------------------- | -------------------------------- |
| **Development** | `npm run dev`               | Start dev server with HMR        |
| **Build**       | `npm run build`             | Create production build          |
| **Preview**     | `npm run preview`           | Preview production build locally |
| **Lint**        | `npm run lint`              | Run ESLint on codebase           |
| **Sitemap**     | `node sitemap-generator.js` | Generate sitemap.xml             |

### Custom Scripts (Add to package.json)

```json
"scripts": {
  "type-check": "tsc --noEmit",
  "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
  "clean": "rm -rf dist node_modules package-lock.json"
}
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork & Clone

```bash
git fork https://github.com/your-org/animalliberationnow-org.git
git clone https://github.com/YOUR_USERNAME/animalliberationnow-org.git
cd animalliberationnow-org/website
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

---

## 📝 Adding Content

### Add a New Article

1. **Edit:** `src/data/articlesData.ts`
2. **Add article object:**
   ```typescript
   {
     id: '7',
     title: 'Your Article Title',
     excerpt: 'Brief summary...',
     content: 'Full HTML content...',
     image: 'https://...',
     author: 'Author Name',
     date: '2026-01-25',
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
     date: '2026-02-15',
     time: '4:00 PM - 7:00 PM',
     location: 'Location Name',
     description: 'Event description...',
     image: '/outreach/event-image.jpg',
     type: 'outreach'
   }
   ```

### Add a New Page

1. **Create component:** `src/pages/NewPage/NewPage.tsx`
2. **Add route:** `src/App.tsx`

   ```typescript
   import NewPage from './pages/NewPage/NewPage';

   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add navigation:** `src/components/Layout/Header.tsx`
4. **Update sitemap:** Edit `sitemap-generator.js`

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

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

### ESLint Errors

```bash
# Auto-fix issues
npm run lint -- --fix

# Disable specific rules (not recommended)
# Add to eslint.config.js
```

---

## 🔐 Security

- ✅ All dependencies regularly updated
- ✅ No sensitive data in codebase
- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Content Security Policy implemented
- ✅ XSS protection via React

**Report security issues:** Contact maintainers directly

---

## 📊 Performance

**Current Metrics:**

- Lighthouse Performance: 90+
- First Contentful Paint: ~1.2s
- Time to Interactive: ~2.5s
- Bundle Size: 267KB (79KB gzipped)

**Optimization Checklist:**

- [ ] Optimize images (target: <200KB each)
- [ ] Implement code splitting
- [ ] Add lazy loading for routes
- [ ] Enable service worker (PWA)
- [ ] Optimize fonts loading

---

## 🌐 Browser Support

- Chrome/Edge: Last 2 versions ✅
- Firefox: Last 2 versions ✅
- Safari: Last 2 versions ✅
- Mobile iOS: 12+ ✅
- Mobile Android: 8+ ✅

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **React-fonts** - For the beautiful icons
- **All Contributors** - Thank you for your contributions!

---

## 📞 Contact & Support

- **Website:** https://animalliberationnow.org
- **Email:** contact@animalliberationnow.org
- **Instagram:** [@alnchennai](https://www.instagram.com/alnchennai)
- **GitHub Issues:** [Report bugs or request features](https://github.com/your-org/animalliberationnow-org/issues)

---

## 🗺 Roadmap

### Phase 1 ✅ (Current)

- [x] Basic website structure
- [x] Static pages (Home, About, Calendar, Articles, Support)
- [x] Responsive design
- [x] SEO optimization (sitemap, robots.txt)
- [x] Documentation

### Phase 2 🚧 (Q2 2026)

- [ ] CMS integration (Sanity/Contentful)
- [ ] Newsletter subscription
- [ ] Event registration forms
- [ ] Contact forms
- [ ] Analytics integration

### Phase 3 📋 (Q3 2026)

- [ ] Multi-language support (English, Tamil, Hindi)
- [ ] Member portal
- [ ] Donation integration
- [ ] Blog with comments
- [ ] Social media integration

### Phase 4 🔮 (Q4 2026)

- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] A/B testing

---

## 🎯 Quick Links

- [Live Website](https://animalliberationnow.org)
- [GitHub Repository](https://github.com/your-org/animalliberationnow-org)
- [Issue Tracker](https://github.com/your-org/animalliberationnow-org/issues)

---

**Made with ❤️ for animals by the Animal Liberation Now! team**

_Last Updated: January 25, 2026_
