import styles from './EpisodeDetails.module.css';
import type { Episode } from '../../../types';
import { StreamingLinks } from '../StreamingLinks';

interface EpisodeDetailsProps {
  episode: Episode;
  onClose?: () => void;
  imageBasePath?: string;
}

export function EpisodeDetails({
  episode,
  onClose,
  imageBasePath = '',
}: EpisodeDetailsProps) {
  const imageSrc = imageBasePath
    ? `${imageBasePath}/${episode.image}`
    : episode.image;

  return (
    <div className={styles.details}>
      <div className={styles.header}>
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
        <span className={styles.episodeNumber}>
          Episode {episode.episodeNumber}
        </span>
        <h2 className={styles.title}>{episode.title}</h2>
        <p className={styles.date}>{episode.date}</p>

        {episode.description && (
          <div className={styles.description}>
            <p>{episode.description}</p>
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