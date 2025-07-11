import { montserrat } from '@/utils/fonts/font';
import type { Metadata } from 'next';

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
      <body className={`${montserrat}`}>{children}</body>
    </html>
  );
}
