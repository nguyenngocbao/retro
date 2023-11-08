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
        className="mx-auto h-[320px] w-[320px] object-contain xl:h-[418px] xl:w-[418px] 2xl:h-[517px] 2xl:w-[517px]"
        src={imagePath}
        width={517}
        height={517}
      />
      <div>
        <Button
          variant="secondary"
          className="mb-[16px] h-[41px] w-max gap-[10px] px-[10px] xl:mb-[26px] xl:h-[74px] xl:gap-[27px] xl:pl-[19px] xl:pr-[28px]"
        >
          <Icon className="h-[19px] w-[19px] xl:h-[58px] xl:w-[58px]" />
          <span className="uppercase xl:text-[36px] xl:leading-[50px]">
            {name}
          </span>
        </Button>
        <p className="mb-[12px] text-[16px] leading-[22px] text-white xl:mb-[17px] xl:text-[20px] xl:uppercase xl:leading-[28px]">
          {desc}
        </p>
        <div className="mb-[19px] flex max-w-[334px] justify-between gap-[34px] xl:mb-[28px]">
          <div className="flex items-center gap-[7px]">
            <p className="text-[48px] font-bold leading-[48px] xl:text-[72px] xl:leading-[72px]">
              100
            </p>
            <p className="w-[61px] text-[16px] leading-[24px] xl:w-[78px] xl:text-[20px] xl:leading-[28px]">
              LEVEL TO PLAY
            </p>
          </div>
          <div className="flex items-center gap-[7px]">
            <p className="text-[48px] font-bold leading-[48px] xl:text-[72px] xl:leading-[72px]">
              20
            </p>
            <p className="w-[62px] text-[16px] leading-[24px] xl:w-[78px] xl:text-[20px] xl:leading-[28px]">
              BOSS TO BEAT
            </p>
          </div>
        </div>
        <PlayNowButton />
      </div>
    </div>
  );
};
