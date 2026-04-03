'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { getThemeVariables } from '@/styles/theme';
import { Header } from './Header';
import { Background } from './Background';

export function RootLayout({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();

  const themeVars = getThemeVariables(isDark);

  return (
    <div style={themeVars}>
      <Background />
      <Header />
      {children}
    </div>
  );
}
