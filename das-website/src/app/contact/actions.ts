'use server';

import { validateForm, type ContactFormData } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errors: Record<string, string>;
  message: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const data: ContactFormData = {
      name: (formData.get('name') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      phone: (formData.get('phone') as string) ?? '',
      serviceInterest: (formData.get('serviceInterest') as string) ?? '',
      message: (formData.get('message') as string) ?? '',
    };

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      return {
        status: 'error',
        errors: validationErrors as Record<string, string>,
        message: 'Please fix the errors below.',
      };
    }

    await sendContactEmail(data);

    return {
      status: 'success',
      errors: {},
      message: 'Thank you for contacting DAS! We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      status: 'error',
      errors: {},
      message: 'Something went wrong. Please try again later.',
    };
  }
}
