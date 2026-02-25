import { IMAGE_ASSETS } from "@/lib/constants";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import CTAButton from "@/components/shared/CTAButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] items-center justify-center md:min-h-screen"
    >
      {/* Background image */}
      <ImageWithFallback
        src={IMAGE_ASSETS.heroBackground}
        alt="DAS automotive workshop showcasing professional vehicle services"
        width={1920}
        height={1080}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          75+ Years of Cumulative Automotive Expertise
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Professional automotive services you can trust. From mechanical
          repairs to fleet management, DAS delivers quality workmanship every
          time.
        </p>
        <CTAButton
          text="Get a Quote"
          href="/contact"
          variant="primary"
          size="lg"
        />
      </div>
    </section>
  );
}
