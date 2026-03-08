import { FaRandom } from 'react-icons/fa';
import { Button } from '../common';
import styles from './RandomButton.module.css';

interface RandomButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export function RandomButton({ onClick, isLoading = false }: RandomButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className={styles.randomButton}
      size="lg"
    >
      <FaRandom className={isLoading ? styles.spinning : ''} />
      {isLoading ? 'Selecting...' : 'Random Episode'}
    </Button>
  );
}