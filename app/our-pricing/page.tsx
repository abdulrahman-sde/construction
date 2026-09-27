import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, ShieldCheck, ArrowRight, WalletCheck } from "reicon-react";

export const metadata: Metadata = {
  title: "Our Pricing & Packages | Construct Estimates - $50 Single Trade & Monthly Plans",
  description:
    "Explore transparent construction estimating pricing: $50 single-trade takeoffs, mid-sized packages ($199–$500), and monthly dedicated estimator plans saving up to 60% in overhead.",
};

const PRICING_TIERS = [
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
    price: "$199 – $499",
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
      "No long-term binding contract — cancel anytime",
    ],
    ctaText: "Discuss Monthly Partnership",
    popular: false,
  },
];

const VALUE_POINTS = [
  {
    title: "Unparalleled Accuracy",
    description:
      "Every estimate is calibrated with localized RSMeans and Craftsman construction cost databases. We benchmark local zip-code material prices, union and non-union labor wages, and equipment rentals.",
  },
  {
    title: "24–48 Hour Turnaround",
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
            Our mission is simple: provide contractors with highly accurate takeoffs at market-leading rates so you can &ldquo;BID MORE &amp; WIN MORE&rdquo; with zero hidden fees.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Clock size={12} className="text-primary" />
              24–48h Standard Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              Free Minor Reviews Included
            </span>
          </div>
        </div>
      </section>

      {/* 3. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Pricing Cards Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-7 sm:p-8 flex flex-col justify-between space-y-6 bg-card transition-all duration-200 relative ${
                tier.popular
                  ? "border-primary/50 shadow-md ring-1 ring-primary/20"
                  : "border-border shadow-2xs"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Recommended
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
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
                  <span className="text-xs font-mono text-muted-foreground">
                    / {tier.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                  {tier.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded">
                  <Clock size={12} />
                  <span>{tier.turnaround}</span>
                </div>

                <div className="pt-2 space-y-2.5 border-t border-border/60">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
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
                  render={<Link href="/contact-us" />}
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

        {/* Value Proposition Grid */}
        <div className="space-y-8 pt-10 border-t border-border">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="blue" className="text-[10px] font-normal tracking-wide uppercase">
              Our Transparent Pricing Pledge
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Why Contractors Trust Our Estimating Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUE_POINTS.map((vp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-card space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary">0{idx + 1}.</span>
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
        <div className="rounded-xl border border-primary/30 bg-primary/[0.03] dark:bg-primary/[0.05] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
              Special Limited Time Promotion
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Get an Immediate 30% Discount on Your First Project
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Upload your plans or project scope today. We review your drawings, confirm turnaround time, and apply your 30% new client credit automatically.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              render={<Link href="/contact-us" />}
              variant="default"
              size="lg"
              className="gap-2 text-xs font-medium rounded-lg"
            >
              <span>Upload Plans for 30% Off</span>
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
