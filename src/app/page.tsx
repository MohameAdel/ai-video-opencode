import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Styles } from "@/components/sections/Styles";
import { AIExperience } from "@/components/sections/AIExperience";
import { Performance } from "@/components/sections/Performance";
import { GrowthSolutions } from "@/components/sections/GrowthSolutions";
import { UseCases } from "@/components/sections/UseCases";
import { FAQs } from "@/components/sections/FAQs";
import { Testimonials } from "@/components/sections/Testimonials";
import PricingSection from "@/components/ui/pricing-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <GrowthSolutions />
      <PricingSection />
      <AIExperience />
      <Styles />
      <Performance />
      <UseCases />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
}
