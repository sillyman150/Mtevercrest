export type CatalogItem = {
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string;
};

export const sports = [
  { name: "Football", detail: "Game jerseys / team packages", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=85" },
  { name: "Soccer", detail: "Match kits / training layers", image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85" },
  { name: "Cricket", detail: "Match whites / club identity", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85" },
  { name: "Pickleball", detail: "Court-ready / effortless", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=85" },
  { name: "Basketball", detail: "Court kits / warm-ups", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85" },
  { name: "Volleyball", detail: "Club uniforms / layers", image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=85" },
  { name: "Running", detail: "Race day / training", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85" },
  { name: "Athleisure", detail: "Off-field / everyday", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85" },
];

export const products: CatalogItem[] = [
  { name: "Altitude Match Jersey", category: "Football", price: "$68", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=85", badge: "CUSTOMIZABLE" },
  { name: "Crest Training Short", category: "Performance", price: "$42", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85", badge: "TEAM FAVORITE" },
  { name: "Summit Quarter Zip", category: "Athleisure", price: "$96", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=900&q=85", badge: "NEW" },
  { name: "Contour Warm-Up", category: "Soccer", price: "$88", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=85", badge: "CUSTOMIZABLE" },
  { name: "Crest Club Polo", category: "Cricket", price: "$74", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=900&q=85", badge: "NEW" },
  { name: "Courtline Performance Top", category: "Pickleball", price: "$54", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=85", badge: "TEAM FAVORITE" },
  { name: "Summit Track Pant", category: "Athleisure", price: "$84", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85", badge: "NEW" },
  { name: "Ascent Team Jacket", category: "Teamwear", price: "$118", image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85", badge: "CUSTOMIZABLE" },
];