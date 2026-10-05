import { Message, Call } from "reicon-react";
import { WHATSAPP_URL } from "@/lib/contact";
import ContactForm from "@/components/ContactForm";

export default function MinimalContactSection() {

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Connect & Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium block">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight leading-tight">
              Let&apos;s start a conversation.
            </h1>
            <p className="font-sans text-sm text-muted-foreground font-normal leading-relaxed">
              Have questions about your project scope, plans, or estimating requirements? Send us a message or connect directly.
            </p>
          </div>

          {/* Direct Contact Links */}
          <div className="space-y-2.5 pt-2">
            {/* WhatsApp Link - PRIMARY */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border-2 border-[#25D366]/40 dark:border-[#25D366]/40 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-[#25D366] transition-all group shadow-xs"
            >
              <div className="size-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white transition-transform group-hover:scale-105 shrink-0 shadow-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 360 362"
                  className="w-5 h-5 fill-white"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                    WhatsApp (Primary)
                  </span>
                  <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] dark:text-emerald-300 px-2 py-0.5 rounded-full font-medium">
                    Fastest
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors truncate block">
                  +1 (346) 861-2915
                </span>
              </div>
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+13468612915"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-card hover:border-primary/50 transition-colors group shadow-2xs"
            >
              <div className="size-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                <Call size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Direct Phone
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  +1 (346) 861-2915
                </span>
              </div>
            </a>

            {/* Email Link */}
            <a
              href="mailto:Info@buildcraft360.com"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-card hover:border-primary/50 transition-colors group shadow-2xs"
            >
              <div className="size-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                <Message size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Email Us
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  Info@buildcraft360.com
                </span>
              </div>
            </a>

            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/share/1BXiBdy5Bs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-card hover:border-primary/50 transition-colors group shadow-2xs"
            >
              <div className="size-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Facebook
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  Buildcraft360
                </span>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/buildcraft360/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-card hover:border-primary/50 transition-colors group shadow-2xs"
            >
              <div className="size-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  LinkedIn
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  linkedin.com/company/buildcraft360
                </span>
              </div>
            </a>
          </div>

          <div className="pt-2 text-xs text-muted-foreground font-normal flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Response time: usually under 2 hours</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-card shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
