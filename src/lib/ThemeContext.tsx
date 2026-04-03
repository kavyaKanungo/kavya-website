'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isMuted, toggleMute }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
