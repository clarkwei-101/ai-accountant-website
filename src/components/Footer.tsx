import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { name: "Ai Agent", href: "/project" },
      { name: "Download", href: "/download" },
      { name: "Customers", href: "#customers" },
      { name: "Demo", href: "#demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "License", href: "/license" },
      { name: "Contact", href: "mailto:hello@ai-accountant.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#4a3728]/10 bg-[#faf6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg text-[#2b1f17]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#4a3728] text-white font-mono text-sm">
                A
              </span>
              <span>Ai-Accountant</span>
            </Link>
            <p className="mt-4 text-sm text-[#4a3728]/70 max-w-xs leading-relaxed">
              Specialized AI accountants that work on your live books — automate
              reconciliation, reporting, and month-end close.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-wider text-[#4a3728]/60 font-medium">
                {c.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#2b1f17] hover:text-[#4a3728] transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#4a3728]/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#4a3728]/60">
          <p>© 2026 Ai-Accountant, Inc. All rights reserved.</p>
          <p>hello@ai-accountant.com</p>
        </div>
      </div>
    </footer>
  );
}