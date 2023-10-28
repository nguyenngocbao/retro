/* eslint-disable jsx-a11y/media-has-caption */
'use client';

import { FC, HTMLAttributes, useEffect, useRef } from 'react';

import { GamingControllerIcon } from '@/app/assets/icons/GamingController';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

export const WelcomeBanner: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);

    return () => videoRef.current.stop();
  }, []);

  return (
    <section
      className={mergeClasses(
        `relative h-[211px] bg-cover bg-right bg-no-repeat p-[16px] lg:h-[calc(100vh_-_97px)] lg:p-[156px_160px]`,
        className
      )}
      {...props}
    >
      <video
        ref={videoRef}
        src={
          (process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + '/trailler.mp4#t=0.1'
        }
        className="absolute left-0 top-0 h-full w-full object-fill"
        loop
        autoPlay
        muted
      />
      <div className="absolute left-0 top-0 h-full w-full bg-bg2/30"></div>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-full lg:h-fit lg:w-fit lg:max-w-[534px]">
          <h1 className="text-[18px] font-bold leading-[25px] lg:text-[36px] lg:leading-[49px]">
            WELCOME TO
          </h1>
          <h2 className="mb-[12px] text-[28px] font-bold leading-[38px] lg:mb-[24px] lg:text-[64px] lg:leading-[87px]">
            RETROCRAFT
          </h2>
          <p className="mb-[12px] text-[12px] font-[600] leading-[16px] lg:mb-[24px] lg:text-[18px] lg:leading-[25px]">
            With new games, new updates, and new ways to play, join one of the
            biggest communities in gaming and start crafting today!
          </p>
          <Button
            variant="primary"
            className="h-[43px] w-[135px] lg:h-[57px] lg:w-[171px]"
          >
            <GamingControllerIcon className="w-[16px] lg:w-[22px]" />
            PLAY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};
