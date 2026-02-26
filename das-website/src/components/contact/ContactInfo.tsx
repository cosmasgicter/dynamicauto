export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-das-navy">Get in Touch</h2>

      <address className="not-italic space-y-6">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-das-accent/10 text-das-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-das-gray-700">Phone</p>
            <a
              href="tel:+260979449309"
              className="text-das-navy font-medium transition-colors hover:text-das-accent"
            >
              +260 979 449 309
            </a>
            <br />
            <a
              href="tel:+260970630518"
              className="text-sm text-das-gray-600 transition-colors hover:text-das-accent"
            >
              +260 970 630 518
            </a>
            <br />
            <a
              href="tel:+260776955995"
              className="text-sm text-das-gray-600 transition-colors hover:text-das-accent"
            >
              +260 776 955 995
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-das-accent/10 text-das-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-das-gray-700">Email</p>
            <a
              href="mailto:dynamic@dynamicsolutionszambia.com"
              className="text-das-navy font-medium transition-colors hover:text-das-accent"
            >
              dynamic@dynamicsolutionszambia.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-das-accent/10 text-das-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-das-gray-700">Address</p>
            <p className="text-das-navy font-medium">
              Total Filling Station, Alick Nkata Road, Lusaka, Zambia
            </p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-das-accent/10 text-das-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-das-gray-700">Operating Hours</p>
            <p className="text-das-navy font-medium">Mon–Fri: 7:30 AM – 5:00 PM</p>
            <p className="text-das-navy font-medium">Sat: 8:00 AM – 1:00 PM</p>
          </div>
        </div>
      </address>
    </div>
  );
}
