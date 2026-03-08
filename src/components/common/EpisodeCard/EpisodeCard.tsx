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
  const imageSrc = imageBasePath
    ? `${imageBasePath}/${episode.image}`
    : episode.image;

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
            className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle();
            }}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.episodeNumber}>
          Episode {episode.episodeNumber}
        </span>
        <h3 className={styles.title}>{episode.title}</h3>
        <p className={styles.date}>{episode.date}</p>
      </div>
    </article>
  );
}