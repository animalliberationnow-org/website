import { HiTag, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ArticleType } from "../../data/articlesData";

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, excerpt, category, tags } = article;

  return (
    <div className="group relative flex flex-col h-full glass-panel transition-all duration-500 hover:shadow-neon hover:translate-y-[-8px] hover:border-accent/30">

      {/* Top Accent Bar*/}
      <div className="h-1.5 w-full bg-accent opacity-90" />

      <div className="p-8 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-5">
          <span className="bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Title */}
        <Link to={`/faqs/${id}`}>
          <h3 className="text-2xl font-bold mb-6 text-text-main transition-colors leading-tight">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mb-8 text-text-muted leading-relaxed flex-grow">
          {excerpt}
        </p>

        <div className="mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="flex items-center text-[11px] font-bold bg-primary border border-glass-border text-text-muted px-2.5 py-1 rounded-md"
              >
                <HiTag className="h-3 w-3 mr-1 text-accent/70" />
                {tag.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            to={`/faqs/${id}`}
            className="inline-flex items-center text-sm font-bold text-text-main transition-all"
          >
            READ MORE
            <HiArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;