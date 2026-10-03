"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const chapters = [
  {
    time: "00:00",
    title: "Connect your GL",
    body: "Plug in Stripe, QuickBooks, or your bank. The agent indexes your live ledger in under 60 seconds.",
  },
  {
    time: "00:30",
    title: "Ask anything",
    body: "Type \"What's our runway at current burn?\" — get a cited answer, not a hallucination.",
  },
  {
    time: "01:15",
    title: "Run reconciliation",
    body: "The agent matches 98% of bank lines. You review the 12 exceptions in one queue.",
  },
  {
    time: "02:00",
    title: "Close the month",
    body: "Flux analysis, accruals, and the close checklist — drafted, sourced, and ready for your review.",
  },
];

export function Demo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            See it in action
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-tight">
            Two minutes from connect to close.
          </h2>
          <p className="mt-5 text-lg text-[#4a3728]/80 leading-relaxed">
            Watch the agent take a real ledger from raw transactions to a
            closed-out month — with every step reviewable by a human.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-[#4a3728]/15 card-shadow-lg bg-[#2b1f17] aspect-video group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a3728] via-[#2b1f17] to-[#4a3728]" />
            <div className="absolute inset-0 grid-bg opacity-10" />

            {!playing && (
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play demo video"
                className="absolute inset-0 flex items-center justify-center group/play"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-24 w-24 rounded-full bg-white/15 backdrop-blur flex items-center justify-center group-hover/play:scale-110 transition-transform">
                    <span className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                      <Play
                        size={22}
                        className="text-[#2b1f17] translate-x-0.5"
                        fill="#2b1f17"
                      />
                    </span>
                  </span>
                </span>
                <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-sm font-medium">
                    Ai-Accountant — Product demo
                  </span>
                  <span className="text-xs text-white/60 font-mono">02:14</span>
                </span>
              </button>
            )}

            {playing && (
              <div className="absolute inset-0 flex items-center justify-center text-white/80">
                <div className="text-center">
                  <div className="h-12 w-12 mx-auto rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  <p className="mt-4 text-sm">
                    Demo streaming... (placeholder)
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-3">
            {chapters.map((c, i) => (
              <button
                key={c.time}
                onClick={() => setPlaying(true)}
                className="w-full text-left p-5 rounded-xl border border-[#4a3728]/8 bg-white hover:border-[#c8a882]/60 hover:bg-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#c8a882] bg-[#faf6f1] border border-[#4a3728]/10 px-2 py-1 rounded">
                    {c.time}
                  </span>
                  <span className="text-xs text-[#4a3728]/50">
                    Chapter {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-[#2b1f17]">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-[#4a3728]/70 leading-relaxed">
                  {c.body}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}