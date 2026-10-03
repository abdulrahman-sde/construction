import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    slug: "colorado-construction-estimating-services",
    tag: "Colorado",
    tagVariant: "blue" as const,
    author: "Usman",
    date: "July 30, 2026",
    title: "Colorado Construction Estimating Services | Accurate Bids",
    excerpt:
      "Colorado's construction market is bustling across Denver, Fort Collins, and mountain corridors with unique cold-weather and winter curing requirements.",
    image: "/assets/images/blog-colorado.jpg",
  },
  {
    slug: "vermont-construction-estimating-services",
    tag: "Vermont",
    tagVariant: "green" as const,
    author: "Usman",
    date: "July 28, 2026",
    title: "Vermont Construction Estimating Services | Accurate Takeoffs",
    excerpt:
      "Vermont construction estimating services help contractors, developers, and architects put a real number on a project before the first shovel hits the ground.",
    image: "/assets/images/blog-vermont.jpg",
  },
  {
    slug: "louisiana-construction-estimating-services",
    tag: "Louisiana",
    tagVariant: "amber" as const,
    author: "Usman",
    date: "July 23, 2026",
    title: "Louisiana Construction Estimating Services: Accurate Takeoffs",
    excerpt:
      "If you've bid a job in Louisiana, you know flood elevation requirements, hurricane wind resistance, and localized parish permitting demand audit-ready takeoffs.",
    image: "/assets/images/blog-louisiana.jpg",
  },
];

export default function BlogSection() {
  return (
    <section
      className="py-20 md:py-28 bg-background border-t border-border"
      id="blog"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block">
              Field Notes &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
              Stay Informed with{" "}
              <span className="font-normal text-primary">Our Blog</span>
            </h2>
            <p className="font-sans text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
              Stay updated with the latest trends, best practices, and insights
              in construction estimating through our informative blog.
            </p>
          </div>
          <Button
            render={<Link href="/our-blogs" />}
            variant="outline"
            size="default"
            className="gap-2 shrink-0 font-medium border-neutral-200 dark:border-neutral-700 hover:bg-foreground hover:text-background transition-all"
          >
            <span>Explore Our Blogs</span>
            <ArrowRight size={13} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {posts.map((p) => (
            <Card
              key={p.title}
              className="overflow-hidden flex flex-col justify-between p-0 border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm rounded-2xl bg-card"
            >
              <div>
                {/* Compact Demo Image Banner */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-border/60">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                  {/* Category Tag on Image */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <Badge
                      variant={p.tagVariant}
                      className="text-xs px-2 py-0.5 shadow-2xs backdrop-blur-xs font-sans font-medium"
                    >
                      {p.tag}
                    </Badge>
                  </div>

                  {/* Date on Image */}
                  <div className="absolute bottom-2 left-2.5 z-10 text-[11px] text-white/90 font-sans tracking-tight drop-shadow-xs">
                    {p.date}
                  </div>
                </div>

                {/* Compact Content */}
                <CardContent className="p-4 sm:p-5 space-y-1.5">
                  <Link href={`/blog/${p.slug}`}>
                    <h3 className="font-serif font-normal text-sm sm:text-[15px] text-foreground leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed font-normal">
                    {p.excerpt}
                  </p>
                </CardContent>
              </div>

              {/* Sleek Integrated Bottom Row */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                <div className="pt-2.5 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-foreground font-sans">
                    By {p.author}
                  </span>
                  <Link
                    className="text-xs font-medium text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    href={`/blog/${p.slug}`}
                  >
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
