import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mount Everest Crest | Built for the ascent",
  description: "Custom performance apparel for teams that expect more of themselves.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
