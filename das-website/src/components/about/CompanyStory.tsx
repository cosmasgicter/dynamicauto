import SectionHeading from "@/components/shared/SectionHeading";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { IMAGE_ASSETS } from "@/lib/constants";

const coreValues = [
  {
    title: "Integrity",
    description: "Honest assessments and transparent pricing on every job.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Manufacturer-standard workmanship using genuine parts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Every decision is guided by what's best for our customers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "State-of-the-art diagnostics and modern repair techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
];

export default function CompanyStory() {
  return (
    <section className="px-4 py-16 tablet:px-6 desktop:px-8">
      <div className="mx-auto max-w-7xl">
        {/* About banner image */}
        <div className="relative mb-12 h-64 w-full overflow-hidden rounded-xl tablet:h-80 desktop:h-96">
          <ImageWithFallback
            src={IMAGE_ASSETS.aboutBanner}
            alt="DAS workshop and team in action"
            width={1200}
            height={600}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Company story */}
        <SectionHeading
          title="Our Story"
          subtitle="Building trust one vehicle at a time since day one."
          centered
        />
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-das-gray-700">
          <p>
            Dynamic Automotive Solutions (DAS) was founded with a simple mission: to deliver honest, high-quality automotive care that customers can rely on. What started as a small workshop driven by passion for vehicles has grown into a full-service automotive centre offering mechanical repairs, auto electrical, diagnostics, air conditioning, fleet management, vehicle servicing, and brake systems.
          </p>
          <p>
            Over the years, our team has built a reputation for transparent pricing, expert workmanship, and genuine care for every vehicle that comes through our doors. We invest in the latest diagnostic equipment and ongoing training so our technicians stay ahead of evolving automotive technology.
          </p>
        </div>

        {/* Mission statement callout */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border-l-4 border-das-accent bg-das-gray-50 p-6 tablet:p-8">
          <h3 className="text-lg font-bold text-das-navy">Our Mission</h3>
          <p className="mt-2 text-das-gray-700">
            To provide every customer with reliable, transparent, and expert automotive services — keeping vehicles safe on the road and building lasting relationships founded on trust and integrity.
          </p>
        </div>

        {/* 75+ Years experience callout */}
        <div className="mx-auto mt-16 text-center">
          <span className="text-6xl font-extrabold text-das-accent tablet:text-7xl desktop:text-8xl">
            75+
          </span>
          <p className="mt-2 text-xl font-semibold text-das-navy tablet:text-2xl">
            Years of Cumulative Experience
          </p>
          <p className="mx-auto mt-2 max-w-md text-das-gray-600">
            Our team brings together decades of hands-on automotive expertise across every discipline.
          </p>
        </div>

        {/* Core values grid */}
        <div className="mt-16">
          <SectionHeading title="Our Core Values" centered />
          <div className="mt-10 grid grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-das-accent/10 text-das-accent">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-das-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-das-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
