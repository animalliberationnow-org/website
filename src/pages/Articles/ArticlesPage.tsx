import { HiFunnel, HiMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { articles } from '../../data/articlesData';
import ArticleCard from './ArticleCard';

type ArticleCategory = 'all' | 'advocacy' | 'news' | 'opinion' | 'research';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<ArticleCategory>('all');

  const filteredArticles = articles.filter(article => {
    // Apply category filter
    if (category !== 'all' && article.category !== category) {
      return false;
    }

    // Apply search filter (check title, excerpt, and content)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <>
      <Hero
        title="Articles & Resources"
        subtitle="Stay informed with our latest articles, news, and resources on animal liberation."
        backgroundImage="/images/heroes/support-articles-hero.jpg"
      />

      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMagnifyingGlass className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative inline-block w-full md:w-auto">
            <div className="flex items-center">
              <HiFunnel className="h-5 w-5 mr-2" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ArticleCategory)}
                className="py-2 pl-3 pr-10 w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              >
                <option value="all">All Categories</option>
                <option value="advocacy">Advocacy</option>
                <option value="news">News</option>
                <option value="opinion">Opinion</option>
                <option value="research">Research</option>
              </select>
            </div>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No Articles Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any articles matching your search criteria. Try different keywords or filter settings.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategory('all');
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Section>

      <Section
        title="Subscribe to Our Newsletter"
        subtitle="Get the latest articles and updates delivered to your inbox."
        dark={true}
        className="py-12"
      >
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-primary"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ArticlesPage;
