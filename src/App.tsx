import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import QRPage from './pages/QR/QRPage';

// Lazy load all route components for code splitting
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const CalendarPage = lazy(() => import('./pages/Calendar/CalendarPage'));
const ArticlesPage = lazy(() => import('./pages/Articles/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/Articles/ArticleDetailPage'));
const EventsPage = lazy(() => import('./pages/Events/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/Events/EventDetailPage'));
const ResourcesPage = lazy(() => import('./pages/Resources/ResourcesPage'));
const WhoAreWePage = lazy(() => import('./pages/WhoAreWe/WhoAreWePage'));
const SupportPage = lazy(() => import('./pages/Support/SupportPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));
const DocumentariesPage = lazy(() => import('./pages/Documentaries/DocumentariesPage'));

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
          {/* <Route path="/calendar" element={<CalendarPage />} /> */}
          <Route path="/faqs" element={<ArticlesPage />} />
          <Route path="/faqs/:id" element={<ArticleDetailPage />} />
          <Route path="/activism" element={<EventsPage />} />
          <Route path="/activism/:id" element={<EventDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/who-are-we" element={<WhoAreWePage />} />
          {/* <Route path="/chapters" element={<ChaptersPage />} />
          <Route path="/chapters/:id" element={<ChapterDetailPage />} /> */}
          <Route path="/support" element={<SupportPage />} />
          <Route path="/documentaries" element={<DocumentariesPage />} />
          <Route path="/qr/:slug" element={<QRPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
