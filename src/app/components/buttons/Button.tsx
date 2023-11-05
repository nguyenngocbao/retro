import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useMemo } from 'react';

import { mergeClasses } from '@/app/utils';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'secondary';
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
      case 'secondary':
        return 'bg-secondary text-black';
      default:
        return '';
    }
  }, [variant]);

  return (
    <button
      className={mergeClasses(
        'flex items-center justify-center text-[20px] font-bold leading-[28px]',
        variantClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
