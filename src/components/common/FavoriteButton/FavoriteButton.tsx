import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './FavoriteButton.module.css';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function FavoriteButton({
  isFavorite,
  onToggle,
  size = 'md',
  showLabel = false,
}: FavoriteButtonProps) {
  const Icon = isFavorite ? FaHeart : FaRegHeart;

  return (
    <button
      className={`${styles.button} ${styles[size]} ${isFavorite ? styles.favorited : ''}`}
      onClick={onToggle}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
    >
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 28 : 20} />
      {showLabel && (
        <span className={styles.label}>
          {isFavorite ? 'Remove' : 'Add'}
        </span>
      )}
    </button>
  );
}