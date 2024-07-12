import Image from "next/image";
import { FC } from "react";

export const Modal2: FC = () => {
  return (
    <div className="font-sans font-medium w-[339px] md:w-[640px]">
      <div className="relative rounded-t h-[181px] md:h-[244px] w-full bg-sharewell-blue lg:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <div className="absolute left-[48px] top-[48px] md:top-[65px] gap-[10px] flex flex-col justify-center items-start self-stretch">
          <h2 className="text-[18px]/[140%] md:text-[32px]/[140%] w-[396px]">
            Modal 2
          </h2>
          <p className="text-[14px]/[140%]">Lorem Ipsum is fun</p>
          <div className="text-[14px]/[140%] md:text-[16px]/[140%]">
            <p>Friday, Jun 04, 2023</p>
            <p>09:00pm - 09:30pm PST</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[158px] h-[115px] md:w-[345px] md:h-[251px]">
          <Image
            src="/logo.svg"
            alt="Sharewell Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="h-[70px] w-full bg-white px-[24px] pt-[24px] gap-[10px] items-start self-stretch">
        <p className="text-sharewell-charcoal text-[14px]/[140%]">
          Lorem Ipsum
        </p>
        <p className="text-sharewell-charcoal md:text-sharewell-blue text-[16px]/[140%] font-bold md:font-bold lg:font-medium">
          Lorem Ipsum
        </p>
        <div className="relative">
          <button className="absolute right-[30px] bottom-[19px] w-[24px] h-[24px]">
            <Image src="/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="h-[80px] w-full bg-white px-[24px] pb-[24px] pt-[16px] gap-[16px] flex flex-col justify-center items-start self-stretch">
        <p className="text-sharewell-black text-[14px]/[140%] md:text-[16px]/[140%] lg:text-[14px]/[140%] lg:font-normal">
          Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur.
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="rounded-b h-[124px] w-full bg-white p-[24px] gap-[10px] text-center border-t border-1 border-modal-boarder flex flex-col items-start self-stretch">
        <p className="w-full md:font-normal lg:font-medium text-sharewell-charcoal text-[14px]/[140%] lg:text-[15px]/[140%]">
          Lorem Ipsum is simply dummy text.
        </p>
        <button className="w-full text-modal-button-text/20 text-[16px]/[140%] gap-[8px] px-[72px] py-[16px] md:px-[24px] md:py-[12px] rounded-[12px] bg-modal-button/10">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};
