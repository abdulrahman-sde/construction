import { Card } from "@/components/ui/card";
import { Handshake, TimerStart, WalletCheck, ArrowRight, IconComponent } from "reicon-react";
import VideoTestimonialsCarousel from "./VideoTestimonialsCarousel";

interface OutrankCard {
  num: string;
  title: string;
  body: string;
  featured: boolean;
  icon: IconComponent;
}

export function OutrankSection() {
  const cards: OutrankCard[] = [
    {
      num: "01",
      title: "Our Commitment to Your Success",
      body: "We go beyond estimating by offering consulting services to help you negotiate and close deals effectively. Our experienced team can work with you to develop winning strategies, advise you during negotiations, and even join conference calls.",
      featured: false,
      icon: Handshake,
    },
    {
      num: "02",
      title: "Time-Saving Solutions for Busy Contractors",
      body: "Don't let a lack of resources or time hinder your success. Many contractors lose significant money each month due to insufficient estimation capabilities. No more spending nights and weekends at the kitchen table trying to estimate projects.",
      featured: false,
      icon: TimerStart,
    },
    {
      num: "03",
      title: "Save Big with Our Monthly Takeoff Package!",
      body: "With our reliable construction takeoff services at your fingertips, you can confidently bid on more projects and increase your chances of winning. Imagine the time and money you'll save by outsourcing your estimating needs to our expert team.",
      featured: true,
      icon: WalletCheck,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-slate-50/60 dark:bg-slate-950/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
            Outrank Your Competitors with Accurate{" "}
            <span className="font-normal text-primary">
              Construction Estimates
            </span>
          </h2>
          <p className="font-sans text-muted-foreground text-xs sm:text-sm mt-2.5 leading-relaxed font-normal max-w-2xl mx-auto">
            Don&apos;t let estimating expenses hold you back. Our cost-effective solutions and
            industry expertise allow you to bid more confidently, secure more contracts, and grow
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.num}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border shadow-sm ${
                  c.featured
                    ? "border-primary/40 bg-card ring-1 ring-primary/20 text-foreground"
                    : "border-neutral-200/90 dark:border-neutral-800/90 bg-card text-foreground"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-foreground border border-neutral-200/80 dark:border-neutral-700/80">
                      <Icon size={18} />
                    </div>
                    <span className="font-sans text-xs font-medium text-muted-foreground/70">
                      {c.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-serif font-normal tracking-tight leading-snug mb-2.5 text-foreground">
                    {c.title}
                  </h3>

                  {/* Body Copy */}
                  <p className="text-xs sm:text-[13px] leading-relaxed font-normal text-muted-foreground">
                    {c.body}
                  </p>
                </div>

                {/* Subtle bottom link */}
                <div className="pt-4 mt-5 border-t border-border/60 flex items-center justify-end text-xs">
                  <span className="text-xs font-medium inline-flex items-center gap-1 text-primary">
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VideoReviewsRow() {
  return <VideoTestimonialsCarousel />;
}

export function BrandsSection() {
  return (
    <section className="py-12 sm:py-14 bg-transparent text-center relative z-10 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal tracking-tight text-foreground mb-10">
          Worked For{" "}
          <span className="font-normal text-primary">
            Top Construction Brands
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16 text-foreground opacity-80">
          {/* 1. DYNAMIC BUILD GROUP */}
          <div className="flex flex-col items-center cursor-default">
            <svg
              className="w-8 h-8 text-foreground mb-1"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path d="M12 40V24h6v16h-6zm9 0V16h6v24h-6zm9 0V8h6v32h-6zm9 0V20h6v20h-6zM6 42h40v3H6v-3z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase leading-none font-sans text-foreground">
              DYNAMIC BUILD
            </span>
            <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
              GROUP
            </span>
          </div>

          {/* 2. DEZIGN */}
          <div className="flex items-center gap-2 cursor-default">
            <div className="w-7 h-7 rounded bg-foreground flex items-center justify-center p-1 text-background">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M4 4h7v4H8v8h8v-3h4v7H4V4z" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-medium tracking-tight uppercase text-foreground font-sans">
              DEZIGN
            </span>
          </div>

          {/* 3. Glascott LANDSCAPE & CIVIL */}
          <div className="flex items-center gap-2 cursor-default">
            <div className="w-7 h-7 rounded bg-foreground text-background flex items-center justify-center font-medium text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-4v-4h4v1.5h-2.5v1h2.5zm3-5.5h-7v-3h7z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-medium text-foreground leading-none font-sans tracking-tight">
                Glascott
              </span>
              <span className="text-[7.5px] sm:text-[8px] font-medium tracking-widest uppercase text-muted-foreground mt-0.5">
                LANDSCAPE &amp; CIVIL
              </span>
            </div>
          </div>

          {/* 4. CARRERA CUSTOM HOMES */}
          <div className="flex items-center gap-2 cursor-default">
            <span className="text-xs sm:text-sm font-normal font-serif tracking-widest uppercase text-foreground leading-none">
              CARRERA
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
              CUSTOM HOMES
            </span>
          </div>

          {/* 5. CONSTRUCTION SERVICE USA */}
          <div className="flex items-center gap-2 cursor-default">
            <svg
              className="w-5 h-5 text-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h4v11H3V10zm7-6h4v17h-4V4zm7 8h4v9h-4v-9z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[11px] sm:text-xs font-medium tracking-wider uppercase text-foreground font-sans leading-tight">
                CONSTRUCTION SERVICE USA
              </span>
              <span className="text-[7.5px] text-muted-foreground tracking-wider">
                Industrial &amp; Commercial GC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
