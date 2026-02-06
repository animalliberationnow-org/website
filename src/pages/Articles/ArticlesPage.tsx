import { useState, useEffect } from 'react';
import { HiFunnel, HiMagnifyingGlass, HiArrowLongRight } from 'react-icons/hi2';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { articles } from '../../data/articlesData';
import ArticleCard from './ArticleCard';

type ArticleCategory = 'all' | 'ethics' | 'culture' | 'myths' | 'research';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<ArticleCategory>('all');
  const [showAll, setShowAll] = useState(false); // State to handle "Show More"

  // Reset "Show More" when filters change to avoid confusion
  useEffect(() => {
    setShowAll(false);
  }, [category, searchQuery]);

  const filteredArticles = articles.filter(article => {
    if (category !== 'all' && article.category !== category) {
      return false;
    }

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

  // Decide which articles to display based on showAll state
  const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, 6);

  return (
    <>
      <Hero
        title="FAQs"
        subtitle="Frequently asked questions about ethics and animal rights."
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
              <HiFunnel className="h-5 w-5 mr-2 text-black" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ArticleCategory)}
                className="py-2 pl-3 pr-10 w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-black font-medium"
              >
                <option value="all">All Categories</option>
                <option value="ethics">Ethics</option>
                <option value="culture">Culture</option>
                <option value="myths">Myths</option>
                <option value="research">Research</option>
              </select>
            </div>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Show More Button - Positioned to the Right */}
            {!showAll && filteredArticles.length > 6 && (
              <div className="mt-12 flex justify-end">
                <button
                  onClick={() => setShowAll(true)}
                  className="group flex items-center gap-2 text-black font-bold text-lg hover:text-accent transition-colors"
                >
                  Show More Articles
                  <HiArrowLongRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <HiMagnifyingGlass className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-black">No Articles Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any articles matching your search criteria.
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
    </>
  );
};

export default ArticlesPage;