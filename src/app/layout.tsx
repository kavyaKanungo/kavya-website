import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/ThemeContext';
import { RootLayout } from '@/components/RootLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
