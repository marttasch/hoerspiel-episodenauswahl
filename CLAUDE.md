# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # TypeScript compile + Vite build (runs tsc -b first)
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

**State Management**: Zustand store (`src/store/useAppStore.ts`) with persist middleware. Persists `currentSeries` and `favorites` to localStorage under key `audiobook-picker-storage`.

**Series System**: Multi-series support via registry pattern in `src/config/series/`. Each series is a separate config file exporting a `SeriesConfig` object. To add a new series:
1. Create config file in `src/config/series/mySeries.ts`
2. Add episode JSON to `public/data/episodes/mySeries.json`
3. Register in `src/config/series/index.ts`

**Components**: Named exports (not default). Use CSS modules for styling (`*.module.css`).

**Hooks**: Custom hooks in `src/hooks/` - `useSeries` for series selection, `useEpisodes` for data loading, `useFavorites` for favorites management.

**Data Flow**: Episodes loaded from JSON files specified in series config (`dataFile` property). Episode images use `imageFolder` path + episode `image` field.

## Key Files

- `src/store/useAppStore.ts` - Global state (series, favorites, episodes)
- `src/config/series/index.ts` - Series registry
- `src/hooks/useEpisodes.ts` - Fetches episode data for current series
- `src/types/Episode.ts` - Episode structure (episodeNumber, title, date, image, description, pageLink, links)

## Import Patterns

```typescript
// Named exports from components
import { Layout } from './components/Layout/Layout';
import { Button } from './components/common';

// Types
import type { Episode, SeriesConfig } from './types';

// Hooks
import { useSeries, useEpisodes } from './hooks';
```