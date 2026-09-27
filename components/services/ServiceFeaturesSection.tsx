import { Check } from "reicon-react";
import { ServiceScopeCategory } from "@/lib/services-data";

interface ServiceFeaturesSectionProps {
  heading: string;
  description?: string;
  categories: ServiceScopeCategory[];
}

export default function ServiceFeaturesSection({
  heading,
  description,
  categories,
}: ServiceFeaturesSectionProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-border/80">
      <div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          {heading}
        </h3>
        {description && (
          <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="p-5 rounded-xl border border-border/80 bg-card hover:border-border transition-colors shadow-2xs space-y-3"
          >
            <div className="flex items-center gap-2 border-b border-border/60 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <h4 className="font-sans font-medium text-xs uppercase tracking-wider text-muted-foreground">
                {cat.category}
              </h4>
            </div>

            <ul className="space-y-2">
              {cat.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/85 font-normal leading-snug"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-primary flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-blue-200/50">
                    <Check size={9} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
