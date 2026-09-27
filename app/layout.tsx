import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Charter", "Bitstream Charter", "Georgia", "Cambria", "serif"],
});

export const metadata: Metadata = {
  title: "Construct Estimates | Precision Construction Cost Estimating & Takeoffs",
  description:
    "Trusted partner in construction estimating and material takeoff services for contractors, builders, and architects across North America and Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth antialiased ${geist.variable} ${newsreader.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background font-normal">
        {children}
      </body>
    </html>
  );
}
