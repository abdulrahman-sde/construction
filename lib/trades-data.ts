export interface TradeItem {
  href: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  csiDivision: string;
}

export const ESTIMATING_TRADES: TradeItem[] = [
  {
    href: "/concrete-estimating-services",
    slug: "concrete-estimating-services",
    title: "Concrete Estimating Services",
    shortTitle: "Concrete Estimating",
    description:
      "Foundations, slabs, footings, rebar, formwork, grade beams & cast-in-place concrete.",
    csiDivision: "CSI Division 03",
  },
  {
    href: "/opening-estimating-services",
    slug: "opening-estimating-services",
    title: "Opening Estimating Services",
    shortTitle: "Opening Estimating",
    description:
      "Commercial & residential doors, windows, storefronts, curtain walls, glass & hardware.",
    csiDivision: "CSI Division 08",
  },
  {
    href: "/masonry-estimating-services",
    slug: "masonry-estimating-services",
    title: "Masonry Estimating Services",
    shortTitle: "Masonry Estimating",
    description:
      "CMU blocks, brick veneer, mortar, stone masonry, lintels & structural wall ties.",
    csiDivision: "CSI Division 04",
  },
  {
    href: "/mep-estimating-services",
    slug: "mep-estimating-services",
    title: "MEP Estimating Services",
    shortTitle: "MEP Estimating",
    description:
      "Mechanical (HVAC), electrical, plumbing, ductwork & fire protection systems quantification.",
    csiDivision: "CSI Divisions 21-28",
  },
  {
    href: "/metal-estimating-services",
    slug: "metal-estimating-services",
    title: "Metal Estimating Services",
    shortTitle: "Metal Estimating",
    description:
      "Structural steel framing, joists, metal decking, light-gauge framing & miscellaneous iron.",
    csiDivision: "CSI Division 05",
  },
  {
    href: "/sitework-estimating-services",
    slug: "sitework-estimating-services",
    title: "SiteWork Estimating Services",
    shortTitle: "SiteWork Estimating",
    description:
      "Excavation, cut/fill, grading, paving, utilities, drainage, clearing & earthwork takeoffs.",
    csiDivision: "CSI Division 31-33",
  },
  {
    href: "/lumber-takeoff-services",
    slug: "lumber-takeoff-services",
    title: "Lumber Takeoff Services",
    shortTitle: "Lumber Takeoff",
    description:
      "Wood framing, roof trusses, floor joists, plywood sheathing, millwork & timber structures.",
    csiDivision: "CSI Division 06",
  },
  {
    href: "/interior-exterior-finishes-estimating-services",
    slug: "interior-exterior-finishes-estimating-services",
    title: "Interior & Exterior Finishes Estimating Services",
    shortTitle: "Finishes Estimating",
    description:
      "Drywall, paint, flooring, tiling, acoustical ceilings, exterior stucco & wall finishes.",
    csiDivision: "CSI Division 09",
  },
];
