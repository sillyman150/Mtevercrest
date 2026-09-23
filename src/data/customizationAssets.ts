// Manifest of the photography and assets the Customize page still needs.
// status: "placeholder": currently shown as an SVG/CSS placeholder.
//         "planned":   slot is designed, asset not yet requested.
//         "delivered": real asset in place; deliveredPath points at it.
//
// Delivered so far:
//  - "From the bench" production pieces: /public/images/from-the-bench/
//    (seven transparent garment renders, listed in src/data/archive.ts)
// When a real asset is produced, drop it into /public/images/customize/<folder>/
// and update the matching data entry to point at it.

export type CustomizationAsset = {
  assetName: string;
  suggestedShot: string;
  aspectRatio: string;
  usage: string;
  status: "placeholder" | "planned" | "delivered";
  deliveredPath?: string;
};

export const customizationAssets: CustomizationAsset[] = [
  { assetName: "embroidery-closeup-01", suggestedShot: "Macro photograph of embroidered team crest", aspectRatio: "4:5", usage: "Embroidery capability card", status: "placeholder" },
  { assetName: "sublimation-closeup-01", suggestedShot: "Macro of all-over sublimated pattern on performance fabric", aspectRatio: "4:5", usage: "Sublimation capability card", status: "placeholder" },
  { assetName: "highdensity-closeup-01", suggestedShot: "Macro of raised high-density number, low angle light", aspectRatio: "4:5", usage: "High-density capability card", status: "placeholder" },
  { assetName: "patch-closeup-01", suggestedShot: "Woven crest patch held against jersey fabric", aspectRatio: "4:5", usage: "Patch capability card", status: "placeholder" },
  { assetName: "vinyl-closeup-01", suggestedShot: "Macro of cut vinyl name application edge", aspectRatio: "4:5", usage: "Vinyl / heat capability card", status: "placeholder" },
  { assetName: "screenprint-closeup-01", suggestedShot: "Halftone screen print on cotton tee, macro", aspectRatio: "4:5", usage: "Screen printing capability card", status: "placeholder" },
  { assetName: "transfer-closeup-01", suggestedShot: "Macro of transfer graphic surface on knit", aspectRatio: "4:5", usage: "Transfer capability card", status: "placeholder" },
  { assetName: "woven-label-01", suggestedShot: "Woven label sewn at neckline", aspectRatio: "4:5", usage: "Woven labels capability card", status: "placeholder" },
  { assetName: "applique-closeup-01", suggestedShot: "Tonal appliqué fabric layer on dark base", aspectRatio: "4:5", usage: "Appliqué capability card", status: "placeholder" },
  { assetName: "collar-crew-01", suggestedShot: "Flat-lay crew neckline, technical studio light", aspectRatio: "1:1", usage: "Collar selection detail", status: "planned" },
  { assetName: "collar-polo-01", suggestedShot: "Polo collar placket macro with buttons", aspectRatio: "1:1", usage: "Collar selection detail", status: "planned" },
  { assetName: "sleeve-cuff-01", suggestedShot: "Cuff and sleeve seam macro", aspectRatio: "1:1", usage: "Sleeve / construction detail", status: "planned" },
  { assetName: "texture-mesh-01", suggestedShot: "Mesh fabric macro backlit", aspectRatio: "1:1", usage: "Texture section tile", status: "placeholder" },
  { assetName: "texture-ribbed-01", suggestedShot: "Ribbed knit fabric macro, side light", aspectRatio: "1:1", usage: "Texture section tile", status: "placeholder" },
  { assetName: "texture-brushed-01", suggestedShot: "Brushed fleece interior macro", aspectRatio: "1:1", usage: "Texture section tile", status: "placeholder" },
  { assetName: "texture-perforated-01", suggestedShot: "Laser perforation pattern macro", aspectRatio: "1:1", usage: "Texture section tile", status: "placeholder" },
  { assetName: "construction-seams-01", suggestedShot: "Inside-out jersey showing flatlock seams", aspectRatio: "4:5", usage: "Construction section", status: "planned" },
  { assetName: "construction-panels-01", suggestedShot: "Exploded panel layout on cutting table", aspectRatio: "4:5", usage: "Construction section", status: "planned" },
  { assetName: "example-gallery-01", suggestedShot: "Full kit on studio background, frontal view", aspectRatio: "4:5", usage: "What's possible gallery", status: "delivered", deliveredPath: "/images/from-the-bench/gaa-navy-red.webp" },
  { assetName: "example-gallery-02", suggestedShot: "Detail crop of kit identity elements", aspectRatio: "4:5", usage: "What's possible gallery", status: "delivered", deliveredPath: "/images/from-the-bench/strasbourg-front.webp" },
  { assetName: "hero-customize-01", suggestedShot: "Athlete wearing custom kit, dramatic side light", aspectRatio: "16:9", usage: "Customize hero background", status: "planned" },
];
