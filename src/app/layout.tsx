import { Metadata } from 'next';

import { montserrat } from '@/utils/fonts/font';
import { Header } from '@/components';
import ThemeProvider from '@/context/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Test Project',
  description: 'Тестовое приложение на Next.js с App router',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${montserrat} min-h-screen grid grid-rows-[auto_1fr]`}>
        <ThemeProvider>
          <Header />
          <div className="w-full max-w-7xl mx-auto p-4 h-full overflow-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
