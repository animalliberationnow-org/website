import { lazy, Suspense, JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Lazy load all route components for code splitting
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const CalendarPage = lazy(() => import('./pages/Calendar/CalendarPage'));
const ArticlesPage = lazy(() => import('./pages/Articles/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/Articles/ArticleDetailPage'));
const SupportPage = lazy(() => import('./pages/Support/SupportPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));
  
// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/calendar" element={<CalendarPage />} /> */}
          <Route path="/faqs" element={<ArticlesPage />} />
          <Route path="/faqs/:id" element={<ArticleDetailPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
