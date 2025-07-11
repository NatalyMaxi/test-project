'use client';

import React, { createContext, ReactNode } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/utils/types/theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  setTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
