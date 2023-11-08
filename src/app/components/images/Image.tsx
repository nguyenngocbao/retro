import ImageNext, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

interface ImageProps extends NextImageProps {
  lgSrc?: string;
  xlSrc?: string;
}

export const Image: FC<ImageProps> = ({ src, alt, lgSrc, xlSrc, ...props }) => {
  const isReponsive = lgSrc || xlSrc;

  if (isReponsive) {
    if (typeof process !== undefined) {
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + xlSrc}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + lgSrc}
        />
        <ImageNext
          src={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + src}
          alt={alt}
          {...props}
        />
      </picture>;
    }
    return (
      <picture>
        <source media="(min-width: 1280px)" srcSet={xlSrc} />
        <source media="(min-width: 1024px)" srcSet={lgSrc} />
        <ImageNext src={src} alt={alt} {...props} />
      </picture>
    );
  }
  if (typeof process !== undefined) {
    return (
      <ImageNext
        src={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + src}
        alt={alt}
        {...props}
      />
    );
  }
  return <ImageNext src={src} alt={alt} {...props} />;
};
