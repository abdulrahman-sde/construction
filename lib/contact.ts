/**
 * Centralized Contact & Company Configuration
 * Single source of truth for phone, WhatsApp, email, and location.
 */

export const CONTACT_INFO = {
  companyName: "Buildcraft360 LLC",
  phone: "(346) 861-2915",
  phoneRaw: "+13468612915",
  whatsappNumber: "13468612915",
  whatsappDisplay: "+1 (346) 861-2915",
  whatsappUrl:
    "https://wa.me/13468612915?text=Hello%20Buildcraft360%2C%20I%20would%20like%20to%20get%20an%20estimate.",
  email: "Info@buildcraft360.com",
  address: "30 N Gould St #4453, Sheridan, WY 82801, United States",
  facebookUrl: "https://www.facebook.com/share/1BXiBdy5Bs/",
  linkedinUrl: "https://www.linkedin.com/company/buildcraft360/",
  instagramUrl:
    "https://www.instagram.com/build.craft360?utm_source=qr&mdxt=MXV3cTcwdmg3NGl2dA==",
  instagramHandle: "@build.craft360",
} as const;

export const WEB3FORMS_ACCESS_KEY = "43a6bde4-2e4e-40a4-85b5-2575bfd9e326";

export const WHATSAPP_URL = CONTACT_INFO.whatsappUrl;
export const INSTAGRAM_URL = CONTACT_INFO.instagramUrl;
