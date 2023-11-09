'use client';

import { FC, HTMLAttributes } from 'react';

import { GAME_EXPORES } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { GameExpore } from './GameExpore';

export const ExploreSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <>
      <section
        id="game-expore"
        className={mergeClasses(
          'bg-game1-bg bg-cover bg-bottom bg-no-repeat pb-[82px] pt-[23px] md:py-[50px] lg:bg-game1-bg-pc lg:px-0 lg:pb-[114px] lg:pt-[79px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <h2 className="mx-auto mb-[14px] flex h-[65px] w-[246px] items-center justify-center bg-bg-title-1 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black 2xl:mb-[29px] 2xl:h-[135px] 2xl:w-[512px] 2xl:text-[40px] 2xl:leading-[48px]">
            EXPLORE THE GAME
          </h2>
          <p className="mb-[24px] text-center text-[16px] font-bold leading-[22.4px] lg:mx-auto lg:max-w-[723px] 2xl:mb-[118px] 2xl:text-[20px] 2xl:uppercase 2xl:leading-[28px]">
            Explore the ultimate nostalgic gaming metaverse! Quest through
            reimagined retro classics, craft vivid voxel worlds, trade rare NFTs
            and earn $Retro tokens as you play!
          </p>
          <GameExpore
            imagePath={GAME_EXPORES.SUPPER_MARIO_BROS_2.image}
            imageAlt={GAME_EXPORES.SUPPER_MARIO_BROS_2.description}
            titleIcon={GAME_EXPORES.SUPPER_MARIO_BROS_2.icon}
            name={GAME_EXPORES.SUPPER_MARIO_BROS_2.name}
            desc={GAME_EXPORES.SUPPER_MARIO_BROS_2.description}
            buttonName={GAME_EXPORES.SUPPER_MARIO_BROS_2.buttonName}
            buttonLink={GAME_EXPORES.SUPPER_MARIO_BROS_2.buttonLink}
            levelToPlay={GAME_EXPORES.SUPPER_MARIO_BROS_2.levelToPlay}
            bossToBeat={GAME_EXPORES.SUPPER_MARIO_BROS_2.bossToBeat}
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex flex-col items-center justify-center  gap-[27px] bg-game2-bg  bg-cover bg-bottom bg-no-repeat py-[90px] md:py-[50px] lg:bg-game2-bg-pc lg:px-0 2xl:py-[139px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <GameExpore
            className="md:flex-row-reverse"
            imagePath={GAME_EXPORES.OUT_RUN.image}
            imageAlt={GAME_EXPORES.OUT_RUN.description}
            titleIcon={GAME_EXPORES.OUT_RUN.icon}
            name={GAME_EXPORES.OUT_RUN.name}
            desc={GAME_EXPORES.OUT_RUN.description}
            buttonName={GAME_EXPORES.OUT_RUN.buttonName}
            buttonLink={GAME_EXPORES.OUT_RUN.buttonLink}
            levelToPlay={GAME_EXPORES.OUT_RUN.levelToPlay}
            bossToBeat={GAME_EXPORES.OUT_RUN.bossToBeat}
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex  flex-col items-center justify-center  gap-[27px] bg-game3-bg bg-cover bg-bottom bg-no-repeat py-[90px] md:py-[50px] lg:bg-game3-bg-pc lg:px-0 2xl:py-[139px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <GameExpore
            imagePath={GAME_EXPORES.DONKEY_KONG.image}
            imageAlt={GAME_EXPORES.DONKEY_KONG.description}
            titleIcon={GAME_EXPORES.DONKEY_KONG.icon}
            name={GAME_EXPORES.DONKEY_KONG.name}
            desc={GAME_EXPORES.DONKEY_KONG.description}
            buttonName={GAME_EXPORES.DONKEY_KONG.buttonName}
            buttonLink={GAME_EXPORES.DONKEY_KONG.buttonLink}
            levelToPlay={GAME_EXPORES.DONKEY_KONG.levelToPlay}
            bossToBeat={GAME_EXPORES.DONKEY_KONG.bossToBeat}
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex  flex-col items-center justify-center  gap-[27px] bg-game4-bg bg-cover bg-bottom bg-no-repeat py-[90px] md:py-[50px] lg:bg-game4-bg-pc lg:px-0 2xl:h-[800px] 2xl:pb-[139px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <GameExpore
            className="md:flex-row-reverse"
            imagePath={GAME_EXPORES.OUT_RUN_VER_2.image}
            imageAlt={GAME_EXPORES.OUT_RUN_VER_2.description}
            titleIcon={GAME_EXPORES.OUT_RUN_VER_2.icon}
            name={GAME_EXPORES.OUT_RUN_VER_2.name}
            desc={GAME_EXPORES.OUT_RUN_VER_2.description}
            buttonName={GAME_EXPORES.OUT_RUN_VER_2.buttonName}
            buttonLink={GAME_EXPORES.OUT_RUN_VER_2.buttonLink}
            levelToPlay={GAME_EXPORES.OUT_RUN_VER_2.levelToPlay}
            bossToBeat={GAME_EXPORES.OUT_RUN_VER_2.bossToBeat}
          />
        </div>
      </section>
    </>
  );
};
