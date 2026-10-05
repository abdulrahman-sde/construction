import Link from "next/link";
import Image from "next/image";
import { Call, Message } from "reicon-react";
import { WHATSAPP_URL } from "@/lib/contact";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/cost-estimating-services", label: "Our Services" },
  { href: "/our-projects", label: "Portfolio Projects" },
  { href: "/our-pricing", label: "Pricing & Packages" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const locations = [
  {
    address: "30 N Gould St #4453, Sheridan, WY 82801, United States",
    icon: "/assets/icons/usa-flag.svg",
    alt: "USA",
  },
];

const contacts = [
  {
    icon: (
      <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 360 362">
        <path
          fill="#25D366"
          fillRule="evenodd"
          d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: WHATSAPP_URL,
    label: "WhatsApp Chat (Direct)",
    external: true,
  },
  { icon: <Call size={14} />, href: "tel:+13468612915", label: "+1 (346) 861-2915", external: false },
  {
    icon: <Message size={14} />,
    href: "mailto:Info@buildcraft360.com",
    label: "Info@buildcraft360.com",
    external: false,
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
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-800 text-[#25D366] flex items-center justify-center text-xs border border-slate-700 hover:text-white hover:border-[#25D366] transition-colors"
                href={WHATSAPP_URL}
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 360 362">
                  <path
                    fillRule="evenodd"
                    d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs border border-slate-700 hover:text-white hover:border-slate-600 transition-colors"
                href="https://www.facebook.com/share/1BXiBdy5Bs/"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
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
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Our Location
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
                  <a
                    className="flex items-center gap-2 hover:text-white transition-colors"
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
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
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
