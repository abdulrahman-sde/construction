"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  DocumentUpload,
  File,
  Call,
  Message,
  Gift,
  Lock,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TRADES = [
  "General Contracting / Full Build",
  "Concrete & Foundation",
  "Masonry & Brickwork",
  "MEP (Mechanical, Electrical, Plumbing)",
  "Electrical Only",
  "Lumber & Framing",
  "Drywall & Interior Finishes",
  "Thermal & Moisture Protection",
  "Sitework & Excavation",
  "Structural Steel & Metals",
  "Doors, Windows & Openings",
  "Other / Custom Trade",
];

const TIMELINES = [
  { label: "Emergency (< 24h)", desc: "Priority queue for bid closing today/tomorrow" },
  { label: "Standard (24–48h)", desc: "Regular turnaround for active bids" },
  { label: "Budgeting (3–5 days)", desc: "Preliminary / conceptual stage" },
];

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<"quote" | "general">("quote");
  const [selectedTrade, setSelectedTrade] = useState<string>("General Contracting / Full Build");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Standard (24–48h)");
  const [ndaRequested, setNdaRequested] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [trackingRef, setTrackingRef] = useState<string>("");

  // Quote form state
  const [quoteData, setQuoteData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectLocation: "",
    drawingLink: "",
    notes: "",
  });

  // General inquiry form state
  const [generalData, setGeneralData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitError, setSubmitError] = useState<string>("");

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const refId = `BC360-${Math.floor(Math.random() * 90000 + 10000)}`;
    setTrackingRef(refId);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ec5b7772-d3b4-4b10-9e19-48a58af8c5e7");
    formData.append("from_name", "Buildcraft360 Takeoff Portal");
    formData.append("subject", `New Takeoff Request: ${quoteData.fullName || "Contractor"} - 30% Off`);
    formData.append("trade_scope", selectedTrade);
    formData.append("turnaround_timeline", selectedTimeline);
    formData.append("nda_requested", ndaRequested ? "Yes (Mutual NDA Requested)" : "No");
    formData.append("tracking_reference", refId);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || "Failed to submit request. Please try again or email us directly at Info@buildcraft360.com.");
      }
    } catch {
      setSubmitError("Network connection error. Please verify your internet connection or email us directly at Info@buildcraft360.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const refId = `BC360-${Math.floor(Math.random() * 90000 + 10000)}`;
    setTrackingRef(refId);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ec5b7772-d3b4-4b10-9e19-48a58af8c5e7");
    formData.append("from_name", "Buildcraft360 Contact Portal");
    formData.append("subject", `General Inquiry: ${generalData.subject} from ${generalData.fullName || "Visitor"}`);
    formData.append("tracking_reference", refId);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || "Failed to send message. Please try again or email us directly at Info@buildcraft360.com.");
      }
    } catch {
      setSubmitError("Network connection error. Please verify your internet connection or email us directly at Info@buildcraft360.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setQuoteData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      projectLocation: "",
      drawingLink: "",
      notes: "",
    });
    setGeneralData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background text-foreground" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Interactive Form Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tab Selection Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-1.5 bg-slate-100 dark:bg-slate-900 border border-border/80 rounded-xl">
              <div className="grid grid-cols-2 gap-1.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("quote");
                    setIsSubmitted(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "quote"
                      ? "bg-background text-foreground shadow-2xs border border-border/80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <DocumentUpload size={14} className={activeTab === "quote" ? "text-primary" : ""} />
                  <span>Request Estimate &amp; Takeoff</span>
                  <span className="hidden sm:inline-block bg-primary/10 text-primary text-[10px] font-semibold px-1.5 py-0.5 rounded">
                    30% Off
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("general");
                    setIsSubmitted(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "general"
                      ? "bg-background text-foreground shadow-2xs border border-border/80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Message size={14} className={activeTab === "general" ? "text-primary" : ""} />
                  <span>General Inquiry &amp; Support</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-muted-foreground pr-2 font-mono">
                <Clock size={12} className="text-primary" />
                <span>2-Hour Plan Review SLA</span>
              </div>
            </div>

            {/* Form Card Container */}
            <Card className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-fade-in-up">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 mx-auto flex items-center justify-center shadow-xs">
                    <Check size={28} />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <h3 className="font-serif font-normal text-2xl sm:text-3xl text-foreground tracking-tight">
                      {activeTab === "quote"
                        ? "Takeoff Request Received"
                        : "Message Sent Successfully"}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeTab === "quote"
                        ? "Thank you! Our senior cost engineering team has received your project specifications. We are conducting the initial sheet audit and will reply with a detailed scope confirmation and formal 30% discounted quote within 2 hours."
                        : "Thank you for reaching out to Buildcraft360. A member of our operations team will review your inquiry and get back to you shortly."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border max-w-md mx-auto text-left space-y-2 text-xs">
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>Tracking Reference:</span>
                      <span className="font-mono font-medium text-foreground">
                        {trackingRef || "BC360-84920"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>Target Response:</span>
                      <span className="font-medium text-foreground">Within 2 Hours (CST / AEST)</span>
                    </div>
                    {ndaRequested && (
                      <div className="flex justify-between items-center text-muted-foreground">
                        <span>Confidentiality:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          Mutual NDA will be attached to initial email
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleReset}
                      className="text-xs"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : activeTab === "quote" ? (
                /* Tab 1: Request Estimate Form */
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="space-y-1 border-b border-border/80 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-normal text-xl text-foreground tracking-tight">
                        Project &amp; Blueprint Intake
                      </h3>
                      <Badge variant="primary" className="text-[10px] tracking-wide uppercase">
                        30% New Client Discount
                      </Badge>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground font-normal">
                      Upload your drawings, spec sheets, or paste cloud storage links. We review all CSI divisions.
                    </p>
                  </div>

                  {/* Contact Info (2x2 grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="name"
                        type="text"
                        required
                        value={quoteData.fullName}
                        onChange={(e) => setQuoteData({ ...quoteData, fullName: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Company / Contractor Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={quoteData.company}
                        onChange={(e) => setQuoteData({ ...quoteData, company: e.target.value })}
                        placeholder="e.g. Henderson Builders LLC"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        placeholder="contractor@domain.com"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Cell / Direct Phone <span className="text-primary">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        placeholder="(346) 000-0000"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Location & Local Zip Code */}
                  <div>
                    <label
                      htmlFor="projectLocation"
                      className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                    >
                      Project Location (City, State / ZIP Code)
                    </label>
                    <input
                      id="projectLocation"
                      name="project_location"
                      type="text"
                      value={quoteData.projectLocation}
                      onChange={(e) => setQuoteData({ ...quoteData, projectLocation: e.target.value })}
                      placeholder="e.g. Houston, TX 77007 (Used for RSMeans localized labor rates)"
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                    />
                    <span className="text-[11px] text-muted-foreground mt-1 block font-normal">
                      We localize RSMeans materials and union/non-union labor indexes to your exact project postal code.
                    </span>
                  </div>

                  {/* Primary Scope / Trade Selector */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider">
                      Select Primary Scope or Trade <span className="text-primary">*</span>
                    </label>
                    <select
                      name="trade_scope"
                      value={selectedTrade}
                      onChange={(e) => setSelectedTrade(e.target.value)}
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors cursor-pointer"
                    >
                      {TRADES.map((trade) => (
                        <option key={trade} value={trade}>
                          {trade}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bidding Due Date & Turnaround Timeline */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider">
                      Required Turnaround Timeline <span className="text-primary">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {TIMELINES.map((t) => (
                        <button
                          key={t.label}
                          type="button"
                          onClick={() => setSelectedTimeline(t.label)}
                          className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                            selectedTimeline === t.label
                              ? "border-primary bg-primary/5 dark:bg-primary/10 shadow-2xs"
                              : "border-border bg-background hover:bg-neutral-50 dark:hover:bg-neutral-850"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-foreground block">
                              {t.label}
                            </span>
                            {selectedTimeline === t.label && (
                              <Check size={13} className="text-primary shrink-0" />
                            )}
                          </div>
                          <span className="text-[11px] text-muted-foreground font-normal leading-tight block">
                            {t.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Drawing Link / Cloud Storage */}
                  <div>
                    <label
                      htmlFor="drawingLink"
                      className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                    >
                      Drawing / Plan Link (Dropbox, Google Drive, OneDrive, Procore, Box)
                    </label>
                    <div className="relative">
                      <input
                        id="drawingLink"
                        name="drawing_link"
                        type="url"
                        value={quoteData.drawingLink}
                        onChange={(e) => setQuoteData({ ...quoteData, drawingLink: e.target.value })}
                        placeholder="https://www.dropbox.com/s/your-blueprints-link"
                        className="h-10 w-full rounded-lg border border-input bg-background pl-3 pr-24 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground uppercase bg-muted/60 px-1.5 py-0.5 rounded">
                        Cloud URL
                      </span>
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1.5 flex items-center gap-1.5 font-normal">
                      <File size={12} className="text-primary shrink-0" />
                      <span>
                        Or email large drawing sets directly to{" "}
                        <a
                          href="mailto:Info@buildcraft360.com"
                          className="text-foreground font-medium underline underline-offset-2 hover:text-primary"
                        >
                          Info@buildcraft360.com
                        </a>
                      </span>
                    </span>
                  </div>

                  {/* Project Notes / Addenda Details */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                    >
                      Scope Specifics &amp; Addenda Instructions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="message"
                      rows={3}
                      value={quoteData.notes}
                      onChange={(e) => setQuoteData({ ...quoteData, notes: e.target.value })}
                      placeholder="e.g. Include addendum #2. Exclude MEP fixtures. Provide separate line item for site concrete."
                      className="w-full rounded-lg border border-input bg-background p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                    />
                  </div>

                  {/* Mutual NDA Request Checkbox */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-slate-50/50 dark:bg-slate-900/50">
                    <input
                      id="ndaCheckbox"
                      name="nda_requested"
                      type="checkbox"
                      checked={ndaRequested}
                      onChange={(e) => setNdaRequested(e.target.checked)}
                      className="mt-0.5 size-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="ndaCheckbox" className="text-xs text-foreground cursor-pointer select-none">
                      <span className="font-medium flex items-center gap-1.5">
                        <Lock size={12} className="text-primary shrink-0" />
                        <span>Request a Mutual Non-Disclosure Agreement (NDA)</span>
                      </span>
                      <span className="text-muted-foreground block text-[11px] mt-0.5 font-normal leading-normal">
                        Check this box if your client or owner requires a signed NDA before we open project files. We will send our standard mutual NDA immediately.
                      </span>
                    </label>
                  </div>

                  {/* Error Message Display */}
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40 text-xs leading-relaxed animate-fade-in-up">
                      <p>{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 space-y-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="xl"
                      className="w-full justify-center text-xs sm:text-sm py-3.5 shadow-xs font-medium cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Plan Intake...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Submit Plans &amp; Receive 30% Off Quote</span>
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </Button>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted-foreground font-normal">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-primary" />
                        100% Confidentiality Guaranteed
                      </span>
                      <span>•</span>
                      <span>No Obligation or Hidden Fees</span>
                      <span>•</span>
                      <span>Zero Extra Charge for Addenda Reviews</span>
                    </div>
                  </div>
                </form>
              ) : (
                /* Tab 2: General Inquiry Form */
                <form onSubmit={handleGeneralSubmit} className="space-y-6">
                  <div className="space-y-1 border-b border-border/80 pb-4">
                    <h3 className="font-serif font-normal text-xl text-foreground tracking-tight">
                      General Inquiries &amp; Contractor Partnerships
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground font-normal">
                      Have questions about our estimating staff, monthly retainer plans, or billing? Drop us a note.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="genName"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="genName"
                        name="name"
                        type="text"
                        required
                        value={generalData.fullName}
                        onChange={(e) => setGeneralData({ ...generalData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="genCompany"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="genCompany"
                        name="company"
                        type="text"
                        value={generalData.company}
                        onChange={(e) => setGeneralData({ ...generalData, company: e.target.value })}
                        placeholder="e.g. Jenkins Construction"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="genEmail"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="genEmail"
                        name="email"
                        type="email"
                        required
                        value={generalData.email}
                        onChange={(e) => setGeneralData({ ...generalData, email: e.target.value })}
                        placeholder="sarah@jenkins.com"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="genPhone"
                        className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="genPhone"
                        name="phone"
                        type="tel"
                        value={generalData.phone}
                        onChange={(e) => setGeneralData({ ...generalData, phone: e.target.value })}
                        placeholder="(346) 000-0000"
                        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="genSubject"
                      className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                    >
                      Inquiry Subject
                    </label>
                    <select
                      id="genSubject"
                      name="subject"
                      value={generalData.subject}
                      onChange={(e) => setGeneralData({ ...generalData, subject: e.target.value })}
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors cursor-pointer"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Monthly Dedicated Estimator Plan">Monthly Retainer &amp; Estimator Dedicated Plan</option>
                      <option value="Sample Takeoff Package Request">Request Sample Estimates &amp; Markups</option>
                      <option value="Billing & Invoicing">Billing / Accounting Support</option>
                      <option value="Subcontractor Network">Subcontractor Coordination</option>
                      <option value="Other">Other Topic</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="genMessage"
                      className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
                    >
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="genMessage"
                      name="message"
                      rows={5}
                      required
                      value={generalData.message}
                      onChange={(e) => setGeneralData({ ...generalData, message: e.target.value })}
                      placeholder="Please share details on how we can assist you..."
                      className="w-full rounded-lg border border-input bg-background p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40 text-xs leading-relaxed animate-fade-in-up">
                      <p>{submitError}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="xl"
                      className="w-full justify-center text-xs sm:text-sm py-3.5 shadow-xs font-medium cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Send Message</span>
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Right Rail: Direct Trust, SLA & Sample Downloads (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Rapid Review SLA Card */}
            <Card className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-normal text-base text-foreground">
                    Estimating Review SLA
                  </h4>
                  <span className="font-mono text-[11px] text-primary block">
                    Fast &amp; Predictable Milestones
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border/60 text-xs font-sans">
                <div className="py-2.5 flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">Drawing Audit:</span>
                  <span className="font-medium text-foreground text-right">Within 2 Hours</span>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">Proposal &amp; 30% Off:</span>
                  <span className="font-medium text-foreground text-right">Free in 2–4 Hours</span>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">Single-Trade Takeoff:</span>
                  <span className="font-medium text-foreground text-right">24 Hours Guaranteed</span>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">Full Commercial Package:</span>
                  <span className="font-medium text-foreground text-right">24–48 Hours</span>
                </div>
              </div>
            </Card>

            {/* Supported Plan Formats Card */}
            <Card className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card p-6 space-y-3.5 shadow-sm">
              <h4 className="font-serif font-normal text-base text-foreground">
                Accepted Plan Formats
              </h4>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                Our team works with all industry-standard CAD, BIM, and vector formats:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["PDF", "DWG", "DXF", "Revit (RVT)", "TIFF", "PlanSwift", "Bluebeam Revu", "IFC"].map(
                  (format) => (
                    <span
                      key={format}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-foreground border border-border"
                    >
                      {format}
                    </span>
                  )
                )}
              </div>
            </Card>

            {/* Free Sample Takeoff Card */}
            <Card className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-slate-900 text-white p-6 space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-slate-800 text-primary border border-slate-700 flex items-center justify-center shrink-0">
                    <Gift size={16} />
                  </div>
                  <h4 className="font-serif font-normal text-base text-white">
                    Inspect Our Work Samples
                  </h4>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
                  Download our sample estimation package, complete with color-coded Bluebeam PDF markups and editable Excel line-item takeoff spreadsheets.
                </p>

                <div className="pt-1">
                  <Button
                    render={<Link href="/our-projects" />}
                    size="sm"
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs rounded-lg gap-2"
                  >
                    <span>View Project Showcase &amp; Markups</span>
                    <ArrowRight size={13} />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Direct Calling Card */}
            <div className="p-4 rounded-xl border border-border bg-card space-y-2 text-xs">
              <span className="font-medium text-foreground uppercase tracking-wider text-[10px] block">
                Immediate Assistance
              </span>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Need to speak with an estimator immediately about an upcoming bid submission deadline?
              </p>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href="tel:+13468612915"
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Call size={14} className="text-primary shrink-0" />
                  <span>(346) 861-2915</span>
                </a>
                <a
                  href="mailto:Info@buildcraft360.com"
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Message size={14} className="text-primary shrink-0" />
                  <span>Info@buildcraft360.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
