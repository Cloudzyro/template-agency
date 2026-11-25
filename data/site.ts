// Studio details, menu and footer. Edit this file to make the site yours.

export const site = {
  name: "Plumbline",
  legalName: "Plumbline Studio LLC",
  tagline: "Brand and product design studio in Pittsburgh",
  description:
    "Plumbline is a brand and product design studio in Pittsburgh. We design identities, packaging, wayfinding and digital products for regional businesses and public organizations.",
  // Used for the sitemap, canonical links and social previews.
  // Set NEXT_PUBLIC_SITE_URL in your environment, or change the fallback.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
  email: "hello@plumbline.example",
  phone: "(412) 555-0148",
  address: {
    street: "2101 Smallman Street, Floor 3",
    city: "Pittsburgh",
    region: "PA",
    postal: "15222",
  },
  hours: "Monday to Friday, 9 am to 6 pm Eastern",
  nav: [
    { label: "Work", href: "/work/" },
    { label: "Services", href: "/services/" },
    { label: "Studio", href: "/studio/" },
  ],
  cta: { label: "Start a project", href: "/contact/" },
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],
};

export const home = {
  headline: "Identities, packaging and apps that hold up in the real world",
  intro:
    "Plumbline is a studio of eleven designers and engineers in Pittsburgh. We work with regional businesses and public organizations on the things people hold, read on a wall and use every day.",
  primary: { label: "See the work", href: "/work/" },
  secondary: { label: "How we work", href: "/services/#process" },
  // The project shown next to the headline (a slug from data/work.ts).
  heroProject: "kettle-bay-ferries",
  selectedTitle: "Selected work",
  servicesTitle: "What we do",
  processTitle: "How a project runs",
  clientsTitle: "Clients since 2014",
  teamTitle: "The studio",
  teamText:
    "Designers, writers and engineers who sit at one long table. The people who pitch your project are the people who make it.",
  contactTitle: "Tell us what you're making",
  contactText:
    "Send a short brief and we'll reply within two business days with questions, a rough timeline and who would work on it.",
};

// Options on the project brief form (contact page).
export const brief = {
  title: "Tell us about your project",
  intro:
    "A few lines is enough. We read every brief ourselves and reply within two business days with questions, a rough timeline and who would work on it.",
  services: ["Brand identity", "Packaging", "Wayfinding and signs", "Product design", "Website", "Not sure yet"],
  budgets: ["Under $25,000", "$25,000 to $60,000", "$60,000 to $120,000", "Over $120,000", "Not sure yet"],
  timelines: ["As soon as possible", "In the next 3 months", "In 3 to 6 months", "Later this year or next", "No fixed date"],
  sent: "Thank you. Your brief is with us, and we'll reply within two business days.",
};
