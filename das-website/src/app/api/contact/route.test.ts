import { describe, it, expect, vi } from 'vitest';

// Mock the email module before importing the route
vi.mock('@/lib/email', () => ({
  sendContactEmail: vi.fn().mockResolvedValue(undefined),
}));

const { POST } = await import('./route');

describe('POST /api/contact', () => {
  it('returns 200 with success for valid data', async () => {
    const body = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+27 11 123 4567',
      serviceInterest: 'Mechanical Repairs',
      message: 'I need a full vehicle service please.',
    };

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.status).toBe('success');
  });

  it('returns 400 with errors for invalid data', async () => {
    const body = { name: '', email: 'bad', phone: '', serviceInterest: '', message: '' };

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.status).toBe('error');
    expect(Object.keys(json.errors).length).toBeGreaterThan(0);
  });

  it('returns 400 when required fields are missing', async () => {
    const body = { name: 'Test', email: 'test@test.com', phone: '', serviceInterest: '', message: '' };

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('returns 500 for malformed JSON', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not json',
    });

    const response = await POST(request);
    expect(response.status).toBe(500);
  });
});
