import { FC, HTMLAttributes } from 'react';

import { GamingControllerIcon } from '@/app/assets/icons/GamingController';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

export const JoinTheWorldSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(
        `h-[224px] bg-mb-join-the-world bg-cover bg-center p-[38px_16px] text-center lg:h-[418px] lg:bg-join-the-world lg:pt-[121px]`,
        className
      )}
      {...props}
    >
      <h3 className="mb-[16px] text-[16px] font-bold leading-[22px] lg:mb-[24px] lg:text-[40px] lg:leading-[54px]">
        JOIN THE WOLRD OF RETROCRAFT
      </h3>
      <p className="mb-[16px] text-[12px] font-[600] leading-[16px] lg:mb-[24px] lg:text-[18px] lg:leading-[25px]">
        With new games, new updates, and new ways to play, join one of the
        biggest communities in gaming and start crafting today!
      </p>
      <Button
        variant="primary"
        className="mx-auto h-[43px] w-[135px] gap-[8px] lg:h-[57px] lg:w-[171px]"
      >
        <GamingControllerIcon className="w-[16px] lg:w-[22px]" /> PLAY NOW
      </Button>
    </section>
  );
};
