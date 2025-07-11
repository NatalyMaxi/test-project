import { useState, useEffect } from 'react';

import { Theme } from '@/utils/types/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || Theme.Light;
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return { theme, setTheme: toggleTheme };
};
