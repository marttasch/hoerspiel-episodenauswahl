import type { SeriesConfig } from '../../types';

export const dreiFragezeichenKids: SeriesConfig = {
  id: 'ddf-kids',
  name: 'Die drei ??? Kids',
  shortName: 'DDF Kids',
  logo: '/assets/ddf-kids/logo.png',
  themeColor: '#22c55e',
  dataFile: '/data/episodes/ddf-kids.json',
  imageFolder: '/assets/ddf-kids/images',
  streamingPlatforms: [
    { name: 'Spotify', icon: 'FaSpotify' },
    { name: 'Apple Podcasts', icon: 'FaApple' },
    { name: 'Amazon Music', icon: 'FaAmazon' },
    { name: 'YouTube', icon: 'FaYoutube' },
  ],
  scraperSource: 'https://www.diedreifragezeichen.de',
};