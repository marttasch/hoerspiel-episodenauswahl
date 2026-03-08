import { useEpisodes } from '../../hooks/useEpisodes';
import { useFavorites } from '../../hooks/useFavorites';
import { useAppStore } from '../../store/useAppStore';
import { getSeries } from '../../config/series';
import { EpisodeCard } from '../common';
import type { Episode } from '../../types';
import styles from './FavoritesList.module.css';

export function FavoritesList() {
  const currentSeriesId = useAppStore((state) => state.currentSeries);
  const { episodes } = useEpisodes();
  const { getFavoritesForSeries, toggleFavorite, isFavorite } = useFavorites();

  if (!currentSeriesId) {
    return (
      <div className={styles.empty}>
        <p>Please select a series first.</p>
      </div>
    );
  }

  const favoriteNumbers = getFavoritesForSeries(currentSeriesId);
  const seriesConfig = getSeries(currentSeriesId);
  const imageBasePath = seriesConfig?.imageFolder || '';

  const favoriteEpisodes = episodes.filter((ep: Episode) =>
    favoriteNumbers.includes(ep.episodeNumber)
  );

  if (favoriteEpisodes.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No favorites yet. Add some episodes to your favorites!</p>
      </div>
    );
  }

  const handleToggleFavorite = (episode: Episode) => {
    toggleFavorite(currentSeriesId, episode.episodeNumber);
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.count}>
        {favoriteEpisodes.length} favorite{favoriteEpisodes.length !== 1 ? 's' : ''}
      </h2>
      <div className={styles.grid}>
        {favoriteEpisodes.map((episode) => (
          <EpisodeCard
            key={episode.episodeNumber}
            episode={episode}
            isFavorite={isFavorite(currentSeriesId, episode.episodeNumber)}
            onFavoriteToggle={() => handleToggleFavorite(episode)}
            imageBasePath={imageBasePath}
          />
        ))}
      </div>
    </div>
  );
}