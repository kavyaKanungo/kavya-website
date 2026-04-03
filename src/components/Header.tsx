'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import styles from './Header.module.css';

export function Header() {
  const { isDark, toggleTheme, isMuted, toggleMute } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        
        <button
          className={styles.button}
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
