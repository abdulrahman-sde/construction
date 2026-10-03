"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Check, File } from "reicon-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ALL_PROJECTS, ProjectCaseStudy } from "@/lib/projects-data";

const CATEGORIES = [
  "All Projects",
  "Residential",
  "Commercial",
  "Civil",
  "Specialty",
] as const;

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/80 pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-sans transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white font-medium shadow-xs dark:bg-slate-100 dark:text-slate-900"
                  : "bg-slate-100/70 dark:bg-slate-900/60 text-muted-foreground hover:text-foreground hover:bg-slate-200/60 font-normal border border-border/50"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60 text-[10px]">
                (
                {cat === "All Projects"
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === cat).length}
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredProjects.map((project: ProjectCaseStudy, index: number) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card overflow-hidden flex flex-col justify-between shadow-sm"
          >
            {/* Project Image Banner */}
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-border/60">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="object-cover object-center opacity-90"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <Badge variant="blue" className="text-xs font-sans font-medium">
                  {project.category}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] font-sans">
                  <Clock size={12} className="text-primary" />
                  {project.turnaroundTime}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-white/80">
                  <File size={12} />
                  Sample PDF Included
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                >
                  <h3 className="font-serif font-normal text-xl sm:text-2xl text-foreground tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </Link>

                <p className="font-sans font-normal text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Key Deliverables Bullet Tags */}
              <div className="pt-2 border-t border-border/60 space-y-2">
                <p className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                  Package Deliverables:
                </p>
                <ul className="space-y-1 text-xs text-foreground/80 font-normal">
                  {project.deliverables.slice(0, 2).map((deliv, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check size={12} className="text-neutral-400 mt-0.5 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <Button
                  render={<Link href={`/projects/${project.slug}`} />}
                  variant="outline"
                  size="default"
                  className="w-full justify-between border-neutral-200 dark:border-neutral-700 hover:bg-foreground hover:text-background hover:border-foreground transition-all font-medium text-xs rounded-xl"
                >
                  <span>View Case Study &amp; Samples</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
