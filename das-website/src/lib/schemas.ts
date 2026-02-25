export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Dynamic Automotive Solutions',
    description:
      '75+ years of cumulative automotive expertise providing mechanical repairs, auto electrical, diagnostics, air conditioning, fleet management, vehicle servicing, and brake systems.',
    telephone: '+27111234567',
    email: 'info@das-auto.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Road',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      postalCode: '2000',
      addressCountry: 'ZA',
    },
    openingHours: ['Mo-Fr 07:30-17:00', 'Sa 08:00-13:00'],
    image: 'https://das-auto.co.za/images/DAS  PROFILE-2025-images-1.jpg',
    url: 'https://das-auto.co.za',
  };
}
