import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, ShieldCheck, ArrowRight, Layers, Calendar, Compass } from "reicon-react";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Our Pricing & Packages | Buildcraft360 - Estimating, Planning & Architecture",
  description:
    "Explore transparent pricing across Construction Estimating ($50 single-trade, $199–$399 full packages, monthly plans), Construction Planning & CPM Scheduling, and Architectural Design services.",
};

const ESTIMATION_TIERS = [
  {
    name: "Single Trade Takeoff",
    badge: "Most Popular For Subs",
    price: "$50",
    period: "starting base",
    description:
      "Ideal for trade subcontractors who need an accurate takeoff for a single CSI division before bid closing.",
    turnaround: "24 Hours Delivery",
    features: [
      "Itemized takeoff for 1 specific trade (Drywall, Painting, Flooring, etc.)",
      "Color-coded PDF plan markups with measurements",
      "Editable Excel spreadsheet with material & labor line items",
      "RSMeans 2026 localized zip-code material rates",
      "Free minor scope adjustments & reviews",
    ],
    ctaText: "Get Single Trade Quote",
    popular: false,
  },
  {
    name: "Full Project Package",
    badge: "General Contractors",
    price: "$199 – $399",
    period: "average range",
    description:
      "Comprehensive multi-trade estimation package for residential homes, remodels, and mid-sized commercial builds.",
    turnaround: "24–48 Hours Delivery",
    features: [
      "Multi-division CSI MasterFormat 16-Division takeoff",
      "Structural, framing, finishes, and envelope quantities",
      "Full digital blueprint overlays and area cut-lists",
      "Labor hours, equipment rental & waste allowances",
      "Subcontractor bid comparison worksheets",
      "Priority estimator telephone consultation",
    ],
    ctaText: "Upload Plans for Quote",
    popular: true,
  },
  {
    name: "Dedicated Monthly Estimator",
    badge: "Enterprise & High Volume",
    price: "Custom",
    period: "save up to 60%",
    description:
      "A dedicated, certified cost engineer assigned exclusively to your construction firm without full-time employee overhead.",
    turnaround: "Same-Day & Priority Queue",
    features: [
      "Unlimited project bids & material takeoff requests",
      "Dedicated senior estimator reachable daily via Slack/Phone",
      "All PlanSwift, Bluebeam Revu & RSMeans licenses included",
      "Custom branded bid proposals and BOQ templates",
      "Change order tracking & value engineering support",
      "No long-term binding contract, cancel anytime",
    ],
    ctaText: "Discuss Monthly Partnership",
    popular: false,
  },
];

const PLANNING_TIER = {
  name: "Custom Project Planning & CPM Scheduling",
  badge: "Project Controls & Scheduling",
  price: "Custom",
  period: "tailored to project scope",
  description:
    "Tailored Critical Path Method (CPM) scheduling, Primavera P6 baseline creation, resource allocation, and milestone progress tracking aligned with your contract specifications.",
  turnaround: "24–48 Hours Initial Turnaround",
  features: [
    "Primavera P6 & MS Project compatible native schedule files (.xer, .mpp, PDF)",
    "Critical Path Method (CPM) baseline scheduling & float analysis",
    "Detailed Work Breakdown Structure (WBS) & activity dependency mapping",
    "Resource loading, manpower histograms & cash flow projection curves",
    "Periodic progress updates, lookahead schedules & delay mitigation",
    "Executive schedule narrative document for owner and GC submittals",
  ],
  ctaText: "Request Planning & Scheduling Quote",
};

const ARCHITECTURAL_TIER = {
  name: "Custom Architectural Design & Drafting",
  badge: "Architectural & CAD Services",
  price: "Custom",
  period: "tailored to square footage & scope",
  description:
    "Comprehensive architectural drawing packages, functional floor plan layouts, permit-ready documentation, and photorealistic 3D renderings customized to your build.",
  turnaround: "Fast Turnaround Based on Scope",
  features: [
    "Architectural floor plans, elevations, building sections & wall details",
    "Permit-ready drawing sets compliant with local building codes (IRC / IBC)",
    "Photorealistic 3D interior & exterior renderings & visualizations",
    "Functional space planning, room dimensions & circulation zoning",
    "Coordinated CAD / Revit / DWG source files & high-resolution PDFs",
    "Design revisions & direct consultation with senior architectural designers",
  ],
  ctaText: "Request Architectural Design Quote",
};

const VALUE_POINTS = [
  {
    title: "Unparalleled Accuracy",
    description:
      "Every estimate is calibrated with localized RSMeans and Craftsman construction cost databases. We benchmark local zip-code material prices, union and non-union labor wages, and equipment rentals.",
  },
  {
    title: "24-48 Hour Turnaround",
    description:
      "Construction bidding windows are unforgiving. Over 90% of our single-trade and residential packages are completed and returned to contractors within 24 to 48 hours.",
  },
  {
    title: "No Hidden Charges",
    description:
      "We never surprise you with ancillary fees. Minor plan revisions, addenda updates, and scope reconciliations are completed with zero additional charges.",
  },
  {
    title: "95% Quote Acceptance Rate",
    description:
      "Our pricing is transparent, competitive, and tailored to the exact scale of your drawings. We encourage negotiations to build durable, multi-year contractor partnerships.",
  },
];

export default function OurPricingPage() {
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
            <span className="text-foreground font-normal">Our Pricing</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Transparent &amp; Competitive Rates
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Unlock the Power of Competitive{" "}
            <span className="font-normal text-primary">Pricing</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Transparent pricing tailored for subcontractors, general contractors, developers, and architects. Get fast, reliable estimates, CPM schedules, and architectural packages with zero hidden fees.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Clock size={12} className="text-primary" />
              24–48h Standard Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              Free Minor Reviews Included
            </span>
          </div>

          {/* Quick Category Anchors */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <a
              href="#estimation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors shadow-2xs"
            >
              <Layers size={13} className="text-primary" />
              <span>Construction Estimation</span>
            </a>
            <a
              href="#planning"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors shadow-2xs"
            >
              <Calendar size={13} className="text-primary" />
              <span>Planning &amp; Scheduling</span>
            </a>
            <a
              href="#architectural"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors shadow-2xs"
            >
              <Compass size={13} className="text-primary" />
              <span>Architectural Design</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Pricing Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-24">
        {/* Category 1: Estimation */}
        <section id="estimation" className="space-y-8 scroll-mt-28">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue" className="text-[11px] uppercase tracking-wider font-medium">
                Category 01
              </Badge>
              <span className="text-xs font-sans text-muted-foreground uppercase tracking-wider font-medium">
                Cost Engineering
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-foreground tracking-tight">
              Construction Estimation
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-2xl font-normal leading-relaxed">
              Fast, audit-ready material takeoffs and multi-division estimates calibrated to your regional zip code, available per-trade, per-project, or as an embedded monthly estimator.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {ESTIMATION_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-7 sm:p-8 flex flex-col justify-between space-y-6 relative ${
                  tier.popular
                    ? "border-primary/50 bg-card text-foreground shadow-md ring-1 ring-primary/20"
                    : "border-neutral-200/90 dark:border-neutral-800 bg-card text-foreground shadow-sm"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-sans font-medium px-3 py-0.5 rounded-full shadow-2xs">
                      Most Recommended
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                      {tier.badge}
                    </span>
                    <h3 className="font-serif font-normal text-2xl text-foreground">
                      {tier.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1 border-b border-border/60 pb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-normal text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-xs font-sans text-muted-foreground">
                      / {tier.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-primary bg-primary/10 px-2.5 py-1 rounded">
                    <Clock size={12} />
                    <span>{tier.turnaround}</span>
                  </div>

                  <div className="pt-2 space-y-2.5 border-t border-border/60">
                    <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2 text-xs text-foreground/90 font-sans font-normal">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                    variant={tier.popular ? "default" : "outline"}
                    size="default"
                    className="w-full text-xs font-medium rounded-lg justify-center"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={13} className="ml-1.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2: Planning & Scheduling */}
        <section id="planning" className="space-y-8 pt-6 border-t border-border scroll-mt-28">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue" className="text-[11px] uppercase tracking-wider font-medium">
                Category 02
              </Badge>
              <span className="text-xs font-sans text-muted-foreground uppercase tracking-wider font-medium">
                Project Controls &amp; Scheduling
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-foreground tracking-tight">
              Construction Planning &amp; Scheduling
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-2xl font-normal leading-relaxed">
              Execution-ready CPM schedules, Primavera P6 baseline creation, delay analysis, and periodic progress tracking tailored directly to your project specifications.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card text-foreground shadow-sm p-7 sm:p-9 space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    {PLANNING_TIER.badge}
                  </span>
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl text-foreground">
                    {PLANNING_TIER.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 pt-1 border-b border-border/60 pb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-normal text-foreground">
                    {PLANNING_TIER.price}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground">
                    / {PLANNING_TIER.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                  {PLANNING_TIER.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-primary bg-primary/10 px-2.5 py-1 rounded">
                  <Clock size={12} />
                  <span>{PLANNING_TIER.turnaround}</span>
                </div>

                <div className="pt-2 space-y-3 border-t border-border/60">
                  <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    What&apos;s Included:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-foreground/90 font-sans font-normal">
                    {PLANNING_TIER.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                  variant="default"
                  size="default"
                  className="w-full text-xs font-medium rounded-lg justify-center"
                >
                  <span>{PLANNING_TIER.ctaText}</span>
                  <ArrowRight size={13} className="ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Architectural Design */}
        <section id="architectural" className="space-y-8 pt-6 border-t border-border scroll-mt-28">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue" className="text-[11px] uppercase tracking-wider font-medium">
                Category 03
              </Badge>
              <span className="text-xs font-sans text-muted-foreground uppercase tracking-wider font-medium">
                Architectural &amp; CAD Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-foreground tracking-tight">
              Architectural Design &amp; Drafting
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-2xl font-normal leading-relaxed">
              Complete architectural drawing packages, functional floor plan layouts, permit-ready documentation, and photorealistic 3D renderings customized to your build.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card text-foreground shadow-sm p-7 sm:p-9 space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    {ARCHITECTURAL_TIER.badge}
                  </span>
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl text-foreground">
                    {ARCHITECTURAL_TIER.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 pt-1 border-b border-border/60 pb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-normal text-foreground">
                    {ARCHITECTURAL_TIER.price}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground">
                    / {ARCHITECTURAL_TIER.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                  {ARCHITECTURAL_TIER.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-primary bg-primary/10 px-2.5 py-1 rounded">
                  <Clock size={12} />
                  <span>{ARCHITECTURAL_TIER.turnaround}</span>
                </div>

                <div className="pt-2 space-y-3 border-t border-border/60">
                  <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    What&apos;s Included:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-foreground/90 font-sans font-normal">
                    {ARCHITECTURAL_TIER.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                  variant="default"
                  size="default"
                  className="w-full text-xs font-medium rounded-lg justify-center"
                >
                  <span>{ARCHITECTURAL_TIER.ctaText}</span>
                  <ArrowRight size={13} className="ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <div className="space-y-8 pt-10 border-t border-border">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="blue" className="text-xs font-sans font-medium">
              Our Transparent Pricing Pledge
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Why Contractors Trust Our Rates &amp; Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {VALUE_POINTS.map((vp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-card space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-medium text-primary">0{idx + 1}.</span>
                  <h3 className="font-serif font-normal text-lg sm:text-xl text-foreground">
                    {vp.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 30% Off Promotion Banner */}
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] dark:bg-primary/[0.06] text-foreground p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary">
              Special Limited Time Promotion
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Get an Immediate 30% Discount on Your First Project
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Upload your plans, scheduling scope, or architectural brief today. We review your requirements, confirm turnaround time, and apply your 30% new client credit automatically.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="font-medium px-6 shadow-xs gap-2 text-xs rounded-xl"
            >
              <span>Upload Plans via WhatsApp (30% Off)</span>
              <ArrowRight size={13} />
            </Button>
          </div>
        </div>
      </main>

      {/* 5. Contact Section */}
      <ContactSection />

      {/* 6. Pre-Footer Banner */}
      <ServicePreFooterBanner />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
