import { IMAGE_ASSETS } from "@/lib/constants";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContextualCTA from "@/components/shared/ContextualCTA";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Fleet Management",
  description:
    "Dedicated fleet management solutions for businesses — maintenance scheduling, cost tracking, fleet diagnostics, and dedicated account management.",
  ogImage: IMAGE_ASSETS.fleetBanner,
  path: "/fleet-management",
});

const fleetServices = [
  {
    title: "Maintenance Scheduling",
    description:
      "Proactive scheduling to prevent breakdowns and keep your fleet on the road. We plan and track every service interval so you never miss a beat.",
  },
  {
    title: "Cost Tracking",
    description:
      "Detailed reporting and cost analysis for your entire fleet. Get clear visibility into maintenance spend and identify savings opportunities.",
  },
  {
    title: "Fleet Diagnostics",
    description:
      "Comprehensive diagnostics for your entire fleet using state-of-the-art equipment. We catch issues early before they become costly problems.",
  },
];

const businessBenefits = [
  {
    title: "Cost Savings",
    description:
      "Reduce maintenance costs with preventive care and strategic scheduling that extends vehicle life and avoids expensive emergency repairs.",
  },
  {
    title: "Reduced Downtime",
    description:
      "Priority service and quick turnaround times mean your vehicles spend less time in the workshop and more time earning for your business.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "A single point of contact for your fleet. Your dedicated account manager knows your vehicles inside and out and keeps everything running smoothly.",
  },
];

export default function FleetManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero banner */}
      <section className="relative flex items-center justify-center overflow-hidden bg-das-navy px-4 py-20 text-center tablet:py-28">
        <ImageWithFallback
          src={IMAGE_ASSETS.fleetBanner}
          alt="DAS fleet management operations"
          width={1920}
          height={800}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white tablet:text-4xl desktop:text-5xl">
            Fleet Management Solutions
          </h1>
          <p className="mt-4 text-lg text-das-gray-300">
            Keep your business moving with DAS's dedicated fleet management
            services — tailored maintenance, transparent reporting, and a team
            that treats your fleet like their own.
          </p>
          <div className="mt-8">
            <CTAButton
              text="Get a Fleet Quote"
              href="/contact"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Fleet services section */}
      <section className="px-4 py-16 tablet:px-6 desktop:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              title="Our Fleet Services"
              subtitle="Comprehensive solutions to manage and maintain your vehicle fleet"
              centered
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-8 tablet:grid-cols-3">
            {fleetServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="rounded-xl border border-das-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-das-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-das-gray-600">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet images section */}
      <ScrollReveal>
        <section className="bg-das-gray-50 px-4 py-16 tablet:px-6 desktop:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 tablet:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl tablet:col-span-2">
              <ImageWithFallback
                src={IMAGE_ASSETS.fleetManagement}
                alt="DAS fleet management service in action"
                width={800}
                height={600}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={IMAGE_ASSETS.gallery1}
                  alt="DAS workshop fleet servicing"
                  width={400}
                  height={300}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={IMAGE_ASSETS.gallery2}
                  alt="DAS fleet diagnostics equipment"
                  width={400}
                  height={300}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Business benefits section */}
      {/* Midpoint sentinel for contextual CTA */}
      <ContextualCTA
        text="Ready to optimize your fleet?"
        buttonText="Get a Quote"
        href="/contact"
      />

      <section className="px-4 py-16 tablet:px-6 desktop:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              title="Why Businesses Choose DAS"
              subtitle="Real benefits that impact your bottom line"
              centered
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-8 tablet:grid-cols-3">
            {businessBenefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="rounded-xl bg-das-navy p-6 text-white">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-3 text-das-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business inquiry CTA */}
      <ScrollReveal>
        <section className="bg-das-navy px-4 py-16 text-center tablet:px-6 desktop:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white tablet:text-4xl">
              Ready to Optimize Your Fleet?
            </h2>
            <p className="mt-4 text-lg text-das-gray-300">
              Contact our fleet team today for a tailored management plan that
              saves you time and money.
            </p>
            <div className="mt-8">
              <CTAButton
                text="Inquire About Fleet Services"
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
