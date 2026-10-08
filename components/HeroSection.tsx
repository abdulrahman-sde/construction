import Link from "next/link";
import { Check, Shield2, Headset, TickCircle, ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

const checklistItems = [
  "Any Trade or Any Kind of Project",
  "Ensure up to 100% Accuracy",
  "No Hidden Charges",
];

const trustBadges = [
  {
    icon: <Shield2 size={20} className="text-primary" />,
    label: "No hassle",
  },
  {
    icon: <Headset size={20} className="text-primary" />,
    label: "24/7 support",
  },
  {
    icon: <TickCircle size={20} className="text-primary" />,
    label: "Accurate result",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative blueprint-subtle-grid pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-border/80"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 space-y-7 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-serif font-normal text-foreground leading-[1.15] tracking-tight">
              Construction Estimating,{" "}
              <span className="font-normal text-primary">
                Planning &amp; Architectural
              </span>{" "}
              Services
            </h1>

            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl font-normal">
              Accurate and detailed estimating, takeoffs, planning, and
              architectural support tailored to your project needs—helping
              contractors, builders, and professionals work faster and with
              confidence.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-foreground/90 text-sm font-normal">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check size={18} className="text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                render={
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="xl"
                className="shadow-sm font-medium"
              >
                <span>
                  Reduce Your Estimating Expenses{" "}
                  <span className="underline decoration-white/60">
                    Up to 30%
                  </span>
                </span>
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-border flex items-center gap-8 text-xs font-medium text-foreground">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-foreground flex items-center justify-center shadow-2xs">
                    {b.icon}
                  </div>
                  <span className="text-xs text-foreground/80 font-normal">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:col-span-6 relative animate-fade-in-up stagger-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-border bg-neutral-950">
              <video
                src="/83a4-44e0-a346-60e9de20bcf7.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto aspect-video object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
