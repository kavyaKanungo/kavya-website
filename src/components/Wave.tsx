'use client';

import React from 'react';
import Wavify from 'react-wavify';
import { useTheme } from '@/lib/ThemeContext';
import styles from './Wave.module.css';

interface WaveProps {
  height?: number;
}

export function Wave({ height = 480 }: WaveProps) {
  const { isDark } = useTheme();
  const gradientId = isDark ? 'waveGradientDark' : 'waveGradientLight';

  const lightStops = [
    { offset: '0%', color: '#eaf5ff' },
    { offset: '100%', color: '#9fcfff' },
  ];

  const darkStops = [
    { offset: '0%', color: '#0c3257' },
    { offset: '100%', color: '#326283' },
  ];

  const stops = isDark ? darkStops : lightStops;

  return (
    <div className={styles.waveBackground} style={{ height }}>
      <Wavify
        fill={`url(#${gradientId})`}
        paused={false}
        options={{
          height: 350,
          amplitude: 30,
          speed: 0.175,
          points: 3,
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            {stops.map((stop) => (
              <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
        </defs>
      </Wavify>
    </div>
  );
}
