import Link from "next/link";
import { ArrowRight, Clock } from "reicon-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

interface ServiceMidCtaProps {
  badgeText?: string;
  heading?: string;
  subtext?: string;
  ctaText?: string;
}

export default function ServiceMidCta({
  badgeText = "Turnaround Time: 24–48 Hours",
  heading = "Get Ahead of the Competition with Unbeatable Electrical Estimating Services Offers!",
  subtext = "Upload your blueprints and specifications today. Receive a comprehensive line-item takeoff within 24-48 hours.",
  ctaText = "Upload Plans Now",
}: ServiceMidCtaProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#1754B5] to-[#1E64D8] text-white rounded-2xl p-5 sm:p-6 md:p-6 border border-blue-600/30 shadow-sm overflow-hidden my-6">
      {/* Subtle blueprint accent grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-white bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
            <Clock size={12} className="text-white" />
            <span>{badgeText}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-normal text-white leading-snug tracking-tight">
            {heading}
          </h3>

          <p className="font-sans text-xs sm:text-[13px] text-blue-100/90 leading-relaxed font-normal">
            {subtext}
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Button
            render={
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="default"
            className="w-full md:w-auto bg-white text-primary hover:bg-neutral-100 font-medium px-5 py-2 text-xs sm:text-sm shadow-xs rounded-xl"
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
