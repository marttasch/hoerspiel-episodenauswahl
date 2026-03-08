import type { SeriesConfig } from '../../types';
import { dreiFragezeichen } from './dreiFragezeichen';
import { dreiFragezeichenKids } from './dreiFragezeichenKids';

export const seriesRegistry: Record<string, SeriesConfig> = {
  'ddf': dreiFragezeichen,
  'ddf-kids': dreiFragezeichenKids,
};

export const defaultSeries = 'ddf';

export const seriesList = Object.values(seriesRegistry);

export function getSeries(id: string): SeriesConfig | undefined {
  return seriesRegistry[id];
}

export function getAllSeries(): SeriesConfig[] {
  return seriesList;
}