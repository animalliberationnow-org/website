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
    <div className="group relative flex flex-col h-full bg-gray-200 border border-black rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]">
      
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
          <h3 className="text-2xl font-bold mb-3 text-black transition-colors leading-tight">
            {title}
          </h3>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center mb-6 text-sm text-gray-600 font-medium">
          <div className="flex items-center">
            <HiClock className="h-4 w-4 mr-1.5 text-accent" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="mb-8 text-gray-700 leading-relaxed flex-grow">
          {excerpt}
        </p>

        <div className="mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="flex items-center text-[11px] font-bold bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-md"
              >
                <HiTag className="h-3 w-3 mr-1 text-accent/70" />
                {tag.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            to={`/faqs/${id}`}
            className="inline-flex items-center text-sm font-bold text-black transition-all"
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