'use client';

import { useEffect, useRef } from 'react';

import { Image } from './images/Image';

export const Logo = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setTimeout(() => {
    ref.current.style.display = 'none';
    // }, 4000);
  }, []);

  return (
    <div ref={ref}>
      <Image
        unoptimized
        alt="Retrocraft"
        className="logo-spread max-w-screen fixed left-[50%] top-[50%] z-[-1] w-[400px] translate-x-[-50%] translate-y-[-50%]"
        src="/logo_retrocraft.png"
        width={1024}
        height={1024}
        priority
      />
    </div>
  );
};
