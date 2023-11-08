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
        'relative mx-auto max-w-[calc(100%_-_38px)] pb-[32px] lg:mx-auto lg:flex lg:flex-col lg:gap-[65px] lg:p-0 lg:pb-[80px] lg:pt-[80px] xl:max-w-[1276px] xl:flex-row xl:pb-[211px] xl:pt-[unset]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt="story of mario"
        className="absolute right-0 top-[-102px] md:w-[55vw] lg:left-0 lg:top-[-140px] lg:h-[698px] lg:w-[589px] xl:left-0 xl:top-[-163px]"
        src="/bg4-pc.png"
        width={343}
        height={407}
      />
      <div className="h-[292px] shrink-0 lg:w-[589px]"></div>
      <div>
        <h2 className="mb-[8px] text-[20px] font-bold leading-[28px] lg:mb-[30px] lg:text-right lg:text-[36px] lg:leading-[50px] xl:text-left">
          GAME OVERVIEW
        </h2>
        <div className="mb-[11px] flex h-[69px] w-[263px] items-center justify-center bg-bg-title-2 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black lg:mb-[31px] lg:ml-auto lg:h-[135px] lg:w-[512px] lg:text-[40px] lg:leading-[48px] xl:ml-[unset]">
          THE NEW BEGINNING
        </div>
        <p className="text-[16px] leading-[22px] text-white lg:text-[23px] lg:uppercase lg:leading-[30px] xl:text-[20px] xl:leading-[28px]">
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
