import { format, parseISO } from "date-fns";
import { HiClock, HiTag, HiUser, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ArticleType } from "../../data/articlesData";

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, excerpt, date, category, tags } = article;

  const formattedDate = format(parseISO(date), "MMMM d, yyyy");

  return (
    <div className="card flex flex-col h-full group p-8">
      
      {/* Top Accent Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col flex-grow relative z-10">
        {/* Category Badge */}
        <div className="mb-5">
          <span className="bg-text-main/5 text-accent border border-text-main/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Title */}
        <Link to={`/faqs/${id}`}>
          <h3 className="text-2xl font-black mb-3 text-text-main group-hover:text-accent transition-colors leading-tight drop-shadow-glow-white">
            {title}
          </h3>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center mb-6 text-sm text-text-muted font-medium">
          <div className="flex items-center">
            <HiClock className="h-4 w-4 mr-1.5 text-accent" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="mb-8 text-text-muted leading-relaxed flex-grow font-medium">
          {excerpt}
        </p>

        <div className="mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="flex items-center text-[10px] font-bold bg-text-main/5 text-text-muted border border-text-main/10 px-3 py-1.5 rounded-full tracking-widest"
              >
                <HiTag className="h-3 w-3 mr-1.5 text-accent/70" />
                {tag.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            to={`/faqs/${id}`}
            className="inline-flex items-center text-sm font-bold text-accent uppercase tracking-widest hover:text-text-main transition-colors"
          >
            Access Database 
            <HiArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;