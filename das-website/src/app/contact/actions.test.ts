import { describe, it, expect, vi } from 'vitest';

// Mock the email module
vi.mock('@/lib/email', () => ({
  sendContactEmail: vi.fn().mockResolvedValue(undefined),
}));

const { submitContactForm } = await import('./actions');

const idleState = { status: 'idle' as const, errors: {}, message: '' };

function createFormData(data: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(data)) {
    fd.set(key, value);
  }
  return fd;
}

describe('submitContactForm', () => {
  it('returns success for valid form data', async () => {
    const fd = createFormData({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+27 11 123 4567',
      serviceInterest: 'Mechanical Repairs',
      message: 'I need a full vehicle service please.',
    });

    const result = await submitContactForm(idleState, fd);
    expect(result.status).toBe('success');
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  it('returns error with validation errors for empty fields', async () => {
    const fd = createFormData({ name: '', email: '', phone: '', serviceInterest: '', message: '' });

    const result = await submitContactForm(idleState, fd);
    expect(result.status).toBe('error');
    expect(Object.keys(result.errors).length).toBeGreaterThan(0);
  });

  it('returns error for invalid email', async () => {
    const fd = createFormData({
      name: 'Test',
      email: 'not-an-email',
      phone: '1234567890',
      serviceInterest: 'Diagnostics',
      message: 'Test message here.',
    });

    const result = await submitContactForm(idleState, fd);
    expect(result.status).toBe('error');
    expect(result.errors).toHaveProperty('email');
  });

  it('returns error message when validation fails', async () => {
    const fd = createFormData({ name: '', email: '', phone: '', serviceInterest: '', message: '' });

    const result = await submitContactForm(idleState, fd);
    expect(result.message).toBe('Please fix the errors below.');
  });
});
