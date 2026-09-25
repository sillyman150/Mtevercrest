"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";

// Grace period between leaving the Sports menu and closing it,
// so moving from the trigger into the dropdown never flickers it shut.
const SPORTS_CLOSE_DELAY = 150;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSportsOpen, setMobileSportsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const sportsRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const hoverCapable = useRef(false);

  useEffect(() => {
    hoverCapable.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openSports = () => {
    cancelClose();
    setSportsOpen(true);
  };

  const closeSports = () => {
    cancelClose();
    setSportsOpen(false);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setSportsOpen(false), SPORTS_CLOSE_DELAY);
  };

  // Escape closes every open surface.
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setMobileSportsOpen(false);
      setSearchOpen(false);
      setCartOpen(false);
      setSportsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Clicking outside the Sports menu closes it.
  useEffect(() => {
    const handlePointer = (event: MouseEvent) => {
      if (sportsRef.current && !sportsRef.current.contains(event.target as Node)) setSportsOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    return () => document.removeEventListener("mousedown", handlePointer);
  }, []);

  // Navigating to another page closes every open surface.
  // Render-time adjustment (no effect). React re-renders before committing.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setMobileSportsOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
    setSportsOpen(false);
  }

  const isActive = (href: string) => (href === "/sports" ? pathname.startsWith("/sports") : pathname === href);

  return (
    <>
      <header className="site-header">
        <div className="utility-bar">
          <span>
            EVEREST ATHLETICS <i /> CREST STUDIO
          </span>
          <nav>
            <Link href="/#story">Journal</Link>
            <Link href="/#footer">Sign in</Link>
          </nav>
        </div>
        <div className="main-nav">
          <button className="mobile-menu-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={20} />
          </button>
          <Link className="brand-mark" href="/" aria-label="Mount Everest Crest home">
            <span className="crest">M</span>
            <span>
              MOUNT EVEREST
              <br />
              <b>CREST</b>
            </span>
          </Link>
          <nav className="desktop-links">
            {primaryNavigation.map((item) =>
              item.children ? (
                <div
                  className="sports-menu"
                  key={item.label}
                  ref={sportsRef}
                  onMouseEnter={() => {
                    if (hoverCapable.current) openSports();
                  }}
                  onMouseLeave={() => {
                    if (hoverCapable.current) scheduleClose();
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) closeSports();
                  }}
                >
                  <Link
                    href="/sports"
                    className={isActive("/sports") ? "active-nav" : ""}
                    aria-current={isActive("/sports") ? "page" : undefined}
                    aria-expanded={sportsOpen}
                    aria-haspopup="true"
                    onClick={closeSports}
                  >
                    {item.label} <ChevronDown size={14} />
                  </Link>
                  {sportsOpen && (
                    <div className="sports-dropdown" aria-label="Sports">
                      <span className="eyebrow">Choose your arena</span>
                      {item.children.map((sport) => (
                        <Link href={sport.href} key={sport.name} onClick={closeSports}>
                          {sport.name}
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                      <Link className="dropdown-all" href="/sports" onClick={closeSports}>
                        View all sports <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href as string}
                  className={isActive(item.href as string) ? "active-nav" : ""}
                  aria-current={isActive(item.href as string) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="nav-actions">
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={19} />
            </button>
            <button aria-label="Favorites" onClick={() => setSaved(!saved)} className={saved ? "active-icon" : ""}>
              <Heart size={19} fill={saved ? "currentColor" : "none"} />
            </button>
            <button aria-label="Shopping bag" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={19} />
              <sup>0</sup>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-panel">
          <div className="panel-head">
            <span className="eyebrow">Explore MEC</span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav>
            {primaryNavigation.map((item) =>
              item.children ? (
                <div className="mobile-sports" key={item.label}>
                  <button aria-expanded={mobileSportsOpen} onClick={() => setMobileSportsOpen(!mobileSportsOpen)}>
                    {item.label}
                    {mobileSportsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {mobileSportsOpen && (
                    <div className="mobile-sports-list">
                      {item.children.map((sport) => (
                        <Link href={sport.href} key={sport.name} onClick={() => setMenuOpen(false)}>
                          {sport.name}
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href as string} onClick={() => setMenuOpen(false)}>
                  {item.label}
                  <ArrowRight size={18} />
                </Link>
              )
            )}
          </nav>
          <div className="panel-foot">
            Help &amp; support <span>Join MEC</span>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="search-panel">
          <button className="close-search" aria-label="Close search" onClick={() => setSearchOpen(false)}>
            <X size={22} />
          </button>
          <span className="eyebrow">Search the collection</span>
          <label>
            <Search size={26} />
            <input autoFocus placeholder="What are you looking for?" />
          </label>
          <div className="popular">
            <span>Popular</span>
            <Link href="/collection">Custom jerseys</Link>
            <Link href="/sports">Football kits</Link>
            <Link href="/customize">Team uniforms</Link>
            <Link href="/collection">Quarter zips</Link>
          </div>
        </div>
      )}

      {cartOpen && (
        <aside className="cart-drawer">
          <div className="drawer-head">
            <div>
              <span className="eyebrow">Your bag</span>
              <h2>Ready when you are.</h2>
            </div>
            <button aria-label="Close bag" onClick={() => setCartOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="empty-bag">
            <div className="bag-orbit">
              <ShoppingBag size={24} />
            </div>
            <p>Your bag is waiting for its first piece.</p>
            <Link href="/#products" onClick={() => setCartOpen(false)}>
              Explore essentials <ArrowRight size={16} />
            </Link>
          </div>
          <div className="drawer-foot">
            <div>
              <span>Subtotal</span>
              <strong>$0.00</strong>
            </div>
            <button className="button button-dark" disabled>
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
