import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <Link className="brand-mark footer-brand" href="/" aria-label="Mount Everest Crest home">
          <span className="crest">M</span>
          <span>
            MOUNT EVEREST
            <br />
            <b>CREST</b>
          </span>
        </Link>
        <p>
          Built for the ascent.
          <br />
          Made for your team.
        </p>
        <div className="footer-cta">
          <span>Have a team in mind?</span>
          <a href="mailto:teams@mounteverestcrest.com">
            Talk to MEC <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <span>Shop</span>
          <Link href="/sports">Football</Link>
          <Link href="/sports">Soccer</Link>
          <Link href="/sports">Cricket</Link>
          <Link href="/sports">Athleisure</Link>
        </div>
        <div>
          <span>Customize</span>
          <Link href="/customize">Design your jersey</Link>
          <Link href="/#teams">Team orders</Link>
          <Link href="/#teams">Request a quote</Link>
          <Link href="/customize">Sizing guide</Link>
        </div>
        <div>
          <span>Help</span>
          <a href="mailto:teams@mounteverestcrest.com">Contact</a>
          <a href="#footer">Shipping &amp; returns</a>
          <a href="#footer">Order status</a>
          <a href="#footer">FAQ</a>
        </div>
        <div>
          <span>Follow the ascent</span>
          <a href="#footer">Instagram</a>
          <Link href="/#story">Journal</Link>
          <a href="#footer">Join MEC</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Mount Everest Crest</span>
        <span>Privacy / Terms / Accessibility</span>
        <span>
          Global / US <ChevronDown size={13} />
        </span>
      </div>
    </footer>
  );
}
