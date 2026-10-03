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
  Global,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Building,
} from "reicon-react";

export const metadata: Metadata = {
  title: "Service Areas | Buildcraft360 - USA, Canada & Australia Coverage",
  description:
    "Buildcraft360 provides localized construction cost estimating and material takeoff services across all 50 US States, Canada, and all Australian states and territories.",
};

const US_REGIONS = [
  {
    region: "Southern United States",
    states: [
      "Texas", "Florida", "Georgia", "North Carolina", "Virginia",
      "Tennessee", "Alabama", "Louisiana", "South Carolina", "Kentucky",
      "Oklahoma", "Arkansas", "Mississippi", "West Virginia", "Delaware", "Maryland"
    ],
  },
  {
    region: "Western United States",
    states: [
      "California", "Washington", "Colorado", "Arizona", "Oregon",
      "Utah", "Nevada", "New Mexico", "Idaho", "Hawaii", "Alaska", "Montana", "Wyoming"
    ],
  },
  {
    region: "Midwestern United States",
    states: [
      "Illinois", "Ohio", "Michigan", "Indiana", "Missouri",
      "Wisconsin", "Minnesota", "Iowa", "Kansas", "Nebraska", "South Dakota", "North Dakota"
    ],
  },
  {
    region: "Northeastern United States",
    states: [
      "New York", "Pennsylvania", "New Jersey", "Massachusetts",
      "Connecticut", "New Hampshire", "Maine", "Rhode Island", "Vermont"
    ],
  },
];

const AUSTRALIA_REGIONS = [
  {
    territory: "New South Wales (Sydney Metro & Regional)",
    capital: "Sydney",
    specialty: "High-density residential, commercial glazing, and infrastructure civil works.",
  },
  {
    territory: "Victoria (Melbourne & Greater Geelong)",
    capital: "Melbourne",
    specialty: "Townhouse multi-developments, concrete tilt-up industrial, and educational builds.",
  },
  {
    territory: "Queensland (Brisbane & Gold Coast)",
    capital: "Brisbane",
    specialty: "Coastal framing, cyclone-rated envelope systems, and commercial retail.",
  },
  {
    territory: "Western Australia (Perth & Mining Corridors)",
    capital: "Perth",
    specialty: "Double-brick residential, mining infrastructure, and structural steel sheds.",
  },
  {
    territory: "South Australia & Tasmania",
    capital: "Adelaide & Hobart",
    specialty: "Heritage restorations, winery developments, and civil roading projects.",
  },
  {
    territory: "Australian Capital Territory & Northern Territory",
    capital: "Canberra & Darwin",
    specialty: "Government institutional facilities, defense civil tenders, and remote builds.",
  },
];

const CANADA_REGIONS = [
  { province: "Ontario", hub: "Toronto & Oshawa", focus: "Commercial, industrial & residential high-rise" },
  { province: "British Columbia", hub: "Vancouver & Surrey", focus: "Seismic mass-timber & multi-family" },
  { province: "Alberta", hub: "Calgary & Edmonton", focus: "Heavy industrial, energy & commercial framing" },
];

export default function ServiceAreasPage() {
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
            <span className="text-foreground font-normal">Service Areas</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Global Coverage &amp; Regional Calibration
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Serving the Entire United States, Canada and{" "}
            <span className="font-normal text-primary">Australia</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
            Buildcraft360 delivers localized cost estimating and material takeoff services calibrated to local prevailing wages, union rules, and material price indices across North America and Australia.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <Global size={12} className="text-primary" />
              All 50 US States Covered
            </span>
            <span className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-md">
              <ShieldCheck size={12} className="text-primary" />
              RSMeans 2026 Zip-Code Localized
            </span>
          </div>
        </div>
      </section>

      {/* 3. Credentials Bar */}
      <ProjectsPublicTrustBar />

      {/* 4. Main Service Areas Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* USA Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              <Badge variant="blue" className="text-[10.5px] font-normal tracking-wide uppercase">
                United States Footprint
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Comprehensive Estimating Across All 50 U.S. States
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal max-w-3xl leading-relaxed">
              Every U.S. estimate incorporates localized city-index multipliers from RSMeans and Craftsman National Construction Estimator database. We adjust for local open-shop vs. prevailing wage rates, regional seismic codes in the West, hurricane wind provisions in the Gulf and Atlantic, and freeze-thaw insulation depths in the Northeast and Midwest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {US_REGIONS.map((region, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border bg-card space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif font-normal text-lg text-foreground pb-2 border-b border-border/60">
                    {region.region}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {region.states.map((st) => (
                      <span
                        key={st}
                        className="text-xs font-sans font-normal px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-foreground/80 border border-border/50"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-sans text-muted-foreground pt-3 border-t border-border/40">
                  {region.states.length} States • RSMeans Localized
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Australia Section */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇦🇺</span>
              <Badge variant="blue" className="text-xs font-sans font-medium uppercase tracking-wide">
                Australian Quantity Surveying
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Extensive Reach Across Australia
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal max-w-3xl leading-relaxed">
              Our Australian estimating division prepares Bill of Quantities (BOQ) following the Australian Standard Method of Measurement (ASMM) and Cordell cost indexing. We work directly with licensed builders and trade contractors in Melbourne, Sydney, Brisbane, and Perth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {AUSTRALIA_REGIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-card space-y-2.5"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-serif font-normal text-lg text-foreground">
                    {item.territory}
                  </h3>
                  <span className="text-xs font-sans font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {item.capital}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                  {item.specialty}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Canada Section */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇨🇦</span>
              <Badge variant="blue" className="text-xs font-sans font-medium uppercase tracking-wide">
                Canadian Provincial Coverage
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Serving Canadian General Contractors &amp; Trade Specialists
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal max-w-3xl leading-relaxed">
              With an office in Oshawa, Ontario, we support general contractors bidding across Ontario, Alberta, and British Columbia with metric and imperial takeoff schedules conforming to MasterFormat Canadian editions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {CANADA_REGIONS.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-card space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-normal text-lg text-foreground">
                    {c.province}
                  </h3>
                  <span className="text-xs font-sans text-muted-foreground">
                    {c.hub}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
                  {c.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Localized Calibration Guarantee Banner */}
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] dark:bg-primary/[0.06] text-foreground p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-primary">
              Zip-Code Precision Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
              Ready to Bid on a Project in Your Local Area?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
              Send your project address and drawings. We automatically apply the exact regional cost multipliers for materials, labor, and equipment rental rates.
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
