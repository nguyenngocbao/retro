import { Space_Grotesk } from 'next/font/google';

import Animation from './components/Animation';
import { Footer } from './components/layouts/Footer';
import { Header } from './components/layouts/Header';
import { Logo } from './components/Logo';

import './globals.css';

export const metadata = {
  title: 'RetroCraft',
  description: 'RetroCraft'
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
      <head>
        <link
          rel="preload"
          as="font"
          href="/logo_retrocraft.png"
          type="image/png"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={font.className + ' no-scroll-2s bg-black'}
      >
        <Logo />
        <Header />
        {children}
        <Footer />
        <Animation />
      </body>
    </html>
  );
}
