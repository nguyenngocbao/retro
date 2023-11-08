'use client';

import { useEffect, useRef, useState } from 'react';

import { CloseIcon } from '@/app/assets/icons/Close';
import { HamburgerIcon } from '@/app/assets/icons/Hamburger';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

import { Menu } from './Menu';

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const scrollY = useRef(null);

  useEffect(() => {
    if (isOpen) {
      scrollY.current = window.scrollY;
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `${-scrollY.current}px`;
    } else {
      document.documentElement.style.position = '';
      window.scrollTo(0, scrollY.current);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          className="fixed top-0 z-[60] h-screen w-screen bg-black/30 backdrop-blur-sm lg:hidden"
        ></div>
      )}
      <header className="fixed top-0 z-[60] w-screen bg-[linear-gradient(360deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]">
        <div className="mx-auto h-[82px] max-w-[calc(100%_-_38px)] lg:flex lg:h-[90px] lg:max-w-[calc(100%_-_72px)] lg:items-center lg:justify-between xl:h-[131px] xl:max-w-[1227px]">
          <div className="z-50 flex items-center justify-center p-[19px] lg:h-full lg:p-[unset]">
            <Image
              width={136}
              className="h-[48px] w-[98px] lg:h-auto lg:w-[100px] xl:h-[66px] xl:w-[136px]"
              height={66}
              src="/retrocraft.svg"
              alt="retro-game"
              unoptimized
            />
            <Button
              onClick={() => setOpen(pre => !pre)}
              variant="primary"
              className="absolute right-[18px] h-[28px] w-[28px] lg:hidden"
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </Button>
          </div>
          <Menu isOpen={isOpen} onClose={() => setOpen(false)} />
        </div>
      </header>
    </>
  );
}
