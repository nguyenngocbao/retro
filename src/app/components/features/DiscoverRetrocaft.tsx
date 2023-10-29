'use client';

import { FC, HTMLAttributes } from 'react';

import { mergeClasses } from '@/app/utils';

import { Image } from '../images/Image';

export const DiscoverRetrocaft: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      id="discover-retrocaft"
      className={mergeClasses('p-[16px] lg:p-[24px_135px]', className)}
      {...props}
    >
      <h2 className="mb-[12px] text-center text-[18px] font-bold leading-[25px] lg:mb-[40px] lg:text-[36px] lg:leading-[49px]">
        DISCOVER RETROCRAFT
      </h2>
      <div className="flex flex-col justify-center gap-[30px] xl:flex-row xl:gap-[70px]">
        <div className="2xl:max-w-[467px]">
          <h3 className="mb-[12px] text-left text-[16px] font-bold leading-[22px] lg:mb-[16px] lg:text-[28px] lg:leading-[38px]">
            STORY
          </h3>
          <p className="mb-[24px] text-[12px] font-[500] leading-[16px] lg:mb-[0] lg:text-[18px] lg:leading-[25px]">
            Mario has a dream of a staircase leading to a mysterious door to a
            mysterious place. A voice identifies the world as the dreamland of
            Subcon, and asks for Mario&apos;s help in defeating the villainous
            frog named Wart, a tyrant who has cursed Subcon and its people.
            Mario suddenly awakes and decides to tell Luigi, Toad, and Princess
            Toadstool, who all report experiencing the same dream. The group
            goes on a picnic, but discovers a cave with a long staircase.
            Through a door at the top, they are transported to Subcon, revealing
            their dreams to have been real. After defeating Wart, the people of
            Subcon are freed and everyone celebrates. Mario suddenly awakes in
            his bed, unsure if these events were a dream. He soon goes back to
            sleep.
          </p>
        </div>
        <Image
          unoptimized
          alt="story of mario"
          className="w-full xl:w-[600px]"
          src="/story-bg.png"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};
