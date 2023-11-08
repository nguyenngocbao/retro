import { FC, HTMLAttributes } from 'react';

import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { PlayNowButton } from '../buttons/PlayNowButton';
import { Image } from '../images/Image';

interface GameExporeProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string;
  imageAlt: string;
  titleIcon: any;
  name: string;
  desc: string;
}

export const GameExpore: FC<GameExporeProps> = ({
  imagePath,
  imageAlt,
  titleIcon: Icon,
  className,
  name,
  desc,
  ...props
}) => {
  return (
    <div
      className={mergeClasses(
        'flex flex-col justify-center gap-[27px] md:flex-row md:items-center md:justify-between md:gap-[50px] xl:gap-[132px]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt={imageAlt}
        className="mx-auto h-[320px] w-[320px] lg:h-[418px] lg:w-[418px] xl:h-[517px] xl:w-[517px]"
        src={imagePath}
        width={517}
        height={517}
      />
      <div>
        <Button
          variant="secondary"
          className="mb-[16px] h-[41px] w-max gap-[10px] px-[10px] lg:mb-[26px] lg:h-[74px] lg:gap-[27px] lg:pl-[19px] lg:pr-[28px]"
        >
          <Icon className="lg:h-[58px] lg:w-[58px]" />
          <span className="uppercase lg:text-[36px] lg:leading-[50px]">
            {name}
          </span>
        </Button>
        <p className="mb-[12px] text-[16px] leading-[22px] text-white lg:mb-[17px] lg:text-[20px] lg:uppercase lg:leading-[28px]">
          {desc}
        </p>
        <div className="mb-[19px] flex max-w-[334px] justify-between gap-[34px] lg:mb-[28px]">
          <div className="flex items-center gap-[7px]">
            <p className="text-[48px] font-bold leading-[48px] lg:text-[72px] lg:leading-[72px]">
              100
            </p>
            <p className="w-[61px] text-[16px] leading-[24px] lg:w-[78px] lg:text-[20px] lg:leading-[28px]">
              LEVEL TO PLAY
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <p className="text-[48px] font-bold leading-[48px] lg:text-[72px] lg:leading-[72px]">
              20
            </p>
            <p className="w-[62px] text-[16px] leading-[24px] lg:w-[78px] lg:text-[20px] lg:leading-[28px]">
              BOSS TO BEAT
            </p>
          </div>
        </div>
        <PlayNowButton />
      </div>
    </div>
  );
};
