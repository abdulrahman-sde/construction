# Service Pages Implementation & Architecture Guide

> **Target Audience:** Coding Agents & Frontend Engineers  
> **Repository:** `construction` (Next.js 16 App Router + Tailwind v4 + Base UI)  
> **Layout Reference:** Exact visual matching of `constructestimates.com` service page design with an architectural sticky right sidebar.  
> **Aesthetic Standard:** **Editorial Architectural Minimalism** (`design-taste-frontend` + `minimalist-ui`).

---

## 1. Architectural Overview & Design Taste Directives

### 🚨 Core Negative Constraint: NEVER USE BOLD FONT
Across this entire site, **`font-bold`, `font-extrabold`, and `font-semibold` are strictly prohibited**.
- **Headlines & Titles:** Always use **`font-serif font-normal text-foreground tracking-tight`** (Newsreader serif).
- **Accent Words in Headlines:** Use **`font-serif font-normal text-primary`** (same serif family, never bold).
- **Body & Paragraphs:** Use **`font-sans font-normal text-muted-foreground leading-relaxed`** (Geist sans).
- **Buttons & Small Labels:** Use **`font-medium`** at most for compact CTA labels and badge tags.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Global Header (Sticky)                          │
├────────────────────────────────────────────────────────────────────────┤
│     Hero Banner (Editorial Blueprint Grid + Serif font-normal Title)   │
├──────────────────────────────────────────────────┬─────────────────────┤
│                                                  │                     │
│  MAIN CONTENT COLUMN (lg:col-span-8)            │  FIXED/STICKY       │
│                                                  │  RIGHT SIDEBAR      │
│  1. Category Badge & Headline with Highlight     │  (lg:col-span-4)    │
│  2. Lead Paragraphs & CTA Button                 │                     │
│  3. 2x2 Value Proposition Cards (Light Border)   │  1. 30% Off Promo   │
│  4. Scope of Work & Trade Feature Checklists     │     Card with CTA   │
│  5. Mid-Page Architectural Callout Banner        │                     │
│  6. Takeoff Package Deliverables Cards           │  2. All Services    │
│  7. [Optional Custom Component Slot]             │     Nav Menu with   │
│  8. Accordion FAQ Section                        │     Active State    │
│                                                  │                     │
│                                                  │  3. Direct Contact  │
│                                                  │     & Office Card   │
│                                                  │                     │
│                                                  │  4. AACE & AIQS     │
│                                                  │     Quality Seal    │
├──────────────────────────────────────────────────┴─────────────────────┤
│         Plan Upload & Interactive Quote Form Anchor (#contact)         │
├────────────────────────────────────────────────────────────────────────┤
│  Pre-Footer Banner (Editorial Callout + Dual Action CTAs + Shield)    │
├────────────────────────────────────────────────────────────────────────┤
│                        Global Footer & Locations                       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Reusable Component Library (`components/services/`)

All service UI sections are modular, pure components in [`components/services/`](file:///Volumes/Data/code/construction/components/services/):

| Component | File Path | Purpose & Visual Role |
| :--- | :--- | :--- |
| **`ServiceLayout`** | [`components/services/ServiceLayout.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceLayout.tsx) | Master template assembling Header, Hero, 2-column layout, Sidebar, Contact Form, Pre-Footer Banner, and Footer. |
| **`ServiceHeroBanner`** | [`components/services/ServiceHeroBanner.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceHeroBanner.tsx) | Architectural header with `blueprint-subtle-grid`, breadcrumbs, and `font-serif font-normal` headline. |
| **`ServiceSidebar`** | [`components/services/ServiceSidebar.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceSidebar.tsx) | Sticky right sidebar (`lg:sticky lg:top-24 self-start`) featuring the 30% Off Promo Card, Services Nav Menu with active highlighting, Direct Contact card, and AACE/AIQS certification seal. Zero bold text. |
| **`ServiceIntroSection`** | [`components/services/ServiceIntroSection.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceIntroSection.tsx) | Trade tag badge, H1/H2 with colored keyword highlight, lead text, trust checkmarks, and primary button. |
| **`ServiceValueGrid`** | [`components/services/ServiceValueGrid.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceValueGrid.tsx) | 2x2 grid of cards with subtle borders (`border-border/80 bg-card`), icons, and hover effects matching the site screenshot. |
| **`ServiceFeaturesSection`**| [`components/services/ServiceFeaturesSection.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceFeaturesSection.tsx) | Multi-category scope breakdown with checkmarks detailing every trade line item and technical specification. |
| **`ServiceDeliverablesSection`**| [`components/services/ServiceDeliverablesSection.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceDeliverablesSection.tsx) | 4-card grid detailing the CSI MasterFormat Excel sheet, color-coded PDF plans, cut lists, and bid proposals. |
| **`ServiceMidCta`** | [`components/services/ServiceMidCta.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceMidCta.tsx) | Architectural slate-900 callout card midway down the page with turnaround notice and "Upload Plans Now" button. |
| **`ServiceFaqSection`** | [`components/services/ServiceFaqSection.tsx`](file:///Volumes/Data/code/construction/components/services/ServiceFaqSection.tsx) | Clean accordion FAQs using `@base-ui/react/accordion` with `font-serif font-normal` headings and `font-normal` triggers. |
| **`ServicePreFooterBanner`**| [`components/services/ServicePreFooterBanner.tsx`](file:///Volumes/Data/code/construction/components/services/ServicePreFooterBanner.tsx) | Editorial bottom banner with dual action buttons and certification credentials. |

---

## 3. Data Schema & Centralized Content Registry (`lib/services-data.ts`)

All content is cleanly separated from presentation in [`lib/services-data.ts`](file:///Volumes/Data/code/construction/lib/services-data.ts).

### TypeScript Data Interface
```typescript
export interface ServiceScopeCategory {
  category: string;
  items: string[];
}

export interface ServiceValueProp {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;                      // e.g. "concrete-estimating-services"
  title: string;                     // e.g. "Concrete Estimating Services"
  breadcrumb: string;                // e.g. "Concrete Estimating Services"
  badge: string;                     // e.g. "Division 03 • Concrete Takeoffs"
  headlinePrefix: string;            // e.g. "Professional"
  highlightWord: string;             // e.g. "Concrete Estimating Services"
  headlineSuffix: string;            // e.g. "for Precise Project Bids"
  leadParagraph: string;             // Primary hero paragraph
  secondaryParagraph: string;        // Supporting methodology & software paragraph
  ctaText: string;                   // Button text
  valueProps: ServiceValueProp[];    // 4 value proposition cards
  scopeHeading: string;              // e.g. "Comprehensive Concrete Scope & Quantities"
  scopeDescription: string;          // Scope description
  scopeCategories: ServiceScopeCategory[]; // Trade breakdown categories
  deliverablesHeading: string;       // e.g. "What You Will Receive..."
  deliverables: ServiceDeliverable[];// Excel, PDF, Cut-lists, Summary
  midCtaHeading: string;             // Mid-page banner headline
  midCtaSubtext: string;             // Mid-page banner subtext
  faqs: ServiceFaq[];                // Trade-specific FAQs
  metaDescription: string;           // SEO meta description
}
```

---

## 4. How Routing Works (Root URLs & `/services/` Subpaths)

The codebase supports **both routing patterns automatically**:
1. **Root-Level URLs:** `/concrete-estimating-services` via `app/[slug]/page.tsx` (matches original WordPress permalinks).
2. **Nested URLs:** `/services/concrete-estimating-services` via `app/services/[slug]/page.tsx`.

Both routes use Next.js `generateStaticParams()` to pre-render all 22 service pages at build time with 100% static HTML (SSG) for instant page loads and maximum SEO performance.

---

## 5. How to Add a New Service Page (Instructions for Agents)

### Approach 1: Data-Driven Addition (Recommended — 0 lines of UI code!)
To add a new service (e.g. `drywall-estimating-services`):
1. Open [`lib/services-data.ts`](file:///Volumes/Data/code/construction/lib/services-data.ts).
2. Add a new entry to `ALL_SERVICES` matching the `ServicePageData` interface.
3. Add the title and slug to `SERVICES_NAV_LIST` so it automatically appears in the sidebar menu.
4. Done! Next.js will automatically generate both `/[slug]` and `/services/[slug]` statically.

### Approach 2: Custom Standalone Page (When custom UI or calculators are needed)
If a page needs custom interactive calculators or tables, create `app/[new-service]/page.tsx`:

```tsx
import type { Metadata } from "next";
import ServiceLayout from "@/components/services/ServiceLayout";
import { getServiceBySlug } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Custom Service Title | Construct Estimates",
  description: "Custom SEO description...",
};

export default function CustomServicePage() {
  const service = getServiceBySlug("concrete-estimating-services")!;

  return (
    <ServiceLayout service={service}>
      {/* Insert any custom interactive tables, calculators, or diagrams here! */}
      <div className="p-6 bg-card rounded-xl border border-border/80">
        <h4 className="font-serif font-normal text-foreground text-lg mb-2">Custom Trade Calculator</h4>
        <p className="font-sans text-xs text-muted-foreground font-normal">Specialized calculations for this trade...</p>
      </div>
    </ServiceLayout>
  );
}
```

---

## 6. Where to Source Content & Technical Data

When writing content for any new construction trade:
1. **Refer to [`CONSTRUCTESTIMATES_SITE_CONTEXT.md`](file:///Volumes/Data/code/construction/CONSTRUCTESTIMATES_SITE_CONTEXT.md):**
   - Section 3 has line-by-line extracts of all 39 primary pages.
   - Use exact CSI divisions, trade terminology, and software references.
2. **Refer to [`parsed_pages.json`](file:///Volumes/Data/code/construction/parsed_pages.json):**
   - Contains raw headings (`h1` through `h4`) and clean full-text paragraphs for every page.
3. **Key Numbers & Guarantees to Always Maintain:**
   - Turnaround: `24–48 hours`
   - Discount: `30% OFF initial estimates`
   - Accuracy: `RSMeans zip-code localized pricing`
   - Certifications: `AACE (Cost Engineers) and AIQS (Quantity Surveyors)`
   - Contact US: `(346) 660-2440` | Contact AUS: `0455 843 274`
   - Email: `info@constructestimates.com`

---

## 7. Critical Technical & Design Rules

> [!CAUTION]
> **ABSOLUTE RULE: NEVER USE BOLD FONT**  
> Do not use `font-bold`, `font-extrabold`, or `font-semibold`.
> All headings must be `font-serif font-normal text-foreground`.
> Body text must be `font-sans font-normal text-muted-foreground`.
> Button labels must be `font-medium`.

> [!WARNING]
> **Base UI Button Syntax:**  
> The project uses `@base-ui/react` via `components/ui/button.tsx`.  
> - **DO NOT** use `asChild` (Radix syntax) on `<Button>`. It will throw a TypeScript error.  
> - **DO** use `render={<Link href="..." />}`:
>   ```tsx
>   <Button render={<Link href="#contact" />} size="lg">
>     <span>Upload Plans</span>
>   </Button>
>   ```

> [!WARNING]
> **Base UI Accordion Syntax:**  
> The project uses `@base-ui/react/accordion` via `components/ui/accordion.tsx`.  
> - **DO NOT** pass `type="single"` or `collapsible` (Radix props).  
> - **DO** simply pass `className`:
>   ```tsx
>   <Accordion className="w-full space-y-2.5">
>     <AccordionItem value="item-1">...</AccordionItem>
>   </Accordion>
>   ```

> [!NOTE]
> **Sticky Sidebar CSS Requirements:**  
> In order for `sticky` to work properly in Tailwind v4:
> - The parent grid item must have `self-start` (`<aside className="space-y-6 lg:sticky lg:top-24 self-start">`).
> - No ancestor container should have `overflow: hidden` on the Y-axis.

---

## 8. Directory of the 22 Implemented Service Pages

The following service pages are live and fully pre-rendered:

1. `/concrete-estimating-services` (Division 03 Concrete)
2. `/commercial-estimating-services` (Commercial Buildings)
3. `/residential-estimating-services` (Residential & Custom Homes)
4. `/electrical-estimating-services` (Division 26 Electrical)
5. `/mep-estimating-services` (Mechanical, Electrical, Plumbing)
6. `/masonry-estimating-services` (Division 04 Block, Brick & Stone)
7. `/lumber-takeoff-services` (Division 06 Framing & Lumber)
8. `/metal-estimating-services` (Division 05 Structural & Misc Steel)
9. `/opening-estimating-services` (Division 08 Doors, Windows & Glazing)
10. `/sitework-estimating-services` (Division 31/32 Earthwork & Utilities)
11. `/thermal-moisture-protection-estimating-services` (Division 07 Roofing & Insulation)
12. `/interior-exterior-finishes-estimating-services` (Division 09 Drywall, Paint & Tile)
13. `/industrial-estimating-services` (Industrial Plants & Warehouses)
14. `/cost-estimating-services` (Full Lifecycle Cost Estimation)
15. `/construction-takeoff-services` (Digital Material Takeoff)
16. `/quantity-takeoff-services` (Bill of Quantities / QS)
17. `/preliminary-estimate` (Conceptual & Square-Foot Estimating)
18. `/estimating-consultant` (Strategic Estimating Advisory)
19. `/virtual-bid-management` (Subcontractor & Bid Room Management)
20. `/construction-estimator-sydney` (Sydney NSW Estimating Hub)
21. `/building-estimator-melbourne` (Melbourne VIC Estimating Hub)
22. `/service-areas` (Nationwide USA & Australia Coverage)
