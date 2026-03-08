import type { ReactNode } from 'react';
import { useSeries } from '../../hooks/useSeries';
import { Header } from '../Header';
import { TabNavigation } from '../common';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { currentSeriesId } = useSeries();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
      <TabNavigation seriesId={currentSeriesId || undefined} />
    </div>
  );
}