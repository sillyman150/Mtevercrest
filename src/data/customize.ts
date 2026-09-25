// Capability data for the Customize experience.
// Everything on /customize renders from these arrays so capabilities,
// copy and options can be added or removed without touching page markup.
// Where MEC specifications are not yet confirmed, values stay null and
// the UI copies are kept deliberately non-technical.

export type SleeveId = "sleeveless" | "cap" | "short" | "half" | "threequarter" | "long" | "custom";
export type CollarId = "crew" | "v" | "polo" | "stand" | "contrast" | "rib" | "custom";
export type PatternId = "solid" | "gradient" | "geometric" | "stripe" | "topographic" | "abstract" | "heritage" | "digital" | "custom";

export const garments = [
  { id: "match-jersey", name: "Match jersey", note: "The competitive standard" },
  { id: "training-jersey", name: "Training jersey", note: "Practice-ready build" },
  { id: "performance-tee", name: "Performance tee", note: "Moisture-management knit" },
  { id: "cotton-tee", name: "Cotton tee", note: "Everyday weight" },
  { id: "polo", name: "Polo", note: "Structured club collar" },
  { id: "hoodie", name: "Hoodie", note: "Off-field layer" },
  { id: "quarter-zip", name: "Quarter zip", note: "Transitional midlayer" },
  { id: "jacket", name: "Jacket", note: "Full outerwear" },
  { id: "shorts", name: "Shorts", note: "Match or training" },
  { id: "pants", name: "Pants", note: "Full-length build" },
  { id: "warmup", name: "Warm-up", note: "Pre-game shell" },
  { id: "sleeveless-top", name: "Sleeveless top", note: "Cut for movement" },
];

export const fabrics = [
  { id: "polyester", name: "Polyester", note: "Dependable base with strong color hold." },
  { id: "performance-poly", name: "Performance polyester", note: "Lighter, moisture-managing competition build." },
  { id: "cotton", name: "Cotton", note: "Natural hand-feel for off-field pieces." },
  { id: "cotton-poly", name: "Cotton / poly blend", note: "Softness with added durability." },
  { id: "mesh", name: "Mesh", note: "Open structure for ventilation." },
  { id: "interlock", name: "Interlock", note: "Smooth, stable double-knit face." },
  { id: "pique", name: "Piqué", note: "Classic polo texture." },
  { id: "jersey-knit", name: "Jersey knit", note: "Fluid single-knit drape." },
  { id: "performance-stretch", name: "Performance stretch", note: "Recovery and range of motion." },
  { id: "brushed-fleece", name: "Brushed fleece", note: "Insulated inner face for warmth." },
  { id: "technical-knit", name: "Technical knit", note: "Engineered surfaces for specific needs." },
];

// gsmRange stays null until MEC confirms production ranges;
// the UI is built so real numbers can drop straight in.
export const weightClasses = [
  { id: "light", label: "Lightweight", gsmRange: null as string | null, description: "Designed for breathable competition use." },
  { id: "mid", label: "Midweight", gsmRange: null as string | null, description: "A balanced weight for training and daily wear." },
  { id: "heavy", label: "Heavyweight", gsmRange: null as string | null, description: "Structured, durable builds for cooler conditions." },
];

export const sleeves: { id: SleeveId; name: string; note: string }[] = [
  { id: "sleeveless", name: "Sleeveless", note: "Maximum freedom" },
  { id: "cap", name: "Cap sleeve", note: "Minimal shoulder finish" },
  { id: "short", name: "Short sleeve", note: "Classic match cut" },
  { id: "half", name: "Half sleeve", note: "Extended coverage" },
  { id: "threequarter", name: "3/4 sleeve", note: "Transitional length" },
  { id: "long", name: "Long sleeve", note: "Full arm coverage" },
  { id: "custom", name: "Custom cut", note: "Spec your own" },
];

export const collars: { id: CollarId; name: string; note: string }[] = [
  { id: "crew", name: "Crew neck", note: "Clean, timeless" },
  { id: "v", name: "V-neck", note: "Deeper front opening" },
  { id: "polo", name: "Polo collar", note: "Structured fold-over" },
  { id: "stand", name: "Stand collar", note: "Raised technical neck" },
  { id: "contrast", name: "Contrast collar", note: "Color-blocked trim" },
  { id: "rib", name: "Rib collar", note: "Ribbed knit band" },
  { id: "custom", name: "Custom collar", note: "Shape, color, material, trim" },
];

export const applications = [
  { id: "sublimation", name: "Sublimation", visual: "sublimation", description: "Full-garment graphics integrated into compatible performance fabrics.", ideal: "All-over patterns / team kits" },
  { id: "embroidery", name: "Embroidery", visual: "embroidery", description: "Dimensional thread-based finishing for crests, logos and premium detail work.", ideal: "Crests / polo marks" },
  { id: "highdensity", name: "High-density", visual: "highdensity", description: "Raised applications that add tactile depth to selected graphics.", ideal: "Numbers / bold marks" },
  { id: "patch", name: "Patches", visual: "patch", description: "Custom crest and identity applications in multiple finishing styles.", ideal: "Heritage crests" },
  { id: "vinyl", name: "Vinyl / heat application", visual: "vinyl", description: "Clean single and multi-color cut graphics, fused for durability.", ideal: "Names / numbers / sponsors" },
  { id: "screenprint", name: "Screen printing", visual: "screenprint", description: "Ink-based printing suited to cotton builds and solid graphics.", ideal: "Tees / training wear" },
  { id: "transfer", name: "Transfer application", visual: "transfer", description: "Digitally produced graphics applied by heat.", ideal: "Complex multicolor artwork" },
  { id: "wovenlabel", name: "Woven labels", visual: "woven", description: "Fine-woven identity tags for premium finishing.", ideal: "Neck labels / hem tabs" },
  { id: "applique", name: "Appliqué", visual: "applique", description: "Fabric-on-fabric layering for dimensional identity.", ideal: "Heritage marks / tonal logos" },
];

export const patterns: { id: PatternId; name: string }[] = [
  { id: "solid", name: "Solid" },
  { id: "gradient", name: "Gradient" },
  { id: "geometric", name: "Geometric" },
  { id: "stripe", name: "Stripe" },
  { id: "topographic", name: "Topographic" },
  { id: "abstract", name: "Abstract" },
  { id: "heritage", name: "Heritage" },
  { id: "digital", name: "Digital" },
  { id: "custom", name: "Custom artwork" },
];

export const textures = [
  { id: "smooth", name: "Smooth" },
  { id: "mesh", name: "Mesh" },
  { id: "ribbed", name: "Ribbed" },
  { id: "knit", name: "Knit" },
  { id: "raised", name: "Raised" },
  { id: "brushed", name: "Brushed" },
  { id: "perforated", name: "Perforated" },
  { id: "structured", name: "Structured" },
];

export type Placement = { id: string; name: string; x: number; y: number };

export const placementsFront: Placement[] = [
  { id: "leftchest", name: "Left chest", x: 52, y: 78 },
  { id: "rightchest", name: "Right chest", x: 168, y: 78 },
  { id: "centerchest", name: "Center chest", x: 110, y: 96 },
  { id: "sleeve", name: "Sleeve", x: 30, y: 112 },
  { id: "hem", name: "Hem", x: 110, y: 214 },
  { id: "custom", name: "Custom placement", x: 72, y: 156 },
];

export const placementsBack: Placement[] = [
  { id: "backneck", name: "Back neck", x: 110, y: 46 },
  { id: "upperback", name: "Upper back", x: 110, y: 118 },
  { id: "lowerback", name: "Lower back", x: 110, y: 188 },
  { id: "shortsleg", name: "Shorts / leg", x: 110, y: 220 },
  { id: "custom", name: "Custom placement", x: 66, y: 150 },
];

export const personalizationFields = ["Player name", "Player number", "Team name", "Position", "Sponsor", "Crest", "Secondary marks"];

// ---- Customization levels (Three Ways Up) --------------------------------
// From the Crest Studio kit mockups: one jersey, three levels of build.

export const customizationLevels = [
  {
    index: "01",
    name: "Base Camp",
    tagline: "Pick a stock silhouette, set team colors, add your crest and numbers. The fastest route to a clean team kit.",
    specs: [
      ["Garment", "Match jersey"],
      ["Fabric", "Polyester"],
      ["Pattern", "Solid + trim"],
      ["Collar", "Crew neck, contrast"],
      ["Application", "Vinyl / heat"],
      ["Identity", "Crest + number"],
    ],
  },
  {
    index: "02",
    name: "Ascent",
    tagline: "Unlocks MEC pattern families, gradients, sponsor placement and collar choice, all sublimated into the fabric.",
    specs: [
      ["Garment", "Match jersey"],
      ["Fabric", "Performance polyester"],
      ["Pattern", "Gradient + topographic"],
      ["Collar", "V-neck, tipped"],
      ["Application", "Full sublimation"],
      ["Identity", "Crest, sponsor, sleeve mark"],
    ],
  },
  {
    index: "03",
    name: "Summit",
    tagline: "Everything open: bespoke artwork, re-cut panels, contrast stitching, embroidered crest, woven labels.",
    specs: [
      ["Garment", "Match jersey"],
      ["Fabric", "Performance polyester + mesh"],
      ["Pattern", "Custom artwork"],
      ["Collar", "Polo, double tipped"],
      ["Application", "Sublimation + embroidery"],
      ["Construction", "Side panels, contrast stitch"],
    ],
  },
];

export const levelMatrix = [
  { capability: "Color", base: "Team primary + trim", ascent: "Full palette + gradients", summit: "Unrestricted, incl. pattern overlays" },
  { capability: "Pattern", base: "Solid", ascent: "MEC families: gradient, topo, stripe, geometric", summit: "Custom artwork drawn per project" },
  { capability: "Collar", base: "Crew / V-neck", ascent: "+ contrast and rib collars", summit: "+ polo, stand, fully custom collar" },
  { capability: "Construction", base: "Stock cut", ascent: "Choice of sleeve length", summit: "Custom panels, seams, vents, stitching" },
  { capability: "Application", base: "Vinyl / heat", ascent: "Sublimation", summit: "Sublimation + embroidery, patches, high-density" },
  { capability: "Identity", base: "Crest, number", ascent: "+ name, sponsor, sleeve marks", summit: "+ woven labels, custom placement" },
];

// ---- Gradient series -------------------------------------------------------
// Six fades from the Crest Studio capability pages. Each entry pairs a
// three-stop fade with an existing pattern overlay, the way the mockups
// pair each gradient with an MEC pattern family.

export const gradientPresets: { id: string; name: string; overlay: string; stops: [string, string, string]; description: string }[] = [
  { id: "glacier", name: "Glacier / Crackle Stone", overlay: "Crackle Stone", stops: ["#2f6d80", "#2b4c6b", "#141c30"], description: "Teal to royal to midnight with a crackle stone overlay." },
  { id: "ember", name: "Ember / Halftone Fade", overlay: "Halftone Fade", stops: ["#e0a53c", "#d9531e", "#5c1f1f"], description: "Amber to vermilion to oxblood with a halftone fade overlay." },
  { id: "alpenglow", name: "Alpenglow / Topographic", overlay: "Topographic", stops: ["#e8b4c0", "#c2558f", "#54306e"], description: "Blush to magenta to violet over summit contour lines." },
  { id: "night-ascent", name: "Night Ascent / Pinstripe", overlay: "Pinstripe", stops: ["#8d9790", "#2b4c6b", "#111511"], description: "Slate to navy to black with a fine pinstripe overlay." },
  { id: "moss-ridge", name: "Moss Ridge / Pixel Dissolve", overlay: "Pixel Dissolve", stops: ["#c8e04a", "#6d8a3a", "#1f3d1e"], description: "Lime to moss to forest dissolving into a pixel field." },
  { id: "solar", name: "Solar / Shard Field", overlay: "Shard Field", stops: ["#f4e04d", "#f08a24", "#c2551e"], description: "Lemon to tangerine on a diagonal, over a shard field." },
];

// Gradient presets mapped onto the parametric pattern system, so each
// mockup gradient can render as a jersey with its overlay.
const gradientPattern: Record<string, PatternId> = {
  glacier: "abstract",
  ember: "digital",
  alpenglow: "topographic",
  "night-ascent": "stripe",
  "moss-ridge": "digital",
  solar: "geometric",
};

export const capabilityMatrix = [
  { group: "Garment", items: ["Jerseys", "Tees", "Polos", "Hoodies", "Jackets", "Shorts", "Pants", "Warm-ups", "Sleeveless"] },
  { group: "Construction", items: ["Sleeves", "Panels", "Collars", "Necklines", "Hoods", "Trim", "Seams"] },
  { group: "Material", items: ["Polyester", "Cotton", "Blends", "Mesh", "Performance knit", "Fleece", "Other approved fabrics"] },
  { group: "Application", items: ["Sublimation", "Embroidery", "Print", "High density", "Patch", "Vinyl / heat application", "Labels"] },
  { group: "Identity", items: ["Colors", "Gradients", "Patterns", "Names", "Numbers", "Crests", "Sponsors", "Custom artwork"] },
];

// ---- Customization gallery ------------------------------------------------

export const galleryCategories = ["All", "Jerseys", "Tops", "Hoodies", "Outerwear", "Shorts", "Details"] as const;
export const galleryTechniques = ["All", "Sublimation", "Embroidery", "Patch", "High density", "Print", "Construction", "Fabric", "Pattern"] as const;

export type ExampleDesign = {
  base: string;
  trim: string;
  pattern: PatternId;
  sleeve: SleeveId;
  collar: CollarId;
  number: string;
  // Vertical three-stop body fade, used for the gradient series
  // and the Glacier Rose colorway.
  gradientStops?: [string, string, string];
};

export type CustomizationExample = {
  id: string;
  title: string;
  category: (typeof galleryCategories)[number];
  sport: string;
  material: string;
  application: string;
  // null until real MEC photography lands; see customizationAssets.ts
  image: string | null;
  // Intrinsic dimensions of the delivered photo, for next/image.
  imageWidth?: number;
  imageHeight?: number;
  tags: string[];
  description: string;
  design?: ExampleDesign;
};

// The array is built to hold 40–60+ entries; add rows here and the
// gallery, filters and lightbox pick them up automatically.
export const customizationExamples: CustomizationExample[] = [
  { id: "northside-26", title: "Northside FC 2026 Kit", category: "Jerseys", sport: "Football", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Pattern", "Gradient"], description: "Full-sub dye with an angular gradient identity and acid trim.", design: { base: "#2b4c6b", trim: "#e2ef28", pattern: "gradient", sleeve: "short", collar: "crew", number: "7" } },
  { id: "ascent-heritage", title: "Ascent Heritage XI", category: "Jerseys", sport: "Soccer", material: "Polyester", application: "Embroidery", image: null, tags: ["Embroidery", "Heritage", "Patch"], description: "Ink-on-ink heritage bands with a tonal embroidered crest.", design: { base: "#1e2420", trim: "#d9e2de", pattern: "heritage", sleeve: "long", collar: "rib", number: "9" } },
  { id: "summit-cricket", title: "Summit Cricket Club", category: "Jerseys", sport: "Cricket", material: "Mesh", application: "Patches", image: null, tags: ["Patch", "Stripe", "Contrast"], description: "Club whites split by a coral stripe with a woven club patch.", design: { base: "#d9e2de", trim: "#a3342c", pattern: "stripe", sleeve: "half", collar: "v", number: "3" } },
  { id: "courtline-set", title: "Courtline Pickleball Set", category: "Tops", sport: "Pickleball", material: "Performance stretch", application: "Screen printing", image: null, tags: ["Print", "Geometric"], description: "Muted geometric tile print on a stretch court top.", design: { base: "#e9eee9", trim: "#e7664e", pattern: "geometric", sleeve: "cap", collar: "crew", number: "5" } },
  { id: "topo-training", title: "Topo Training Series", category: "Jerseys", sport: "Football", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Topographic", "Pattern"], description: "Contour-line artwork drawn from summit elevation data.", design: { base: "#3c5a3a", trim: "#e2ef28", pattern: "topographic", sleeve: "short", collar: "contrast", number: "12" } },
  { id: "altitude-88", title: "Altitude Match 88", category: "Jerseys", sport: "Soccer", material: "Polyester", application: "High density", image: null, tags: ["High density", "Numbers"], description: "Raised high-density numbers over a stone base tone.", design: { base: "#8d9790", trim: "#1e2420", pattern: "solid", sleeve: "threequarter", collar: "crew", number: "8" } },
  { id: "studio-slab", title: "Crest Studio Test Slab", category: "Details", sport: "Athleisure", material: "Technical knit", application: "Embroidery", image: null, tags: ["Embroidery", "Construction", "Fabric"], description: "Macro stitch and knit studies from the studio bench." },
  { id: "ridge-overshirt", title: "Ridge Overshirt", category: "Outerwear", sport: "Athleisure", material: "Brushed fleece", application: "Appliqué", image: null, tags: ["Appliqué", "Abstract", "Outerwear"], description: "Fabric-layered summit emblem on a brushed fleece shell.", design: { base: "#1e2420", trim: "#e7664e", pattern: "abstract", sleeve: "long", collar: "stand", number: "0" } },
  { id: "baseline-tee", title: "Baseline Club Tee", category: "Tops", sport: "Basketball", material: "Cotton / poly blend", application: "Screen printing", image: null, tags: ["Print", "Digital"], description: "Halftone digital print across a relaxed club tee.", design: { base: "#e9eee9", trim: "#1e2420", pattern: "digital", sleeve: "short", collar: "crew", number: "24" } },
  { id: "volley-warmup", title: "Volley Club Warm-Up", category: "Outerwear", sport: "Volleyball", material: "Performance stretch", application: "Vinyl / heat application", image: null, tags: ["Vinyl / heat application", "Geometric"], description: "Cut vinyl shoulder geometry on a two-way stretch shell.", design: { base: "#2b4c6b", trim: "#e2ef28", pattern: "geometric", sleeve: "long", collar: "stand", number: "11" } },
  { id: "crest-polo", title: "Crest Club Polo", category: "Tops", sport: "Cricket", material: "Piqué", application: "Embroidery", image: null, tags: ["Embroidery", "Polo"], description: "Piqué polo with dimensional crest and placket detailing.", design: { base: "#d9e2de", trim: "#3c5a3a", pattern: "solid", sleeve: "short", collar: "polo", number: "4" } },
  { id: "track-study", title: "Track Pant Study", category: "Shorts", sport: "Running", material: "Polyester", application: "Transfer application", image: null, tags: ["Transfer application", "Stripe"], description: "Tape-style transfer striping down the leg line.", design: { base: "#1e2420", trim: "#e2ef28", pattern: "stripe", sleeve: "sleeveless", collar: "crew", number: "10" } },
  { id: "hooded-crest", title: "Hooded Crest Layer", category: "Hoodies", sport: "Athleisure", material: "Brushed fleece", application: "Woven labels", image: null, tags: ["Woven labels", "Fabric"], description: "Stone fleece with woven neck label and tonal hood lining.", design: { base: "#8d9790", trim: "#1e2420", pattern: "solid", sleeve: "long", collar: "crew", number: "18" } },
  { id: "vented-tee", title: "Vented Match Tee", category: "Tops", sport: "Football", material: "Mesh", application: "Construction", image: null, tags: ["Construction", "Fabric", "Ventilation"], description: "Laser-cut ventilation zones placed along the stress map.", design: { base: "#e9eee9", trim: "#2b4c6b", pattern: "solid", sleeve: "sleeveless", collar: "crew", number: "2" } },
  { id: "heritage-hoops", title: "Heritage Hoops Kit", category: "Jerseys", sport: "Basketball", material: "Interlock", application: "Patches", image: null, tags: ["Patch", "Heritage"], description: "Hooped heritage pattern with a layered felt crest.", design: { base: "#a3342c", trim: "#e9eee9", pattern: "heritage", sleeve: "short", collar: "rib", number: "6" } },
  { id: "digital-pre", title: "Digital Pre-Match Top", category: "Tops", sport: "Soccer", material: "Performance polyester", application: "Transfer application", image: null, tags: ["Transfer application", "Digital"], description: "Pixel-grid artwork on a pre-match warm-up top.", design: { base: "#1e2420", trim: "#e2ef28", pattern: "digital", sleeve: "half", collar: "v", number: "21" } },

  // ---- Rose Vein colorways (signature artwork 01) ------------------------
  // The purple / gold heritage colorway is excluded per direction; these
  // three studies carry the rose vein artwork in its other moods. Renders
  // here are parametric colorway studies until artwork photography lands.

  { id: "rose-obsidian", title: "Rose Vein · Obsidian", category: "Jerseys", sport: "Football", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Rose Vein", "Artwork"], description: "Black body, crimson hem band, crimson roses with silver veins. Stand collar. Night match, alternate kit.", design: { base: "#141619", trim: "#a3342c", pattern: "solid", sleeve: "long", collar: "stand", number: "11" } },
  { id: "rose-ivory", title: "Rose Vein · Ivory Bloom", category: "Jerseys", sport: "Soccer", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Rose Vein", "Artwork"], description: "Ivory body with petals across the front, blush roses and sage leaves. V-neck with blush trim. Heritage, ceremony, supporter.", design: { base: "#eae3d5", trim: "#d8a7a0", pattern: "solid", sleeve: "long", collar: "v", number: "11" } },
  { id: "rose-glacier", title: "Rose Vein · Glacier", category: "Jerseys", sport: "Football", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Rose Vein", "Gradient"], description: "Teal-to-navy body with topographic lines and ice-white roses. Polo collar, ice tipped. Winter training, keeper.", design: { base: "#2f6d80", trim: "#e9eee9", pattern: "topographic", sleeve: "long", collar: "polo", number: "11", gradientStops: ["#2f6d80", "#2b4c6b", "#141c30"] } },

  // ---- Gradient series (capability 01 + 11) --------------------------------

  { id: "grad-glacier", title: "Glacier · Crackle Stone", category: "Jerseys", sport: "Football", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Pattern"], description: "Teal to royal to midnight with a crackle stone overlay. Full sublimation on performance polyester.", design: { base: "#2f6d80", trim: "#e9eee9", pattern: gradientPattern.glacier, sleeve: "short", collar: "crew", number: "11", gradientStops: gradientPresets[0].stops } },
  { id: "grad-ember", title: "Ember · Halftone Fade", category: "Jerseys", sport: "Soccer", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Pattern"], description: "Amber to vermilion to oxblood with a halftone fade overlay. Full sublimation on performance polyester.", design: { base: "#e0a53c", trim: "#1e2420", pattern: gradientPattern.ember, sleeve: "short", collar: "crew", number: "9", gradientStops: gradientPresets[1].stops } },
  { id: "grad-alpenglow", title: "Alpenglow · Topographic", category: "Jerseys", sport: "Running", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Topographic"], description: "Blush to magenta to violet over summit contour lines. Full sublimation on performance polyester.", design: { base: "#e8b4c0", trim: "#1e2420", pattern: gradientPattern.alpenglow, sleeve: "short", collar: "v", number: "7", gradientStops: gradientPresets[2].stops } },
  { id: "grad-night", title: "Night Ascent · Pinstripe", category: "Jerseys", sport: "Basketball", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Stripe"], description: "Slate to navy to black with a fine pinstripe overlay. Full sublimation on performance polyester.", design: { base: "#8d9790", trim: "#e9eee9", pattern: gradientPattern["night-ascent"], sleeve: "short", collar: "crew", number: "3", gradientStops: gradientPresets[3].stops } },
  { id: "grad-moss", title: "Moss Ridge · Pixel Dissolve", category: "Jerseys", sport: "Running", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Digital"], description: "Lime to moss to forest dissolving into a pixel field. Full sublimation on performance polyester.", design: { base: "#c8e04a", trim: "#1e2420", pattern: gradientPattern["moss-ridge"], sleeve: "short", collar: "crew", number: "21", gradientStops: gradientPresets[4].stops } },
  { id: "grad-solar", title: "Solar · Shard Field", category: "Jerseys", sport: "Volleyball", material: "Performance polyester", application: "Sublimation", image: null, tags: ["Sublimation", "Gradient", "Geometric"], description: "Lemon to tangerine on a diagonal, over a shard field. Full sublimation on performance polyester.", design: { base: "#f4e04d", trim: "#1e2420", pattern: gradientPattern.solar, sleeve: "short", collar: "crew", number: "6", gradientStops: gradientPresets[5].stops } },

  // ---- Cotton line (off-field) ----------------------------------------------

  { id: "cotton-summit", title: "Cotton · Summit Halftone", category: "Tops", sport: "Cricket", material: "Cotton", application: "Screen printing", image: null, tags: ["Print", "Cotton", "Halftone"], description: "Heavyweight black cotton, two-color screen print with a halftone peak and distressed finish. MEC mark, top right.", design: { base: "#16181a", trim: "#e9eee9", pattern: "digital", sleeve: "short", collar: "crew", number: "11" } },
  { id: "cotton-topo", title: "Cotton · Topo Crest", category: "Tops", sport: "Soccer", material: "Cotton / poly blend", application: "Screen printing", image: null, tags: ["Print", "Cotton", "Topographic"], description: "Heather grey cotton / poly, one-color screen print with a contour badge and shoulder topo. Club wordmark on the back.", design: { base: "#b9bfb9", trim: "#2b4c6b", pattern: "topographic", sleeve: "short", collar: "crew", number: "02" } },
  { id: "cotton-vintage", title: "Cotton · Vintage Club", category: "Tops", sport: "Athleisure", material: "Cotton", application: "Screen printing", image: null, tags: ["Print", "Cotton", "Heritage"], description: "Cream midweight cotton with a cracked screen print: arched varsity and worn number. Navy rib collar.", design: { base: "#e8e0cc", trim: "#22344d", pattern: "heritage", sleeve: "short", collar: "rib", number: "47" } },
  { id: "cotton-rose", title: "Cotton · Rose Line", category: "Tops", sport: "Athleisure", material: "Cotton", application: "Transfer application", image: null, tags: ["Transfer application", "Cotton", "Rose Vein"], description: "Washed charcoal cotton with a full-color transfer: sleeve vine and back bloom. Pairs with the Obsidian Rose jersey.", design: { base: "#3a3d40", trim: "#e8b4c0", pattern: "solid", sleeve: "long", collar: "crew", number: "11" } },
];
