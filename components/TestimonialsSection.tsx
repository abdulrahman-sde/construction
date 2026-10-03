import Link from "next/link";
import { Star, ArrowRight, CheckCircle } from "reicon-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  trade: string;
  location: string;
  rating?: number;
}

const row1: Testimonial[] = [
  {
    quote:
      "I have on the project board at this moment over 3 million dollars of projects they estimated for me, including hospitals, restaurants, fitness facilities, and churches. I will not use any other estimation service.",
    initials: "AB",
    name: "Alain Bouchard",
    role: "President",
    trade: "LA Plumbing & A/C",
    location: "San Antonio, TX",
    rating: 5,
  },
  {
    quote:
      "Buildcraft360 is an exceptional asset to our projects. Despite the rush on some projects, the team demonstrated remarkable dedication, successfully meeting deadlines without compromising quality.",
    initials: "AD",
    name: "Allison Dorwart",
    role: "Project Manager",
    trade: "Commercial GC",
    location: "Denver, CO",
    rating: 5,
  },
  {
    quote:
      "They deliver more than they promise and they have well-trained professional staff. Their concrete and framing takeoffs were spot on for our multi-family bids.",
    initials: "JM",
    name: "James Mitchell",
    role: "Managing Principal",
    trade: "James Builders",
    location: "Orlando, FL",
    rating: 5,
  },
  {
    quote:
      "Their earthwork and utility volume takeoff saved us from a costly bidding error on a public works tender. Fast turnaround, verified quantities, and zero hassle.",
    initials: "MV",
    name: "Marcus Vance",
    role: "Civil Contractor",
    trade: "Sitework & Utilities",
    location: "Atlanta, GA",
    rating: 5,
  },
];

const row2: Testimonial[] = [
  {
    quote:
      "These guys were very attentive to my specific, custom needs for estimating and delivered an excellent product in very timely fashion. I'm looking forward to hiring them again!",
    initials: "BA",
    name: "Bill Armstrong",
    role: "Electrical Contractor",
    trade: "Commercial Electric",
    location: "Dallas, TX",
    rating: 5,
  },
  {
    quote:
      "Their Head Estimator took direction well, met the deadline alongside their team, and their skills are strong. Their communication was great throughout our high-stakes bidding cycle.",
    initials: "CV",
    name: "Caryn Viscovi",
    role: "Operations Director",
    trade: "Viscovi Drywall & Finishes",
    location: "San Diego, CA",
    rating: 5,
  },
  {
    quote:
      "The detailed line-item breakdown by trade and localized zip-code labor rates helped us win a $1.8M healthcare expansion project. Flawless Excel markup.",
    initials: "DS",
    name: "David Steinberg",
    role: "Lead Estimator",
    trade: "Metro Mechanical & HVAC",
    location: "New York, NY",
    rating: 5,
  },
  {
    quote:
      "Accurate structural steel tonnage, connection hardware counts, and color-coded markup sheets that made our subcontractor bid alignment completely painless.",
    initials: "RM",
    name: "Robert Martinez",
    role: "Principal Builder",
    trade: "Martinez Steel & Framing",
    location: "Austin, TX",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <span className="text-neutral-400 text-xs font-sans font-medium uppercase tracking-wider block mb-2">
              Verified Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              Hear from Our{" "}
              <span className="font-normal text-neutral-300 italic">
                Satisfied Clients
              </span>
            </h2>
            <p className="font-sans text-slate-400 text-xs sm:text-sm mt-2 max-w-xl font-normal leading-relaxed">
              General contractors, trade specialists, and builders across the United States
              rely on Buildcraft360 for dependable quantity takeoffs and win-ready bids.
            </p>
          </div>
          <Button
            render={<Link href="#contact" />}
            size="default"
            className="bg-white text-neutral-950 hover:bg-neutral-100 gap-2 shrink-0 font-medium"
          >
            <span>Get a Quote</span>
            <ArrowRight size={13} />
          </Button>
        </div>
      </div>

      {/* Marquee Container with Subtle Edge Fades */}
      <div className="relative overflow-hidden w-full space-y-5">
        {/* Left & Right Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-20" />

        {/* Row 1: Scrolling Left */}
        <div className="flex animate-marquee py-1.5 hover:[animation-play-state:paused]">
          {row1.concat(row1).map((t, idx) => (
            <TestimonialCard key={`row1-${t.name}-${idx}`} {...t} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex animate-marquee-reverse py-1.5 hover:[animation-play-state:paused]">
          {row2.concat(row2).map((t, idx) => (
            <TestimonialCard key={`row2-${t.name}-${idx}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  initials,
  name,
  role,
  trade,
  location,
}: Testimonial) {
  return (
    <div className="w-[330px] sm:w-[380px] shrink-0 mr-5 sm:mr-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm">
      <div className="space-y-3">
        {/* Rating & Trade Tag */}
        <div className="flex items-center justify-between">
          <div className="flex text-amber-400 gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} weight="Filled" />
            ))}
          </div>
          <span className="text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/80">
            {trade}
          </span>
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-sans font-normal">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Row */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-200 border border-neutral-700 flex items-center justify-center font-sans font-medium text-xs shadow-2xs">
            {initials}
          </div>
          <div>
            <h4 className="text-xs font-medium text-white leading-tight">{name}</h4>
            <span className="text-[11px] text-neutral-400 font-normal">
              {role} &bull; {location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-sans">
          <CheckCircle size={12} weight="Filled" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
}
