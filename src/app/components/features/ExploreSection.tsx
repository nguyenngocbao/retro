'use client';

import { FC, HTMLAttributes } from 'react';

import { CrossbowIcon } from '@/app/assets/icons/Crossbow';
import { SwordIcon } from '@/app/assets/icons/Sword';
import { mergeClasses } from '@/app/utils';

import { GameExpore } from './GameExpore';

export const ExploreSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <>
      <section
        className={mergeClasses(
          'bg-bg2-gradient bg-cover bg-bottom bg-no-repeat pb-[82px] pt-[23px] lg:bg-bg2-gradient-pc lg:px-0 lg:pb-[114px] lg:pt-[79px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] xl:max-w-[1276px]">
          <h2 className="mx-auto mb-[14px] flex h-[65px] w-[246px] items-center justify-center bg-bg-title-1 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black lg:mb-[29px] lg:h-[135px] lg:w-[512px] lg:text-[40px] lg:leading-[48px]">
            EXPLORE THE GAME
          </h2>
          <p className="mb-[24px] text-center text-[16px] font-bold leading-[22.4px] lg:mx-auto lg:mb-[118px] lg:max-w-[723px] lg:text-[20px] lg:uppercase lg:leading-[28px]">
            With new games, new updates, and new ways to play, join one of the
            biggest communities in gaming and start crafting today!
          </p>
          <GameExpore
            imagePath="/game-cd1.png"
            imageAlt="game1"
            titleIcon={CrossbowIcon}
            name="SUPER MARIO BROS 2"
            desc="Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users"
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex flex-col items-center justify-center gap-[27px] bg-bg3 bg-cover bg-bottom bg-no-repeat py-[90px] lg:bg-bg3-pc lg:px-0',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] xl:max-w-[1276px]">
          <GameExpore
            className="md:flex-row-reverse"
            imagePath="/game-cd2.png"
            imageAlt="game2"
            titleIcon={SwordIcon}
            name="OUT RUN"
            desc="Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users"
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex  flex-col items-center justify-center gap-[27px] bg-bg3 bg-cover bg-bottom bg-no-repeat py-[90px] lg:bg-bg3-pc lg:px-0',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] xl:max-w-[1276px]">
          <GameExpore
            imagePath="/game-cd3.png"
            imageAlt="game3"
            titleIcon={CrossbowIcon}
            name="DONKEY KONG"
            desc="Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users"
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex  flex-col items-center justify-center gap-[27px] bg-game4-bg bg-cover bg-bottom bg-no-repeat py-[90px] lg:bg-game4-bg-pc lg:px-0 xl:h-[961px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] xl:max-w-[1276px]">
          <GameExpore
            className="md:flex-row-reverse"
            imagePath="/game-cd1.png"
            imageAlt="game4"
            titleIcon={SwordIcon}
            name="OUT RUN VER 2.0"
            desc="Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users"
          />
        </div>
      </section>
    </>
  );
};
