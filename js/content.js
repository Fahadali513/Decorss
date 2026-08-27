/* ==========================================================================
   CONTENT.JS — default content. The admin panel (admin.html) overrides
   these values in the browser's localStorage under the "a1cms_*" keys.
   js/cms.js merges defaults + overrides at render time.
   ========================================================================== */

const SITE_DEFAULTS = {
  siteName: "A1 Event Decor Manufacturing",
  navText: "A1 Event Decor",
  tagline: "Premium Fiberglass & Event Structures",
  welcomeEnabled: true,
  welcomeTitle: "Welcome to A1 Event Decor",
  welcomeMessage: "Premium fiberglass, custom event structures, and 19+ years of manufacturing craftsmanship — thank you for visiting.",
  logo: "img/logo.png",
  phone: "+92 348-3538798",
  whatsapp: "923483538798",
  email: "a1eventdecor18@gmail.com",
  address: "Lahore Cantt, Airport Road, Bhatta Chowk, Bedian Road, Near Shalimar Cinema",
  social: {
    facebook: "#",
    twitter: "#",
    tiktok: "#",
    instagram: "#"
  }
};

const HOME_DEFAULTS = {
  heroEyebrow: "19+ Years of Manufacturing Excellence",
  heroHeadlinePrefix: "Crafting ",
  heroHeadlineAccent: "unforgettable",
  heroHeadlineSuffix: " event decor, built to last.",
  heroSub: "Premium fiberglass, custom event structures, and metal fabrication — engineered with precision and finished with care, for every celebration.",
  messageQuote: "Thank you for choosing A1 Event Decor Manufacturing. We are committed to delivering premium-quality event decor solutions with expert craftsmanship, innovative designs, and reliable service. We look forward to bringing your vision to life and building lasting relationships with our clients around the world.",
  introHeading: "Customer satisfaction, in everything we build",
  introText: "At A1 Event Decor Manufacturing, customer satisfaction is our highest priority. We believe in building long-term relationships by providing reliable service, competitive pricing, timely delivery, and exceptional products that exceed expectations.",
  missionText: "Our mission is to manufacture premium-quality event decor products with precision, creativity, and reliability while building long-term relationships with our clients through trust, innovation, and outstanding service.",
  visionText: "To become a globally recognized brand in event decor manufacturing by delivering innovative designs, exceptional craftsmanship, and world-class quality that inspires every celebration.",
  storyPreview: "A1 Event Decor Manufacturing is driven by the dream of a young boy, still in matric&hellip;",
  statCustomers: 1000,
  statArea: "All over Pakistan",
  statYears: 19,
  statSatisfaction: 100
};

const ABOUT_DEFAULTS = {
  whoWeAreText: "A1 Event Decor Manufacturing is a leading manufacturer of premium fiberglass, custom event structures, decorative products, and metal fabrication. With over 19 years of experience, we transform creative ideas into high-quality products for weddings, commercial spaces, exhibitions, and events worldwide.",
  whoImage1: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
  whoImage2: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
  sinceYear: "2006",
  aboutText1: "Welcome to A1 Event Decor Manufacturing, your trusted partner in premium event décor manufacturing. We are dedicated to creating high-quality décor products that add elegance, style, and sophistication to every celebration. With a passion for excellence, expert craftsmanship, and attention to detail, we manufacture décor solutions that meet the highest standards of quality and durability.",
  aboutText2: "Our team combines creativity with innovation to produce unique event décor for weddings, corporate events, parties, exhibitions, and special occasions. Every product is carefully crafted to ensure outstanding design, functionality, and long-lasting performance.",
  founderImage: "img/founder.jpg",
  founderQuote: "Building quality, creating trust, and turning your vision into reality—with precision and care.",
  founderName: "Sarwar",
  ceoQuote: "Inspired by my father's vision, I am committed to building A1 Event Decor Manufacturing into Pakistan's leading brand with a global presence.",
  ceoName: "Ali Sarwar",
  missionText: "Our mission is to manufacture premium-quality event decor products with precision, creativity, and reliability while building long-term relationships with our clients through trust, innovation, and outstanding service.",
  visionText: "To become a globally recognized brand in event decor manufacturing by delivering innovative designs, exceptional craftsmanship, and world-class quality that inspires every celebration.",
  storyFull: "A1 Event Decor Manufacturing is driven by the dream of a young boy, still in matric, who is determined to turn his father's business into one of Pakistan's leading event decor brands and a globally recognized name. With passion, hard work, and a commitment to excellence, he continues to take every step toward making that vision a reality."
};

const WHY_CHOOSE_US_DEFAULTS = [
  "19+ Years of Manufacturing Experience",
  "Premium Quality Materials",
  "Skilled In-House Manufacturing Team",
  "Fully Customized Solutions",
  "Modern Production Techniques",
  "Timely Delivery",
  "Competitive Pricing",
  "Trusted by Hundreds of Clients",
  "Strong Commitment to Quality & Customer Satisfaction"
];

const SERVICES_DEFAULTS = [
  "Fiberglass Manufacturing",
  "Custom Event Stage Manufacturing",
  "Wedding Decor Structures",
  "Fiberglass Statues & Sculptures",
  "Decorative Pillars, Pots & Props",
  "Iron Fabrication & Metal Works",
  "Custom Design & Product Development",
  "Commercial & Event Decoration Solutions"
];

const PROCESS_DEFAULTS = [
  "Consultation & Requirement Discussion",
  "Concept & Design Development",
  "Material Selection",
  "Precision Manufacturing",
  "Quality Inspection",
  "Professional Finishing",
  "Secure Packaging",
  "On-Time Delivery"
];

const VALUES_DEFAULTS = [
  { title: "Craftsmanship", text: "Every seam checked by hand." },
  { title: "Sustainability", text: "Responsibly sourced materials." },
  { title: "Integrity", text: "Honest pricing, honest timelines, every time." },
  { title: "Innovation", text: "New techniques applied to timeless designs." }
];

const HERO_SLIDES_DEFAULTS = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop"
];

const TESTIMONIALS_DEFAULTS = [
  { name: "Abdullah", city: "Lahore", rating: 5, review: "Our experience with A1 Event Decor Manufacturing was outstanding. The quality, finishing, and professionalism exceeded our expectations." },
  { name: "Shahid", city: "Lahore", rating: 5, review: "Reliable team, excellent craftsmanship, and timely delivery. Highly recommended for custom event decor manufacturing." },
  { name: "Raheem Khan", city: "Lahore", rating: 5, review: "We were impressed by their attention to detail and ability to turn our ideas into reality." }
];


const CATEGORIES_DEFAULTS = ["All", "Stairs", "Stages"];


const SERVICES_PAGE_DEFAULTS = {
  heroTitle: "Our Services",
  heroSub: "Premium manufacturing for events, stages, and custom décor — engineered with precision.",
  servicesIntro: "From fiberglass to custom metal works, every piece is built in-house with care.",
  processIntro: "A clear, quality-driven process so every order arrives on time and on brief.",
  ctaText: "Ready to start your next build? Tell us what you need — we'll craft it with precision."
};
