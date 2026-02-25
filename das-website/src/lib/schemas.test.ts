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
    expect(schema.telephone).toBe('+27111234567');
    expect(schema.email).toBe('info@das-auto.co.za');
  });

  it('includes PostalAddress with South African details', () => {
    expect(schema.address['@type']).toBe('PostalAddress');
    expect(schema.address.addressLocality).toBe('Johannesburg');
    expect(schema.address.addressRegion).toBe('Gauteng');
    expect(schema.address.addressCountry).toBe('ZA');
  });

  it('includes opening hours for weekdays and Saturday', () => {
    expect(schema.openingHours).toContain('Mo-Fr 07:30-17:00');
    expect(schema.openingHours).toContain('Sa 08:00-13:00');
  });

  it('includes image and url', () => {
    expect(schema.image).toContain('das-auto.co.za');
    expect(schema.url).toBe('https://das-auto.co.za');
  });
});
