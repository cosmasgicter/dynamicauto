import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    quote:
      "DAS has been maintaining our fleet for over 5 years. Their reliability and expertise are unmatched.",
    name: "James van der Merwe",
    title: "Fleet Manager",
    company: "Logistics Co.",
  },
  {
    quote:
      "Honest pricing and quality work. I wouldn't take my car anywhere else.",
    name: "Sarah Naidoo",
    title: "Individual Client",
    company: null,
  },
  {
    quote:
      "The diagnostic team found an issue three other workshops missed. Truly professional.",
    name: "Michael Botha",
    title: "Business Owner",
    company: null,
  },
  {
    quote:
      "Quick turnaround on our company vehicles. DAS understands the urgency of fleet downtime.",
    name: "Priya Govender",
    title: "Operations Director",
    company: "Transport Solutions",
  },
];

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-das-accent/20"
      aria-hidden="true"
    >
      <path d="M11.3 2.6C6.1 5.1 3 9.3 3 14c0 3.3 2.4 6 5.5 6 2.8 0 5-2.2 5-5s-2.2-5-5-5c-.5 0-1 .1-1.5.2C7.6 6.8 9.8 4.6 13 3.2L11.3 2.6zm11 0C17.1 5.1 14 9.3 14 14c0 3.3 2.4 6 5.5 6 2.8 0 5-2.2 5-5s-2.2-5-5-5c-.5 0-1 .1-1.5.2C18.6 6.8 20.8 4.6 24 3.2L22.3 2.6z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="px-4 py-16 tablet:px-6 desktop:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="What Our Clients Say" centered />
        <div className="mt-12 grid grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <QuoteIcon />
              <p className="mt-4 text-das-gray-600 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-das-navy">{t.name}</p>
                <p className="text-sm text-das-gray-600">
                  {t.title}
                  {t.company ? `, ${t.company}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
