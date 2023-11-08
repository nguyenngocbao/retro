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
        'relative mx-auto max-w-[calc(100%_-_38px)] pb-[32px] md:max-w-[calc(100%_-_110px)] lg:mx-auto lg:flex lg:max-w-[calc(100%_-_300px)] lg:flex-row lg:gap-[30px]  lg:pb-[100px] lg:pt-[30px] xl:max-w-[1227px] xl:gap-[65px] xl:p-0 xl:pb-[211px] xl:pt-[unset]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt="story of mario"
        className="absolute right-0 top-[-102px] md:left-0 md:top-[-50px] md:w-[50vw] lg:top-[-20px] lg:w-[340px] xl:top-[-150px] xl:w-[589px]"
        src="/bg4-pc.png"
        width={343}
        height={407}
      />
      <div className="h-[292px] shrink-0 md:h-[280px] lg:w-[340px] lg:shrink-0 xl:w-[589px]"></div>
      <div>
        <h2 className="mb-[8px] text-[20px] font-bold leading-[28px] md:text-right lg:text-left xl:mb-[30px] xl:text-left xl:text-[36px] xl:leading-[50px]">
          GAME OVERVIEW
        </h2>
        <div className="mb-[11px] flex h-[69px] w-[263px] items-center justify-center bg-bg-title-2 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black md:mb-[30px] md:ml-auto lg:ml-[unset] xl:mb-[31px] xl:ml-[unset] xl:h-[135px] xl:w-[512px] xl:text-[40px] xl:leading-[48px]">
          THE NEW BEGINNING
        </div>
        <p className="text-[16px] leading-[22px] text-white md:mx-[-35px] lg:mx-[unset]  xl:text-[23px] xl:uppercase xl:leading-[30px]">
          Kratos is a father again. As mentor and protector to Atreus, a son
          determined to earn his respect, he is forced to deal with and control
          the rage that has long defined him while out in a very dangerous world
          with his son. His vengeance against the Gods of Olympus behind him,
          Kratos now lives in the realm of Norse deities and monsters.
        </p>
      </div>
    </section>
  );
};
