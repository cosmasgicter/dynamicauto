import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/shared/ScrollReveal";
import MapEmbed from "@/components/contact/MapEmbed";
import { generatePageMetadata } from "@/lib/metadata";
import { IMAGE_ASSETS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with DAS for all your automotive needs. Request a quote, book an appointment, or inquire about fleet management services.",
  ogImage: IMAGE_ASSETS.contactBanner,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page header banner */}
      <section className="bg-das-navy px-4 py-16 text-center tablet:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white tablet:text-4xl desktop:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-das-gray-300">
            Get in touch with our team. We&apos;re here to help with all your
            automotive needs.
          </p>
        </div>
      </section>

      {/* Mobile quick-action links */}
      <section className="bg-das-accent/5 px-4 py-4 tablet:hidden">
        <div className="flex gap-3">
          <a
            href="tel:+260977123456"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-das-accent px-4 py-3 font-semibold text-white transition-colors hover:bg-das-accent-dark"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
          <a
            href="mailto:dynamic@dynamicsolutionszambia.com"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-das-navy px-4 py-3 font-semibold text-white transition-colors hover:bg-das-navy/90"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
        </div>
      </section>

      {/* ContactInfo + ContactForm — two-column desktop, stacked mobile */}
      <section className="px-4 py-16 tablet:px-6 desktop:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 desktop:grid-cols-2">
          <ScrollReveal>
            <ContactInfo />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-das-gray-200 tablet:p-8">
              <h2 className="mb-6 text-2xl font-bold text-das-navy">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MapEmbed — full width */}
      <section className="px-4 pb-16 tablet:px-6 desktop:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold text-das-navy">
              Find Us
            </h2>
            <MapEmbed />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
