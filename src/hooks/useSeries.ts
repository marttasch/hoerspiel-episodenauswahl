import { useAppStore } from '../store/useAppStore';
import { getSeries, getAllSeries, defaultSeries } from '../config/series';
import type { SeriesConfig } from '../types';

export function useSeries() {
  const currentSeriesId = useAppStore((state) => state.currentSeries);
  const setCurrentSeries = useAppStore((state) => state.setCurrentSeries);
  const clearSeries = useAppStore((state) => state.clearSeries);

  const currentSeries: SeriesConfig | undefined = currentSeriesId
    ? getSeries(currentSeriesId)
    : undefined;

  const allSeries = getAllSeries();

  const selectSeries = (seriesId: string) => {
    setCurrentSeries(seriesId);
  };

  const resetToDefault = () => {
    setCurrentSeries(defaultSeries);
  };

  return {
    currentSeries,
    currentSeriesId,
    allSeries,
    selectSeries,
    clearSeries,
    resetToDefault,
    hasSelectedSeries: !!currentSeriesId,
  };
}