import Link from "next/link";
import {
  BookCheck,
  Bot,
  CalendarClock,
  FileSpreadsheet,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BookCheck,
    title: "Automated bookkeeping",
    body: "Categorize transactions, post journal entries, and reconcile accounts in seconds — reviewable by your team before they hit the GL.",
  },
  {
    icon: Workflow,
    title: "End-to-end reconciliation",
    body: "Match bank lines, payment processors, and sub-ledgers automatically. The agent flags only the exceptions that need you.",
  },
  {
    icon: FileSpreadsheet,
    title: "Real-time reporting",
    body: "Live P&L, balance sheet, and cash flow that update as entries post. Drill down to any number without leaving your browser.",
  },
  {
    icon: CalendarClock,
    title: "Month-end close, automated",
    body: "Flux analysis, accruals, and close checklist drafted by an agent trained on your books. Cut close from 12 days to under 3.",
  },
  {
    icon: LineChart,
    title: "Forecasting & scenario planning",
    body: "Ask the agent to model hiring plans, revenue scenarios, or runway — answers grounded in your actual GL.",
  },
  {
    icon: Sparkles,
    title: "Natural language queries",
    body: 'Ask "How much runway at current spend?" Get a number you can cite, sourced from the books, not a guess.',
  },
  {
    icon: ShieldCheck,
    title: "Audit trail by default",
    body: "Every action reviewable. Every change with a reason. Every entry traceable back to source documents.",
  },
  {
    icon: Bot,
    title: "Always-on monitoring",
    body: "The agent watches for anomalies and proposes corrections as they happen — before they become close-week fires.",
  },
];

export function Project() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            The AI Countant Agent
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-tight">
            One agent. Every workflow a finance team runs.
          </h2>
          <p className="mt-5 text-lg text-[#4a3728]/80 leading-relaxed">
            A specialized AI accountant that works against your live general
            ledger — not a stale copy. Built by accountants, for accountants,
            and the founders who need their books closed on time.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#4a3728]/8 rounded-2xl overflow-hidden border border-[#4a3728]/8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 group hover:bg-[#faf6f1] transition-colors"
            >
              <f.icon
                className="text-[#4a3728] group-hover:text-[#c8a882] transition-colors"
                size={22}
              />
              <h3 className="mt-5 font-semibold text-[#2b1f17]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#4a3728]/70 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#faf6f1] border border-[#4a3728]/8">
          <p className="text-[#2b1f17] text-sm">
            <span className="font-medium">Ready to see it on your books?</span>{" "}
            <span className="text-[#4a3728]/70">
              Read the technical deep-dive on our Project page.
            </span>
          </p>
          <Link
            href="/project"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors"
          >
            Read the deep-dive
          </Link>
        </div>
      </div>
    </section>
  );
}