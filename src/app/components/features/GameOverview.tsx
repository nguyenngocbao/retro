'use client';

import { FC, HTMLAttributes } from 'react';

import { GAME_OVERVIEW } from '@/app/constant';
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
        'hidden-ani-from-bot relative mx-auto max-w-[calc(100%_-_38px)] pb-[32px] md:max-w-[calc(100%_-_110px)] lg:mx-auto lg:flex lg:max-w-[calc(100%_-_300px)] lg:flex-row lg:gap-[30px]  lg:pb-[100px] lg:pt-[30px] 2xl:max-w-[1227px] 2xl:gap-[65px] 2xl:p-0 2xl:pb-[211px] 2xl:pt-[unset]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt="story of mario"
        className="absolute right-0 top-[-102px] md:left-0 md:top-[-50px] md:w-[50vw] lg:top-[-20px] lg:w-[340px] 2xl:top-[-150px] 2xl:w-[589px]"
        src="/game-overview.png"
        lgSrc="/game-overview-pc.png"
        width={343}
        height={407}
      />
      <div className="h-[292px] shrink-0 md:h-[280px] lg:w-[340px] lg:shrink-0 2xl:w-[589px]"></div>
      <div>
        <h2 className="mb-[8px] text-[20px] font-bold leading-[28px] md:text-right lg:text-left 2xl:mb-[30px] 2xl:text-left 2xl:text-[36px] 2xl:leading-[50px]">
          GAME OVERVIEW
        </h2>
        <div className="mb-[11px] flex h-[69px] w-[263px] items-center justify-center bg-bg-title-2 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black md:mb-[30px] md:ml-auto lg:ml-[unset] 2xl:mb-[31px] 2xl:ml-[unset] 2xl:h-[135px] 2xl:w-[512px] 2xl:text-[40px] 2xl:leading-[48px]">
          {GAME_OVERVIEW.title}
        </div>
        <p className="text-[16px] leading-[22px] text-white md:mx-[-35px] lg:mx-[unset]  2xl:text-[23px] 2xl:uppercase 2xl:leading-[30px]">
          {GAME_OVERVIEW.description}
        </p>
      </div>
    </section>
  );
};
