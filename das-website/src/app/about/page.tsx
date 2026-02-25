import CompanyStory from "@/components/about/CompanyStory";
import TeamSection from "@/components/about/TeamSection";
import CTAButton from "@/components/shared/CTAButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { generatePageMetadata } from "@/lib/metadata";
import { IMAGE_ASSETS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about DAS's 75+ years of cumulative automotive expertise, our mission, core values, and the experienced team behind our services.",
  ogImage: IMAGE_ASSETS.aboutBanner,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollReveal>
        <CompanyStory />
      </ScrollReveal>

      <TeamSection />

      <ScrollReveal>
        <section className="bg-das-navy px-4 py-16 text-center tablet:px-6 desktop:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white tablet:text-4xl">
              Ready to Experience the DAS Difference?
            </h2>
            <p className="mt-4 text-lg text-das-gray-300">
              Get in touch with our team today and discover why customers trust
              us with their vehicles.
            </p>
            <div className="mt-8">
              <CTAButton
                text="Contact Us"
                href="/contact"
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
