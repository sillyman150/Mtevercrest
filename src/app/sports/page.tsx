import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage";

export const metadata: Metadata = {
  title: "Sports | Mount Everest Crest",
  description:
    "Performance garments cut for every arena. Climb, run, ride and train in Mount Everest Crest kit.",
};

export default function SportsPage() {
  return <CatalogPage mode="sports" />;
}
