'use client';

import { FC, HTMLAttributes } from 'react';

import { CrossbowIcon } from '@/app/assets/icons/Crossbow';
import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';
import { SwordIcon } from '@/app/assets/icons/Sword';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

export const ExploreSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <>
      <section
        className={mergeClasses(
          'bg-bg2-gradient bg-bottom bg-no-repeat p-[23px_19px_82px_19px] lg:p-[24px_135px]',
          className
        )}
        {...props}
      >
        <h2 className="mx-auto mb-[14px] flex h-[65px] w-[246px] items-center justify-center bg-bg-title-1 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black">
          EXPLORE THE GAME
        </h2>
        <p className="mb-[24px] text-center text-[16px] font-bold leading-[22.4px] lg:mx-auto lg:mb-[32px] lg:max-w-[592px] lg:text-center lg:text-[18px] lg:leading-[25px]">
          With new games, new updates, and new ways to play, join one of the
          biggest communities in gaming and start crafting today!
        </p>

        <div className="flex flex-col justify-center gap-[27px]">
          <Image
            unoptimized
            alt="story of mario 1"
            className="mx-auto h-[320px] w-[320px]"
            src="/game-cd1.png"
            width={517}
            height={517}
          />
          <div>
            <Button
              variant="secondary"
              className="mb-[16px] h-[41px] w-max gap-[10px] px-[10px] lg:h-[57px] lg:w-[171px]"
            >
              <CrossbowIcon />
              <span>SUPER MARIO BROS 2</span>
            </Button>
            <p className="mb-[12px] text-[16px] leading-[22px] text-white">
              Over the last two weeks, how often have you been bothered by the
              following problems? feel Exhausted all the time base on the
              collecting date of users
            </p>
            <div className="mb-[19px] flex gap-[53px]">
              <div className="flex gap-[7px]">
                <p className="text-[48px] font-bold leading-[48px]">100</p>
                <p className="w-[61px] text-[16px] leading-[24px]">
                  LEVEL TO PLAY
                </p>
              </div>
              <div className="flex gap-[7px]">
                <p className="text-[48px] font-bold leading-[48px]">20</p>
                <p className="w-[62px] text-[16px] leading-[24px]">
                  BOSS TO BEAT
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="relative ml-[32px] h-[36px] w-[140px] lg:h-[57px] lg:w-[171px]"
            >
              <FourLeafsIcon className="absolute left-0 translate-x-[-69%]" />
              PLAY NOW
            </Button>
          </div>
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex h-[781px] flex-col items-center justify-center gap-[27px] bg-bg3 bg-bottom bg-no-repeat px-[19px] lg:p-[24px_135px]',
          className
        )}
        {...props}
      >
        <Image
          unoptimized
          alt="story of mario 1"
          className="mx-auto h-[320px] w-[320px]"
          src="/game-cd2.png"
          width={517}
          height={517}
        />
        <div>
          <Button
            variant="secondary"
            className="mb-[16px] h-[41px] w-max gap-[10px] px-[10px] lg:h-[57px] lg:w-[171px]"
          >
            <SwordIcon />
            <span>OUT RUN</span>
          </Button>
          <p className="mb-[12px] text-[16px] leading-[22px] text-white">
            Over the last two weeks, how often have you been bothered by the
            following problems? feel Exhausted all the time base on the
            collecting date of users
          </p>
          <div className="mb-[19px] flex gap-[53px]">
            <div className="flex gap-[7px]">
              <p className="text-[48px] font-bold leading-[48px]">100</p>
              <p className="w-[61px] text-[16px] leading-[24px]">
                LEVEL TO PLAY
              </p>
            </div>
            <div className="flex gap-[7px]">
              <p className="text-[48px] font-bold leading-[48px]">20</p>
              <p className="w-[62px] text-[16px] leading-[24px]">
                BOSS TO BEAT
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="relative ml-[32px] h-[36px] w-[140px] lg:h-[57px] lg:w-[171px]"
          >
            <FourLeafsIcon className="absolute left-0 translate-x-[-69%]" />
            PLAY NOW
          </Button>
        </div>
      </section>
      <section
        className={mergeClasses(
          'flex h-[781px] flex-col items-center justify-center gap-[27px] bg-bg3 bg-bottom bg-no-repeat px-[19px] lg:p-[24px_135px]',
          className
        )}
        {...props}
      >
        <Image
          unoptimized
          alt="story of mario 1"
          className="mx-auto h-[320px] w-[320px]"
          src="/game-cd3.png"
          width={517}
          height={517}
        />
        <div>
          <Button
            variant="secondary"
            className="mb-[16px] h-[41px] gap-[10px] px-[9px] lg:h-[57px] lg:w-[171px]"
          >
            <SwordIcon />
            <span>DONKEY KONG</span>
          </Button>
          <p className="mb-[12px] text-[16px] leading-[22px] text-white">
            Over the last two weeks, how often have you been bothered by the
            following problems? feel Exhausted all the time base on the
            collecting date of users
          </p>
          <div className="mb-[19px] flex gap-[53px]">
            <div className="flex gap-[7px]">
              <p className="text-[48px] font-bold leading-[48px]">100</p>
              <p className="w-[61px] text-[16px] leading-[24px]">
                LEVEL TO PLAY
              </p>
            </div>
            <div className="flex gap-[7px]">
              <p className="text-[48px] font-bold leading-[48px]">20</p>
              <p className="w-[62px] text-[16px] leading-[24px]">
                BOSS TO BEAT
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="relative ml-[32px] h-[36px] w-[140px] lg:h-[57px] lg:w-[171px]"
          >
            <FourLeafsIcon className="absolute left-0 translate-x-[-69%]" />
            PLAY NOW
          </Button>
        </div>
      </section>
      <section
        className={mergeClasses(
          'relative bg-bg3 bg-top bg-no-repeat px-[19px] lg:p-[24px_135px]',
          className
        )}
        {...props}
      >
        <div className="absolute bottom-0 left-0 h-[242px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_37.79%,_#262626_100%)]"></div>
        <div className="relative flex h-[811px] w-full flex-col items-center  justify-center gap-[27px]">
          <Image
            unoptimized
            alt="story of mario 1"
            className="mx-auto h-[320px] w-[320px]"
            src="/game-cd1.png"
            width={517}
            height={517}
          />
          <div>
            <Button
              variant="secondary"
              className="mb-[16px] h-[41px] gap-[10px] px-[9px] lg:h-[57px] lg:w-[171px]"
            >
              <SwordIcon />
              <span>OUT RUN VER 2.0</span>
            </Button>
            <p className="mb-[12px] text-[16px] leading-[22px] text-white">
              Over the last two weeks, how often have you been bothered by the
              following problems? feel Exhausted all the time base on the
              collecting date of users
            </p>
            <div className="mb-[19px] flex gap-[53px]">
              <div className="flex gap-[7px]">
                <p className="text-[48px] font-bold leading-[48px]">100</p>
                <p className="w-[61px] text-[16px] leading-[24px]">
                  LEVEL TO PLAY
                </p>
              </div>
              <div className="flex gap-[7px]">
                <p className="text-[48px] font-bold leading-[48px]">20</p>
                <p className="w-[62px] text-[16px] leading-[24px]">
                  BOSS TO BEAT
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="relative ml-[32px] h-[36px] w-[140px] lg:h-[57px] lg:w-[171px]"
            >
              <FourLeafsIcon className="absolute left-0 translate-x-[-69%]" />
              PLAY NOW
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
