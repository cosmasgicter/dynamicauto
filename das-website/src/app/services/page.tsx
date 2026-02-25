import { SERVICES, IMAGE_ASSETS } from "@/lib/constants";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetail from "@/components/services/ServiceDetail";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContextualCTA from "@/components/shared/ContextualCTA";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Comprehensive automotive services including mechanical repairs, auto electrical, diagnostics, air conditioning, fleet management, vehicle servicing, and brake systems.",
  ogImage: IMAGE_ASSETS.servicesBanner,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page header banner */}
      <section className="bg-das-navy px-4 py-16 text-center tablet:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white tablet:text-4xl desktop:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-das-gray-300">
            From routine servicing to complex diagnostics, DAS delivers expert
            automotive care backed by 75+ years of cumulative experience.
          </p>
        </div>
      </section>

      {/* ServiceCard grid overview */}
      <section className="px-4 py-16 tablet:px-6 desktop:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              title="What We Offer"
              subtitle="Explore our full range of automotive services"
              centered
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 80}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  href={`#${service.id}`}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-full max-w-6xl px-4">
        <hr className="border-das-gray-200" />
      </div>

      {/* Midpoint sentinel for contextual CTA */}
      <ContextualCTA
        text="Need help choosing a service?"
        buttonText="Contact Us"
        href="/contact"
      />

      {/* ServiceDetail sections */}
      {SERVICES.map((service, index) => (
        <ScrollReveal key={service.id}>
          <ServiceDetail
            id={service.id}
            title={service.title}
            description={service.fullDescription}
            features={service.features}
            image={service.image}
            reversed={index % 2 !== 0}
          />
        </ScrollReveal>
      ))}
    </main>
  );
}
