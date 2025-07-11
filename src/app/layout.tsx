import { montserrat } from '@/utils/fonts/font';
import type { Metadata } from 'next';

import { Header } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Test Project',
  description: 'Тестовое приложение на Next.js с App router',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
