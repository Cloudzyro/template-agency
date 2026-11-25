// Services, process, team and clients. All people and clients are fictional.

export const services = [
  {
    slug: "identity",
    name: "Brand identity",
    summary: "Names, marks, type and color for organizations that need to be recognized on a shelf, a street or a screen.",
    includes: ["Research and positioning", "Naming", "Logo and wordmark", "Type and color system", "Brand guidelines your team can use"],
  },
  {
    slug: "packaging",
    name: "Packaging",
    summary: "Packaging systems that survive real shelves, real printers and a range that changes every season.",
    includes: ["Structure and materials", "Label and bag systems", "Print production", "Shelf testing"],
  },
  {
    slug: "wayfinding",
    name: "Wayfinding and signs",
    summary: "Sign systems for transit, campuses and public buildings, specified with the people who will fabricate them.",
    includes: ["Site surveys", "Sign families and placement plans", "Custom lettering", "Fabrication drawings"],
  },
  {
    slug: "product",
    name: "Product design",
    summary: "Apps and web tools designed with the people who will use them, tested on their own devices from the first weeks.",
    includes: ["User research", "Interaction and visual design", "Design systems", "Accessibility reviews"],
  },
  {
    slug: "engineering",
    name: "Websites and engineering",
    summary: "Fast, accessible websites and front ends that our designers and engineers build together, handed over with training.",
    includes: ["Content design and writing", "Front-end engineering", "CMS setup", "Editor training and support"],
  },
];

export const process = [
  {
    name: "Listen",
    weeks: "Weeks 1 to 3",
    text: "We spend time where the work will live: at the counter, on the dock, in the waiting room. You get a short written brief back, and we agree on what success looks like.",
  },
  {
    name: "Sketch",
    weeks: "Weeks 3 to 6",
    text: "Two or three directions, shown at real size and in real places, never as a slide of logos on gray. We pick one together.",
  },
  {
    name: "Make",
    weeks: "Weeks 6 to 16",
    text: "The chosen direction becomes the full system. You see work every week, and we test it with the people who will use it.",
  },
  {
    name: "Hand over",
    weeks: "The last weeks",
    text: "Files, templates, guidelines and training, so your team can keep making things without us. We check in at three and twelve months.",
  },
];

export const engagement = [
  { name: "Projects", text: "Fixed scope and price, usually 3 to 9 months. Most of our work starts here." },
  { name: "Retainers", text: "A set number of studio days each month for organizations that ship new things often." },
  { name: "Workshops", text: "A one or two day session to sort out a naming, positioning or product question with your team." },
];

export const team = [
  { name: "Tomás Aguirre", role: "Founder and creative director", since: 2014 },
  { name: "Lena Brandt", role: "Partner, product", since: 2016 },
  { name: "Priya Natarajan", role: "Design lead", since: 2017 },
  { name: "Sam Whitlow", role: "Engineering lead", since: 2018 },
  { name: "June Park", role: "Senior designer, type and signs", since: 2019 },
  { name: "Marguerite Doyle", role: "Content lead", since: 2019 },
  { name: "Dana Kowalczyk", role: "Designer, print production", since: 2020 },
  { name: "Ade Okafor", role: "Product designer", since: 2021 },
  { name: "Owen Mbeki", role: "Illustrator and motion designer", since: 2021 },
  { name: "Wes Hollander", role: "Lettering and identity", since: 2022 },
  { name: "Ines Ferreira", role: "Front-end engineer", since: 2024 },
];

export const values = [
  { title: "Real size, real place", text: "We judge work where it will be used. A sign is checked on the dock, a bag on a shelf, an app on an old phone." },
  { title: "Your team keeps it", text: "Every project ends with templates and training, so the work keeps going after we leave." },
  { title: "The people you meet make it", text: "No hand-offs to a junior team after the pitch. The people in the first meeting are the people doing the work." },
];

// Fictional clients. Sector is shown next to each name on the Studio page.
export const clients = [
  { name: "Kettle Bay Ferries", sector: "Transit" },
  { name: "Halden Coffee Roasters", sector: "Food and drink" },
  { name: "Tidewell Community Clinics", sector: "Healthcare" },
  { name: "Fernhill Music Hall", sector: "Arts" },
  { name: "Quarry Lane Books", sector: "Retail" },
  { name: "Brightwater Credit Union", sector: "Finance" },
  { name: "Allegheny Riverlands Trust", sector: "Nonprofit" },
  { name: "Northside Tool Library", sector: "Community" },
  { name: "Carrow Glassworks", sector: "Manufacturing" },
  { name: "Monongah Valley Schools", sector: "Education" },
  { name: "Pellston Orchards", sector: "Food and drink" },
  { name: "Three Rivers Rowing Club", sector: "Sport" },
];

export const studioPage = {
  title: "A studio of eleven at one long table",
  intro:
    "Plumbline started in 2014 in a borrowed corner of a print shop in the Strip District. Today we're eleven designers, writers and engineers on the third floor of the same building, still close enough to hear the presses.",
};
