"use client";

import { useState } from "react";
import { ArrowRight, Gift, Check, ShieldCheck } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ec5b7772-d3b4-4b10-9e19-48a58af8c5e7");
    formData.append("from_name", "Buildcraft360 Homepage Takeoff Form");
    formData.append("subject", "30% Off Estimate Request - Homepage / Service Section");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setResult("Success! Your plans have been submitted. Our senior estimator will review your sheets and send your 30% discounted quote within 2 hours.");
      } else {
        setResult(data.message || "An error occurred while submitting your plans. Please try again or email Info@buildcraft360.com.");
      }
    } catch {
      setResult("Network error. Please verify your connection or email your plans directly to Info@buildcraft360.com.");
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
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-fade-in-up">
                    <div className="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 mx-auto flex items-center justify-center">
                      <Check size={24} />
                    </div>
                    <div className="space-y-1.5 max-w-sm mx-auto">
                      <h4 className="font-serif font-normal text-lg text-foreground">
                        Estimate Request Received
                      </h4>
                      <p className="text-xs text-muted-foreground font-normal leading-relaxed">
                        {result}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs cursor-pointer"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div>
                      <label
                        htmlFor="cs-name"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Your Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="cs-name"
                        name="name"
                        required
                        placeholder="John Doe"
                        type="text"
                        className="h-10 text-xs bg-background"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="cs-phone"
                          className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                        >
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="cs-phone"
                          name="phone"
                          required
                          placeholder="(346) 000-0000"
                          type="tel"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cs-email"
                          className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                        >
                          Your Email <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="cs-email"
                          name="email"
                          required
                          placeholder="contractor@build.com"
                          type="email"
                          className="h-10 text-xs bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cs-drawings"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Upload Drawings / Plan Link
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
                          <span>Request Your Discounted Estimate &amp; Save 30%</span>
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
