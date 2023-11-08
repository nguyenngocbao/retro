import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';

import { Button } from './Button';

export const PlayNowButton = () => {
  return (
    <Button
      variant="secondary"
      className="relative mb-[30px] ml-[32px] h-[36px] w-[140px] md:mb-[unset] xl:ml-[47px] xl:h-[55px] xl:w-[241px] xl:text-[32px] xl:font-[500] xl:leading-[44px]"
    >
      <FourLeafsIcon className="absolute left-0 translate-x-[-69%] xl:h-[76px] xl:w-[76px]" />
      PLAY NOW
    </Button>
  );
};
