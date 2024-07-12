import Image from "next/image";
import { FC } from "react";

export const Modal1: FC = () => {
  return (
    <div className="font-sans font-medium w-[339px] md:w-[640px]">
      <div className="relative rounded-t h-[181px] md:h-[244px] w-full bg-sharewell-blue lg:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <div className="absolute left-[48px] top-[48px] md:top-[65px] gap-[10px] flex flex-col justify-center items-start self-stretch">
          <h2 className="text-[18px]/[140%] md:text-[32px]/[140%] w-[396px]">
            Modal 1
          </h2>
          <p className="text-[14px]/[140%]">Lorem Ipsum is simply</p>
          <div className="text-[14px]/[140%] md:text-[16px]/[140%]">
            <p>Thursday, Jun 22, 2024</p>
            <p>06:00pm - 07:30pm EST</p>
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
        <p className="text-sharewell-blue text-[16px]/[140%] font-bold">
          Lorem Ipsum
        </p>
        <div className="relative">
          <button className="absolute right-[30px] bottom-[19px] w-[24px] h-[24px]">
            <Image src="/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="h-[80px] w-full bg-white px-[24px] pb-[24px] pt-[16px] gap-[16px] flex flex-col justify-center items-start self-stretch">
        <p className="text-black text-[16px]/[140%] [md:text-[14px]/[140%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s
        </p>
      </div>
      <div className="h-[125px] w-full bg-white p-[24px] gap-[10px] text-center border-t border-1 border-modal-boarder flex flex-col items-start self-stretch">
        <p className="w-full md:font-normal lg:font-medium text-sharewell-charcoal text-[14px]/[140%]">
          Lorem Ipsum is simply dummy text.
        </p>
        <button className="w-full md:uppercase md:font-semibold lg:font-normal text-modal-button-text/20 text-[16px]/[140%] px-[24px] py-[12px] rounded-[12px] bg-modal-button/10">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};
