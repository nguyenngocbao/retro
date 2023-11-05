import { FC, HTMLAttributes } from 'react';

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
  slidesToScroll: 1,
  variableWidth: true
};

export const FeatureGamesSections: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={mergeClasses(``, className)} {...props}>
      <div className="flex flex-col items-center justify-center gap-[19px] bg-bg-title-3 px-[19px] pb-[29px] pt-[56px]">
        <div className="flex h-[62px] w-[234px] items-center justify-center bg-bg-title-4 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-secondary">
          FEATURED GAMES
        </div>
        <p className="text-center text-[16px] leading-[24px] text-black">
          Immerse yourself in the Cyberpunk universe, from the original
          storyline of Cyberpunk 2077 and its gripping spy-thriller expansion
          Phantom Liberty to the award-winning anime series Cyberpunk:
          Edgerunners — there are countless stories to discover in the deadly
          megalopolis of Night City.
        </p>
      </div>
      <Slider {...settings} className="bg-[#333] p-[19px]">
        <div className="relative mr-[11px] h-[330px] !w-[243px] ">
          <div className="flex h-full w-full flex-col items-center justify-end">
            <Image
              unoptimized
              alt="scroll"
              className="absolute z-[-1] h-full w-full"
              src="/supper-mario-bros-2-bg.png"
              width={304}
              height={413}
            />
            <div className="absolute bottom-0 left-0 z-[-1] h-[138px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]"></div>
            <p className="mb-[6px] text-[20px] leading-[28px] text-white">
              SUPER MARIO BROS 2
            </p>
            <Button
              variant="secondary"
              className="mb-[15px] h-[38px] w-[157px]"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="relative mr-[11px] h-[330px] !w-[243px] ">
          <div className="flex h-full w-full flex-col items-center justify-end">
            <Image
              unoptimized
              alt="scroll"
              className="absolute z-[-1] h-full w-full"
              src="/out-run-bg.png"
              width={304}
              height={413}
            />
            <div className="absolute bottom-0 left-0 z-[-1] h-[138px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]"></div>
            <p className="mb-[6px] text-[20px] leading-[28px] text-white">
              OUT RUN
            </p>
            <Button
              variant="secondary"
              className="mb-[15px] h-[38px] w-[157px]"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="relative mr-[11px] h-[330px] !w-[243px] ">
          <div className="flex h-full w-full flex-col items-center justify-end">
            <Image
              unoptimized
              alt="scroll"
              className="absolute z-[-1] h-full w-full"
              src="/donkey-kong-bg.png"
              width={304}
              height={413}
            />
            <div className="absolute bottom-0 left-0 z-[-1] h-[138px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]"></div>
            <p className="mb-[6px] text-[20px] leading-[28px] text-white">
              DONKEY KONG
            </p>
            <Button
              variant="secondary"
              className="mb-[15px] h-[38px] w-[157px]"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="relative mr-[11px] h-[330px] !w-[243px] ">
          <div className="flex h-full w-full flex-col items-center justify-end">
            <Image
              unoptimized
              alt="scroll"
              className="absolute z-[-1] h-full w-full"
              src="/supper-mario-bros-v2-bg.png"
              width={304}
              height={413}
            />
            <div className="absolute bottom-0 left-0 z-[-1] h-[138px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.61)_47.92%,_#262626_100%)]"></div>
            <p className="mb-[6px] text-[20px] leading-[28px] text-white">
              OUT RUN VER 2.0
            </p>
            <Button
              variant="secondary"
              className="mb-[15px] h-[38px] w-[157px]"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </Slider>
    </section>
  );
};
