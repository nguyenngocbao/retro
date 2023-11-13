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
          'bg-game1-bg bg-cover  bg-bottom bg-no-repeat pb-[82px] pt-[23px] md:py-[50px] lg:bg-game1-bg-pc lg:px-0 lg:pb-[114px] lg:pt-[79px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <h2 className="hidden-ani-from-bot mx-auto mb-[14px] flex h-[65px] w-[246px] items-center justify-center bg-bg-title-1 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black 2xl:mb-[29px] 2xl:h-[135px] 2xl:w-[512px] 2xl:text-[40px] 2xl:leading-[48px]">
            EXPLORE THE GAME
          </h2>
          <p className="hidden-ani-from-bot mb-[43px] text-center text-[16px] font-bold leading-[22.4px] lg:mx-auto lg:max-w-[723px] 2xl:mb-[97px] 2xl:text-[20px] 2xl:uppercase 2xl:leading-[28px]">
            Gear up for a nostalgic battle! Remix classics, conquer epic worlds,
            trade NFTs, and skillfully earn $Retro tokens. It&apos;s not just
            gaming; it&apos;s a thrilling fight to level up. Ready to dominate?
            🚀
          </p>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/XQ3RRopQxrc?si=LsQJ5N-QT9bpSB2n&start=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto mb-[82px] aspect-video w-full max-w-[844px] shadow-md 2xl:mb-[140px]"
          ></iframe>

          <GameExpore
            className="md:flex-row-reverse"
            imagePath={GAME_EXPORES.SKILLFUL_SURVIVOR.image}
            imageAlt={GAME_EXPORES.SKILLFUL_SURVIVOR.description}
            titleIcon={GAME_EXPORES.SKILLFUL_SURVIVOR.icon}
            name={GAME_EXPORES.SKILLFUL_SURVIVOR.name}
            desc={GAME_EXPORES.SKILLFUL_SURVIVOR.description}
            buttonName={GAME_EXPORES.SKILLFUL_SURVIVOR.buttonName}
            buttonLink={GAME_EXPORES.SKILLFUL_SURVIVOR.buttonLink}
            levelToPlay={GAME_EXPORES.SKILLFUL_SURVIVOR.levelToPlay}
            levelToPlayContent={
              GAME_EXPORES.SKILLFUL_SURVIVOR.levelToPlayContent
            }
            childrenClassName2="hidden-ani-from-left"
            childrenClassName1="hidden-ani-from-right"
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex flex-col items-center justify-center  gap-[27px] bg-game2-bg bg-cover bg-bottom bg-no-repeat py-[90px] md:py-[50px] lg:bg-game2-bg-pc lg:px-0 2xl:py-[139px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <GameExpore
            imagePath={GAME_EXPORES.TANK_WAR.image}
            imageAlt={GAME_EXPORES.TANK_WAR.description}
            titleIcon={GAME_EXPORES.TANK_WAR.icon}
            name={GAME_EXPORES.TANK_WAR.name}
            desc={GAME_EXPORES.TANK_WAR.description}
            buttonName={GAME_EXPORES.TANK_WAR.buttonName}
            buttonLink={GAME_EXPORES.TANK_WAR.buttonLink}
            levelToPlay={GAME_EXPORES.TANK_WAR.levelToPlay}
            levelToPlayContent={GAME_EXPORES.TANK_WAR.levelToPlayContent}
            childrenClassName1="hidden-ani-from-left"
            childrenClassName2="hidden-ani-from-right"
          />
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex flex-col items-center justify-center  gap-[27px] bg-game3-bg bg-cover bg-bottom bg-no-repeat py-[90px] md:py-[50px] lg:bg-game3-bg-pc lg:px-0 2xl:h-[800px] 2xl:pb-[139px]',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[calc(100%_-_300px)] 2xl:max-w-[1227px]">
          <GameExpore
            className="md:flex-row-reverse"
            imagePath={GAME_EXPORES.CAR_RACING.image}
            imageAlt={GAME_EXPORES.CAR_RACING.description}
            titleIcon={GAME_EXPORES.CAR_RACING.icon}
            name={GAME_EXPORES.CAR_RACING.name}
            desc={GAME_EXPORES.CAR_RACING.description}
            buttonName={GAME_EXPORES.CAR_RACING.buttonName}
            buttonLink={GAME_EXPORES.CAR_RACING.buttonLink}
            levelToPlay={GAME_EXPORES.CAR_RACING.levelToPlay}
            levelToPlayContent={GAME_EXPORES.CAR_RACING.levelToPlayContent}
            childrenClassName2="hidden-ani-from-left"
            childrenClassName1="hidden-ani-from-right"
          />
        </div>
      </section>
    </>
  );
};
