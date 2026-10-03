"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { SiteShell } from "@/components/SiteShell";
import { Apple, Monitor, Download, ShieldCheck, Lock } from "lucide-react";

const platforms = [
  {
    id: "macos",
    icon: Apple,
    label: "Download for macOS",
    sub: "Universal · Apple Silicon & Intel",
    file: "Ai-Accountant-1.0.0-mac.dmg",
    size: "84 MB",
  },
  {
    id: "windows",
    icon: Monitor,
    label: "Download for Windows",
    sub: "Windows 10/11 · x64",
    file: "Ai-Accountant-1.0.0-windows.exe",
    size: "78 MB",
  },
];

export default function DownloadPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [downloaded, setDownloaded] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <SiteShell>
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="h-8 w-8 rounded-full border-2 border-[#4a3728]/30 border-t-[#4a3728] animate-spin" />
        </div>
      </SiteShell>
    );
  }

  const handleDownload = (id: string) => {
    setDownloaded(id);
  };

  return (
    <SiteShell>
      <section className="flex-1 py-16 bg-gradient-to-b from-white to-[#faf6f1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-[#4a3728]/10 card-shadow p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
                <ShieldCheck size={18} className="text-emerald-700" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-700 font-medium">
                  Authenticated
                </p>
                <p className="text-sm text-[#2b1f17] font-medium">
                  Signed in as {user.email}
                </p>
              </div>
            </div>

            <h1 className="mt-8 text-3xl sm:text-4xl font-semibold tracking-tight text-[#2b1f17]">
              Download the Ai-Accountant Agent
            </h1>
            <p className="mt-3 text-[#4a3728]/80">
              The agent runs locally on your machine and connects to your books
              over an encrypted channel. Install in under a minute.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {platforms.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-[#4a3728]/15 bg-[#faf6f1] p-6"
                >
                  <p.icon size={28} className="text-[#4a3728]" />
                  <h3 className="mt-4 font-semibold text-[#2b1f17] text-lg">
                    {p.label}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[#4a3728]/60">
                    {p.file} · {p.size}
                  </p>
                  <button
                    onClick={() => handleDownload(p.id)}
                    className="mt-6 w-full h-11 rounded-lg bg-[#4a3728] text-white text-sm font-medium hover:bg-[#2b1f17] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    Download now
                  </button>
                  {downloaded === p.id && (
                    <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-xs text-emerald-700">
                      Placeholder file ready. (Real binary ships in v1.0.)
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-xl bg-[#faf6f1] border border-[#4a3728]/10 p-5">
              <Lock size={18} className="text-[#4a3728] mt-0.5" />
              <div className="text-sm text-[#4a3728]/80 leading-relaxed">
                <strong className="text-[#2b1f17]">
                  Your credentials never leave the device.
                </strong>{" "}
                The agent authenticates via end-to-end encrypted license keys.
                Read the{" "}
                <Link href="/license" className="underline">
                  License & Terms
                </Link>{" "}
                for details.
              </div>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { k: "Install time", v: "≈ 45 seconds" },
              { k: "Disk space", v: "180 MB" },
              { k: "Telemetry", v: "Off by default" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-[#4a3728]/10 bg-white p-5"
              >
                <p className="text-xs text-[#4a3728]/60 uppercase tracking-wider">
                  {s.k}
                </p>
                <p className="mt-2 font-semibold text-[#2b1f17]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}