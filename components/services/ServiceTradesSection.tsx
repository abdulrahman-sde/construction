import Link from "next/link";
import { ArrowRight, Check } from "reicon-react";
import { ESTIMATING_TRADES } from "@/lib/trades-data";

interface ServiceTradesSectionProps {
  serviceTitle: string;
}

export default function ServiceTradesSection({
  serviceTitle,
}: ServiceTradesSectionProps) {
  return (
    <section className="space-y-6 pt-4 border-t border-border/80">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          Trades for {serviceTitle}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl font-normal">
          Every project requires discipline-specific takeoff accuracy. Explore our 8 dedicated trade divisions
          calibrated to your local zip code and CSI MasterFormat standards:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {ESTIMATING_TRADES.map((trade) => (
          <Link
            key={trade.slug}
            href={trade.href}
            className="group block p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:bg-neutral-50 dark:hover:bg-neutral-900/60 hover:border-primary/40 transition-all duration-200 shadow-2xs hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5 min-w-0">
                <span className="text-[11px] font-medium uppercase tracking-wider text-primary">
                  {trade.csiDivision}
                </span>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {trade.title}
                </h3>
              </div>
              <div className="size-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-all">
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 font-normal">
              {trade.description}
            </p>

            <div className="mt-3.5 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] text-foreground/80 font-medium group-hover:text-primary transition-colors">
              <Check size={12} className="text-primary shrink-0" />
              <span>Explore Trade Scope &amp; Deliverables</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
