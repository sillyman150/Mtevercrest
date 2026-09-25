import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { markets, offFieldRange, products, sports, type CatalogItem } from "@/data/catalog";

type CatalogPageProps = { mode: "sports" | "collection" | "new" };

const modeLabel = { sports: "Sports", collection: "The collection", new: "New & featured" } as const;

export default function CatalogPage({ mode }: CatalogPageProps) {
  const isSports = mode === "sports";
  const visibleProducts: CatalogItem[] = mode === "new" ? products.filter((product) => product.badge === "NEW" || product.badge === "CUSTOMIZABLE") : products;
  const title = isSports ? <>Find your<br /><em>game.</em></> : mode === "new" ? <>New &<br /><em>featured.</em></> : <>The full<br /><em>collection.</em></>;
  const intro = isSports ? "Every arena, one point of view — and everything off the field too. Explore teamwear for the game you play and the days in between." : mode === "new" ? "Fresh silhouettes, new team essentials and the pieces making the next ascent." : "Performance layers, custom kits and off-field pieces, all in one place.";

  return <main className="catalog-page">
    <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{modeLabel[mode]}</span></div>
    <section className="catalog-hero"><span className="eyebrow">Mount Everest Crest / explore</span><h1>{title}</h1><p>{intro}</p></section>
    {isSports ? <section className="catalog-sports"><div className="catalog-section-head"><span className="eyebrow">08 arenas</span><span>Choose your category <ChevronDown size={14} /></span></div><div className="catalog-sport-grid">{sports.map((sport, index) => <Link className="catalog-sport-card" href="/sports" key={sport.name}><div className="catalog-sport-image" style={{ backgroundImage: `url(${sport.image})` }} /><div className="catalog-sport-shade" /><div className="catalog-sport-copy"><span>0{index + 1}</span><h2>{sport.name}</h2><p>{sport.detail}</p><ArrowUpRight size={20} /></div></Link>)}</div></section> : <section className="catalog-products"><div className="catalog-section-head"><span className="eyebrow">{visibleProducts.length} pieces</span><span>Filter / sort <ChevronDown size={14} /></span></div><div className="catalog-product-grid">{visibleProducts.map((product) => <article className="catalog-product" key={product.name}><div className="catalog-product-image" style={{ backgroundImage: `url(${product.image})` }}><span>{product.badge}</span></div><div><h2>{product.name}</h2><p>{product.category}<strong>{product.price}</strong></p></div></article>)}</div></section>}
    {isSports && <>
      <section className="catalog-offfield">
        <div className="catalog-section-head"><span className="eyebrow">Off-field range</span><span>Apparel beyond the arena</span></div>
        <div className="catalog-offfield-grid">{offFieldRange.map((item, index) => <article className="catalog-range-card" key={item.id}><span className="catalog-range-index">0{index + 1}</span><h2>{item.name}</h2><p>{item.note}</p></article>)}</div>
      </section>
      <section className="catalog-markets">
        <div className="catalog-section-head"><span className="eyebrow">Markets & use cases</span><span>Who we dress</span></div>
        <div className="catalog-markets-grid">{markets.map((market, index) => <article className="catalog-market-card" key={market.id}><span className="catalog-range-index">0{index + 1}</span><h2>{market.name}</h2><p>{market.note}</p></article>)}</div>
      </section>
    </>}
  </main>;
}
