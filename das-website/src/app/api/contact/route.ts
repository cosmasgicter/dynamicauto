import { NextResponse } from 'next/server';
import { validateForm, type ContactFormData } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData;

    const data: ContactFormData = {
      name: body.name ?? '',
      email: body.email ?? '',
      phone: body.phone ?? '',
      serviceInterest: body.serviceInterest ?? '',
      message: body.message ?? '',
    };

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { status: 'error', errors: validationErrors, message: 'Please fix the errors below.' },
        { status: 400 }
      );
    }

    await sendContactEmail(data);

    return NextResponse.json(
      { status: 'success', errors: {}, message: 'Thank you for contacting DAS! We will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API contact form error:', error);
    return NextResponse.json(
      { status: 'error', errors: {}, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
