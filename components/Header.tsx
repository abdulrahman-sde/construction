"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Call,
  Message,
  ChevronDown,
  ArrowRight,
  Menu as MenuIcon,
  CloseCircle,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// --- Navigation Data ---

const serviceItems = [
  {
    href: "/cost-estimating-services",
    title: "Cost Estimating Services",
    description: "Zip-code adjusted labor, materials & equipment pricing",
    iconSrc: "/assets/icons/cost-estimating.svg",
  },
  {
    href: "/construction-takeoff-services",
    title: "Construction Takeoff Services",
    description: "Digital blueprint itemization & complete material counts",
    iconSrc: "/assets/icons/material-takeoff.svg",
  },
  {
    href: "/residential-estimating-services",
    title: "Residential Estimating",
    description: "Single-family, multi-family, custom homes & renovations",
    iconSrc: "/assets/icons/residential-estimating.svg",
  },
  {
    href: "/commercial-estimating-services",
    title: "Commercial Estimating",
    description: "Offices, retail plazas, hospitality & public buildings",
    iconSrc: "/assets/icons/commercial-estimating.svg",
  },
  {
    href: "/industrial-estimating-services",
    title: "Industrial Estimating",
    description: "Manufacturing, plants, processing units & civil works",
    iconSrc: "/assets/icons/industrial-estimating.svg",
  },
  {
    href: "/preliminary-estimate",
    title: "Preliminary Estimates",
    description: "Feasibility budgets for architects, developers & lenders",
    iconSrc: "/assets/icons/preliminary-estimates.svg",
  },
  {
    href: "/quantity-takeoff-services",
    title: "Quantity Takeoff Services",
    description: "Itemized bill of quantities with color-coded plans",
    iconSrc: "/assets/icons/material-takeoff.svg",
  },
  {
    href: "/virtual-bid-management",
    title: "Virtual Bid Management",
    description: "Subcontractor coordination, bid review & win strategy",
    iconSrc: "/assets/icons/check-circle.svg",
  },
];

const tradeItems = [
  {
    href: "/electrical-estimating-services",
    title: "Electrical Estimating Services",
  },
  {
    href: "/concrete-estimating-services",
    title: "Concrete Estimating Services",
  },
  {
    href: "/opening-estimating-services",
    title: "Opening Estimating Services",
  },
  {
    href: "/masonry-estimating-services",
    title: "Masonry Estimating Services",
  },
  {
    href: "/mep-estimating-services",
    title: "MEP Estimating Services",
  },
  {
    href: "/metal-estimating-services",
    title: "Metal Estimating Services",
  },
  {
    href: "/sitework-estimating-services",
    title: "SiteWork Estimating Services",
  },
  {
    href: "/lumber-takeoff-services",
    title: "Lumber Takeoff Services",
  },
  {
    href: "/thermal-moisture-protection-estimating-services",
    title: "Thermal & Moisture Protection Estimating Services",
  },
  {
    href: "/interior-exterior-finishes-estimating-services",
    title: "Interior & Exterior Finishes Estimating Services",
  },
];

const tradeRows = [
  [
    { href: "/electrical-estimating-services", title: "Electrical Estimating Services" },
    { href: "/metal-estimating-services", title: "Metal Estimating Services" },
  ],
  [
    { href: "/concrete-estimating-services", title: "Concrete Estimating Services" },
    { href: "/sitework-estimating-services", title: "SiteWork Estimating Services" },
  ],
  [
    { href: "/opening-estimating-services", title: "Opening Estimating Services" },
    { href: "/lumber-takeoff-services", title: "Lumber Takeoff Services" },
  ],
  [
    { href: "/masonry-estimating-services", title: "Masonry Estimating Services" },
    { href: "/thermal-moisture-protection-estimating-services", title: "Thermal & Moisture Protection Estimating Services" },
  ],
  [
    { href: "/mep-estimating-services", title: "MEP Estimating Services" },
    { href: "/interior-exterior-finishes-estimating-services", title: "Interior & Exterior Finishes Estimating Services" },
  ],
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11.5px] font-medium py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <a
              className="flex items-center gap-2 hover:text-white transition-colors"
              href="tel:+13466602440"
            >
              <Call size={12} className="text-primary-foreground/70" />
              <span>(346) 660-2440</span>
            </a>
            <a
              className="flex items-center gap-2 hover:text-white transition-colors"
              href="mailto:Info@buildcraft360.com"
            >
              <Message size={12} className="text-primary-foreground/70" />
              <span>Info@buildcraft360.com</span>
            </a>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <span className="text-slate-400 hidden sm:inline text-[11px]">
              Follow Us On:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/buildcraft360/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
            <span className="text-slate-700">|</span>
            <a
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              href="tel:0455843274"
            >
              <Call size={12} className="text-primary-foreground/70" />
              <span>0455 843 274</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2.5 shrink-0" href="/">
            <Image
              src="/assets/logos/buildcraft360-horizontal.png"
              alt="Buildcraft360"
              width={161}
              height={28}
              priority
              className="h-7 w-auto object-contain dark:hidden"
            />
            <Image
              src="/assets/logos/buildcraft360-horizontal-white.png"
              alt="Buildcraft360"
              width={161}
              height={28}
              priority
              className="h-7 w-auto object-contain hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation with shadcn Dropdowns */}
          <nav className="hidden lg:flex items-center gap-2 text-[13.5px] font-medium text-foreground/80">
            {/* 1. About Us Direct Link */}
            <Link
              href="/about-us"
              className="px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer select-none"
            >
              About Us
            </Link>

            {/* 2. Our Services Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                openOnHover={false}
                className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring select-none data-[popup-open]:text-foreground data-[popup-open]:bg-accent/60"
              >
                <span>Our Services</span>
                <ChevronDown
                  size={12}
                  className="text-muted-foreground transition-transform duration-200 group-data-[popup-open]:rotate-180"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                alignOffset={-80}
                sideOffset={12}
                className="w-[660px] p-2.5 rounded-2xl shadow-xl border border-border/80 bg-popover/98 backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-1.5">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem
                      key={item.href}
                      render={<Link href={item.href} />}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 cursor-pointer text-left outline-none transition-colors"
                    >
                      <div className="size-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-foreground flex items-center justify-center shrink-0 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                        <Image
                          src={item.iconSrc}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="size-5 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-medium text-foreground block leading-snug">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] leading-tight text-muted-foreground mt-0.5 line-clamp-1 font-normal">
                          {item.description}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 3. Trades Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                openOnHover={false}
                className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring select-none data-[popup-open]:text-foreground data-[popup-open]:bg-accent/60"
              >
                <span>Trades</span>
                <ChevronDown
                  size={12}
                  className="text-muted-foreground transition-transform duration-200 group-data-[popup-open]:rotate-180"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={12}
                className="w-[580px] sm:w-[640px] p-0 rounded-2xl shadow-xl border border-border/80 bg-popover/98 backdrop-blur-xl overflow-hidden"
              >
                <div className="divide-y divide-border/60">
                  {tradeRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-2 divide-x divide-border/60">
                      {row.map((item) => (
                        <DropdownMenuItem
                          key={item.href}
                          render={<Link href={item.href} />}
                          className="px-5 py-3 text-[13px] sm:text-[13.5px] font-normal text-foreground/85 hover:text-foreground hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer outline-none rounded-none flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Direct Links */}
            <Link
              className="px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer"
              href="/our-projects"
            >
              Our Projects
            </Link>
            <Link
              className="px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer"
              href="/our-blogs"
            >
              Blogs
            </Link>
            <Link
              className="px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer"
              href="#contact"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5">
            <Button
              render={<Link href="#contact" />}
              size="default"
              className="rounded-lg text-xs font-medium px-4 shadow-xs"
            >
              <span>Affordable Estimates (30% off)</span>
              <ArrowRight size={13} />
            </Button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <CloseCircle size={22} className="text-foreground" />
              ) : (
                <MenuIcon size={22} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl px-4 py-5 shadow-xl max-h-[85vh] overflow-y-auto animate-fade-in-up">
            {/* Mobile About Us Direct Link */}
            <div className="border-b border-border/70 pb-2 mb-1">
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                <span>About Us</span>
                <ArrowRight size={13} className="text-muted-foreground" />
              </Link>
            </div>

            <Accordion className="w-full">
              {/* Mobile Our Services */}
              <AccordionItem value="services">
                <AccordionTrigger className="text-sm font-medium py-3 text-foreground">
                  Our Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1 pl-2 pt-1 pb-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-foreground/80 hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.iconSrc}
                            alt=""
                            width={16}
                            height={16}
                            className="size-4 object-contain"
                          />
                          <span>{item.title}</span>
                        </div>
                        <ArrowRight size={11} className="text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Mobile Trades */}
              <AccordionItem value="trades">
                <AccordionTrigger className="text-sm font-medium py-3 text-foreground">
                  Trades (10)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1 pl-2 pt-1 pb-2">
                    {tradeItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-normal text-foreground/80 hover:bg-accent transition-colors"
                      >
                        <span>{item.title}</span>
                        <ArrowRight size={11} className="text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Direct Links on Mobile */}
            <div className="border-t border-border/80 pt-3 mt-2 space-y-1">
              <Link
                href="/our-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Our Projects
              </Link>
              <Link
                href="/our-blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Contact & CTA Footer */}
            <div className="mt-4 pt-4 border-t border-border/80 space-y-3">
              <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                <a
                  href="tel:+13466602440"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Call size={14} className="text-primary" />
                  <span>Call: (346) 660-2440</span>
                </a>
                <a
                  href="mailto:Info@buildcraft360.com"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Message size={14} className="text-primary" />
                  <span>Email: Info@buildcraft360.com</span>
                </a>
              </div>
              <Button
                render={<Link href="#contact" />}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center py-2.5 text-xs font-medium"
              >
                <span>Get Estimate (30% Off)</span>
                <ArrowRight size={13} />
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
