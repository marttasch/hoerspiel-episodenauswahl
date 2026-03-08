import type { SeriesConfig } from '../../types';

const basePath = import.meta.env.BASE_URL;

export const dreiFragezeichenKids: SeriesConfig = {
  id: 'ddf-kids',
  name: 'Die drei ??? Kids',
  shortName: 'DDF Kids',
  logo: `${basePath}assets/ddf-kids/logo.png`,
  themeColor: '#22c55e',
  dataFile: `${basePath}data/episodes/ddf-kids.json`,
  imageFolder: `${basePath}assets/ddf-kids/images`,
  streamingPlatforms: [
    { name: 'Spotify', icon: 'FaSpotify' },
    { name: 'Apple Podcasts', icon: 'FaApple' },
    { name: 'Amazon Music', icon: 'FaAmazon' },
    { name: 'YouTube', icon: 'FaYoutube' },
  ],
  scraperSource: 'https://www.diedreifragezeichen.de',
};