import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#4a3728] via-[#3a2a1d] to-[#2b1f17] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#c8a882]/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-balance leading-tight">
          One step closer to zero-day close.
        </h2>
        <p className="mt-5 text-lg text-[#e8d5b7]/80 max-w-2xl mx-auto">
          Faster close, fewer spreadsheets, real-time data. Start a 14-day free
          trial — no credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center h-12 px-6 rounded-full bg-white text-[#2b1f17] text-sm font-medium hover:bg-[#e8d5b7] transition-colors"
          >
            Start free trial
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center h-12 px-6 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            See it in action
          </Link>
        </div>
      </div>
    </section>
  );
}