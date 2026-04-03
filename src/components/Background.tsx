'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { theme } from '@/styles/theme';
import { Wave } from './Wave';
import styles from './Background.module.css';

export function Background() {
  const { isDark } = useTheme();
  const waveColor = isDark ? theme.dark.wave : theme.light.wave;

  return (
    <div className={styles.background}>
      <div className={styles.waveContainer}>
        <Wave height={600} />
      </div>
    </div>
  );
}
