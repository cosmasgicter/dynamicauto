import { describe, it, expect } from 'vitest';
import { POST } from './route';

function makeRequest(body: Record<string, unknown>): Request {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+27 11 123 4567',
  serviceInterest: 'Mechanical Repairs',
  message: 'I need a full vehicle service please.',
};

describe('POST /api/contact', () => {
  it('returns 200 with success for valid data', async () => {
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.status).toBe('success');
    expect(json.message).toContain('Thank you');
  });

  it('returns 400 with validation errors for empty fields', async () => {
    const res = await POST(
      makeRequest({ name: '', email: '', phone: '', serviceInterest: '', message: '' })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.status).toBe('error');
    expect(json.errors.name).toBeDefined();
    expect(json.errors.email).toBeDefined();
  });

  it('returns 400 for invalid email', async () => {
    const res = await POST(makeRequest({ ...validBody, email: 'bad' }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.errors.email).toBeDefined();
  });

  it('returns 500 for malformed JSON', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not json',
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.status).toBe('error');
    expect(json.message).toContain('Something went wrong');
  });
});
