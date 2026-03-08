import { FaSpotify, FaApple, FaAmazon, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './StreamingLinks.module.css';

interface StreamingLinksProps {
  links: Record<string, string>;
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FaSpotify: FaSpotify,
  FaApple: FaApple,
  FaAmazon: FaAmazon,
  FaYoutube: FaYoutube,
};

export function StreamingLinks({ links }: StreamingLinksProps) {
  const platformNames: Record<string, string> = {
    spotify: 'Spotify',
    apple: 'Apple Podcasts',
    amazon: 'Amazon Music',
    youtube: 'YouTube',
  };

  const platformIcons: Record<string, string> = {
    spotify: 'FaSpotify',
    apple: 'FaApple',
    amazon: 'FaAmazon',
    youtube: 'FaYoutube',
  };

  if (!links || Object.keys(links).length === 0) {
    return null;
  }

  return (
    <div className={styles.links}>
      <h3 className={styles.heading}>Listen On</h3>
      <div className={styles.linkList}>
        {Object.entries(links).map(([platform, url]) => {
          const iconName = platformIcons[platform] || 'FaExternalLinkAlt';
          const IconComponent = iconMap[iconName] || FaExternalLinkAlt;

          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`Listen on ${platformNames[platform] || platform}`}
            >
              <IconComponent size={20} />
              <span>{platformNames[platform] || platform}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}