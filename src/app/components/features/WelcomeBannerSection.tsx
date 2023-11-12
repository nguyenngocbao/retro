'use client';

import Link from 'next/link';
import { FC, HTMLAttributes, useRef, useState } from 'react';

import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';
import { LeftArrowIcon } from '@/app/assets/icons/LeftArrow';
import { RetrocraftIcon } from '@/app/assets/icons/Retrocraft';
import { RightArrowIcon } from '@/app/assets/icons/RightArrow';
import { WELCOME_BANNER } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';
import { Slider } from '../Slider';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 3000,
  autoplay: true
};

const horizontalSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000
};

export const WelcomeBanner: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const onClickNext = ref => {
    ref.current.slickPrev();
  };

  const onClickPrev = ref => {
    ref.current.slickNext();
  };

  return (
    <section
      className={mergeClasses(
        `relative lg:flex lg:flex-col lg:justify-between`,
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        width={10}
        height={10}
        src={WELCOME_BANNER.games[slideIndex].backgroundImage[0]}
        mdSrc={WELCOME_BANNER.games[slideIndex].backgroundImage[1]}
        alt=""
        className="absolute left-0 top-[-94px] z-[-1] h-full w-full object-cover transition-all lg:top-0 lg:h-screen"
      />
      <div className="mx-auto mt-[95px] w-full max-w-[calc(100%_-_38px)] lg:mt-[150px] lg:flex lg:h-[calc(100vh_-_292px)] lg:max-w-[calc(100%_-_72px)] lg:gap-[40px] xl:max-w-[calc(100%_-_300px)] 2xl:mt-[180px] 2xl:h-[calc(100vh_-_413px)] 2xl:h-auto 2xl:max-w-[1227px] 2xl:gap-[72px]">
        <div className="lg:w-[450px] lg:flex-shrink-0 2xl:w-[554px]">
          <h1 className="mb-[10px] text-[20px] font-bold leading-[28px] lg:mb-[30px] lg:text-[40px] lg:leading-[48px]">
            WELCOME TO
          </h1>
          <RetrocraftIcon className="mb-[23px] h-[117px] w-[246px] 2xl:mb-[32px] 2xl:h-[205px] 2xl:w-[429px]" />
          <p className="mb-[29px] text-[16px] font-bold leading-[22px] lg:uppercase 2xl:mb-[24px] 2xl:text-[20px] 2xl:leading-[28px]">
            The ultimate retro gaming experience. Relive classics and earn for
            real in RetroCraft.
          </p>
          <Link href="https://whitepaper.retrocraft.io/how-to-start-playing-retrocraft/how-to-download-and-play-retrocraft">
            <Button
              variant="secondary"
              className="group relative mb-[30px] ml-[32px] h-[36px] w-[140px] hover:shadow-gr md:mb-[unset] 2xl:ml-[47px] 2xl:h-[55px] 2xl:w-[241px] 2xl:text-[32px] 2xl:font-[500] 2xl:leading-[44px]"
            >
              <FourLeafsIcon className="absolute left-0 translate-x-[-69%] transition-all group-hover:rotate-90 2xl:h-[76px] 2xl:w-[76px]" />
              PLAY NOW
            </Button>
          </Link>
        </div>
        <div
          className="md:mx-[50px] lg:relative lg:mx-[unset] lg:min-h-[391px] lg:max-w-[calc(100vw_-_562px)] lg:flex-[1] xl:max-w-[calc(calc(100vw_-_445px)_-_calc(100vw_-_calc(100vw_-_300px)))] 2xl:min-h-[530px] 2xl:max-w-[calc(calc(100vw_-_626px)_-_calc(100vw_-_1227px))]"
          id="welcome-banner"
        >
          <Slider
            ref={topSliderRef}
            {...settings}
            afterChange={i => setSlideIndex(i)}
          >
            {WELCOME_BANNER.games.map(game => {
              const Icon = game.icon;

              return (
                <div
                  key={game.name}
                  className="relative flex h-[280px] w-[346px] flex-col outline-0 md:h-[450px]"
                >
                  <Image
                    unoptimized
                    alt={game.description}
                    className="absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%] object-scale-down md:h-full md:overflow-visible md:object-contain lg:h-full lg:object-top"
                    src={game.image}
                    width={346}
                    height={280}
                  />
                  <span className="absolute bottom-[5px] left-[50%] flex h-[41px] w-max translate-x-[-50%] items-center justify-center gap-[10px] bg-secondary px-[10px] text-[20px] font-bold leading-[28px] text-black lg:bottom-[51px] lg:left-[unset] lg:right-[122px] lg:translate-x-0 lg:gap-[21px] 2xl:h-[74px] 2xl:px-[21px] 2xl:text-[30px] 2xl:leading-[36px]">
                    <Icon className="h-[29px] w-[29px] shrink-0 2xl:h-[58px] 2xl:w-[58px]" />
                    <span className="shrink-0 uppercase">{game.name}</span>
                  </span>
                </div>
              );
            })}
          </Slider>
          <div className="mx-[-19px] flex h-[79px] justify-center gap-[5px] lg:absolute lg:bottom-[51px] lg:right-0 lg:mx-[unset] lg:h-auto 2xl:bottom-[65px]">
            <Button
              onClick={() => onClickNext(topSliderRef)}
              variant="secondary"
              className="h-[41px] w-[41px]"
            >
              <LeftArrowIcon />
            </Button>
            <Button
              onClick={() => onClickPrev(topSliderRef)}
              variant="secondary"
              className="h-[41px] w-[41px]"
            >
              <RightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[calc(100%_-_38px)] lg:max-w-[100vw]">
        <Button
          variant="secondary"
          onClick={() => onClickNext(bottomSliderRef)}
          className="absolute left-0 top-[50%] z-40 h-[41px] w-[41px] translate-y-[-50%] 2xl:left-[calc(calc(100vw_-_1227px)_/_2)]"
        >
          <LeftArrowIcon />
        </Button>
        <Button
          variant="secondary"
          onClick={() => onClickPrev(bottomSliderRef)}
          className="absolute right-0 top-[50%] z-40 h-[41px] w-[41px] translate-y-[-50%] 2xl:right-[calc(calc(100vw_-_1227px)_/_2)]"
        >
          <RightArrowIcon />
        </Button>
        <Slider
          {...horizontalSettings}
          ref={bottomSliderRef}
          className="mr-[-19px] lg:m-0"
        >
          {WELCOME_BANNER.horizontalScrollImages.map((image, i) => {
            return (
              <Image
                key={i}
                unoptimized
                alt={image.description}
                className="mr-[13px] h-[141px] !w-[251px] object-cover 2xl:h-[231px] 2xl:!w-[412px]"
                src={image.image}
                width={251}
                height={141}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
