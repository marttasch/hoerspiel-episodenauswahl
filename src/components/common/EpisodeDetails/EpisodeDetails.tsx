import { useState } from 'react';
import styles from './EpisodeDetails.module.css';
import type { Episode } from '../../../types';
import { StreamingLinks } from '../StreamingLinks';

interface EpisodeDetailsProps {
  episode: Episode;
  onClose?: () => void;
  imageBasePath?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export function EpisodeDetails({
  episode,
  onClose,
  imageBasePath = '',
  isFavorite = false,
  onFavoriteToggle,
}: EpisodeDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageSrc = imageBasePath
    ? `${imageBasePath}/${episode.image}`
    : episode.image;

  const DESCRIPTION_LIMIT = 150;
  const shouldTruncate = episode.description && episode.description.length > DESCRIPTION_LIMIT;
  const displayDescription = shouldTruncate && !isExpanded
    ? episode.description?.slice(0, DESCRIPTION_LIMIT) + '...'
    : episode.description;

  return (
    <div className={styles.details}>
      <div className={styles.header}>
        {onFavoriteToggle && (
          <button
            className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
            onClick={onFavoriteToggle}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            <span className={styles.heartIcon}>{isFavorite ? '❤️' : '🤍'}</span>
          </button>
        )}
        {onClose && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close details"
          >
            ×
          </button>
        )}
      </div>

      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt={`Cover for ${episode.title}`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.episodeNumber}>
            #{episode.episodeNumber}
          </span>
          <span className={styles.date}>{episode.date}</span>
        </div>
        <h2 className={styles.title}>{episode.title}</h2>

        {episode.description && (
          <div className={styles.description}>
            <p>{displayDescription}</p>
            {shouldTruncate && (
              <button
                className={styles.readMore}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        )}

        <StreamingLinks links={episode.links} />

        {episode.pageLink && (
          <a
            href={episode.pageLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pageLink}
          >
            View Official Page
          </a>
        )}
      </div>
    </div>
  );
}