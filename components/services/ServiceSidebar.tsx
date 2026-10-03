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
 
interface ServiceSidebarProps {
  currentSlug?: string;
}

export default function ServiceSidebar({ currentSlug: _currentSlug }: ServiceSidebarProps = {}) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 self-start">
      {/* 1. Quick Takeoff Promo Card: Architectural Slate */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 shadow-sm relative overflow-hidden space-y-4">
        {/* Subtle blueprint accent grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 text-[10.5px] font-medium tracking-wide uppercase text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
            <Clock size={12} className="text-primary" />
            <span>Turnaround: 24–48 Hours</span>
          </div>

          <h3 className="text-xl font-serif font-normal text-white leading-snug tracking-tight">
            Accurate Takeoffs with 30% Savings
          </h3>

          <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
            Send us your blueprints and specifications today for an audit-ready material takeoff calibrated to your regional zip code.
          </p>

          <div className="pt-1">
            <Button
              render={<Link href="#contact" />}
              size="default"
              className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs shadow-xs rounded-lg justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Upload Plans Now</span>
                <ArrowRight size={13} />
              </span>
            </Button>
          </div>

          {/* Quick trust checklist */}
          <div className="pt-3 border-t border-slate-800 space-y-2 text-[11px] text-slate-300 font-normal">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>RSMeans zip-code localized pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>AACE &amp; AIQS certified estimators</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-primary shrink-0" />
              <span>Unlimited minor revisions &amp; reviews</span>
            </div>
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
            Speak directly with our senior estimating engineers.
          </p>
        </div>

        <div className="space-y-2 text-xs text-foreground/80 font-normal">
          <a
            href="tel:+13466602440"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border/80"
          >
            <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80">
              <Call size={12} />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-normal uppercase">USA Office</div>
              <div className="text-foreground font-normal">(346) 660-2440</div>
            </div>
          </a>

          <a
            href="tel:0455843274"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border/80"
          >
            <div className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80">
              <Call size={12} />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-normal uppercase">Australia Office</div>
              <div className="text-foreground font-normal">0455 843 274</div>
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
            render={<Link href="#contact" />}
            variant="outline"
            size="sm"
            className="w-full font-medium text-xs border-border bg-card hover:bg-muted/40"
          >
            <span>Request A Call Back</span>
          </Button>
        </div>
      </div>

      {/* 3. Credentials & Quality Seal */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-border/80 flex items-center gap-3">
        <ShieldCheck size={24} className="text-primary shrink-0" />
        <div className="text-xs text-muted-foreground leading-relaxed font-normal">
          <span className="text-foreground font-normal block">AACE &amp; AIQS Certified</span>
          Estimates strictly adhere to CSI MasterFormat and international quantity surveying codes.
        </div>
      </div>
    </aside>
  );
}
