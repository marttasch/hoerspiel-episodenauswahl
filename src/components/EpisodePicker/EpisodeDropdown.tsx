import { Dropdown } from '../common';
import type { Episode } from '../../types';
import styles from './EpisodeDropdown.module.css';

interface EpisodeDropdownProps {
  episodes: Episode[];
  selectedValue: string;
  onChange: (episodeNumber: string) => void;
  disabled?: boolean;
}

export function EpisodeDropdown({
  episodes,
  selectedValue,
  onChange,
  disabled = false,
}: EpisodeDropdownProps) {
  const options = episodes.map((episode) => ({
    value: episode.episodeNumber,
    label: `${episode.episodeNumber}: ${episode.title}`,
  }));

  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor="episode-select" className={styles.label}>
        Or select manually:
      </label>
      <Dropdown
        id="episode-select"
        options={options}
        value={selectedValue}
        onChange={onChange}
        placeholder="Choose an episode..."
        disabled={disabled}
        ariaLabel="Select an episode"
      />
    </div>
  );
}