import { Partners } from "./Partners";
import { Stats } from "./Stats";
import { Mission } from "./Mission";

export function CompanyOverview() {
  return (
    <div>
      <Partners />
      <Stats />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0B1133] to-transparent opacity-20" />
      <Mission />
    </div>
  );
}
