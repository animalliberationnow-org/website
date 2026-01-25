import { HiHome } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Section from '../../components/UI/Section';

const NotFoundPage = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg max-w-md mb-12">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <HiHome className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;
