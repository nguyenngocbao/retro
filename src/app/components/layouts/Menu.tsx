'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, HTMLAttributes, useState } from 'react';

import { CloseIcon } from '@/app/assets/icons/Close';
import { MenuArrowDownIcon } from '@/app/assets/icons/MenuArrowDown';
import { HEADER_MENU_OPTIONS } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState([]);
  const PREVIOUS_OPTIONS = HEADER_MENU_OPTIONS.slice(
    0,
    HEADER_MENU_OPTIONS.length - 1
  );
  const CONNECT_OPTION = HEADER_MENU_OPTIONS[HEADER_MENU_OPTIONS.length - 1];

  const isActive = href => {
    return href === pathname;
  };

  return (
    <section
      className={mergeClasses(
        'fixed top-0 z-40 flex h-screen w-[287px] flex-col items-end bg-black p-[60px_23px] font-bold leading-[28px] text-white transition-all lg:static lg:z-auto lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:p-[unset] lg:pt-[unset] 2xl:text-[20px]',
        isOpen ? 'right-0' : 'right-[-100%]'
      )}
    >
      {isOpen}
      <Button
        onClick={() => onClose()}
        variant="primary"
        className="absolute left-[18px] h-[28px] w-[28px] lg:hidden"
      >
        <CloseIcon />
      </Button>
      <Image
        width={136}
        className="h-[48px] w-[98px] lg:hidden lg:h-[32px] lg:w-[338px]"
        height={66}
        src="/retrocraft.svg"
        alt="retro-game"
        unoptimized
      />
      <div className="mb-[23px] mt-[29px] h-[1px] w-full bg-white lg:hidden"></div>
      <ul className="h-full w-full text-right lg:flex lg:h-[50px] lg:w-auto lg:items-center lg:justify-end lg:gap-[27px] lg:border lg:border-secondary lg:pl-[48px] 2xl:h-[66px]">
        {PREVIOUS_OPTIONS.map((menu, i) => {
          const hasChildren = menu?.children?.length > 0;
          const Element: any = hasChildren ? 'button' : Link;
          const currentHref = String(menu.value);

          return (
            <li
              key={menu.label}
              className={mergeClasses(
                'lg:h-full',
                isActive(currentHref) && 'text-primary3'
              )}
            >
              <Element
                className="flex h-[52px] w-full items-center justify-end gap-[6px] px-[16px] lg:h-full "
                href={currentHref}
                onClick={e => {
                  if (currentHref.includes('/#')) {
                    document
                      .getElementById(currentHref.split('#')[1])
                      .scrollIntoView({
                        behavior: 'smooth'
                      });
                    e.preventDefault();
                  }

                  setOpen(pre => {
                    pre[i] = !pre[i];
                    return [...pre];
                  });
                }}
              >
                <span>{menu.label}</span>
                {hasChildren && <MenuArrowDownIcon />}
              </Element>
              <ul
                className={mergeClasses(
                  'max-h-0 overflow-hidden transition-all lg:group-hover:block lg:group-hover:max-h-[200px]',
                  open[i] && 'max-h-[200px] lg:max-h-0'
                )}
              >
                {menu?.children?.map(child => {
                  return (
                    <li
                      key={menu.label}
                      className={mergeClasses(
                        'bg-bg2 h-[52px] w-full lg:h-full lg:flex-[1] lg:justify-end',
                        isActive(child.value) && 'text-primary3'
                      )}
                    >
                      <Link
                        className="flex h-[43px] w-full items-center gap-[6px] px-[20px] lg:px-[16px]"
                        href={String(child.value)}
                        target={child.blank ? '_blank' : ''}
                        rel={child.blank ? 'noreferrer' : ''}
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}

        <li
          className={mergeClasses(
            'mt-[12px] h-[52px] bg-secondary text-black lg:ml-[12px] lg:mt-[unset] lg:h-full lg:w-[196px]',
            isActive(CONNECT_OPTION.value) && 'text-primary3'
          )}
        >
          <Link
            className="flex h-full w-full items-center justify-center"
            href={String(CONNECT_OPTION.value)}
          >
            {CONNECT_OPTION.label}
          </Link>
        </li>
      </ul>
    </section>
  );
};
