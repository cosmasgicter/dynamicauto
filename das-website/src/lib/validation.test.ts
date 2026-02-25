import { describe, it, expect } from 'vitest';
import {
  validateField,
  validateForm,
  contactFormSchema,
  type ContactFormData,
} from './validation';

describe('contactFormSchema', () => {
  it('defines rules for all five form fields', () => {
    const fields: (keyof ContactFormData)[] = ['name', 'email', 'phone', 'serviceInterest', 'message'];
    for (const field of fields) {
      expect(contactFormSchema[field]).toBeDefined();
      expect(contactFormSchema[field].length).toBeGreaterThan(0);
    }
  });
});

describe('validateField', () => {
  // Name field
  it('returns error for empty name', () => {
    expect(validateField('name', '')).toBe('Name is required');
  });

  it('returns error for name shorter than 2 characters', () => {
    expect(validateField('name', 'A')).toBe('Name must be at least 2 characters');
  });

  it('returns null for valid name', () => {
    expect(validateField('name', 'John')).toBeNull();
  });

  // Email field
  it('returns error for empty email', () => {
    expect(validateField('email', '')).toBe('Email is required');
  });

  it('returns error for invalid email format', () => {
    expect(validateField('email', 'not-an-email')).toBe('Please enter a valid email address');
  });

  it('returns null for valid email', () => {
    expect(validateField('email', 'test@example.com')).toBeNull();
  });

  // Phone field
  it('returns error for empty phone', () => {
    expect(validateField('phone', '')).toBe('Phone number is required');
  });

  it('returns error for invalid phone format', () => {
    expect(validateField('phone', 'abc')).toBe('Please enter a valid phone number');
  });

  it('returns null for valid phone', () => {
    expect(validateField('phone', '+1 (555) 123-4567')).toBeNull();
  });

  // Service interest field
  it('returns error for empty service interest', () => {
    expect(validateField('serviceInterest', '')).toBe('Please select a service');
  });

  it('returns null for valid service interest', () => {
    expect(validateField('serviceInterest', 'Mechanical Repairs')).toBeNull();
  });

  // Message field
  it('returns error for empty message', () => {
    expect(validateField('message', '')).toBe('Message is required');
  });

  it('returns error for message shorter than 10 characters', () => {
    expect(validateField('message', 'Short')).toBe('Message must be at least 10 characters');
  });

  it('returns error for message exceeding 2000 characters', () => {
    const longMessage = 'a'.repeat(2001);
    expect(validateField('message', longMessage)).toBe('Message must be under 2000 characters');
  });

  it('returns null for valid message', () => {
    expect(validateField('message', 'I need help with my car brakes.')).toBeNull();
  });

  // Unknown field
  it('returns null for unknown field name', () => {
    expect(validateField('unknownField', 'value')).toBeNull();
  });
});

describe('validateForm', () => {
  const validData: ContactFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+27 11 123 4567',
    serviceInterest: 'Mechanical Repairs',
    message: 'I need a full vehicle service please.',
  };

  it('returns empty object for fully valid form data', () => {
    expect(validateForm(validData)).toEqual({});
  });

  it('returns errors for all empty fields', () => {
    const emptyData: ContactFormData = {
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      message: '',
    };
    const errors = validateForm(emptyData);
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.phone).toBeDefined();
    expect(errors.serviceInterest).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it('returns error only for the invalid field', () => {
    const data = { ...validData, email: 'bad-email' };
    const errors = validateForm(data);
    expect(errors.email).toBe('Please enter a valid email address');
    expect(errors.name).toBeUndefined();
    expect(errors.phone).toBeUndefined();
    expect(errors.serviceInterest).toBeUndefined();
    expect(errors.message).toBeUndefined();
  });

  it('returns first error per field (not all errors)', () => {
    const data = { ...validData, message: '' };
    const errors = validateForm(data);
    // Should return "required" error, not "minLength" error
    expect(errors.message).toBe('Message is required');
  });
});
