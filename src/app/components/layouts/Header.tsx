'use client';

import { useEffect, useState } from 'react';

import { CloseIcon } from '@/app/assets/icons/Close';
import { HamburgerIcon } from '@/app/assets/icons/Hamburger';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

import { Menu } from './Menu';

export function Header() {
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.documentElement.style.position = 'fixed';
  //   } else {
  //     document.documentElement.style.position = '';
  //   }
  // }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 h-[82px] w-screen  bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)] lg:flex lg:h-[131px] lg:items-center lg:justify-between  xl:p-[0_322px]">
      <div className="z-50 flex items-center justify-center p-[19px] lg:h-full lg:p-[unset]">
        <Image
          width={136}
          className="h-[48px] w-[98px] lg:h-[66px] lg:w-[136px]"
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
    </header>
  );
}
