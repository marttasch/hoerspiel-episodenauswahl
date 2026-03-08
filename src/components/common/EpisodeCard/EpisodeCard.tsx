import { useState } from 'react';
import styles from './EpisodeCard.module.css';
import type { Episode } from '../../../types';

interface EpisodeCardProps {
  episode: Episode;
  isSelected?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
  imageBasePath?: string;
}

export function EpisodeCard({
  episode,
  isSelected = false,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
  imageBasePath = '',
}: EpisodeCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const imageSrc = imageBasePath
    ? `${imageBasePath}/${episode.image}`
    : episode.image;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    onFavoriteToggle?.();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <article
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt={`Cover for ${episode.title}`}
          className={styles.image}
          loading="lazy"
        />
        {onFavoriteToggle && (
          <button
            className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''} ${isAnimating ? styles.animating : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.episodeNumber}>#{episode.episodeNumber}</span>
          <span className={styles.date}>{episode.date}</span>
        </div>
        <h3 className={styles.title}>{episode.title}</h3>
      </div>
    </article>
  );
}