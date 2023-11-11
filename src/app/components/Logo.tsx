'use client';

import { useEffect, useRef } from 'react';

import { Image } from './images/Image';

export const Logo = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.display = 'none';
    }, 2000);
  }, []);

  return (
    <div ref={ref}>
      <svg
        className="logo-spread max-w-screen fixed left-[50%] top-[50%] z-[-1] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-51%] overflow-visible"
        width="200"
        height="200"
      >
        <circle className="logo-loading" cx="50%" cy="50%" r="50%" />
      </svg>
      <Image
        unoptimized
        alt="Retrocraft"
        className="max-w-screen fixed left-[50%] top-[50%] z-[-1] w-[300px] translate-x-[-50%] translate-y-[-50%]"
        src="/logo_retrocraft.png"
        width={1024}
        height={1024}
        priority
      />
      <p className="fixed left-[50%] top-[calc(50%_+_150px)] z-[-1] translate-x-[-45%] translate-y-[-50%]">
        Loading...
      </p>
    </div>
  );
};
