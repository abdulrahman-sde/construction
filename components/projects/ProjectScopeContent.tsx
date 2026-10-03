import { Check, CircleInfo } from "reicon-react";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProjectScopeContentProps {
  project: ProjectCaseStudy;
}

export default function ProjectScopeContent({ project }: ProjectScopeContentProps) {
  return (
    <div className="space-y-12">
      {/* 1. Project Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {project.stats.map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-border/80 bg-card text-center space-y-1"
          >
            <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
            <p className="text-xl sm:text-2xl font-serif font-normal text-foreground">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Detailed Narrative Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground tracking-tight">
          Project Estimating Overview &amp; Methodology
        </h2>
        <div className="space-y-3.5 text-sm text-muted-foreground font-sans font-normal leading-relaxed">
          {project.overviewText.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* 3. Challenge & Solution Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        <div className="p-6 rounded-xl border border-border/80 bg-card space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded">
            <CircleInfo size={13} />
            <span>The Estimating Challenge</span>
          </div>
          <h3 className="font-serif font-normal text-lg text-foreground">
            Tight Timeline &amp; Complex Specs
          </h3>
          <p className="font-sans font-normal text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.challenges}
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border/80 bg-card space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
            <Check size={13} />
            <span>Buildcraft360 Solution</span>
          </div>
          <h3 className="font-serif font-normal text-lg text-foreground">
            Multi-Tier Digital Takeoff Protocol
          </h3>
          <p className="font-sans font-normal text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* 4. Scope Highlights */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight">
          Trade Scope Quantified in Package
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.scopeHighlights.map((scope, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-lg border border-border/60 bg-card text-xs sm:text-sm font-normal text-foreground/90"
            >
              <Check size={15} className="text-primary shrink-0 mt-0.5" />
              <span className="leading-snug">{scope}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Key Quantity Breakdown Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight">
              Sample Quantity Breakdown &amp; BOQ Excerpt
            </h3>
            <p className="text-xs text-muted-foreground font-sans font-normal mt-1">
              Direct excerpt from the CSI MasterFormat 16-Division Excel takeoff package.
            </p>
          </div>
          <span className="text-xs font-sans text-muted-foreground">
            {project.keyQuantities.length} Major Trade Assemblies Listed
          </span>
        </div>

        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-100/70 dark:bg-slate-900/60 border-b border-border text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3 px-4">CSI Division</th>
                  <th className="py-3 px-4">Item Description</th>
                  <th className="py-3 px-3 text-center">Unit</th>
                  <th className="py-3 px-4 text-right">Est. Quantity</th>
                  <th className="py-3 px-4 hidden md:table-cell">Scope Notes &amp; Specs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-normal">
                {project.keyQuantities.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-accent/40 transition-colors"
                  >
                    <td className="py-3 px-4 font-sans text-muted-foreground text-xs whitespace-nowrap">
                      {row.division}
                    </td>
                    <td className="py-3 px-4 text-foreground font-normal">
                      {row.item}
                    </td>
                    <td className="py-3 px-3 text-center font-sans text-muted-foreground">
                      {row.unit}
                    </td>
                    <td className="py-3 px-4 text-right font-sans text-foreground font-normal text-sm">
                      {row.quantity}
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell text-muted-foreground text-xs font-normal">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
