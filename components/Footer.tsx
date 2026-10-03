import Link from "next/link";
import Image from "next/image";
import { Call, Message } from "reicon-react";

const quickLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#projects", label: "Portfolio Projects" },
  { href: "/our-blogs", label: "Blog & Articles" },
  { href: "#", label: "Privacy Policy" },
];

const locations = [
  {
    address: "2000 Taylor St, Houston, TX 77007, United States",
    icon: "/assets/icons/usa-flag.svg",
    alt: "USA",
  },
  {
    address: "118 Royal Terrace, Craigieburn VIC 3064, Australia",
    icon: "/assets/icons/australia-flag.svg",
    alt: "Australia",
  },
  {
    address: "2 Simcoe St S #300, Oshawa, ON L1H 8C1, Canada",
    icon: "/assets/icons/canada-leaf.svg",
    alt: "Canada",
  },
];

const contacts = [
  { icon: <Call size={14} />, href: "tel:+13466602440", label: "USA: (346) 660-2440" },
  { icon: <Call size={14} />, href: "tel:0455843274", label: "AUS: 0455 843 274" },
  { icon: <Call size={14} />, href: "tel:5876743826", label: "CAN: (587) 674 3826" },
  {
    icon: <Message size={14} />,
    href: "mailto:Info@buildcraft360.com",
    label: "Info@buildcraft360.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link className="flex items-center gap-2.5 group" href="/">
              <Image
                src="/assets/logos/buildcraft360-horizontal-white.png"
                alt="Buildcraft360"
                width={155}
                height={27}
                className="h-[27px] w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Buildcraft360 is your trusted partner for professional construction estimating,
              planning, and architectural services, assisting contractors, developers, and architects nationwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs border border-slate-700 hover:text-white hover:border-slate-600 transition-colors"
                href="https://www.linkedin.com/company/buildcraft360/"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Our Locations
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-normal">
              {locations.map((loc) => (
                <li key={loc.address} className="flex items-start gap-2.5">
                  <Image
                    src={loc.icon}
                    alt={loc.alt}
                    width={18}
                    height={18}
                    className="w-4 h-4 mt-0.5 flex-shrink-0 object-contain"
                  />
                  <span>{loc.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Contact Direct
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a className="flex items-center gap-2" href={c.href}>
                    <span className="text-primary">{c.icon}</span>
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-normal">
          <p>&copy; 2026 Buildcraft360. All rights reserved.</p>
          <div className="flex gap-6 text-[11px]">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
