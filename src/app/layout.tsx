import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai-Accountant — Your AI-Powered Financial Agent",
  description:
    "Ai-Accountant builds specialized AI agents that automate bookkeeping, reconciliation, and financial reporting for modern businesses.",
  keywords: [
    "AI accountant",
    "financial AI agent",
    "automated bookkeeping",
    "AI accounting software",
  ],
  openGraph: {
    title: "Ai-Accountant — Your AI-Powered Financial Agent",
    description:
      "Specialized AI agents trained on accounting. Automate bookkeeping, reconciliation, and reporting.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#2b1f17]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}