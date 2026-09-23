import { useId } from "react";
import type { CollarId, PatternId, Placement, SleeveId } from "@/data/customize";

// Parametric garment used across the Customize experience.
// One SVG source of truth so previews, diagrams, the builder and the
// gallery stay consistent, and real photography can replace any
// instance later without touching the surrounding page.

const BODY = "M82 16 C94 8 126 8 138 16 L162 34 L170 62 L170 210 C170 224 158 235 110 235 C62 235 50 224 50 210 L50 62 L58 34 Z";

const SLEEVE_LENGTH: Record<SleeveId, number> = {
  sleeveless: 0,
  cap: 18,
  short: 46,
  half: 84,
  threequarter: 128,
  long: 164,
  custom: 164,
};

const leftSleeve = (len: number) =>
  `M84 18 L16 34 L12 ${34 + len} C30 ${50 + len * 0.6} 44 ${56 + len * 0.6} 54 ${64 + len * 0.7} Z`;
const rightSleeve = (len: number) =>
  `M136 18 L204 34 L208 ${34 + len} C190 ${50 + len * 0.6} 176 ${56 + len * 0.6} 166 ${64 + len * 0.7} Z`;

const NECK: Record<CollarId, string> = {
  crew: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
  v: "M82 24 L110 54 L138 24 Q110 38 82 24 Z",
  polo: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
  stand: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
  contrast: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
  rib: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
  custom: "M80 27 Q110 7 140 27 Q110 41 80 27 Z",
};

// Deterministic wavy loops used as the original MEC topographic motif.
function topoWave(cx: number, cy: number, rx: number, ry: number, seed: number) {
  const pts = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    const wob = Math.sin(i * 2.3 + seed) * rx * 0.18;
    return [cx + Math.cos(a) * (rx + wob), cy + Math.sin(a) * (ry + wob * 0.7)];
  });
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    d += ` Q ${x0.toFixed(1)} ${y0.toFixed(1)} ${((x0 + x1) / 2).toFixed(1)} ${((y0 + y1) / 2).toFixed(1)}`;
  }
  return `${d} Z`;
}

const TOPO_PATHS = [0, 1, 2, 3, 4].map((i) => topoWave(110, 132, 30 + i * 17, 44 + i * 19, i * 2.1));

const isLight = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const DISPLAY = "'Barlow Condensed', sans-serif";
const LABEL = "'Manrope', sans-serif";

type JerseySvgProps = {
  base: string;
  trim?: string;
  pattern?: PatternId;
  sleeve?: SleeveId;
  collar?: CollarId;
  number?: string;
  name?: string;
  mark?: string;
  view?: "front" | "back";
  showSeams?: boolean;
  zoom?: boolean;
  hotspots?: Placement[];
  activeHotspot?: string | null;
  onHotspot?: (id: string) => void;
  className?: string;
  ariaLabel?: string;
  // Vertical three-stop body fade for the gradient series.
  gradientStops?: [string, string, string];
};

function PatternDefs({ uid, gradientStops }: { uid: string; gradientStops?: [string, string, string] }) {
  return (
    <defs>
      <linearGradient id={`${uid}-shade`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
        <stop offset="30%" stopColor="#fff" stopOpacity="0" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
      </linearGradient>
      {gradientStops && (
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientStops[0]} />
          <stop offset="50%" stopColor={gradientStops[1]} />
          <stop offset="100%" stopColor={gradientStops[2]} />
        </linearGradient>
      )}
      <pattern id={`${uid}-stripe`} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="24" height="24" fill="none" />
        <rect width="10" height="24" fill="#fff" opacity="0.16" />
      </pattern>
      <pattern id={`${uid}-geo`} width="34" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 30 L17 0 L34 30 Z" fill="none" stroke="#fff" strokeOpacity="0.22" />
        <circle cx="17" cy="19" r="3.2" fill="#fff" fillOpacity="0.16" />
      </pattern>
      <pattern id={`${uid}-topo`} width="220" height="240" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="#fff">
          {TOPO_PATHS.map((d, i) => (
            <path key={i} d={d} strokeOpacity={0.3 - i * 0.05} strokeWidth={i % 2 === 0 ? 1.6 : 1} />
          ))}
        </g>
      </pattern>
      <pattern id={`${uid}-abstract`} width="90" height="90" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="22" r="11" fill="#fff" opacity="0.13" />
        <circle cx="66" cy="58" r="16" fill="none" stroke="#fff" strokeOpacity="0.18" />
        <path d="M8 72 Q30 54 56 72 T92 64" fill="none" stroke="#fff" strokeOpacity="0.15" />
      </pattern>
      <pattern id={`${uid}-heritage`} width="220" height="44" patternUnits="userSpaceOnUse">
        <rect width="220" height="22" fill="#fff" opacity="0.15" />
      </pattern>
      <pattern id={`${uid}-digital`} width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="2.5" cy="2.5" r="1.5" fill="#fff" opacity="0.22" />
      </pattern>
    </defs>
  );
}

export default function JerseySvg({
  base,
  trim = "#1e2420",
  pattern = "solid",
  sleeve = "short",
  collar = "crew",
  number,
  name,
  mark = "MEC",
  view = "front",
  showSeams = false,
  zoom = false,
  hotspots,
  activeHotspot,
  onHotspot,
  className,
  ariaLabel = "MEC garment preview",
  gradientStops,
}: JerseySvgProps) {
  const uid = useId().replace(/:/g, "");
  const leftLen = sleeve === "custom" ? SLEEVE_LENGTH.short : SLEEVE_LENGTH[sleeve];
  const rightLen = SLEEVE_LENGTH[sleeve];
  const hasSleeves = leftLen > 0 || rightLen > 0;
  // A three-stop body fade when the gradient series provides one; the
  // soft two-tone overlay keeps gradient swatches without explicit stops.
  const fadeFill = pattern === "gradient" ? (gradientStops ? `url(#${uid}-fade)` : `url(#${uid}-grad)`) : null;
  const overlayFill = pattern !== "solid" && pattern !== "gradient" && pattern !== "custom" ? `url(#${uid}-${pattern})` : null;
  const markFill = isLight(trim) ? "#19201b" : "#e9eee9";

  return (
    <svg
      viewBox={zoom ? "60 -8 100 86" : "0 0 220 240"}
      className={className}
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
    >
      <PatternDefs uid={uid} gradientStops={gradientStops} />
      <mask id={`${uid}-mask`}>
        <path d={BODY} fill="#fff" />
        <path d={NECK[collar]} fill="#000" />
      </mask>

      {!zoom && <ellipse cx="110" cy="232" rx="82" ry="8" fill="rgba(0,0,0,0.16)" />}

      {!zoom && hasSleeves && (
        <g>
          {leftLen > 0 && (
            <>
              <path d={leftSleeve(leftLen)} fill={base} stroke="rgba(25,32,27,0.18)" strokeWidth="1" />
              {fadeFill && <path d={leftSleeve(leftLen)} fill={fadeFill} />}
              <path d={leftSleeve(leftLen)} fill={`url(#${uid}-shade)`} />
            </>
          )}
          {rightLen > 0 && (
            <>
              <path d={rightSleeve(rightLen)} fill={base} stroke="rgba(25,32,27,0.18)" strokeWidth="1" />
              {fadeFill && <path d={rightSleeve(rightLen)} fill={fadeFill} />}
              <path d={rightSleeve(rightLen)} fill={`url(#${uid}-shade)`} />
            </>
          )}
          {rightLen >= 100 && (
            <g stroke="rgba(25,32,27,0.35)" strokeWidth="1.2">
              <line x1="186" y1={34 + rightLen - 14} x2="208" y2={34 + rightLen - 14} />
              {leftLen >= 100 && <line x1="12" y1={34 + leftLen - 14} x2="34" y2={34 + leftLen - 14} />}
            </g>
          )}
        </g>
      )}

      <g mask={`url(#${uid}-mask)`}>
        <path d={BODY} fill={base} stroke="rgba(25,32,27,0.18)" strokeWidth="1" />
        {fadeFill && <path d={BODY} fill={fadeFill} />}
        {overlayFill && <path d={BODY} fill={overlayFill} />}
        <path d={BODY} fill={`url(#${uid}-shade)`} />
        {pattern === "custom" && !zoom && (
          <g transform="translate(110 118)">
            <path d="M0 -44 L40 24 L-40 24 Z" fill="none" stroke={trim} strokeOpacity="0.55" strokeWidth="2" />
            <circle cx="0" cy="8" r="3.4" fill={trim} fillOpacity="0.7" />
            <text x="0" y="11" textAnchor="middle" fontFamily={DISPLAY} fontSize="13" fontWeight="800" fill={trim} fillOpacity="0.8" letterSpacing="2">
              MEC
            </text>
          </g>
        )}
      </g>

      {showSeams && !zoom && (
        <g stroke="rgba(25,32,27,0.3)" strokeWidth="1" strokeDasharray="3 4" fill="none">
          <path d="M86 20 L32 42" />
          <path d="M134 20 L188 42" />
          <path d="M58 34 Q54 48 50 62" />
          <path d="M162 34 Q166 48 170 62" />
          <path d="M50 62 L50 210" />
          <path d="M170 62 L170 210" />
          <path d="M50 210 Q110 222 170 210" />
        </g>
      )}

      {(collar === "polo" || collar === "stand" || collar === "contrast" || collar === "rib" || collar === "custom") && (
        <g>
          {collar === "polo" ? (
            <g stroke={trim} strokeWidth="2">
              <line x1="110" y1="27" x2="110" y2="62" />
              <circle cx="110" cy="48" r="2.2" fill={trim} stroke="none" />
              <circle cx="110" cy="56" r="2.2" fill={trim} stroke="none" />
            </g>
          ) : (
            <g>
              <path d="M84 32 Q110 14 136 32" fill="none" stroke={trim} strokeWidth={collar === "contrast" ? 8 : 6} strokeLinecap="round" opacity="0.9" />
              {collar === "rib" && (
                <g stroke={trim} strokeWidth="1.4" opacity="0.8">
                  <line x1="98" y1="22.5" x2="98" y2="31" />
                  <line x1="106" y1="20.2" x2="106" y2="29" />
                  <line x1="114" y1="20.2" x2="114" y2="29" />
                  <line x1="122" y1="22.5" x2="122" y2="31" />
                </g>
              )}
              {collar === "custom" && (
                <g>
                  <rect x="130" y="16" width="16" height="11" fill={trim} opacity="0.9" />
                  <text x="138" y="25" textAnchor="middle" fontFamily={DISPLAY} fontSize="9" fontWeight="800" fill={markFill}>
                    MEC
                  </text>
                </g>
              )}
            </g>
          )}
        </g>
      )}

      {!zoom && (
        <g fontFamily={DISPLAY} fill={trim} opacity="0.95">
          {view === "front" ? (
            <>
              <text x="53" y="84" fontSize="15" fontWeight="900" letterSpacing="1">
                {mark}
              </text>
              {number && (
                <text x="110" y="158" textAnchor="middle" fontWeight="900" fontSize="88">
                  {number}
                </text>
              )}
            </>
          ) : (
            <>
              <text x="110" y="50" textAnchor="middle" fontSize="11" fontWeight="900" letterSpacing="2">
                {mark}
              </text>
              {number && (
                <text x="110" y="104" textAnchor="middle" fontWeight="900" fontSize="64">
                  {number}
                </text>
              )}
              {name && (
                <text x="110" y="146" textAnchor="middle" fontWeight="700" fontSize="25" letterSpacing="6">
                  {name}
                </text>
              )}
            </>
          )}
        </g>
      )}

      {hotspots && !zoom && (
        <g>
          {hotspots.map((h) => (
            <g
              key={h.id}
              onClick={() => onHotspot?.(h.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onHotspot?.(h.id);
                }
              }}
              role={onHotspot ? "button" : undefined}
              tabIndex={onHotspot ? 0 : undefined}
              aria-label={h.name}
              style={{ cursor: onHotspot ? "pointer" : "default" }}
            >
              <circle
                cx={h.x}
                cy={h.y}
                r={h.id === activeHotspot ? 12 : 8}
                fill={h.id === activeHotspot ? "var(--coral)" : "rgba(255,255,255,0.92)"}
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
              {h.id === activeHotspot && (
                <text
                  x={h.x}
                  y={h.y - 18}
                  textAnchor="middle"
                  fontFamily={LABEL}
                  fontSize="10"
                  fontWeight="800"
                  fill="var(--ink)"
                  stroke="var(--paper)"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  {h.name.toUpperCase()}
                </text>
              )}
            </g>
          ))}
        </g>
      )}

      {zoom && (
        <g stroke="var(--coral)" strokeOpacity="0.35" strokeWidth="0.6" strokeDasharray="4 5">
          <line x1="110" y1="-8" x2="110" y2="78" />
          <line x1="60" y1="26" x2="160" y2="26" />
        </g>
      )}
    </svg>
  );
}
