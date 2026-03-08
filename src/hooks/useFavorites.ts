import { useAppStore } from '../store/useAppStore';

export function useFavorites() {
  const favorites = useAppStore((state) => state.favorites);
  const addFavorite = useAppStore((state) => state.addFavorite);
  const removeFavorite = useAppStore((state) => state.removeFavorite);
  const isFavorite = useAppStore((state) => state.isFavorite);

  const toggleFavorite = (seriesId: string, episodeNumber: string) => {
    if (isFavorite(seriesId, episodeNumber)) {
      removeFavorite(seriesId, episodeNumber);
    } else {
      addFavorite(seriesId, episodeNumber);
    }
  };

  const getFavoritesForSeries = (seriesId: string): string[] => {
    return favorites[seriesId] || [];
  };

  const getAllFavorites = (): Record<string, string[]> => {
    return favorites;
  };

  const getFavoriteCount = (seriesId: string): number => {
    return (favorites[seriesId] || []).length;
  };

  const getTotalFavoriteCount = (): number => {
    return Object.values(favorites).reduce(
      (total, seriesFavorites) => total + seriesFavorites.length,
      0
    );
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavoritesForSeries,
    getAllFavorites,
    getFavoriteCount,
    getTotalFavoriteCount,
  };
}