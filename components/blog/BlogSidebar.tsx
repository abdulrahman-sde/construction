"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Call,
  Clock,
  ArrowRight,
  ShieldCheck,
  Document,
  Check,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { getRecentBlogPosts } from "@/lib/blog-data";

interface BlogSidebarProps {
  currentSlug?: string;
}

const popularTrades = [
  { name: "Concrete Estimating", href: "/concrete-estimating-services" },
  { name: "MEP Estimating", href: "/mep-estimating-services" },
  { name: "Electrical Estimating", href: "/electrical-estimating-services" },
  { name: "Lumber Takeoffs", href: "/lumber-takeoff-services" },
  { name: "Commercial Estimating", href: "/commercial-estimating-services" },
];

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const recentPosts = getRecentBlogPosts(currentSlug, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 self-start">
      {/* 1. Quick Takeoff Promo Card */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 shadow-xs relative overflow-hidden space-y-4">
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
            Upload your blueprints and bid specifications today for a line-item CSI MasterFormat material takeoff calibrated to your regional zip code.
          </p>

          <div className="pt-1">
            <Button
              render={<Link href="/#contact" />}
              size="default"
              className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs shadow-xs rounded-lg justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Upload Plans Now</span>
                <ArrowRight size={13} />
              </span>
            </Button>
          </div>

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
              <span>Unlimited minor plan revisions</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Recent Articles Widget */}
      <div className="bg-card rounded-xl border border-border/80 shadow-2xs p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <h4 className="font-sans font-medium text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Recent Articles</span>
          </h4>
          <Link
            href="/our-blogs"
            className="text-[11px] text-primary hover:underline font-normal"
          >
            View All
          </Link>
        </div>

        <div className="space-y-3.5">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-3 items-start transition-colors"
            >
              <div className="relative w-16 h-14 shrink-0 rounded-lg overflow-hidden border border-border/60 bg-slate-100 dark:bg-slate-900">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <h5 className="font-serif font-normal text-xs sm:text-[13px] text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h5>
                <p className="font-sans text-[11px] text-muted-foreground">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Popular Estimating Trades */}
      <div className="bg-card rounded-xl border border-border/80 shadow-2xs p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <h4 className="font-sans font-medium text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Popular Estimating Trades</span>
          </h4>
        </div>

        <nav aria-label="Popular Trades" className="space-y-1">
          {popularTrades.map((trade) => (
            <Link
              key={trade.href}
              href={trade.href}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-[13px] text-foreground/80 hover:text-primary hover:bg-muted/40 transition-colors font-normal group"
            >
              <span>{trade.name}</span>
              <ArrowRight
                size={11}
                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary"
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* 4. Direct Estimator Contact Card */}
      <div className="bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-border/80 p-5 space-y-3.5">
        <div className="flex items-center gap-2 text-foreground font-serif font-normal text-sm">
          <ShieldCheck size={16} className="text-primary" />
          <span>Speak Directly with an Estimator</span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed font-normal">
          Have an urgent bid deadline or custom scope requirements? Our senior cost engineers are available to review your project.
        </p>

        <div className="space-y-2 pt-1">
          <a
            href="tel:+13468612915"
            className="flex items-center gap-2.5 text-xs text-foreground/90 hover:text-primary transition-colors p-2 rounded-lg bg-background border border-border/60"
          >
            <Call size={13} className="text-primary shrink-0" />
            <span className="font-sans text-[11.5px]">(346) 861-2915</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
