import Image from "next/image";

export function Mission() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center md:text-left flex flex-col lg:flex-row gap-10 lg:items-start items-center">
        <div className="max-w-3xl">
          <h2 className="text-[#9583FF] mb-4 md:text-2xl text-md">
            The Klink Mission
          </h2>
          <h3 className="text-3xl xl:text-5xl font-normal text-[#0B1133] leading-tight mb-6">
            Activating Millions of Web3 Users Through AI-Enabled Wealth Creation
            Technology
          </h3>
          <p className="text-[#0B1133] text-lg opacity-60 leading-relaxed">
            Klink operates a dual ecosystem: Serving the Klink community through
            its wealth creation platform; Simultaneously, as a Web3 partner
            integration layer, offering easy-to-embed tools for user activation
            and monetization.
          </p>
        </div>
        <Image
          className="mt-10 object-contain"
          src="/images/mission.png"
          alt="Mission"
          width={500}
          height={500}
        />
      </section>
    </>
  );
}
