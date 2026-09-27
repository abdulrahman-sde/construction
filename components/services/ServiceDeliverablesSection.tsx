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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {deliverables.map((d) => (
          <div
            key={d.title}
            className="p-5 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-2xs space-y-2"
          >
            <div className="flex items-center gap-2.5 text-primary">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-200/50">
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
