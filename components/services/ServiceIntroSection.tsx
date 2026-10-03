import Link from "next/link";
import { ArrowRight, Check } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceIntroSectionProps {
  badge: string;
  headlinePrefix: string;
  highlightWord: string;
  headlineSuffix: string;
  leadParagraph: string;
  secondaryParagraph: string;
  ctaText?: string;
}

export default function ServiceIntroSection({
  badge,
  headlinePrefix,
  highlightWord,
  headlineSuffix,
  leadParagraph,
  secondaryParagraph,
  ctaText = "Request Accurate Estimate Now & Save 30%",
}: ServiceIntroSectionProps) {
  return (
    <section className="space-y-6">
      {/* Category Tag: Subtle chip matching site Badge variant="blue" */}
      <Badge variant="blue" className="text-[10.5px]">
        {badge}
      </Badge>

      {/* Main Headline: Editorial Serif, Strict font-normal */}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-foreground leading-[1.18] tracking-tight">
        {headlinePrefix}{" "}
        <span className="font-normal text-primary">
          {highlightWord}
        </span>{" "}
        {headlineSuffix}
      </h2>

      {/* Paragraphs: Clean font-sans font-normal */}
      <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
        <p className="font-normal text-foreground/90">{leadParagraph}</p>
        <p className="font-normal">{secondaryParagraph}</p>
      </div>

      {/* Trust checkmarks & Primary Action */}
      <div className="pt-2 space-y-5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-normal text-foreground/85">
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary shrink-0" />
            <span>24-48 Hours Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary shrink-0" />
            <span>RSMeans Zip-Code Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-primary shrink-0" />
            <span>95% Bid Acceptance Rate</span>
          </div>
        </div>

        <div>
          <Button
            render={<Link href="#contact" />}
            size="lg"
            className="shadow-xs font-medium text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <span>{ctaText}</span>
              <ArrowRight size={14} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
