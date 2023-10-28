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
      <div className="flex flex-col gap-[24px] bg-bg2 p-[40px_16px] lg:flex-row lg:justify-between lg:p-[28px_135px]">
        <picture className="lg:p-[16px]">
          <source
            media="(min-width: 1024px)"
            srcSet={
              (process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') +
              '/white-retrocraft.png'
            }
          />
          <Image
            width={254}
            height={24}
            src="/retrocraft.png"
            alt="retro-game"
            className="h-[24px] w-[254px]"
            unoptimized
          />
        </picture>
        <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[86px]">
          {PREVIOUS_OPTIONS.map((item, i) => {
            return (
              <div key={i}>
                <Link
                  href={String(item.value)}
                  className="mb-[12px] block text-[18px] font-[700] lg:mb-[16px]"
                >
                  {item.label}
                </Link>
                <ul className="flex flex-col gap-[4px]">
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
              className="mb-[12px] block text-[18px] font-[700] leading-[25px]"
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
      <div className="h-[35px] py-[8px] text-center lg:h-[55px]">
        <p className="flex items-center justify-center gap-[4px] text-[14px] font-[600] lg:text-[16px]">
          <CCircleIcon />
          <span>2023 by RETROCRAFT. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};
