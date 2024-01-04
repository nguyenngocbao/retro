//import Link from 'next/link';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

//import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';
import { mergeClasses } from '@/app/utils';

//import { Button } from '../buttons/Button';
import { Image } from '../images/Image';

interface NftMintingProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string;
  imageAlt: string;
  titleIcon: any;
  name: string;
  desc: string;
  levelToPlay: string;
  levelToPlayContent: string;
  buttonName: string;
  buttonLink?: string;
  childrenClassName1?: string;
  childrenClassName2?: string;
}

export const NftMinting: FC<NftMintingProps> = ({
  imagePath,
  imageAlt,
  titleIcon: Icon,
  className,
  name,
  desc,
  levelToPlay,
  levelToPlayContent,
  //buttonName,
  //buttonLink,
  childrenClassName1,
  childrenClassName2,
  ...props
}) => {
  return (
    <div
      className={mergeClasses(
        'flex flex-col justify-center gap-[27px] md:flex-row md:items-center md:justify-between md:gap-[50px] 2xl:gap-[132px]',
        className
      )}
      {...props}
    >
      <Image
        unoptimized
        alt={imageAlt}
        className={mergeClasses(
          'mx-auto h-[320px] w-[320px] object-contain xl:w-[418px] 2xl:h-[517px] 2xl:w-[517px]',
          childrenClassName1
        )}
        src={imagePath}
        width={517}
        height={517}
      />
      <div className={mergeClasses('', childrenClassName2)}>
        <div className="flex gap-1 md:gap-4">
          <div className="mb-[16px] flex h-[41px] w-max items-center justify-center gap-[10px] bg-secondary px-[10px] text-[18px] font-bold leading-[28px] text-black 2xl:mb-[26px] 2xl:h-[74px] 2xl:gap-[27px] 2xl:pl-[19px] 2xl:pr-[28px]">
            <Icon className="h-[19px] w-[19px] 2xl:h-[58px] 2xl:w-[58px]" />
            <span className="uppercase 2xl:text-[36px] 2xl:leading-[50px]">
              {name}
            </span>
          </div>
          <Link
            href={'https://myria-nft.retrocraft.io/'}
            className="boder-secondary mb-[16px] flex h-[41px] w-max items-center justify-center gap-[10px] px-[10px] text-[20px]  font-bold leading-[28px] text-secondary hover:bg-secondary hover:text-black  2xl:mb-[26px] 2xl:h-[74px] 2xl:gap-[27px] 2xl:pl-[19px] 2xl:pr-[28px] "
          >
            <span className="uppercase group-hover:text-black 2xl:text-[36px] 2xl:leading-[50px]">
              {'Mint Now >>>'}
            </span>
          </Link>
        </div>
        <p className="mb-[12px] text-[16px] leading-[22px] text-white 2xl:mb-[17px] 2xl:text-[20px] 2xl:uppercase 2xl:leading-[28px]">
          {desc}
        </p>
        <div className="mb-[19px] flex max-w-[334px] justify-between gap-[34px] 2xl:mb-[28px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[48px] font-bold leading-[48px] 2xl:text-[72px] 2xl:leading-[72px]">
              {levelToPlay}
            </p>
            <p className="w-[61px] text-[20px] leading-[20px] 2xl:w-[78px] 2xl:text-[28px] 2xl:leading-[30px]">
              {levelToPlayContent}
            </p>
          </div>
          {/* <div className="flex items-center gap-[7px]">
            <p className="text-[48px] font-bold leading-[48px] 2xl:text-[72px] 2xl:leading-[72px]">
              {bossToBeat}
            </p>
            <p className="w-[62px] text-[16px] leading-[24px] 2xl:w-[78px] 2xl:text-[20px] 2xl:leading-[28px]">
              BOSS TO BEAT
            </p>
          </div> */}
        </div>
        {/* <Link href={buttonLink}>
          <Button
            variant="secondary"
            className="group relative mb-[30px] ml-[32px] h-[36px] w-[140px] hover:shadow-gr md:mb-[unset] 2xl:ml-[47px] 2xl:h-[55px] 2xl:w-[241px] 2xl:text-[32px] 2xl:font-[500] 2xl:leading-[44px]"
          >
            <FourLeafsIcon className="absolute left-0 translate-x-[-69%] transition-all group-hover:rotate-90 2xl:h-[76px] 2xl:w-[76px]" />
            {buttonName}
          </Button>
        </Link> */}
      </div>
    </div>
  );
};
