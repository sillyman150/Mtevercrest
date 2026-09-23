import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage";

export const metadata: Metadata = {
  title: "New & Featured | Mount Everest Crest",
  description:
    "New drops and featured pieces from Mount Everest Crest — the latest in summit-grade apparel.",
};

export default function NewFeaturedPage() {
  return <CatalogPage mode="new" />;
}
