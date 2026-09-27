import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectsPublicTrustBar from "@/components/projects/ProjectsPublicTrustBar";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Clock } from "reicon-react";

export const metadata: Metadata = {
  title: "Construction Estimating Projects Portfolio | Construct Estimates",
  description:
    "Explore our construction estimating and material takeoff project portfolio. Real plan markups, CSI division BOQs, and sample packages across residential, commercial, and civil infrastructure.",
};

export default function OurProjectsPage() {
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
            <span className="text-foreground font-normal">Our Projects</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Portfolio &amp; Case Studies
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Construction Estimating Projects We Did For{" "}
            <span className="font-normal text-primary">Clients</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering audit-ready cost assessments, color-coded PDF plan markups, and CSI MasterFormat 16-division Excel workbooks across residential, commercial, and public works sectors.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Clock size={12} className="text-primary" />
              24–48h Turnaround Available
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Download size={12} className="text-primary" />
              Free Sample Estimates Included
            </span>
          </div>
        </div>
      </section>

      {/* 3. Public Trust Authority Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Main Gallery Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          {/* Gallery with Sector Tabs */}
          <ProjectGallery />

          {/* Sample Download Callout Card */}
          <div className="rounded-xl border border-primary/30 bg-primary/[0.03] dark:bg-primary/[0.05] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
                Free Evaluation Package
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
                Want to Review the Quality of Our Estimating Work?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                Download our comprehensive sample package including color-coded Bluebeam drawing markups and CSI MasterFormat Excel worksheets for residential, commercial, and civil trades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
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
