export const business = {
  name: "Herrera's Construction",
  tagline: "Built to Protect. Made to Last.",
  phoneDisplay: "(915) 240-7507",
  phoneHref: "tel:+19152407507",
  email: "mherrerasconstruction@gmail.com",
  addressLine1: "1015 Wagon Mound Dr.",
  addressLine2: "Chaparral, NM 88081",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=1015+Wagon+Mound+Dr+Chaparral+NM+88081",
  serviceArea: "The El Paso and Las Cruces Region",
  hours: [
    { days: "Monday - Saturday", time: "6:00 AM - 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/herrerasconstruction/",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const featuredServices = [
  {
    number: "01",
    title: "Roof Repair",
    copy: "Targeted repairs for leaks, damaged shingles, flashing problems, and other visible roofing issues.",
    items: ["Leak detection", "Flashing repair", "Emergency roof repair"],
  },
  {
    number: "02",
    title: "Roof Replacement",
    copy: "Complete replacement options for aging or heavily damaged residential and commercial roofing systems.",
    items: ["Shingle roofing", "Metal roofing", "Tile and flat roofing"],
  },
  {
    number: "03",
    title: "Storm Damage",
    copy: "Roof inspections and repair recommendations for hail, high winds, heavy rain, and severe weather damage.",
    items: [
      "Hail damage repair",
      "Storm damage repair",
      "Insurance claim assistance",
    ],
  },
];

export const serviceGroups = [
  {
    title: "Core Roofing",
    services: [
      "Roof Repair",
      "Roof Replacement",
      "New Roof Installation",
      "Roof Inspections",
      "Leak Detection & Repair",
      "Roof Maintenance",
      "Emergency Roof Repair",
    ],
  },
  {
    title: "Roofing Systems",
    services: [
      "Shingle Roofing",
      "Metal Roofing",
      "Flat Roofing",
      "Tile Roofing",
      "Roof Ventilation",
      "Flashing Repair",
      "Skylight Installation & Repair",
    ],
  },
  {
    title: "Property & Weather",
    services: [
      "Storm Damage Repair",
      "Hail Damage Repair",
      "Gutter Installation & Repair",
      "Commercial Roofing",
      "Residential Roofing",
      "Insurance Claim Assistance",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Call",
    copy: "Tell us what you are seeing and what type of roofing help you need.",
  },
  {
    number: "02",
    title: "Inspect",
    copy: "We can inspect the roof and identify visible damage or problem areas.",
  },
  {
    number: "03",
    title: "Recommend",
    copy: "You receive an estimate for the roofing work recommended for the property.",
  },
];

export const galleryItems = [
  {
    title: "Tile Roofing Work",
    category: "Residential Roofing",
    alt: "Roofers working on a residential tile roof",
    url: new URL("../assets/images/gallery-01-tile-roof.webp", import.meta.url)
      .href,
  },
  {
    title: "Shingle Roof Installation",
    category: "Residential Roofing",
    alt: "Herrera's Construction crew installing dark shingles on a residential roof",
    url: new URL(
      "../assets/images/gallery-02-shingle-roof.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Flat Roofing Work",
    category: "Roofing",
    alt: "Roofers working across a large light-colored flat roof",
    url: new URL("../assets/images/gallery-06-flat-roof.webp", import.meta.url)
      .href,
  },
  {
    title: "Roof Replacement Preparation",
    category: "Residential Roofing",
    alt: "Residential roof with shingles removed and roof deck exposed during roofing work",
    url: new URL("../assets/images/gallery-08-roof-deck.webp", import.meta.url)
      .href,
  },
  {
    title: "Roofing Material Delivery",
    category: "Roofing",
    alt: "Roofing crew using a green material lift at a residential property",
    url: new URL(
      "../assets/images/gallery-07-material-lift.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Residential Exterior Work",
    category: "Construction",
    alt: "Construction equipment and roofing materials at a residential exterior project",
    url: new URL(
      "../assets/images/gallery-09-exterior-work.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Roofing & Construction Work",
    category: "Construction",
    alt: "Crew working on the roof and exterior structure of a home",
    url: new URL(
      "../assets/images/gallery-04-roofing-construction.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Exterior Addition Work",
    category: "Construction",
    alt: "Exterior wall addition under construction at a residential property",
    url: new URL(
      "../assets/images/gallery-10-addition-work.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Concrete Work",
    category: "Construction",
    alt: "Fresh concrete being finished alongside a residential building",
    url: new URL(
      "../assets/images/gallery-03-concrete-work.webp",
      import.meta.url
    ).href,
  },
  {
    title: "Commercial Job Site",
    category: "Commercial Construction",
    alt: "Herrera's Construction trailer parked outside a commercial property job site",
    url: new URL(
      "../assets/images/gallery-05-commercial-site.webp",
      import.meta.url
    ).href,
  },
];

export const testimonials = [
  {
    name: "Ed Flores",
    review:
      "Miguel Herrera Construction perform excellent work and top quality service. I highly recommend them as their personnel are professionals and give you a finish product that won't need constant repair. Honest and proficient.",
    url: "https://www.google.com/maps/contrib/111143597288696546011/reviews?hl=en",
  },
  {
    name: "Eldahi Chavez",
    review:
      "Had been looking for a roofing company for a while now till I found Herrera’s constructions! Cant be more pleased with their extradionary work! Super fast and very professional! Thank you for such an amazing job.",
    url: "https://www.google.com/maps/contrib/102882433604083631408/reviews?hl=en",
  },
];

export const faqs = [
  {
    question: "How do I know if my roof needs to be repaired or replaced?",
    answer:
      "Signs such as missing or damaged shingles, leaks, water stains, sagging areas, or an aging roof may indicate that repairs or replacement are needed. A professional inspection can help determine the best option.",
  },
  {
    question: "Do you offer free roof inspections or estimates?",
    answer:
      "Yes, we can inspect your roof, identify any visible damage or problem areas, and provide an estimate for the recommended roofing work.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements can be completed within a few days, depending on the size of the roof, the materials being used, and weather conditions.",
  },
  {
    question: "Do you handle storm and hail damage?",
    answer:
      "Yes. We can inspect your roof for damage caused by hail, strong winds, heavy rain, and other severe weather and recommend the repairs needed to protect your property.",
  },
  {
    question: "Do you work on both residential and commercial roofs?",
    answer:
      "Yes. We provide roofing services for both residential and commercial properties, including repairs, replacements, maintenance, and new roof installations.",
  },
];
