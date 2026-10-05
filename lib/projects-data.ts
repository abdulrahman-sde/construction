export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectQuantityItem {
  division: string;
  item: string;
  unit: string;
  quantity: string;
  notes: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Civil" | "Specialty";
  metaDesc: string;
  headline: string;
  summary: string;
  clientType: string;
  turnaroundTime: string;
  softwareUsed: string[];
  deliverables: string[];
  scopeHighlights: string[];
  samplePdfName: string;
  sampleFileSize: string;
  imageSrc: string;
  tradeIcon?: string;
  stats: ProjectStat[];
  overviewText: string[];
  challenges: string;
  solution: string;
  keyQuantities: ProjectQuantityItem[];
}

export const ALL_PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "residential-buildings",
    title: "Residential Buildings",
    category: "Residential",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your residential construction project. Plan costs, budgets, and timelines.",
    headline:
      "Detailed Plan Markups & Cost Estimation for Multi-Family & Custom Residential Developments",
    summary:
      "Get clear markups and detailed PDFs to visualize each step of your residential construction project. Plan costs, budgets, and timelines with pin-point accuracy.",
    clientType: "General Contractors & Home Builders",
    turnaroundTime: "24–48 Hours",
    softwareUsed: ["Planswift", "Bluebeam Revu", "RSMeans Data 2026"],
    deliverables: [
      "Color-Coded PDF Plan Markups with Area & Linear Measurements",
      "CSI MasterFormat 16-Division Excel Bill of Quantities (BOQ)",
      "Comprehensive Lumber, Sheathing & Drywall Takeoff Sheets",
      "Subcontractor Bid Comparison & Material Pricing Schedules",
    ],
    scopeHighlights: [
      "Substructure concrete, foundation footings, and slab-on-grade takeoffs",
      "Wood and light-gauge steel structural framing member cut-lists",
      "Thermal insulation, vapor barriers, and interior drywall wallboard square footage",
      "High-end architectural finishes, cabinetry, plumbing, and electrical fixture counts",
    ],
    samplePdfName: "Sample_Residential_Takeoff_Package.pdf",
    sampleFileSize: "4.8 MB",
    imageSrc: "/assets/images/projects/residential-buildings.jpg",
    tradeIcon: "/assets/trades/concrete.svg",
    stats: [
      { label: "Turnaround Time", value: "36 Hours" },
      { label: "Cost Accuracy Rate", value: "99.2%" },
      { label: "CSI Divisions Covered", value: "Divisions 02–14" },
      { label: "Format Delivered", value: "PDF & Excel" },
    ],
    overviewText: [
      "At Construct Estimates, our residential estimating team provides exhaustive, audit-ready cost assessments for multi-family residential complexes, custom single-family estates, and extensive residential renovations.",
      "Every takeoff is performed using high-resolution digital plan digitizers in Bluebeam Revu and PlanSwift. Each structural framing element, concrete cubic yard, and square foot of drywall is color-coded directly on your construction drawings, allowing project managers and field superintendents to verify every line item visually.",
      "Pricing is calibrated using the latest 2026 RSMeans localized cost data aligned with your project's specific zip code, ensuring that your bids are fiercely competitive yet protect your profit margins against material cost volatility.",
    ],
    challenges:
      "Tight bid submission deadline of 48 hours for a 12-unit multi-family residential complex with multiple architectural revisions and complex site topography.",
    solution:
      "Deployed a two-estimator team to split site earthwork/foundation and superstructure framing packages simultaneously in PlanSwift, verifying all addenda and delivering a unified CSI MasterFormat bid sheet in 36 hours.",
    keyQuantities: [
      {
        division: "Div 03 - Concrete",
        item: "Continuous Strip & Spread Footings (3,000 PSI)",
        unit: "CY",
        quantity: "420",
        notes: "Includes forms, rebar placement & continuous pour inspection",
      },
      {
        division: "Div 06 - Wood & Plastics",
        item: "2x6 Exterior Wall Stud Framing (16\" O.C.)",
        unit: "MBF",
        quantity: "64.5",
        notes: "Kiln-dried SPF #2 grade with seismic tie-down clips",
      },
      {
        division: "Div 07 - Thermal & Moisture",
        item: "R-21 Kraft-Faced Fiberglass Batt Insulation",
        unit: "SF",
        quantity: "28,400",
        notes: "Exterior thermal envelope and party-wall acoustic dampening",
      },
      {
        division: "Div 09 - Finishes",
        item: "5/8\" Type X Gypsum Wallboard (Taped & Finished)",
        unit: "SF",
        quantity: "86,200",
        notes: "Level 4 architectural finish with corner bead & trim accessories",
      },
      {
        division: "Div 07 - Roofing",
        item: "Architectural Asphalt Shingles & Underlayment",
        unit: "SQ",
        quantity: "142",
        notes: "30-year architectural warranty with drip edge & ridge venting",
      },
    ],
  },
  {
    slug: "commercial-buildings",
    title: "Commercial Buildings",
    category: "Commercial",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your commercial construction project. Plan costs, budgets, and timelines.",
    headline:
      "Comprehensive Commercial Quantity Takeoffs & Subcontractor Bid Packages",
    summary:
      "Complete takeoff packages for multi-story office complexes, retail centers, healthcare facilities, and hospitality buildings with CSI division breakdowns.",
    clientType: "Commercial General Contractors & Developers",
    turnaroundTime: "24–48 Hours",
    softwareUsed: ["Bluebeam Revu", "Planswift", "Trimble Quest"],
    deliverables: [
      "Structural Steel Tonnage & Precast Concrete Schedules",
      "Glazing, Curtain Wall & Storefront Elevation Markups",
      "Division-by-Division CSI MasterFormat 16-Division Excel BOQ",
      "MEP Systems Material Breakdowns & Subcontractor RFP Sheets",
    ],
    scopeHighlights: [
      "Heavy commercial foundations, grade beams, and elevated slab-on-deck takeoffs",
      "Structural steel framing, joists, metal decking, and miscellaneous steel fabrications",
      "Architectural facade systems, aluminum storefronts, and acoustic ceiling tiles",
      "Commercial fire suppression, HVAC ductwork, and primary electrical distribution",
    ],
    samplePdfName: "Sample_Commercial_Building_Takeoff.pdf",
    sampleFileSize: "6.2 MB",
    imageSrc: "/assets/images/projects/commercial-buildings.jpg",
    tradeIcon: "/assets/trades/metal.svg",
    stats: [
      { label: "Turnaround Time", value: "48 Hours" },
      { label: "Cost Accuracy Rate", value: "99.5%" },
      { label: "CSI Divisions Covered", value: "Divisions 01–16" },
      { label: "Bid Win Benchmark", value: "34% Increase" },
    ],
    overviewText: [
      "Commercial building estimating demands extreme rigor. From mid-rise corporate headquarters to neighborhood retail strip centers and medical office facilities, Construct Estimates delivers audit-proof takeoff packages.",
      "We unpack complex MEP drawings, structural engineering schedules, and architectural specifications, synthesizing thousands of distinct trade items into an intuitive, editable Excel Bill of Quantities.",
      "Our team identifies constructability clashes, missing plan details, and scope ambiguities early during the pre-construction takeoff phase, drafting Request for Information (RFI) logs to prevent costly change orders during execution.",
    ],
    challenges:
      "Complex 45,000 sq ft mixed retail/office building with high-performance curtain walls, extensive structural steel connections, and specialized MEP requirements.",
    solution:
      "Utilized Bluebeam Revu's multi-layered custom toolsets to segregate structural, envelope, and interior scopes, delivering itemized subcontractor bid packages that enabled the client to secure 5 competitive trade bids under budget.",
    keyQuantities: [
      {
        division: "Div 05 - Metals",
        item: "Wide Flange Structural Steel Columns & Beams",
        unit: "Tons",
        quantity: "185",
        notes: "ASTM A992 Grade 50 with primer coat and moment connection tabs",
      },
      {
        division: "Div 08 - Openings",
        item: "Thermally Broken Aluminum Curtain Wall System",
        unit: "SF",
        quantity: "8,950",
        notes: "Low-E insulated double-pane glazing with structural silicone sealant",
      },
      {
        division: "Div 03 - Concrete",
        item: "Elevated Slab on Metal Deck (3-1/2\" Lightweight Concrete)",
        unit: "SF",
        quantity: "45,000",
        notes: "Includes welded wire fabric 6x6-W2.9/W2.9 and trowel finish",
      },
      {
        division: "Div 09 - Finishes",
        item: "2'x2' Suspended Acoustical Tile Ceilings (NRC 0.70)",
        unit: "SF",
        quantity: "32,800",
        notes: "Heavy-duty exposed tee grid system with perimeter angle moulding",
      },
      {
        division: "Div 07 - Roofing",
        item: "60-Mil TPO Fully Adhered Single-Ply Membrane System",
        unit: "SQ",
        quantity: "165",
        notes: "Includes R-30 polyiso rigid insulation and tapered cricket system",
      },
    ],
  },
  {
    slug: "civil-construction",
    title: "Civil Construction",
    category: "Civil",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your civil construction project. Plan costs, budgets, and timelines.",
    headline:
      "Earthwork, Utilities & Heavy Civil Infrastructure Estimates",
    summary:
      "Precision earthwork cut-and-fill takeoffs, paving, underground utilities, stormwater drainage, and municipal infrastructure estimation for major public works.",
    clientType: "Civil Contractors & Infrastructure Developers",
    turnaroundTime: "24–48 Hours",
    softwareUsed: ["AGTEK", "InSite Elevation Pro", "Bluebeam Revu"],
    deliverables: [
      "3D Earthwork Cut & Fill Surface Mesh Calculation Reports",
      "Storm Sewer, Sanitary & Potable Water Utility Lineal Takeoffs",
      "Asphalt Paving, Base Course & Curb/Gutter Linear Schedules",
      "Heavy Equipment Fleet Hours & Labor Production Analysis",
    ],
    scopeHighlights: [
      "Subsurface soil volume balancing, mass excavation, and offsite export calculations",
      "Retention ponds, bioswales, headwalls, and stormwater management systems",
      "Underground utility trenching, bedding gravel, and backfill compaction quantities",
      "Roadway asphalt paving, concrete sidewalks, and highway safety barriers",
    ],
    samplePdfName: "Sample_Civil_Earthwork_Utility_Takeoff.pdf",
    sampleFileSize: "7.1 MB",
    imageSrc: "/assets/images/projects/civil-construction.jpg",
    tradeIcon: "/assets/trades/sitework.svg",
    stats: [
      { label: "Earthwork Precision", value: "+/- 1.5%" },
      { label: "Turnaround Time", value: "48 Hours" },
      { label: "Agencies Served", value: "DOT / MTA / EPA" },
      { label: "Deliverable Format", value: "3D CAD & Excel" },
    ],
    overviewText: [
      "Civil estimating requires cutting-edge volumetric modeling. At Construct Estimates, we utilize 3D surface modeling tools such as AGTEK and InSite Elevation Pro to calculate exact cut and fill quantities, accounting for soil shrinkage, swell factors, and topsoil stripping depths.",
      "We specialize in public infrastructure and utility contracts conforming to federal, state, and municipal DOT specifications (such as TxDOT and California Caltrans standards).",
      "Whether bidding on a 50-acre commercial site grading project or municipal underground sewer extension, our civil estimators ensure every linear foot of pipe, cubic yard of bedding gravel, and ton of asphalt is accounted for with zero guesswork.",
    ],
    challenges:
      "Site with erratic existing grades, severe cross-slopes, and high groundwater table requiring specialized dewatering and balanced cut/fill sequencing.",
    solution:
      "Digitized existing and proposed topographic contour lines into 3D wireframe terrain models, optimizing cut/fill strata to eliminate 8,200 CY of unnecessary off-site soil disposal.",
    keyQuantities: [
      {
        division: "Div 31 - Earthwork",
        item: "Site Mass Excavation & Cut-to-Fill Recompaction",
        unit: "CY",
        quantity: "68,400",
        notes: "Includes 8\" topsoil stripping, onsite haulage, and 95% Proctor compaction",
      },
      {
        division: "Div 33 - Utilities",
        item: "24\" Reinforced Concrete Storm Sewer Pipe (Class III)",
        unit: "LF",
        quantity: "3,450",
        notes: "Trench depth 6'-10', including crushed rock bedding and rubber gaskets",
      },
      {
        division: "Div 32 - Paving",
        item: "Heavy-Duty Asphalt Pavement (3\" Surface / 6\" Crushed Aggregate Base)",
        unit: "SY",
        quantity: "24,800",
        notes: "Superpave PG 64-22 mix design with prime coat and lime stabilization",
      },
      {
        division: "Div 32 - Exterior Improvements",
        item: "Cast-in-Place Concrete Curb and Gutter (Type II)",
        unit: "LF",
        quantity: "6,200",
        notes: "3,500 PSI air-entrained concrete with contraction joints @ 10' O.C.",
      },
    ],
  },
  {
    slug: "home-construction",
    title: "Home Construction",
    category: "Residential",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your home construction project. Plan costs, budgets, and timelines.",
    headline:
      "Single-Family Home Framing, Finishes & Foundation Estimating",
    summary:
      "Complete estimation packages tailored for custom home builders and residential general contractors, ensuring budget adherence before breaking ground.",
    clientType: "Custom Home Builders & Remodelers",
    turnaroundTime: "24–48 Hours",
    softwareUsed: ["Planswift", "FastPIPE", "Bluebeam Revu"],
    deliverables: [
      "Itemized Foundation & Post-Tension Slab Takeoffs",
      "Lumber Stud, Header, Joist & Roof Truss Material Schedules",
      "Exterior Siding, Windows & Roofing Quantity Takeoffs",
      "Interior Trim, Millwork, Paint & Flooring Material Takeoffs",
    ],
    scopeHighlights: [
      "Precision stick-framing takeoffs detailing waste factors for headers, sills, and plates",
      "Engineered floor joists (I-joists) and pre-fabricated roof truss packages",
      "Complete interior door schedules, casing, baseboard, and architectural moldings",
      "Plumbing rough-ins, HVAC duct runs, and electrical service load calculations",
    ],
    samplePdfName: "Sample_Custom_Home_Takeoff.pdf",
    sampleFileSize: "4.1 MB",
    imageSrc: "/assets/images/projects/home-construction.jpg",
    tradeIcon: "/assets/trades/lumber.svg",
    stats: [
      { label: "Turnaround Time", value: "24 Hours" },
      { label: "Lumber Waste Factor", value: "< 5% Target" },
      { label: "Estimator Standard", value: "AACE Certified" },
      { label: "Revisions Allowed", value: "Unlimited" },
    ],
    overviewText: [
      "Custom home building leaves no margin for loose material estimates. An over-ordered framing package erodes profit, while an under-ordered one stalls trade crews on site.",
      "Construct Estimates provides home builders with line-item clarity. We break down your lumber takeoff by wall section, floor level, and roof elevation, providing suppliers with ready-to-quote cut lists.",
      "From foundation pouring to final cabinet hardware, our detailed PDFs give home builders the confidence to present fixed-price contracts to discerning home buyers.",
    ],
    challenges:
      "Custom 5,800 sq ft luxury residence with complex vaulted timber framing, multiple ceiling heights, and premium imported stone veneers.",
    solution:
      "Separated the project into clear architectural framing assemblies with 3D cut lists, allowing the builder to negotiate volume pricing with local lumber yards and save $14,000 on framing lumber.",
    keyQuantities: [
      {
        division: "Div 03 - Concrete",
        item: "Post-Tensioned Monolithic Slab-on-Grade",
        unit: "CY",
        quantity: "215",
        notes: "3,000 PSI concrete with 1/2\" unbonded post-tensioning tendons",
      },
      {
        division: "Div 06 - Framing",
        item: "Engineered Wood I-Joists (11-7/8\" Series)",
        unit: "LF",
        quantity: "3,100",
        notes: "Includes rim board, web stiffeners, and Simpson hanger hardware",
      },
      {
        division: "Div 07 - Siding",
        item: "James Hardie Fiber Cement Lap Siding (7.25\" Exposure)",
        unit: "SF",
        quantity: "4,650",
        notes: "Includes color-matched trim boards, flashing, and moisture barrier",
      },
      {
        division: "Div 09 - Flooring",
        item: "Engineered European White Oak Hardwood Flooring",
        unit: "SF",
        quantity: "3,800",
        notes: "Includes sound-deadening underlayment and transition thresholds",
      },
    ],
  },
  {
    slug: "bridge-construction",
    title: "Bridge Construction",
    category: "Civil",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your bridge construction project. Plan costs, budgets, and timelines.",
    headline:
      "Transportation & Highway Bridge Structural Estimating",
    summary:
      "Specialized public infrastructure estimates complying with DOT and FHWA standards for overpasses, pedestrian bridges, and structural concrete spans.",
    clientType: "Heavy Highway & Bridge Contractors",
    turnaroundTime: "48–72 Hours",
    softwareUsed: ["Bluebeam Revu", "HeavyBid", "RSMeans Heavy Construction"],
    deliverables: [
      "Abutment, Pier & Substructure Concrete Volume Takeoffs",
      "Epoxy-Coated Rebar Fabrication & Placement Schedules",
      "Precast Prestressed Concrete Girder & Structural Steel Takeoffs",
      "Traffic Phasing, Shoring, Falsework & Crane Setup Cost Worksheets",
    ],
    scopeHighlights: [
      "Deep foundation drilled shafts, steel H-piles, and cofferdam dewatering",
      "High-performance concrete bridge deck pours with silica fume additives",
      "Elastomeric bearing pads, expansion joints, and bridge deck drainage scuppers",
      "Permanent structural steel railings, crash attenuators, and seismic retrofitting",
    ],
    samplePdfName: "Sample_Bridge_Infrastructure_Takeoff.pdf",
    sampleFileSize: "8.4 MB",
    imageSrc: "/assets/images/projects/bridge-construction.jpg",
    tradeIcon: "/assets/trades/mep.svg",
    stats: [
      { label: "Turnaround Time", value: "48 Hours" },
      { label: "DOT Compliance", value: "100% Guaranteed" },
      { label: "Rebar Precision", value: "+/- 0.8%" },
      { label: "Standard Followed", value: "AASHTO / FHWA" },
    ],
    overviewText: [
      "Bridge construction estimating requires technical mastery of heavy civil engineering specifications. Quantities must adhere to AASHTO, FHWA, and state DOT standard specifications.",
      "Construct Estimates has provided estimating consultation for bridge rehabilitation projects, multi-span highway overpasses, and pedestrian trail bridges across North America and Australia.",
      "We account for critical temporary works that general estimating services overlook: coffer dams, formwork shoring, crane pad construction, traffic management staging, and environmental silt containment.",
    ],
    challenges:
      "Three-span vehicular bridge replacement with strict environmental river protection covenants, accelerated 4-stage traffic sequencing, and heavy rebar congestion.",
    solution:
      "Produced comprehensive rebar bar-bending schedules and segmented concrete pour phase plans, validating crane reach and pick capacities to streamline the contractor's winning competitive bid.",
    keyQuantities: [
      {
        division: "Div 03 - Concrete",
        item: "Class S High-Performance Bridge Deck Concrete",
        unit: "CY",
        quantity: "1,450",
        notes: "4,500 PSI low-permeability concrete with crystalline waterproofing",
      },
      {
        division: "Div 03 - Reinforcing",
        item: "ASTM A775 Epoxy-Coated Steel Reinforcing Bars (Rebar)",
        unit: "LBS",
        quantity: "285,000",
        notes: "#4 through #11 bars with mechanical splices and corrosion-proof chairs",
      },
      {
        division: "Div 05 - Steel",
        item: "Structural Steel Plate Girders (Weathering Steel AASHTO M270)",
        unit: "Tons",
        quantity: "340",
        notes: "Includes cross frames, lateral bracing, shear studs, and field bolts",
      },
      {
        division: "Div 31 - Piling",
        item: "HP 14x89 Steel Bearing Piles (Driven)",
        unit: "LF",
        quantity: "4,800",
        notes: "Includes pile tips, dynamic pile testing, and splice welding",
      },
    ],
  },
  {
    slug: "kitchen-construction",
    title: "Kitchen Construction",
    category: "Specialty",
    metaDesc:
      "Get clear markups and detailed PDFs to visualize each step of your kitchen construction project. Plan costs, budgets, and timelines.",
    headline:
      "Interior Architectural Finishes, Millwork & MEP Estimation",
    summary:
      "Detailed quantity takeoff packages for high-end residential kitchen overhauls and commercial culinary facilities including cabinetry, countertops, fixtures, and MEP tie-ins.",
    clientType: "Interior Remodelers & Millwork Contractors",
    turnaroundTime: "24–36 Hours",
    softwareUsed: ["PlanSwift", "Bluebeam Revu", "TradeTek"],
    deliverables: [
      "Custom Cabinetry & Island Millwork Linear Footage Breakdown",
      "Granite, Quartz & Marble Countertop Net Area Calculations",
      "Backsplash Tile, Flooring & Wall Finish Material Takeoffs",
      "Plumbing Rough-In, Gas Line & Dedicated Electrical Circuit Count",
    ],
    scopeHighlights: [
      "Itemized counts for base cabinets, wall upper cabinets, pantry towers, and panels",
      "Countertop slab optimization reports calculating cutouts, sink openings, and edge profiles",
      "Floor tile and acoustic membrane square footage with accurate pattern waste factors",
      "Dedicated 20A appliance circuit schedules and commercial-grade exhaust duct routing",
    ],
    samplePdfName: "Sample_Kitchen_Remodel_Takeoff.pdf",
    sampleFileSize: "3.7 MB",
    imageSrc: "/assets/images/projects/kitchen-construction.jpg",
    tradeIcon: "/assets/trades/interior.svg",
    stats: [
      { label: "Turnaround Time", value: "24 Hours" },
      { label: "Millwork Accuracy", value: "100% Itemized" },
      { label: "Sample Format", value: "PDF & Excel" },
      { label: "Client Discount", value: "30% Off First Bid" },
    ],
    overviewText: [
      "Kitchen remodels represent some of the highest square-foot cost concentrations in both residential homes and commercial hospitality projects. Precision in material counts and trade scope isolation is paramount.",
      "Construct Estimates breaks down kitchen renovations trade-by-trade: demolition, electrical service upgrades, gas piping relocations, custom casework installation, stone fabrication, and luxury appliance installation.",
      "Our takeoff packages give remodelers transparent line items to present to homeowners, eliminating awkward mid-project change orders and preserving trust throughout construction.",
    ],
    challenges:
      "High-end residential renovation involving custom European frameless cabinetry, waterfall quartz countertops, and relocation of plumbing and electrical rough-ins.",
    solution:
      "Provided an interactive color-coded plan markup isolating millwork, mechanical, and electrical trades separately, enabling the general contractor to solicit fast, firm quotes from specialized subcontractors.",
    keyQuantities: [
      {
        division: "Div 12 - Furnishings",
        item: "Custom Frameless Wood Base & Upper Cabinetry",
        unit: "LF",
        quantity: "84",
        notes: "Solid plywood box construction with soft-close Blum hardware and end panels",
      },
      {
        division: "Div 12 - Countertops",
        item: "3cm Calacatta Quartz Countertops with Mitered Edge",
        unit: "SF",
        quantity: "168",
        notes: "Includes undermount sink cutout, cooktop cutout, and waterfall leg slabs",
      },
      {
        division: "Div 09 - Tile",
        item: "Handmade Ceramic Subway Tile Backsplash",
        unit: "SF",
        quantity: "115",
        notes: "Herringbone pattern installation with mold-resistant epoxy grout",
      },
      {
        division: "Div 22 - Plumbing",
        item: "Commercial-Style Pull-Down Faucet & Prep Sink Rough-In",
        unit: "EA",
        quantity: "4",
        notes: "Includes garbage disposal electrical tie-in and dishwasher drain hookup",
      },
    ],
  },
];

export function getAllProjects(): ProjectCaseStudy[] {
  return ALL_PROJECTS;
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
