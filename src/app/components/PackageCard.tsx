"use client";

import React from "react";
import Link from "next/link";

export default function PackageCard({
  title,
  pricePerPerson,
  days,
  summary,
}: {
  title: string;
  pricePerPerson: number;
  days: number;
  summary: string;
}) {
  return (
  <div className="rounded-lg border border-neutral-200 p-4 shadow-md bg-white">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{summary}</p>
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="text-sm text-neutral-500">{days} days</div>
          <div className="text-xl sm:text-2xl font-bold">₹{pricePerPerson.toLocaleString()}</div>
          <div className="text-xs text-neutral-500">per person</div>
        </div>
        <div>
          <Link href="#book" className="w-full sm:w-auto block text-center rounded-md bg-[#be6b00] px-3 py-2 text-white">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
