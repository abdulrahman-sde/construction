import { FileText, CheckCircle, Grid, Layers } from "reicon-react";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProjectDeliverablesSectionProps {
  project: ProjectCaseStudy;
}

export default function ProjectDeliverablesSection({
  project,
}: ProjectDeliverablesSectionProps) {
  const icons = [FileText, Grid, Layers, CheckCircle];

  return (
    <section className="space-y-6 pt-4 border-t border-border">
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight">
          What Is Included in this Takeoff Package
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-sans font-normal leading-relaxed">
          Every estimate we deliver includes audit-ready source files, calibrated quantities, and clear documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.deliverables.map((deliv, idx) => {
          const IconComponent = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card flex items-start gap-4"
            >
              <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <IconComponent size={18} />
              </span>
              <div className="space-y-1">
                <h4 className="font-sans font-medium text-sm text-foreground">
                  Deliverable 0{idx + 1}
                </h4>
                <p className="font-sans text-xs text-muted-foreground font-normal leading-relaxed">
                  {deliv}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
