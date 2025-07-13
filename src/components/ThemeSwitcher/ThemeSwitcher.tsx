'use client';

import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';

import { ThemeContext } from '@/context/theme-provider';
import { Theme } from '@/utils/types/theme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none cursor-pointer">
      {theme === Theme.Dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};
