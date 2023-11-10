import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

import { JOIN_THE_WORLD } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

export const JoinTheWorldSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={mergeClasses(
        `relative flex h-[621px] flex-col justify-end bg-join-the-world bg-cover bg-center text-center lg:bg-join-the-world-pc xl:h-[521px] 2xl:h-[800px]`,
        className
      )}
      {...props}
    >
      <div className="absolute bottom-[-11px] left-0 h-[202px] w-full bg-[linear-gradient(180deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_37.79%,_#262626_100%)] 2xl:h-[400px]"></div>
      <div className="absolute w-full px-[8px] py-[94px] md:px-[19px] lg:left-[50%] lg:top-[60%] lg:mx-auto lg:max-w-[733px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:p-0">
        <div className="hidden-ani-from-bot mb-[20px] flex h-[69px] w-full items-center justify-center bg-bg-title-5 bg-contain bg-center bg-no-repeat text-[20px] font-bold leading-[28px] text-black 2xl:mb-[40px] 2xl:h-[136px] 2xl:w-[733px] 2xl:text-[40px] 2xl:leading-[48px]">
          {JOIN_THE_WORLD.title}
        </div>
        <p className="hidden-ani-from-bot mb-[16px] text-[16px] leading-[24px] 2xl:mb-[43px] 2xl:text-[20px] 2xl:uppercase 2xl:leading-[28px]">
          {JOIN_THE_WORLD.description}
        </p>
        <Link
          className="hidden-ani-from-bot inline-flex"
          href={JOIN_THE_WORLD.joinNowLink}
        >
          <Button
            variant="secondary"
            className="mx-auto h-[50px] w-[197px] 2xl:h-[57px] 2xl:w-[171px]"
          >
            JOIN NOW
          </Button>
        </Link>
      </div>
    </section>
  );
};
