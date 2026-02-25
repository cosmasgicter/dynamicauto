import SectionHeading from "@/components/shared/SectionHeading";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamSection() {
  return (
    <section className="bg-das-gray-50 px-4 py-16 tablet:px-6 desktop:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The experienced professionals behind DAS."
          centered
        />
        <div className="mt-12 grid grid-cols-1 gap-8 tablet:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 150}>
              <div className="overflow-hidden rounded-xl bg-white shadow-md">
                <div className="relative h-64 w-full">
                  <ImageWithFallback
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    width={400}
                    height={300}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-das-navy">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-das-accent">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="mt-3 text-sm text-das-gray-600">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
