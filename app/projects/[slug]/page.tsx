import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import ProjectHeroBanner from "@/components/projects/ProjectHeroBanner";
import ProjectBlueprintViewer from "@/components/projects/ProjectBlueprintViewer";
import ProjectScopeContent from "@/components/projects/ProjectScopeContent";
import ProjectDeliverablesSection from "@/components/projects/ProjectDeliverablesSection";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import RelatedProjects from "@/components/projects/RelatedProjects";
import { getAllProjects, getProjectBySlug } from "@/lib/projects-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Buildcraft360",
    };
  }

  return {
    title: `${project.title} Estimating & Markups | Buildcraft360`,
    description: project.metaDesc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* 1. Global Navigation */}
      <Header />

      {/* 2. Page Hero Banner with Specs & Tooling */}
      <ProjectHeroBanner project={project} />

      {/* 3. Main 2-Column Content + Sticky Right Sidebar */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Scope, Blueprint Viewer & Quantities (span 8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Blueprint Markup Viewer Mockup */}
            <ProjectBlueprintViewer project={project} />

            {/* Scope, Narrative & CSI Quantity Breakdown Table */}
            <ProjectScopeContent project={project} />

            {/* Deliverables Checklist */}
            <ProjectDeliverablesSection project={project} />

            {/* Related Projects */}
            <RelatedProjects currentSlug={project.slug} />
          </div>

          {/* Right Column: Sticky Sidebar with Sample Download & 30% Promo (span 4) */}
          <div className="lg:col-span-4 w-full">
            <ProjectSidebar project={project} />
          </div>
        </div>
      </main>

      {/* 4. Plan Upload & Contact Form Anchor Section */}
      <ContactSection />

      {/* 5. Pre-Footer Action Banner with Engineer Graphic */}
      <ServicePreFooterBanner />

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}
