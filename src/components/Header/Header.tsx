'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-provider';
import { Logo, Navigation, ThemeSwitcher } from '@/components';

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${theme === 'dark' ? 'bg-teal-800' : 'bg-gray-600'} text-white`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Logo />
        <div className="flex items-center space-x-4">
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
