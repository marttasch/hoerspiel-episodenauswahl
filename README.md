# Audiobook Episode Picker

A React-based Progressive Web App (PWA) for randomly selecting audiobook episodes from various series.

## Features

- Random episode selection
- Browse and search episodes
- Favorites system with localStorage persistence
- Multi-series support (easily add new audiobook series)
- Progressive Web App (PWA) support for offline use
- Responsive design (mobile-first)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Zustand** - State management
- **React Icons** - Icon library
- **vite-plugin-pwa** - PWA support

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   ├── EpisodePicker/    # Episode picker feature
│   ├── Favorites/        # Favorites management
│   ├── Header/           # App header
│   └── Layout/           # App layout wrapper
├── config/
│   └── series/           # Series configuration files
├── data/                 # Episode JSON files
├── hooks/                # Custom React hooks
├── pages/                # Route pages
├── store/                # Zustand store
├── types/                # TypeScript interfaces
└── utils/                # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding a New Series

1. Create a new config file in `src/config/series/`:

```typescript
// src/config/series/mySeries.ts
import type { SeriesConfig } from '../../types';

export const mySeries: SeriesConfig = {
  id: 'my-series',
  name: 'My Audiobook Series',
  shortName: 'MAS',
  logo: '/assets/my-series/logo.png',
  themeColor: '#ff6b6b',
  dataFile: '/data/episodes/my-series.json',
  imageFolder: '/assets/my-series/images',
  streamingPlatforms: [
    { name: 'Spotify', icon: 'FaSpotify' },
    // ...
  ],
};
```

2. Add the episode data JSON file to `public/data/episodes/my-series.json`

3. Register the series in `src/config/series/index.ts`:

```typescript
import { mySeries } from './mySeries';

export const seriesRegistry: Record<string, SeriesConfig> = {
  'ddf': dreiFragezeichen,
  'ddf-kids': dreiFragezeichenKids,
  'my-series': mySeries, // Add here
};
```

## License

MIT