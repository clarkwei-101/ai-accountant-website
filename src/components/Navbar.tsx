"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Project", href: "/project" },
  { name: "Customers", href: "#customers" },
  { name: "Demo", href: "#demo" },
  { name: "About", href: "#about" },
  { name: "License", href: "/license" },
];

export function Navbar({ user = null as null | { email: string } }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#4a3728]/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-[#2b1f17]"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#4a3728] text-white font-mono text-sm">
            A
          </span>
          <span className="tracking-tight">Ai-Accountant</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.name}>
              <Link
                href={l.href}
                className="text-sm text-[#4a3728]/80 hover:text-[#2b1f17] transition-colors"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/download"
                className="text-sm text-[#4a3728]/80 hover:text-[#2b1f17] transition-colors"
              >
                Download
              </Link>
              <div className="h-8 w-8 rounded-full bg-[#4a3728] text-white flex items-center justify-center text-xs font-medium">
                {user.email[0].toUpperCase()}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-[#4a3728]/80 hover:text-[#2b1f17] transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-10 px-4 rounded-full bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors items-center"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-[#2b1f17]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[#4a3728]/10 bg-white">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="block text-sm text-[#4a3728]/80"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-[#4a3728]/10 flex flex-col gap-2">
              {user ? (
                <Link
                  href="/download"
                  className="text-sm text-[#4a3728]"
                  onClick={() => setOpen(false)}
                >
                  Download
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm text-[#4a3728]"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex h-10 px-4 rounded-full bg-[#4a3728] text-white text-sm font-medium items-center justify-center"
                    onClick={() => setOpen(false)}
                  >
                    Get started
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}