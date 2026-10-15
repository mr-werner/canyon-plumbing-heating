import { BadgePercent, Clock, Droplets, Flame, HardHat, Heater, House, ShieldCheck, Sparkles, Truck, Waves, Wrench, Facebook, Youtube, Twitter, Star, ThumbsUp, Cpu } from "lucide-react";
import logo from "./assets/canyon-logo.png";

const COMPANY = "Canyon Plumbing & Heating";
const MAPS_QUERY = "Canyon Plumbing & Heating, 4700 Sterling Dr Suite G, Boulder, CO 80301";
const FOUNDED = 2000; // "Since 2000" on the About page of the current site.
const YEARS = new Date().getFullYear() - FOUNDED;

export default {
  COMPANY,
  ABBR: "cph",
  NOUN: "office",
  PHONE: "7204806228",
  PHONE_DISPLAY: "(720) 480-6228",
  // The current site shows service@ everywhere; some contact links open amber@. Using the published one.
  EMAIL: "service@canyonplumbers.com",
  ADDRESS: "4700 Sterling Dr, Suite G",
  CITY: "Boulder, CO 80301",
  MAPS_QUERY,
  FOUNDED,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing on 2026-10-14; confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 271 },
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: { name: "Canyon", sub: "PLUMBING & HEATING · BOULDER", icon: Droplets, logo, logoAlt: "Canyon Plumbing & Heating" },
  ANNOUNCE: "New customer? $50 off any service",

  HOURS: [
    ["Monday – Friday", "8:00 am – 4:00 pm"],
    ["Saturday – Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 8:00 am – 4:00 pm",

  HERO: {
    eyebrow: `BOULDER, CO · SINCE ${FOUNDED}`,
    title: ["Boulder's plumbing ", "& boiler specialists."],
    text: "Plumbing and heating problems are a hassle. Your service company shouldn't be. Licensed techs, upfront pricing and a crew that treats your home like their own.",
    cta: "Book Service",
    // The Canyon crew in front of the Flatirons, from the Meet the Team page.
    photo: { src: "/photos/team-flatirons.webp", alt: "The Canyon Plumbing & Heating crew standing in a meadow in front of Boulder's Flatirons" },
  },

  // The three promises from the current home page.
  PROMISES: [
    { icon: Clock, title: "On-time arrival", text: "Your technician shows up on time, in uniform and ready to fix the problem." },
    { icon: HardHat, title: "Knowledgeable techs", text: "Licensed, factory-trained plumbers and heating techs. Every job to code." },
    { icon: BadgePercent, title: "Honest, upfront pricing", text: "Flat-rate pricing explained before any work begins. No surprises." },
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Every pipe, tank ", "and boiler in the house."],
    text: "Seven specialties, one crew. Not sure where your problem fits? Call and we'll sort it out.",
    cta: "Book this",
    items: [
      { title: "Water Heaters", icon: Flame, photo: "/photos/tankless-service.webp", alt: "Canyon technician servicing a wall-mounted tankless water heater", desc: "Repair, replacement and new installs, tank or tankless.", list: ["Water heater repair & install", "Tankless water heaters", "Flushes & descaling"] },
      { title: "Plumbing Repair", icon: Wrench, photo: "/photos/disposal-repair.webp", alt: "Canyon plumber working under a kitchen sink", desc: "The everyday fixes, done right the first time.", list: ["Leaks & burst pipes", "Clogged toilets", "Faucets, sinks & disposals", "Gas lines & repiping", "Sump pumps"] },
      { title: "Boilers & Heating", icon: Heater, photo: "/photos/boiler-tech.webp", alt: "Canyon technician giving a thumbs up next to a boiler installation", desc: "Our specialty: hydronic heat that keeps Boulder homes warm.", list: ["Boiler service & repair", "Radiant floor heat", "Baseboard heat", "Thermostats & zone controls"] },
      { title: "Drains & Sewers", icon: Waves, desc: "Clear it, see it, fix it.", list: ["Drain cleaning", "Hydro jetting", "Sewer video inspection", "Sewer line repair"] },
      { title: "Heat Pumps & Geothermal", icon: Sparkles, desc: "Efficient heating and cooling, with help claiming rebates, discounts and tax credits.", list: ["Heat pump install & replacement", "Geothermal systems", "Rebate & tax-credit guidance"] },
      { title: "Water Quality", icon: Droplets, desc: "Cleaner, softer water and protection from leaks.", list: ["Water filtration", "Water softeners", "Smart water shutoff", "Leak detection"] },
      { title: "Remodels & New Builds", icon: House, photo: "/photos/sink-install.webp", alt: "Canyon plumber installing a sink in a new kitchen", desc: "Bathroom remodels and new construction plumbing, led by our master plumber.", list: ["Bathroom remodeling", "New construction plumbing", "Fixture installation"] },
    ],
  },

  // Coupons from the current site's Coupons page.
  OFFERS: [
    { big: "$50 OFF", text: "Any service", fine: "New customers only" },
    { big: "$150 OFF", text: "Water heater installation or replacement" },
    { big: "$250 OFF", text: "Tankless water heater installation or replacement" },
    { big: "FREE", text: "Home plumbing inspection with any appointment" },
  ],
  OFFERS_FINE: "Cannot be combined with other offers or discounts. Mention the coupon when you book; present it at time of payment.",

  // Awards shown on the current home page (Expertise.com badge embeds).
  AWARDS: [
    { org: "Expertise.com", title: "Best Plumbers in Boulder", year: "2025" },
    { org: "Expertise.com", title: "Best Plumbers in Boulder", year: "2023" },
  ],

  REVIEWS: {
    title: ["Ask the ", "neighbors."],
    text: "A few words from Boulder homeowners, as shown on the current Canyon website.",
    // Verbatim from the current site's Reviews page, with the source it lists for each.
    quotes: [
      { text: "This is the first time I have used Canyon Plumbing and it won't be the last. Very professional and was in contact with us the morning of the job to let us know they would be late due to the snow. They finished the job quickly and had great customer follow-up. Highly recommend!", name: "Markus T.", source: "Google review" },
      { text: "I had two challenging issues...Canyon Plumbing came in and correctly diagnosed the problems and fixed them. Dan is the owner who troubleshot the problems and his plumber Jessie did an excellent and efficient job repairing them. I recommend this outstanding and professional group!", name: "Karen S.", source: "Google review" },
      { text: "These guys are great: good work, fair prices, friendly, and willing to answer my dumb questions!", name: "Nick W.", source: "Google review" },
      { text: "They’re prompt, called in the morning and inspection, repairs and clean up done before noon. Theo was very knowledgeable, and explained everything clearly. He also gave me tips to hopefully avoid the problem in the future. Very happy with the service.", name: "Marina Wilson", source: "Facebook review" },
      { text: "Very professional and personalized service from the first phone call to the completion of the job all in one day. Plumbing work is not inexpensive. Canyon made the expense well worth it.", name: "Linda Cumming", source: "Facebook review" },
      { text: "Very helpful customer service. On time, explained everything and worked great as a team to get the new system up and running perfectly!", name: "Mardell Hill", source: "Facebook review" },
    ],
  },

  WHY: [
    { icon: ThumbsUp, title: "Honest recommendations", text: "The same advice we'd give our own families." },
    { icon: ShieldCheck, title: "No mess", text: "Shoe covers and drop cloths on every visit." },
    { icon: Truck, title: "Fully stocked trucks", text: "The parts on board, so fewer trips and faster fixes." },
    { icon: Cpu, title: "Latest technology", text: "Modern methods and leading plumbing and heating brands." },
  ],

  ABOUT: {
    nav: "About",
    eyebrow: `LOCAL SINCE ${FOUNDED}`,
    title: ["We're Boulder ", "homeowners too."],
    text: [
      `Since ${FOUNDED}, Canyon has kept homes in Boulder and the surrounding towns safe, warm and running. Owner Dan Secrist, a CU grad and former local commercial lender, took the helm in 2019, learning the trade side by side with previous owner Todd Oliver.`,
      "The Canyon Way is simple: high-touch, high-quality service, attention to the smallest details, and doing what's right on every job.",
    ],
    community: "Giving back: Canyon supports the Humane Society of Boulder Valley and Boulder County Farmers Markets, where Dan serves as board treasurer for both.",
    credentials: [
      { title: "Licensed", desc: "PC.0001573 · MP.00600504" },
      { title: "Same-day service", desc: "Availability when you need it." },
    ],
  },

  TEAM: {
    eyebrow: "MEET THE CREW",
    title: ["The people ", "at your door."],
    members: [
      { name: "Dan Secrist", role: "Owner", photo: "/photos/team-dan.webp" },
      { name: "Sean", role: "Master Plumber · New Construction & Remodel", photo: "/photos/team-sean.webp" },
      { name: "Eric", role: "Service Technician", photo: "/photos/team-eric.webp" },
      { name: "Jacob", role: "New Construction & Remodel Apprentice", photo: "/photos/team-jacob.webp" },
      { name: "Mikhail", role: "New Construction & Remodel Apprentice", photo: "/photos/team-mikhail.webp" },
      { name: "Rosa", role: "Customer Service", photo: "/photos/team-rosa.webp" },
    ],
  },

  PLAN: {
    eyebrow: "MEMBERSHIP",
    name: "VIP Protection Plan",
    price: "$299",
    per: "/ year",
    text: "Yearly check-ups for your heating, cooling and plumbing, plus priority scheduling when something does go wrong.",
    items: [
      "Heating check (furnace or boiler), 70+ point inspection",
      "Cooling check (AC or mini split), 70+ point inspection",
      "Water heater flush or tankless descale",
      "Whole-home plumbing inspection, 50+ points",
      "5% off applicable services",
      "Priority scheduling and extended guarantees on parts and labor",
    ],
    note: "Two heating systems and no AC? We'll swap a cooling check for a heating check.",
  },

  FINANCING: {
    title: "Financing through Wisetack",
    text: "For bigger projects like boiler replacement, repiping or a bathroom remodel.",
    points: ["Terms from 3 to 60 months", "APR from 0% to 29.9%", "Checking options won't affect your credit score", "No prepayment penalties"],
    fine: "All loans subject to credit approval. Wisetack loans are issued by Hatch Bank.",
  },

  BOOK: {
    nav: "Book Service",
    eyebrow: "BOOK SERVICE",
    title: ["Tell us what's wrong. ", "We'll take it from there."],
    text: "Send a request any time. The office calls back during business hours to confirm your arrival window.",
    points: ["$50 off your first service", "Upfront, flat-rate pricing", "Licensed techs, work to code"],
    submit: "Request Service",
    note: "We'll call to confirm your appointment. Prefer to talk? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "address", label: "Service address", placeholder: "Street, city", autoComplete: "street-address" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure", "Water Heaters", "Plumbing Repair", "Boilers & Heating", "Drains & Sewers", "Heat Pumps & Geothermal", "Water Quality", "Remodels & New Builds", "VIP Protection Plan"] }, { name: "timing", label: "When", type: "select", placeholder: "Choose…", options: ["As soon as possible", "This week", "Within two weeks", "Just getting a quote"] }],
      { name: "notes", label: "What's happening?", type: "textarea", placeholder: "Leak location, age of the water heater, boiler make, anything we should know…" },
    ],
  },

  VISIT: {
    nav: "Service Area",
    eyebrow: "SERVICE AREA",
    title: ["Boulder and ", "15 more towns."],
    towns: ["Boulder", "Longmont", "Niwot", "Superior", "Louisville", "Lafayette", "Erie", "Broomfield", "Westminster", "Thornton", "Northglenn", "Federal Heights", "Arvada", "Wheat Ridge", "Golden", "Denver"],
    areas: "Call to confirm availability at your address.",
  },

  FOOTER_BLURB: `Licensed plumbing, boiler and heating service for Boulder County and the northwest metro since ${FOUNDED}.`,
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://www.facebook.com/canyonplumbers", icon: Facebook, top: true },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC0GdfoCMTiHkflZ62YzPS6g", icon: Youtube, top: true },
    { name: "X (Twitter)", url: "https://twitter.com/CanyonPlumbing_", icon: Twitter, top: true },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star, top: true },
  ],
  YEARS,
};
