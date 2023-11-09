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
        `relative flex h-[621px] flex-col justify-end bg-join-the-world bg-cover bg-center text-center xl:h-[800px] xl:bg-join-the-world-pc`,
        className
      )}
      {...props}
    >
      <div className="absolute bottom-[-11px] left-0 h-[202px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_37.79%,_#262626_100%)] xl:h-[400px]"></div>
      <div className="absolute w-full px-[8px] py-[94px] md:px-[19px] lg:left-[50%] lg:top-[60%] lg:mx-auto lg:max-w-[733px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:p-0">
        <div className="mb-[20px] flex h-[69px] w-full items-center justify-center bg-bg-title-5 bg-contain bg-center bg-no-repeat text-[20px] font-bold leading-[28px] text-black xl:mb-[40px] xl:h-[136px] xl:w-[733px] xl:text-[40px] xl:leading-[48px]">
          JOIN THE WOLRD OF RETROCRAFT
        </div>
        <p className="mb-[16px] text-[16px] leading-[24px] xl:mb-[43px] xl:text-[20px] xl:uppercase xl:leading-[28px]">
          With new games, new updates, and new ways to play, join one of the
          biggest communities in gaming and start crafting today!
        </p>
        <Button
          variant="secondary"
          className="mx-auto h-[50px] w-[197px] xl:h-[57px] xl:w-[171px]"
        >
          JOIN NOW
        </Button>
      </div>
    </section>
  );
};
