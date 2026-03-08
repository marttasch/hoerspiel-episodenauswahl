import { useState, useCallback, useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { useEpisodes } from '../../hooks/useEpisodes';
import { useFavorites } from '../../hooks/useFavorites';
import { getSeries } from '../../config/series';
import { RandomButton } from './RandomButton';
import { EpisodeDropdown } from './EpisodeDropdown';
import { EpisodeDetails } from '../common/EpisodeDetails';
import { FavoriteButton } from '../common/FavoriteButton';
import styles from './EpisodePicker.module.css';

export function EpisodePicker() {
  const [isSelecting, setIsSelecting] = useState(false);
  const currentSeriesId = useAppStore((state) => state.currentSeries);
  const selectedEpisode = useAppStore((state) => state.selectedEpisode);
  const setSelectedEpisode = useAppStore((state) => state.setSelectedEpisode);

  const { episodes, isLoading, error } = useEpisodes();
  const { isFavorite, toggleFavorite } = useFavorites();

  const seriesConfig = currentSeriesId ? getSeries(currentSeriesId) : null;
  const imageBasePath = seriesConfig?.imageFolder || '';

  // Auto-select random episode when episodes are first loaded
  useEffect(() => {
    if (episodes.length > 0 && !selectedEpisode && !isLoading) {
      const randomIndex = Math.floor(Math.random() * episodes.length);
      setSelectedEpisode(episodes[randomIndex]);
    }
  }, [episodes, selectedEpisode, isLoading, setSelectedEpisode]);

  const handleRandomSelect = useCallback(() => {
    if (episodes.length === 0) return;

    setIsSelecting(true);
    // Simulate a brief delay for UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * episodes.length);
      setSelectedEpisode(episodes[randomIndex]);
      setIsSelecting(false);
    }, 300);
  }, [episodes, setSelectedEpisode]);

  const handleDropdownSelect = useCallback(
    (episodeNumber: string) => {
      const episode = episodes.find((ep) => ep.episodeNumber === episodeNumber);
      if (episode) {
        setSelectedEpisode(episode);
      }
    },
    [episodes, setSelectedEpisode]
  );

  const handleCloseDetails = useCallback(() => {
    setSelectedEpisode(null);
  }, [setSelectedEpisode]);

  const handleToggleFavorite = useCallback(() => {
    if (currentSeriesId && selectedEpisode) {
      toggleFavorite(currentSeriesId, selectedEpisode.episodeNumber);
    }
  }, [currentSeriesId, selectedEpisode, toggleFavorite]);

  if (error) {
    return (
      <div className={styles.error}>
        <p>Failed to load episodes: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.picker}>
      <div className={styles.controls}>
        <RandomButton onClick={handleRandomSelect} isLoading={isSelecting || isLoading} />

        {episodes.length > 0 && (
          <EpisodeDropdown
            episodes={episodes}
            selectedValue={selectedEpisode?.episodeNumber || ''}
            onChange={handleDropdownSelect}
            disabled={isLoading}
          />
        )}
      </div>

      {selectedEpisode && (
        <div className={styles.episodeContainer}>
          <div className={styles.actions}>
            <FavoriteButton
              isFavorite={currentSeriesId ? isFavorite(currentSeriesId, selectedEpisode.episodeNumber) : false}
              onToggle={handleToggleFavorite}
              showLabel
            />
          </div>
          <EpisodeDetails
            episode={selectedEpisode}
            onClose={handleCloseDetails}
            imageBasePath={imageBasePath}
          />
        </div>
      )}
    </div>
  );
}