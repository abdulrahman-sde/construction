import Link from "next/link";

interface ServiceHeroBannerProps {
  title: string;
  breadcrumb?: string;
  category?: string;
}

export default function ServiceHeroBanner({
  title,
  breadcrumb,
  category = "Services",
}: ServiceHeroBannerProps) {
  return (
    <section className="relative blueprint-subtle-grid py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-slate-50/40 dark:bg-slate-950/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center space-y-4">
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
          <span className="text-muted-foreground">{category}</span>
          <span className="text-border">/</span>
          <span className="text-foreground font-normal truncate max-w-[220px] sm:max-w-none">
            {breadcrumb || title}
          </span>
        </nav>

        {/* Page Title: Editorial Serif, Strict font-normal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
          Audit-ready construction cost estimates and material takeoffs calibrated to your regional zip code, delivered in 24–48 hours.
        </p>
      </div>
    </section>
  );
}
