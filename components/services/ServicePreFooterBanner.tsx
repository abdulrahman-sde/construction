import Link from "next/link";
import { ArrowRight, Call, Clock, ShieldCheck } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServicePreFooterBanner() {
  return (
    <section className="relative py-20 md:py-24 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="blue" className="text-[10.5px]">
            Fast 24–48 Hour Turnaround
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground leading-[1.18] tracking-tight">
            Let&apos;s Discuss Your Construction{" "}
            <span className="font-normal text-primary">
              Estimating Needs
            </span>
          </h2>

          <p className="font-sans text-muted-foreground text-sm sm:text-base font-normal leading-relaxed">
            Don&apos;t let inaccurate takeoffs or tight bid deadlines hurt your margins. Partner with certified cost engineers and receive detailed CSI MasterFormat line-item takeoffs with up to 30% savings on estimating expenses.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              render={<Link href="#contact" />}
              size="lg"
              className="shadow-xs font-medium text-xs sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span>Upload Plans &amp; Blueprints</span>
                <ArrowRight size={14} />
              </span>
            </Button>

            <Button
              render={<a href="tel:+13466602440" />}
              variant="outline"
              size="lg"
              className="font-medium text-xs sm:text-sm border-border bg-background hover:bg-muted/40"
            >
              <span className="flex items-center gap-2">
                <Call size={14} />
                <span>Call (346) 660-2440</span>
              </span>
            </Button>
          </div>

          <div className="pt-4 border-t border-border/70 flex items-center gap-6 text-xs text-muted-foreground font-normal">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary shrink-0" />
              <span>AACE &amp; AIQS Certified Quantity Surveyors</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock size={15} className="text-primary shrink-0" />
              <span>RSMeans Zip-Code Localized Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
