"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "reicon-react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ className = "", onSuccess }: ContactFormProps) {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ec5b7772-d3b4-4b10-9e19-48a58af8c5e7");
    formData.append("from_name", "Buildcraft360 Website Lead");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setResult("Success! Your message has been sent. Our estimating team will reply within 2 hours.");
        if (onSuccess) onSuccess();
      } else {
        setIsSuccess(false);
        setResult(data.message || "An error occurred while sending your message. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label
          htmlFor="cf-name"
          className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
        >
          Your Name <span className="text-primary">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          required
          placeholder="e.g. John Henderson"
          className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
        >
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          placeholder="contractor@build.com"
          className="h-10 w-full rounded-lg border border-input bg-background px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="block text-[11px] font-medium text-foreground/80 uppercase tracking-wider mb-1.5"
        >
          Message / Project Scope <span className="text-primary">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Please describe your project scope, trade requirements, or questions..."
          className="w-full rounded-lg border border-input bg-background p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="xl"
        className="w-full justify-center text-xs sm:text-sm py-3.5 shadow-xs font-medium cursor-pointer"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Send Message</span>
            <ArrowRight size={14} />
          </span>
        )}
      </Button>

      {result && (
        <div
          className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2 animate-fade-in-up ${
            isSuccess
              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40"
              : "bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/40"
          }`}
        >
          {isSuccess && <Check size={14} className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />}
          <p>{result}</p>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-normal">
        <ShieldCheck size={13} className="text-primary" />
        <span>100% Privacy Protected. Never Shared.</span>
      </div>
    </form>
  );
}
