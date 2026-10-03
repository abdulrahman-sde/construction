import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, ArrowRight } from "reicon-react";

export const metadata: Metadata = {
  title: "Client Testimonials & Contractor Reviews | Buildcraft360",
  description:
    "Read genuine reviews and testimonials from general contractors, home builders, and trade subcontractors who use Buildcraft360 to win bids and protect their profit margins.",
};

const TESTIMONIALS = [
  {
    quote:
      "They deliver more than they promise and they have well-trained professional staff. The color-coded markups allow us to verify quantities on the drawing sheets in minutes.",
    author: "James Builders",
    role: "General Contractor",
    location: "Houston, Texas",
    rating: 5,
    projectType: "Multi-Family Residential",
  },
  {
    quote:
      "These guys were very attentive to my specific, custom needs for estimating and delivered an excellent product in very timely fashion. I'm looking forward to hiring them again in the near future!",
    author: "Bill A.",
    role: "Residential Contractor",
    location: "California",
    rating: 5,
    projectType: "Custom Home Construction",
  },
  {
    quote:
      "Excellent service all round, fast informative and very professional. The CSI MasterFormat Excel sheet gave our team a complete breakdown that we plugged straight into our bidding software.",
    author: "Alan Stuckey",
    role: "Building Contractor",
    location: "Melbourne, Australia",
    rating: 5,
    projectType: "Commercial & Civil Works",
  },
  {
    quote:
      "Their Head Estimator took direction well, met the deadline alongside their team, and their skills are strong. Their communication was great and I will most likely be reaching out to them for help on future projects.",
    author: "Cameron M.",
    role: "Commercial General Contractor",
    location: "Dallas, Texas",
    rating: 5,
    projectType: "Retail Strip Centers",
  },
  {
    quote:
      "Buildcraft360 turned around our multi-family framing takeoff in under 36 hours. The color-coded markups made trade scope reconciliation with our subbies completely seamless.",
    author: "Matt Day",
    role: "Custom Home Builder",
    location: "Sydney, Australia",
    rating: 5,
    projectType: "Residential Framing & Finishes",
  },
  {
    quote:
      "Spot-on preliminary budgets and square-foot cost estimates. We secured private bank financing without needing to revise our initial feasibility numbers. Highly recommended for commercial developers.",
    author: "Dr. Boyer",
    role: "Commercial Developer",
    location: "Orlando, Florida",
    rating: 5,
    projectType: "Healthcare & Office Buildings",
  },
  {
    quote:
      "The lumber cut lists and drywall board counts saved us over 12% in material waste on our last three housing developments. Their numbers are consistently dependable.",
    author: "Osama K.",
    role: "Framing & Drywall Subcontractor",
    location: "Ontario, Canada",
    rating: 5,
    projectType: "Subcontractor Trade Package",
  },
  {
    quote:
      "Their 3D earthwork cut-and-fill takeoffs helped us catch a massive topsoil stripping discrepancy on the municipal tender drawings that saved our firm from a costly bid error.",
    author: "Mick T.",
    role: "Civil Infrastructure Contractor",
    location: "Denver, Colorado",
    rating: 5,
    projectType: "Heavy Civil Earthwork & Utilities",
  },
];

export default function TestimonialsPage() {
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
            <span className="text-foreground font-normal">Testimonials</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Contractor Feedback &amp; Trust
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            What Our Clients Say About{" "}
            <span className="font-normal text-primary">Buildcraft360</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Over 700 general contractors, home builders, and trade subcontractors rely on our certified estimators to deliver audit-ready bids that win projects and protect profit margins.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              4.9 / 5.0 Average Client Rating
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              95% Quote Acceptance Rate
            </span>
          </div>
        </div>
      </section>

      {/* 3. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Testimonials Masonry / Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card flex flex-col justify-between space-y-5 shadow-sm"
            >
              <div className="space-y-3">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500" />
                  ))}
                </div>

                {/* Quote Body */}
                <blockquote className="font-sans text-xs sm:text-sm text-foreground/90 font-normal leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Project Details */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-normal text-sm text-foreground">
                    {t.author}
                  </h4>
                  <p className="font-sans text-[11px] text-muted-foreground font-normal">
                    {t.role} • {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-sans font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Banner */}
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] dark:bg-primary/[0.06] text-foreground p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary">
              Experience the Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Ready to Win Your Next Construction Bid?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Upload your plans today. You will receive a quote within minutes, with 30% discount applied to your first takeoff.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              className="font-medium px-6 shadow-xs gap-2 text-xs rounded-xl"
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
