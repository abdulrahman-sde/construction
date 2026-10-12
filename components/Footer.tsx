import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Our Services" },
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
  {
    icon: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" />
      </svg>
    ),
    href: "tel:+13468612915",
    label: "+1 (346) 861-2915",
    external: false,
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.56739 1.25H16.4326C17.3851 1.24999 18.1456 1.24999 18.7599 1.30018C19.3899 1.35165 19.9318 1.45963 20.4295 1.71322C21.2292 2.12068 21.8793 2.77085 22.2868 3.57054C22.5404 4.06824 22.6484 4.61012 22.6998 5.24013C22.75 5.85439 22.75 6.61493 22.75 7.56737V13.4326C22.75 14.3851 22.75 15.1456 22.6998 15.7599C22.6484 16.3899 22.5404 16.9318 22.2868 17.4295C21.8793 18.2291 21.2292 18.8793 20.4295 19.2868C19.9318 19.5404 19.3899 19.6483 18.7599 19.6998C18.1456 19.75 17.3851 19.75 16.4326 19.75H7.32902C6.99209 19.75 6.92607 19.7534 6.86946 19.7649C6.80417 19.7781 6.74093 19.7999 6.6814 19.8298C6.6298 19.8558 6.57573 19.8938 6.31063 20.1018L3.73345 22.1234C3.54621 22.2703 3.36743 22.4106 3.21281 22.5107C3.06282 22.6078 2.81049 22.7541 2.49299 22.7523C2.114 22.7501 1.75643 22.5762 1.52084 22.2793C1.32348 22.0306 1.28281 21.7418 1.26663 21.5639C1.24995 21.3804 1.24997 21.1532 1.25 20.9152L1.25 7.56738C1.25 6.61494 1.24999 5.85439 1.30018 5.24013C1.35165 4.61012 1.45964 4.06824 1.71323 3.57054C2.12069 2.77085 2.77086 2.12068 3.57054 1.71322C4.06824 1.45963 4.61012 1.35165 5.24014 1.30018C5.8544 1.24999 6.61495 1.24999 7.56739 1.25ZM5.36229 2.79519C4.82503 2.83909 4.50253 2.92184 4.25153 3.04973C3.73409 3.31338 3.31339 3.73408 3.04974 4.25153C2.92185 4.50252 2.83909 4.82503 2.7952 5.36228C2.75059 5.90829 2.75 6.60753 2.75 7.59999V20.8857C2.75 20.9219 2.75002 20.9561 2.75006 20.9883C2.77547 20.9684 2.80237 20.9474 2.83086 20.925L5.38483 18.9216C5.3986 18.9108 5.41225 18.9 5.42579 18.8894C5.62717 18.7312 5.80482 18.5916 6.00792 18.4895C6.1865 18.3998 6.37623 18.3343 6.57211 18.2947C6.7949 18.2496 7.02082 18.2498 7.27692 18.25C7.29415 18.25 7.31151 18.25 7.32902 18.25H16.4C17.3925 18.25 18.0917 18.2494 18.6377 18.2048C19.175 18.1609 19.4975 18.0782 19.7485 17.9503C20.2659 17.6866 20.6866 17.2659 20.9503 16.7485C21.0782 16.4975 21.1609 16.175 21.2048 15.6377C21.2494 15.0917 21.25 14.3925 21.25 13.4V7.6C21.25 6.60753 21.2494 5.90829 21.2048 5.36228C21.1609 4.82503 21.0782 4.50252 20.9503 4.25153C20.6866 3.73408 20.2659 3.31338 19.7485 3.04973C19.4975 2.92184 19.175 2.83909 18.6377 2.79519C18.0917 2.75058 17.3925 2.75 16.4 2.75H7.6C6.60754 2.75 5.90829 2.75058 5.36229 2.79519Z"
        />
      </svg>
    ),
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
              <a
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs border border-slate-700 hover:text-white hover:border-slate-600 transition-colors"
                href={INSTAGRAM_URL}
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
