import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c8a882]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#4a3728]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4a3728]/15 bg-white/80 backdrop-blur px-3 py-1 text-xs text-[#4a3728] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Now in private beta — Join the waitlist
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-[1.05]">
            Offload the busy work.{" "}
            <span className="gradient-text">Keep the control.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#4a3728]/80 max-w-2xl mx-auto leading-relaxed text-balance">
            Specialized AI agents trained on accounting, connected to your live
            general ledger. Not a chatbot — an accountant that actually closes
            the books.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors"
            >
              Get started free
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#4a3728]/20 bg-white text-[#2b1f17] text-sm font-medium hover:border-[#4a3728]/40 transition-colors"
            >
              <Play size={14} className="text-[#4a3728]" />
              Watch demo
            </Link>
          </div>

          <p className="mt-6 text-xs text-[#4a3728]/60">
            Free for 14 days · No credit card required
          </p>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute inset-x-12 -inset-y-6 bg-gradient-to-tr from-[#c8a882]/40 via-[#4a3728]/15 to-[#c8a882]/30 blur-2xl rounded-3xl" />
          <div className="relative rounded-2xl bg-white card-shadow-lg border border-[#4a3728]/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#4a3728]/8 bg-[#faf6f1]">
              <span className="h-3 w-3 rounded-full bg-[#e8d5b7]" />
              <span className="h-3 w-3 rounded-full bg-[#c8a882]" />
              <span className="h-3 w-3 rounded-full bg-[#4a3728]/60" />
              <div className="ml-4 text-xs text-[#4a3728]/60 font-mono">
                ai-accountant.app / dashboard
              </div>
            </div>
            <div className="p-8 grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Reconciliation",
                  value: "98.2%",
                  sub: "Auto-matched",
                  color: "from-emerald-400 to-emerald-600",
                },
                {
                  label: "Month-end close",
                  value: "2.4 days",
                  sub: "From 12 days",
                  color: "from-[#c8a882] to-[#4a3728]",
                },
                {
                  label: "Journal entries",
                  value: "1,284",
                  sub: "Drafted by agent",
                  color: "from-amber-400 to-amber-600",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[#4a3728]/8 p-5 bg-gradient-to-br from-white to-[#faf6f1]"
                >
                  <p className="text-xs text-[#4a3728]/60 uppercase tracking-wider">
                    {s.label}
                  </p>
                  <p
                    className={`mt-2 text-3xl font-semibold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-[#4a3728]/60 mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}