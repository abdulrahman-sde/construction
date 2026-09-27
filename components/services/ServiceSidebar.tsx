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
import { SERVICES_NAV_LIST } from "@/lib/services-data";

interface ServiceSidebarProps {
  currentSlug: string;
}

export default function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
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
          <div className="pt-3 border-t border-slate-800 space-y-1.5 text-[11px] text-slate-300 font-normal">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-primary flex items-center justify-center text-[9px] shrink-0">
                <Check size={8} />
              </span>
              <span>RSMeans zip-code localized pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-primary flex items-center justify-center text-[9px] shrink-0">
                <Check size={8} />
              </span>
              <span>AACE &amp; AIQS certified estimators</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-primary flex items-center justify-center text-[9px] shrink-0">
                <Check size={8} />
              </span>
              <span>Unlimited minor revisions &amp; reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. All Estimating Services Menu */}
      <div className="bg-card rounded-xl border border-border/80 shadow-2xs p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <h4 className="font-sans font-medium text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>All Estimating Services</span>
          </h4>
          <span className="text-[11px] text-muted-foreground font-normal">
            {SERVICES_NAV_LIST.length} Trades
          </span>
        </div>

        <nav aria-label="Services List" className="space-y-0.5 max-h-[440px] overflow-y-auto pr-1 scrollbar-thin">
          {SERVICES_NAV_LIST.map((svc) => {
            const isActive = svc.slug === currentSlug;
            return (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-[13px] transition-colors ${
                  isActive
                    ? "bg-primary/5 text-primary font-normal border-l-2 border-primary pl-2.5"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/40 font-normal"
                }`}
              >
                <span className="truncate">{svc.title}</span>
                <ArrowRight
                  size={12}
                  className={`shrink-0 transition-transform duration-150 ${
                    isActive
                      ? "text-primary translate-x-0.5"
                      : "text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. Direct Contact & Support Box */}
      <div className="bg-slate-50/70 dark:bg-slate-950/20 rounded-xl border border-border/80 p-5 space-y-3.5">
        <div>
          <h4 className="font-serif font-normal text-foreground text-base tracking-tight">
            Have Questions? Let&apos;s Talk
          </h4>
          <p className="font-sans text-xs text-muted-foreground mt-1 font-normal">
            Speak directly with our senior estimating engineers.
          </p>
        </div>

        <div className="space-y-2.5 text-xs text-foreground/80 font-normal">
          <a
            href="tel:+13466602440"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-card border border-border/70 hover:border-primary/40 transition-colors"
          >
            <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-200/50">
              <Call size={12} />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-normal uppercase">USA Office</div>
              <div className="text-foreground font-normal">(346) 660-2440</div>
            </div>
          </a>

          <a
            href="tel:0455843274"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-card border border-border/70 hover:border-primary/40 transition-colors"
          >
            <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/50">
              <Call size={12} />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-normal uppercase">Australia Office</div>
              <div className="text-foreground font-normal">0455 843 274</div>
            </div>
          </a>

          <a
            href="mailto:info@constructestimates.com"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-card border border-border/70 hover:border-primary/40 transition-colors"
          >
            <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/50">
              <Message size={12} />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-muted-foreground font-normal uppercase">Email Us</div>
              <div className="text-foreground font-normal truncate">
                info@constructestimates.com
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

      {/* 4. Credentials & Quality Seal */}
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
