'use client';

import { FC, HTMLAttributes } from 'react';

import { mergeClasses } from '@/app/utils';

import { Image } from '../images/Image';

export const GameOverview: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      id="game-overview"
      className={mergeClasses(
        'relative px-[16px] pb-[32px] lg:p-[24px_135px]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt="story of mario"
        className="absolute right-[19px] top-[-102px]"
        src="/bg4.png"
        width={343}
        height={407}
      />
      <div className="h-[292px]"></div>
      <h2 className="mb-[8px] text-[20px] font-bold leading-[28px]">
        GAME OVERVIEW
      </h2>
      <div className="mb-[11px] flex h-[69px] w-[263px] items-center justify-center bg-bg-title-2 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black">
        THE NEW BEGINNING
      </div>
      <p className="text-[16px] leading-[22px] text-white">
        Kratos is a father again. As mentor and protector to Atreus, a son
        determined to earn his respect, he is forced to deal with and control
        the rage that has long defined him while out in a very dangerous world
        with his son. His vengeance against the Gods of Olympus behind him,
        Kratos now lives in the realm of Norse deities and monsters.
      </p>
    </section>
  );
};
