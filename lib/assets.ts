/**
 * Construct Estimates - Scraped Landing Page Assets Registry
 * Organized assets directly extracted from https://constructestimates.com/
 */

export const siteAssets = {
  logos: {
    main: "/assets/logos/logo.svg",
    alt: "/assets/logos/logo-alt.svg",
    white: "/assets/logos/logo-white.svg",
    dezign: "/assets/logos/dezign-logo.svg",
    dynamicBuild: "/assets/logos/dynamic-build-logo.png",
    carrera: "/assets/logos/carrera-logo.gif",
    partnerDownload11: "/assets/logos/partner-download-11.png",
    partnerNew2: "/assets/logos/partner-new-2.png",
  },
  services: {
    costEstimating: "/assets/icons/cost-estimating.svg",
    materialTakeoff: "/assets/icons/material-takeoff.svg",
    residentialEstimating: "/assets/icons/residential-estimating.svg",
    commercialEstimating: "/assets/icons/commercial-estimating.svg",
    industrialEstimating: "/assets/icons/industrial-estimating.svg",
    preliminaryEstimates: "/assets/icons/preliminary-estimates.svg",
  },
  trades: {
    concrete: "/assets/trades/concrete.svg",
    sitework: "/assets/trades/sitework.svg",
    interior: "/assets/trades/interior.svg",
    masonry: "/assets/trades/masonry.svg",
    mep: "/assets/trades/mep.svg",
    metal: "/assets/trades/metal.svg",
    opening: "/assets/trades/opening.svg",
    thermal: "/assets/trades/thermal.svg",
    lumber: "/assets/trades/lumber.svg",
  },
  badges: {
    noHassle: "/assets/badges/no-hassle.png",
    accurateResult: "/assets/badges/accurate-result.png",
    support247: "/assets/badges/support-24-7.png",
  },
  steps: {
    step1Submit: "/assets/steps/step-1-submit.png",
    step2Review: "/assets/steps/step-2-review.png",
    stepArrow: "/assets/steps/step-arrow.svg",
  },
  shapes: {
    component30: "/assets/shapes/component-30.svg",
    ellipse801: "/assets/shapes/ellipse-801.svg",
    group237707: "/assets/shapes/group-237707.svg",
    lineAccent: "/assets/shapes/line-accent.png",
  },
  icons: {
    phone: "/assets/icons/phone.svg",
    email: "/assets/icons/email.svg",
    instagram: "/assets/icons/instagram.svg",
    facebook: "/assets/icons/facebook.svg",
    linkedin: "/assets/icons/linkedin.svg",
    checkCircle: "/assets/icons/check-circle.svg",
    ctaArrow: "/assets/icons/cta-arrow.svg",
    play: "/assets/icons/play.svg",
    carouselPrev: "/assets/icons/carousel-prev.svg",
    carouselNext: "/assets/icons/carousel-next.svg",
    chevronDown: "/assets/icons/chevron-down.svg",
    chevronUp: "/assets/icons/chevron-up.svg",
    usaFlag: "/assets/icons/usa-flag.svg",
    australiaFlag: "/assets/icons/australia-flag.svg",
    canadaLeaf: "/assets/icons/canada-leaf.svg",
  },
} as const;

export type SiteAssets = typeof siteAssets;
