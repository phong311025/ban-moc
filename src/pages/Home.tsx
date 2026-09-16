import { Hero } from "../components/sections/Hero";
import { CoreValues } from "../components/sections/CoreValues";
import { ComboProducts } from "../components/sections/ComboProducts";
import { Comparison } from "../components/sections/Comparison";
import { Materials } from "../components/sections/Materials";
import { Solution } from "../components/sections/Solution";
import { TargetAudience } from "../components/sections/TargetAudience";
import { Personalization } from "../components/sections/Personalization";
import { GreenRoomExperience } from "../components/sections/GreenRoomExperience";
import { ESG } from "../components/sections/ESG";
import { B2BProcess } from "../components/sections/B2BProcess";
import { BrandStory } from "../components/sections/BrandStory";
import { CTASection } from "../components/sections/CTASection";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <CoreValues />
      <ComboProducts />
      <Comparison />
      <Materials />
      <Solution />
      <TargetAudience />
      <Personalization />
      <GreenRoomExperience />
      <ESG />
      <B2BProcess />
      <BrandStory />
      <CTASection />
    </main>
  );
}
