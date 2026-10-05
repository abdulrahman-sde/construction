import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "reicon-react";
import { Button } from "@/components/ui/button";
import { ALL_PROJECTS } from "@/lib/projects-data";

export default function ProjectsSection() {
  return (
    <section
      className="py-24 md:py-32 bg-background border-t border-border"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
              Construction Estimating Projects We Did For{" "}
              <span className="font-normal text-primary">Clients</span>
            </h2>
            <p className="font-sans text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
              Explore our real-world takeoff packages and CSI MasterFormat cost assessments delivered for general contractors, builders, and trade subcontractors.
            </p>
          </div>
          <Button
            render={<Link href="/our-projects" />}
            variant="outline"
            size="default"
            className="gap-2 shrink-0 border-neutral-200 dark:border-neutral-700 hover:bg-foreground hover:text-background transition-all"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={13} />
          </Button>
        </div>

        {/* 6 Projects Grid with Authentic Reference Site Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ALL_PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:border-primary/50 transition-all duration-300 aspect-[4/3] sm:aspect-[16/11] flex flex-col justify-between p-5 sm:p-6"
            >
              {/* Project Image */}
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                loading={index < 3 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Dark Gradient Overlay for optimal editorial legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 group-hover:via-black/55 transition-colors duration-300" />

              {/* Top Meta Bar: Category + Turnaround Time */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-block text-[11px] uppercase font-sans font-medium tracking-wider px-2.5 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-md border border-white/10">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                  <Clock size={11} className="text-primary" />
                  <span>{project.turnaroundTime}</span>
                </span>
              </div>

              {/* Bottom Content: Title, Summary & CTA Link */}
              <div className="relative z-10 text-white space-y-1.5 pt-6">
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-blue-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 font-normal leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
                <div className="pt-1.5 flex items-center gap-1.5 text-xs font-sans font-medium text-white/90 group-hover:text-white">
                  <span>View Case Study</span>
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
