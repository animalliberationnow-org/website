import { format, parseISO } from 'date-fns';
import { useEffect } from 'react';
import { HiChevronLeft, HiClock, HiShare, HiTag, HiUser } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import Section from '../../components/UI/Section';
import { articles } from '../../data/articlesData';
import ArticleCard from './ArticleCard';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  // If article not found
  if (!article) {
    return (
      <Section>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/articles" className="btn btn-primary">
            Back to FAQs
          </Link>
        </div>
      </Section>
    );
  }

  const { title, content, image, author, date, category, tags, relatedArticles } = article;
  const formattedDate = format(parseISO(date), 'MMMM d, yyyy');

  // Get related articles
  const relatedArticlesList = relatedArticles
    ? articles.filter(a => relatedArticles.includes(a.id))
    : [];

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this article: ${title}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert('Share this article with friends!');
    }
  };

  return (
    <>
      {/* Article Header */}
      <div className="relative min-h-[50vh] flex items-center bg-primary text-secondary">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 to-primary/90" />

        {/* Content */}
        <div className="container-custom relative z-20 py-16">
          <Link to="/articles" className="inline-flex items-center text-secondary hover:text-accent transition-colors mb-8">
            <HiChevronLeft className="mr-1 h-4 w-4" />
            Back to FAQs
          </Link>

          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

            <div className="flex items-center flex-wrap text-secondary/80 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <HiUser className="h-5 w-5 mr-2" />
                <span>{author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <HiClock className="h-5 w-5 mr-2" />
                <span>{formattedDate}</span>
              </div>
              <button
                onClick={shareArticle}
                className="flex items-center text-secondary/80 hover:text-accent transition-colors mb-2"
                aria-label="Share article"
              >
                <HiShare className="h-5 w-5 mr-2" />
                <span>Share</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <div key={tag} className="flex items-center text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                  <HiTag className="h-3 w-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/avatars/default-author.jpg"
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{author}</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
                <button
                  onClick={shareArticle}
                  className="flex items-center text-gray-600 hover:text-accent transition-colors"
                  aria-label="Share article"
                >
                  <HiShare className="h-5 w-5 mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <div key={tag} className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                      <HiTag className="h-4 w-4 mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {relatedArticlesList.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticlesList.map(related => (
                      <div key={related.id} className="flex items-start">
                        <Link to={`/articles/${related.id}`} className="block w-20 h-20 flex-shrink-0 mr-4">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </Link>
                        <div>
                          <Link
                            to={`/articles/${related.id}`}
                            className="font-medium hover:text-accent transition-colors"
                          >
                            {related.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{format(parseISO(related.date), 'MMM d, yyyy')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="mb-4">Stay updated with our latest articles and news.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <button type="submit" className="btn btn-primary w-full">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* More Articles */}
      {relatedArticlesList.length > 0 && (
        <Section
          title="More Articles You Might Like"
          dark={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {relatedArticlesList.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Section>
      )}

      {/* Call to Action */}
      <Section>
        <div className="bg-primary text-secondary rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a world where animals are no longer exploited, abused, or treated as commodities.
          </p>
          <Link to="/support" className="btn btn-primary">
            Support Our Work
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ArticleDetailPage;
