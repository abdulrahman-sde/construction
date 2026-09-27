import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  Clock,
  Check,
  ArrowRight,
  File,
} from "reicon-react";

export const metadata: Metadata = {
  title: "About Us | Construct Estimates - Certified Construction Estimators",
  description:
    "Learn about Construct Estimates: 25+ certified cost estimators, 8,000+ completed projects, and over 700 satisfied contractors across the USA, Canada, and Australia.",
};

const STATS = [
  { value: "8,000+", label: "Projects Estimated" },
  { value: "25+", label: "Certified Estimators" },
  { value: "700+", label: "Active Contractor Clients" },
  { value: "98%+", label: "Bid Accuracy Benchmark" },
];

const VALUE_PILLARS = [
  {
    title: "Delivering Accurate Estimates for Competitive Bids",
    description:
      "With Construct Estimates, you can bid with confidence knowing your numbers are grounded in real-world local market data. Our team of 25 seasoned estimators combines deep construction field experience with PlanSwift and Bluebeam digitizers to eliminate estimating blindspots.",
  },
  {
    title: "Tailored Solutions for Diverse Projects",
    description:
      "Whether you are framing a custom residential estate, managing a multi-story commercial development, or bidding on a TxDOT heavy highway contract, we tailor our CSI MasterFormat takeoffs to your exact trade scope and specification sheets.",
  },
  {
    title: "Your Long-Term Estimating Partner",
    description:
      "We measure our success by the bids our clients win. With a customer retention rate exceeding 90%, we act as an on-demand estimating department for contractors, cutting your pre-construction overhead by up to 60%.",
  },
  {
    title: "Certified Estimators & Zero Hidden Charges",
    description:
      "All takeoffs follow American Association of Cost Engineers (AACE) and Australian Institute of Quantity Surveyors (AIQS) standards. We never charge extra for minor revisions or addenda reviews.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* 1. Global Navigation */}
      <Header />

      {/* 2. Hero Banner */}
      <section className="relative blueprint-subtle-grid py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-slate-50/40 dark:bg-slate-950/20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center space-y-4">
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground font-normal"
          >
            <Link
              href="/"
              className="hover:text-foreground transition-colors duration-150"
            >
              Home
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground font-normal">About Us</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Company Overview &amp; Mission
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Empowering Contractors to Win Projects with{" "}
            <span className="font-normal text-primary">Confidence</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Construct Estimates is revolutionizing the construction bidding process. With over 8,000 completed takeoffs and 15+ years of combined engineering expertise, we provide contractors with the accuracy needed to win more bids and protect their margins.
          </p>
        </div>
      </section>

      {/* 3. Key Numbers Grid */}
      <section className="border-b border-border bg-card py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-normal text-foreground">
                  {s.value}
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Public Trust Credentials */}
      <ProjectsPublicTrustBar />

      {/* 5. Detailed Company Narrative */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Story & Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <Badge variant="blue" className="text-[10px] font-normal tracking-wide uppercase">
                Our Commitment to Excellence
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
                A Reliable Estimating Partner for Construction Companies
              </h2>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              <p>
                At Construct Estimates, our mission is to eliminate estimating uncertainty. Founded by experienced civil engineers and professional quantity surveyors, we recognized that general contractors and trade subcontractors were constantly losing bids due to late submission times or inaccurate takeoffs.
              </p>
              <p>
                We built a centralized engineering team of 25 certified estimators operating across North America and Australia. By leveraging digital takeoff digitizers like Bluebeam Revu and PlanSwift alongside zip-code calibrated RSMeans 2026 data, we deliver audit-ready estimates in as little as 24 to 48 hours.
              </p>
              <p>
                Whether you need a quick single-trade takeoff for concrete framing or a full 16-division CSI MasterFormat bid package for a $20M commercial complex, our team gives you the competitive edge.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-primary" />
                AACE &amp; AIQS Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-primary" />
                24–48h Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-primary" />
                Free Sample Packages
              </span>
            </div>
          </div>

          {/* Visual Blueprint Card */}
          <div className="lg:col-span-6 rounded-2xl border border-border bg-slate-900 text-white p-8 relative overflow-hidden shadow-2xs">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:28px_28px]" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3 py-1 rounded text-xs font-mono text-slate-300">
                <Clock size={12} className="text-primary" />
                <span>On-Demand Estimating Department</span>
              </div>

              <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                Why Contractors Choose Construct Estimates Over In-House Staff
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-normal">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Save up to 60% compared to hiring full-time in-house estimators.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Scale bid volume during peak bidding seasons with zero extra overhead.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Color-coded PDF markups verify every linear foot and square yard visually.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>Continuous customer support and unlimited minor revisions.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  render={<Link href="/contact-us" />}
                  size="default"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs rounded-lg gap-2"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight size={13} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-8 pt-10 border-t border-border">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="blue" className="text-[10px] font-normal tracking-wide uppercase">
              Core Principles
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Built on Precision, Transparency &amp; Speed
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Every takeoff we deliver adheres to rigorous quantity surveying standards to ensure you remain competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl border border-border bg-card space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary">0{idx + 1}.</span>
                  <h3 className="font-serif font-normal text-lg sm:text-xl text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 6. Plan Upload & Contact Form */}
      <ContactSection />

      {/* 7. Pre-Footer Banner */}
      <ServicePreFooterBanner />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
