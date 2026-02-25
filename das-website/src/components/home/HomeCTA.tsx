import CTAButton from "@/components/shared/CTAButton";

export default function HomeCTA() {
  return (
    <section className="px-4 py-16 tablet:px-6 desktop:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 tablet:grid-cols-2">
        <div className="rounded-2xl bg-das-navy p-8 text-center tablet:p-10">
          <h3 className="text-2xl font-bold text-white">Request a Quote</h3>
          <p className="mt-3 text-das-gray-300">
            Get a transparent, no-obligation quote for any automotive service.
            Our team responds within 24 hours.
          </p>
          <div className="mt-6">
            <CTAButton text="Get a Quote" href="/contact" variant="primary" />
          </div>
        </div>

        <div className="rounded-2xl bg-das-accent p-8 text-center tablet:p-10">
          <h3 className="text-2xl font-bold text-white">Book an Appointment</h3>
          <p className="mt-3 text-white/80">
            Schedule your next service at a time that works for you. Fast,
            convenient, and hassle-free booking.
          </p>
          <div className="mt-6">
            <CTAButton
              text="Book Now"
              href="/contact"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
