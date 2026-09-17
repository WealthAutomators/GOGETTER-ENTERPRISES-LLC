import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Gear for a full day, not a photoshoot.",
    description:
      "Contemporary products for work, travel, home, and time outside — chosen because they get used.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
    secondaryCtaText: "See what’s new",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Free shipping over $75",
    description: "Standard delivery in 3–5 business days on qualifying orders.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure checkout",
    description: "Encrypted payment on every demo order.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "30-day returns",
    description: "Send unused items back in original packaging.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Straightforward support",
    description: "Use the contact form and we will follow up.",
  },
];

export const homepageFeaturedSlugs = [
  "daily-transit-backpack",
  "aluminum-laptop-riser",
  "french-terry-hoodie",
  "commute-travel-tumbler",
  "ceramic-table-lamp",
  "studio-grip-mat",
  "hardcover-field-notebook",
  "everyday-cast-skillet",
] as const;

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "compact-type-keyboard",
  "knit-studio-throw",
  "pour-over-brew-set",
  "compact-kettlebell",
  "packable-rain-shell",
  "everyday-polarized-shades",
] as const;

export const homepageNewArrivalSlugs = [
  "frame-capture-camera",
  "clip-task-light",
  "arc-floor-lamp",
  "pour-over-brew-set",
  "commuter-messenger-bag",
  "compact-kettlebell",
  "everyday-court-sneakers",
  "weekly-desk-planner",
] as const;

export const homepageBestsellerSlugs = [
  "daily-transit-backpack",
  "pocket-folio-reader",
  "commute-travel-tumbler",
  "studio-grip-mat",
  "french-terry-hoodie",
  "hardcover-field-notebook",
  "knit-studio-throw",
  "compact-led-flashlight",
] as const;

export const goGetterEditSlugs = [
  "daily-transit-backpack",
  "aluminum-laptop-riser",
  "field-wristwatch",
] as const;

export const secondaryCollectionSlugs = [
  "weekend-holdall",
  "insulated-trail-bottle",
  "packable-rain-shell",
  "slim-passport-sleeve",
] as const;

export const utilityFeatureSlugs = [
  "aluminum-laptop-riser",
  "weekly-desk-planner",
  "commute-travel-tumbler",
] as const;

export const lifestyleTiles = [
  {
    id: "workday",
    title: "Workday",
    description: "Desk tools, lighting, and carry that keep a day on track.",
    href: "/categories/workspace",
    image: "/lifestyle/workday.jpg",
  },
  {
    id: "move",
    title: "On the move",
    description: "Bags, bottles, and compact kit for commutes and trips.",
    href: "/categories/travel",
    image: "/lifestyle/on-the-move.jpg",
  },
  {
    id: "home",
    title: "At home",
    description: "Lighting, textiles, and kitchen pieces for a well-run space.",
    href: "/categories/home",
    image: "/lifestyle/at-home.jpg",
  },
  {
    id: "train",
    title: "Train",
    description: "Mats, recovery, and compact weights for regular sessions.",
    href: "/categories/fitness",
    image: "/lifestyle/train.jpg",
  },
  {
    id: "weekend",
    title: "Weekend",
    description: "Outdoor lighting, bottles, and trail-ready footwear.",
    href: "/categories/outdoor",
    image: "/lifestyle/weekend.jpg",
  },
  {
    id: "essentials",
    title: "Essentials",
    description: "Apparel, accessories, and daily care with a clean finish.",
    href: "/categories/apparel",
    image: "/lifestyle/essentials.jpg",
  },
];

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Pack for the next stretch of road.",
  description:
    "Weekender bags, rain shells, and bottles built for days that don’t stay in one place.",
  buttonText: "Shop travel",
  buttonLink: "/categories/travel",
  image: "/banners/editorial.jpg",
};

export const aboutSection = {
  title: "Useful things, chosen with intent.",
  description:
    "GOGETTER ENTERPRISES LLC exists to put practical, well-designed products in one place. We favor pieces that earn their keep — at a desk, in a bag, in the kitchen, or on the way out the door — without turning everyday shopping into a slogan.",
  checklist: [
    "A catalog built around use, not novelty",
    "Clear product details and honest photography",
    "Straightforward shipping and returns",
    "A store that stays easy to navigate",
  ],
  buttonText: "Read the brand story",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "A cross-section of what people actually reorder: carry, workspace, home, and daily wear.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "travel",
};

export const utilityFeature = {
  title: "Everyday utility, minus the clutter.",
  description:
    "A laptop riser, a planner that starts whenever you do, and a tumbler that survives the commute. Small upgrades that show up five days a week.",
  image: "/banners/utility.jpg",
  ctaText: "Shop workspace",
  ctaLink: "/categories/workspace",
};

export const promoStrip = {
  title: "Free standard shipping on orders over $75",
  description: "30-day returns on unused items. No countdown clocks, no invented scarcity.",
  ctaText: "Shop now",
  ctaLink: "/shop",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Travel", slug: "travel" },
  { label: "Workspace", slug: "workspace" },
  { label: "Apparel", slug: "apparel" },
  { label: "Fitness", slug: "fitness" },
];

export const newsletter = {
  title: "New drops, no noise.",
  description: "Occasional notes on new arrivals and useful restocks. Unsubscribe anytime.",
  placeholder: "Email address",
  buttonText: "Join",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const utilityBarItems = [
  "Free shipping over $75",
  "30-day returns",
  "The Go-Getter Edit is live",
];
