import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, Calendar, ShieldCheck } from "reicon-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePreFooterBanner from "@/components/services/ServicePreFooterBanner";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import { Badge } from "@/components/ui/badge";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
} from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Construct Estimates",
    };
  }

  return {
    title: `${post.title} | Construct Estimates`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Construct Estimates`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Subtle Blueprint Header Strip */}
        <section className="relative blueprint-subtle-grid py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-border/80 bg-slate-50/40 dark:bg-slate-950/20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-normal"
            >
              <Link
                href="/"
                className="hover:text-foreground transition-colors duration-150"
              >
                Home
              </Link>
              <span className="text-border">/</span>
              <Link
                href="/our-blogs"
                className="hover:text-foreground transition-colors duration-150"
              >
                Blog
              </Link>
              <span className="text-border">/</span>
              <span className="text-foreground font-normal truncate max-w-[280px] sm:max-w-none">
                {post.title}
              </span>
            </nav>
          </div>
        </section>

        {/* 2-Column Article & Sticky Sidebar Layout */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Article Header Meta */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={post.badgeVariant} className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" />
                    <span>{post.readTime}</span>
                  </span>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" />
                    <span>{post.date}</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-foreground leading-[1.18] tracking-tight">
                  {post.title}
                </h1>

                {/* Author Sub-line */}
                <div className="flex items-center gap-3 pt-1 border-b border-border/60 pb-6 text-xs text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-border flex items-center justify-center text-primary font-medium">
                    U
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-xs">
                      Written by {post.author}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-normal">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* High-Resolution Featured Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl border border-border overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-xs">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Article Lead Excerpt Callout */}
              <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-border/80">
                <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed font-normal">
                  &ldquo;{post.excerpt}&rdquo;
                </p>
              </div>

              {/* Article Rendered Body */}
              <div
                className="editorial-prose max-w-none pt-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio Card */}
              <div className="p-6 rounded-xl border border-border/80 bg-card space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border border-border flex items-center justify-center text-primary font-medium text-lg shrink-0">
                    U
                  </div>
                  <div>
                    <h3 className="font-serif font-normal text-base text-foreground">
                      {post.author}
                    </h3>
                    <p className="text-xs text-muted-foreground font-normal">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-muted-foreground font-normal leading-relaxed">
                  Usman is a certified construction cost estimator and quantity surveyor specializing in commercial takeoffs, Division 03 concrete, MEP coordination, and preliminary budgeting. He has assisted hundreds of general contractors across the United States and Australia in winning competitive bids.
                </p>
              </div>

              {/* Share & Back Controls */}
              <BlogShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-4">
              <BlogSidebar currentSlug={slug} />
            </div>
          </div>
        </article>

        {/* Reusable Pre-Footer Banner */}
        <ServicePreFooterBanner />
      </main>

      <Footer />
    </div>
  );
}
