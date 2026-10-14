"use client";

import Link from "next/link";
import {
  Call,
  Message,
  ArrowRight,
  ShieldCheck,
  Clock,
  Check,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

interface ServiceSidebarProps {
  currentSlug?: string;
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

export default function ServiceSidebar({ currentSlug = "" }: ServiceSidebarProps = {}) {
  const isPlanning = PLANNING_SLUGS.has(currentSlug);
  const isArchitecture = ARCHITECTURE_SLUGS.has(currentSlug);

  // Dynamic promo card content
  let turnaroundBadge = "Turnaround: 24–48 Hours";
  let promoTitle = "Accurate Takeoffs with 30% Savings";
  let promoDescription =
    "Send us your blueprints and specifications today for an audit-ready material takeoff calibrated to your regional zip code.";
  let promoCtaText = "Upload Plans via WhatsApp";
  let promoChecklist = [
    "RSMeans zip-code localized pricing",
    "AACE & AIQS certified estimators",
    "Unlimited minor revisions & reviews",
  ];
  let specialistLabel = "Speak directly with our senior estimating engineers.";
  let sealTitle = "AACE & AIQS Certified";
  let sealDescription =
    "Estimates strictly adhere to CSI MasterFormat and international quantity surveying codes.";

  if (isPlanning) {
    turnaroundBadge = "Turnaround: 24–48 Hours";
    promoTitle = "Construction Planning That Keeps Projects on Track";
    promoDescription =
      "Send us your project details and schedule requirements for a practical construction programme built around your scope, resources, and deadlines.";
    promoCtaText = "Discuss Your Project Needs & Save 30%";
    promoChecklist = [
      "Detailed construction schedules and work programmes",
      "Resource planning and critical path analysis",
      "Progress tracking, updates and schedule reviews",
    ];
    specialistLabel = "Speak directly with our senior project planning engineers.";
    sealTitle = "PMI & P6 Scheduling Standards";
    sealDescription =
      "Schedules strictly adhere to industry CPM scheduling protocols and project controls guidelines.";
  } else if (isArchitecture) {
    turnaroundBadge = "Fast Design Turnaround";
    promoTitle = "Architectural Design That Brings Your Vision to Life";
    promoDescription =
      "Share your design concepts and project requirements, and we'll create functional, aesthetic, and buildable architectural solutions tailored to your goals.";
    promoCtaText = "Discuss Your Project Needs & Save 30%";
    promoChecklist = [
      "Concept, schematic & detailed design development",
      "3D visualizations & presentation drawings",
      "Code-compliant, practical and cost-efficient designs",
    ];
    specialistLabel = "Speak directly with our senior architectural designers.";
    sealTitle = "AIA & Building Code Compliant";
    sealDescription =
      "Drawings and construction documents comply with IRC, IBC, and local municipal zoning requirements.";
  }

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 self-start">
      {/* 1. Quick Takeoff / Scheduling / Design Promo Card: Architectural Slate */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 shadow-sm relative overflow-hidden space-y-4">
        {/* Subtle blueprint accent grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 text-[10.5px] font-medium tracking-wide uppercase text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
            <Clock size={12} className="text-primary" />
            <span>{turnaroundBadge}</span>
          </div>

          <h3 className="text-xl font-serif font-normal text-white leading-snug tracking-tight">
            {promoTitle}
          </h3>

          <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
            {promoDescription}
          </p>

          <div className="pt-1">
            <Button
              render={
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="default"
              className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs shadow-xs rounded-lg justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <span>{promoCtaText}</span>
                <ArrowRight size={13} />
              </span>
            </Button>
          </div>

          {/* Quick trust checklist */}
          <div className="pt-3 border-t border-slate-800 space-y-2 text-[11px] text-slate-300 font-normal">
            {promoChecklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Direct Contact & Support Box */}
      <div className="bg-slate-50/70 dark:bg-slate-950/20 rounded-xl border border-border/80 p-5 space-y-3.5">
        <div>
          <h4 className="font-serif font-normal text-foreground text-base tracking-tight">
            Have Questions? Let&apos;s Talk
          </h4>
          <p className="font-sans text-xs text-muted-foreground mt-1 font-normal">
            {specialistLabel}
          </p>
        </div>

        <div className="space-y-2 text-xs text-foreground/80 font-normal">
          <a
            href="tel:+13468612915"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border/80"
          >
            <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80">
              <Call size={12} />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-normal uppercase">Direct Phone</div>
              <div className="text-foreground font-normal">(346) 861-2915</div>
            </div>
          </a>

          <a
            href="mailto:Info@buildcraft360.com"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border/80"
          >
            <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80">
              <Message size={12} />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-muted-foreground font-normal uppercase">Email Us</div>
              <div className="text-foreground font-normal truncate">
                Info@buildcraft360.com
              </div>
            </div>
          </a>
        </div>

        <div className="pt-1 text-center space-y-2">
          <div className="text-[11px] text-muted-foreground font-normal">
            Mon – Sat: 9:00 AM – 10:00 PM
          </div>
          <Button
            render={
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="sm"
            className="w-full font-medium text-xs border-border bg-card hover:bg-muted/40"
          >
            <span>Chat on WhatsApp</span>
          </Button>
        </div>
      </div>

      {/* 3. Credentials & Quality Seal */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-border/80 flex items-center gap-3">
        <ShieldCheck size={24} className="text-primary shrink-0" />
        <div className="text-xs text-muted-foreground leading-relaxed font-normal">
          <span className="text-foreground font-normal block">{sealTitle}</span>
          {sealDescription}
        </div>
      </div>
    </aside>
  );
}
