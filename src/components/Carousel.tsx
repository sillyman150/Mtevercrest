"use client";

// Reusable horizontal scroller built on native CSS scroll-snap.
// Cards keep their own design; the track handles swipe, drag, arrows
// and keyboard. No external dependencies.
//
// - touch / trackpad: native scroll + snap
// - mouse: drag with the pointer, shift+wheel, or the arrow buttons
// - keyboard: focus the track, then ← → (Home/End jump to the ends)
// - screen readers: role="region" with the provided label; buttons are labelled

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  /** Accessible name for the scrollable region, e.g. "Materials — choose the feel". */
  ariaLabel: string;
  /** Class applied to the scroll track; use it to set per-use card widths. */
  className?: string;
  children: React.ReactNode;
};

export default function Carousel({ ariaLabel, className = "", children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Drag-to-scroll for mouse users. `dragging` suppresses the click that
  // fires after a drag, so pattern-card selection only happens on real clicks.
  const drag = useRef({ startX: 0, startLeft: 0, active: false, moved: false });

  const updateButtons = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxLeft = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxLeft - 4);
  };

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(560, track.clientWidth * 0.8), behavior: "smooth" });
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const track = trackRef.current;
    if (!track) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollByPage(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      track.scrollTo({ left: event.key === "Home" ? 0 : track.scrollWidth, behavior: "smooth" });
    }
  };

  const onPointerDown = (event: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || event.pointerType !== "mouse") return;
    drag.current = { startX: event.clientX, startLeft: track.scrollLeft, active: true, moved: false };
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const track = trackRef.current;
    const state = drag.current;
    if (!track || !state.active) return;
    const delta = event.clientX - state.startX;
    if (Math.abs(delta) > 6) state.moved = true;
    if (state.moved) track.scrollLeft = state.startLeft - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  // A click fired straight after a drag is the drag's release, not a selection.
  const onClickCapture = (event: React.MouseEvent) => {
    if (drag.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <div
          ref={trackRef}
          className={`carousel-track ${className}`}
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          onScroll={updateButtons}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {children}
        </div>
        <div className="carousel-fade" aria-hidden="true" data-end={!canNext} />
      </div>
      <div className="carousel-controls">
        <span>Scroll to explore</span>
        <div>
          <button aria-label={`Previous — ${ariaLabel}`} onClick={() => scrollByPage(-1)} disabled={!canPrev}>
            <ChevronLeft size={18} />
          </button>
          <button aria-label={`Next — ${ariaLabel}`} onClick={() => scrollByPage(1)} disabled={!canNext}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
