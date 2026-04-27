import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StepGuide from "@/components/StepGuide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Plan from "@/components/Plan";
import Stats from "@/components/Stats";
import TrustStatement from "@/components/TrustStatement";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <TrustStatement />
      
      <Stats />
      <Features />
      <StepGuide />
      <Plan />
      <CTA />
      <Footer />
    </main>
  );
}
