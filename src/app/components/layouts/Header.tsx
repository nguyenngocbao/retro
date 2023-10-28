'use client';

import { useEffect, useState } from 'react';

import { CloseIcon } from '@/app/assets/icons/Close';
import { HamburgerIcon } from '@/app/assets/icons/Hamburger';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

import { Menu } from './Menu';

export function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.position = 'fixed';
    } else {
      document.documentElement.style.position = '';
    }
  }, [isOpen]);

  return (
    <header className="relative lg:flex lg:h-[97px] lg:items-center lg:justify-between lg:bg-bg2 lg:p-[0_70px]">
      <div className="z-50 flex h-[60px] items-center justify-between bg-bg2 p-[16px] lg:h-auto lg:p-[unset]">
        <Image
          width={254}
          className="h-[24px] w-[254px] lg:h-[32px] lg:w-[338px]"
          height={24}
          src="/retrocraft.png"
          alt="retro-game"
          unoptimized
        />
        <Button
          onClick={() => setOpen(pre => !pre)}
          variant="primary"
          className="h-[28px] w-[28px] lg:hidden"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
      </div>
      <Menu isOpen={isOpen} />
    </header>
  );
}
