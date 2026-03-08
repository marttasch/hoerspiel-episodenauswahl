import type { SeriesConfig } from '../../types';

export const dreiFragezeichen: SeriesConfig = {
  id: 'ddf',
  name: 'Die drei ???',
  shortName: 'DDF',
  logo: '/assets/ddf/logo.png',
  themeColor: '#4a6cf7',
  dataFile: '/data/episodes/ddf.json',
  imageFolder: '/assets/ddf/images',
  streamingPlatforms: [
    { name: 'Spotify', icon: 'FaSpotify' },
    { name: 'Apple Podcasts', icon: 'FaApple' },
    { name: 'Amazon Music', icon: 'FaAmazon' },
    { name: 'YouTube', icon: 'FaYoutube' },
  ],
  scraperSource: 'https://www.diedreifragezeichen.de',
};