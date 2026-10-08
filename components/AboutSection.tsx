import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "5000+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "12+", label: "Highly Qualified Estimators & Planners" },
];

export default function AboutSection() {
  return (
    <section
      className="py-24 md:py-32 bg-background border-b border-border/80"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground leading-[1.15] tracking-tight">
              Transform Your Projects into{" "}
              <span className="font-normal text-primary">
                Profitable Realities
              </span>
            </h2>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-foreground font-medium">Buildcraft360</strong> is your
              trusted partner for professional construction estimating, planning, and architectural
              services, helping contractors, builders, and developers manage their projects with
              greater accuracy and efficiency.
            </p>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              With our comprehensive services, we specialize in detailed construction estimates,
              material takeoffs, project planning, scheduling, and architectural support. Our goal is
              to provide practical and reliable solutions that help clients prepare competitive bids,
              plan projects effectively, and turn potential opportunities into successful
              construction projects.
            </p>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              With over 8 years of experience in the construction industry, Buildcraft360 provides
              dependable project support across residential, commercial, civil, and industrial
              projects. Our experienced estimators, planners, and architectural professionals bring the
              technical knowledge and practical expertise needed to support projects from initial
              planning through execution.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-primary">
                    {s.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-normal">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                render={<Link href="#contact" />}
                variant="outline"
                size="default"
                className="gap-2 shadow-2xs"
              >
                <span>About Us</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>

          {/* Right: Architectural Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Subtle architectural backdrop halo */}
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-neutral-200/40 dark:bg-neutral-800/20 blur-2xl -z-10" />

              {/* Floating Accuracy Badge - Elevated to top-right to prevent overlap with bottom text */}
              <div className="absolute -top-4 right-3 sm:-top-5 sm:-right-4 z-20 bg-card/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl shadow-lg border border-border/90 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-medium shadow-2xs shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      Bid Accuracy
                    </p>
                    <p className="text-[11px] text-muted-foreground font-normal">
                      Up to 100% Certified
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                <Image
                  alt="Construction estimator reviewing architectural drawings"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  src="/assets/images/about-estimator.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider font-sans font-medium text-white/80">
                    Certified Expertise
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-normal text-white mt-0.5">
                    8+ Years of Experience
                  </h4>
                  <p className="text-[11px] text-white/80 mt-0.5 font-normal">
                    Quantity Surveyors, Planners &amp; Architects On Demand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
