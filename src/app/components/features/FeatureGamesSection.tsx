import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

import { FEATURE_GAMES } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';
import { Slider } from '../Slider';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToScroll: 1
      }
    }
  ]
};

export const FeatureGamesSections: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(`relative h-[689px] 2xl:h-[913px]`, className)}
      {...props}
    >
      <Image
        unoptimized
        alt="scroll"
        className="absolute top-0 z-[1] h-[calc(100%_+_70px)] w-full object-fill object-top md:h-[calc(100%_+_30px)] xl:h-[calc(100%_+_60px)] 2xl:h-[1043px]"
        src="/bg-feature-game.svg"
        lgSrc="/bg-feature-game-pc.svg"
        width={390}
        height={750}
      />
      <div className="absolute left-[50%] top-[50%] z-[2] h-full w-full max-w-[calc(100%_-_38px)] translate-x-[-50%] translate-y-[-50%] lg:max-w-[calc(100%_-_300px)] 2xl:h-auto 2xl:max-w-[1227px]">
        <div className="hidden-ani-from-bot flex flex-col items-center justify-center gap-[19px] pb-[29px] pt-[56px] xl:pt-[80px] 2xl:pb-[32px]">
          <div className="flex h-[62px] w-[234px] items-center justify-center bg-bg-title-4 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-secondary lg:h-[69px] lg:w-[263px] 2xl:h-[135px] 2xl:w-[512px] 2xl:text-[40px] 2xl:leading-[48px]">
            {FEATURE_GAMES.title}
          </div>
          <p className="hidden-ani-from-bot text-center text-[16px] leading-[24px] text-black 2xl:max-w-[844px] 2xl:text-[20px] 2xl:uppercase 2xl:leading-[28px]">
            {FEATURE_GAMES.description}
          </p>
        </div>
        <Slider
          {...settings}
          className="hidden-ani-from-bot mx-[-19px] bg-[#333] p-[19px] 2xl:mx-[unset] 2xl:p-[12px]"
        >
          {FEATURE_GAMES.games.map(game => {
            return (
              <div
                key={game.name}
                className="relative mr-[11px] h-[330px] !w-[243px] 2xl:mr-[14px] 2xl:h-[413px] 2xl:!w-[291px]"
              >
                <div className="flex h-full w-full flex-col items-center justify-end">
                  <Image
                    unoptimized
                    alt={game.shortDesc}
                    className="absolute z-[-1] h-full w-full"
                    src={game.image}
                    width={304}
                    height={413}
                  />
                  <div className="absolute bottom-0 left-0 z-[-1] h-[138px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]"></div>
                  <p className="mb-[6px] text-[20px] leading-[28px] text-white">
                    {game.name}
                  </p>
                  <Link href={game.learnMore}>
                    <Button
                      variant="secondary"
                      className="mb-[15px] h-[38px] w-[157px]"
                    >
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
