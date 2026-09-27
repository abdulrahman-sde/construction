import Link from "next/link";
import {
  Calculator,
  Layers,
  Home,
  Building2,
  Industry,
  DocumentText,
  Calendar,
  Flash,
  ArrowRight,
  Clock,
  CheckCircle,
  IconComponent,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
  deliverables: string[];
  turnaround: string;
}

const services: ServiceItem[] = [
  {
    id: "cost-estimating",
    title: "Cost Estimating Services",
    description:
      "Construct Estimates offers a wide range of construction cost estimating services and cost management solutions tailored to meet the unique needs of the ever-growing construction industry.",
    icon: Calculator,
    deliverables: ["RSMeans Pricing", "Bill of Quantities", "Labor & Equipment Rates"],
    turnaround: "24-48 hours",
  },
  {
    id: "material-takeoff",
    title: "Material Takeoff Services",
    description:
      "Our professional estimators excel in producing accurate takeoffs that form a solid foundation for your bidding process by meticulously analyzing construction drawings and specifications.",
    icon: Layers,
    deliverables: ["Planswift & Bluebeam", "Itemized Excel Sheets", "Material Schedules"],
    turnaround: "24-48 hours",
  },
  {
    id: "residential-estimating",
    title: "Residential Estimating Services",
    description:
      "At Construct Estimates, we take pride in our track record of successful projects. We have provided comprehensive estimates for diverse residential single and multi-family endeavors.",
    icon: Home,
    deliverables: ["Framing & Lumber", "Finishes & Drywall", "Subcontractor Bid Packs"],
    turnaround: "24-48 hours",
  },
  {
    id: "commercial-estimating",
    title: "Commercial Estimating Services",
    description:
      "Construct Estimates, your trusted partner for accurate and efficient commercial estimating services. Our precise approach empowers General Contractors and Subcontractors.",
    icon: Building2,
    deliverables: ["CSI MasterFormat", "Office & Mixed-Use", "Tenant Improvements"],
    turnaround: "24-48 hours",
  },
  {
    id: "industrial-estimating",
    title: "Industrial Estimating Services",
    description:
      "We offer comprehensive quantity takeoffs, cost estimates, piping, electrical and heavy mechanical analysis services for industrial projects.",
    icon: Industry,
    deliverables: ["Process Piping", "Heavy Equipment Hours", "Structural Steel"],
    turnaround: "48-72 hours",
  },
  {
    id: "preliminary-estimates",
    title: "Preliminary Estimates Services",
    description:
      "Tired of grappling with incomplete drawing plans? We provide conceptual and schematic budget estimates to eliminate uncertainty before architectural finalization.",
    icon: DocumentText,
    deliverables: ["Square-Foot Modeling", "Schematic Feasibility", "Budget Validation"],
    turnaround: "24-48 hours",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="blue" className="mb-3 text-[10.5px]">
            Precision Estimating Matrix
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
            Our Construction Estimating <span className="font-normal text-primary">Services</span>
          </h2>
          <p className="font-sans text-muted-foreground text-sm sm:text-base mt-2.5 font-normal max-w-2xl mx-auto leading-relaxed">
            Whether you are a General Contractor, Subcontractor, Builder, Architect, or Developer,
            we deliver audit-ready estimates calibrated to your local market.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group flex flex-col justify-between p-5 rounded-xl border border-border/80 bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
              >
                <div>
                  {/* Clean Icon & Title Header */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Icon size={19} className="text-primary shrink-0" />
                    <h3 className="text-[15px] sm:text-base font-medium text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-normal line-clamp-3 mb-3">
                    {service.description}
                  </p>

                  {/* Technical Deliverables Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {service.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[10.5px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground font-normal border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Turnaround and Action */}
                <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-normal">
                    <Clock size={12} className="text-primary/70 shrink-0" />
                    <span>{service.turnaround}</span>
                  </span>
                  <Link
                    href="#contact"
                    aria-label={`Learn more about ${service.title}`}
                    className="font-medium text-xs text-primary inline-flex items-center gap-1 group/link hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Action & Engagement Accelerator Cards (2 Balanced Banners) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          {/* Accelerator Card 1: Monthly Subscription */}
          <Card className="flex flex-col justify-between p-5 sm:p-6 rounded-xl border border-border/80 bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="amber" className="text-[10px] font-medium">
                  Save 10% Time
                </Badge>
                <span className="text-xs font-medium text-primary flex items-center gap-1">
                  <Calendar size={13} />
                  <span>Recurring Retainer</span>
                </span>
              </div>

              <div className="mb-3">
                <h3 className="text-lg sm:text-xl font-serif font-normal text-foreground tracking-tight">
                  Get our <span className="font-normal text-primary">Monthly Subscription</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal mt-1">
                  Get hassle-free estimates every month. Tailored packages for busy contractors bidding
                  on multiple jobs weekly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>Dedicated lead estimator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>Priority bid queue access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>Volume rollover allowance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>No long-term commitments</span>
                </div>
              </div>
            </div>

            <div className="pt-3.5 mt-3 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-normal">
                Predictable monthly billing
              </span>
              <Button
                render={<Link href="#contact" />}
                variant="outline"
                size="sm"
                className="h-8 text-xs px-3"
              >
                <span>Contact Us</span>
                <ArrowRight size={12} />
              </Button>
            </div>
          </Card>

          {/* Accelerator Card 2: Fastest 24h Delivery */}
          <Card className="flex flex-col justify-between p-5 sm:p-6 rounded-xl border border-border/80 bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="blue" className="text-[10px] font-medium">
                  Fastest 24h Delivery
                </Badge>
                <span className="text-xs font-medium text-primary flex items-center gap-1">
                  <Flash size={13} />
                  <span>Express Queue</span>
                </span>
              </div>

              <div className="mb-3">
                <h3 className="text-lg sm:text-xl font-serif font-normal text-foreground tracking-tight">
                  Want An <span className="font-normal text-primary">Accurate Estimate?</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal mt-1">
                  Transform your commercial visions into tangible realities with our certified
                  estimators.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>24h emergency takeoff option</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>RSMeans ZIP-code verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>98% certified bid accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  <span>Direct estimator phone line</span>
                </div>
              </div>
            </div>

            <div className="pt-3.5 mt-3 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-normal">
                Guaranteed on-time bid return
              </span>
              <Button
                render={<Link href="#contact" />}
                size="sm"
                className="h-8 text-xs px-3"
              >
                <span>Contact Us</span>
                <ArrowRight size={12} />
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom Contextual Note */}
        <div className="text-center mt-10 text-xs sm:text-sm text-muted-foreground font-normal">
          Have specific questions about our services? Check out our{" "}
          <Link className="text-primary underline font-medium" href="#contact">
            FAQs section
          </Link>{" "}
          for detailed answers.
        </div>
      </div>
    </section>
  );
}
