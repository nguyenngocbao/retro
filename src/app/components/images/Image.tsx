import ImageNext, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

interface ImageProps extends NextImageProps {
  mdSrc?: string;
  lgSrc?: string;
  xlSrc?: string;
}

export const Image: FC<ImageProps> = ({
  src,
  alt,
  mdSrc,
  lgSrc,
  xlSrc,
  ...props
}) => {
  const isReponsive = lgSrc || xlSrc || mdSrc;

  if (isReponsive) {
    if (typeof process !== undefined) {
      return (
        <picture>
          {xlSrc && (
            <source
              media="(min-width: 1280px)"
              srcSet={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + xlSrc}
            />
          )}
          {lgSrc && (
            <source
              media="(min-width: 1024px)"
              srcSet={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + lgSrc}
            />
          )}

          {mdSrc && (
            <source
              media="(min-width: 	768px)"
              srcSet={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + mdSrc}
            />
          )}

          <ImageNext
            src={(process?.env?.NEXT_PUBLIC_ROOT_PATH ?? '') + src}
            alt={alt}
            {...props}
          />
        </picture>
      );
    }
    return (
      <picture>
        <source media="(min-width: 1280px)" srcSet={xlSrc} />
        <source media="(min-width: 1024px)" srcSet={lgSrc} />
        <source media="(min-width: 768px)" srcSet={mdSrc} />
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
