import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "reicon-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ALL_PROJECTS, ProjectCaseStudy } from "@/lib/projects-data";

interface RelatedProjectsProps {
  currentSlug: string;
}

export default function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const otherProjects = ALL_PROJECTS.filter((p) => p.slug !== currentSlug).slice(
    0,
    3
  );

  return (
    <section className="space-y-6 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <Badge variant="blue" className="text-[10px] font-normal tracking-wide uppercase">
            Portfolio Exploration
          </Badge>
          <h3 className="text-2xl font-serif font-normal text-foreground tracking-tight mt-1">
            Explore More Estimating Case Studies
          </h3>
        </div>
        <Button
          render={<Link href="/our-projects" />}
          variant="outline"
          size="sm"
          className="text-xs font-medium rounded-lg gap-1.5 self-start sm:self-auto"
        >
          <span>View All Projects</span>
          <ArrowRight size={12} />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {otherProjects.map((project: ProjectCaseStudy) => (
          <div
            key={project.slug}
            className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card overflow-hidden flex flex-col justify-between shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover object-center opacity-90"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-slate-900/80 text-white border border-slate-700">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] font-sans text-white/90">
                <Clock size={11} className="text-primary" />
                <span>{project.turnaroundTime}</span>
              </div>
            </div>

            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-normal text-base text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="font-sans text-xs text-muted-foreground font-normal line-clamp-2 mt-1 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="pt-2">
                <Button
                  render={<Link href={`/projects/${project.slug}`} />}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-medium justify-between rounded-xl border-neutral-200 dark:border-neutral-700 hover:bg-foreground hover:text-background transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={12} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
