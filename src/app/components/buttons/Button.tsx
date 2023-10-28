import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useMemo } from 'react';

import { mergeClasses } from '@/app/utils';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary';
}

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'primary':
        return '';

      default:
        return '';
    }
  }, [variant]);

  return (
    <button
      className={mergeClasses(
        'group relative z-0 flex h-auto w-auto items-center justify-center gap-[8px] bg-primary1/90 text-[14px] font-bold leading-[19px] text-white transition-all before:absolute before:left-[-4px] before:top-0 before:z-[-1] before:block before:h-full before:w-[calc(100%_+_8px)] before:bg-primary1/90 after:absolute after:left-0 after:top-[-4px]  after:z-[-2] after:block after:h-[calc(100%_+_4px)] after:w-full after:bg-primary3 hover:before:bg-primary3/60 active:before:bg-primary2 disabled:before:bg-grey-dark/60 disabled:after:bg-grey-dark lg:text-[18px]',
        variantClass,
        className
      )}
      {...props}
    >
      <span className="absolute bottom-[-4px] left-0 h-[4px] w-full bg-primary1/90 group-hover:bg-primary3/60 group-active:bg-primary2 group-disabled:bg-grey-dark/60"></span>
      {children}
    </button>
  );
};
