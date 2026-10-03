import { Clock, ShieldCheck, Document, DollarCircle } from "reicon-react";
import { ServiceValueProp } from "@/lib/services-data";

interface ServiceValueGridProps {
  valueProps?: ServiceValueProp[];
  heading?: string;
  subheading?: string;
}

const defaultIcons = [
  <Clock key="clock" size={17} />,
  <ShieldCheck key="shield" size={17} />,
  <Document key="doc" size={17} />,
  <DollarCircle key="dollar" size={17} />,
];

export default function ServiceValueGrid({
  valueProps,
  heading = "Why Choose Our Estimating Expertise?",
  subheading = "We combine accredited quantity surveyors, cutting-edge measurement software, and localized cost databases to give you the competitive edge.",
}: ServiceValueGridProps) {
  if (!valueProps || valueProps.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-border/80">
      <div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl font-normal leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {valueProps.map((item, idx) => (
          <div
            key={item.title}
            className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm space-y-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                {defaultIcons[idx % defaultIcons.length]}
              </div>
              <h4 className="font-sans font-medium text-sm sm:text-base text-foreground">
                {item.title}
              </h4>
            </div>
            <p className="font-sans text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal pl-11">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
