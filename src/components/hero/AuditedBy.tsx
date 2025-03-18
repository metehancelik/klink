"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AuditedBy() {
  const [copied, setCopied] = useState(false);
  const fullAddress = "0x01023BA8e1fEFb460D170Bb646A371DD329cD672";
  const truncatedAddress = `${fullAddress.substring(
    0,
    6
  )}....${fullAddress.substring(fullAddress.length - 4)}`;

  return (
    <div className="flex flex-col gap-3 w-fit relative z-20 mx-auto md:mx-0">
      <p className="text-white/70 font-semibold text-base">Audited By</p>
      <div className="flex border-2 border-[#9C78ED33] rounded-2xl items-stretch h-full">
        <div className="flex items-center border-r-2 border-primary md:p-3 p-2 bg-[#242036] rounded-l-2xl">
          <Image
            src="/images/hero/certik.svg"
            alt="Klink Info"
            width={98}
            height={24}
          />
        </div>
        <div className="flex items-center justify-center md:p-3 p-2 gap-2 text-[#8974FA] bg-[#3C3158] rounded-r-2xl flex-1">
          <p className="text-sm">{truncatedAddress}</p>
          <button
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(fullAddress);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Image
                src="/images/hero/copy.svg"
                alt="Copy"
                width={17}
                height={17}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
