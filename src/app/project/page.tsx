import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import {
  ArrowRight,
  Database,
  Cpu,
  Network,
  GitBranch,
  Layers,
  ShieldCheck,
  Eye,
} from "lucide-react";

const architecture = [
  {
    icon: Database,
    title: "1. Live general ledger",
    body: "Your books — Stripe, QuickBooks, NetSuite, or raw CSVs — feed the agent in real time. No stale copies. Every number is cited.",
  },
  {
    icon: Cpu,
    title: "2. Trained-on-accounting models",
    body: "A blend of frontier LLMs and our own models fine-tuned on 10 years of close cycles by chartered accountants.",
  },
  {
    icon: GitBranch,
    title: "3. Workflow agents",
    body: "Specialized agents for reconciliation, accruals, flux, revenue recognition, and AR. Each can be configured in plain English.",
  },
  {
    icon: Network,
    title: "4. Connect anywhere",
    body: "Surface the agent in Salesforce, Slack, Snowflake, or any BI tool via our MCP-compatible API.",
  },
];

const principles = [
  {
    icon: Eye,
    title: "Transparent by default",
    body: "Every action the agent takes is logged with a reason. Your team can audit any number back to the source document.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    body: "The agent drafts. Humans approve. You set the thresholds, the rules, and the exceptions — never the other way around.",
  },
  {
    icon: Layers,
    title: "Built for the close",
    body: "We don't optimize for chat UX. We optimize for the moment your CFO asks \"how did we get this number?\"",
  },
];

export default function ProjectPage() {
  return (
    <SiteShell>
      <section className="pt-12 pb-20 bg-gradient-to-b from-white to-[#faf6f1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[#4a3728]/70 hover:text-[#2b1f17]"
          >
            ← Back to home
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            The Project — Deep dive
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-tight">
            An AI accountant that respects the audit trail.
          </h1>
          <p className="mt-5 text-lg text-[#4a3728]/80 leading-relaxed">
            Most AI tools are chatbots. Ai-Accountant is a system of specialized
            agents that work against your live general ledger — drafts journal
            entries, reconciles bank lines, drafts flux analyses, and closes the
            month — while your team keeps full control.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <p className="text-3xl font-semibold text-[#2b1f17]">98.2%</p>
              <p className="text-xs text-[#4a3728]/70 mt-1">
                Average auto-match rate on bank reconciliation
              </p>
            </div>
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <p className="text-3xl font-semibold text-[#2b1f17]">−9 days</p>
              <p className="text-xs text-[#4a3728]/70 mt-1">
                Median reduction in month-end close time
              </p>
            </div>
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <p className="text-3xl font-semibold text-[#2b1f17]">100%</p>
              <p className="text-xs text-[#4a3728]/70 mt-1">
                Every action reviewable with a sourced audit trail
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            Architecture
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#2b1f17]">
            How the agent is built.
          </h2>
          <p className="mt-4 text-[#4a3728]/80 leading-relaxed max-w-2xl">
            Four layers. One purpose: turn raw transactions into closed-out
            financial statements that you can defend.
          </p>

          <div className="mt-12 space-y-4">
            {architecture.map((a, i) => (
              <div
                key={a.title}
                className="flex gap-6 rounded-2xl border border-[#4a3728]/10 p-6 bg-[#faf6f1]"
              >
                <span className="shrink-0 h-12 w-12 rounded-xl bg-white border border-[#4a3728]/10 flex items-center justify-center font-mono text-sm text-[#c8a882]">
                  {i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <a.icon size={18} className="text-[#4a3728]" />
                    <h3 className="font-semibold text-[#2b1f17]">{a.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-[#4a3728]/80 leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf6f1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            Principles
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#2b1f17]">
            What we will never compromise on.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-[#4a3728]/10 p-6"
              >
                <p.icon size={22} className="text-[#4a3728]" />
                <h3 className="mt-5 font-semibold text-[#2b1f17]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[#4a3728]/80 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors"
            >
              Start free trial <ArrowRight size={16} />
            </Link>
            <p className="mt-3 text-xs text-[#4a3728]/60">
              14 days free · No credit card required
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}