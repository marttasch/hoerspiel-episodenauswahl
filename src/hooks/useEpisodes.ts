import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { getSeries } from '../config/series';
import type { Episode } from '../types';

export function useEpisodes() {
  const currentSeries = useAppStore((state) => state.currentSeries);
  const episodes = useAppStore((state) => state.episodes);
  const setEpisodes = useAppStore((state) => state.setEpisodes);
  const setLoading = useAppStore((state) => state.setLoading);
  const setError = useAppStore((state) => state.setError);

  useEffect(() => {
    async function loadEpisodes() {
      if (!currentSeries) return;

      const seriesConfig = getSeries(currentSeries);
      if (!seriesConfig) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(seriesConfig.dataFile);
        if (!response.ok) {
          throw new Error(`Failed to load episodes: ${response.statusText}`);
        }
        const data: Episode[] = await response.json();
        setEpisodes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load episodes');
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    }

    loadEpisodes();
  }, [currentSeries, setEpisodes, setLoading, setError]);

  return {
    episodes,
    isLoading: useAppStore((state) => state.isLoading),
    error: useAppStore((state) => state.error),
  };
}