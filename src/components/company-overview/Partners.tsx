import { PartnersCarousel } from "./Partners/Carousel";

export function Partners() {
  return (
    <section className="max-w-[1800px] mx-auto px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="relative">
        <div
          className="absolute inset-x-0 h-40 -top-24 overflow-hidden hidden sm:block"
          style={{
            backgroundImage: "url(/images/Dots.svg)",
            backgroundSize: "20px 20px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <h3 className="text-center text-lg sm:text-xl text-[#0B1133] opacity-60 mb-4 sm:mb-6">
          Trusted by the best in Web3
        </h3>

        <div className="relative">
          <PartnersCarousel />
        </div>
      </div>
    </section>
  );
}
