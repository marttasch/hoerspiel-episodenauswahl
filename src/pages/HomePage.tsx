import { useEffect } from 'react';
import { useSeries } from '../hooks/useSeries';
import { useAppStore } from '../store/useAppStore';
import { EpisodePicker } from '../components/EpisodePicker';
import styles from './HomePage.module.css';

export function HomePage() {
  const { currentSeries, hasSelectedSeries } = useSeries();
  const setSelectedEpisode = useAppStore((state) => state.setSelectedEpisode);

  // Clear selected episode when leaving page
  useEffect(() => {
    return () => {
      setSelectedEpisode(null);
    };
  }, [setSelectedEpisode]);

  if (!hasSelectedSeries || !currentSeries) {
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{currentSeries.name}</h1>
        <p className={styles.subtitle}>
          Let fate decide your next adventure!
        </p>
      </div>
      <EpisodePicker />
    </div>
  );
}