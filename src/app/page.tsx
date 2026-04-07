import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { TheProblem } from "@/components/sections/TheProblem";
import { WhyUs } from "@/components/sections/WhyUs";
import { Styles } from "@/components/sections/Styles";
import { TheSystem } from "@/components/sections/TheSystem";
import { Performance } from "@/components/sections/Performance";
import { UseCases } from "@/components/sections/UseCases";
import { FAQs } from "@/components/sections/FAQs";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <TheProblem />
      <WhyUs />
      <Styles />
      <TheSystem />
      <Performance />
      <UseCases />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
}
