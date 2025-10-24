"use client";

import { useState } from "react";

export default function BookingForm({ pricePerPerson }: { pricePerPerson: number }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travellers, setTravellers] = useState(1);

  const total = pricePerPerson * travellers;

  return (
  <form id="book" className="rounded-lg border border-neutral-200 p-4 bg-white shadow-md space-y-3">
      <h4 className="text-lg font-semibold">Book this package</h4>

      <div>
        <label className="block text-sm">Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-2 py-2 mt-1" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded border px-2 py-2 mt-1" />
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
        <input placeholder="Flight number / train" className="w-full rounded border px-2 py-1 mt-1" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button type="button" className="w-full sm:w-auto rounded-md bg-[#be6b00] px-3 py-2 text-white">Proceed to pay</button>
        <button type="button" className="w-full sm:w-auto rounded-md border px-3 py-2">Request callback</button>
      </div>
    </form>
  );
}
