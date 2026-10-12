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
  Calculator,
  Calendar,
  Building3,
  IconComponent,
} from "reicon-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";
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

export interface NavServiceItem {
  href: string;
  title: string;
  description: string;
}

export interface NavServiceCategory {
  title: string;
  tagline: string;
  icon: IconComponent;
  items: NavServiceItem[];
}

const serviceCategories: NavServiceCategory[] = [
  {
    title: "Estimating",
    tagline: "Cost & Takeoff Engineering",
    icon: Calculator,
    items: [
      {
        href: "/construction-cost-estimating",
        title: "Construction Cost Estimating",
        description: "Detailed construction cost estimates for labor, materials, equipment, and overall project pricing.",
      },
      {
        href: "/quantity-takeoff-services",
        title: "Quantity Takeoff Services",
        description: "Accurate material quantities and itemized measurements from construction drawings.",
      },
      {
        href: "/residential-commercial-estimating",
        title: "Residential & Commercial Estimating",
        description: "Cost estimating for homes, multi-family buildings, offices, retail, and commercial developments.",
      },
      {
        href: "/tender-bid-support",
        title: "Tender & Bid Support",
        description: "Bid pricing, scope reviews, and estimating support for contractors and subcontractors.",
      },
    ],
  },
  {
    title: "Planning",
    tagline: "Schedules & Project Controls",
    icon: Calendar,
    items: [
      {
        href: "/construction-planning-scheduling",
        title: "Construction Planning & Scheduling",
        description: "Develop practical construction schedules, activity sequences, and execution plans.",
      },
      {
        href: "/primavera-p6-scheduling",
        title: "Primavera P6 Scheduling",
        description: "Baseline programs, detailed activity schedules, and schedule updates using Primavera P6.",
      },
      {
        href: "/progress-monitoring-reporting",
        title: "Progress Monitoring & Reporting",
        description: "Track planned versus actual progress and prepare clear project progress reports.",
      },
      {
        href: "/delay-analysis-schedule-recovery",
        title: "Delay Analysis & Schedule Recovery",
        description: "Assess schedule impacts and develop practical recovery or mitigation plans.",
      },
    ],
  },
  {
    title: "Architecture",
    tagline: "Design, Layouts & Visualization",
    icon: Building3,
    items: [
      {
        href: "/architectural-design",
        title: "Architectural Design",
        description: "Concept development, space planning, and building design solutions.",
      },
      {
        href: "/floor-plans-building-layouts",
        title: "Floor Plans & Building Layouts",
        description: "Functional floor plans and building layouts for residential and commercial spaces.",
      },
      {
        href: "/architectural-drawings-documentation",
        title: "Architectural Drawings & Documentation",
        description: "Plans, elevations, sections, and coordinated architectural drawing packages.",
      },
      {
        href: "/3d-modeling-visualization",
        title: "3D Modeling & Visualization",
        description: "Three-dimensional building models and visual presentations to communicate design intent.",
      },
    ],
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 360 362">
                <path
                  fill="#25D366"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                />
              </svg>
              <span>WhatsApp: (346) 861-2915</span>
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
                aria-label="Facebook"
                href="https://www.facebook.com/share/1BXiBdy5Bs/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
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
              <a
                aria-label="Instagram"
                href={INSTAGRAM_URL}
                rel="noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
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
              className="h-[25px] sm:h-7 w-auto object-contain dark:hidden"
            />
            <Image
              src="/assets/logos/buildcraft360-horizontal-white.png"
              alt="Buildcraft360"
              width={161}
              height={28}
              priority
              className="h-[25px] sm:h-7 w-auto object-contain hidden dark:block"
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
                alignOffset={0}
                sideOffset={12}
                className="w-[880px] max-w-[calc(100vw-2rem)] p-4 sm:p-5 rounded-2xl shadow-2xl border border-border/80 bg-popover/98 backdrop-blur-xl max-h-[calc(100vh-6rem)] overflow-y-auto"
              >
                <div className="grid grid-cols-3 gap-5 divide-x divide-border/60">
                  {serviceCategories.map((cat, idx) => (
                    <div key={cat.title} className={idx > 0 ? "pl-5" : ""}>
                      {/* Category Header with Icon (No Numbering) */}
                      <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-border/60">
                        <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <cat.icon size={14} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[12px] font-semibold uppercase tracking-wider text-foreground">
                            {cat.title}
                          </h3>
                          <p className="text-[10.5px] text-muted-foreground leading-tight mt-0.5 font-normal truncate">
                            {cat.tagline}
                          </p>
                        </div>
                      </div>

                      {/* 4 Category Items - Clean Minimal with In-Place Selective Disclosure */}
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <DropdownMenuItem
                            key={item.href}
                            render={<Link href={item.href} />}
                            className="group flex flex-col items-start px-2.5 py-1.5 rounded-lg hover:bg-neutral-100/90 dark:hover:bg-neutral-800/70 focus:bg-neutral-100/90 dark:focus:bg-neutral-800/70 cursor-pointer text-left outline-none transition-colors"
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="text-[13px] font-medium text-foreground group-hover:text-primary group-focus:text-primary transition-colors leading-tight">
                                {item.title}
                              </span>
                              <ArrowRight
                                size={11}
                                className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 group-focus:opacity-100 shrink-0 ml-1.5"
                              />
                            </div>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] transition-[grid-template-rows] duration-200 ease-out w-full">
                              <div className="overflow-hidden">
                                <p className="text-[11px] leading-relaxed text-muted-foreground pt-1 font-normal opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 delay-50">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clean Static Footer */}
                <div className="mt-3.5 pt-3 border-t border-border/60 flex items-center justify-between px-1.5 text-[11.5px] text-muted-foreground">
                  <span className="truncate">
                    <strong className="font-medium text-foreground">Buildcraft360</strong> — Integrated Estimating, Planning &amp; Architecture
                  </span>
                  <Link
                    href="/contact-us"
                    className="text-foreground hover:text-primary font-medium inline-flex items-center gap-1.5 transition-colors shrink-0 ml-4 group/cta"
                  >
                    <span>Request a Scope Review</span>
                    <ArrowRight size={11} className="transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
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
              href="/contact-us"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <Button
              render={
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="sm"
              className="h-8 sm:h-9 px-2.5 sm:px-4 text-[11.5px] sm:text-xs font-medium gap-1.5 sm:gap-2 shadow-xs shrink-0 rounded-lg"
            >
              <span className="hidden sm:inline">Affordable Estimates (30% off)</span>
              <span className="hidden min-[360px]:inline sm:hidden">Get 30% Off</span>
              <span className="min-[360px]:hidden">30% Off</span>
              <ArrowRight size={12} className="size-3 sm:size-3.5 shrink-0" />
            </Button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent transition-colors shrink-0"
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
              {/* Mobile Our Services - Minimal & Responsive */}
              <AccordionItem value="services">
                <AccordionTrigger className="text-sm font-medium py-3 text-foreground">
                  Our Services (12)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-1 pb-2">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title} className="space-y-1">
                        <div className="flex items-center gap-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground border-b border-border/40">
                          <cat.icon size={13} className="text-primary shrink-0" />
                          <span>{cat.title}</span>
                          <span className="text-[10px] text-muted-foreground/70 font-normal lowercase tracking-normal ml-auto">
                            {cat.tagline}
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-2 px-2.5 rounded-lg text-foreground/90 hover:bg-accent transition-colors"
                            >
                              <span className="text-[12.5px] font-medium leading-tight">
                                {item.title}
                              </span>
                              <ArrowRight size={12} className="text-muted-foreground shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
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
                href="/contact-us"
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
                  href="tel:+13468612915"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Call size={14} className="text-primary" />
                  <span>Call: (346) 861-2915</span>
                </a>
                <a
                  href="mailto:Info@buildcraft360.com"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Message size={14} className="text-primary" />
                  <span>Email: Info@buildcraft360.com</span>
                </a>
                <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                  <span className="text-[11px]">Follow Us:</span>
                  <a
                    href="https://www.facebook.com/share/1BXiBdy5Bs/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="p-1 rounded-md hover:bg-accent text-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/buildcraft360/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-1 rounded-md hover:bg-accent text-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-1 rounded-md hover:bg-accent text-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              <Button
                render={
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
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
