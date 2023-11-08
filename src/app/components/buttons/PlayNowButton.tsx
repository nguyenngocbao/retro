import { FourLeafsIcon } from '@/app/assets/icons/FourLeafs';

import { Button } from './Button';

export const PlayNowButton = () => {
  return (
    <Button
      variant="secondary"
      className="relative mb-[30px] ml-[32px] h-[36px] w-[140px] lg:h-[55px] lg:w-[241px] lg:text-[32px] lg:font-[500] lg:leading-[44px]"
    >
      <FourLeafsIcon className="absolute left-0 translate-x-[-69%] lg:h-[76px] lg:w-[76px]" />
      PLAY NOW
    </Button>
  );
};
