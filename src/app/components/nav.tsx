"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const MobileLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block text-sm py-2 hover:underline"
    >
      {children}
    </Link>
  );

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
  className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white shadow-sm dark:bg-white dark:border-neutral-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/globe.svg" alt="Varanasi logo" width={28} height={28} />
              <span className="font-medium">Varanasi Trips</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/packages" className="text-sm hover:underline">
              Packages
            </Link>
            <Link href="/temples" className="text-sm hover:underline">
              Temples
            </Link>
            <Link href="/boat-rides" className="text-sm hover:underline">
              Boat Rides
            </Link>
            <Link
              href="/book"
              className="rounded-md bg-[#be6b00] text-white px-3 py-1 text-sm hover:opacity-95"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center rounded-md p-2 text-sm"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden transition-[max-height] duration-200 ease-in-out ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8 flex flex-col gap-1">
          <MobileLink href="/packages">Packages</MobileLink>
          <MobileLink href="/temples">Temples</MobileLink>
          <MobileLink href="/boat-rides">Boat Rides</MobileLink>
          <MobileLink href="/book">
            <span className="font-medium">Book Now</span>
          </MobileLink>
        </div>
      </div>
    </nav>
  );
}
