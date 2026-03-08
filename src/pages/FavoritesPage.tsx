import { useSeries } from '../hooks/useSeries';
import { FavoritesList } from '../components/Favorites';
import styles from './FavoritesPage.module.css';

export function FavoritesPage() {
  const { currentSeries, hasSelectedSeries } = useSeries();

  if (!hasSelectedSeries || !currentSeries) {
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Favorites</h1>
        <p className={styles.subtitle}>
          Your favorite episodes from {currentSeries.name}
        </p>
      </div>
      <FavoritesList />
    </div>
  );
}