import { useNavigate } from 'react-router-dom';
import { useSeries } from '../../hooks/useSeries';
import styles from './Header.module.css';

export function Header() {
  const { currentSeries } = useSeries();
  const navigate = useNavigate();

  const handleSeriesClick = () => {
    navigate('/series-select');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hörspiel-Episodenauswahl</h1>
        {currentSeries && (
          <button
            className={styles.seriesButton}
            onClick={handleSeriesClick}
            aria-label={`Current series: ${currentSeries.name}. Click to change.`}
            style={{ '--theme-color': currentSeries.themeColor } as React.CSSProperties}
          >
            {currentSeries.logo && (
              <img
                src={currentSeries.logo}
                alt={currentSeries.name}
                className={styles.seriesLogo}
              />
            )}
            <span className={styles.seriesName}>{currentSeries.shortName}</span>
          </button>
        )}
      </div>
    </header>
  );
}