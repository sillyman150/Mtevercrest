// "From the bench": real production pieces, cut out from the background,
// re-lit and set on a flat studio ground (per the Crest Studio kit mockups,
// archive page). The transparent PNGs of each piece live in
// /public/images/from-the-bench/ as optimized WebP.
//
// The purple / gold long-sleeve (rose vein heritage) and the match shorts
// are intentionally excluded per current direction. Add them back by
// dropping the WebP into the folder and un-commenting a row below.

import type { CustomizationExample } from "@/data/customize";

export const benchPieces: CustomizationExample[] = [
  {
    id: "bench-gaa-01",
    title: "GAA Match Jersey 01",
    category: "Jerseys",
    sport: "Football",
    material: "Polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/gaa-navy-red.webp",
    imageWidth: 900,
    imageHeight: 792,
    tags: ["Sublimation", "Stripe", "Pattern"],
    description: "Navy / red / white. Sublimated shadow stripe, raglan swoosh panels, sleeve crest.",
  },
  {
    id: "bench-match-02",
    title: "Match Jersey 02",
    category: "Jerseys",
    sport: "Soccer",
    material: "Polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/white-yellow-geometric.webp",
    imageWidth: 900,
    imageHeight: 737,
    tags: ["Sublimation", "Geometric", "Pattern"],
    description: "White / yellow / black. Sublimated geometric X with motion fade, tipped rib collar and cuffs.",
  },
  {
    id: "bench-sponsor-03",
    title: "Sponsor Match Jersey 03",
    category: "Jerseys",
    sport: "Football",
    material: "Polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/orange-sponsor.webp",
    imageWidth: 900,
    imageHeight: 763,
    tags: ["Sublimation", "Sponsor", "Pattern"],
    description: "Tonal orange. Tonal sweep graphic, front sponsor, crest, sleeve wordmark.",
  },
  {
    id: "bench-bib-04",
    title: "Training Bib 04",
    category: "Tops",
    sport: "Football",
    material: "Mesh",
    application: "Construction",
    image: "/images/from-the-bench/orange-mesh-bib.webp",
    imageWidth: 900,
    imageHeight: 1005,
    tags: ["Construction", "Fabric", "Mesh"],
    description: "Orange / black binding. Open mesh, bound neck and armholes.",
  },
  {
    id: "bench-hoodie-05",
    title: "Hooded Shooting Tee 05",
    category: "Hoodies",
    sport: "Basketball",
    material: "Performance polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/hooded-shooting-tee.webp",
    imageWidth: 900,
    imageHeight: 1008,
    tags: ["Sublimation", "Stripe", "Hood"],
    description: "Navy / royal / yellow. Performance hood, diagonal stripe sublimation, contrast cuffs.",
  },
  {
    id: "bench-strasbourg-back",
    title: "Match Jersey 08 · Back",
    category: "Jerseys",
    sport: "Football",
    material: "Performance polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/strasbourg-back.webp",
    imageWidth: 900,
    imageHeight: 796,
    tags: ["Sublimation", "Gradient", "Pattern"],
    description: "Teal-to-navy gradient, back view. Name and number over a full-sublimation fade.",
  },
  {
    id: "bench-strasbourg-front",
    title: "Match Jersey 09 · Front",
    category: "Jerseys",
    sport: "Football",
    material: "Performance polyester",
    application: "Sublimation",
    image: "/images/from-the-bench/strasbourg-front.webp",
    imageWidth: 900,
    imageHeight: 794,
    tags: ["Sublimation", "Gradient", "Pattern"],
    description: "Teal-to-navy gradient, front view. The Glacier fade family in production.",
  },
  // {
  //   id: "bench-longsleeve-06",
  //   title: "Long-Sleeve Jersey 06",
  //   ... purple / gold rose vein heritage, excluded for now.
  // },
  // {
  //   id: "bench-shorts-07",
  //   title: "Match Shorts 07",
  //   ... teal-to-navy gradient shorts, excluded for now.
  // },
];
