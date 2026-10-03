import { Document } from "reicon-react";
import { ServiceDeliverable } from "@/lib/services-data";

interface ServiceDeliverablesSectionProps {
  heading?: string;
  deliverables?: ServiceDeliverable[];
}

export default function ServiceDeliverablesSection({
  heading = "What You Will Receive in Your Takeoff Package",
  deliverables,
}: ServiceDeliverablesSectionProps) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-border/80">
      <div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          {heading}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl font-normal leading-relaxed">
          Every estimate package is delivered in industry-standard formats ready for immediate bidding, supplier ordering, and field execution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {deliverables.map((d) => (
          <div
            key={d.title}
            className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm space-y-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                <Document size={15} />
              </div>
              <h4 className="font-sans font-medium text-sm text-foreground leading-snug">
                {d.title}
              </h4>
            </div>
            <p className="font-sans text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal pl-10.5">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
