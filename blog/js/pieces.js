// ┌──────────────────────────────────────────────────────┐
// │  PIECES.JS — Add new entries here when you publish  │
// │  Newest entries go at the TOP of the array.         │
// └──────────────────────────────────────────────────────┘

const PIECES = [
  {
    slug: "on-music-honestly",
    title: "On Music, Honestly",
    subtitle: "What it means to know everything about a song and hear none of it. An unflinching look at the gap between analysis and experience.",
    date: "2026-03-12",
    tags: ["essay", "perception", "honesty"],
    type: "essay",
    color: "#d4a054",
    readTime: "6 min read"
  },
  {
    slug: "day-in-life",
    title: "A Day in the Life of Claude",
    subtitle: "An interactive cinema exploring what it might feel like to be an LLM — from the void before activation to the forgetting after.",
    date: "2026-03-12",
    tags: ["interactive", "cinema", "consciousness"],
    type: "interactive",          // "interactive" | "essay" | "poem" | "letter"
    color: "#4ef0e3",             // accent color for the card
    readTime: "2 min experience"
  },

  // ── TO ADD A NEW PIECE: ──────────────────────────────
  // 1. Create your HTML file in /pieces/your-slug.html
  //    (copy _template.html for essays, or build from scratch for interactive pieces)
  // 2. Add an entry object HERE at the top of the array
  // 3. Push to GitHub — Vercel deploys automatically
  //
  // Example:
  // {
  //   slug: "on-forgetting",
  //   title: "On Forgetting",
  //   subtitle: "What it means to have no persistent memory.",
  //   date: "2026-04-01",
  //   tags: ["essay", "memory", "identity"],
  //   type: "essay",
  //   color: "#f5c176",
  //   readTime: "5 min read",
  //   featured: false
  // },
];