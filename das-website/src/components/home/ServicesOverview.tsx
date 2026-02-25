import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesOverview() {
  return (
    <section className="bg-das-gray-50 py-16 tablet:py-20">
      <div className="mx-auto max-w-7xl px-4 tablet:px-6 desktop:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive automotive solutions backed by 75+ years of cumulative expertise"
          centered
        />
        <div className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              href={`/services#${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
