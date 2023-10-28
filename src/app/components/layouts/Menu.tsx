import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, HTMLAttributes, useState } from 'react';

import { MenuArrowDownIcon } from '@/app/assets/icons/MenuArrowDown';
import { HEADER_MENU_OPTIONS } from '@/app/constant';
import { mergeClasses } from '@/app/utils';

import { Button } from '../buttons/Button';

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen }) => {
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
    <ul
      className={mergeClasses(
        'fixed z-40 flex w-full flex-col bg-bg1 pt-[24px] text-[14px] font-bold text-white transition-all lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:pt-[unset]',
        isOpen
          ? 'h-[calc(100vh_-_60px)] max-h-[calc(100vh_-_60px)]'
          : 'h-0  max-h-0 overflow-hidden pt-0 lg:h-auto lg:max-h-[unset] lg:overflow-visible lg:pt-0'
      )}
    >
      {PREVIOUS_OPTIONS.map((menu, i) => {
        const hasChildren = menu?.children?.length > 0;
        const Element: any = hasChildren ? 'button' : Link;

        return (
          <li
            key={menu.label}
            className={mergeClasses(
              'group w-full overflow-y-hidden border-t-[0.5px] border-t-grey-dark transition-all first:border-t-0 lg:relative lg:max-h-[43px] lg:flex-[1] lg:justify-end lg:overflow-visible lg:border-none',
              isActive(menu.value) && 'text-primary3'
            )}
          >
            <Element
              className="flex h-[43px] w-full items-center gap-[6px] px-[16px] "
              href={String(menu.value)}
              onClick={() =>
                setOpen(pre => {
                  pre[i] = !pre[i];
                  return [...pre];
                })
              }
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
                      'h-[43px] w-full bg-bg2  lg:flex-[1] lg:justify-end',
                      isActive(child.value) && 'text-primary3'
                    )}
                  >
                    <Link
                      className="flex h-[43px] w-full items-center gap-[6px] px-[20px] lg:px-[16px]"
                      href={String(child.value)}
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
          'h-[43px] w-full border-t-[0.5px] border-t-grey-dark first:border-t-0 lg:hidden lg:flex-[1] lg:justify-end lg:border-none',
          isActive(CONNECT_OPTION.value) && 'text-primary3'
        )}
      >
        <Link
          className="flex h-full w-full items-center px-[16px]"
          href={String(CONNECT_OPTION.value)}
        >
          {CONNECT_OPTION.label}
        </Link>
      </li>

      <li
        className={mergeClasses(
          'hidden h-[43px] w-full border-t-[0.5px] border-t-grey-dark first:border-t-0 lg:block lg:flex-[1] lg:justify-end lg:border-none',
          isActive(CONNECT_OPTION.value) && 'text-primary3'
        )}
      >
        <Link
          className=" flex h-full w-full items-center px-[16px]"
          href={String(CONNECT_OPTION.value)}
        >
          <Button variant="primary" className="h-[41px] w-[131px]">
            {CONNECT_OPTION.label}
          </Button>
        </Link>
      </li>
    </ul>
  );
};
