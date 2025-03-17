import { Nav } from "./Nav";
import { AuditedBy } from "@/components/klink-info/AuditedBy";
import { ListedOn } from "@/components/klink-info/ListedOn";
import Image from "next/image";
export function Hero() {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-2/4 bg-gradient-to-r from-transparent to-white/10 z-20"></div>
      <Nav />
      <div className="h-full bg-[#16151F] rounded-4xl rounded-tr-none md:p-[60px] pt-14 sm:p-8 p-5 relative flex flex-col">
        <div className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 relative z-20 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:7xl xl:text-[76px] font-semibold leading-tight md:leading-[80px] tracking-[-1px]">
            <div className="text-primary break-after-auto">$KLINK</div>
            The AI-powered infrastructure for Web3 earnings
          </h1>
          <div className="flex gap-4 text-white font-medium mx-auto md:mx-0">
            <button className="cursor-pointer transition-colors bg-gradient-to-r from-[#674EFF] to-[#714EBD] md:px-6 md:py-3 p-2 rounded-full border-2 border-[#9A8AFE] relative shadow-[0px_1.15px_20.39px_0px_#FFFFFF6E_inset] hover:bg-gradient-to-r hover:from-[#7E6AFF] hover:to-[#8A6AD4]">
              Buy $KLINK
            </button>
            <button className="border-[1.5px] border-[#9A8AFE80] bg-[#674EFF1A] rounded-full md:px-6 md:py-3 p-2 flex items-center cursor-pointer transition-colors hover:bg-[#674EFF50]">
              Stake $KLINK
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-5 md:mb-12 w-full md:w-3/4 lg:w-1/2 relative z-20 text-center md:text-left mt-auto">
          <AuditedBy />
        </div>
        <ListedOn />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover absolute bottom-0 sm:right-0 z-10
            w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1500px] lg:h-[1500px]
            left-1/2 -translate-x-1/2 translate-y-1/3
            sm:left-auto sm:translate-x-0 sm:translate-y-1/3
            md:translate-y-1/4 md:translate-x-1/5
            lg:translate-y-2/5"
        poster="/images/klink_coin.webp"
      >
        <source
          src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webm"
          type="video/webm"
        />
        <source src="/images/klink_coin.mov" type="video/quicktime" />
        <Image
          src="/images/klink_coin.webp"
          alt="Klink Coin"
          width={1500}
          height={1500}
          className="object-cover"
        />
      </video>
    </div>
  );
}
