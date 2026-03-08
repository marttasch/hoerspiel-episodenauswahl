import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Episode } from '../types';

interface AppState {
  currentSeries: string | null;
  episodes: Episode[];
  favorites: Record<string, string[]>;
  selectedEpisode: Episode | null;
  isLoading: boolean;
  error: string | null;

  setCurrentSeries: (seriesId: string) => void;
  clearSeries: () => void;
  setEpisodes: (episodes: Episode[]) => void;
  setSelectedEpisode: (episode: Episode | null) => void;
  addFavorite: (seriesId: string, episodeNumber: string) => void;
  removeFavorite: (seriesId: string, episodeNumber: string) => void;
  isFavorite: (seriesId: string, episodeNumber: string) => boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentSeries: null,
      episodes: [],
      favorites: {},
      selectedEpisode: null,
      isLoading: false,
      error: null,

      setCurrentSeries: (seriesId) => set({ currentSeries: seriesId }),

      clearSeries: () => set({ currentSeries: null, selectedEpisode: null }),

      setEpisodes: (episodes) => set({ episodes }),

      setSelectedEpisode: (episode) => set({ selectedEpisode: episode }),

      addFavorite: (seriesId, episodeNumber) => {
        const favorites = get().favorites;
        const seriesFavorites = favorites[seriesId] || [];
        if (!seriesFavorites.includes(episodeNumber)) {
          set({
            favorites: {
              ...favorites,
              [seriesId]: [...seriesFavorites, episodeNumber],
            },
          });
        }
      },

      removeFavorite: (seriesId, episodeNumber) => {
        const favorites = get().favorites;
        const seriesFavorites = favorites[seriesId] || [];
        set({
          favorites: {
            ...favorites,
            [seriesId]: seriesFavorites.filter((num) => num !== episodeNumber),
          },
        });
      },

      isFavorite: (seriesId, episodeNumber) => {
        const favorites = get().favorites;
        const seriesFavorites = favorites[seriesId] || [];
        return seriesFavorites.includes(episodeNumber);
      },

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),
    }),
    {
      name: 'audiobook-picker-storage',
      partialize: (state) => ({
        currentSeries: state.currentSeries,
        favorites: state.favorites,
      }),
    }
  )
);