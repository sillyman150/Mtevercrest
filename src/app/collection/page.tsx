import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage";

export const metadata: Metadata = {
  title: "The Collection | Mount Everest Crest",
  description:
    "The full Mount Everest Crest collection. Endurance-built apparel and gear for athletes above the treeline.",
};

export default function CollectionPage() {
  return <CatalogPage mode="collection" />;
}
