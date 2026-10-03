"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { SiteShell } from "@/components/SiteShell";
import { ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const r = await signIn(email, password);
    setSubmitting(false);
    if (!r.ok) setError(r.error || "Login failed");
    else router.push("/download");
  };

  return (
    <SiteShell>
      <section className="flex-1 flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-[#faf6f1] min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-white border border-[#4a3728]/10 card-shadow p-8">
            <h1 className="text-2xl font-semibold text-[#2b1f17] tracking-tight">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-[#4a3728]/70">
              Log in to download the Ai-Accountant desktop agent.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#4a3728] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-11 rounded-lg border border-[#4a3728]/15 bg-white px-3 text-sm text-[#2b1f17] placeholder:text-[#4a3728]/40 focus:border-[#4a3728] focus:outline-none focus:ring-2 focus:ring-[#4a3728]/10"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4a3728] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 rounded-lg border border-[#4a3728]/15 bg-white px-3 text-sm text-[#2b1f17] placeholder:text-[#4a3728]/40 focus:border-[#4a3728] focus:outline-none focus:ring-2 focus:ring-[#4a3728]/10"
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-11 rounded-lg bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Log in <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-[#4a3728]/70 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-[#4a3728] font-medium hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-[#4a3728]/50">
            By continuing you agree to our{" "}
            <Link href="/license" className="hover:underline">
              Terms
            </Link>{" "}
            and Privacy Policy.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}