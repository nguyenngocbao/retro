/* eslint-disable jsx-a11y/media-has-caption */
'use client';

import { FC, HTMLAttributes, useEffect, useRef } from 'react';

import { CrossbowIcon } from '@/app/assets/icons/Crossbow';
import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';
import { LeftArrowIcon } from '@/app/assets/icons/LeftArrow';
import { RetrocraftIcon } from '@/app/assets/icons/Retrocraft';
import { RightArrowIcon } from '@/app/assets/icons/RightArrow';
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
  autoplaySpeed: 3000,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  variableWidth: true
};

export const WelcomeBanner: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  const onClickNext = ref => {
    ref.current.slickPrev();
  };

  const onClickPrev = ref => {
    ref.current.slickNext();
  };

  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);

    return () => videoRef.current.stop();
  }, []);

  return (
    <section
      className={mergeClasses(
        `relative px-[19px] lg:h-[calc(100vh_-_97px)] lg:p-[156px_160px]`,
        className
      )}
      {...props}
    >
      <video
        ref={videoRef}
        src={
          (process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + '/trailler.mp4#t=0.1'
        }
        poster={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + '/bg1.png'}
        className="absolute left-0 top-[-94px] z-[-1] h-full w-full object-cover"
        loop
        autoPlay
        muted
      />
      <div className="mt-[95px] w-full lg:top-0 lg:h-fit lg:w-fit lg:max-w-[534px] lg:translate-y-[0]">
        <h1 className="mb-[10px] text-[20px] font-bold leading-[28px] lg:text-[36px] lg:leading-[49px]">
          WELCOME TO
        </h1>
        <RetrocraftIcon className="mb-[23px]" />
        <p className="mb-[29px] text-[16px] font-bold leading-[22px] lg:mb-[24px] lg:text-[18px] lg:leading-[25px]">
          With new games, new updates, and new ways to play, join one of the
          biggest communities in gaming and start crafting today!
        </p>
        <Button
          variant="secondary"
          className="relative mb-[30px] ml-[32px] h-[36px] w-[140px] lg:h-[57px] lg:w-[171px]"
        >
          <FourLeafsIcon className="absolute left-0 translate-x-[-69%]" />
          PLAY NOW
        </Button>
        <Slider ref={topSliderRef} {...settings}>
          <div className="relative flex h-[280px] w-[346px] flex-col">
            <Image
              unoptimized
              alt="story of mario 1"
              className="absolute left-0 top-0 w-full"
              src="/character1.png"
              width={346}
              height={280}
            />
            <Button
              variant="secondary"
              className="absolute bottom-[5px] left-[50%] h-[41px] w-max translate-x-[-50%] gap-[10px] px-[10px] lg:h-[57px] lg:w-[171px]"
            >
              <CrossbowIcon className="shrink-0" />
              <span className="shrink-0">SUPER MARIO BROS 2</span>
            </Button>
          </div>
          <div className="relative flex h-[280px] w-[346px] flex-col">
            <Image
              unoptimized
              alt="story of mario 2"
              className="absolute left-0 top-[20px] w-full"
              src="/character2.png"
              width={346}
              height={280}
            />
            <Button
              variant="secondary"
              className="absolute bottom-[5px] left-[50%] h-[41px] w-max translate-x-[-50%] gap-[10px] px-[10px] lg:h-[57px] lg:w-[171px]"
            >
              <CrossbowIcon className="shrink-0" />
              <span className="shrink-0">OUT RUN</span>
            </Button>
          </div>
        </Slider>
        <div className="mx-[-19px] flex h-[79px] justify-center gap-[5px]">
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
        <div></div>
      </div>
      <div className="relative">
        <Button
          variant="secondary"
          onClick={() => onClickNext(bottomSliderRef)}
          className="absolute left-0 top-[50%] z-40 h-[41px] w-[41px] translate-y-[-50%]"
        >
          <LeftArrowIcon />
        </Button>
        <Button
          variant="secondary"
          onClick={() => onClickPrev(bottomSliderRef)}
          className="absolute right-0 top-[50%] z-40 h-[41px] w-[41px] translate-y-[-50%]"
        >
          <RightArrowIcon />
        </Button>
        <Slider
          {...horizontalSettings}
          ref={bottomSliderRef}
          className="mr-[-19px]"
        >
          <Image
            unoptimized
            alt="scroll"
            className="mr-[13px] h-[141px] !w-[251px]"
            src="/scroll-bg1.png"
            width={251}
            height={141}
          />
          <Image
            unoptimized
            alt="scroll"
            className="mr-[13px] h-[141px] !w-[251px]"
            src="/scroll-bg2.png"
            width={251}
            height={141}
          />
          <Image
            unoptimized
            alt="scroll"
            className="mr-[13px] h-[141px] !w-[251px]"
            src="/scroll-bg3.png"
            width={251}
            height={141}
          />
          <Image
            unoptimized
            alt="scroll"
            className="mr-[13px] h-[141px] !w-[251px]"
            src="/scroll-bg4.png"
            width={251}
            height={141}
          />
          <Image
            unoptimized
            alt="scroll"
            className="mr-[13px] h-[141px] !w-[251px]"
            src="/scroll-bg5.png"
            width={251}
            height={141}
          />
        </Slider>
      </div>
    </section>
  );
};
