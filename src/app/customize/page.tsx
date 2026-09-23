import type { Metadata } from "next";
import CustomizePage from "@/components/CustomizePage";

export const metadata: Metadata = {
  title: "Customize | Mount Everest Crest",
  description:
    "Silhouette, pattern, construction, material, stitching, color and identity. Shape nearly every detail of your garment with Mount Everest Crest.",
};

export default function CustomizeRoute() {
  return <CustomizePage />;
}
