/**
 * ⭐ SINGLE SOURCE OF TRUTH — every client-specific word and value lives here.
 * New client = edit this file + the BRAND block in globals.css + images in /public.
 * Components must never contain client or industry text.
 *
 * DEMO NOTE: fictional business. Reviews, numbers, certifications and phone
 * (555-01xx fictional range) are placeholders — replace with the real client's data.
 */

export const site = {
  demo: true, // shows a "demo" ribbon, noindex, no rating schema. false for a real client.
  locale: "en_CA",

  brand: {
    icon: "dumbbell", // logo glyph from components/icons.tsx (until the client's logo is added)
    themeColor: "#031d14", // browser bar color — keep equal to --color-primary in globals.css
  },

  business: {
    name: "Northside Strength",
    shortName: "Northside",
    type: "ExerciseGym", // schema.org LocalBusiness subtype
    tagline: "Personal training studio on Queen West, Toronto.",
    phone: "+14165550187",
    phoneDisplay: "(416) 555-0187",
    email: "coach@northsidestrength.example",
    address: {
      street: "512 Queen St W",
      city: "Toronto",
      region: "ON",
      postalCode: "M5V 2B3",
      country: "CA",
    },
    addressDisplay: "512 Queen St W, Toronto, ON M5V 2B3",
    hours: [
      { days: "Mon – Fri", time: "6:00 AM – 9:00 PM" },
      { days: "Sat", time: "8:00 AM – 2:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    openingHours: ["Mo-Fr 06:00-21:00", "Sa 08:00-14:00"],
    rating: { value: 4.9, count: 186 },
    license: "Certified coaches · CSEP-CPT & NSCA-CSCS",
  },

  seo: {
    url: "https://northsidestrength.example",
    title: "Personal Trainer in Toronto | Free First Session | Northside",
    description:
      "1:1 and small-group personal training on Queen West, Toronto. Custom plans, nutrition coaching and real accountability. Book your free first session today.",
    keyword: "personal trainer in Toronto",
  },

  // ONE primary goal per page. secondary.href must be "#<id>" of the booking form.
  cta: {
    primary: { label: "Call the Studio", short: "Call", href: "tel:+14165550187" },
    secondary: { label: "Book a Free Session", short: "Free Session", href: "#book" },
  },

  nav: [
    { label: "Training", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Results", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Personal training · Queen West, Toronto",
    headline: "Get stronger in 12 weeks — with a coach in your corner",
    subheadline:
      "1:1 and small-group training built around your body, your schedule and your goals. Your first session is free, and there’s no contract to sign.",
  },

  // Small stat cards in the hero (3 max — more feels crowded)
  trust: [
    { value: "4.9★", label: "186 Google reviews" },
    { value: "2,000+", label: "Clients coached" },
    { value: "Free", label: "First session" },
  ],

  services: [
    { icon: "dumbbell", title: "1:1 Personal Training", text: "Your own coach, a plan written for you and every rep checked for form. The fastest way to results." },
    { icon: "users", title: "Small-Group Training", text: "Train with 3–5 people at a similar level. Coached like 1:1, priced for a regular habit." },
    { icon: "leaf", title: "Nutrition Coaching", text: "Simple, flexible eating habits that fit your life — no meal plans you’ll quit in a week." },
    { icon: "bolt", title: "Beginner Strength", text: "Never lifted before? Learn the basics safely in a judgement-free studio, at your pace." },
    { icon: "shield", title: "Post-Rehab Training", text: "Rebuild strength after an injury, working alongside your physiotherapist’s guidance." },
    { icon: "device", title: "Online Coaching", text: "Your program in an app, weekly check-ins and video form reviews — wherever you train." },
  ],

  why: [
    { icon: "shield", title: "Certified coaches", text: "Every coach holds a recognised certification and years of experience." },
    { icon: "dumbbell", title: "Built for you", text: "Programs designed around your goals, injuries and equipment." },
    { icon: "heart", title: "Real accountability", text: "Check-ins between sessions so you keep showing up." },
    { icon: "clock", title: "Train at 6 AM", text: "Early, lunchtime and evening slots that fit your workday." },
  ],

  process: [
    { title: "Free intro session", text: "Meet your coach, talk goals and do a relaxed movement assessment." },
    { title: "Your 12-week plan", text: "A program built for your body and schedule, with clear milestones." },
    { title: "Train & track", text: "Coached sessions, progress check-ins and adjustments every month." },
  ],

  // DEMO: sample reviews. Replace with the client's REAL reviews before launch.
  reviews: [
    { name: "Marcus D.", area: "Liberty Village", text: "I’d never been in a gym. Twelve weeks later I deadlifted my bodyweight and actually look forward to training." },
    { name: "Priya S.", area: "The Annex", text: "The 6 AM slots are the only reason I can train with my job. My coach checks in every week — I can’t skip!" },
    { name: "Jordan K.", area: "Parkdale", text: "Came back after a knee injury. They worked with my physio and I’m stronger now than before I got hurt." },
  ],

  serviceArea: ["Queen West", "Liberty Village", "King West", "Trinity Bellwoods", "Kensington Market", "Little Italy", "The Annex", "Parkdale", "CityPlace", "Chinatown"],

  faq: [
    { q: "I’m a complete beginner. Is that okay?", a: "Absolutely — most of our clients started with zero gym experience. Your coach starts where you are and teaches every movement step by step." },
    { q: "What happens in the free session?", a: "A 45-minute chat about your goals, a gentle movement assessment and a short workout. No pressure and no obligation to sign up." },
    { q: "How much does personal training cost?", a: "Plans start from a fixed weekly price depending on 1:1 or small-group training. Your coach gives you exact prices after the free session." },
    { q: "Do I need a gym membership?", a: "No. Training happens in our private studio on Queen West, and all equipment is included." },
    { q: "Is there a contract?", a: "No long-term contract. Plans run month to month and you can pause or cancel with 2 weeks’ notice." },
  ],

  // Contact channels in the final section card
  contact: [
    { icon: "phone", title: "(416) 555-0187", text: "Call or text · Mon–Sat", href: "tel:+14165550187" },
    { icon: "mail", title: "coach@northsidestrength.example", text: "We reply within 1 business day", href: "mailto:coach@northsidestrength.example" },
    { icon: "pin", title: "512 Queen St W", text: "Steps from the 501 Queen streetcar", href: "https://maps.google.com/?q=512+Queen+St+W+Toronto" },
  ],

  // Headings and labels for each section — the words that change per industry.
  copy: {
    whyEyebrow: "Why Northside",
    whyTitle: "Coaching that keeps you showing up",
    servicesEyebrow: "Training",
    servicesTitle: "Find the training that fits you",
    servicesIntro: "Whether it’s your first workout or your next personal best, there’s a plan for you.",
    processEyebrow: "How it works",
    processTitle: "From first session to real results",
    reviewsTitle: "Real people, real progress",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faqIntro: "Straight answers on price, beginners and how it works.",
    faqHelpTitle: "Still have a question?",
    faqHelpLink: "Call (416) 555-0187",
    finalEyebrow: "Your first session is free",
    finalTitle: "Start your 12 weeks this Monday",
    finalText: "Book a free intro session — no contract, no pressure. Just a plan and a coach who’s on your side.",
    finalPoints: ["No long-term contract", "All equipment included", "Beginners welcome"],
    contactEyebrow: "Talk to a coach",
    contactTitle: "Choose how to reach us",
    areaLabel: "Clients train with us from",
    notFound: "Lost? Your coach is one call away.",
    privacyLabel: "Privacy Policy",
    hoursLabel: "Studio hours",
    contactLabel: "Contact",
  },

  // Two-step booking form in the hero (step 1: choose, step 2: details)
  form: {
    // Create a free form at formspree.io and paste its endpoint here.
    // Empty = form falls back to opening the visitor's email app.
    endpoint: "",
    subject: "Free session request",
    eyebrow: "Free · 45 minutes · No contract",
    title: "Book your free session",
    intro: "Tell us your goal and leave your number — a coach will call you within 1 business day.",
    step1: "What’s your main goal?",
    step2: "Where can your coach reach you?",
    stepLabel: "Step {n} of 2",
    back: "Back",
    options: [
      { icon: "flame", label: "Lose fat" },
      { icon: "dumbbell", label: "Build strength" },
      { icon: "heart", label: "Get fit" },
      { icon: "bolt", label: "Performance" },
      { icon: "shield", label: "Injury comeback" },
      { icon: "dots", label: "Other" },
    ],
    namePlaceholder: "Your name",
    phonePlaceholder: "Mobile number",
    messagePlaceholder: "Injuries or anything we should know? (optional)",
    submit: "Book my free session",
    successTitle: "You’re booked in — almost!",
    successText: "A coach will call you to pick a time.",
    privacyNote: "We only use your details to arrange your session.",
  },
} as const;

export type Site = typeof site;
