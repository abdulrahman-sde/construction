import Link from "next/link";
import { Clock, ShieldCheck, Layers } from "reicon-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCaseStudy } from "@/lib/projects-data";

interface ProjectHeroBannerProps {
  project: ProjectCaseStudy;
}

export default function ProjectHeroBanner({ project }: ProjectHeroBannerProps) {
  return (
    <section className="relative blueprint-subtle-grid py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-slate-50/40 dark:bg-slate-950/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Editorial Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground font-normal"
        >
          <Link
            href="/"
            className="hover:text-foreground transition-colors duration-150"
          >
            Home
          </Link>
          <span className="text-border">/</span>
          <Link
            href="/our-projects"
            className="hover:text-foreground transition-colors duration-150"
          >
            Our Projects
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground font-normal truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </span>
        </nav>

        {/* Badge & Meta Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="blue" className="text-xs uppercase font-normal tracking-wide">
            {project.category} Portfolio
          </Badge>
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 border border-border px-2.5 py-1 rounded-md font-sans">
            <Clock size={12} className="text-primary" />
            <span>Turnaround: {project.turnaroundTime}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 border border-border px-2.5 py-1 rounded-md font-sans">
            <ShieldCheck size={12} className="text-primary" />
            <span>AACE / AIQS Calibrated</span>
          </div>
        </div>

        {/* Title: Editorial Serif, font-normal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl">
          {project.headline}
        </h1>

        {/* Lead Summary */}
        <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-3xl font-normal leading-relaxed">
          {project.summary}
        </p>

        {/* Software Tooling Stack */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1 mr-1">
            <Layers size={12} />
            Software Stack:
          </span>
          {project.softwareUsed.map((sw) => (
            <span
              key={sw}
              className="text-xs font-sans font-normal px-2.5 py-1 rounded bg-slate-200/60 dark:bg-slate-800/80 text-foreground border border-border/60"
            >
              {sw}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
