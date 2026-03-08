import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from './store/useAppStore';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { SeriesSelectPage } from './pages/SeriesSelectPage';

function App() {
  const currentSeries = useAppStore((state) => state.currentSeries);

  // If no series selected, redirect to series selection
  if (!currentSeries) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/series-select" element={<SeriesSelectPage />} />
          <Route path="*" element={<Navigate to="/series-select" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/series-select" element={<SeriesSelectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;