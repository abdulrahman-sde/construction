import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  Calendar,
  Building2,
  CheckCircle,
  ArrowRight,
  IconComponent,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ServicePillar {
  number: string;
  title: string;
  icon: IconComponent;
  lead: string;
  deliverables: string[];
  closing: string;
  ctaText: string;
  ctaHref: string;
}

const servicePillars: ServicePillar[] = [
  {
    number: "01",
    title: "Construction Estimating",
    icon: Calculator,
    lead: "Accurate estimating is essential for preparing competitive bids and maintaining control over project costs. We provide detailed quantity takeoffs and cost estimates based on project drawings, specifications, and scope of work.",
    deliverables: [
      "Detailed Quantity Takeoffs",
      "Material & Labor Cost Estimation",
      "Bid Preparation & Pricing",
      "Subcontractor Scope Review",
      "Construction Cost Analysis",
      "Preliminary & Budget Estimates",
      "Value Engineering Support",
      "Bid Comparison & Review",
    ],
    closing:
      "Whether you need an estimate for a small project or a detailed takeoff for a larger commercial project, we provide clear and organized estimating that helps you understand the numbers before you bid.",
    ctaText: "Request an Estimate",
    ctaHref: "#contact",
  },
  {
    number: "02",
    title: "Construction Planning",
    icon: Calendar,
    lead: "Good planning helps turn an approved project into a well-organized execution plan. We provide planning support to help project teams establish realistic schedules, monitor progress, and identify potential delays.",
    deliverables: [
      "Project Scheduling",
      "Baseline Schedule Development",
      "Construction Work Programs",
      "Progress Tracking",
      "Schedule Updates",
      "Look-Ahead Schedules",
      "Resource & Activity Planning",
      "Delay & Recovery Planning",
      "Progress Reporting",
    ],
    closing:
      "We focus on practical schedules that reflect the actual sequence of construction activities and provide project teams with a clear view of upcoming work and progress.",
    ctaText: "Discuss Your Project",
    ctaHref: "#contact",
  },
  {
    number: "03",
    title: "Architectural Design",
    icon: Building2,
    lead: "We provide architectural design support that helps transform ideas and requirements into clear, practical drawings and visual concepts. Our approach focuses on functionality, constructability, and a design that works within the project's requirements.",
    deliverables: [
      "Conceptual Design",
      "2D Floor Plans",
      "Architectural Drawings",
      "Elevations & Sections",
      "Space Planning",
      "3D Modeling & Visualization",
      "Design Development",
      "Construction Drawing Support",
      "Drawing Revisions",
    ],
    closing:
      "From an initial concept to developed design drawings, we work to create solutions that are practical, clear, and ready for the next stage of the project.",
    ctaText: "Start Your Design",
    ctaHref: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block mb-2.5">
            Core Scope
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground tracking-tight">
            Our <span className="font-normal text-primary">Services</span>
          </h2>
          <p className="font-sans text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed font-normal">
            At Buildcraft360, we provide practical construction support from the early design
            stage through estimating and project planning. Our services are designed to help
            contractors, developers, and project teams make informed decisions, prepare competitive
            bids, and keep projects organized from start to finish.
          </p>
        </div>

        {/* Full Uncropped Visual Triptych Master Picture */}
        <div className="mb-14 sm:mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-border/90 shadow-md bg-card">
            <Image
              src="/assets/images/services-overview.jpg"
              alt="Buildcraft360 Construction Estimating, Construction Planning & Architectural Design"
              width={1024}
              height={682}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>

        {/* 3 Core Service Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.number}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-card shadow-sm relative overflow-hidden"
              >
                <div>
                  {/* Header Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-xs font-medium tracking-wide px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700/60">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/90 text-foreground flex items-center justify-center border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  {/* Lead Summary */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-normal mb-5">
                    {pillar.lead}
                  </p>

                  {/* Subhead & Deliverables */}
                  <div className="pt-4 border-t border-border/70 mb-5">
                    <h4 className="text-[11px] uppercase tracking-wider font-semibold text-foreground/80 mb-3">
                      Our services include:
                    </h4>
                    <ul className="space-y-2.5">
                      {pillar.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/90 font-normal leading-snug"
                        >
                          <CheckCircle
                            size={14}
                            className="text-neutral-400 dark:text-neutral-500 group-hover:text-foreground mt-0.5 shrink-0 transition-colors"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Closing Takeaway Note */}
                  <p className="text-xs text-muted-foreground italic leading-relaxed pt-3 border-t border-border/60 mb-6">
                    {pillar.closing}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Button
                    render={<Link href={pillar.ctaHref} />}
                    variant="outline"
                    size="default"
                    className="w-full justify-center gap-2 group/btn border-neutral-200 dark:border-neutral-700 hover:bg-foreground hover:text-background hover:border-foreground text-foreground text-xs sm:text-sm font-medium transition-all"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* From Concept to Construction: Integrated Banner */}
        <div className="mt-14 sm:mt-16">
          <div className="relative overflow-hidden p-8 sm:p-10 rounded-2xl border border-primary/20 bg-primary/[0.03] dark:bg-primary/[0.06] text-foreground shadow-xs">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block text-xs font-sans font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                Integrated Project Delivery
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-foreground tracking-tight">
                From Concept to Construction
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal max-w-2xl mx-auto">
                At Buildcraft360, our services are connected. Design, estimating, and planning
                work together throughout a project, and having support across these areas can make
                the process more organized and efficient. Whether you are preparing a bid,
                developing a project schedule, or turning an idea into a buildable design,
                Buildcraft360 is here to support your project at every stage.
              </p>
              <p className="text-sm font-medium text-foreground pt-1">
                Have a project in mind? Let&apos;s talk.
              </p>
              <div className="pt-2">
                <Button
                  render={<Link href="#contact" />}
                  size="lg"
                  className="font-medium gap-2 shadow-xs px-7"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
