"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-navy/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* Left hexagon */}
              <path
                d="M8 14 L16 8 L24 14 L24 24 L16 30 L8 24 Z"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="2.5"
                className="group-hover:stroke-cyan-light transition-colors duration-300"
              />
              {/* Right hexagon */}
              <path
                d="M16 14 L24 8 L32 14 L32 24 L24 30 L16 24 Z"
                fill="none"
                stroke="url(#logoGrad2)"
                strokeWidth="2.5"
                className="group-hover:stroke-cyan transition-colors duration-300"
              />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="logoGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-navy">
            LYNK <span className="font-medium text-slate">SYSTEMS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                pathname === link.href
                  ? "text-cyan"
                  : "text-slate hover:text-navy"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-navy/20 active:scale-[0.97]"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    pathname === link.href
                      ? "text-cyan bg-cyan/5"
                      : "text-slate hover:text-navy hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-4 py-3 bg-navy text-white text-sm font-semibold rounded-xl text-center cursor-pointer"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
