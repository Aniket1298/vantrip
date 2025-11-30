"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill all required fields');
      return false;
    }
    // Validate phone number is exactly 10 digits
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      setError('Phone number must be exactly 10 digits');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');
      setSubmitted(true);
      setName(''); setEmail(''); setPhone(''); setMessage('');
    } catch (err: unknown) {
      setError(String(err || 'Request failed'));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-neutral-200 p-6 bg-white shadow-md space-y-4 max-w-xl mx-auto">
      <h3 className="text-xl font-bold">Contact Us</h3>
      <div>
        <label className="block text-sm font-medium">Full name <span className="text-red-600">*</span></label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2 mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email <span className="text-red-600">*</span></label>
        <input
          type="email"
          className="w-full rounded border px-3 py-2 mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone <span className="text-red-600">*</span></label>
        <input
          type="tel"
          className="w-full rounded border px-3 py-2 mt-1"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
          placeholder="10-digit mobile number"
          maxLength={10}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message <span className="text-red-600">*</span></label>
        <textarea
          rows={5}
          className="w-full rounded border px-3 py-2 mt-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
      {submitted && <div className="text-green-700 text-sm font-medium">Thanks, we&apos;ll get back to you soon.</div>}
      <button type="submit" disabled={submitting} className="px-6 py-3 bg-[#d97706] text-white rounded-lg font-semibold shadow hover:bg-[#b45309] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
