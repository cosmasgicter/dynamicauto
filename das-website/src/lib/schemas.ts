export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Dynamic Automotive Solutions',
    description:
      '75+ years of cumulative automotive expertise providing mechanical repairs, auto electrical, diagnostics, air conditioning, fleet management, vehicle servicing, and brake systems.',
    telephone: '+260979449309',
    email: 'dynamic@dynamicsolutionszambia.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Total Filling Station, Alick Nkata Road',
      addressLocality: 'Lusaka',
      addressRegion: 'Lusaka Province',
      postalCode: '10101',
      addressCountry: 'ZM',
    },
    openingHours: ['Mo-Fr 07:30-17:00', 'Sa 08:00-13:00'],
    image: 'https://dynamicsolutionszambia.com/images/DAS  PROFILE-2025-images-1.jpg',
    url: 'https://dynamicsolutionszambia.com',
  };
}
