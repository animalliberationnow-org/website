import { format, parseISO } from "date-fns";
import { Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleType } from "../../data/articlesData";

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, excerpt, image, author, date, category, tags } = article;

  const formattedDate = format(parseISO(date), "MMMM d, yyyy");

  return (
    <div className="card hover:translate-y-[-5px] flex flex-col">
      <Link to={`/articles/${id}`} className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 m-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/articles/${id}`}>
          <h3 className="text-xl font-bold mb-2 text-black hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <p className="mb-6 text-gray-700 flex-grow">{excerpt}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>
          <Link
            to={`/articles/${id}`}
            className="text-accent font-medium hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
