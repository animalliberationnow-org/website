import { useEffect, useMemo, useState } from 'react';
import { HiArrowLongRight, HiArrowLeft, HiFunnel, HiMagnifyingGlass, HiTag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { articles } from '../../data/articlesData';
import ArticleCard from './ArticleCard';

type ArticleCategory = 'all' | 'ethics' | 'culture' | 'myths' | 'research';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<ArticleCategory>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [showAll, setShowAll] = useState(false); // State to handle "Show More"

  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Reset "Show More" when filters change to avoid confusion
  useEffect(() => {
    setShowAll(false);
  }, [category, searchQuery, selectedTag]);

  const filteredArticles = articles.filter(article => {
    if (category !== 'all' && article.category !== category) {
      return false;
    }

    if (selectedTag !== 'all' && !article.tags.includes(selectedTag)) {
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
        backgroundImage="/misc/NS4.webp"
      />

      <Section>
        {/* Back to Resources Link */}
        <div className="mb-8">
          <Link
            to="/resources"
            className="group inline-flex items-center gap-2 text-text-main hover:text-accent transition-colors font-bold"
          >
            <HiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMagnifyingGlass className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
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

            {/* Tag Filter */}
            <div className="relative inline-block w-full md:w-auto">
              <div className="flex items-center">
                <HiTag className="h-5 w-5 mr-2 text-black" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="py-2 pl-3 pr-10 w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-black font-medium"
                >
                  <option value="all">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>
                      {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </option>
                  ))}
                </select>
              </div>
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
                  Show More FAQs
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
                setSelectedTag('all');
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
