import { format, parseISO } from 'date-fns';
import { useEffect } from 'react';
import { HiChevronLeft, HiClock, HiShare, HiTag } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import Section from '../../components/UI/Section';
import { articles } from '../../data/articlesData';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <Section>
        <div className="text-center py-12 text-black">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <Link to="/faqs" className="btn btn-primary">Back to FAQs</Link>
        </div>
      </Section>
    );
  }

  const { title, content, date, category, tags, relatedArticles } = article;
  const formattedDate = format(parseISO(date), 'MMMM d, yyyy');

  const relatedArticlesList = relatedArticles
    ? articles.filter(a => relatedArticles.includes(a.id))
    : [];

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({ title, text: `Check out: ${title}`, url: window.location.href });
    } else {
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative bg-white text-black border-b border-gray-100 pt-16 md:pt-20">
        <div className="container-custom relative z-20 py-10 md:py-12">
          <Link to="/faqs" className="inline-flex items-center text-black font-bold hover:text-accent transition-colors mb-6 relative z-30">
            <HiChevronLeft className="mr-1 h-5 w-5 stroke-2" />
            Back to FAQs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
              <div className="flex items-center text-black mb-6 font-bold">
                <HiClock className="h-5 w-5 mr-2 text-accent" />
                <span>{formattedDate}</span>
              </div>
            </div>

            {/* Right Side: Related Topics */}
            {relatedArticlesList.length > 0 && (
              <div className="lg:col-span-4 bg-gray-300 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-200">Related Topics</h3>
                <ul className="space-y-3">
                  {relatedArticlesList.map((related) => (
                    <li key={related.id}>
                      <Link to={`/faqs/${related.id}`} className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-accent transition-all group">
                        <span className="block font-bold text-sm text-black group-hover:text-accent">{related.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <Section dark={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none prose-invert prose-p:text-white prose-li:text-white prose-headings:text-white prose-a:text-accent">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            {/* Share Footer */}
            <div className="mt-12 pt-6 border-t border-gray-800">
              <button
                onClick={shareArticle}
                className="flex items-center text-white hover:text-accent transition-colors font-bold text-lg"
              >
                <HiShare className="h-6 w-6 mr-2" />
                <span>Share Article</span>
              </button>
            </div>
          </div>

          {/* Sidebar: Tags & Subscribe */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <div key={tag} className="flex items-center text-sm bg-gray-800 text-white font-medium px-3 py-1 rounded-full border border-gray-700">
                      <HiTag className="h-4 w-4 mr-1 text-accent" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2 text-white">Subscribe</h3>
                <p className="mb-4 text-gray-400">Stay updated with our latest news.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-1 focus:ring-accent outline-none"
                    required
                  />
                  <button type="submit" className="btn btn-primary w-full">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white py-16">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Action?</h2>
          <p className="text-gray-400 mb-8">Join the movement for animal liberation.</p>
          <Link to="/support" className="btn btn-primary px-8">Support Our Work</Link>
        </div>
      </Section>
    </>
  );
};

export default ArticleDetailPage;