import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ServiceFaq } from "@/lib/services-data";

interface ServiceFaqSectionProps {
  faqs?: ServiceFaq[];
  title?: string;
}

export default function ServiceFaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: ServiceFaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-border/80">
      <div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl font-normal leading-relaxed">
          Everything you need to know about our estimating process, pricing databases, and takeoff deliverables.
        </p>
      </div>

      <Accordion className="w-full space-y-2.5">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border border-border/80 rounded-xl px-5 py-1 bg-card hover:border-border transition-colors shadow-2xs"
          >
            <AccordionTrigger className="font-sans font-normal text-xs sm:text-sm text-foreground hover:text-primary py-3.5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-xs sm:text-[13px] text-muted-foreground font-normal leading-relaxed pb-4 pt-1 border-t border-border/60">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
