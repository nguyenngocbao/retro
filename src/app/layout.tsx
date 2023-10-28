import { Noto_Sans } from 'next/font/google';

import { Footer } from './components/layouts/Footer';
import { Header } from './components/layouts/Header';

import './globals.css';

export const metadata = {
  title: 'Retro Game',
  description: 'Retro Game'
};

const font = Noto_Sans({
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-noto-sans',
  weight: ['500', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head></head>
      <body
        suppressHydrationWarning={true}
        className={font.className + ' bg-bg1'}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
