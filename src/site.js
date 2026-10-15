import { Bath, ClipboardCheck, Clock, Droplet, Droplets, Facebook, Flame, Hammer, HardHat, Heater, House, Leaf, MapPin, Search, ShieldCheck, ShowerHead, Star, Thermometer, Truck, Waves, Wrench, Youtube, Wind } from "lucide-react";

const COMPANY = "Canyon Plumbing & Heating";
const MAPS_QUERY = "Canyon Plumbing & Heating, 4700 Sterling Dr Suite G, Boulder, CO 80301";

export default {
  COMPANY,
  ABBR: "cph",
  NOUN: "company",
  PHONE: "7204806228",
  PHONE_DISPLAY: "(720) 480-6228",
  EMAIL: "service@canyonplumbers.com",
  ADDRESS: "4700 Sterling Dr, Suite G",
  CITY: "Boulder, CO 80301",
  MAPS_QUERY,
  FOUNDED: null,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing on 2026-10-14; confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 271 },
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: { name: "Canyon", sub: "PLUMBING & HEATING · BOULDER", icon: Droplet },
  ANNOUNCE: "Boulder's plumbing and boiler specialists · $50 off your first service",

  HOURS: [
    ["Monday – Friday", "8:00 am – 4:00 pm"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 8:00 am – 4:00 pm",

  HERO: {
    eyebrow: "BOULDER COUNTY & THE NORTHWEST METRO",
    title: ["Boulder's plumbing ", "and boiler specialists."],
    text: "Licensed plumbers who show up on time, explain the price before they start, and leave your home cleaner than they found it. Water heaters, drains, boilers, radiant heat and everything in between.",
    cta: "Book Service Online",
    card: [
      { icon: Clock, title: "Office hours", text: "Mon–Fri, 8:00 am – 4:00 pm" },
      { icon: ShieldCheck, title: "Licensed plumbers", text: "PC.0001573 · MP.00600504" },
      { icon: Truck, title: "Stocked trucks", text: "Parts on board, fewer return trips" },
    ],
  },

  STATS: (rating) => [
    [rating ? `${rating.rating.toFixed(1)} ★` : "5 ★", "Google rating"],
    ["16", "Front Range towns served"],
    ["$50", "Off for first-time customers"],
    ["Upfront", "Pricing before work begins"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Plumbing, heating ", "and everything with a pipe."],
    text: "From a clogged toilet to a whole-house repipe or a new geothermal system.",
    cta: "Request this service",
    items: [
      { title: "Water Heaters", desc: "Tank and tankless water heater repair, replacement and installation.", icon: Flame },
      { title: "Drains & Sewers", desc: "Drain cleaning, hydro jetting, sewer video inspection and line repair.", icon: Waves },
      { title: "Plumbing Repair", desc: "Leaks, burst pipes, toilets, faucets, sinks and garbage disposals.", icon: Wrench },
      { title: "Boilers & Radiant Heat", desc: "Boiler service, radiant floors and baseboard heat, our specialty.", icon: Heater },
      { title: "Heat Pumps & Geothermal", desc: "Efficient heating and cooling installs, with rebate and tax-credit help.", icon: Leaf },
      { title: "Water Treatment", desc: "Filtration, softeners and smart water shutoff systems.", icon: Droplets },
      { title: "Gas Lines & Repiping", desc: "Gas line repair and whole-home repiping, done to code.", icon: Search },
      { title: "Remodels & New Builds", desc: "Bathroom remodels and new construction plumbing.", icon: Bath },
    ],
    chips: {
      title: "Also",
      note: "Ask us about anything not listed.",
      items: ["Leak detection", "Sump pumps", "Thermostats", "Zone controls", "Heating repair", "Clogged toilets", "Hydro jetting", "Smart shutoffs"],
    },
  },

  FEATURE: {
    id: "promise",
    nav: "Our Promise",
    eyebrow: "WHAT TO EXPECT ON EVERY CALL",
    title: ["The service call ", "you wish every company made."],
    text: "Small things that make a big difference when someone is working in your home.",
    cards: [
      { name: "On time, in uniform", icon: Clock, lead: "We respect your schedule.", items: ["Arrival window you can count on", "A call if anything changes", "Uniformed, identifiable techs"] },
      { name: "Upfront pricing", icon: ClipboardCheck, lead: "No surprises on the bill.", items: ["Price explained before work", "Honest recommendations", "You decide what gets done"] },
      { name: "Respect for your home", icon: House, lead: "Clean in, clean out.", items: ["Shoe covers on every visit", "Drop cloths in work areas", "Work area cleaned up after"] },
      { name: "Ready to fix it", icon: Truck, lead: "Fewer trips, faster fixes.", items: ["Trucks stocked with parts", "Latest methods and tools", "Work done to code"] },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["Book it. ", "We'll take it from here."],
    text: "Four simple steps from a problem to a fix.",
    steps: [
      ["Book online or call", "Tell us what's happening and when works for you."],
      ["We arrive on time", "A licensed tech diagnoses the problem."],
      ["Approve the price", "Upfront pricing before any work begins."],
      ["Fixed and cleaned up", "Your home is left the way we found it, minus the problem."],
    ],
  },

  ABOUT: {
    nav: "About",
    eyebrow: "LOCAL AND LICENSED",
    title: ["Personal attention, ", "complete peace of mind."],
    text: [
      "Canyon Plumbing & Heating is committed to top-quality plumbing and heating service for Boulder-area homeowners. Our licensed technicians work to code, keep you informed, and give honest recommendations, whether that means a quick repair or a system that will last for decades.",
    ],
    badge: ["4.8 ★", "Rated by Boulder homeowners"],
    tiles: [
      { label: "Water heaters", icon: Flame },
      { label: "Boilers", icon: Heater },
      { label: "Drains", icon: Waves },
      { label: "Remodels", icon: Hammer },
    ],
    credentials: [
      { title: "Licensed", desc: "PC.0001573 · MP.00600504" },
      { title: "Premier Service Plan", desc: "Membership for routine maintenance and member perks." },
      { title: "Rebate guidance", desc: "Help with rebates, discounts and tax credits." },
      { title: "Expertise.com 2025", desc: "Recognized among Boulder's top plumbers." },
    ],
  },

  REVIEWS: {
    title: ["What Boulder ", "homeowners say."],
    text: "Read what customers say about Canyon on Google.",
    quoteSource: "",
    quotes: [],
  },

  BOOK: {
    nav: "Book Service",
    eyebrow: "BOOK SERVICE",
    title: ["Book online, ", "any time of day."],
    text: "Tell us what's going on and when you're available. We'll call to confirm your arrival window.",
    points: ["$50 off for first-time customers", "Upfront pricing before work begins", "Licensed technicians, work to code"],
    submit: "Request Service",
    note: "We'll call to confirm your appointment. Prefer to talk? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "address", label: "Service address", placeholder: "Street, city", autoComplete: "street-address" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure", "Water Heaters", "Drains & Sewers", "Plumbing Repair", "Boilers & Radiant Heat", "Heat Pumps & Geothermal", "Water Treatment", "Gas Lines & Repiping", "Remodels & New Builds", "Premier Service Plan"] }, { name: "timing", label: "When", type: "select", placeholder: "Choose…", options: ["As soon as possible", "This week", "Within two weeks", "Just getting a quote"] }],
      { name: "notes", label: "What's happening?", type: "textarea", placeholder: "Leak location, age of water heater, anything we should know…" },
    ],
  },

  VISIT: {
    nav: "Service Area",
    eyebrow: "SERVICE AREA",
    title: ["Serving Boulder ", "and 15 neighboring towns."],
    areas: "Boulder, Longmont, Superior, Erie, Louisville, Lafayette, Niwot, Broomfield, Westminster, Thornton, Northglenn, Federal Heights, Arvada, Wheat Ridge, Golden and Denver. Call to confirm availability at your address.",
  },

  FOOTER_BLURB: "Licensed plumbing, boiler and heating service for Boulder County and the northwest metro.",
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://www.facebook.com/canyonplumbers", icon: Facebook },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
