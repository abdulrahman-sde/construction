import Image from "next/image";
import { Download, Eye, Layers } from "reicon-react";
import { Button } from "@/components/ui/button";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProjectBlueprintViewerProps {
  project: ProjectCaseStudy;
}

export default function ProjectBlueprintViewer({
  project,
}: ProjectBlueprintViewerProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xs">
      {/* Viewer Header Bar */}
      <div className="bg-slate-900 text-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          {/* macOS style dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs text-slate-300">
            Sheet A-102_Markup_Overlay.pdf
          </span>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
            Scale: 1/4&quot; = 1&apos;-0&quot;
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 text-slate-300 font-normal">
            <Layers size={13} className="text-primary" />
            <span>Bluebeam Revu Color-Coded</span>
          </span>
          <Button
            render={
              <a
                href={`#sample-download`}
              />
            }
            size="sm"
            className="h-7 text-xs bg-primary hover:bg-primary/90 text-white font-medium px-2.5 rounded"
          >
            <Download size={12} className="mr-1" />
            <span>Download Sample PDF</span>
          </Button>
        </div>
      </div>

      {/* Main Markup Image Display */}
      <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-slate-950 overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={`${project.title} Plan Markup`}
          fill
          className="object-cover object-center opacity-85"
          sizes="(max-width: 1024px) 100vw, 800px"
        />

        {/* Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Floating Callout Badges to simulate real markups */}
        <div className="absolute top-6 left-6 z-10 hidden sm:block">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-primary/50 text-white px-3 py-1.5 rounded text-[11px] font-mono space-y-0.5 shadow-sm">
            <p className="text-primary font-normal">● Division Takeoff Layer Active</p>
            <p className="text-slate-300 text-[10px]">{project.title} Sheet Quantities</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-200 px-3 py-1.5 rounded text-xs font-mono">
            <Eye size={13} className="text-primary" />
            <span>Inspection-Ready Resolution</span>
          </div>
        </div>
      </div>

      {/* Legend & CSI Trade Divisions Footer */}
      <div className="p-4 sm:p-5 bg-card border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
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

        <span className="text-[11px] font-mono text-muted-foreground">
          Calibrated to 2026 RSMeans
        </span>
      </div>
    </div>
  );
}
