import { TargetAudience } from "../components/sections/TargetAudience";
import { Solution } from "../components/sections/Solution";
import { Personalization } from "../components/sections/Personalization";
import { B2BProcess } from "../components/sections/B2BProcess";
import { CTASection } from "../components/sections/CTASection";

export function Partners() {
  return (
    <main className="pt-24">
      <TargetAudience />
      <Solution />
      <Personalization />
      <B2BProcess />
      <CTASection />
    </main>
  );
}
