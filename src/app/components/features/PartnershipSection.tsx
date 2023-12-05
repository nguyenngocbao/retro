import { PARTNERSHIP } from '@/app/constant';

import { Image } from '../images/Image';

export const PartnershipSection = () => {
  return (
    <section className="relative mt-[130px] flex flex-col items-center justify-center gap-[39px] px-[19px] md:mt-[100px] 2xl:mt-[250px] 2xl:gap-[78px]">
      <div className="absolute bottom-[1px] left-0 z-10 h-[241px] w-full translate-y-[100%] bg-[linear-gradient(360deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_37.79%,_#262626_100%)] 2xl:h-[250px] 2xl:bg-[linear-gradient(360deg,_rgba(38,_38,_38,_0.00)_0%,_rgba(38,_38,_38,_0.87)_52.08%,_#262626_100%)]"></div>
      <div className="flex h-[69px] w-[263px] items-center justify-center bg-bg-title-2 bg-contain bg-no-repeat text-[20px] font-bold leading-[28px] text-black 2xl:ml-[unset] 2xl:h-[135px] 2xl:w-[512px] 2xl:text-[40px] 2xl:leading-[48px]">
        {PARTNERSHIP.title}
      </div>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-[30px] 2xl:gap-[40px]">
        {PARTNERSHIP.members.map(mem => {
          return (
            <div
              key={mem.name}
              className="flex gap-[10px] text-[20px] font-bold leading-[24px] 2xl:gap-[19px] 2xl:text-[40px] 2xl:leading-[42px]"
            >
              <Image
                unoptimized
                alt={mem.name}
                className="h-[70px] object-contain 2xl:h-[100px]"
                src={mem.logo}
                width={525}
                height={525}
                priority
              />
              <span className="shrink-0 uppercase">{mem.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
