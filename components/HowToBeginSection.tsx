import Link from "next/link";
import { ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    num: 1,
    active: true,
    title: "Submit Your Drawing Plans",
    body: (
      <>
        You can easily upload your drawing plans in various formats including PDF files through
        our user-friendly platform, contact page or simply email us at{" "}
        <a
          className="text-primary font-medium underline underline-offset-2"
          href="mailto:Info@buildcraft360.com"
        >
          Info@buildcraft360.com
        </a>
        . Provide us with your project scope and details.
      </>
    ),
    cta: { label: "Upload Plans Here", href: "#contact" },
  },
  {
    num: 2,
    active: false,
    title: "We Review The Plans",
    body: "Our team will swiftly proceed to review the intricacies of your project. We understand that every project is unique, analyzing factors such as project range, complexity, and involved trades.",
  },
  {
    num: 3,
    active: false,
    title: "Get A Quote",
    body: "After reviewing your plans, we will promptly respond with a detailed quote containing invoice, turnaround time, and delivery date.",
  },
  {
    num: 4,
    active: false,
    title: "Receive an Estimate",
    body: "Our estimators meticulously generate an accurate estimate in standard organized Excel format and colored markup PDF plans.",
  },
];

export default function HowToBeginSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border" id="how-to-begin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block mb-2.5">
            Workflow Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
            How to Begin{" "}
            <span className="font-normal text-primary">Construction Estimation</span> &amp; Quantity
            Takeoffs with Us
          </h2>
          <p className="font-sans text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-xl mx-auto">
            Get your itemized bill of materials and colored markup plans in four straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Upload card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <Card className="w-full max-w-sm p-6 sm:p-7 shadow-sm border border-neutral-200/90 dark:border-neutral-800 rounded-2xl space-y-4">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-center text-xl mx-auto shadow-2xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="font-serif font-normal text-foreground text-base">Send Us Your Plans</h4>
                  <p className="text-xs text-muted-foreground mt-1 font-normal">
                    Accepting PDF, CAD, TIFF, PlanSwift &amp; Dropbox links.
                  </p>
                </div>
                <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-5 text-center bg-neutral-50/80 dark:bg-neutral-900/40 space-y-2">
                  <svg className="w-6 h-6 text-neutral-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75z" />
                  </svg>
                  <span className="block text-xs font-medium text-foreground">
                    Drag &amp; Drop drawings here
                  </span>
                  <span className="block text-[10.5px] text-muted-foreground font-normal">
                    or email to Info@buildcraft360.com
                  </span>
                  <div className="pt-2">
                    <Button
                      render={<Link href="#contact" />}
                      size="default"
                      className="text-xs px-4"
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4 group">
                <div
                  className={`w-9 h-9 rounded-full font-sans font-medium flex items-center justify-center flex-shrink-0 text-xs shadow-2xs transition-colors ${
                    step.active
                      ? "bg-primary text-white shadow-xs"
                      : "bg-neutral-100 dark:bg-neutral-800 text-muted-foreground border border-neutral-200 dark:border-neutral-700"
                  }`}
                >
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-normal text-foreground">{step.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                    {step.body}
                  </p>
                  {step.cta && (
                    <div className="pt-1.5">
                      <Link
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary"
                        href={step.cta.href}
                      >
                        <span>{step.cta.label}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
