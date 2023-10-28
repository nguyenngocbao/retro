'use client';

import { FC, HTMLAttributes, useRef } from 'react';

import { LeftArrowIcon } from '@/app/assets/icons/LeftArrow';
import { RightArrowIcon } from '@/app/assets/icons/RightArrow';
import { CURRENT_GAMES } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Slider } from '../Slider';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 5000
};

export const ExploreSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const sliderRef = useRef(null);

  const onClickNext = () => {
    sliderRef.current.slickPrev();
  };

  const onClickPrev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section
      className={mergeClasses('p-[16px] lg:p-[24px_135px]', className)}
      {...props}
    >
      <h2 className="mb-[12px] text-center text-[18px] font-bold leading-[25px] lg:mb-[16px] lg:text-[36px] lg:leading-[49px]">
        EXPLORE THE GAME
      </h2>
      <p className="mb-[24px] text-center text-[12px] font-[600] leading-[16px] lg:mx-auto lg:mb-[32px] lg:max-w-[592px] lg:text-center lg:text-[18px] lg:leading-[25px]">
        With new games, new updates, and new ways to play, join one of the
        biggest communities in gaming and start crafting today!
      </p>

      <div className="lg:relative">
        <Slider ref={sliderRef} {...settings}>
          {CURRENT_GAMES.map((game, i) => {
            return (
              <div key={i}>
                <iframe
                  name="youtube"
                  width="560"
                  height="315"
                  src={game.image}
                  title={game.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; vertical-scroll 'none'"
                  allowFullScreen
                  scrolling="no"
                  className="mb-[12px] h-[177px] w-full overflow-hidden bg-green-50 lg:mb-[28px] lg:h-[601px]"
                ></iframe>
                <div className="lg:max-w-[505px]">
                  <h2 className="mb-[12px] text-left text-[16px] font-bold leading-[22px] lg:text-[28px] lg:leading-[38px]">
                    {game.name}
                  </h2>
                  <p className="mb-[24px] text-[12px] font-[500] leading-[16px] lg:mb-[0] lg:text-[16px] lg:leading-[22px]">
                    {game.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="flex justify-center gap-[12px] lg:absolute lg:bottom-0 lg:right-0">
          <Button
            onClick={onClickNext}
            variant="primary"
            className="h-[40px] w-[40px]"
          >
            <LeftArrowIcon />
          </Button>
          <Button
            onClick={onClickPrev}
            variant="primary"
            className="h-[40px] w-[40px]"
          >
            <RightArrowIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};
