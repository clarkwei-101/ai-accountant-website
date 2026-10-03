import {
  Building2,
  Calculator,
  Briefcase,
  LineChart,
  ShoppingCart,
  Layers,
} from "lucide-react";

const targets = [
  {
    icon: Building2,
    title: "Scaling SaaS",
    body: "Series A → pre-IPO. Outgrowing QuickBooks, tired of NetSuite.",
    metric: "$5M–$200M ARR",
  },
  {
    icon: Calculator,
    title: "Accounting firms",
    body: "Run monthly close for 20+ clients without scaling headcount.",
    metric: "10+ clients/analyst",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce brands",
    body: "Multi-channel revenue, refunds, COGS, marketplace fees — reconciled.",
    metric: "Shopify · Amazon · Stripe",
  },
  {
    icon: Briefcase,
    title: "Founder-led teams",
    body: "Need real books but can't afford a controller. The agent is yours.",
    metric: "5–50 employees",
  },
  {
    icon: LineChart,
    title: "Fintech & crypto",
    body: "Complex revenue, on-chain flows, ASC 606 waterfalls, MiCA reporting.",
    metric: "Web3-native",
  },
  {
    icon: Layers,
    title: "Multi-entity groups",
    body: "Currency revaluations, intercompany journals, consolidated reporting.",
    metric: "Up to 50 entities",
  },
];

export function Customers() {
  return (
    <section
      id="customers"
      className="py-24 bg-gradient-to-b from-white to-[#faf6f1]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a882] font-medium">
            Built for
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1f17] text-balance leading-tight">
            The teams who actually close the books.
          </h2>
          <p className="mt-5 text-lg text-[#4a3728]/80 leading-relaxed">
            From a founder watching their runway, to a controller running
            multi-entity consolidation — the agent adapts to the way your team
            works.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((t) => (
            <div
              key={t.title}
              className="group p-8 bg-white rounded-2xl card-shadow border border-[#4a3728]/8 hover:border-[#c8a882]/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <t.icon
                  className="text-[#4a3728] group-hover:text-[#c8a882] transition-colors"
                  size={26}
                />
                <span className="text-xs font-mono text-[#4a3728]/60 px-2 py-1 rounded bg-[#faf6f1] border border-[#4a3728]/10">
                  {t.metric}
                </span>
              </div>
              <h3 className="mt-6 font-semibold text-[#2b1f17] text-lg">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-[#4a3728]/70 leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}