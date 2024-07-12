import Image from "next/image";
import { FC } from "react";

export const Modal3: FC = () => {
  return (
    <div className="font-sans font-medium w-[339px] md:w-[640px]">
      <div className="relative rounded-t h-[181px] md:h-[244px] w-full bg-sharewell-blue">
        <div className="absolute left-[48px] top-[48px] md:top-[65px] gap-[10px] flex flex-col justify-center items-start self-stretch">
          <h2 className="text-[18px]/[140%] md:text-[32px]/[140%] w-[396px]">
            Modal 3
          </h2>
          <p className="text-[14px]/[140%]">Lorem Ipsum is cool</p>
          <div className="text-[14px]/[140%] md:text-[16px]/[140%]">
            <p>Wednesday, Jun 21, 2023</p>
            <p>07:00pm - 07:30pm EST</p>
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
        <p className="text-sharewell-blue md:text-sharewell-charcoal md:font-normal lg:uppercase text-[14px]/[140%]">
          Lorem Ipsum
        </p>
        <p className="text-sharewell-charcoal md:text-sharewell-blue text-[16px]/[140%] md:font-semibold">
          Lorem Ipsum
        </p>
        <div className="relative">
          <button className="absolute right-[30px] bottom-[19px] w-[24px] h-[24px]">
            <Image src="/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="h-[150px] md:h-[80px] w-full bg-white px-[24px] pb-[24px] pt-[16px] gap-[16px] flex flex-col justify-center items-start self-stretch">
        <p className="text-sharewell-black text-[16px]/[140%] md:text-[14px]/[140%]">
          Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit
        </p>
      </div>
      <div className="rounded-b h-[124px] lg:h-[134px] w-full bg-white p-[24px] gap-[10px] text-center border-t border-1 border-modal-boarder flex flex-col items-start self-stretch">
        <p className="w-full text-sharewell-charcoal text-[14px]/[140%]">
          Lorem Ipsum is simply dummy text.
        </p>
        <button className="w-full text-modal-button-text/20 text-[16px]/[140%] lg:text-[18px]/[140%] gap-[8px] px-[72px] py-[16px] md:px-[24px] md:py-[12px] rounded-[12px] bg-modal-button/10">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};
