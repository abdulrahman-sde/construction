"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "item-0",
    title: "Trust in Accurate Estimates",
    content:
      "At Construct Estimates, we deliver precise and dependable construction cost estimates. Our meticulous analysis and attention to detail ensure accurate projections, mitigating the risk of unexpected expenses and delays. Trust us for reliable estimates that provide a solid foundation for successful project planning and execution.",
  },
  {
    id: "item-1",
    title: "Save Time and Money",
    content:
      "Outsourcing your estimating needs to us saves you valuable time and reduces overhead costs by up to 50%. Our experienced team guarantees fast turnaround times (24 to 48 hours).",
  },
  {
    id: "item-2",
    title: "Certified Estimators",
    content:
      "Our certified estimators possess industry-leading qualifications, working alongside quantity surveyors and architects following RSMeans & CSI MasterFormat standards.",
  },
  {
    id: "item-3",
    title: "Meet Your Deadlines",
    content:
      "Streamlined processes enable on-time delivery so you never miss a bid submission window.",
  },
  {
    id: "item-4",
    title: "Competitive Pricing ($200 Avg)",
    content:
      "While the average cost of our services is only $200, our goal is exceptional return on investment without breaking your bank.",
  },
  {
    id: "item-5",
    title: "Customized Solutions",
    content:
      "We personalize estimates based on your local subcontractor rates, crew productivity, and suppliers.",
  },
  {
    id: "item-6",
    title: "Exceptional Customer Support (24/7)",
    content:
      "Our team is always reachable via phone, email, or chat to help answer client questions and addendum updates.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="py-24 md:py-32 bg-background border-t border-border"
      id="why-choose"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Graphic & Copy */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground leading-tight tracking-tight">
                Why Choose <br />
                <span className="font-normal text-primary">
                  Construct Estimates?
                </span>
              </h2>
              <p className="font-sans text-muted-foreground text-sm sm:text-base font-normal mt-3 leading-relaxed">
                We stand out from the competition regarding material takeoff and
                construction estimating services. Here&apos;s why contractors
                across North America &amp; Australia trust us:
              </p>
            </div>

            {/* Architecture Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border bg-card aspect-[4/3] flex flex-col justify-end p-6">
              <Image
                alt="High-rise building glass corner"
                className="absolute inset-0 object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 500px"
                src="/assets/trades/masonry.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="relative z-10 text-white space-y-2">
                <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-base mb-1 shadow-xs">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif font-normal text-base text-white">
                  Unmatched Precision
                </h4>
                <p className="font-sans text-xs text-white/80 font-normal leading-relaxed">
                  Detailed quantification covering every single material trade
                  with localized regional price index.
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-white/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    ✓ Fast Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    ✓ 24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion with elegant active state */}
          <div className="lg:col-span-7">
            <Accordion defaultValue={["item-0"]} className="space-y-3">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border rounded-xl px-5 py-1.5 bg-card transition-all duration-200 data-expanded:border-primary/40 data-expanded:bg-blue-50/30 dark:data-expanded:bg-blue-950/20 shadow-2xs"
                >
                  <AccordionTrigger className="text-foreground text-sm sm:text-base font-medium py-3.5 no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0 pb-3 font-normal">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
