/**
 * Sitemap Generator for Animal Liberation Now Website
 *
 * This script generates a sitemap.xml file for SEO purposes.
 * It includes all static routes and dynamic article pages.
 *
 * Usage: node sitemap-generator.js
 * Output: public/sitemap.xml
 *
 * ============================================================================
 * WEBSITE SITEMAP HIERARCHY
 * ============================================================================
 *
 * Active Pages (Routes):
 * ----------------------
 * /                           → HomePage
 * /activism                   → EventsPage (Activism)
 *   /activism/:id             → EventDetailPage
 * /resources                  → ResourcesPage
 *   /faqs                     → ArticlesPage (linked from Resources)
 *     /faqs/:id               → ArticleDetailPage
 * /who-are-we                 → WhoAreWePage
 * /support                    → SupportPage
 * /documentaries              → DocumentariesPage
 * /qr/:slug                   → QRPage (redirector)
 *
 * Disabled Pages (Commented Out):
 * -------------------------------
 * /about                      → AboutPage (commented)
 * /calendar                   → CalendarPage (commented)
 * /chapters                   → ChaptersPage (commented)
 *   /chapters/:id             → ChapterDetailPage (commented)
 *
 * ============================================================================
 * PUBLIC FOLDER STRUCTURE
 * ============================================================================
 *
 * Ideal Organization:
 * -------------------
 * public/
 * ├── logos/
 * │   ├── aln-icon.svg
 * │   └── animal-liberation-now-coloured-logo-dark.svg
 * ├── heroes/                          # All hero/banner images (WebP)
 * │   ├── home-hero.webp
 * │   ├── activism-hero.webp
 * │   ├── resources-hero.webp
 * │   ├── who-are-we-hero.webp
 * │   ├── support-hero.webp
 * │   └── documentaries-hero.webp
 * ├── events/                          # Event galleries (kebab-case names)
 * │   ├── bannerghatta-zoo-bengaluru/
 * │   ├── chennai-inauguration/
 * │   ├── cmrit/
 * │   ├── pondy-bazar/
 * │   ├── ramaiah-college/
 * │   ├── srm/
 * │   └── vadalur-zoo/
 * ├── outreach/                        # General activism/outreach photos
 * ├── team/                            # Team member photos
 * ├── articles/                        # Article-related images
 * ├── avatars/                         # User avatars
 * └── misc/                            # Miscellaneous website images
 *
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your website's base URL
const SITE_URL = 'https://animalliberationnow.org';

// Static routes with their priorities and change frequencies
const staticRoutes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/activism',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/resources',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/faqs',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/who-are-we',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/support',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/documentaries',
    priority: '0.7',
    changefreq: 'monthly',
  },
];

// Read FAQ/article data to generate dynamic routes
function getArticleRoutes() {
  try {
    const articlesDataPath = path.join(__dirname, 'src/data/articlesData.ts');
    const articlesData = fs.readFileSync(articlesDataPath, 'utf-8');

    // Extract article IDs using regex
    const idMatches = articlesData.matchAll(/id:\s*['"](\d+)['"]/g);
    const articleIds = Array.from(idMatches, match => match[1]);

    // Generate routes for each FAQ article
    return articleIds.map(id => ({
      path: `/faqs/${id}`,
      priority: '0.7',
      changefreq: 'monthly',
    }));
  } catch (error) {
    console.warn('Warning: Could not read articles data. Skipping FAQ routes.');
    console.warn('Error:', error.message);
    return [];
  }
}

// Read events data to generate dynamic routes
function getEventRoutes() {
  try {
    const eventsDataPath = path.join(__dirname, 'src/data/eventsData.ts');
    const eventsData = fs.readFileSync(eventsDataPath, 'utf-8');

    // Extract event IDs using regex
    const idMatches = eventsData.matchAll(/id:\s*['"](\d+)['"]/g);
    const eventIds = Array.from(idMatches, match => match[1]);

    // Generate routes for each event
    return eventIds.map(id => ({
      path: `/activism/${id}`,
      priority: '0.7',
      changefreq: 'monthly',
    }));
  } catch (error) {
    console.warn('Warning: Could not read events data. Skipping event routes.');
    console.warn('Error:', error.message);
    return [];
  }
}

// Generate XML sitemap content
function generateSitemap(routes) {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Main function
function generateSitemapFile() {
  console.log('🚀 Generating sitemap.xml...\n');

  // Combine static and dynamic routes
  const articleRoutes = getArticleRoutes();
  const eventRoutes = getEventRoutes();
  const allRoutes = [...staticRoutes, ...articleRoutes, ...eventRoutes];

  console.log('📄 Routes included:');
  console.log(`   - Static routes: ${staticRoutes.length}`);
  console.log(`   - FAQ routes: ${articleRoutes.length}`);
  console.log(`   - Event routes: ${eventRoutes.length}`);
  console.log(`   - Total routes: ${allRoutes.length}\n`);

  // Generate XML
  const sitemapXml = generateSitemap(allRoutes);

  // Write to public/sitemap.xml
  const outputPath = path.join(__dirname, 'public/sitemap.xml');

  try {
    fs.writeFileSync(outputPath, sitemapXml, 'utf-8');
    console.log('✅ Sitemap generated successfully!');
    console.log(`📁 Location: ${outputPath}`);
    console.log(`🌐 URL: ${SITE_URL}/sitemap.xml\n`);

    // Show file size
    const stats = fs.statSync(outputPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`📅 Generated: ${new Date().toLocaleString()}\n`);

    console.log('💡 Next steps:');
    console.log('   1. Run "npm run build" to include sitemap in your deployment');
    console.log(
      '   2. Submit sitemap to Google Search Console: https://search.google.com/search-console'
    );
    console.log('   3. Add to robots.txt: Sitemap: https://animalliberationnow.org/sitemap.xml\n');
  } catch (error) {
    console.error('❌ Error writing sitemap file:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateSitemapFile();
