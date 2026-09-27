import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "8000+", label: "Projects Completed" },
  { value: "700+", label: "Happy Clients" },
  { value: "25+", label: "Highly Qualified Estimators" },
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
          <div className="lg:col-span-7 space-y-7">
            <Badge variant="blue" className="text-[10.5px]">
              About Us
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground leading-[1.15] tracking-tight">
              Transform Your Projects into{" "}
              <span className="font-normal text-primary">
                Profitable Realities
              </span>
            </h2>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              Construct Estimates is your trusted partner in{" "}
              <span className="text-foreground font-medium">
                construction estimating and material takeoff services
              </span>{" "}
              to make the bidding process easier for contractors and builders.
              With our comprehensive services, we specialize in providing
              accurate local pricing estimates and taking off entire projects.
              Our goal is to transform contractors&apos; potential projects into
              profitable realities.
            </p>

            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              With over 10 years of experience in the construction industry,
              Construct Estimates has built a solid reputation for delivering
              accurate material estimates. Residential, commercial, civil, or
              industrial projects — our construction managers and quantity
              surveyors have the expertise spanning hundreds of satisfied
              clients.
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
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-blue-100/60 dark:bg-blue-950/20 blur-2xl -z-10" />

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                <Image
                  alt="Tablet blueprint review"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  src="/assets/trades/concrete.svg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-white/80">
                    Certified Expertise
                  </span>
                  <h4 className="text-sm sm:text-base font-medium text-white mt-0.5">
                    10+ Years of Estimating
                  </h4>
                  <p className="text-[11px] text-white/80 mt-0.5 font-normal">
                    Quantity Surveyors &amp; Estimating Engineers On Demand
                  </p>
                </div>
              </div>

              {/* Floating Accuracy Badge */}
              <div className="absolute -bottom-5 -left-3 bg-card p-3.5 rounded-xl shadow-md border border-border max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center font-medium border border-blue-200/60">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
