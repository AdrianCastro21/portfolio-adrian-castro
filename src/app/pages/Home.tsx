import { HeroSection } from "../components/HeroSection";
import { ValuePropSection } from "../components/ValuePropSection";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProcessSection } from "../components/ProcessSection";
import { ExperienceSkillsSection } from "../components/ExperienceSkillsSection";
import { AboutCtaSection } from "../components/AboutCtaSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <div id="work"><CaseStudiesSection /></div>
      <div id="process"><ProcessSection /></div>
      <div id="experience"><ExperienceSkillsSection /></div>
      <div id="contact"><AboutCtaSection /></div>
    </>
  );
}