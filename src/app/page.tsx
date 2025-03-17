import { CompanyOverview } from "@/components/company-overview";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/ecosystem/";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black md:p-5 p-3">
      <Hero />
      <CompanyOverview />
      <Ecosystem />
    </div>
  );
}
