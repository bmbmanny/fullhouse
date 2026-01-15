export const SITE_CONFIG = {
  name: "Full House Moving & Junk Removal",
  shortName: "Full House",
  description:
    "Professional moving and junk removal services you can trust. We handle residential and commercial moves, furniture disposal, and specialty removals with care.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fullhousedelivery.com",
  phone: "(786) 682-4048",
  email: "contact@fullhousedelivery.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST",
    zip: "12345",
  },
  social: {
    facebook: "https://facebook.com/fullhousedelivery",
    instagram: "https://instagram.com/fullhousedeliveryllc",
    twitter: "https://twitter.com/fullhousedelivery",
  },
  hours: {
    weekday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
};

export const SERVICE_TYPES = [
  "Residential Moving",
  "Commercial Moving",
  "Junk Removal",
  "Furniture Disposal",
  "Packing Services",
  "Specialty Moving",
  "Other",
] as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
