import Link from "next/link";
import { ArrowRight, Call, Clock, ShieldCheck, Compass, Calendar } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/contact";

interface ServicePreFooterBannerProps {
  currentSlug?: string;
  category?: "estimating" | "planning" | "architectural";
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

export default function ServicePreFooterBanner({
  currentSlug = "",
  category,
}: ServicePreFooterBannerProps = {}) {
  const isPlanning = category === "planning" || PLANNING_SLUGS.has(currentSlug);
  const isArchitecture = category === "architectural" || ARCHITECTURE_SLUGS.has(currentSlug);

  let eyebrow = "Fast 24-48 Hour Turnaround";
  let heading = "Let's Discuss Your Construction Project";
  let description =
    "From accurate cost estimates to project planning and architectural support, Buildcraft360 helps you move your projects forward with confidence.";
  let ctaText = "Upload Plans via WhatsApp";
  let badge1 = "AACE & AIQS Certified Quantity Surveyors";
  let badge2 = "RSMeans Zip-Code Localized Database";

  if (isPlanning) {
    eyebrow = "Dependable Project Scheduling & Controls";
    heading = "Let's Build Your Project Schedule";
    description =
      "From baseline CPM schedules in Primavera P6 to delay claims analysis and periodic progress monitoring, Buildcraft360 keeps your projects on schedule and within budget.";
    ctaText = "Share Scope via WhatsApp";
    badge1 = "Primavera P6 & MS Project Certified";
    badge2 = "CPM Critical Path & Float Controls";
  } else if (isArchitecture) {
    eyebrow = "Permit-Ready Architectural Drawings";
    heading = "Let's Bring Your Architectural Vision to Life";
    description =
      "From concept floor plans and permit drawing sets to photorealistic 3D renders, Buildcraft360 transforms your ideas into buildable, compliant architecture.";
    ctaText = "Share Design Brief via WhatsApp";
    badge1 = "AIA & IRC / IBC Code Compliant";
    badge2 = "2D CAD Drafting & Photorealistic 3D";
  }

  return (
    <section className="relative py-20 md:py-24 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block">
            {eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground leading-[1.18] tracking-tight">
            {heading}
          </h2>

          <p className="font-sans text-muted-foreground text-sm sm:text-base font-normal leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              render={
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="shadow-xs font-medium text-xs sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span>{ctaText}</span>
                <ArrowRight size={14} />
              </span>
            </Button>

            <Button
              render={<a href="tel:+13468612915" />}
              variant="outline"
              size="lg"
              className="font-medium text-xs sm:text-sm border-border bg-background hover:bg-muted/40"
            >
              <span className="flex items-center gap-2">
                <Call size={14} />
                <span>Call (346) 861-2915</span>
              </span>
            </Button>
          </div>

          <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-normal">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary shrink-0" />
              <span>{badge1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-primary shrink-0" />
              <span>{badge2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
