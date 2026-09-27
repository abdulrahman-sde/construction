import { Clock, ShieldCheck, Document, DollarCircle } from "reicon-react";
import { ServiceValueProp } from "@/lib/services-data";

interface ServiceValueGridProps {
  valueProps?: ServiceValueProp[];
  heading?: string;
  subheading?: string;
}

const defaultIcons = [
  <Clock key="clock" size={18} className="text-primary" />,
  <ShieldCheck key="shield" size={18} className="text-primary" />,
  <Document key="doc" size={18} className="text-primary" />,
  <DollarCircle key="dollar" size={18} className="text-primary" />,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {valueProps.map((item, idx) => (
          <div
            key={item.title}
            className="group p-5 sm:p-6 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-all duration-200 shadow-2xs space-y-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-200/50">
                {defaultIcons[idx % defaultIcons.length]}
              </div>
              <h4 className="font-sans font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
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
