"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Call,
  Message,
  ChevronDown,
  Profile,
  ArrowRight,
  Menu as MenuIcon,
  CloseCircle,
  Buildings,
  Star,
  ShieldCheck,
  Global,
  WalletCheck,
  CircleInfo,
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

const aboutUsItems = [
  {
    href: "/about-us",
    title: "Company Overview",
    description: "Certified estimating team, our mission & 8,000+ completed projects",
    Icon: Buildings,
  },
  {
    href: "/our-pricing",
    title: "Our Pricing",
    description: "$50 single trade, monthly estimator packages & 30% savings",
    Icon: WalletCheck,
  },
  {
    href: "/service-areas",
    title: "Our Service Areas",
    description: "Serving general contractors across USA, Canada & Australia",
    Icon: Global,
  },
  {
    href: "/testimonials",
    title: "Client Testimonials",
    description: "Read verified contractor reviews, ratings & feedback",
    Icon: Star,
  },
  {
    href: "/faqs",
    title: "Frequently Asked Questions",
    description: "Turnaround times, databases, software & delivery formats",
    Icon: CircleInfo,
  },
  {
    href: "/contact-us",
    title: "Contact Us",
    description: "Offices in Houston TX, Melbourne AU & Oshawa Canada",
    Icon: Call,
  },
];

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
              href="mailto:info@constructestimates.com"
            >
              <Message size={12} className="text-primary-foreground/70" />
              <span>info@constructestimates.com</span>
            </a>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <span className="text-slate-400 hidden sm:inline text-[11px]">
              Follow Us On:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/construct-estimates/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
              src="/assets/logos/logo.svg"
              alt="Construct Estimates"
              width={180}
              height={45}
              priority
              className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Navigation with shadcn Dropdowns */}
          <nav className="hidden lg:flex items-center gap-2 text-[13.5px] font-medium text-foreground/80">
            {/* 1. About Us Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring select-none data-[popup-open]:text-foreground data-[popup-open]:bg-accent/60">
                <span>About Us</span>
                <ChevronDown
                  size={12}
                  className="text-muted-foreground transition-transform duration-200 group-data-[popup-open]:rotate-180"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={12}
                className="w-[580px] p-2.5 rounded-2xl shadow-xl border border-border/80 bg-popover/98 backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-1.5">
                  {aboutUsItems.map((item) => {
                    const ItemIcon = item.Icon;
                    return (
                      <DropdownMenuItem
                        key={item.href}
                        render={<Link href={item.href} />}
                        className="group relative flex items-start gap-2.5 p-2 rounded-xl transition-all duration-150 hover:bg-accent/80 cursor-pointer text-left outline-none focus-visible:bg-accent"
                      >
                        <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-foreground flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          <ItemIcon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[12.5px] font-medium text-foreground group-hover:text-primary transition-colors block leading-snug">
                            {item.title}
                          </span>
                          <p className="text-[11px] leading-snug text-muted-foreground group-hover:text-foreground/80 transition-colors mt-0.5 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. Our Services Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring select-none data-[popup-open]:text-foreground data-[popup-open]:bg-accent/60">
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
                      className="group relative flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-accent/80 cursor-pointer text-left outline-none focus-visible:bg-accent"
                    >
                      <div className="size-9 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <Image
                          src={item.iconSrc}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="size-5 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors block leading-snug">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] leading-tight text-muted-foreground group-hover:text-foreground/80 transition-colors mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all ml-auto shrink-0 self-center"
                      />
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 3. Trades Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-foreground hover:bg-accent/60 transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring select-none data-[popup-open]:text-foreground data-[popup-open]:bg-accent/60">
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
                          className="px-5 py-3.5 text-[13px] sm:text-[13.5px] font-normal text-foreground/80 hover:text-primary hover:bg-muted/40 transition-colors cursor-pointer outline-none focus-visible:bg-muted/50 rounded-none flex items-center justify-between"
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

            <Button
              variant="outline"
              size="icon-sm"
              title="My Account"
              aria-label="My Account"
              className="hidden sm:inline-flex"
            >
              <Profile size={15} />
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
            <Accordion className="w-full">
              {/* Mobile About Us */}
              <AccordionItem value="about">
                <AccordionTrigger className="text-sm font-medium py-3 text-foreground">
                  About Us
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1.5 pl-2 pt-1 pb-2">
                    {aboutUsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
                      >
                        <span>{item.title}</span>
                        <ArrowRight size={11} className="text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

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
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
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
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-normal text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
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
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
              >
                Our Projects
              </Link>
              <Link
                href="/our-blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
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
                  href="mailto:info@constructestimates.com"
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Message size={14} className="text-primary" />
                  <span>Email: info@constructestimates.com</span>
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
