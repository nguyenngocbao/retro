import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';

import { Button } from './Button';

export const PlayNowButton = () => {
  return (
    <Button
      variant="secondary"
      className="relative mb-[30px] ml-[32px] h-[36px] w-[140px] md:mb-[unset] 2xl:ml-[47px] 2xl:h-[55px] 2xl:w-[241px] 2xl:text-[32px] 2xl:font-[500] 2xl:leading-[44px]"
    >
      <FourLeafsIcon className="absolute left-0 translate-x-[-69%] 2xl:h-[76px] 2xl:w-[76px]" />
      PLAY NOW
    </Button>
  );
};
