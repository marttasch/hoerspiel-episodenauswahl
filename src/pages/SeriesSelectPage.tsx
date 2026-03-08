import { useNavigate } from 'react-router-dom';
import { useSeries } from '../hooks/useSeries';
import { Button } from '../components/common';
import styles from './SeriesSelectPage.module.css';

export function SeriesSelectPage() {
  const { allSeries, selectSeries, hasSelectedSeries } = useSeries();
  const navigate = useNavigate();

  const handleSelectSeries = (seriesId: string) => {
    selectSeries(seriesId);
    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {hasSelectedSeries ? 'Change Series' : 'Choose a Series'}
        </h1>
        <p className={styles.subtitle}>
          {hasSelectedSeries
            ? 'Select a different series or go back'
            : 'Select an audiobook series to get started'}
        </p>
      </div>

      <div className={styles.grid}>
        {allSeries.map((series) => (
          <button
            key={series.id}
            className={styles.card}
            onClick={() => handleSelectSeries(series.id)}
            style={{ '--theme-color': series.themeColor } as React.CSSProperties}
          >
            <div className={styles.logoContainer}>
              {series.logo ? (
                <img
                  src={series.logo}
                  alt={series.name}
                  className={styles.logo}
                />
              ) : (
                <div className={styles.logoPlaceholder}>
                  {series.shortName}
                </div>
              )}
            </div>
            <div className={styles.content}>
              <h2 className={styles.seriesName}>{series.name}</h2>
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectSeries(series.id);
                }}
              >
                Select
              </Button>
            </div>
          </button>
        ))}
      </div>

      {hasSelectedSeries && (
        <div className={styles.backButton}>
          <Button variant="secondary" onClick={handleBack}>
            Back to Home
          </Button>
        </div>
      )}
    </div>
  );
}