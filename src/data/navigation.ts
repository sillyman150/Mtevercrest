import { sports } from "@/data/catalog";

export type PrimaryNavItem = {
  label: string;
  href?: string;
  children?: { name: string; href: string }[];
};

// Single source of truth for the global header.
// Sports children stay in sync with the catalog sports list,
// so the dropdown, mobile menu and sports pages never drift apart.
export const primaryNavigation: PrimaryNavItem[] = [
  { label: "NEW & FEATURED", href: "/new-featured" },
  { label: "SPORTS", children: sports.map((sport) => ({ name: sport.name, href: "/sports" })) },
  { label: "CUSTOMIZE", href: "/customize" },
  { label: "THE COLLECTION", href: "/collection" },
];
