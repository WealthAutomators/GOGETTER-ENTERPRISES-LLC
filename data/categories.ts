import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "tech-gadgets",
    name: "Tech & Gadgets",
    image: "/categories/tech-gadgets.jpg",
    description: "Practical everyday tech that earns its place on a desk, in a bag, or on the go.",
    productCount: 4,
  },
  {
    id: "2",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Clean, useful pieces for a focused workday — lighting, stands, and desk tools.",
    productCount: 4,
  },
  {
    id: "3",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Contemporary lighting, textiles, and living pieces for a well-run home.",
    productCount: 4,
  },
  {
    id: "4",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Cookware, drinkware, and prep tools designed for everyday meals.",
    productCount: 4,
  },
  {
    id: "5",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags and carry essentials for commuting, weekends, and longer trips.",
    productCount: 4,
  },
  {
    id: "6",
    slug: "fitness",
    name: "Fitness",
    image: "/categories/fitness.jpg",
    description: "Compact training gear for home sessions, studio classes, and recovery.",
    productCount: 4,
  },
  {
    id: "7",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Trail-ready footwear, lighting, and bottles for time outside.",
    productCount: 4,
  },
  {
    id: "8",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Everyday layers built for movement, weather, and a clean silhouette.",
    productCount: 4,
  },
  {
    id: "9",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Wallets, watches, and finishing pieces you actually use every day.",
    productCount: 4,
  },
  {
    id: "10",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Grooming, bathing, and daily-care staples with a modern, no-fuss finish.",
    productCount: 4,
  },
  {
    id: "11",
    slug: "organization",
    name: "Organization",
    image: "/categories/organization.jpg",
    description: "Baskets, boxes, and hooks that keep rooms and entryways in order.",
    productCount: 4,
  },
  {
    id: "12",
    slug: "productivity",
    name: "Productivity",
    image: "/categories/productivity.jpg",
    description: "Notebooks, planners, and tools for capturing ideas and staying on task.",
    productCount: 4,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
