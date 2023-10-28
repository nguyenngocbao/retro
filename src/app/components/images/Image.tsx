import ImageNext, { ImageProps } from 'next/image';
import { FC } from 'react';

// interface ImageProps
//   extends DetailedHTMLProps<
//     ImgHTMLAttributes<HTMLImageElement>,
//     HTMLImageElement
//   > {
//   unoptimized?: boolean;
// }

export const Image: FC<ImageProps> = ({ src, alt, ...props }) => {
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
