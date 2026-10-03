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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Clock, ShieldCheck, ArrowRight, CircleInfo } from "reicon-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Construct Estimates",
  description:
    "Find answers to common questions about our construction estimating services: turnaround times, pricing databases (RSMeans, Craftsman), revisions, and deliverables.",
};

const FAQ_CATEGORIES = [
  {
    category: "Pricing & Billing",
    faqs: [
      {
        question: "How much does it cost to get an estimate from Construct Estimates?",
        answer:
          "At Construct Estimates, every quote is calibrated to the scope and size of your drawings. For smaller, single-trade projects that take a few hours to quantify, our pricing starts at $50. Mid-sized residential homes or commercial renovations fall in the $199 to $500 range, while larger ground-up commercial and civil projects are usually $800 or more. You can upload plans for a free, exact quote with 30% new client credit applied.",
      },
      {
        question: "Where do you get your material, labor, and equipment prices from?",
        answer:
          "Our cost data is powered by the Craftsman National Construction Estimator Database Suite and RSMeans Data 2026. These databases are updated continuously throughout the year and calibrated to your project's specific five-digit zip code in the USA or postal code in Australia, ensuring localized union and non-union prevailing wages and true material costs.",
      },
      {
        question: "Do you charge extra for amendments, minor changes, or revisions?",
        answer:
          "No. We do not charge extra for minor amendments, drawing addenda reviews, or subcontractor scope adjustments. We offer unlimited minor reviews to ensure you submit a winning, accurate bid without unexpected extra fees.",
      },
      {
        question: "How do I pay for my estimate invoice?",
        answer:
          "We process payments securely through QuickBooks Online. You can pay via Credit Card, Debit Card, PayPal, or Direct Bank Transfer (ACH / Wire) once your proposal is accepted.",
      },
    ],
  },
  {
    category: "Turnaround & Delivery",
    faqs: [
      {
        question: "What is the typical turnaround or delivery time for an estimate?",
        answer:
          "For standard single-trade takeoffs and residential projects, our delivery time is 24 to 48 hours. Larger commercial, industrial, or multi-family complexes typically require 3 to 4 business days. We always confirm a strict delivery date prior to initiating work.",
      },
      {
        question: "Can you accommodate expedited or emergency same-day bids?",
        answer:
          "Yes. For time-sensitive bids closing in 12–24 hours, we can assign a multi-estimator team to fast-track your takeoff. Please contact us directly by phone at (346) 660-2440 to arrange emergency expedited delivery.",
      },
    ],
  },
  {
    category: "Deliverables & Software",
    faqs: [
      {
        question: "What format will my estimate and takeoff be delivered in?",
        answer:
          "Every package includes: 1) High-resolution, color-coded PDF plan markups generated in Bluebeam Revu showing every linear foot, square foot, and count item directly on your drawings. 2) An audit-ready, editable Microsoft Excel Bill of Quantities (BOQ) organized by CSI MasterFormat 16-Division standards with formulas intact so you can adjust your own markups and overhead.",
      },
      {
        question: "What takeoff and estimating software does your team use?",
        answer:
          "We utilize industry-standard digital digitizers and takeoff platforms including PlanSwift, Bluebeam Revu, Trimble Quest, FastPIPE, FastDUCT, HeavyBid, and InSite Elevation Pro for civil cut-and-fill modeling.",
      },
      {
        question: "Can I see examples of your previous estimates before ordering?",
        answer:
          "Absolutely. You can download comprehensive sample packages directly from our Projects and Portfolio pages, or email Info@buildcraft360.com to request sample takeoff sheets specifically for your trade.",
      },
      {
        question: "Can you provide estimates from preliminary sketches or incomplete plans?",
        answer:
          "Yes. Our quantity surveyors frequently prepare conceptual and preliminary estimates from schematic sketches, design-development drafts, or basic square-foot parameters. We clearly state all assumptions and create a contingency schedule to guide your budgeting.",
      },
    ],
  },
  {
    category: "Monthly Estimator Packages",
    faqs: [
      {
        question: "Do you offer monthly packages and long-term relationships?",
        answer:
          "Yes! Our dedicated monthly estimator packages are designed for active general contractors and busy builders. By outsourcing your recurring estimating workload to our dedicated staff, you can save up to 60% compared to hiring a full-time, in-house estimator. You gain an entire team of certified estimators at a predictable monthly fee.",
      },
      {
        question: "Are there any long-term binding contracts for monthly packages?",
        answer:
          "No. All of our monthly plans operate on a flexible, month-to-month basis. There are no lock-in contracts or termination fees. You can scale up during heavy bidding seasons and pause or cancel anytime.",
      },
      {
        question: "Are your estimators certified and insured?",
        answer:
          "Yes. All of our senior estimators and quantity surveyors are certified by the American Association of Cost Engineers (AACE International) and the Australian Institute of Quantity Surveyors (AIQS), ensuring the highest standard of professional compliance.",
      },
    ],
  },
];

export default function FaqsPage() {
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
            <span className="text-foreground font-normal">FAQ&apos;s</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Knowledge Base &amp; Support
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Frequently Asked{" "}
            <span className="font-normal text-primary">Questions</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need to know about our estimating process, pricing structures, localized cost databases, delivery timelines, and certified quantity surveying practices.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Clock size={12} className="text-primary" />
              24–48h Turnaround Answered
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              RSMeans 2026 Certified
            </span>
          </div>
        </div>
      </section>

      {/* 3. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Categorized FAQ Sections */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
        {FAQ_CATEGORIES.map((categoryGroup, cIdx) => (
          <section key={cIdx} className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border/80 pb-3">
              <span className="font-sans text-xs font-medium text-primary">0{cIdx + 1}.</span>
              <h2 className="font-serif font-normal text-xl sm:text-2xl text-foreground tracking-tight">
                {categoryGroup.category}
              </h2>
            </div>

            <Accordion className="w-full space-y-2.5">
              {categoryGroup.faqs.map((faq, fIdx) => (
                <AccordionItem
                  key={fIdx}
                  value={`cat-${cIdx}-item-${fIdx}`}
                  className="border border-border/80 rounded-xl px-5 py-1 bg-card hover:border-border transition-colors shadow-2xs"
                >
                  <AccordionTrigger className="font-sans font-normal text-xs sm:text-sm text-foreground hover:text-primary py-3.5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-xs sm:text-[13px] text-muted-foreground font-normal leading-relaxed pb-4 pt-1 border-t border-border/60">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        {/* Still Have Questions Card */}
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] dark:bg-primary/[0.06] text-foreground p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary">
              Have a Specific Question?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Speak with a Senior Cost Estimator Today
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Our engineering team is ready to review your project blueprints and provide personalized guidance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="font-medium px-6 shadow-xs gap-2 text-xs rounded-xl"
            >
              <span>Contact Us for Assistance</span>
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
