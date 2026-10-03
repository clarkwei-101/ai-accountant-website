import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { Project } from "@/components/Project";
import { Customers } from "@/components/Customers";
import { Demo } from "@/components/Demo";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Project />
      <Customers />
      <Demo />
      <About />
      <CTA />
    </SiteShell>
  );
}