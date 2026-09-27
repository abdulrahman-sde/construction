import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import { Badge } from "@/components/ui/badge";
import { Call, Message, Clock, ShieldCheck, Building } from "reicon-react";

export const metadata: Metadata = {
  title: "Contact Us | Construct Estimates - Houston, Melbourne & Oshawa Offices",
  description:
    "Get in touch with Construct Estimates. Contact our estimating offices in Houston, Texas, Melbourne, Australia, and Oshawa, Canada. 24/7 plan review and 30% discount for new clients.",
};

const OFFICES = [
  {
    country: "United States (Headquarters)",
    city: "Houston, Texas",
    address: "2000 Taylor St, Houston, TX 77007, United States",
    phone: "(346) 660-2440",
    phoneHref: "tel:3466602440",
    email: "info@constructestimates.com",
    hours: "24/7 Estimating Support",
  },
  {
    country: "Australia Office",
    city: "Melbourne, Victoria",
    address: "118 Royal Terrace, Craigieburn VIC 3064, Australia",
    phone: "0455 843 274",
    phoneHref: "tel:0455843274",
    email: "info@constructestimates.com",
    hours: "AEST Business Hours & 24/7 Intake",
  },
  {
    country: "Canada Office",
    city: "Oshawa, Ontario",
    address: "2 Simcoe St S #300, Oshawa, ON L1H 8C1, Canada",
    phone: "(587) 674 3826",
    phoneHref: "tel:5876743826",
    email: "info@constructestimates.com",
    hours: "EST Business Hours & 24/7 Intake",
  },
];

export default function ContactUsPage() {
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
            <span className="text-foreground font-normal">Contact Us</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Direct Inquiries &amp; Plan Intake
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Get in Touch with Our{" "}
            <span className="font-normal text-primary">Estimating Team</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions about your project scope or bidding deadline? Reach our certified estimators directly by phone, email, or upload your blueprints below for a fast quote with 30% savings.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Clock size={12} className="text-primary" />
              24/7 Rapid Response Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              Direct Senior Estimator Access
            </span>
          </div>
        </div>
      </section>

      {/* 3. Global Office Locations Grid */}
      <section className="py-14 sm:py-16 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="blue" className="text-[10px] font-normal tracking-wide uppercase">
              International Presence
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Our Regional Estimating Offices
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              We operate across three countries to ensure continuous 24-hour turnaround for construction bids in any time zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-background space-y-4 shadow-2xs hover:border-primary/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-wider text-primary">
                    <Building size={12} />
                    <span>{office.city}</span>
                  </div>
                  <h3 className="font-serif font-normal text-lg sm:text-xl text-foreground">
                    {office.country}
                  </h3>
                </div>

                <p className="font-sans text-xs text-muted-foreground font-normal leading-relaxed">
                  {office.address}
                </p>

                <div className="pt-2 border-t border-border/60 space-y-2 text-xs">
                  <a
                    href={office.phoneHref}
                    className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors"
                  >
                    <Call size={13} className="text-primary shrink-0" />
                    <span className="font-mono">{office.phone}</span>
                  </a>

                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors"
                  >
                    <Message size={13} className="text-primary shrink-0" />
                    <span>{office.email}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  <span>Hours: {office.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 5. Interactive Plan Intake Section */}
      <main className="flex-1">
        <ContactSection />
      </main>

      {/* 6. Pre-Footer Banner */}
      <ServicePreFooterBanner />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
