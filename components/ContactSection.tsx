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
            <Badge variant="blue" className="text-[10.5px]">
              Special Limited Time Offer
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.18] tracking-tight text-foreground">
              Let&apos;s Discuss Your Construction{" "}
              <span className="font-normal text-primary">Estimating Needs</span>
            </h2>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              Ready to experience the difference with Construct Estimates? Take the next step
              towards accurate construction estimates and successful projects. Contact us today to
              request a quote with <span className="text-foreground font-medium">30% off</span> tailored to
              your specific needs.
            </p>

            <Card className="p-6 space-y-2 shadow-2xs border border-border">
              <h4 className="font-medium text-sm text-foreground flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-primary flex items-center justify-center">
                  <Gift size={16} />
                </div>
                <span>Download our Free Sample Estimates</span>
              </h4>
              <p className="font-sans text-xs text-muted-foreground font-normal leading-relaxed pl-9">
                Want to inspect the precision of our takeoff spreadsheets and colored markup PDFs
                before ordering?
              </p>
            </Card>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="text-base font-serif font-normal text-foreground tracking-tight">
                    Upload Plans &amp; Get 30% Off
                  </h3>
                  <span className="font-sans text-xs text-muted-foreground font-normal">
                    Fast 24-48 hour turnaround on all trades
                  </span>
                </div>
                <Badge variant="rose" className="text-[11px] font-medium">
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
