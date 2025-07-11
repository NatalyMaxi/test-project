'use client';

import { Logo, Navigation, ThemeSwitcher } from '@/components';

export const Header = () => {
  return (
    <header className="bg-gray-600 text-white">
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
