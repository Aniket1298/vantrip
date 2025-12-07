"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Temples", href: "/temples" },
    { name: "Boat Rides", href: "/boat-rides" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "glass py-3 border-neutral-200/50 shadow-sm"
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpeg"
              alt="TimelessKashi Logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <span className="text-2xl font-bold font-serif tracking-tight text-neutral-900 group-hover:text-[#d97706] transition-colors">
              Timeless<span className="text-[#d97706]">Kashi</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-800 hover:text-[#d97706] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d97706] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#d97706] text-white rounded-full text-sm font-semibold hover:bg-[#b45309] transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fffbf2] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-neutral-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-[#d97706] text-white rounded-full text-lg font-semibold shadow-lg mx-auto inline-block"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}