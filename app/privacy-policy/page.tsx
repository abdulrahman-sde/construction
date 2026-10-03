import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy & Non-Disclosure Terms | Buildcraft360",
  description:
    "Review our privacy policy, drawing confidentiality protocols, and non-disclosure standards protecting contractor bidding documents and project data.",
};

const SECTIONS = [
  {
    number: "01",
    title: "Terms of Service & Engagement",
    content:
      "By accessing this website and engaging Buildcraft360 for quantity takeoff and cost estimating services, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. All materials and reports contained in this site and delivered via our services are protected by applicable copyright and trademark law.",
  },
  {
    number: "02",
    title: "Drawing Confidentiality & Non-Disclosure",
    content:
      "Buildcraft360 enforces strict non-disclosure protocols regarding all architectural drawings, structural engineering plans, MEP specifications, bid proposals, and contractor pricing sheets uploaded to our servers. We never sell, transfer, or disclose client blueprints or proprietary estimating methodologies to competitors, subcontractors, or third parties. All plan uploads are stored in encrypted environments accessible solely to the assigned certified estimator.",
  },
  {
    number: "03",
    title: "Use License & Deliverables Ownership",
    content:
      "Upon full payment of invoice fees, clients obtain full, unrestricted ownership of all customized deliverables produced by Buildcraft360, including color-coded PDF plan markups, itemized Excel Bill of Quantities (BOQ), and material schedule worksheets. You may freely modify, submit, distribute, and integrate these files into your bidding software, subcontractor solicitations, and project documentation.",
  },
  {
    number: "04",
    title: "Estimating Disclaimer & Professional Standard",
    content:
      "Our takeoffs and cost assessments are prepared using recognized quantity surveying methodologies (AACE and AIQS) and reputable localized cost indices (RSMeans and Craftsman Construction Estimator). While we maintain a 98%+ benchmark accuracy rate, construction estimates inherently reflect expert evaluations based on information furnished by the client. Field conditions, site topography variations, contractor labor efficiencies, and unforeseen market volatility remain the operational responsibility of the bidding contractor.",
  },
  {
    number: "05",
    title: "Amendments, Addenda & Scope Errata",
    content:
      "Drawings issued for construction bidding frequently undergo addenda and design modifications. Buildcraft360 provides free minor adjustments and addenda reviews for active estimate packages. Where extensive architectural redesigns significantly alter the square footage or structural framework, revised fee agreements may be negotiated in good faith.",
  },
  {
    number: "06",
    title: "Data Protection & CAN-SPAM Compliance",
    content:
      "We respect your privacy and adhere strictly to CAN-SPAM, CalOPPA, and international data protection standards. When you provide contact details (name, email address, phone number), they are used exclusively for transmitting estimate proposals, takeoff packages, and project communications. We will never sell your personal information or contact details to third-party marketing brokers. For questions or data inquiries, please email Info@buildcraft360.com.",
  },
  {
    number: "07",
    title: "Site Modifications & Governing Law",
    content:
      "Buildcraft360 may revise these terms of service at any time without notice. Any claim relating to Buildcraft360 web services or estimating engagements shall be governed by applicable state and national laws without regard to conflict of law provisions.",
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-foreground font-normal">Privacy Policy</span>
          </nav>

          <div className="flex justify-center">
            <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
              Legal Compliance &amp; Client Privacy
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Privacy Policy &amp; Drawing{" "}
            <span className="font-normal text-primary">Confidentiality</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Protecting your bidding data, blueprint intellectual property, and proprietary subcontractor quotes is our highest priority.
          </p>

          <p className="text-xs font-sans text-muted-foreground pt-1">
            Last Updated: January 2026 • Buildcraft360 Legal Standards
          </p>
        </div>
      </section>

      {/* 3. Privacy Policy Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
        <div className="space-y-8 divide-y divide-border/60">
          {SECTIONS.map((sec, idx) => (
            <div key={idx} className={`${idx !== 0 ? "pt-8" : ""} space-y-3`}>
              <div className="flex items-baseline gap-2.5">
                <span className="font-sans text-xs font-medium text-primary">{sec.number}.</span>
                <h2 className="font-serif font-normal text-xl sm:text-2xl text-foreground tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* 4. Pre-Footer Banner */}
      <ServicePreFooterBanner />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
