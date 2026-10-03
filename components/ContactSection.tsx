"use client";

import { ArrowRight, Gift } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
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
              <span className="font-normal text-primary">Estimating Needs</span>
            </h2>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              Ready to experience the difference with Buildcraft360? Take the next step
              towards accurate construction estimates and successful projects. Contact us today to
              request a quote with <span className="text-foreground font-medium">30% off</span> tailored to
              your specific needs.
            </p>

            <Card className="p-6 space-y-2 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm">
              <h4 className="font-medium text-sm text-foreground flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                  <Gift size={16} />
                </div>
                <span>Download our Free Sample Estimates</span>
              </h4>
              <p className="font-sans text-xs text-muted-foreground font-normal leading-relaxed pl-11">
                Want to inspect the precision of our takeoff spreadsheets and colored markup PDFs
                before ordering?
              </p>
            </Card>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="text-base font-serif font-normal text-foreground tracking-tight">
                    Upload Plans &amp; Get 30% Off
                  </h3>
                  <span className="font-sans text-xs text-muted-foreground font-normal">
                    Fast 24-48 hour turnaround on all trades
                  </span>
                </div>
                <Badge variant="primary" className="text-[10.5px]">
                  30% OFF
                </Badge>
              </div>

              <CardContent className="p-0">
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      type="text"
                      className="h-10 text-xs bg-background"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <Input
                        placeholder="(346) 000-0000"
                        type="tel"
                        className="h-10 text-xs bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <Input
                        placeholder="contractor@build.com"
                        type="email"
                        className="h-10 text-xs bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5">
                      Upload Drawings / Plan Link
                    </label>
                    <Input
                      placeholder="Paste Dropbox / Google Drive link"
                      type="text"
                      className="h-10 text-xs bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="xl"
                    className="w-full justify-center text-sm py-3.5 shadow-xs"
                  >
                    <span>Request Your Discounted Estimate &amp; Save 30%</span>
                    <ArrowRight size={14} />
                  </Button>
                  <p className="text-[11px] text-center text-muted-foreground mt-2 font-normal">
                    100% Confidentiality Guaranteed. NDA available on request.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
