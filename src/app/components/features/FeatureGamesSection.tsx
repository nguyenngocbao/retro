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
  slidesToScroll: 4,
  variableWidth: true
};

export const FeatureGamesSections: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(`relative h-[689px] xl:h-[913px]`, className)}
      {...props}
    >
      <Image
        unoptimized
        alt="scroll"
        className="absolute top-0 z-[1] h-[calc(100%_+_70px)] w-full object-fill object-top md:h-[calc(100%_+_30px)] xl:h-[1043px]"
        src="/bg-feature-game.svg"
        xlSrc="/bg-feature-game-pc.svg"
        width={390}
        height={750}
      />
      <div className="absolute left-[50%] top-[50%] z-[2] h-full w-full max-w-[calc(100%_-_38px)] translate-x-[-50%] translate-y-[-50%] lg:max-w-[calc(100%_-_300px)] xl:h-auto xl:max-w-[1227px]">
        <div className="flex flex-col items-center justify-center gap-[19px] pb-[29px] pt-[56px] xl:pb-[32px]">
          <div className="flex h-[62px] w-[234px] items-center justify-center bg-bg-title-4 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-secondary lg:h-[69px] lg:w-[263px] xl:h-[135px] xl:w-[512px] xl:text-[40px] xl:leading-[48px]">
            FEATURED GAMES
          </div>
          <p className="text-center text-[16px] leading-[24px] text-black xl:max-w-[844px] xl:text-[20px] xl:uppercase xl:leading-[28px]">
            Immerse yourself in the Cyberpunk universe, from the original
            storyline of Cyberpunk 2077 and its gripping spy-thriller expansion
            Phantom Liberty to the award-winning anime series Cyberpunk:
            Edgerunners — there are countless stories to discover in the deadly
            megalopolis of Night City.
          </p>
        </div>
        <Slider
          {...settings}
          className="mx-[-19px] bg-[#333] p-[19px] xl:mx-[unset] xl:p-[12px]"
        >
          <div className="relative mr-[11px] h-[330px] !w-[243px] xl:mr-[14px] xl:h-[413px] xl:!w-[291px]">
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
          <div className="relative mr-[11px] h-[330px] !w-[243px] xl:mr-[14px] xl:h-[413px] xl:!w-[291px]">
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
          <div className="relative mr-[11px] h-[330px] !w-[243px] xl:mr-[14px] xl:h-[413px] xl:!w-[291px]">
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
          <div className="relative mr-[11px] h-[330px] !w-[243px] xl:mr-[14px] xl:h-[413px] xl:!w-[291px]">
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
      </div>
    </section>
  );
};
