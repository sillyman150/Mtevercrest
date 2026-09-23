"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { products, sports, type CatalogItem } from "@/data/catalog";

const campaignImages = [
  { image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=85", title: "Northside FC", meta: "Football / 2025 match kit" },
  { image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=85", title: "Made for the ninety", meta: "Soccer / Match collection" },
  { image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=85", title: "Rise together", meta: "Performance / Team training" },
];

const buildStages = [
  { index: "01", title: "Performance fabric", copy: "Lightweight moisture-management construction for the moments that decide the match." },
  { index: "02", title: "Your identity", copy: "Color, crest, number and name become one unmistakable team language." },
  { index: "03", title: "Precision finish", copy: "Reinforced seams and integrated graphics, built to stay sharp under pressure." },
];

// Real production pieces from the bench (see /public/images/from-the-bench)
// shown per stage instead of a drawn jersey.
const stagePieces = [
  { src: "/images/from-the-bench/gaa-navy-red.webp", width: 900, height: 792, alt: "GAA match jersey in navy, red and white", label: "GAA Match Jersey 01 / Navy · Red · White" },
  { src: "/images/from-the-bench/white-yellow-geometric.webp", width: 900, height: 737, alt: "Match jersey in white, yellow and black with a geometric X", label: "Match Jersey 02 / White · Yellow · Black" },
  { src: "/images/from-the-bench/strasbourg-front.webp", width: 900, height: 794, alt: "Match jersey with a teal-to-navy gradient", label: "Match Jersey 09 / Teal-to-Navy Gradient" },
];

function ProductCard({ product }: { product: CatalogItem }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
        <span className="product-badge">{product.badge}</span>
        <button aria-label={`Save ${product.name}`} onClick={() => setSaved(!saved)} className={saved ? "active-icon" : ""}>
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
          <span>{product.category}</span>
        </div>
        <strong>{product.price}</strong>
      </div>
    </article>
  );
}

export default function MECHome() {
  const [activeStage, setActiveStage] = useState(0);
  const campaignRailRef = useRef<HTMLDivElement>(null);
  const sportRailRef = useRef<HTMLDivElement>(null);

  const moveRail = (rail: React.RefObject<HTMLDivElement | null>, direction: number) => {
    rail.current?.scrollBy({ left: direction * Math.min(560, rail.current.clientWidth * 0.78), behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Football player in a dark performance kit" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow light">MEC / 001 - THE ASCENT</span>
          <h1>
            Climb
            <br />
            <em>to the top.</em>
          </h1>
          <p>Custom performance apparel for teams that expect more of themselves.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#sports">
              Explore sports <ArrowRight size={17} />
            </a>
            <Link className="text-link light-link" href="/customize">
              Start customizing <ArrowDownRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-foot">
          <span>Mount Everest Crest</span>
          <span>01 / 04</span>
          <span className="scroll-note">
            Scroll to ascend <ArrowDownRight size={15} />
          </span>
        </div>
      </section>

      <section className="campaign section-dark" id="story">
        <div className="section-intro">
          <div>
            <span className="eyebrow lime">The standard is higher</span>
            <h2>
              Made for the
              <br />
              <em>whole story.</em>
            </h2>
          </div>
          <p>From first sketch to final whistle, every MEC piece carries the identity of the team wearing it.</p>
        </div>
        <div className="campaign-rail" ref={campaignRailRef}>
          {campaignImages.map((item) => (
            <article className="campaign-card" key={item.title}>
              <div className="campaign-image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="campaign-caption">
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.meta}</span>
                </div>
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
        <div className="rail-controls">
          <span>Drag or use the arrows</span>
          <div>
            <button aria-label="Previous campaign" onClick={() => moveRail(campaignRailRef, -1)}>
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next campaign" onClick={() => moveRail(campaignRailRef, 1)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="sport-section" id="sports">
        <div className="section-intro contained">
          <div>
            <span className="eyebrow">Choose your arena</span>
            <h2>
              Find your
              <br />
              <em>game.</em>
            </h2>
          </div>
          <Link className="text-link" href="/sports">
            Shop all sports <ArrowRight size={17} />
          </Link>
        </div>
        <div className="sport-grid" ref={sportRailRef}>
          {sports.map((sport, index) => (
            <Link className={`sport-card sport-${index}`} href="/sports" key={sport.name}>
              <div className="sport-image" style={{ backgroundImage: `url(${sport.image})` }} />
              <div className="sport-overlay" />
              <div className="sport-copy">
                <span>0{index + 1}</span>
                <h3>{sport.name}</h3>
                <p>{sport.detail}</p>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          ))}
        </div>
        <div className="sport-controls">
          <span>Explore all eight sports</span>
          <div>
            <button aria-label="Previous sport" onClick={() => moveRail(sportRailRef, -1)}>
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next sport" onClick={() => moveRail(sportRailRef, 1)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="deconstruction section-cream" id="customize">
        <div className="deconstruct-copy">
          <span className="eyebrow">The MEC method</span>
          <h2>
            Built
            <br />
            <em>different.</em>
          </h2>
          <p>Every detail has a purpose. Explore the anatomy of an MEC jersey and see where your identity takes shape.</p>
          <div className="stage-list">
            {buildStages.map((stage, index) => (
              <button className={activeStage === index ? "selected" : ""} onClick={() => setActiveStage(index)} key={stage.index}>
                <span>{stage.index}</span>
                <strong>{stage.title}</strong>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
          <Link className="text-link deconstruct-cta" href="/customize">
            Explore customization <ArrowRight size={16} />
          </Link>
        </div>
        <div className="jersey-stage">
          <div className="stage-number">
            0{activeStage + 1}
            <span>/03</span>
          </div>
          <div className="jersey-shadow" />
          <Image key={activeStage} className="jersey-photo" src={stagePieces[activeStage].src} alt={stagePieces[activeStage].alt} width={stagePieces[activeStage].width} height={stagePieces[activeStage].height} loading="eager" />
          <div className="stage-caption">
            <span>
              {buildStages[activeStage].index} / {buildStages[activeStage].title}
            </span>
            <p>{buildStages[activeStage].copy}</p>
            <em>{stagePieces[activeStage].label}</em>
          </div>
          <div className="stage-progress">
            <span className="filled" style={{ width: `${((activeStage + 1) / 3) * 100}%` }} />
          </div>
        </div>
      </section>

      <section className="product-section" id="products">
        <div className="section-intro contained">
          <div>
            <span className="eyebrow">The collection</span>
            <h2>
              Performance
              <br />
              <em>in rotation.</em>
            </h2>
          </div>
          <Link className="text-link" href="/collection">
            View all pieces <ArrowRight size={17} />
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </section>

      <section className="teams-banner" id="teams">
        <div className="teams-image" />
        <div className="teams-content">
          <span className="eyebrow light">For the whole roster</span>
          <h2>
            One team.
            <br />
            <em>One identity.</em>
          </h2>
          <p>Design a kit that makes every player feel part of something bigger.</p>
          <a className="button button-white" href="mailto:teams@mounteverestcrest.com">
            Request a team quote <ArrowRight size={17} />
          </a>
        </div>
        <span className="banner-coordinates">27°59&apos;16&quot;N / 86°55&apos;31&quot;E</span>
      </section>

      <section className="process-section">
        <div className="section-intro contained">
          <div>
            <span className="eyebrow">From idea to game day</span>
            <h2>
              The summit
              <br />
              <em>is earned.</em>
            </h2>
          </div>
          <p>One clear process, shaped around your team and built to move with purpose.</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "Create", "Choose your sport, silhouette, colors and identity."],
            ["02", "Refine", "Finalize artwork, sizing and the details that matter."],
            ["03", "Compete", "Your team receives a unified kit, ready for the moment."],
          ].map(([number, title, copy]) => (
            <div className="process-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={20} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
