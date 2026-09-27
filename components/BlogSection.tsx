import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    slug: "colorado-construction-estimating-services",
    tag: "State Insights",
    tagVariant: "blue" as const,
    author: "Usman",
    date: "July 30, 2026",
    title: "Colorado Construction Estimating Services | Accurate Bids",
    excerpt:
      "Looking for reliable Colorado construction estimating services? We calibrate labor and material indices across Denver, Boulder, and regional commercial builds.",
    image:
      "https://constructestimates.com/wp-content/uploads/2026/07/colorado.jpg",
  },
  {
    slug: "bluebeam-revu-vs-planswift",
    tag: "Software Comparison",
    tagVariant: "amber" as const,
    author: "Usman",
    date: "July 15, 2026",
    title: "Bluebeam Revu vs PlanSwift: Which Estimation Software is Right?",
    excerpt:
      "A side-by-side engineering breakdown between PlanSwift and Bluebeam Revu comparing quantity takeoff speed, markup collaboration, and custom formulas.",
    image:
      "https://constructestimates.com/wp-content/uploads/2023/11/PlanSwift-vs-Bluebeam-Revu.jpg",
  },
  {
    slug: "managing-construction-cash-flow",
    tag: "Cash Flow & Finance",
    tagVariant: "green" as const,
    author: "Usman",
    date: "July 02, 2026",
    title: "Problems and Solutions for Managing Construction Cash Flow",
    excerpt:
      "Cash flow insolvency causes more contractor business failures than lack of profitable work. Learn practical strategies to structure billing milestones.",
    image:
      "https://constructestimates.com/wp-content/uploads/2023/10/Construction-cashflow.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div className="space-y-2.5 max-w-2xl">
            <Badge variant="blue" className="text-[10.5px]">
              Latest Articles
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
              Stay Informed with{" "}
              <span className="font-normal text-primary">Our Blog</span>
            </h2>
            <p className="font-sans text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
              Stay updated with the latest trends, best practices, and insights in construction
              estimating through our informative blog.
            </p>
          </div>
          <Button
            render={<Link href="/our-blogs" />}
            variant="outline"
            size="default"
            className="gap-2 shrink-0 font-medium"
          >
            <span>Explore Our Blogs</span>
            <ArrowRight size={13} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card
              key={p.title}
              className="group overflow-hidden flex flex-col justify-between p-0 border border-border/80 hover:border-primary/40 hover:shadow-xs transition-all duration-200 rounded-xl"
            >
              <div>
                {/* Compact Demo Image Banner */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-border/60">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  
                  {/* Category Tag on Image */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <Badge
                      variant={p.tagVariant}
                      className="text-[10px] px-2 py-0.5 shadow-2xs backdrop-blur-xs"
                    >
                      {p.tag}
                    </Badge>
                  </div>

                  {/* Date on Image */}
                  <div className="absolute bottom-2 left-2.5 z-10 text-[10.5px] text-white/90 font-mono tracking-tight drop-shadow-xs">
                    {p.date}
                  </div>
                </div>

                {/* Compact Content */}
                <CardContent className="p-4 sm:p-5 space-y-1.5">
                  <Link href={`/blog/${p.slug}`}>
                    <h3 className="font-serif font-normal text-sm sm:text-[15px] text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
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
                  <span className="text-[11px] text-muted-foreground font-mono">
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
