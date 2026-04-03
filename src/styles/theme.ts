export const theme = {
  light: {
    bg: '#f4faff',
    bgSecondary: '#e8f2ff',
    text: '#102a4a',
    textSecondary: '#3f5a7d',
    accent: '#2f81ff',
    border: '#c7ddff',
    windowBorder: '#d8d8d8',
    wave: '#86c5ff',
    modal: {
      overlay: 'rgba(0, 0, 0, 0.5)',
      bg: '#ffffff',
      border: '#d8d8d8',
    },
    windowBar: '#4a4e54',
    button: {
      bg: '#f0f0f0',
      bgHover: '#e0e0e0',
      text: '#1a1a1a',
    },
    toggle: {
      bg: '#e0e0e0',
      bgActive: '#d4af37',
      text: '#1a1a1a',
    },
  },
  dark: {
    bg: '#050916',
    bgSecondary: '#0a1b3c',
    text: '#e6eeff',
    textSecondary: '#98a7cc',
    accent: '#5a9cff',
    border: '#1f4172',
    windowBorder: '#ffffff',
    wave: '#2f59bb',
    modal: {
      overlay: 'rgba(0, 0, 0, 0.8)',
      bg: '#1a1a1a',
      border: '#ffffff',
    },
    windowBar: '#1e2a46',
    button: {      bg: '#2a2a2a',
      bgHover: '#3a3a3a',
      text: '#ffffff',
    },
    toggle: {
      bg: '#2a2a2a',
      bgActive: '#d4af37',
      text: '#ffffff',
    },
  },
};

export const getThemeVariables = (isDark: boolean) => {
  const t = isDark ? theme.dark : theme.light;
  return {
    '--bg-color': t.bg,
    '--bg-secondary': t.bgSecondary,
    '--text-color': t.text,
    '--text-secondary': t.textSecondary,
    '--accent-color': t.accent,
    '--border-color': t.border,
    '--wave-color': t.wave,
    '--modal-overlay': t.modal.overlay,
    '--modal-bg': t.modal.bg,
    '--modal-border': t.modal.border,
    '--window-border': t.windowBorder,
    '--button-bg': t.button.bg,
    '--button-bg-hover': t.button.bgHover,
    '--button-text': t.button.text,
    '--toggle-bg': t.toggle.bg,
    '--toggle-bg-active': t.toggle.bgActive,
    '--toggle-text': t.toggle.text,
    '--window-bar-bg': t.windowBar,
  } as React.CSSProperties;
};
