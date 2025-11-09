"use client";

import React, { useState } from "react";

export default function BookingForm({ pricePerPerson }: { pricePerPerson: number }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pickupDetails, setPickupDetails] = useState("");
  const [error, setError] = useState<string | null>(null);

  const total = pricePerPerson * travellers;

  const validate = () => {
    const e: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number";
    return e;
  };

  const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const e = validate();
    setErrors(e);
    setError(null);

    if (Object.keys(e).length === 0) {
      setSubmitting(true);
      try {
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            travellers,
            pickupDetails,
            pricePerPerson
          })
        });

        if (!response.ok) {
          throw new Error('Failed to submit booking');
        }

        setSubmitted(true);
        // Clear form
        setName('');
        setEmail('');
        setPhone('');
        setPickupDetails('');
        setTravellers(1);
      } catch (error) {
        setError('Failed to submit booking. Please try again.');
        setSubmitted(false);
      } finally {
        setSubmitting(false);
      }
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form id="book" onSubmit={onSubmit} className="rounded-lg border border-neutral-200 p-4 bg-white shadow-md space-y-3">
      <h4 className="text-lg font-semibold">Book this package</h4>

      <div>
        <label className="block text-sm">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border px-2 py-2 mt-1"
          required
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border px-2 py-2 mt-1"
          type="email"
          required
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
      </div>

      <div>
        <label className="block text-sm">Phone number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="e.g. +91 98765 43210"
          className="w-full rounded border px-2 py-2 mt-1"
          required
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
      </div>

      <div>
        <label className="block text-sm">Travellers</label>
        <input
          type="number"
          min={1}
          value={travellers}
          onChange={(e) => setTravellers(Number(e.target.value))}
          className="w-full sm:w-24 rounded border px-2 py-2 mt-1"
        />
      </div>

      <div className="text-sm">
        <div>Price per person: <strong>₹{pricePerPerson.toLocaleString()}</strong></div>
        <div>Total: <strong>₹{total.toLocaleString()}</strong></div>
      </div>

      <div>
        <label className="block text-sm">Pickup details</label>
        <input 
          value={pickupDetails}
          onChange={(e) => setPickupDetails(e.target.value)}
          placeholder="Flight number / train" 
          className="w-full rounded border px-2 py-1 mt-1" 
        />
      </div>

      <div className="flex">
        <button 
          type="submit" 
          disabled={submitting}
          className={`w-full rounded-md border px-3 py-2 text-neutral-700 ${
            submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-50'
          }`}
        >
          {submitting ? 'Submitting...' : 'Request callback'}
        </button>
      </div>

      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
  {submitted && <div className="text-green-700 text-sm mt-2">Request submitted &mdash; we&apos;ll get back to you soon.</div>}
    </form>
  );
}
