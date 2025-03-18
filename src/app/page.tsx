import CompanyOverview from "@/components/company-overview";
import Ecosystem from "@/components/ecosystem";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black md:p-5 p-3">
      <Hero />
      <CompanyOverview />
      <Ecosystem />
    </div>
  );
}
