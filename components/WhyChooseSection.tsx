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
    title: "Trust in Accuracy",
    content:
      "At Buildcraft360, we provide accurate and dependable support across estimating, takeoffs, planning, and architectural services. Our attention to detail helps you make informed decisions, control costs, and keep projects on track.",
  },
  {
    id: "item-1",
    title: "Save Time and Money",
    content:
      "Outsourcing your estimating needs to us saves you valuable time and reduces overhead costs by up to 50%. Our experienced team guarantees fast turnaround times (24 to 48 hours).",
  },
  {
    id: "item-2",
    title: "Experienced Estimators & Planners",
    content:
      "Our experienced estimators and planners deliver accurate, practical, and reliable support using proven industry practices and standards.",
  },
  {
    id: "item-3",
    title: "Meet Your Deadlines",
    content:
      "Streamlined processes enable on-time delivery so you never miss a bid submission window.",
  },
  {
    id: "item-4",
    title: "Competitive Pricing ($150 Avg)",
    content:
      "While the average cost of our services is only $150, our goal is exceptional return on investment without breaking your bank.",
  },
  {
    id: "item-5",
    title: "Customized Solutions",
    content:
      "We tailor our estimating, planning, and architectural services to your project requirements, goals, and scope.",
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
                  Buildcraft360?
                </span>
              </h2>
              <p className="font-sans text-muted-foreground text-sm sm:text-base font-normal mt-3 leading-relaxed">
                Buildcraft360 provides practical, accurate, and reliable
                construction support services—from estimating and quantity
                takeoffs to planning and architectural services. We help
                contractors and construction professionals make informed
                decisions, improve project efficiency, control costs, and deliver
                projects with confidence.
              </p>
            </div>

            {/* Architecture Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border bg-card aspect-[4/3] flex flex-col justify-end p-6">
              <Image
                alt="High-rise building glass corner construction"
                className="absolute inset-0 object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 500px"
                src="/assets/images/why-choose-building.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="relative z-10 text-white space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-base mb-1 shadow-xs">
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
                  Comprehensive Expertise
                </h4>
                <p className="font-sans text-xs text-white/80 font-normal leading-relaxed">
                  Accurate, practical, and detail-focused support across
                  estimating, quantity takeoffs, planning, and architectural
                  services—helping you make better project decisions from initial
                  planning through execution.
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

          {/* Right: Accordion with architectural active state */}
          <div className="lg:col-span-7">
            <Accordion defaultValue={["item-0"]} className="space-y-3">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border/80 rounded-xl px-5 py-1.5 bg-card transition-all duration-200 data-expanded:border-neutral-400 dark:data-expanded:border-neutral-600 data-expanded:bg-neutral-50/60 dark:data-expanded:bg-neutral-900/40 shadow-2xs"
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
