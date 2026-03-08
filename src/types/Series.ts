export interface StreamingPlatform {
  name: string;
  icon: string;
  urlTemplate?: string;
}

export interface SeriesConfig {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  themeColor: string;
  dataFile: string;
  imageFolder: string;
  streamingPlatforms: StreamingPlatform[];
  scraperSource?: string;
}