import type { SeriesConfig } from '../../types';

const basePath = import.meta.env.BASE_URL;

export const dreiFragezeichen: SeriesConfig = {
  id: 'ddf',
  name: 'Die drei ???',
  shortName: 'DDF',
  logo: `${basePath}assets/ddf/logo.png`,
  themeColor: '#4a6cf7',
  dataFile: `${basePath}data/episodes/ddf.json`,
  imageFolder: `${basePath}assets/ddf/images`,
  streamingPlatforms: [
    { name: 'Spotify', icon: 'FaSpotify' },
    { name: 'Apple Podcasts', icon: 'FaApple' },
    { name: 'Amazon Music', icon: 'FaAmazon' },
    { name: 'YouTube', icon: 'FaYoutube' },
  ],
  scraperSource: 'https://www.diedreifragezeichen.de',
};