import Image from "next/image";
import { Eye } from "reicon-react";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProjectBlueprintViewerProps {
  project: ProjectCaseStudy;
}

export default function ProjectBlueprintViewer({
  project,
}: ProjectBlueprintViewerProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xs">
      {/* Main Markup Image Display */}
      <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-slate-950 overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={`${project.title} Plan Markup`}
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center opacity-85"
          sizes="(max-width: 1024px) 100vw, 800px"
        />

        {/* Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Floating Callout Badges to simulate real markups */}
        <div className="absolute top-6 left-6 z-10 hidden sm:block">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-primary/50 text-white px-3 py-1.5 rounded text-xs font-sans space-y-0.5 shadow-sm">
            <p className="text-primary font-normal">● Division Takeoff Layer Active</p>
            <p className="text-slate-300 text-[10px]">{project.title} Sheet Quantities</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-200 px-3 py-1.5 rounded text-xs font-sans">
            <Eye size={13} className="text-primary" />
            <span>Inspection-Ready Resolution</span>
          </div>
        </div>
      </div>

      {/* Legend & CSI Trade Divisions Footer */}
      <div className="p-4 sm:p-5 bg-card border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Plan Markup Color Legend:
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-normal">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Structural &amp; Concrete</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-normal">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Framing &amp; Lumber</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-normal">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Thermal &amp; Envelope</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-normal">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>Finishes &amp; Openings</span>
          </span>
        </div>

        <span className="text-xs font-sans text-muted-foreground">
          Calibrated to 2026 RSMeans
        </span>
      </div>
    </div>
  );
}
