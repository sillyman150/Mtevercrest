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

// gsmRange stays null until MEC confirms production ranges —
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

export const hoods = [
  { id: "none", name: "No hood", note: "Clean neckline" },
  { id: "standard", name: "Standard hood", note: "Classic off-field build" },
  { id: "performance", name: "Performance hood", note: "Cut for movement" },
  { id: "contrast", name: "Contrast hood", note: "Color-blocked interior" },
  { id: "custom", name: "Custom hood construction", note: "Talk to Crest Studio" },
];

export const constructionFeatures = [
  { name: "Panel layout", note: "Panel shapes tuned per silhouette." },
  { name: "Seam placement", note: "Seams positioned for fit and strength." },
  { name: "Reinforced stress areas", note: "Extra structure where garments work hardest." },
  { name: "Contrast stitching", note: "Stitch color used as a design element." },
  { name: "Flatlock-style construction", note: "Low-profile seams for next-to-skin comfort." },
  { name: "Custom panel shapes", note: "Non-standard blocking for unique kits." },
  { name: "Side panels", note: "Contrast or tonal body inserts." },
  { name: "Shoulder panels", note: "Structured shoulder construction." },
  { name: "Ventilation panels", note: "Open zones placed for airflow." },
  { name: "Trim placement", note: "Collar, cuff and hem finishing." },
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

export const buildSteps = [
  { index: "01", title: "Choose garment", key: "garment" },
  { index: "02", title: "Choose construction", key: "construction" },
  { index: "03", title: "Choose material", key: "material" },
  { index: "04", title: "Choose color", key: "color" },
  { index: "05", title: "Choose artwork", key: "artwork" },
  { index: "06", title: "Add logos", key: "logos" },
  { index: "07", title: "Add personalization", key: "personalization" },
  { index: "08", title: "Review", key: "review" },
];

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
};

export type CustomizationExample = {
  id: string;
  title: string;
  category: (typeof galleryCategories)[number];
  sport: string;
  material: string;
  application: string;
  // null until real MEC photography lands — see customizationAssets.ts
  image: string | null;
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
];
