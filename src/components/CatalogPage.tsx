import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { products, sports, type CatalogItem } from "@/data/catalog";

type CatalogPageProps = { mode: "sports" | "collection" | "new" };

export default function CatalogPage({ mode }: CatalogPageProps) {
  const isSports = mode === "sports";
  const visibleProducts: CatalogItem[] = mode === "new" ? products.filter((product) => product.badge === "NEW" || product.badge === "CUSTOMIZABLE") : products;
  const title = isSports ? <>Find your<br /><em>game.</em></> : mode === "new" ? <>New &<br /><em>featured.</em></> : <>The full<br /><em>collection.</em></>;
  const intro = isSports ? "Every arena, one point of view. Explore teamwear designed for the game you play and the identity you build." : mode === "new" ? "Fresh silhouettes, new team essentials and the pieces making the next ascent." : "Performance layers, custom kits and off-field pieces, all in one place.";

  return <main className="catalog-page">
    <header className="catalog-header"><Link className="brand-mark" href="/"><span className="crest">M</span><span>MOUNT EVEREST<br /><b>CREST</b></span></Link><nav><Link href="/new-featured">New & featured</Link><Link href="/sports">Sports</Link><Link href="/#customize">Customize</Link><Link href="/collection">The collection</Link></nav><Link className="catalog-back" href="/">Back to home <ArrowRight size={15} /></Link></header>
    <section className="catalog-hero"><span className="eyebrow">Mount Everest Crest / explore</span><h1>{title}</h1><p>{intro}</p></section>
    {isSports ? <section className="catalog-sports"><div className="catalog-section-head"><span className="eyebrow">08 arenas</span><span>Choose your category <ChevronDown size={14} /></span></div><div className="catalog-sport-grid">{sports.map((sport, index) => <Link className="catalog-sport-card" href="/sports" key={sport.name}><div className="catalog-sport-image" style={{ backgroundImage: `url(${sport.image})` }} /><div className="catalog-sport-shade" /><div className="catalog-sport-copy"><span>0{index + 1}</span><h2>{sport.name}</h2><p>{sport.detail}</p><ArrowUpRight size={20} /></div></Link>)}</div></section> : <section className="catalog-products"><div className="catalog-section-head"><span className="eyebrow">{visibleProducts.length} pieces</span><span>Filter / sort <ChevronDown size={14} /></span></div><div className="catalog-product-grid">{visibleProducts.map((product) => <article className="catalog-product" key={product.name}><div className="catalog-product-image" style={{ backgroundImage: `url(${product.image})` }}><span>{product.badge}</span></div><div><h2>{product.name}</h2><p>{product.category}<strong>{product.price}</strong></p></div></article>)}</div></section>}
    <footer className="catalog-footer"><span>Built for the ascent.</span><Link href="/sports">Explore all sports <ArrowRight size={15} /></Link><Link href="/collection">View the collection <ArrowRight size={15} /></Link></footer>
  </main>;
}
