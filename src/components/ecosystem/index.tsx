"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { EcosystemCard } from "./EcosystemCard";
import { ResourceCard } from "./ResourceCard";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent } from "../ui/card";

import { cards } from "@/data";

export default function Ecosystem() {
  return (
    <section className="mx-auto md-px-4 py-30 sm:px-6 lg:px-8 px-2 text-center md:text-left lg:flex-row gap-10 lg:items-start items-center min-h-[500px] relative text-white rounded-4xl overflow-hidden">
      <Image
        src="/images/ecosystem/ecosystem.png"
        alt="Ecosystem"
        fill
        className="hidden lg:block"
      />
      <Image
        src="/images/ecosystem/ecosystem-bg.png"
        alt="Ecosystem"
        fill
        className="block lg:hidden rounded-4xl"
      />

      <div className="relative z-10 text-left w-full xl:px-30 lg:px-20 md:px-10 px-sm-5 px-0">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:7xl xl:text-[76px] font-bold leading-tight md:leading-[80px] tracking-[-1px] mb-[100px] lg:text-left text-center">
          Klink <span className="text-primary">Service Ecosystem</span>
        </h2>
        <div className="flex gap-10 lg:flex-row flex-col relative">
          <div className="lg:hidden block absolute h-[500.03px] w-[500.76px] left-[5%] top-[-40%] bg-[#9C78ED] opacity-50 blur-[87.8906px]" />
          <div className="flex flex-col gap-2">
            {cards.map((card, index) => (
              <EcosystemCard key={index} card={card} index={index} />
            ))}
          </div>
          <Card className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)]">
            <CardHeader className="p-0 relative h-full gap-0">
              <Image
                src="/images/ecosystem/ecosystem-1.png"
                alt="Ecosystem"
                className="object-cover rounded-t-xl"
                width={1400}
                height={400}
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl">
              <p className="text-xl font-semibold mb-1">
                Wallet & Community Quest Platform
              </p>
              <p className="opacity-60 font-medium">
                Since 2024, Klink has served over 500,000 users with its
                multi-chain self-custodial wallet at the core. Built on this
                foundation are Klink&apos;s Airdrop Centre and Web3 Offerwall,
                providing seamless access to rewards and earning opportunities
                for its growing global community.
              </p>
              <div className="flex">
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full px-10 py-4 font-medium text-md">
                  Download
                </Button>
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full p-2 font-medium text-md">
                  <ChevronRight width={24} height={24} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative z-10 text-left w-full xl:px-30 lg:px-20 md:px-10 px-sm-5 px-0 lg:mt-50 md:mt-30 mt-40">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:7xl xl:text-[76px] font-semibold leading-tight md:leading-[80px] tracking-[-1px] mb-[100px] lg:text-left text-center">
          Useful <span className="text-primary">Resources</span>
        </h2>
        <div className="grid grid-cols-6 gap-11">
          <ResourceCard className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)] xl:col-span-2 md:col-span-3 col-span-6 bg-[#16151F] flex flex-col">
            <CardHeader className="p-0 relative sm:h-[310px] h-[165px] gap-0">
              <Image
                src="/images/resources/useful_resource-1.png"
                alt="Ecosystem"
                className="object-cover"
                fill
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl flex flex-col flex-1">
              <p className="text-xl font-semibold mb-1">$KLINK Litepaper</p>
              <p className="opacity-60 font-medium">
                Access key information such as tokenomics, team & extended
                roadmap.
              </p>
              <div className="flex mt-auto">
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full px-10 py-4 font-medium text-md">
                  Go to Docs
                </Button>
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full p-2 font-medium text-md">
                  <ChevronRight width={24} height={24} />
                </Button>
              </div>
            </CardContent>
          </ResourceCard>
          <ResourceCard className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)] xl:col-span-2 md:col-span-3 col-span-6 bg-[#16151F] flex flex-col">
            <CardHeader className="p-0 relative sm:h-[310px] h-[165px] gap-0">
              <Image
                src="/images/resources/useful_resource-2-2.png"
                alt="Ecosystem"
                className="object-contain rounded-t-xl z-10"
                fill
              />
              <Image
                src="/images/resources/useful_resource-2-1.png"
                alt="Ecosystem"
                className="object-contain rounded-t-xl"
                fill
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl flex flex-col flex-1">
              <p className="text-xl font-semibold mb-1">Buy $KLINK Token</p>
              <p className="opacity-60 font-medium">
                Hold $KLINK by directly swapping other tokens on Base network
                from this portal.
              </p>
              <div className="flex mt-auto">
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full px-10 py-4 font-medium text-md">
                  Buy Now
                </Button>
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full p-2 font-medium text-md">
                  <ChevronRight width={24} height={24} />
                </Button>
              </div>
            </CardContent>
          </ResourceCard>
          <ResourceCard className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)] xl:col-span-2 md:col-span-3 col-span-6 bg-[#16151F] flex flex-col">
            <CardHeader className="p-0 relative sm:h-[310px] h-[165px] gap-0 overflow-hidden">
              <div className="flex gap-4 -mx-30 flex-wrap justify-center sm:h-[310px] h-[165px] items-center">
                <Image
                  src="/images/resources/kucoin.png"
                  alt="Ecosystem"
                  width={190}
                  height={150}
                  className="object-contain z-20"
                />
                <Image
                  src="/images/resources/mexc.png"
                  alt="Ecosystem"
                  width={280}
                  height={150}
                  className="object-contain z-20"
                />
                <Image
                  src="/images/resources/gateio.png"
                  alt="Ecosystem"
                  width={190}
                  height={150}
                  className="object-contain z-20"
                />
                <Image
                  src="/images/resources/bitpanda.png"
                  alt="Ecosystem"
                  width={190}
                  height={150}
                  className="object-contain z-20"
                />
                <Image
                  src="/images/resources/uniswap.png"
                  alt="Ecosystem"
                  width={190}
                  height={150}
                  className="object-contain z-20"
                />
              </div>
              <Image
                src="/images/resources/dots.png"
                alt="Ecosystem"
                className="object-cover rounded-t-xl"
                fill
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl flex flex-col flex-1">
              <p className="text-xl font-semibold mb-1">
                Visit CEX & DEX Listings
              </p>
              <p className="opacity-60 font-medium">
                Trade $KLINK on KuCoin, MEXC, Gate.io, and other leading crypto
                exchanges.
              </p>
              <div className="flex mt-auto">
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full px-10 py-4 font-medium text-md">
                  Visit
                </Button>
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full p-2 font-medium text-md">
                  <ChevronRight width={24} height={24} />
                </Button>
              </div>
            </CardContent>
          </ResourceCard>
          <ResourceCard className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)] xl:col-span-4 col-span-6 bg-[#16151F] xl:order-1 order-2 flex flex-col">
            <CardHeader className="p-0 relative sm:h-[310px] h-[165px] gap-0 bg-[#16151F] rounded-t-xl">
              <Image
                src="/images/resources/resource-4-1.png"
                alt="Ecosystem"
                className="object-cover rounded-t-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                width={190}
                height={150}
              />
              <Image
                src="/images/resources/resource-4-2.png"
                alt="Ecosystem"
                className="object-cover rounded-t-xl"
                fill
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl flex flex-1 flex-col pr-20">
              <p className="text-xl font-semibold mb-1">Join Klink Community</p>
              <p className="opacity-60 font-medium">
                Join hundreds of thousands of Klink community members to stay up
                to date with live campaigns, ecosystem news, and discussions
                across our official social media accounts.
              </p>
              <div className="flex xl:mt-auto md:mt-5 mt-3.5 sm:gap-3.5 gap-2.5">
                <Image
                  src="/images/social/X.png"
                  alt="Ecosystem"
                  width={42}
                  height={42}
                />
                <Image
                  src="/images/social/Telegram.png"
                  alt="Ecosystem"
                  width={42}
                  height={42}
                />
                <Image
                  src="/images/social/Discord.png"
                  alt="Ecosystem"
                  width={42}
                  height={42}
                />
                <Image
                  src="/images/social/Youtube.png"
                  alt="Ecosystem"
                  width={42}
                  height={42}
                />
                <Image
                  src="/images/social/Linkendin.png"
                  alt="Ecosystem"
                  width={42}
                  height={42}
                />
              </div>
            </CardContent>
          </ResourceCard>
          <ResourceCard className="w-full h-full p-0 border-0 rounded-2xl gap-0 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)] xl:col-span-2 md:col-span-3 col-span-6 bg-[#16151F] xl:order-2 order-1 flex flex-col">
            <CardHeader className="p-0 relative sm:h-[310px] h-[165px] gap-0">
              <Image
                src="/images/resources/resource-5-1.png"
                alt="Ecosystem"
                className="object-contain ml-auto"
                width={400}
                height={300}
              />
              <Image
                src="/images/resources/resource-5-2.png"
                alt="Ecosystem"
                className="object-cover"
                fill
              />
            </CardHeader>
            <CardContent className="bg-[#16151F] text-white p-8 rounded-b-2xl flex flex-col flex-1">
              <p className="text-xl font-semibold mb-1">Link3</p>
              <p className="opacity-60 font-medium">
                Learn more about Klink and our ongoing promotions from the Klink
                Link3 profile.
              </p>
              <div className="flex mt-auto">
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full px-10 py-4 font-medium text-md">
                  Go to Link3
                </Button>
                <Button className="mt-4 bg-transparent text-white border border-[#674EFF] rounded-full p-2 font-medium text-md">
                  <ChevronRight width={24} height={24} />
                </Button>
              </div>
            </CardContent>
          </ResourceCard>
        </div>
      </div>
    </section>
  );
}
