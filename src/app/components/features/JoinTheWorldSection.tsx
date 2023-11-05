import { FC, HTMLAttributes } from 'react';

import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

export const JoinTheWorldSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(
        `relative flex h-[621px] flex-col justify-end bg-bg5 bg-cover bg-center text-center lg:h-[418px] lg:pt-[121px]`,
        className
      )}
      {...props}
    >
      <div className="absolute bottom-[-11px] left-0 h-[202px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_37.79%,_#262626_100%)]"></div>
      <div className="absolute px-[8px] py-[94px]">
        <div className="mb-[20px] flex h-[69px] w-full items-center justify-center bg-bg-title-5 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black">
          JOIN THE WOLRD OF RETROCRAFT
        </div>
        <p className="mb-[16px] text-[16px] leading-[24px] lg:mb-[24px] lg:text-[18px] lg:leading-[25px]">
          With new games, new updates, and new ways to play, join one of the
          biggest communities in gaming and start crafting today!
        </p>
        <Button
          variant="secondary"
          className="mx-auto h-[50px] w-[197px] lg:h-[57px] lg:w-[171px]"
        >
          JOIN NOW
        </Button>
      </div>
    </section>
  );
};
