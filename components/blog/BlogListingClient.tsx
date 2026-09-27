"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User, ArrowLeft } from "reicon-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";

interface BlogListingClientProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  "All Articles",
  "Bidding & Takeoff Strategy",
  "Cash Flow & Profit Margins",
  "Trade Estimating Manuals",
  "Software & Technology",
] as const;

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  // Filter posts based on category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Articles") return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Featured article is the first post
  const featuredPost = posts[0];

  // Articles for grid (excluding featured if in "All Articles", or showing filtered)
  const gridPosts = useMemo(() => {
    if (selectedCategory === "All Articles") {
      return filteredPosts.slice(1);
    }
    return filteredPosts;
  }, [filteredPosts, selectedCategory]);

  const totalPages = Math.ceil(gridPosts.length / postsPerPage) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return gridPosts.slice(start, start + postsPerPage);
  }, [gridPosts, currentPage, postsPerPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const showFeaturedHero = selectedCategory === "All Articles" && !!featuredPost;

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/80 pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-[13px] transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-2xs font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50 font-normal"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured Article Hero Card (Visible on "All Articles") */}
      {showFeaturedHero && featuredPost && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-medium tracking-wider text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Featured Industry Guide</span>
            </span>
          </div>

          <div className="group rounded-2xl border border-border/80 bg-card overflow-hidden hover:border-primary/40 hover:shadow-xs transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant={featuredPost.badgeVariant} className="text-xs">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3.5">
                  <div className="hidden lg:block">
                    <Badge variant={featuredPost.badgeVariant} className="text-xs">
                      {featuredPost.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground leading-[1.2] tracking-tight group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="font-sans text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-normal">
                    {featuredPost.authorRole}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-normal text-xl sm:text-2xl text-foreground tracking-tight">
            {selectedCategory === "All Articles"
              ? "All Technical Guides & Takeoff Insights"
              : `${selectedCategory} (${filteredPosts.length})`}
          </h3>
          <span className="text-xs text-muted-foreground font-normal">
            Showing {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {gridPosts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-xl space-y-3">
            <p className="font-serif text-lg text-foreground font-normal">
              No articles found in this category.
            </p>
            <p className="text-xs text-muted-foreground font-normal">
              Try selecting another category tab above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedPosts.map((post, index) => (
              <Card
                key={post.slug}
                className="group flex flex-col justify-between p-0 border border-border/80 hover:border-primary/40 hover:shadow-xs transition-all duration-200 rounded-xl overflow-hidden bg-card"
              >
                <div>
                  {/* Real Featured Image with 16:10 Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-border/60">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      loading={index === 0 && !showFeaturedHero ? "eager" : "lazy"}
                      fetchPriority={index === 0 && !showFeaturedHero ? "high" : "auto"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                    {/* Category Badge on Image */}
                    <div className="absolute top-3 left-3 z-10">
                      <Badge
                        variant={post.badgeVariant}
                        className="text-[10px] px-2 py-0.5 shadow-2xs backdrop-blur-xs"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    {/* Date on Image */}
                    <div className="absolute bottom-2.5 left-3 z-10 text-[10.5px] text-white/90 font-mono tracking-tight drop-shadow-xs">
                      {post.date}
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-5 space-y-2.5">
                    <Link href={`/blog/${post.slug}`}>
                      <h4 className="font-serif font-normal text-base sm:text-lg text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                    </Link>

                    <p className="font-sans text-xs sm:text-[13px] text-muted-foreground line-clamp-3 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </div>

                {/* Footer Row */}
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-muted-foreground font-mono">
                      By {post.author} • {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-medium text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 border-t border-border/80">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs font-medium gap-1"
          >
            <ArrowLeft size={12} />
            <span>Previous</span>
          </Button>

          <div className="flex items-center gap-1 px-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-xs transition-colors cursor-pointer ${
                  currentPage === page
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground font-normal"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-xs font-medium gap-1"
          >
            <span>Next</span>
            <ArrowRight size={12} />
          </Button>
        </div>
      )}
    </div>
  );
}
