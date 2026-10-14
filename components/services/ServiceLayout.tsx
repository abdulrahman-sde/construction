import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServiceHeroBanner from "@/components/services/ServiceHeroBanner";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceIntroSection from "@/components/services/ServiceIntroSection";
import ServiceValueGrid from "@/components/services/ServiceValueGrid";
import ServiceFeaturesSection from "@/components/services/ServiceFeaturesSection";
import ServiceDeliverablesSection from "@/components/services/ServiceDeliverablesSection";
import ServiceMidCta from "@/components/services/ServiceMidCta";
import ServiceFaqSection from "@/components/services/ServiceFaqSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ServiceTradesSection from "@/components/services/ServiceTradesSection";
import { ServicePageData } from "@/lib/services-data";

interface ServiceLayoutProps {
  service: ServicePageData;
  children?: React.ReactNode;
}


const PLANNING_SLUGS = new Set([
  "construction-planning-scheduling",
  "primavera-p6-scheduling",
  "progress-monitoring-reporting",
  "delay-analysis-schedule-recovery",
]);

const ARCHITECTURE_SLUGS = new Set([
  "architectural-design",
  "floor-plans-building-layouts",
  "architectural-drawings-documentation",
  "3d-modeling-visualization",
]);

function getHeroSubtitle(service: ServicePageData): string {
  if (service.heroSubtitle) {
    return service.heroSubtitle;
  }
  if (PLANNING_SLUGS.has(service.slug)) {
    return "Critical path baseline schedules, Primavera P6 project controls, and delay analysis built for seamless project execution.";
  }
  if (ARCHITECTURE_SLUGS.has(service.slug)) {
    return "Concept development, functional building layouts, coordinated architectural drawing packages, and 3D visualizations.";
  }
  return "Audit-ready construction cost estimates and material takeoffs calibrated to your regional zip code, delivered in 24–48 hours.";
}

export default function ServiceLayout({
  service,
  children,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Page Hero Banner */}
      <ServiceHeroBanner
        title={service.title}
        breadcrumb={service.breadcrumb}
        category="Services"
        subtitle={getHeroSubtitle(service)}
      />

      {/* 3. Main 2-Column Content + Sticky Right Sidebar */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Comprehensive Trade Content (span 8) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Intro Headline & Context */}
            <ServiceIntroSection
              badge={service.badge}
              headlinePrefix={service.headlinePrefix}
              highlightWord={service.highlightWord}
              headlineSuffix={service.headlineSuffix}
              leadParagraph={service.leadParagraph}
              secondaryParagraph={service.secondaryParagraph}
              ctaText={service.ctaText}
            />

            {/* 4-Box Value Proposition Grid */}
            <ServiceValueGrid valueProps={service.valueProps} />

            {/* Scope of Work Breakdown */}
            <ServiceFeaturesSection
              heading={service.scopeHeading}
              description={service.scopeDescription}
              categories={service.scopeCategories}
            />

            {/* Mid-Page Vibrant Blue Callout Banner */}
            <ServiceMidCta
              heading={service.midCtaHeading}
              subtext={service.midCtaSubtext}
            />

            {/* Takeoff Package Deliverables */}
            <ServiceDeliverablesSection
              heading={service.deliverablesHeading}
              deliverables={service.deliverables}
            />

            {/* Trades Breakdown (Only on Estimating Service Pages) */}
            {!PLANNING_SLUGS.has(service.slug) && !ARCHITECTURE_SLUGS.has(service.slug) && (
              <ServiceTradesSection serviceTitle={service.title} />
            )}

            {/* Optional Custom Page Content */}
            {children}

            {/* Frequently Asked Questions */}
            <ServiceFaqSection faqs={service.faqs} />
          </div>

          {/* Right Column: Fixed/Sticky Sidebar (span 4) */}
          <div className="lg:col-span-4 w-full">
            <ServiceSidebar currentSlug={service.slug} />
          </div>
        </div>
      </main>

      {/* 4. Plan Upload & Contact Form Anchor Section */}
      <ContactSection currentSlug={service.slug} serviceTitle={service.title} />

      {/* 5. Pre-Footer Action Banner with Engineer Graphic */}
      <ServicePreFooterBanner currentSlug={service.slug} />

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}
