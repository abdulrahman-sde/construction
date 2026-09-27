"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "reicon-react";
import { Button } from "@/components/ui/button";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
}

export default function BlogShareButtons({ title, slug }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border/80">
      <Button
        render={<Link href="/our-blogs" />}
        variant="outline"
        size="default"
        className="gap-2 font-medium text-xs"
      >
        <ArrowLeft size={13} />
        <span>Back to All Articles</span>
      </Button>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground font-normal mr-1">Share:</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted/50 text-xs text-foreground/80 hover:text-foreground transition-colors font-normal cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-600" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://constructestimates.com/blog/${slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-border bg-background hover:bg-muted/50 text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://constructestimates.com/blog/${slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-border bg-background hover:bg-muted/50 text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Share on Twitter"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
