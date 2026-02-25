import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTAButton from "@/components/shared/CTAButton";

export interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText?: string;
  reversed?: boolean;
}

export default function ServiceDetail({
  id,
  title,
  description,
  features,
  image,
  ctaText = "Request a Quote",
  reversed = false,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-16 border-b border-das-gray-200 last:border-b-0"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex flex-col gap-8 tablet:gap-12 tablet:flex-row tablet:items-center ${
            reversed ? "tablet:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full tablet:w-1/2">
            <div className="overflow-hidden rounded-xl">
              <ImageWithFallback
                src={image}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full tablet:w-1/2">
            <h2 className="text-2xl font-bold text-das-navy tablet:text-3xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-das-gray-700">
              {description}
            </p>

            {/* Features list */}
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-das-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-das-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton
                text={ctaText}
                href="/contact"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
