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
  title: "AI Countant — The accountant that never closes",
  description:
    "The accountant that never closes. Money moves, and AI Countant posts the debit and credit the same second. Your balance sheet, income statement and cash flow stay correct every morning, period-end runs itself, and Hong Kong profits tax is calculated from the same ledger.",
  keywords: [
    "AI accountant",
    "AI Countant",
    "financial AI agent",
    "automated bookkeeping",
    "AI accounting software",
    "Hong Kong tax",
  ],
  openGraph: {
    title: "AI Countant — The accountant that never closes",
    description:
      "The accountant that never closes. Money moves, and AI Countant posts the debit and credit the same second. Your balance sheet, income statement and cash flow stay correct every morning, period-end runs itself, and Hong Kong profits tax is calculated from the same ledger.",
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