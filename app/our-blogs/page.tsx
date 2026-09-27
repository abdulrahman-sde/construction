import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import BlogListingClient from "@/components/blog/BlogListingClient";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Construction Estimating Insights & Industry Guides | Construct Estimates",
  description:
    "Explore authoritative construction estimating guides, quantity takeoff manuals, bidding strategies, software comparisons, and cash flow management insights.",
  openGraph: {
    title: "Construction Estimating Insights & Industry Guides | Construct Estimates",
    description:
      "Explore authoritative construction estimating guides, quantity takeoff manuals, bidding strategies, software comparisons, and cash flow management insights.",
    type: "website",
  },
};

export default function BlogListingPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Architectural Hero Banner */}
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
              <span className="text-foreground font-normal">
                Blog
              </span>
            </nav>

            {/* Page Title: Editorial Serif, Strict font-normal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Construction Estimating{" "}
              <span className="font-normal text-primary">Insights</span> &amp; Industry Guides
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
              Technical trade manuals, material pricing benchmarks, and bidding strategies written by senior cost engineers and quantity surveyors.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <BlogListingClient posts={posts} />
        </section>

        {/* Editorial Pre-Footer Callout */}
        <ServicePreFooterBanner />
      </main>

      <Footer />
    </div>
  );
}
