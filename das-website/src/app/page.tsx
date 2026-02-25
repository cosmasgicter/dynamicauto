import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseDAS from "@/components/home/WhyChooseDAS";
import HomeCTA from "@/components/home/HomeCTA";
import ScrollReveal from "@/components/shared/ScrollReveal";
import TrustIndicators from "@/components/shared/TrustIndicators";
import Testimonials from "@/components/home/Testimonials";
import { generatePageMetadata } from "@/lib/metadata";
import { IMAGE_ASSETS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Home",
  description:
    "Dynamic Automotive Solutions — 75+ years of cumulative automotive expertise. Professional mechanical repairs, auto electrical, diagnostics, fleet management, and more in Lusaka, Zambia.",
  ogImage: IMAGE_ASSETS.heroBackground,
  path: "/",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <ScrollReveal>
        <ServicesOverview />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseDAS />
      </ScrollReveal>

      <TrustIndicators />

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <HomeCTA />
      </ScrollReveal>
    </main>
  );
}
