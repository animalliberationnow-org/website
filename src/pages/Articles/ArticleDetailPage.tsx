import { useEffect } from 'react';
import { HiArrowLeft, HiClipboardDocument, HiTag } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import Hero from '../../components/UI/Hero';
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

  const { title, content, category, tags, relatedArticles } = article;

  const relatedArticlesList = relatedArticles
    ? articles.filter(a => relatedArticles.includes(a.id))
    : [];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <Hero
        title={title}
        subtitle={`Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        backgroundImage="/misc/ns4.webp"
      />

      <Section dark={false}>
        {/* Back to FAQs Link */}
        <div className="mb-8">
          <Link
            to="/faqs"
            className="group inline-flex items-center gap-2 text-text-main hover:text-accent transition-colors font-bold"
          >
            <HiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to FAQs
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <article className="prose prose-2xl max-w-none prose-invert prose-p:text-white prose-li:text-white prose-headings:text-white prose-a:text-accent">
              <div className="text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            <div className="mt-12 pt-6 border-t border-glass-border">
              <button
                onClick={copyLink}
                className="flex items-center text-text-main hover:text-accent transition-colors font-bold text-lg"
              >
                <HiClipboardDocument className="h-6 w-6 mr-2" />
                <span>Copy Link</span>
              </button>
            </div>
          </div>

          {/* Sidebar: Tags & Related Topics */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Tags */}
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4 text-text-main">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <div key={tag} className="flex items-center text-sm bg-accent/10 text-accent font-medium px-3 py-1 rounded-full border border-accent/20">
                      <HiTag className="h-4 w-4 mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Topics */}
              {relatedArticlesList.length > 0 && (
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold mb-4 text-text-main">Related Topics</h3>
                  <ul className="space-y-3">
                    {relatedArticlesList.map((related) => (
                      <li key={related.id}>
                        <Link to={`/faqs/${related.id}`} className="block p-3 bg-primary-light dark:bg-primary-lighter rounded-lg border border-glass-border hover:border-accent/30 transition-all group">
                          <span className="block font-bold text-sm text-text-main group-hover:text-accent">{related.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ArticleDetailPage;
