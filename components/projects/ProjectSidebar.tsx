"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  File,
  Call,
  Message,
  ArrowRight,
  ShieldCheck,
  Check,
  Clock,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { ProjectCaseStudy } from "@/lib/projects-data";
import { WHATSAPP_URL } from "@/lib/contact";

interface ProjectSidebarProps {
  project: ProjectCaseStudy;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setDownloadSuccess(true);
    }
  };

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 self-start">
      {/* 1. Download Sample Package Card */}
      <div
        id="sample-download"
        className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 space-y-4 shadow-sm"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Download size={15} />
          </span>
          <div>
            <h3 className="font-serif font-normal text-lg text-foreground leading-snug">
              Download Sample Package
            </h3>
            <p className="text-[11px] font-sans text-muted-foreground">
              {project.samplePdfName} ({project.sampleFileSize})
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-sans font-normal leading-relaxed">
          Inspect our real plan markups and CSI 16-Division Excel worksheets. Enter your email to receive instant access.
        </p>

        {downloadSuccess ? (
          <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-normal space-y-1">
            <p className="font-medium">Sample link ready!</p>
            <p className="text-[11px] opacity-90">
              Check your inbox for the download bundle, or click below:
            </p>
            <a
              href={`#`}
              className="inline-flex items-center gap-1 text-primary hover:underline text-[11px] pt-1"
            >
              <File size={12} />
              <span>Direct Download: {project.samplePdfName}</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-2.5">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full text-xs font-sans px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              variant="default"
              size="default"
              className="w-full text-xs font-medium justify-center rounded-lg gap-2"
            >
              <Download size={13} />
              <span>Get Free Sample Files</span>
            </Button>
          </form>
        )}

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10.5px] font-sans text-muted-foreground">
          <span>✓ Includes PDF &amp; Excel BOQ</span>
          <span>✓ No Credit Card Required</span>
        </div>
      </div>

      {/* 2. Project Quick Specifications Box */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h4 className="font-serif font-normal text-lg text-foreground">
          Project Quick Specs
        </h4>

        <dl className="space-y-3 text-xs divide-y divide-border/60">
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Category</dt>
            <dd className="font-normal text-foreground">{project.category}</dd>
          </div>
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Client Type</dt>
            <dd className="font-normal text-foreground">{project.clientType}</dd>
          </div>
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Delivery Time</dt>
            <dd className="font-normal text-foreground">{project.turnaroundTime}</dd>
          </div>
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Software Used</dt>
            <dd className="font-normal text-foreground text-right">
              {project.softwareUsed.join(", ")}
            </dd>
          </div>
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Cost Database</dt>
            <dd className="font-normal text-foreground">RSMeans 2026 Localized</dd>
          </div>
          <div className="flex justify-between pt-2">
            <dt className="text-muted-foreground font-sans">Certification</dt>
            <dd className="font-normal text-foreground">AACE &amp; AIQS Standard</dd>
          </div>
        </dl>
      </div>

      {/* 3. Promo Slate Card: 30% Off First Estimate */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 shadow-sm relative overflow-hidden space-y-4">
        <div className="relative z-10 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 text-[10.5px] font-medium tracking-wide uppercase text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
            <Clock size={12} className="text-primary" />
            <span>Limited Offer: 30% Off</span>
          </div>

          <h3 className="text-xl font-serif font-normal text-white leading-snug tracking-tight">
            Have a Similar Project to Bid?
          </h3>

          <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
            Upload your blueprints today for an audit-proof takeoff delivered in 24–48 hours with 30% new-client savings applied.
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
                <span>Upload Plans via WhatsApp</span>
                <ArrowRight size={13} />
              </span>
            </Button>
          </div>

          {/* Direct Contact Links */}
          <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
            <a
              href="tel:+13468612915"
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
            >
              <Call size={14} className="text-primary shrink-0" />
              <span>(346) 861-2915</span>
            </a>
            <a
              href="mailto:Info@buildcraft360.com"
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
            >
              <Message size={14} className="text-primary shrink-0" />
              <span className="truncate">Info@buildcraft360.com</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
