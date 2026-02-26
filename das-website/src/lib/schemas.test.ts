import { describe, it, expect } from 'vitest';
import { generateLocalBusinessSchema } from './schemas';

describe('generateLocalBusinessSchema', () => {
  const schema = generateLocalBusinessSchema();

  it('returns schema.org context', () => {
    expect(schema['@context']).toBe('https://schema.org');
  });

  it('returns AutoRepair type', () => {
    expect(schema['@type']).toBe('AutoRepair');
  });

  it('includes business name', () => {
    expect(schema.name).toBe('Dynamic Automotive Solutions');
  });

  it('includes description mentioning expertise', () => {
    expect(schema.description).toContain('75+ years');
  });

  it('includes contact details', () => {
    expect(schema.telephone).toBe('+260979449309');
    expect(schema.email).toBe('dynamic@dynamicsolutionszambia.com');
  });

  it('includes PostalAddress with Zambian details', () => {
    expect(schema.address['@type']).toBe('PostalAddress');
    expect(schema.address.addressLocality).toBe('Lusaka');
    expect(schema.address.addressRegion).toBe('Lusaka Province');
    expect(schema.address.addressCountry).toBe('ZM');
  });

  it('includes opening hours for weekdays and Saturday', () => {
    expect(schema.openingHours).toContain('Mo-Fr 07:30-17:00');
    expect(schema.openingHours).toContain('Sa 08:00-13:00');
  });

  it('includes image and url', () => {
    expect(schema.image).toContain('dynamicsolutionszambia.com');
    expect(schema.url).toBe('https://dynamicsolutionszambia.com');
  });
});
