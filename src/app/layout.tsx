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
      <body className={`${montserrat}`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
