// Case studies. Every client here is fictional. Replace them with your own.
// `art` picks the drawing in components/WorkArt.tsx and its colors.
// Results are sample figures for the template; change them to your real ones.

export type ArtKind = "sign" | "package" | "app" | "poster" | "book" | "web";

export type Project = {
  slug: string;
  client: string;
  title: string;
  year: number;
  sector: string;
  location: string;
  duration: string;
  disciplines: string[];
  summary: string;
  art: { kind: ArtKind; ground: string; ink: string; mark: string; paper: string };
  challenge: string[];
  approach: { intro: string; steps: { title: string; text: string }[] };
  deliverables: string[];
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
  credits: { role: string; names: string }[];
};

export const projects: Project[] = [
  {
    slug: "kettle-bay-ferries",
    client: "Kettle Bay Ferries",
    title: "Signs a commuter can read from a moving deck",
    year: 2026,
    sector: "Public transit",
    location: "Erie, Pennsylvania",
    duration: "14 months",
    disciplines: ["Identity", "Wayfinding", "Signage"],
    summary:
      "A new identity and wayfinding system for a three-terminal ferry service, built around a numbered route grid that works in fog, glare and two languages.",
    art: { kind: "sign", ground: "#123c4a", ink: "#f2efe6", mark: "#f2b33d", paper: "#d9e4e2" },
    challenge: [
      "Kettle Bay runs six boats between three terminals. Riders were boarding the wrong boat at the shared dock in Harborcreek, and the old signs, a mix of four eras of lettering, were hard to read in winter fog.",
      "The authority also needed a mark that could sit on a hull, a ticket and a phone screen without three separate versions.",
    ],
    approach: {
      intro:
        "We spent the first month riding the routes at different times of day with a light meter and a notebook, then tested every sign at full size on the dock.",
      steps: [
        { title: "Route numbers first", text: "Each crossing got a number and a color, so the sign, the ticket and the app all say the same short thing: Route 2, Presque Isle." },
        { title: "A wide, open letter", text: "We drew a set of numerals with open counters that stay legible at 60 meters in low light, and paired them with an existing grotesque for text." },
        { title: "Built with the fabricator", text: "Panels were specified for enamel on steel, with a template the authority's own shop now uses to make new signs." },
      ],
    },
    deliverables: ["Identity and route system", "Custom numerals", "Dock and terminal signs", "Hull livery", "Ticket and app style guide"],
    results: [
      { value: "38%", label: "fewer boarding questions at the shared dock in the first season" },
      { value: "112", label: "sign panels made in-house from the template" },
      { value: "3", label: "terminals opened under the new system" },
    ],
    quote: {
      text: "Our deck crew stopped pointing. People just read the post and walk to the right gate.",
      name: "Renata Ollis",
      role: "Operations director, Kettle Bay Ferries",
    },
    credits: [
      { role: "Creative direction", names: "Tomás Aguirre" },
      { role: "Type and signage", names: "June Park, Wes Hollander" },
      { role: "Fabrication partner", names: "Lakeside Enamel Works" },
    ],
  },
  {
    slug: "halden-coffee",
    client: "Halden Coffee Roasters",
    title: "A bag that tells you how the coffee tastes before you open it",
    year: 2026,
    sector: "Food and drink",
    location: "Pittsburgh, Pennsylvania",
    duration: "5 months",
    disciplines: ["Packaging", "Identity"],
    summary:
      "Packaging for a small-batch roaster moving into grocery stores, with a taste scale printed on every bag so shoppers can pick without a barista.",
    art: { kind: "package", ground: "#e8d9c4", ink: "#2b1d14", mark: "#b8462e", paper: "#f6efe3" },
    challenge: [
      "Halden sold almost everything over the counter, where staff explained each coffee. Moving into forty grocery stores meant the bag had to do that talking on its own.",
      "Origins change every season, so the design also had to take a new coffee in a week, without a designer.",
    ],
    approach: {
      intro: "We sat at the cafe counter for two weekends and wrote down every question people asked about a coffee.",
      steps: [
        { title: "One scale, five words", text: "Most questions came down to bright or deep, so each bag has a printed scale from bright to deep with a single mark." },
        { title: "A system, not a set", text: "Bags are one kraft stock with a colored band per origin and a label the roaster prints in house on a standard thermal printer." },
        { title: "Shelf tested", text: "We mocked up a full grocery shelf in the studio and swapped bags in and out until Halden read from three meters away." },
      ],
    },
    deliverables: ["Bag system and label template", "Taste scale", "Shelf talkers", "Wholesale price list"],
    results: [
      { value: "40", label: "grocery stores stocking the range within six months" },
      { value: "1 week", label: "to bring a new origin to shelf, down from six" },
      { value: "2x", label: "retail orders compared with the year before" },
    ],
    quote: {
      text: "The bag answers the question I used to answer forty times a Saturday.",
      name: "Mara Halden",
      role: "Founder, Halden Coffee Roasters",
    },
    credits: [
      { role: "Design lead", names: "Priya Natarajan" },
      { role: "Illustration", names: "Owen Mbeki" },
      { role: "Print production", names: "Dana Kowalczyk" },
    ],
  },
  {
    slug: "tidewell-clinics",
    client: "Tidewell Community Clinics",
    title: "Booking a clinic visit in under a minute, on any phone",
    year: 2025,
    sector: "Healthcare",
    location: "Ohio and West Virginia",
    duration: "9 months",
    disciplines: ["Product design", "Engineering", "Accessibility"],
    summary:
      "A booking app for a network of nine community clinics, designed with patients on older phones and slow connections in mind.",
    art: { kind: "app", ground: "#dfe8e1", ink: "#13261d", mark: "#2f7a54", paper: "#ffffff" },
    challenge: [
      "Most Tidewell patients booked by phone, and hold times reached forty minutes on Monday mornings. An earlier app had been abandoned because it was slow on the phones patients actually own.",
      "The new one needed to work in English and Spanish, with screen readers, on a five-year-old phone with one bar of signal.",
    ],
    approach: {
      intro: "We recruited twenty-four patients through the clinics' front desks and tested on their own phones from the second week.",
      steps: [
        { title: "Three screens to a booking", text: "Pick a reason, pick a time, confirm. Everything else, from insurance to forms, moved after the booking." },
        { title: "Built light", text: "Our engineers kept each screen under 100 KB, so it loads on a weak connection, and it works as a website before anyone installs anything." },
        { title: "Front desk included", text: "Staff got a simple view of the same schedule, so phone and app bookings never collide." },
      ],
    },
    deliverables: ["Patient booking app", "Front desk schedule view", "Design system", "Accessibility audit and fixes"],
    results: [
      { value: "52 sec", label: "median time to book a visit" },
      { value: "61%", label: "of bookings made in the app after a year" },
      { value: "AA", label: "WCAG 2.2 conformance, checked by an outside auditor" },
    ],
    credits: [
      { role: "Product lead", names: "Lena Brandt" },
      { role: "Design", names: "Priya Natarajan, Ade Okafor" },
      { role: "Engineering", names: "Sam Whitlow, Ines Ferreira" },
    ],
  },
  {
    slug: "fernhill-music-hall",
    client: "Fernhill Music Hall",
    title: "A season of posters set from one grid",
    year: 2025,
    sector: "Arts and culture",
    location: "Pittsburgh, Pennsylvania",
    duration: "Ongoing since 2023",
    disciplines: ["Identity", "Print", "Motion"],
    summary:
      "An identity for a 900-seat hall, built as a poster grid the hall's own team fills in for sixty shows a season.",
    art: { kind: "poster", ground: "#f0e4cf", ink: "#1c1a17", mark: "#d6452b", paper: "#f7f1e6" },
    challenge: [
      "Fernhill books everything from string quartets to punk nights, and each show used to get its own one-off poster. The hall was spending more on design than on some of the acts.",
    ],
    approach: {
      intro: "We designed the grid first and the logo last.",
      steps: [
        { title: "One grid, many voices", text: "A twelve-column poster grid with fixed places for date, act and price lets each show feel different while the street still knows it's a Fernhill night." },
        { title: "Templates they own", text: "The hall's marketing coordinator builds posters, screens and social cards from the same files in under an hour." },
        { title: "Motion for the marquee", text: "The grid animates on the LED marquee outside, one line at a time." },
      ],
    },
    deliverables: ["Identity and poster grid", "Poster and social templates", "Marquee motion", "Season brochure"],
    results: [
      { value: "60", label: "show posters a season made in house" },
      { value: "70%", label: "lower design spend per show" },
      { value: "4", label: "seasons running on the same grid" },
    ],
    quote: {
      text: "We stopped briefing posters and started making them. It still looks like us every time.",
      name: "Calvin Reyes",
      role: "Programming director, Fernhill Music Hall",
    },
    credits: [
      { role: "Creative direction", names: "Tomás Aguirre" },
      { role: "Design", names: "June Park" },
      { role: "Motion", names: "Owen Mbeki" },
    ],
  },
  {
    slug: "quarry-lane-books",
    client: "Quarry Lane Books",
    title: "An independent bookshop that looks like it reads",
    year: 2024,
    sector: "Retail",
    location: "Morgantown, West Virginia",
    duration: "4 months",
    disciplines: ["Identity", "Print", "Retail"],
    summary:
      "A name refresh, identity and shop signage for a second-generation bookshop, with a house series of staff-pick bookmarks.",
    art: { kind: "book", ground: "#2e3a2c", ink: "#f3ecdc", mark: "#e3b04b", paper: "#f3ecdc" },
    challenge: [
      "Quarry Lane had outgrown its first logo, drawn by the founder in 1989. The new owners wanted something that felt like the same shop to regulars and new to the college town around it.",
    ],
    approach: {
      intro: "We kept the founder's drawing of the quarry steps and rebuilt everything around it.",
      steps: [
        { title: "Redraw, don't replace", text: "The steps became a simple mark that works stamped on a paper bag or cut in vinyl on the window." },
        { title: "Staff picks in print", text: "A bookmark series lets each bookseller recommend a book in their own handwriting, printed on the shop's risograph." },
      ],
    },
    deliverables: ["Mark and wordmark", "Window and shelf signs", "Bags, stamps and bookmarks", "Event posters"],
    results: [
      { value: "3,400", label: "staff-pick bookmarks handed out in the first year" },
      { value: "1", label: "afternoon to train staff on the templates" },
    ],
    credits: [
      { role: "Design lead", names: "Dana Kowalczyk" },
      { role: "Lettering", names: "Wes Hollander" },
    ],
  },
  {
    slug: "brightwater-credit-union",
    client: "Brightwater Credit Union",
    title: "A bank website written for members, not for banks",
    year: 2024,
    sector: "Financial services",
    location: "Western Pennsylvania",
    duration: "7 months",
    disciplines: ["Website", "Content design", "Engineering"],
    summary:
      "A rewritten and rebuilt website for a member-owned credit union, with plain rates tables and every form reachable in two clicks.",
    art: { kind: "web", ground: "#e6e9ef", ink: "#14213d", mark: "#c2410c", paper: "#ffffff" },
    challenge: [
      "Brightwater's site had grown to 640 pages, and members called the branches to ask what a page meant. Rates sat in PDFs that were weeks out of date.",
    ],
    approach: {
      intro: "We started with the call logs, not the sitemap.",
      steps: [
        { title: "Write it plainly", text: "Our writers cut the site to 120 pages and rewrote every one at an eighth-grade reading level, checked with members in the branches." },
        { title: "Rates from one source", text: "Rates now come from the core banking system into a single table, so the website, branch screens and statements always agree." },
      ],
    },
    deliverables: ["Content strategy and rewrite", "Website design and build", "Rates service", "Editor training"],
    results: [
      { value: "640 to 120", label: "pages after the rewrite" },
      { value: "27%", label: "fewer branch calls about the website" },
    ],
    credits: [
      { role: "Content lead", names: "Marguerite Doyle" },
      { role: "Design", names: "Ade Okafor" },
      { role: "Engineering", names: "Sam Whitlow" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
