"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import JerseySvg from "@/components/JerseySvg";
import { benchPieces } from "@/data/archive";
import {
  applications,
  buildSteps,
  capabilityMatrix,
  collarColorways,
  collars,
  constructionFeatures,
  customizationExamples,
  customizationLevels,
  fabrics,
  galleryCategories,
  galleryTechniques,
  garments,
  hoods,
  levelMatrix,
  patterns,
  placementsBack,
  placementsFront,
  personalizationFields,
  sleeves,
  textures,
  weightClasses,
  type CollarId,
  type PatternId,
  type SleeveId,
} from "@/data/customize";

const SWATCHES = [
  { name: "Summit yellow", hex: "#e2ef28" },
  { name: "Coral ascent", hex: "#e7664e" },
  { name: "Ink", hex: "#1e2420" },
  { name: "Ice", hex: "#d9e2de" },
  { name: "Summit blue", hex: "#2b4c6b" },
  { name: "Altitude red", hex: "#a3342c" },
  { name: "Stone", hex: "#8d9790" },
  { name: "Pitch green", hex: "#3c5a3a" },
];

const SPECTRUM = ["#1e2420", "#2b4c6b", "#2f6d80", "#3c5a3a", "#c4b550", "#e2ef28", "#d9e2de", "#e9eee9", "#8d9790", "#e7664e", "#a3342c", "#5a4632", "#1e2420"];

const CONSTRUCTION_OPTIONS = ["Standard construction", "Paneled construction", "Ventilation panels", "Contrast stitching", "Full custom"];
const LOGO_OPTIONS = ["Crest only", "Crest + secondary mark", "Crest + sponsor", "Custom artwork"];

function CustHead({ index, eyebrow, title, copy, dark = false }: { index: string; eyebrow: string; title: React.ReactNode; copy?: string; dark?: boolean }) {
  return (
    <div className={`cust-head ${dark ? "cust-head-dark" : ""}`}>
      <span className="cust-index">{index}</span>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function CustomizePage() {
  const [design, setDesign] = useState({
    base: "#e2ef28",
    trim: "#1e2420",
    pattern: "solid" as PatternId,
    sleeve: "short" as SleeveId,
    collar: "crew" as CollarId,
    number: "11",
    name: "",
    view: "front" as "front" | "back" | "detail",
  });
  const [saved, setSaved] = useState(false);
  const [garment, setGarment] = useState(garments[0].id);
  const [placeView, setPlaceView] = useState<"front" | "back">("front");
  const [activePlacement, setActivePlacement] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [build, setBuild] = useState({
    garment: "match-jersey",
    construction: "Standard construction",
    material: "Performance polyester",
    color: "#e2ef28",
    artwork: "solid" as PatternId,
    logos: "Crest only",
    name: "",
    number: "",
  });
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [technique, setTechnique] = useState<(typeof galleryTechniques)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const update = <K extends keyof typeof design>(key: K, value: (typeof design)[K]) => setDesign((d) => ({ ...d, [key]: value }));
  const setBuildField = <K extends keyof typeof build>(key: K, value: (typeof build)[K]) => setBuild((b) => ({ ...b, [key]: value }));

  const filteredExamples = useMemo(() => {
    // Real production pieces sit first in the archive, followed by
    // parametric studies; both flow through the same filters.
    const allExamples = [...benchPieces, ...customizationExamples];
    return allExamples.filter(
      (example) =>
        (category === "All" || example.category === category) &&
        (technique === "All" || example.tags.some((tag) => tag.toLowerCase() === technique.toLowerCase()))
    );
  }, [category, technique]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % filteredExamples.length));
      if (event.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + filteredExamples.length) % filteredExamples.length));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, filteredExamples.length]);

  const lightboxExample = lightbox !== null ? filteredExamples[lightbox] : null;
  const selectedGarment = garments.find((g) => g.id === garment);
  const placeList = placeView === "front" ? placementsFront : placementsBack;

  return (
    <main className="cust-page">
      <div className="catalog-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Customize</span>
      </div>

      {/* 01 · HERO */}
      <section className="cust-hero">
        <div className="cust-hero-art" aria-hidden="true">
          <svg viewBox="0 0 600 620" preserveAspectRatio="xMidYMid meet">
            <g fill="none" stroke="#e2ef28" strokeOpacity="0.14" strokeWidth="1.2">
              <ellipse cx="300" cy="360" rx="250" ry="290" />
              <ellipse cx="300" cy="360" rx="190" ry="230" />
              <ellipse cx="300" cy="360" rx="130" ry="170" />
              <ellipse cx="300" cy="360" rx="74" ry="108" />
            </g>
            <g fill="none" stroke="#e2ef28" strokeOpacity="0.4" strokeWidth="1.4">
              <path d="M300 120 L348 244 L252 244 Z" />
              <circle cx="300" cy="228" r="5" fill="#e2ef28" stroke="none" />
            </g>
          </svg>
        </div>
        <div className="cust-hero-content">
          <span className="eyebrow lime">Crest studio / build without limits</span>
          <h1>
            Your idea.
            <br />
            <em>Our build.</em>
          </h1>
          <p>From the first sketch to the final stitch, MEC can shape nearly every detail of your garment.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#preview">
              Start designing <ArrowRight size={17} />
            </a>
            <a className="text-link light-link" href="#applications">
              Explore capabilities <ArrowDownRight size={17} />
            </a>
          </div>
        </div>
        <span className="cust-hero-coords">27°59&apos;16&quot;N / 86°55&apos;31&quot;E · BUILD WITHOUT LIMITS</span>
      </section>

      {/* LEVELS · THREE WAYS UP */}
      <section className="cust-levels" id="levels">
        <CustHead
          index="00"
          eyebrow="Crest studio / customization levels"
          title={<>Three<br /><em>ways up.</em></>}
          copy="One jersey, three levels of build. Every level can be taken further with Crest Studio. These are starting points, not limits."
        />
        <div className="level-cards">
          {customizationLevels.map((level) => (
            <article className="level-card" key={level.index}>
              <span className="level-index">Tier {level.index}</span>
              <h3>{level.name}</h3>
              <p>{level.tagline}</p>
              <dl>
                {level.specs.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="level-matrix">
          <div className="level-matrix-head">
            <span>What each level unlocks</span>
            <div>
              {["Base Camp", "Ascent", "Summit"].map((tier) => (
                <i key={tier}>{tier}</i>
              ))}
            </div>
          </div>
          {levelMatrix.map((row) => (
            <div className="level-row" key={row.capability}>
              <strong>{row.capability}</strong>
              <span>{row.base}</span>
              <span>{row.ascent}</span>
              <span>{row.summit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 02 · LIVE JERSEY PREVIEW */}
      <section className="studio cust-preview" id="preview">
        <div className="studio-copy">
          <span className="eyebrow lime">Crest studio / live preview</span>
          <h2>
            Your team.
            <br />
            <em>Your design.</em>
          </h2>
          <p>Start with a point of view. Refine every line, color and detail until the kit feels unmistakably yours.</p>
          <ul className="cust-hint-list">
            <li>Silhouette</li>
            <li>Pattern</li>
            <li>Construction</li>
            <li>Material</li>
            <li>Stitching</li>
            <li>Color</li>
            <li>Graphics</li>
            <li>Identity</li>
          </ul>
        </div>
        <div className="studio-preview cust-jersey-preview">
          <div className="preview-top">
            <div className="cust-view-tabs">
              {(["front", "back", "detail"] as const).map((view) => (
                <button key={view} className={design.view === view ? "selected" : ""} onClick={() => update("view", view)}>
                  {view === "front" ? "Front view" : view === "back" ? "Back view" : "Detail view"}
                </button>
              ))}
            </div>
            <button aria-label="Save design" onClick={() => setSaved(!saved)} className={saved ? "active-icon" : ""}>
              <Heart size={18} fill={saved ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="cust-jersey-stage">
            <JerseySvg
              base={design.base}
              trim={design.trim}
              pattern={design.pattern}
              sleeve={design.sleeve}
              collar={design.collar}
              number={design.number}
              name={design.name}
              view={design.view === "detail" ? "front" : design.view}
              zoom={design.view === "detail"}
              className="cust-jersey-svg"
              ariaLabel="Live jersey preview"
            />
          </div>
          <div className="cust-controls">
            <div className="cust-control">
              <span>Base color</span>
              <div className="cust-swatches">
                {SWATCHES.map((swatch) => (
                  <button
                    key={swatch.hex}
                    className={design.base === swatch.hex ? "swatch selected" : "swatch"}
                    style={{ background: swatch.hex }}
                    aria-label={swatch.name}
                    onClick={() => update("base", swatch.hex)}
                  />
                ))}
              </div>
            </div>
            <div className="cust-control">
              <span>Trim color</span>
              <div className="cust-swatches">
                {SWATCHES.map((swatch) => (
                  <button
                    key={swatch.hex}
                    className={design.trim === swatch.hex ? "swatch selected" : "swatch"}
                    style={{ background: swatch.hex }}
                    aria-label={swatch.name}
                    onClick={() => update("trim", swatch.hex)}
                  />
                ))}
              </div>
            </div>
            <div className="cust-control">
              <span>Sleeve</span>
              <div className="cust-chips">
                {sleeves.map((s) => (
                  <button key={s.id} className={design.sleeve === s.id ? "chip selected" : "chip"} onClick={() => update("sleeve", s.id)}>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="cust-control">
              <span>Collar</span>
              <div className="cust-chips">
                {collars.map((c) => (
                  <button key={c.id} className={design.collar === c.id ? "chip selected" : "chip"} onClick={() => update("collar", c.id)}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="cust-control">
              <span>Pattern</span>
              <div className="cust-chips">
                {patterns.map((p) => (
                  <button key={p.id} className={design.pattern === p.id ? "chip selected" : "chip"} onClick={() => update("pattern", p.id)}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="cust-inputs">
              <label>
                Number
                <input value={design.number} onChange={(event) => update("number", event.target.value.replace(/\D/g, "").slice(0, 2))} placeholder="11" inputMode="numeric" />
              </label>
              <label>
                Name
                <input value={design.name} onChange={(event) => update("name", event.target.value.toUpperCase().slice(0, 14))} placeholder="SURNAME" />
              </label>
            </div>
          </div>
          <a className="preview-link" href="#builder">
            Customize this jersey <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* 03 · COLOR */}
      <section className="cust-colors" id="colors">
        <CustHead
          index="01"
          eyebrow="Capability / color"
          title={<>Any color.<br /><em>Any identity.</em></>}
          copy="Color is essentially unrestricted, subject to production. Match your existing identity or build an entirely new one. From primary body colors to micro-details, trims and graphics, MEC can develop a palette around your team."
        />
        <div className="cust-spectrum-wrap">
          <div className="cust-spectrum" style={{ background: `linear-gradient(90deg, ${SPECTRUM.join(",")})` }} />
          <div className="cust-spectrum-note">
            <span>A snapshot, not a limit.</span>
            <span>Palette developed per project</span>
          </div>
        </div>
        <div className="cust-roles">
          {["Team primary", "Team secondary", "Accent", "Trim", "Gradient", "Pattern overlay"].map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </section>

      {/* 04 · GARMENT TYPES */}
      <section className="cust-garments" id="garments">
        <CustHead
          index="02"
          eyebrow="Capability / garment"
          title={<>Start with<br /><em>the garment.</em></>}
          copy="Every project begins with a foundation. Pick the silhouette the team will actually play, train and travel in."
        />
        <div className="cust-garment-layout">
          <div className="cust-garment-grid">
            {garments.map((g, i) => (
              <button key={g.id} className={garment === g.id ? "garment-card selected" : "garment-card"} onClick={() => setGarment(g.id)}>
                <span className="garment-index">0{i + 1}</span>
                <strong>{g.name}</strong>
                <span>{g.note}</span>
              </button>
            ))}
          </div>
          <div className="cust-garment-stage">
            <JerseySvg base={design.base} trim={design.trim} pattern={design.pattern} sleeve={design.sleeve} collar={design.collar} number="00" className="cust-garment-svg" />
            <span className="cust-garment-label">Selected foundation / {selectedGarment?.name.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* 05 · FABRIC & WEIGHT */}
      <section className="cust-fabric" id="fabric">
        <CustHead
          index="03"
          eyebrow="Capability / material"
          title={<>Choose<br /><em>the feel.</em></>}
          copy="The hand of the fabric changes the whole garment. MEC works across a range of constructions, each one selected for how it performs."
        />
        <div className="fabric-grid">
          {fabrics.map((fabric) => (
            <div className="fabric-card" key={fabric.id}>
              <div className={`fabric-tile f-${fabric.id}`} />
              <h3>{fabric.name}</h3>
              <p>{fabric.note}</p>
            </div>
          ))}
        </div>
        <div className="cust-weight-block">
          <div className="cust-weight-head">
            <span className="eyebrow">Fabric weight / GSM</span>
            <h3>
              Weight <em>matters.</em>
            </h3>
            <p>Garment weight can be tailored to use case. Exact GSM ranges are confirmed per garment with Crest Studio.</p>
          </div>
          <div className="cust-weight-grid">
            {weightClasses.map((weight, i) => (
              <div className="weight-card" key={weight.id}>
                <span className="weight-bars">
                  {[0, 1, 2].map((bar) => (
                    <i key={bar} className={bar <= i ? "filled" : ""} />
                  ))}
                </span>
                <strong>{weight.label}</strong>
                <p>{weight.description}</p>
                <span className="weight-note">{weight.gsmRange ?? "Range confirmed with Crest Studio"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · SLEEVES */}
      <section className="cust-sleeves" id="sleeves">
        <CustHead
          index="04"
          eyebrow="Capability / construction"
          title={<>Build<br /><em>the silhouette.</em></>}
          copy="Sleeve length changes how a kit moves and how it reads from the stands. Choose a cut or spec your own."
        />
        <div className="cust-stage-grid">
          <div className="cust-option-list">
            {sleeves.map((s) => (
              <button key={s.id} className={design.sleeve === s.id ? "selected" : ""} onClick={() => update("sleeve", s.id)}>
                <span>{s.name}</span>
                <small>{s.note}</small>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
          <div className="cust-stage-panel">
            <div key={design.sleeve} className="cust-stage-figure">
              <JerseySvg base={design.base} trim={design.trim} pattern={design.pattern} sleeve={design.sleeve} collar={design.collar} className="cust-stage-svg" ariaLabel={`${sleeves.find((s) => s.id === design.sleeve)?.name} sleeve silhouette`} />
            </div>
            <span className="cust-stage-caption">Sleeve / {sleeves.find((s) => s.id === design.sleeve)?.name.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* 07 · COLLARS */}
      <section className="cust-collars" id="collars">
        <CustHead
          index="05"
          eyebrow="Capability / construction"
          title={<>The collar,<br /><em>shaped.</em></>}
          copy="Shape, color, material and trim. The neckline is where most of a kit&apos;s identity gets close to the player."
        />
        <div className="cust-stage-grid">
          <div>
            <div className="cust-option-list">
              {collars.map((c) => (
                <button key={c.id} className={design.collar === c.id ? "selected" : ""} onClick={() => update("collar", c.id)}>
                  <span>{c.name}</span>
                  <small>{c.note}</small>
                  <ArrowRight size={16} />
                </button>
              ))}
            </div>
            <div className="collar-colorways">
              <span className="colorway-label">Same polo / four collar colorways</span>
              <div className="colorway-chips">
                {collarColorways.map((colorway) => (
                  <button
                    key={colorway.id}
                    className="colorway-chip"
                    onClick={() => {
                      update("base", colorway.body);
                      update("trim", colorway.trim);
                    }}
                    aria-label={`Apply ${colorway.name} colorway`}
                  >
                    <i style={{ background: colorway.body }} />
                    <i style={{ background: colorway.trim }} />
                    <span>{colorway.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="cust-stage-panel">
            <div key={design.collar} className="cust-stage-figure cust-stage-zoom">
              <JerseySvg base={design.base} trim={design.trim} collar={design.collar} zoom className="cust-stage-svg" ariaLabel={`${collars.find((c) => c.id === design.collar)?.name} neckline detail`} />
            </div>
            <span className="cust-stage-caption">Collar / {collars.find((c) => c.id === design.collar)?.name.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* 08 · HOODS */}
      <section className="cust-hoods" id="hoods">
        <CustHead
          index="06"
          eyebrow="Capability / construction"
          title={<>Hood<br /><em>options.</em></>}
          copy="Depending on the product, hoods can be built standard, performance-cut, contrast-lined or fully custom."
        />
        <div className="cust-hood-grid">
          {hoods.map((hood) => (
            <div className="hood-card" key={hood.id}>
              <span className={`hood-figure hood-${hood.id}`}>
                <i />
              </span>
              <strong>{hood.name}</strong>
              <p>{hood.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 09 · CONSTRUCTION & STITCHING */}
      <section className="cust-construction" id="construction">
        <CustHead
          index="07"
          eyebrow="Capability / construction"
          title={<>Built from<br /><em>the seams up.</em></>}
          copy="MEC customization is not limited to graphics. Where production allows, the garment itself can be re-cut, re-paneled and re-seamed."
        />
        <div className="cust-construction-layout">
          <ul className="cust-feature-list">
            {constructionFeatures.map((feature, i) => (
              <li key={feature.name}>
                <span>0{i + 1}</span>
                <strong>{feature.name}</strong>
                <p>{feature.note}</p>
              </li>
            ))}
          </ul>
          <div className="cust-exploded">
            <div className="exploded-layer layer-1">
              <JerseySvg base="#d9e2de" trim="#1e2420" sleeve="short" collar="crew" showSeams className="cust-stage-svg" />
            </div>
            <div className="exploded-layer layer-2">
              <JerseySvg base="#e2ef28" trim="#1e2420" sleeve="long" collar="contrast" showSeams className="cust-stage-svg" />
            </div>
            <div className="exploded-layer layer-3">
              <JerseySvg base="#e7664e" trim="#e9eee9" pattern="topographic" sleeve="half" collar="rib" number="09" showSeams className="cust-stage-svg" />
            </div>
            <span className="exploded-label label-1">Shell</span>
            <span className="exploded-label label-2">Seams</span>
            <span className="exploded-label label-3">Trim</span>
          </div>
        </div>
        <p className="cust-footnote">Available depending on garment type and production requirements.</p>
      </section>

      {/* 10 · DESIGN APPLICATIONS */}
      <section className="cust-applications" id="applications">
        <CustHead
          index="08"
          eyebrow="Capability / application"
          title={<>How your design<br /><em>becomes the garment.</em></>}
          copy="The same artwork lands differently depending on how it is applied. Each method has its own feel, finish and ideal use."
        />
        <div className="app-grid">
          {applications.map((application) => (
            <article className="app-card" key={application.id}>
              <div className={`app-visual app-${application.visual}`} />
              <h3>{application.name}</h3>
              <p>{application.description}</p>
              <span className="app-ideal">Ideal for {application.ideal}</span>
            </article>
          ))}
        </div>
        <p className="cust-footnote">Processes shown are those MEC supports. The list lives in one data file, so options can evolve with production.</p>
      </section>

      {/* 11 · LOGOS & PLACEMENT */}
      <section className="cust-logos" id="logos">
        <CustHead
          index="09"
          eyebrow="Capability / identity"
          title={<>Make it<br /><em>yours.</em></>}
          copy="Crests, marks and sponsors can sit almost anywhere. Select a position on the garment to see where identity lands."
        />
        <div className="cust-placement-layout">
          <div className="cust-placement-panel">
            <div className="cust-placement-toggle">
              <button className={placeView === "front" ? "selected" : ""} onClick={() => { setPlaceView("front"); setActivePlacement(null); }}>
                Front
              </button>
              <button className={placeView === "back" ? "selected" : ""} onClick={() => { setPlaceView("back"); setActivePlacement(null); }}>
                Back
              </button>
            </div>
            <JerseySvg
              base={design.base}
              trim={design.trim}
              pattern={design.pattern}
              sleeve={design.sleeve}
              collar={design.collar}
              view={placeView}
              hotspots={placeList}
              activeHotspot={activePlacement}
              onHotspot={setActivePlacement}
              className="cust-stage-svg"
              ariaLabel="Logo placement diagram"
            />
          </div>
          <ul className="cust-placement-list">
            {placeList.map((placement) => (
              <li key={placement.id}>
                <button className={activePlacement === placement.id ? "selected" : ""} onClick={() => setActivePlacement(placement.id)}>
                  {placement.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12 · PLAYER PERSONALIZATION */}
      <section className="cust-personalization" id="personalization">
        <CustHead
          index="10"
          eyebrow="Capability / identity"
          title={<>The roster,<br /><em>personalized.</em></>}
          copy="Names, numbers and marks turn a kit into a roster. Set the spec and watch it land on the back of the garment."
        />
        <div className="cust-spec-layout">
          <div className="cust-spec-panel">
            <div className="spec-row">
              <span>Player name</span>
              <input value={design.name} onChange={(event) => update("name", event.target.value.toUpperCase().slice(0, 14))} placeholder="SURNAME" />
            </div>
            <div className="spec-row">
              <span>Player number</span>
              <input value={design.number} onChange={(event) => update("number", event.target.value.replace(/\D/g, "").slice(0, 2))} placeholder="11" inputMode="numeric" />
            </div>
            {personalizationFields.slice(2).map((field) => (
              <div className="spec-row" key={field}>
                <span>{field}</span>
                <input />
              </div>
            ))}
          </div>
          <div className="cust-spec-jersey">
            <JerseySvg
              base={design.base}
              trim={design.trim}
              pattern={design.pattern}
              sleeve={design.sleeve}
              collar={design.collar}
              number={design.number}
              name={design.name}
              view="back"
              className="cust-stage-svg"
              ariaLabel="Kit specification preview"
            />
          </div>
        </div>
      </section>

      {/* 13 · PATTERNS */}
      <section className="cust-patterns" id="patterns">
        <CustHead
          index="11"
          eyebrow="Capability / artwork"
          title={<>From simple<br /><em>to complex.</em></>}
          copy="Original pattern families drawn in-house, from clean solids to contour work built on summit elevation data."
        />
        <div className="pattern-grid">
          {patterns.map((pattern) => (
            <button key={pattern.id} className={design.pattern === pattern.id ? "pattern-card selected" : "pattern-card"} onClick={() => update("pattern", pattern.id)}>
              <JerseySvg base="#e2ef28" trim="#1e2420" pattern={pattern.id} sleeve="short" collar="crew" className="pattern-svg" ariaLabel={`${pattern.name} pattern`} />
              <span>{pattern.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 14 · TEXTURES */}
      <section className="cust-textures" id="textures">
        <CustHead
          index="12"
          eyebrow="Capability / detail"
          title={<>Detail you<br /><em>can feel.</em></>}
          copy="Surface texture changes everything at arm&apos;s length. Close-up studies here stand in for studio photography."
        />
        <div className="texture-grid">
          {textures.map((texture) => (
            <div className="texture-card" key={texture.id}>
              <div className={`texture-tile t-${texture.id}`} />
              <span>{texture.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 15 · BUILD-A-GARMENT DEMO */}
      <section className="cust-builder" id="builder">
        <CustHead
          index="13"
          eyebrow="Crest studio / workflow"
          title={<>Build your kit,<br /><em>step by step.</em></>}
          copy="A working demonstration of the MEC workflow. Nothing is submitted. The final step hands the spec to Crest Studio."
        />
        <div className="builder-shell">
          <ol className="builder-steps">
            {buildSteps.map((s, i) => (
              <li key={s.key} className={i === step ? "current" : i < step ? "done" : ""}>
                <span>{s.index}</span>
                {s.title}
              </li>
            ))}
          </ol>
          <div className="builder-panel">
            <div className="builder-content">
              {step === 0 && (
                <div className="builder-options">
                  {garments.map((g) => (
                    <button key={g.id} className={build.garment === g.id ? "chip selected" : "chip"} onClick={() => setBuildField("garment", g.id)}>
                      {g.name}
                    </button>
                  ))}
                </div>
              )}
              {step === 1 && (
                <div className="builder-options">
                  {CONSTRUCTION_OPTIONS.map((option) => (
                    <button key={option} className={build.construction === option ? "chip selected" : "chip"} onClick={() => setBuildField("construction", option)}>
                      {option}
                    </button>
                  ))}
                </div>
              )}
              {step === 2 && (
                <div className="builder-options">
                  {fabrics.map((fabric) => (
                    <button key={fabric.id} className={build.material === fabric.name ? "chip selected" : "chip"} onClick={() => setBuildField("material", fabric.name)}>
                      {fabric.name}
                    </button>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div className="builder-options">
                  {SWATCHES.map((swatch) => (
                    <button
                      key={swatch.hex}
                      className={build.color === swatch.hex ? "builder-swatch selected" : "builder-swatch"}
                      style={{ background: swatch.hex }}
                      aria-label={swatch.name}
                      onClick={() => setBuildField("color", swatch.hex)}
                    />
                  ))}
                </div>
              )}
              {step === 4 && (
                <div className="builder-options">
                  {patterns.map((pattern) => (
                    <button key={pattern.id} className={build.artwork === pattern.id ? "chip selected" : "chip"} onClick={() => setBuildField("artwork", pattern.id)}>
                      {pattern.name}
                    </button>
                  ))}
                </div>
              )}
              {step === 5 && (
                <div className="builder-options">
                  {LOGO_OPTIONS.map((option) => (
                    <button key={option} className={build.logos === option ? "chip selected" : "chip"} onClick={() => setBuildField("logos", option)}>
                      {option}
                    </button>
                  ))}
                </div>
              )}
              {step === 6 && (
                <div className="builder-inputs">
                  <label>
                    Player name
                    <input value={build.name} onChange={(event) => setBuildField("name", event.target.value.toUpperCase().slice(0, 14))} placeholder="SURNAME" />
                  </label>
                  <label>
                    Player number
                    <input value={build.number} onChange={(event) => setBuildField("number", event.target.value.replace(/\D/g, "").slice(0, 2))} placeholder="11" inputMode="numeric" />
                  </label>
                </div>
              )}
              {step === 7 && (
                <dl className="builder-review">
                  {[
                    ["Garment", garments.find((g) => g.id === build.garment)?.name],
                    ["Construction", build.construction],
                    ["Material", build.material],
                    ["Color", SWATCHES.find((s) => s.hex === build.color)?.name],
                    ["Artwork", patterns.find((p) => p.id === build.artwork)?.name],
                    ["Logos", build.logos],
                    ["Name", build.name || "Not set"],
                    ["Number", build.number || "Not set"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <div className="builder-preview">
              <JerseySvg
                base={build.color}
                trim="#1e2420"
                pattern={build.artwork}
                sleeve="short"
                collar="crew"
                number={build.number || "00"}
                name={build.name}
                view="back"
                className="cust-stage-svg"
                ariaLabel="Builder preview"
              />
              <span>{buildSteps[step].index} / 08 · {buildSteps[step].title}</span>
            </div>
            <div className="builder-nav">
              <button className="builder-back" disabled={step === 0} onClick={() => setStep(step - 1)}>
                <ChevronLeft size={15} /> Back
              </button>
              {step < 7 ? (
                <button className="builder-next" onClick={() => setStep(step + 1)}>
                  Next <ChevronRight size={15} />
                </button>
              ) : (
                <a className="button button-lime" href="#brief">
                  Start my project <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 16 · GALLERY */}
      <section className="cust-gallery" id="gallery">
        <CustHead
          index="14"
          eyebrow="Crest studio / archive"
          title={<>What&apos;s<br /><em>possible.</em></>}
          copy="Real production pieces from the bench, photographed in the studio, plus studies from the drawing board. The archive grows as new pieces ship."
        />
        <div className="gallery-filters">
          <div className="gallery-filter-row">
            {galleryCategories.map((c) => (
              <button key={c} className={category === c ? "selected" : ""} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="gallery-filter-row">
            {galleryTechniques.map((t) => (
              <button key={t} className={technique === t ? "selected" : ""} onClick={() => setTechnique(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-meta-line">
          <span>
            {filteredExamples.length} {filteredExamples.length === 1 ? "piece" : "pieces"} shown
          </span>
          <span>Archive capacity / 40–60+</span>
        </div>
        <div className="gallery-grid">
          {filteredExamples.map((example, i) => (
            <button className="gallery-card" key={example.id} onClick={() => setLightbox(i)}>
              {example.image ? (
                <Image className="gallery-photo" src={example.image} alt={example.title} width={example.imageWidth ?? 900} height={example.imageHeight ?? 900} loading="lazy" />
              ) : example.design ? (
                <JerseySvg
                  base={example.design.base}
                  trim={example.design.trim}
                  pattern={example.design.pattern}
                  sleeve={example.design.sleeve}
                  collar={example.design.collar}
                  number={example.design.number}
                  gradientStops={example.design.gradientStops}
                  className="gallery-jersey"
                  ariaLabel={example.title}
                />
              ) : (
                <div className="gallery-detail-tile">
                  <span>{example.application}</span>
                </div>
              )}
              <div className="gallery-meta">
                <h3>{example.title}</h3>
                <span>
                  {example.sport} / {example.material}
                </span>
                <div className="gallery-tags">
                  {example.tags.map((tag) => (
                    <i key={tag}>{tag}</i>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 17 · CAPABILITY MATRIX */}
      <section className="cust-matrix" id="matrix">
        <CustHead
          index="15"
          eyebrow="Capability / index"
          title={<>The<br /><em>possibilities.</em></>}
          copy="One index of everything the studio can shape. The short version of what Crest Studio works through with you."
        />
        <div className="matrix-grid">
          {capabilityMatrix.map((column) => (
            <div className="matrix-col" key={column.group}>
              <h3>{column.group}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 18 · CLOSING CTA */}
      <section className="cust-imagine" id="imagine">
        <span className="eyebrow lime">Crest studio / projects</span>
        <h2>
          If you can imagine it,
          <br />
          <em>let&apos;s find a way to build it.</em>
        </h2>
        <p>MEC projects are not limited to a fixed template. Bring us the idea, reference, sketch or specification and we&apos;ll work through what&apos;s possible.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#brief">
            Start a custom project <ArrowRight size={17} />
          </a>
          <a className="text-link light-link" href="mailto:teams@mounteverestcrest.com">
            Talk to Crest Studio <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* 19 · PROJECT BRIEF FORM */}
      <section className="cust-brief" id="brief">
        <CustHead
          index="16"
          eyebrow="Crest studio / intake"
          title={<>Start a<br /><em>custom project.</em></>}
          copy="A creative project brief, not a contact form. Tell us where the team is headed and the studio will work through what&apos;s possible."
        />
        {submitted ? (
          <div className="brief-confirm">
            <strong>Brief drafted.</strong>
            <p>This form is a front-end prototype. Submissions are not sent anywhere yet. To actually start, send the same details to teams@mounteverestcrest.com.</p>
          </div>
        ) : (
          <form className="brief-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="brief-grid">
              <label>
                Name *
                <input required placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Email *
                <input required type="email" placeholder="you@team.com" autoComplete="email" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+1 555 000 0000" autoComplete="tel" />
              </label>
              <label>
                Organization / team
                <input placeholder="Team name" />
              </label>
              <label>
                Sport
                <select defaultValue="">
                  <option value="" disabled>
                    Choose a sport
                  </option>
                  {["Football", "Soccer", "Cricket", "Pickleball", "Basketball", "Volleyball", "Running", "Athleisure", "Other"].map((sport) => (
                    <option key={sport}>{sport}</option>
                  ))}
                </select>
              </label>
              <label>
                Garment type
                <select defaultValue="">
                  <option value="" disabled>
                    Choose a garment
                  </option>
                  {garments.map((g) => (
                    <option key={g.id}>{g.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Estimated quantity
                <input inputMode="numeric" placeholder="e.g. 15 kits" />
              </label>
              <label>
                Target date
                <input type="date" />
              </label>
              <label>
                Preferred contact method
                <select defaultValue="Email">
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                </select>
              </label>
              <label>
                Budget range
                <select defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Under $500</option>
                  <option>$500 – $2,500</option>
                  <option>$2,500 – $10,000</option>
                  <option>$10,000+</option>
                </select>
              </label>
              <label className="brief-wide">
                What do you want to create? *
                <textarea required rows={4} placeholder="Silhouettes, colors, crest, names, numbers, references, anything that helps the studio understand the project." />
              </label>
              <label className="brief-wide">
                Upload reference
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                />
                <span className="file-note">
                  {fileName ? `Attached: ${fileName} (not uploaded, prototype only)` : "Sketches, existing jerseys, logos, moodboards. Not uploaded yet, this is a prototype."}
                </span>
              </label>
            </div>
            <div className="brief-submit">
              <button className="button button-dark" type="submit">
                Start my project <ArrowRight size={16} />
              </button>
              <span className="form-note">
                Front-end prototype. Nothing is sent yet. For a real project, email teams@mounteverestcrest.com.
              </span>
            </div>
          </form>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightboxExample && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <X size={22} />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Previous example"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox((lightbox ?? 0) === 0 ? filteredExamples.length - 1 : (lightbox ?? 0) - 1);
            }}
          >
            <ChevronLeft size={26} />
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className={lightboxExample.image ? "lightbox-visual lightbox-visual-photo" : "lightbox-visual"}>
              {lightboxExample.image ? (
                <Image className="lightbox-photo" src={lightboxExample.image} alt={lightboxExample.title} width={lightboxExample.imageWidth ?? 900} height={lightboxExample.imageHeight ?? 900} loading="eager" />
              ) : lightboxExample.design ? (
                <JerseySvg
                  base={lightboxExample.design.base}
                  trim={lightboxExample.design.trim}
                  pattern={lightboxExample.design.pattern}
                  sleeve={lightboxExample.design.sleeve}
                  collar={lightboxExample.design.collar}
                  number={lightboxExample.design.number}
                  gradientStops={lightboxExample.design.gradientStops}
                  className="lightbox-jersey"
                  ariaLabel={lightboxExample.title}
                />
              ) : (
                <div className="gallery-detail-tile">
                  <span>{lightboxExample.application}</span>
                </div>
              )}
            </div>
            <div className="lightbox-meta">
              <span className="eyebrow lime">
                {lightboxExample.category} / {lightboxExample.application}
              </span>
              <h3>{lightboxExample.title}</h3>
              <p>{lightboxExample.description}</p>
              <div className="gallery-tags">
                {lightboxExample.tags.map((tag) => (
                  <i key={tag}>{tag}</i>
                ))}
              </div>
              <span className="lightbox-count">
                {String((lightbox ?? 0) + 1).padStart(2, "0")} / {String(filteredExamples.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            aria-label="Next example"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox(((lightbox ?? 0) + 1) % filteredExamples.length);
            }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </main>
  );
}
