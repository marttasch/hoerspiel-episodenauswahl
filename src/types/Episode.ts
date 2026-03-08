export interface Episode {
  episodeNumber: string;
  title: string;
  date: string;
  image: string;
  description: string;
  pageLink: string;
  links: Record<string, string>;
}