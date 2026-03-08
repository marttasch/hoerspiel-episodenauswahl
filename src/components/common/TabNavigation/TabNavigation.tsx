import { NavLink } from 'react-router-dom';
import { FaRandom, FaHeart, FaList } from 'react-icons/fa';
import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  seriesId?: string;
}

export function TabNavigation({ seriesId }: TabNavigationProps) {
  const tabs = [
    { to: '/', icon: FaRandom, label: 'Random' },
    { to: '/favorites', icon: FaHeart, label: 'Favorites' },
    ...(seriesId ? [{ to: '/series-select', icon: FaList, label: 'Series' }] : []),
  ];

  return (
    <nav className={styles.tabNav}>
      <ul className={styles.tabList}>
        {tabs.map((tab) => (
          <li key={tab.to}>
            <NavLink
              to={tab.to}
              className={({ isActive }) =>
                `${styles.tab} ${isActive ? styles.active : ''}`
              }
              aria-label={tab.label}
            >
              <tab.icon size={20} />
              <span className={styles.label}>{tab.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}