"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth-context";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <>
      <Navbar user={user} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}