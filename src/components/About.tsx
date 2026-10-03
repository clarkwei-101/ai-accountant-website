import { Award, Globe, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Finance-first, not AI-first",
    body: "Every feature is reviewed by a chartered accountant before it ships. We don't move fast and break books.",
  },
  {
    icon: Globe,
    title: "Works on the books you already have",
    body: "No migration. The agent plugs into your existing GL and the tools your team already uses.",
  },
  {
    icon: Award,
    title: "Trust is the product",
    body: "Every number is sourced. Every action is reviewable. We earn trust one reconciled transaction at a time.",
  },
  {
    icon: Sparkles,
    title: "Built for the close",
    body: "We're not building a chatbot. We're building the agent that closes your month — and proves it.",
  },
];

const stats = [
  { value: "2026", label: "Founded" },
  { value: "12", label: "Accountants on team" },
  { value: "$8M", label: "Seed round" },
  { value: "NYC", label: "Headquarters" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
              About Ai-Accountant
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-tight">
              We&apos;re building the accountant we never had.
            </h2>
            <p className="mt-5 text-lg text-[#4a3728]/80 leading-relaxed">
              Ai-Accountant was started by a team of chartered accountants and ML
              engineers who were tired of watching great founders fly blind
              because the books took 12 days to close. We built an agent that
              actually understands debits and credits — and respects the audit
              trail.
            </p>
            <p className="mt-4 text-[#4a3728]/80 leading-relaxed">
              Today, we&apos;re a remote-first team across New York, London, and
              Singapore, working with founders and finance leaders who want
              their numbers to be a source of confidence, not anxiety.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#4a3728]/8 rounded-xl overflow-hidden border border-[#4a3728]/8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-5">
                  <p className="text-2xl font-semibold text-[#2b1f17]">
                    {s.value}
                  </p>
                  <p className="text-xs text-[#4a3728]/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-[#faf6f1] border border-[#4a3728]/8 p-8">
              <h3 className="text-sm uppercase tracking-wider text-[#4a3728]/60 font-medium">
                What we believe
              </h3>
              <div className="mt-6 space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <span className="shrink-0 h-10 w-10 rounded-lg bg-white border border-[#4a3728]/10 flex items-center justify-center">
                      <v.icon size={18} className="text-[#4a3728]" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#2b1f17]">
                        {v.title}
                      </h4>
                      <p className="text-sm text-[#4a3728]/70 leading-relaxed mt-1">
                        {v.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}