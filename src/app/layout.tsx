import { Space_Grotesk } from 'next/font/google';

import Animation from './components/Animation';
import { Footer } from './components/layouts/Footer';
import { Header } from './components/layouts/Header';

import './globals.css';

export const metadata = {
  title: 'Retro Game',
  description: 'Retro Game'
};

const font = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head></head>
      <body
        suppressHydrationWarning={true}
        className={font.className + ' bg-black'}
      >
        <Header />
        {children}
        <Footer />
        <Animation />
      </body>
    </html>
  );
}
