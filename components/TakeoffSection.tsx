"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "reicon-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trades = [
  {
    label: "Concrete Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    title: "Concrete Estimating",
    description:
      "Our concrete estimating services are designed to support contractors in accurately estimating the costs and quantities related to concrete construction. Our expert team provides thorough and reliable takeoffs and estimates, whether it's foundations, slabs, driveways, or parking lots. With the highest bid-winning ratio and utilizing advanced software such as Bluebeam, Planswift, and Accubid, we ensure high accuracy in our estimates.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Concrete worker on site",
    subtitle: "Foundations, Retaining Walls & Footings",
    spec: "Precise CY, Rebar tonnage, formwork SF and pumping rates.",
  },
  {
    label: "Electric Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Electrical Estimating",
    description:
      "Our electrical estimating specialists deliver comprehensive wire, conduit, panel, fixture, and device takeoffs for residential, commercial, and industrial projects using Accubid and Planswift.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Electrical work on site",
    subtitle: "Wiring, Panels & Light Fixtures",
    spec: "Linear ft, breaker count, fixture & device schedules.",
  },
  {
    label: "Interior & Exterior Finishes",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    title: "Interior & Exterior Finishes",
    description:
      "Comprehensive flooring, tiling, painting, drywall, and exterior cladding estimates with RSMeans pricing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Interior finishes",
    subtitle: "Flooring, Paint, Drywall & Cladding",
    spec: "SF by room, material schedules, labor hours.",
  },
  {
    label: "Masonry Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
        />
      </svg>
    ),
    title: "Masonry Estimating",
    description:
      "Block, brick, stone, and CMU takeoffs calculated with mortar yields, labor productivity, and accessory hardware.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Masonry work",
    subtitle: "Block, Brick & Stone Work",
    spec: "Block count, mortar CY, ties & hardware.",
  },
  {
    label: "MEP Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
        />
      </svg>
    ),
    title: "MEP Estimating",
    description:
      "Mechanical, electrical, and plumbing estimates covering ductwork, piping, fixtures, and equipment with full labor analysis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "MEP work",
    subtitle: "Mechanical, Electrical & Plumbing",
    spec: "LF piping, duct SF, fixture count, equipment.",
  },
  {
    label: "Metal Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z"
        />
      </svg>
    ),
    title: "Metal Estimating",
    description:
      "Structural steel, decking, miscellaneous metals, and cold-formed framing estimates with connection hardware and surface coatings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Metal framing",
    subtitle: "Structural Steel & Cold-Formed Framing",
    spec: "Tonnage, LF, connection hardware & coatings.",
  },
  {
    label: "Openings Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
        />
      </svg>
    ),
    title: "Openings Estimating",
    description:
      "Doors, frames, hardware, windows, storefronts, and curtain wall systems, fully itemized with manufacturer specs and hardware schedules.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Window openings",
    subtitle: "Doors, Windows & Curtain Wall Systems",
    spec: "Unit count, frame type, hardware & glazing.",
  },
  {
    label: "Sitework Estimating",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25z"
        />
      </svg>
    ),
    title: "Sitework Estimating",
    description:
      "Excavation, grading, utilities, paving, and landscaping takeoffs with haul distances, soil conditions, and equipment hour rates.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Sitework",
    subtitle: "Excavation, Grading & Utilities",
    spec: "CY earthwork, LF utility, SY paving.",
  },
  {
    label: "Thermal/Moisture Protection",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Thermal & Moisture Protection",
    description:
      "Roofing, waterproofing, insulation, and sealant estimating with manufacturer spec compliance and warranty requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Roofing insulation",
    subtitle: "Roofing, Waterproofing & Insulation",
    spec: "SF roofing, LF flashing, R-value compliance.",
  },
  {
    label: "Lumber Takeoff",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m8.485-9H3.515"
        />
      </svg>
    ),
    title: "Lumber Takeoff",
    description:
      "Complete wood framing takeoffs including studs, joists, rafters, sheathing, engineered lumber, and hardware for residential and light commercial projects.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDjgnvMnE-Js6k0fGmKgotR8BwFt6xdgw_3bZTmqlqvJD-bGEuiGR45fl-tYjQ7sX0800gLRBUTNid9Ueva8xlhiGejt4GctMJs3J1jLyRqWv5ZlQZqqwPvxjnNbL0uVSG1SkftKz4IXfOBHClnaWo9HYLJVE3m5LOr5E6huyQjDf5RdNVFXGwN_sQOA8-EqMkCAshN0GpmBw-vm54w3VrVTfs4iqPRXpJ-aYhvFoHoSlmIk8_fyyug",
    imageAlt: "Lumber framing",
    subtitle: "Framing, Sheathing & Hardware",
    spec: "LF by member, BF lumber, connector hardware.",
  },
];

export default function TakeoffSection() {
  const [active, setActive] = useState(0);
  const trade = trades[active];

  return (
    <section
      className="py-24 md:py-32 bg-background border-t border-border"
      id="takeoffs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground block mb-2.5">
            Trade Division Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight">
            Construction Takeoff{" "}
            <span className="font-normal text-primary">Services</span>
          </h2>
          <p className="font-sans text-muted-foreground text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            We specialize in providing construction takeoff services that
            support contractors in accurately estimating costs and quantities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Trade List with tasteful non-flooding active state */}
          <div className="lg:col-span-4 bg-slate-50/70 dark:bg-slate-900/40 border border-border rounded-2xl p-2.5 space-y-1 text-xs font-sans shadow-2xs">
            {trades.map((t, i) => {
              const isSelected = active === i;
              return (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-card text-foreground font-medium shadow-2xs border border-border border-l-[3px] border-l-foreground"
                      : "text-muted-foreground font-normal border border-transparent hover:bg-card/60 hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={
                        isSelected ? "text-primary" : "text-muted-foreground"
                      }
                    >
                      {t.icon}
                    </span>
                    <span>{t.label}</span>
                  </span>
                  <ChevronRight
                    size={13}
                    className={
                      isSelected ? "text-primary" : "text-muted-foreground/60"
                    }
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Trade Panel */}
          <div className="lg:col-span-8 bg-card border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-foreground tracking-tight">
                <span className="font-normal text-primary">
                  {trade.title.split(" ")[0]}
                </span>{" "}
                {trade.title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="font-sans text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                {trade.description}
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-sm aspect-video bg-card flex items-end border border-border">
              <Image
                alt={trade.imageAlt}
                className="absolute inset-0 object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                src="/assets/trades/concrete.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
              <div className="relative z-20 p-6 text-white w-full flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="inline-block text-[10px] font-sans font-medium uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-0.5 rounded-md">
                    Standard Spec
                  </span>
                  <h4 className="font-medium text-base text-white mt-1">
                    {trade.subtitle}
                  </h4>
                  <p className="text-xs text-white/80 font-normal">
                    {trade.spec}
                  </p>
                </div>
                <Button
                  render={<Link href="#contact" />}
                  size="default"
                  className="bg-white text-slate-900 font-medium text-xs px-4"
                >
                  Request {trade.title.split(" ")[0]} Takeoff
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
