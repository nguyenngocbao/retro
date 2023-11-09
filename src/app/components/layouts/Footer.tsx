import Link from 'next/link';

import { CCircleIcon } from '@/app/assets/icons/CCircle';
import { FOOTER_MENU_OPTIONS } from '@/app/constant';

import { Image } from '../images/Image';

export const Footer = () => {
  const PREVIOUS_OPTIONS = FOOTER_MENU_OPTIONS.slice(
    0,
    FOOTER_MENU_OPTIONS.length - 1
  );
  const CONTACT_US = FOOTER_MENU_OPTIONS[FOOTER_MENU_OPTIONS.length - 1];

  return (
    <footer>
      <div className="relative mx-auto flex max-w-[calc(100%_-_38px)] flex-col gap-[24px] pb-[41px] pt-[92px] lg:max-w-[calc(100%_-_72px)] lg:flex-row lg:justify-between lg:pb-[59px] lg:pt-0 2xl:max-w-[1227px]">
        <Image
          width={136}
          height={66}
          src="/retrocraft.svg"
          alt="retro-game"
          className="absolute left-[50%] top-0 h-[66px] w-[136px] translate-x-[-50%] translate-y-[-50%] lg:static lg:mt-[5px] lg:h-fit lg:w-[100px]  lg:translate-x-0 lg:translate-y-0 2xl:h-[68px] 2xl:w-[136px]"
          unoptimized
        />
        <div className="flex flex-wrap gap-x-[33px] gap-y-[20px] lg:flex-row lg:gap-[86px]">
          {PREVIOUS_OPTIONS.map((item, i) => {
            return (
              <div key={i}>
                <Link
                  href={String(item.value)}
                  className="mb-[16px] block text-[16px] leading-[22px] lg:mb-[16px] lg:text-[20px] lg:leading-[28px]"
                >
                  {item.label}
                </Link>
                <ul className="flex flex-col gap-[4px]  text-[16px] leading-[22px]">
                  {item.children.map((childItem, i) => (
                    <li key={i}>
                      <Link
                        className="h-[38px] text-[16px] font-[500] leading-[38px]"
                        href={String(childItem.value)}
                      >
                        {childItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div>
            <Link
              href={String(CONTACT_US.value)}
              className="mb-[16px] block text-[20px] font-[700] leading-[28px]"
            >
              {CONTACT_US.label}
            </Link>
            <ul className="flex gap-[16px]">
              {CONTACT_US.children.map((childItem, i) => (
                <li key={i}>
                  <a
                    className="h-[38px] text-[16px] font-[500] leading-[38px]"
                    href={String(childItem.value)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      unoptimized
                      width={44}
                      height={44}
                      src={childItem.image}
                      alt={childItem.label}
                      className="h-[44px] w-[44px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="flex h-[54px] items-center justify-center gap-[4px] bg-secondary text-center text-[16px] font-[600] leading-[22px] text-black 2xl:h-[55px] 2xl:text-[16px]">
        <CCircleIcon />
        <span>2023 by RETROCRAFT. All Rights Reserved.</span>
      </p>
    </footer>
  );
};
