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

// Campaigns
const FarmedAnimalsPage = lazy(() => import('./pages/Campaigns/FarmedAnimalsPage'));
const MarineAnimalsPage = lazy(() => import('./pages/Campaigns/MarineAnimalsPage'));
const StreetOutreachPage = lazy(() => import('./pages/Campaigns/StreetOutreachPage'));
const LegalPolicyPage = lazy(() => import('./pages/Campaigns/LegalPolicyPage'));
const ActionDetailPage = lazy(() => import('./pages/Campaigns/ActionDetailPage'));

// Resources
const GoVeganPage = lazy(() => import('./pages/Resources/GoVeganPage'));
const ActivistResourcesPage = lazy(() => import('./pages/Resources/ActivistResourcesPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      <p className="text-text-muted font-bold uppercase tracking-widest text-sm">Loading...</p>
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
          
          {/* Campaigns */}
          <Route path="/campaigns/farmed-animals" element={<FarmedAnimalsPage />} />
          <Route path="/campaigns/marine-animals" element={<MarineAnimalsPage />} />
          <Route path="/campaigns/street-outreach" element={<StreetOutreachPage />} />
          <Route path="/campaigns/legal-policy" element={<LegalPolicyPage />} />
          <Route path="/actions/:id" element={<ActionDetailPage />} />

          {/* Resources */}
          <Route path="/resources/go-vegan" element={<GoVeganPage />} />
          <Route path="/resources/activists" element={<ActivistResourcesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
