import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    src: "/assets/images/project-1.png",
    alt: "Commercial Office Complex Estimating",
    category: "Commercial Estate",
    title: "Commercial Office Complex",
    scope: "Complete Framing, Concrete & Finish Takeoff",
  },
  {
    src: "/assets/images/project-2.png",
    alt: "Waterfront Modern Villa Residence",
    category: "Residential Luxury",
    title: "Waterfront Modern Villa",
    scope: "Glazing, Structural Steel & MEP",
  },
  {
    src: "/assets/images/project-3.png",
    alt: "Sunset Valley Condominiums",
    category: "Multi-Family",
    title: "Sunset Valley Condos",
    scope: "Full Bid Package & Subcontractor Audit",
  },
  {
    src: "/assets/images/project-4.png",
    alt: "Austin Urban Mixed-Use Lofts",
    category: "Commercial Retail",
    title: "Austin Urban Lofts",
    scope: "Sitework, Earthwork & Drywall Package",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="py-24 md:py-32 bg-background border-t border-border"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
              Construction Estimating Projects We Did For{" "}
              <span className="font-normal text-primary">Clients</span>
            </h2>
            <p className="font-sans text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
              Our mission for construction estimation is to deliver precise and
              reliable cost assessments, enabling informed decision-making,
              optimal budgeting, and seamless project execution.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden bg-card text-card-foreground shadow-sm relative aspect-[4/5] flex flex-col justify-end p-5 border border-neutral-200/90 dark:border-neutral-800"
            >
              <Image
                alt={p.alt}
                className="absolute inset-0 object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 300px"
                src={p.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="inline-block text-[10px] uppercase font-sans font-medium tracking-wider px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                  {p.category}
                </span>
                <h4 className="font-medium text-sm text-white pt-1">
                  {p.title}
                </h4>
                <p className="text-[11px] text-white/80 font-normal leading-snug">
                  {p.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
