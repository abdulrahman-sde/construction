import Link from "next/link";
import { ArrowRight, Clock } from "reicon-react";
import { Button } from "@/components/ui/button";

interface ServiceMidCtaProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
}

export default function ServiceMidCta({
  heading = "Get Ahead of the Competition with Unbeatable Offers!",
  subtext = "Upload your architectural and engineering plans today. Receive a comprehensive, error-free takeoff within 24–48 hours at up to 30% off your first estimate.",
  ctaText = "Upload Plans Now",
}: ServiceMidCtaProps) {
  return (
    <section className="relative bg-slate-900 text-slate-100 rounded-xl p-7 sm:p-9 md:p-10 border border-slate-800 shadow-sm overflow-hidden my-8">
      {/* Subtle blueprint accent grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-slate-300 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700/70">
            <Clock size={12} className="text-primary" />
            <span>Turnaround Time: 24–48 Hours</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white leading-snug tracking-tight">
            {heading}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {subtext}
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Button
            render={<Link href="#contact" />}
            size="lg"
            className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 font-medium px-6 py-2.5 text-xs sm:text-sm shadow-xs rounded-lg"
          >
            <span className="flex items-center justify-center gap-2">
              <span>{ctaText}</span>
              <ArrowRight size={14} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
