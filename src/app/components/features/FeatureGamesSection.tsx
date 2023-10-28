import { FC, HTMLAttributes } from 'react';

import { ShortRightArrowIcon } from '@/app/assets/icons/ShortRightArrow';
import { FEATURE_GAMES } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

export const FeatureGamesSections: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(
        `flex flex-col items-center gap-[16px] bg-mb-feature-games p-[64px_16px] lg:flex-row lg:p-[108px_70px_152px_70px]`,
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        src="/three-characters.png"
        width={425}
        height={439}
        alt="feature-games"
        className="w-[280px] lg:w-[425px] lg:shrink-0"
      />
      <div className="w-full p-[4px] lg:overflow-x-auto lg:overflow-y-clip">
        <h3 className="mb-[18px] text-[18px] font-bold leading-[25px] lg:mb-[40px] lg:text-[36px] lg:leading-[49px]">
          FEATURED GAMES
        </h3>
        <div className="no-scrollbar mb-[18px] snap-x snap-mandatory overflow-x-scroll lg:mb-[40px] ">
          <div className="flex w-max gap-[16px] xl:w-full">
            {FEATURE_GAMES.map(game => (
              <article
                key={game.name}
                className="flex w-[270px] snap-start flex-col lg:flex-[1]"
              >
                <Image
                  unoptimized
                  src={game.image}
                  width={270}
                  height={240}
                  alt={game.name}
                  className="mb-[16px] h-[240px] lg:mb-[20px] lg:w-full"
                />
                <h3 className="mb-[8px] text-[16px] font-[600] leading-[22px] lg:text-[18px] lg:leading-[25px]">
                  {game.name}
                </h3>
                <p className="text-[12px] font-[500] leading-[16px] lg:line-clamp-2 lg:text-[16px] lg:leading-[22px]">
                  {game.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
        <Button
          variant="primary"
          className="h-[43px] w-[215px] lg:h-[57px] lg:w-[264px]"
        >
          MORE COMING SOON
          <ShortRightArrowIcon className="h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]" />
        </Button>
      </div>
    </section>
  );
};
