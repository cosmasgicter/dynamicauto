export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

export const contactFormSchema: Record<keyof ContactFormData, ValidationRule[]> = {
  name: [
    { required: true, message: 'Name is required' },
    { minLength: 2, message: 'Name must be at least 2 characters' },
  ],
  email: [
    { required: true, message: 'Email is required' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
  ],
  phone: [
    { required: true, message: 'Phone number is required' },
    { pattern: /^[\d\s\-+()]{7,20}$/, message: 'Please enter a valid phone number' },
  ],
  serviceInterest: [
    { required: true, message: 'Please select a service' },
  ],
  message: [
    { required: true, message: 'Message is required' },
    { minLength: 10, message: 'Message must be at least 10 characters' },
    { maxLength: 2000, message: 'Message must be under 2000 characters' },
  ],
};

export function validateField(field: string, value: string): string | null {
  const rules = contactFormSchema[field as keyof ContactFormData];
  if (!rules) return null;

  for (const rule of rules) {
    if (rule.required && !value.trim()) {
      return rule.message;
    }
    if (rule.minLength !== undefined && value.trim().length < rule.minLength) {
      return rule.message;
    }
    if (rule.maxLength !== undefined && value.trim().length > rule.maxLength) {
      return rule.message;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }
  }

  return null;
}

export function validateForm(data: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  for (const field of Object.keys(contactFormSchema) as (keyof ContactFormData)[]) {
    const error = validateField(field, data[field]);
    if (error) {
      errors[field] = error;
    }
  }

  return errors;
}
