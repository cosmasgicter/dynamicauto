import { describe, it, expect } from 'vitest';
import { submitContactForm, type ContactFormState } from './actions';

const idleState: ContactFormState = {
  status: 'idle',
  errors: {},
  message: '',
};

function makeFormData(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.set(key, value);
  }
  return fd;
}

const validFields = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+27 11 123 4567',
  serviceInterest: 'Mechanical Repairs',
  message: 'I need a full vehicle service please.',
};

describe('submitContactForm', () => {
  it('returns success for valid form data', async () => {
    const result = await submitContactForm(idleState, makeFormData(validFields));
    expect(result.status).toBe('success');
    expect(result.errors).toEqual({});
    expect(result.message).toContain('Thank you');
  });

  it('returns error with validation errors for empty fields', async () => {
    const result = await submitContactForm(
      idleState,
      makeFormData({ name: '', email: '', phone: '', serviceInterest: '', message: '' })
    );
    expect(result.status).toBe('error');
    expect(result.message).toBe('Please fix the errors below.');
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.phone).toBeDefined();
    expect(result.errors.serviceInterest).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  it('returns error for invalid email only', async () => {
    const result = await submitContactForm(
      idleState,
      makeFormData({ ...validFields, email: 'not-an-email' })
    );
    expect(result.status).toBe('error');
    expect(result.errors.email).toBeDefined();
    expect(result.errors.name).toBeUndefined();
  });

  it('returns error for short message', async () => {
    const result = await submitContactForm(
      idleState,
      makeFormData({ ...validFields, message: 'Hi' })
    );
    expect(result.status).toBe('error');
    expect(result.errors.message).toBeDefined();
  });
});
