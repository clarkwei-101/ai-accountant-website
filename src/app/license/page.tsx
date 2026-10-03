import { SiteShell } from "@/components/SiteShell";
import { Lock, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function LicensePage() {
  return (
    <SiteShell>
      <section className="flex-1 py-20 bg-gradient-to-b from-white to-[#faf6f1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-[#4a3728]/10 card-shadow p-10 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#faf6f1] border border-[#4a3728]/10">
              <Lock size={22} className="text-[#4a3728]" />
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-[#2b1f17]">
              License &amp; Terms
            </h1>
            <p className="mt-3 text-[#4a3728]/80 max-w-xl mx-auto">
              Our full license agreement, terms of service, and acceptable use
              policy are being finalized with counsel.
            </p>

            <div className="mt-10 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#4a3728]/10 text-[#4a3728]/60 text-sm font-medium cursor-not-allowed select-none">
              <Lock size={14} />
              View License (Coming soon)
            </div>

            <p className="mt-4 text-xs text-[#4a3728]/50">
              This button is currently disabled while we complete legal review.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <Clock size={18} className="text-[#4a3728]" />
              <h3 className="mt-3 font-semibold text-[#2b1f17] text-sm">
                ETA
              </h3>
              <p className="mt-1 text-xs text-[#4a3728]/70">
                Published once final review completes.
              </p>
            </div>
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <FileText size={18} className="text-[#4a3728]" />
              <h3 className="mt-3 font-semibold text-[#2b1f17] text-sm">
                Scope
              </h3>
              <p className="mt-1 text-xs text-[#4a3728]/70">
                Covers desktop agent, cloud workflows, and API usage.
              </p>
            </div>
            <div className="rounded-xl border border-[#4a3728]/10 bg-white p-5">
              <Lock size={18} className="text-[#4a3728]" />
              <h3 className="mt-3 font-semibold text-[#2b1f17] text-sm">
                Privacy
              </h3>
              <p className="mt-1 text-xs text-[#4a3728]/70">
                Your data never trains third-party models.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-[#4a3728]/70">
            Have questions in the meantime?{" "}
            <Link
              href="mailto:hello@ai-countant.com"
              className="text-[#4a3728] font-medium underline"
            >
              hello@ai-countant.com
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}