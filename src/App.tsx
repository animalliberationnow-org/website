import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import CalendarPage from './pages/Calendar/CalendarPage';
import ArticlesPage from './pages/Articles/ArticlesPage';
import ArticleDetailPage from './pages/Articles/ArticleDetailPage';
import SupportPage from './pages/Support/SupportPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;