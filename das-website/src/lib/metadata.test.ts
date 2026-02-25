import { describe, it, expect } from 'vitest';
import { generatePageMetadata } from './metadata';

describe('generatePageMetadata', () => {
  it('returns title with " | DAS" suffix', () => {
    const meta = generatePageMetadata({
      title: 'Home',
      description: 'Welcome to DAS',
      path: '/',
    });
    expect(meta.title).toBe('Home | DAS');
  });

  it('includes description', () => {
    const meta = generatePageMetadata({
      title: 'About',
      description: 'Learn about DAS',
      path: '/about',
    });
    expect(meta.description).toBe('Learn about DAS');
  });

  it('generates Open Graph tags with full URL', () => {
    const meta = generatePageMetadata({
      title: 'Services',
      description: 'Our services',
      path: '/services',
    });
    const og = meta.openGraph as Record<string, unknown>;
    expect(og.title).toBe('Services | DAS');
    expect(og.description).toBe('Our services');
    expect(og.url).toBe('https://dynamicsolutionszambia.com/services');
  });

  it('uses default OG image when none provided', () => {
    const meta = generatePageMetadata({
      title: 'Home',
      description: 'Welcome',
      path: '/',
    });
    const og = meta.openGraph as Record<string, unknown>;
    const images = og.images as Array<{ url: string }>;
    expect(images[0].url).toContain('dynamicsolutionszambia.com');
    expect(images[0].url).toContain('DAS');
  });

  it('uses custom OG image when provided', () => {
    const meta = generatePageMetadata({
      title: 'Fleet',
      description: 'Fleet management',
      ogImage: '/images/fleet.jpg',
      path: '/fleet-management',
    });
    const og = meta.openGraph as Record<string, unknown>;
    const images = og.images as Array<{ url: string }>;
    expect(images[0].url).toBe('https://dynamicsolutionszambia.com/images/fleet.jpg');
  });

  it('passes through absolute OG image URLs unchanged', () => {
    const meta = generatePageMetadata({
      title: 'Test',
      description: 'Test',
      ogImage: 'https://cdn.example.com/image.jpg',
      path: '/test',
    });
    const og = meta.openGraph as Record<string, unknown>;
    const images = og.images as Array<{ url: string }>;
    expect(images[0].url).toBe('https://cdn.example.com/image.jpg');
  });

  it('generates Twitter card metadata', () => {
    const meta = generatePageMetadata({
      title: 'Contact',
      description: 'Contact us',
      path: '/contact',
    });
    const twitter = meta.twitter as Record<string, unknown>;
    expect(twitter.card).toBe('summary_large_image');
    expect(twitter.title).toBe('Contact | DAS');
    expect(twitter.description).toBe('Contact us');
  });

  it('sets canonical URL in alternates', () => {
    const meta = generatePageMetadata({
      title: 'About',
      description: 'About DAS',
      path: '/about',
    });
    const alternates = meta.alternates as Record<string, unknown>;
    expect(alternates.canonical).toBe('https://dynamicsolutionszambia.com/about');
  });
});
