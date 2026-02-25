'use client';

import { useActionState, useState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { SERVICES } from '@/lib/constants';
import { validateField } from '@/lib/validation';

const initialState: ContactFormState = {
  status: 'idle',
  errors: {},
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors((prev) => {
      if (error) return { ...prev, [name]: error };
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  // Merge client-side blur errors with server-returned errors
  const errors = { ...fieldErrors, ...state.errors };

  if (state.status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
        <svg className="mx-auto mb-4 h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {state.status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
          {state.message || 'Something went wrong. Please try again.'}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-das-gray-700 mb-1">
          Name <span className="text-das-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onBlur={handleBlur}
          className="w-full rounded-lg border border-das-gray-300 px-4 py-3 text-das-gray-900 placeholder-das-gray-400 transition-colors focus:border-das-accent focus:outline-none focus:ring-1 focus:ring-das-accent"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-das-accent">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-das-gray-700 mb-1">
          Email <span className="text-das-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onBlur={handleBlur}
          className="w-full rounded-lg border border-das-gray-300 px-4 py-3 text-das-gray-900 placeholder-das-gray-400 transition-colors focus:border-das-accent focus:outline-none focus:ring-1 focus:ring-das-accent"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-das-accent">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-das-gray-700 mb-1">
          Phone <span className="text-das-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          onBlur={handleBlur}
          className="w-full rounded-lg border border-das-gray-300 px-4 py-3 text-das-gray-900 placeholder-das-gray-400 transition-colors focus:border-das-accent focus:outline-none focus:ring-1 focus:ring-das-accent"
          placeholder="Your phone number"
        />
        {errors.phone && <p className="mt-1 text-sm text-das-accent">{errors.phone}</p>}
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-das-gray-700 mb-1">
          Service Interest <span className="text-das-accent">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          onBlur={handleBlur}
          defaultValue=""
          className="w-full rounded-lg border border-das-gray-300 px-4 py-3 text-das-gray-900 transition-colors focus:border-das-accent focus:outline-none focus:ring-1 focus:ring-das-accent"
        >
          <option value="" disabled>Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.serviceInterest && <p className="mt-1 text-sm text-das-accent">{errors.serviceInterest}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-das-gray-700 mb-1">
          Message <span className="text-das-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          onBlur={handleBlur}
          className="w-full rounded-lg border border-das-gray-300 px-4 py-3 text-das-gray-900 placeholder-das-gray-400 transition-colors focus:border-das-accent focus:outline-none focus:ring-1 focus:ring-das-accent resize-y"
          placeholder="How can we help you?"
        />
        {errors.message && <p className="mt-1 text-sm text-das-accent">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-das-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-das-accent-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
