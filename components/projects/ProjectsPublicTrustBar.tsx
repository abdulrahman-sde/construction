import { ShieldCheck, Award, Building, Compass } from "reicon-react";

export default function ProjectsPublicTrustBar() {
  return (
    <section className="border-y border-border/80 bg-slate-50/50 dark:bg-slate-950/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Proven Industry Track Record
          </p>
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight">
            Trusted by General Contractors &amp; Public Agencies Nationwide
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-card">
            <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
              <Building size={20} />
            </span>
            <h4 className="font-sans font-medium text-sm text-foreground">
              TxDOT Standardized
            </h4>
            <p className="font-sans text-xs text-muted-foreground mt-1 font-normal leading-relaxed">
              Texas Department of Transportation civil &amp; highway takeoff compliance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-card">
            <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
              <Compass size={20} />
            </span>
            <h4 className="font-sans font-medium text-sm text-foreground">
              MTA Infrastructure
            </h4>
            <p className="font-sans text-xs text-muted-foreground mt-1 font-normal leading-relaxed">
              Transit &amp; commercial facility quantity modeling with division accuracy.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-card">
            <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
              <Award size={20} />
            </span>
            <h4 className="font-sans font-medium text-sm text-foreground">
              EPA Environmental
            </h4>
            <p className="font-sans text-xs text-muted-foreground mt-1 font-normal leading-relaxed">
              Environmental Protection Agency remediation &amp; earthwork protocols.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-card">
            <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </span>
            <h4 className="font-sans font-medium text-sm text-foreground">
              AACE &amp; AIQS Certified
            </h4>
            <p className="font-sans text-xs text-muted-foreground mt-1 font-normal leading-relaxed">
              Estimates governed by certified cost engineers and quantity surveyors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
