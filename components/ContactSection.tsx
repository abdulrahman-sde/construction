"use client";

import { useState } from "react";
import { ArrowRight, Gift, Check, ShieldCheck } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/contact";

interface ContactSectionProps {
  currentSlug?: string;
  category?: "estimating" | "planning" | "architectural";
  serviceTitle?: string;
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

export default function ContactSection({
  currentSlug = "",
  category,
  serviceTitle,
}: ContactSectionProps = {}) {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const isPlanning = category === "planning" || PLANNING_SLUGS.has(currentSlug);
  const isArchitecture = category === "architectural" || ARCHITECTURE_SLUGS.has(currentSlug);

  // Content tailoring based on service category
  let sampleTitle = "Download our Free Sample Projects";
  let sampleDesc =
    "Explore our sample projects to see the quality of our estimating, planning, and architectural services.";
  let formTitle = "Upload Plans & Get 30% Off";
  let formSubtitle = "Fast 24-48 hour turnaround on all trades";
  let formSuccessMessage =
    "Success! Your plans have been submitted. Our senior estimator will review your sheets and send your 30% discounted quote within 2 hours.";

  if (isPlanning) {
    sampleTitle = "Download our Free Sample Schedules";
    sampleDesc =
      "Want to inspect the precision of our Primavera P6 Gantt charts, WBS trees, and schedule narratives before ordering?";
    formTitle = "Upload Project Scope & Get 30% Off";
    formSubtitle = "Fast 24-48 hour turnaround on baseline schedules and reviews";
    formSuccessMessage =
      "Success! Your project scope has been submitted. Our senior planning engineer will review your documents and send your proposal within 2 hours.";
  } else if (isArchitecture) {
    sampleTitle = "Download our Free Sample Architectural Sets";
    sampleDesc =
      "Want to inspect the quality of our floor plans, elevation sets, and 3D architectural renderings before ordering?";
    formTitle = "Upload Design Brief & Get 30% Off";
    formSubtitle = "Fast turnaround on permit-ready drawings and 3D models";
    formSuccessMessage =
      "Success! Your design brief has been submitted. Our senior architectural designer will review your concepts and send your proposal within 2 hours.";
  }

  const formSubject = serviceTitle
    ? `30% Off Request - ${serviceTitle}`
    : isPlanning
    ? "30% Off Schedule Request - Planning Section"
    : isArchitecture
    ? "30% Off Design Request - Architectural Section"
    : "30% Off Estimate Request - Homepage / Service Section";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Buildcraft360 Request Form");
    formData.append("subject", formSubject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setResult(formSuccessMessage);
      } else {
        setResult(data.message || "An error occurred while submitting your request. Please try again or email Info@buildcraft360.com.");
      }
    } catch {
      setResult("Network error. Please verify your connection or email your requirements directly to Info@buildcraft360.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 md:py-32 bg-slate-50/60 dark:bg-slate-950/30 text-foreground relative border-t border-border"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-7">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block">
              Inquiries &amp; Quotes
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.18] tracking-tight text-foreground">
              Let&apos;s Discuss Your Construction{" "}
              <span className="font-normal text-primary">Project</span>
            </h2>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              From accurate cost estimates to project planning and architectural support, Buildcraft360 helps you move your projects forward with confidence.
            </p>

            <Card className="p-6 space-y-2 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm">
              <h4 className="font-medium text-sm text-foreground flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                  <Gift size={16} />
                </div>
                <span>{sampleTitle}</span>
              </h4>
              <p className="font-sans text-xs text-muted-foreground font-normal leading-relaxed pl-11">
                {sampleDesc}
              </p>
            </Card>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="text-base font-serif font-normal text-foreground tracking-tight">
                    {formTitle}
                  </h3>
                  <span className="font-sans text-xs text-muted-foreground font-normal">
                    {formSubtitle}
                  </span>
                </div>
                <Badge variant="primary" className="text-[10.5px]">
                  30% OFF
                </Badge>
              </div>

              <CardContent className="p-0">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-fade-in-up">
                    <div className="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 mx-auto flex items-center justify-center">
                      <Check size={24} />
                    </div>
                    <div className="space-y-1.5 max-w-sm mx-auto">
                      <h4 className="font-serif font-normal text-lg text-foreground">
                        Request Received
                      </h4>
                      <p className="text-xs text-muted-foreground font-normal leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="cs-name"
                          className="text-xs font-normal text-muted-foreground"
                        >
                          Your Name *
                        </label>
                        <Input
                          id="cs-name"
                          name="name"
                          placeholder="John Doe"
                          required
                          type="text"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="cs-email"
                          className="text-xs font-normal text-muted-foreground"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="cs-email"
                          name="email"
                          placeholder="john@construction.com"
                          required
                          type="email"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="cs-phone"
                          className="text-xs font-normal text-muted-foreground"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="cs-phone"
                          name="phone"
                          placeholder="(555) 000-0000"
                          type="tel"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="cs-trade"
                          className="text-xs font-normal text-muted-foreground"
                        >
                          Trade / Scope of Work
                        </label>
                        <Input
                          id="cs-trade"
                          name="trade"
                          placeholder={
                            isPlanning
                              ? "e.g., Primavera P6 CPM Schedule"
                              : isArchitecture
                              ? "e.g., 2D Floor Plans & 3D Renderings"
                              : "e.g., Drywall, Electrical, Full Package"
                          }
                          type="text"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="cs-notes"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        Project Details / Specific Notes
                      </label>
                      <textarea
                        id="cs-notes"
                        name="notes"
                        rows={3}
                        placeholder={
                          isPlanning
                            ? "Tell us about your project milestones, target completion date, or contract scheduling requirements..."
                            : isArchitecture
                            ? "Tell us about your building concept, square footage, styling preferences, or permitting requirements..."
                            : "Tell us about your project scope, turnaround deadline, location zip code, or specific divisions needed..."
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none font-sans font-normal"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="cs-drawings"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        {isPlanning
                          ? "Project Scope / Drawing Link"
                          : isArchitecture
                          ? "Design Brief / Sketches Link"
                          : "Upload Drawings / Plan Link"}
                      </label>
                      <Input
                        id="cs-drawings"
                        name="drawing_link"
                        placeholder="Paste Dropbox / Google Drive link"
                        type="text"
                        className="h-10 text-xs bg-background"
                      />
                    </div>

                    {result && !isSubmitted && (
                      <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40 text-xs leading-relaxed animate-fade-in-up">
                        <p>{result}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="xl"
                      className="w-full justify-center text-sm py-3.5 shadow-xs cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Discuss Your Project Needs &amp; Save 30%</span>
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </Button>

                    <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-normal">
                      <ShieldCheck size={13} className="text-primary" />
                      <span>100% Confidentiality Guaranteed. NDA available on request.</span>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
