import Image from "next/image";
import { HamburgerMenu } from "./HamburgerMenu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ConnectWalletButton } from "./wallet/ConnectWallet";

export function Nav() {
  return (
    <nav className="flex relative bg-[#16151F] rounded-tr-4xl">
      <div className="flex flex-1 lg:flex-none">
        <div className="flex gap-4 bg-white relative items-center justify-center sm:pl-4 md:pl-[60px] pl-1">
          <Image
            src="/images/klink.svg"
            alt="Klink Finance"
            width={0}
            height={0}
            className="md:w-[246px] sm:w-[210px] w-[180px]"
          />
        </div>

        <Image
          src="/images/seperator.svg"
          alt="Klink Finance"
          className="md:-ml-3 md:h-[84px] sm:h-[60px] sm:-ml-2 sm:w-[70px] md:w-[93px] w-[64px] -ml-2 -mr-5"
          width={0}
          height={0}
          draggable={false}
        />
      </div>
      <div className="flex xl:justify-between lg:justify-end items-center md:gap-4 gap-1 xl:pr-[60px] pr-4 lg:flex-1 my-1">
        <div className="hidden xl:flex items-center gap-4 text-white font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#" className="hover:text-primary transition-colors">
            Buy $KLINK
          </Link>
          <Link href="/wallet" className="hover:text-primary transition-colors">
            Wallet
          </Link>
          <span className="opacity-50 cursor-default">Stake $KLINK</span>
        </div>
        <div className="ml-auto hidden xl:flex items-center gap-4 text-white font-semibold shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-full px-2 py-1 z-30 relative">
          <button className="border border-[#9A8AFE80] rounded-full px-5 py-4 flex items-center gap-1.5 bg-[#674EFF1A]">
            <Image
              src="/images/klink-token.png"
              alt="Klink Finance"
              width={24}
              height={24}
            />
            $KLINK = $0.05
            <span className="text-[#80FF77] bg-[#2AB18426] rounded-full px-2 py-1 text-xs flex items-center gap-1">
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 0L8 4H0L4 0Z" fill="#80FF77" />
              </svg>
              12.45%
            </span>
            <ChevronDown
              width={24}
              height={24}
              className="hover:text-primary transition-colors cursor-pointer"
            />
          </button>
        </div>
        <ConnectWalletButton />
        <div className="flex xl:hidden z-30 relative">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
